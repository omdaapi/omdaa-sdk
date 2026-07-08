#!/usr/bin/env node
/**
 * اختبار قوة تحمّل سيرفر Omdaa (Load / Stress Test)
 * يرسل موجات طلبات متزايدة ويقيس: زمن الاستجابة، توزيع الحالات، معدل النجاح، نقطة الانهيار
 * التشغيل: node scripts/load-test-omdaa.js
 */

const API_BASE = 'https://omdaa.com/api/v1';
const REQUEST_TIMEOUT_MS = 20_000;
const WAVES = [5, 15, 30, 50, 80, 120, 160, 200]; // طلبات متزامنة لكل موجة

const body = JSON.stringify({
  sessionId: 'load-test',
  to: '966500000000',
  message: 'اختبار تحميل',
});

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer load-test-invalid-token',
};

function log(msg, type = 'info') {
  const icons = { info: '📌', ok: '✅', warn: '⚠️', fail: '❌', chart: '📊' };
  console.log(`${icons[type] || '•'} ${msg}`);
}

function percentile(sortedArr, p) {
  if (!sortedArr.length) return 0;
  const i = Math.ceil((p / 100) * sortedArr.length) - 1;
  return sortedArr[Math.max(0, i)];
}

async function singleRequest() {
  const start = performance.now();
  let status = 0;
  let error = null;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), REQUEST_TIMEOUT_MS);
    const r = await fetch(API_BASE + '/messages/send-text', {
      method: 'POST',
      headers,
      body,
      signal: ctrl.signal,
    });
    clearTimeout(t);
    status = r.status;
  } catch (e) {
    error = e.name === 'AbortError' ? 'timeout' : e.message;
  }
  const duration = performance.now() - start;
  return { duration, status, error };
}

async function runWave(concurrency) {
  const start = performance.now();
  const promises = Array.from({ length: concurrency }, () => singleRequest());
  const results = await Promise.all(promises);
  const totalTime = performance.now() - start;

  const times = results.map((r) => r.duration).filter((t) => t > 0).sort((a, b) => a - b);
  const statusCounts = {};
  let timeouts = 0;
  let otherErrors = 0;
  for (const r of results) {
    if (r.error === 'timeout') timeouts++;
    else if (r.error) otherErrors++;
    else statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
  }

  const gotResponse = results.filter((r) => !r.error).length;
  const responseRate = ((gotResponse / results.length) * 100).toFixed(1);
  const ok = results.filter((r) => r.status === 200).length;
  const avgMs = times.length ? (times.reduce((a, b) => a + b, 0) / times.length).toFixed(0) : '-';
  const p50 = times.length ? Math.round(percentile(times, 50)) : '-';
  const p95 = times.length ? Math.round(percentile(times, 95)) : '-';
  const p99 = times.length ? Math.round(percentile(times, 99)) : '-';

  return {
    concurrency,
    total: results.length,
    totalTimeMs: Math.round(totalTime),
    timeouts,
    otherErrors,
    statusCounts,
    responseRate,
    okCount: ok,
    avgMs,
    p50,
    p95,
    p99,
    throughput: ((results.length / (totalTime / 1000)) | 0),
  };
}

function printWaveResult(w) {
  const statusStr = Object.entries(w.statusCounts)
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([k, v]) => `${k}:${v}`)
    .join(' ');
  const errStr = [w.timeouts && `${w.timeouts} timeout`, w.otherErrors && `${w.otherErrors} error`]
    .filter(Boolean)
    .join(', ') || '-';
  log(
    `  توازي=${w.concurrency} | طلبات=${w.total} | زمن إجمالي=${w.totalTimeMs}ms | ط/ث=${w.throughput} | استجابة=${w.responseRate}%`,
    'info'
  );
  log(`  زمن: avg=${w.avgMs}ms  p50=${w.p50}ms  p95=${w.p95}ms  p99=${w.p99}ms`, 'info');
  log(`  حالات: ${statusStr} | أخطاء: ${errStr}`, 'info');
}

async function main() {
  console.log('\n🔥 اختبار قوة تحمّل السيرفر — Omdaa API\n');
  log(`الموجات: ${WAVES.join(' → ')} طلب متزامن`, 'info');
  log(`مهلة لكل طلب: ${REQUEST_TIMEOUT_MS}ms\n`, 'info');

  const waveResults = [];
  for (const concurrency of WAVES) {
    log(`═══ موجة: ${concurrency} طلب متزامن ═══`, 'chart');
    const w = await runWave(concurrency);
    waveResults.push(w);
    printWaveResult(w);
    console.log('');

    // إيقاف تلقائي عند انهيار الاستجابة (كثير timeout/أخطاء) وليس بسبب 401
    const tooManyTimeouts = w.timeouts > w.total * 0.4;
    const tooManyErrors = w.otherErrors > w.total * 0.2;
    const lowResponseRate = parseFloat(w.responseRate) < 50;
    if (tooManyTimeouts || tooManyErrors || lowResponseRate) {
      log(
        `إيقاف: السيرفر تحت ضغط شديد (timeout=${w.timeouts}, أخطاء=${w.otherErrors}, استجابة=${w.responseRate}%)`,
        'warn'
      );
      break;
    }
  }

  // ملخص
  console.log('\n══════════════════════════════════════════════');
  log('ملخص قوة التحمل', 'chart');
  const last = waveResults[waveResults.length - 1];
  const best = waveResults.reduce((a, b) => (b.throughput > a.throughput ? b : a), waveResults[0]);
  const firstOk = waveResults.find((w) => Object.keys(w.statusCounts).some((s) => s === '200'));
  log(`أعلى إنتاجية: ${best.throughput} طلب/ث عند توازي ${best.concurrency}`, 'ok');
  log(`آخر موجة: توازي ${last.concurrency}, استجابة ${last.responseRate}%, زمن p95=${last.p95}ms`, 'info');
  if (last.timeouts > 0 || last.otherErrors > 0) {
    log(`تحذير: ${last.timeouts} timeout, ${last.otherErrors} أخطاء أخرى في آخر موجة`, 'warn');
  }
  console.log('');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

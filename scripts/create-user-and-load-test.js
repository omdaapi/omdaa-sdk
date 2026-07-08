#!/usr/bin/env node
/**
 * إنشاء مستخدم Omdaa جديد + الحصول على مفتاح API + تشغيل اختبار قوة التحمل
 * التشغيل: node scripts/create-user-and-load-test.js
 */

const API_BASE = 'https://omdaa.com/api/v1';
const REQUEST_TIMEOUT_MS = 20_000;
const WAVES = [5, 15, 30, 50, 80, 120];

const unique = `loadtest-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
const EMAIL = `${unique}@example.com`;
const PASSWORD = 'SecurePass123!@#LoadTest';
const NAME = 'Load Test User';

function log(msg, type = 'info') {
  const icons = { info: '📌', ok: '✅', warn: '⚠️', fail: '❌', chart: '📊' };
  console.log(`${icons[type] || '•'} ${msg}`);
}

async function api(method, path, body = null, token = null) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(API_BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data, res };
}

function getNested(obj, ...keys) {
  let v = obj;
  for (const k of keys) {
    v = v?.[k];
    if (v === undefined) return undefined;
  }
  return v;
}

async function createUserAndGetApiKey() {
  if (process.env.OMDAA_API_KEY) {
    log('استخدام مفتاح API من المتغير OMDAA_API_KEY', 'ok');
    return { jwt: null, apiKey: process.env.OMDAA_API_KEY };
  }

  log('إنشاء مستخدم جديد...', 'info');
  const reg = await api('POST', '/auth/register', {
    email: EMAIL,
    password: PASSWORD,
    name: NAME,
  });

  if (!reg.ok && reg.status !== 409) {
    log(`فشل التسجيل: ${reg.status} — ${getNested(reg.data, 'message') || reg.data}`, 'fail');
    return { jwt: null, apiKey: null };
  }
  if (reg.status === 409) {
    log('البريد مستخدم مسبقاً. ضع OMDAA_API_KEY=مفتاحك أو استخدم بريداً جديداً.', 'fail');
    return { jwt: null, apiKey: null };
  }

  log(`تم إنشاء الحساب: ${EMAIL}`, 'ok');
  const apiKey =
    getNested(reg.data, 'data', 'apiKey', 'key') ||
    getNested(reg.data, 'apiKey', 'key') ||
    getNested(reg.data, 'data', 'key');
  if (!apiKey) {
    log('لم يُعاد مفتاح API من التسجيل — ' + JSON.stringify(reg.data).slice(0, 150), 'fail');
    return { jwt: null, apiKey: null };
  }
  log('تم الحصول على مفتاح API من التسجيل', 'ok');
  return { jwt: null, apiKey };
}

function percentile(sortedArr, p) {
  if (!sortedArr.length) return 0;
  const i = Math.ceil((p / 100) * sortedArr.length) - 1;
  return sortedArr[Math.max(0, i)];
}

async function runLoadTest(apiKey) {
  const body = JSON.stringify({
    sessionId: 'default',
    to: '966500000000',
    message: 'اختبار تحميل',
  });
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

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
    return { duration: performance.now() - start, status, error };
  }

  async function runWave(concurrency) {
    const start = performance.now();
    const results = await Promise.all(Array.from({ length: concurrency }, () => singleRequest()));
    const totalTime = performance.now() - start;
    const times = results.map((r) => r.duration).filter((t) => t > 0).sort((a, b) => a - b);
    const statusCounts = {};
    let timeouts = 0,
      otherErrors = 0;
    for (const r of results) {
      if (r.error === 'timeout') timeouts++;
      else if (r.error) otherErrors++;
      else statusCounts[r.status] = (statusCounts[r.status] || 0) + 1;
    }
    const gotResponse = results.filter((r) => !r.error).length;
    const ok = results.filter((r) => r.status === 200).length;
    return {
      concurrency,
      total: results.length,
      totalTimeMs: Math.round(totalTime),
      timeouts,
      otherErrors,
      statusCounts,
      responseRate: ((gotResponse / results.length) * 100).toFixed(1),
      okCount: ok,
      avgMs: times.length ? (times.reduce((a, b) => a + b, 0) / times.length).toFixed(0) : '-',
      p50: times.length ? Math.round(percentile(times, 50)) : '-',
      p95: times.length ? Math.round(percentile(times, 95)) : '-',
      throughput: ((results.length / (totalTime / 1000)) | 0),
    };
  }

  console.log('\n🔥 اختبار قوة التحمل (بمفتاح المستخدم الجديد)\n');
  log(`الموجات: ${WAVES.join(' → ')} طلب متزامن\n`, 'info');

  const waveResults = [];
  for (const concurrency of WAVES) {
    log(`═══ موجة: ${concurrency} طلب متزامن ═══`, 'chart');
    const w = await runWave(concurrency);
    waveResults.push(w);
    const statusStr = Object.entries(w.statusCounts)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([k, v]) => `${k}:${v}`)
      .join(' ');
    log(
      `  توازي=${w.concurrency} | طلبات=${w.total} | ط/ث=${w.throughput} | استجابة=${w.responseRate}% | 200 OK=${w.okCount}`,
      'info'
    );
    log(`  زمن: avg=${w.avgMs}ms  p50=${w.p50}ms  p95=${w.p95}ms | حالات: ${statusStr}`, 'info');
    console.log('');

    const tooManyTimeouts = w.timeouts > w.total * 0.4;
    const lowResponse = parseFloat(w.responseRate) < 50;
    if (tooManyTimeouts || lowResponse) {
      log('إيقاف: ضغط شديد على السيرفر', 'warn');
      break;
    }
  }

  const last = waveResults[waveResults.length - 1];
  const best = waveResults.reduce((a, b) => (b.throughput > a.throughput ? b : a), waveResults[0]);
  console.log('══════════════════════════════════════════════');
  log('ملخص قوة التحمل', 'chart');
  log(`أعلى إنتاجية: ${best.throughput} طلب/ث عند توازي ${best.concurrency}`, 'ok');
  log(`آخر موجة: توازي ${last.concurrency}, استجابة ${last.responseRate}%, 200 OK=${last.okCount}`, 'info');
  if (last.okCount === 0 && (last.statusCounts['404'] || last.statusCounts['503'])) {
    log('ملاحظة: 404 = لا توجد جلسة واتساب لهذا الحساب بعد. 503/429 = ضغط/حد معدل.', 'info');
  }
  console.log('');
}

async function main() {
  console.log('\n📋 إنشاء مستخدم Omdaa + اختبار التحمل\n');
  const { jwt, apiKey } = await createUserAndGetApiKey();
  const token = apiKey || jwt;
  if (!token) {
    log('لم يتسن الحصول على توكن — إنهاء بدون اختبار تحمل.', 'fail');
    process.exit(1);
  }
  await runLoadTest(token);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

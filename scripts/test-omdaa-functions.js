#!/usr/bin/env node
/**
 * اختبار وظائف منصة Omdaa (الموقع + API)
 * يشغّل: توفر الصفحات، استجابة الـ API، هيكل الأخطاء
 * التشغيل: node scripts/test-omdaa-functions.js
 */

const BASE = 'https://omdaa.com';
const API_BASE = 'https://omdaa.com/api/v1';

const results = { passed: 0, failed: 0, tests: [] };

function log(msg, type = 'info') {
  const icons = { info: '📌', pass: '✅', fail: '❌', warn: '⚠️' };
  console.log(`${icons[type] || '•'} ${msg}`);
}

function record(name, ok, detail = '') {
  if (ok) results.passed++; else results.failed++;
  results.tests.push({ name, ok, detail });
  log(`${name}: ${ok ? 'نجح' : 'فشل'}${detail ? ' — ' + detail : ''}`, ok ? 'pass' : 'fail');
}

async function fetchOk(url, options = {}) {
  try {
    const res = await fetch(url, { redirect: 'follow', ...options });
    return { ok: res.ok, status: res.status, url: res.url };
  } catch (e) {
    return { ok: false, status: 0, error: e.message };
  }
}

async function runPageTests() {
  log('═══ اختبار توفر الصفحات ═══', 'info');
  const pages = [
    { name: 'الصفحة الرئيسية', url: BASE + '/' },
    { name: 'التسجيل', url: BASE + '/register' },
    { name: 'الأسعار', url: BASE + '/pricing' },
    { name: 'الأسئلة الشائعة', url: BASE + '/faq' },
    { name: 'لوحة التحكم (قد يحوّل لتسجيل)', url: BASE + '/dashboard' },
  ];
  for (const { name, url } of pages) {
    const { ok, status } = await fetchOk(url);
    record(name, ok, `HTTP ${status}`);
  }
}

async function runApiTests() {
  log('═══ اختبار استجابة API ═══', 'info');

  // 1) send-text بدون مصادقة → متوقع 401 أو 403
  try {
    const r = await fetch(API_BASE + '/messages/send-text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'test',
        to: '966500000000',
        message: 'test',
      }),
    });
    const body = await r.json().catch(() => ({}));
    const unauthorized = r.status === 401 || r.status === 403;
    const hasMessage = body && (typeof body.message === 'string' || body.error);
    record(
      'send-text بدون توكن → رفض (401/403)',
      unauthorized,
      `status=${r.status}`
    );
    record(
      'استجابة JSON تحتوي رسالة خطأ',
      hasMessage || unauthorized,
      hasMessage ? body.message || body.error : 'لا body'
    );
  } catch (e) {
    record('استدعاء send-text (بدون توكن)', false, e.message);
  }

  // 2) send-text بتوكن وهمي → متوقع 401
  try {
    const r = await fetch(API_BASE + '/messages/send-text', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer invalid-fake-token-for-test',
      },
      body: JSON.stringify({
        sessionId: 'test',
        to: '966500000000',
        message: 'test',
      }),
    });
    const rejectFake = r.status === 401 || r.status === 403;
    record('send-text بتوكن وهمي → رفض', rejectFake, `status=${r.status}`);
  } catch (e) {
    record('send-text بتوكن وهمي', false, e.message);
  }

  // 3) GET بدون توكن على endpoint محمي
  try {
    const r = await fetch(API_BASE + '/sessions', {
      headers: { Accept: 'application/json' },
    });
    const protectedReject = r.status === 401 || r.status === 403;
    record('GET /sessions بدون توكن → رفض', protectedReject, `status=${r.status}`);
  } catch (e) {
    record('GET /sessions', false, e.message);
  }
}

async function runDocsTests() {
  log('═══ اختبار التوثيق والروابط الخارجية ═══', 'info');
  const { ok, status } = await fetchOk('https://omdaa.net/');
  record('توثيق omdaa.net يعمل', ok, `HTTP ${status}`);
}

async function runOAuthTests() {
  log('═══ اختبار روابط تسجيل الدخول (OAuth) ═══', 'info');
  const google = await fetchOk(BASE + '/api/v1/auth/oauth/google?redirect=%2Fdashboard', { redirect: 'manual' });
  const github = await fetchOk(BASE + '/api/v1/auth/oauth/github?redirect=%2Fdashboard', { redirect: 'manual' });
  const expectRedirect = (s) => s === 302 || s === 301 || s === 307;
  record('OAuth Google يوجّه (302/301)', expectRedirect(google.status), `status=${google.status}`);
  record('OAuth GitHub يوجّه (302/301)', expectRedirect(github.status), `status=${github.status}`);
}

async function runValidationTests() {
  log('═══ اختبار صحة الجسم (Validation) ═══', 'info');
  // بدون توكن لنختبر التحقق من الجسم (قد يرفض الـ API بالمصادقة أولاً → 401)
  const noAuth = { 'Content-Type': 'application/json' };

  const checkValidation = (name, bodyObj) => async () => {
    const r = await fetch(API_BASE + '/messages/send-text', {
      method: 'POST',
      headers: noAuth,
      body: JSON.stringify(bodyObj),
    });
    const body = await r.json().catch(() => ({}));
    const badRequest = r.status === 400 || r.status === 422;
    const hasError = body && (body.message || body.error || body.errors);
    const authFirst = r.status === 401 || r.status === 403;
    const ok = (badRequest && hasError) || (authFirst && !badRequest);
    record(name, ok, badRequest ? `400/422: ${body.message || body.error || ''}` : `status=${r.status} (مصادقة أولاً)`);
  };

  try {
    await checkValidation('send-text بدون to → 400/422 أو 401', { sessionId: 'test', message: 'نص' })();
  } catch (e) {
    record('send-text بدون to', false, e.message);
  }
  try {
    await checkValidation('send-text بدون message → 400/422 أو 401', { sessionId: 'test', to: '966500000000' })();
  } catch (e) {
    record('send-text بدون message', false, e.message);
  }
  try {
    await checkValidation('send-text body فارغ → 400/422 أو 401', {})();
  } catch (e) {
    record('send-text body فارغ', false, e.message);
  }
}

async function runRateLimitTests() {
  log('═══ اختبار حدود المعدل (Rate limit) ═══', 'info');
  const COUNT = 55;
  const auth = {
    Authorization: 'Bearer invalid-rate-limit-test-token',
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({
    sessionId: 'test',
    to: '966500000000',
    message: 'test',
  });
  // 429 = حد معدل صريح، 503 = ضغط/حماية الخادم
  const statusCounts = { 401: 0, 403: 0, 429: 0, 503: 0, other: {} };
  try {
    const responses = await Promise.all(
      Array.from({ length: COUNT }, () =>
        fetch(API_BASE + '/messages/send-text', { method: 'POST', headers: auth, body })
      )
    );
    for (const r of responses) {
      if (r.status === 429) statusCounts[429]++;
      else if (r.status === 503) statusCounts[503]++;
      else if (r.status === 401) statusCounts[401]++;
      else if (r.status === 403) statusCounts[403]++;
      else {
        statusCounts.other[r.status] = (statusCounts.other[r.status] || 0) + 1;
      }
    }
    const authOnly = statusCounts[401] + statusCounts[403] === COUNT;
    const gotRateLimitOrBackpressure = statusCounts[429] > 0 || statusCounts[503] > 0;
    record(
      'حدود المعدل/الحماية: 429 أو 503 أو كل الردود 401/403',
      gotRateLimitOrBackpressure || authOnly,
      statusCounts[429] > 0
        ? `${statusCounts[429]} رد 429`
        : statusCounts[503] > 0
          ? `${statusCounts[503]} رد 503 (ضغط)`
          : `${statusCounts[401] + statusCounts[403]}/${COUNT} رد 401/403`
    );
    const otherTotal = Object.values(statusCounts.other).reduce((a, b) => a + b, 0);
    record(
      'لا توجد ردود غير متوقعة (401/403/429/503 فقط)',
      otherTotal === 0,
      otherTotal === 0 ? 'نعم' : `أخرى: ${JSON.stringify(statusCounts.other)}`
    );
  } catch (e) {
    record('اختبار حدود المعدل', false, e.message);
  }
}

async function main() {
  console.log('\n🧪 بدء اختبار وظائف Omdaa (omdaa.com)\n');
  await runPageTests();
  console.log('');
  await runApiTests();
  console.log('');
  await runDocsTests();
  console.log('');
  await runOAuthTests();
  console.log('');
  await runValidationTests();
  console.log('');
  await runRateLimitTests();
  console.log('\n═══════════════════════════════════');
  log(`النتيجة: ${results.passed} نجح ، ${results.failed} فشل`, results.failed ? 'warn' : 'pass');
  console.log('');
  process.exit(results.failed > 0 ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

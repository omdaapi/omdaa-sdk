#!/usr/bin/env node
/**
 * مثال جاهز: إرسال رسالة نصية عبر Omdaa API (Node.js)
 *
 * التشغيل من جذر المستودع بعد التثبيت والبناء:
 *   make install   (أو: cd packages/omdaa-js && npm install && npm run build)
 *   export OMDAA_API_KEY=your-api-key
 *   export OMDAA_TO=9665XXXXXXXX   # اختياري
 *   node examples/send-message.js
 *
 * أو من مشروعك بعد: npm install omdaa-api-client
 */

const path = require('path');
let OmdaaClient, OmdaaError;
try {
  ({ OmdaaClient, OmdaaError } = require('omdaa-api-client'));
} catch {
  const localPath = path.resolve(__dirname, '../packages/omdaa-js/dist/index.js');
  ({ OmdaaClient, OmdaaError } = require(localPath));
}

const apiKey = process.env.OMDAA_API_KEY;
const to = process.env.OMDAA_TO || '966500000000';

if (!apiKey) {
  console.error('عيّن OMDAA_API_KEY ثم شغّل السكربت مرة أخرى.');
  process.exit(1);
}

const client = new OmdaaClient({ apiKey });

async function main() {
  try {
    const res = await client.messages.sendText({
      sessionId: 'default',
      to,
      message: 'مرحباً من Omdaa SDK (Node.js)',
    });
    console.log('تم الإرسال بنجاح:', res.data?.messageId || res);
  } catch (err) {
    if (err instanceof OmdaaError) {
      console.error('خطأ من API:', err.status, err.message);
    } else {
      console.error(err);
    }
    process.exit(1);
  }
}

main();

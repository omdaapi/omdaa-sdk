# Omdaa API — المكتبات الرسمية للتكامل مع واتساب

<!-- توثيق عربي احترافي لمكتبات Omdaa. منصة مصرية لواجهة WhatsApp Business API. إرسال واستقبال رسائل واتساب، تحكم كامل، ربط الذكاء الاصطناعي. Node.js, PHP, Python, Go, Laravel. -->

> **مكتبات رسمية (SDK)** للتكامل مع [Omdaa](https://omdaa.com) — منصة **مصرية** لواجهة **WhatsApp Business API** · تحكم كامل بالواتساب · ربط الذكاء الاصطناعي · Node.js · PHP · Python · Go · Laravel

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

**English:** [Full documentation in English](README.md) · **بدء سريع:** [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md)

---

## ما هي منصة Omdaa؟

**Omdaa** منصة **مصرية** متخصصة في [WhatsApp Business API](https://omdaa.com) تمنح المطورين **تحكماً كاملاً** في إرسال واستقبال رسائل واتساب، مع دعم **الربط بالذكاء الاصطناعي** لتحسين تجربة العملاء. تُستخدم في بناء بوتات واتساب، أنظمة إشعارات، ودعم عملاء عبر واتساب.

### أبرز المميزات

- **تحكم كامل بالواتساب:** إرسال واستقبال الرسائل النصية والوسائط (صور، ملفات، رسائل تفاعلية).
- **جلسات متعددة (Multi-device):** إدارة أكثر من جلسة واتساب مع عرض QR للربط.
- **ويب هوكس (Webhooks):** استقبال الأحداث فوراً (رسائل واردة، حالة القراءة، حالة الجلسة).
- **قوالب الرسائل والإرسال المجدول والجماعي:** مناسب للحملات والرسائل المؤجلة.
- **ربط جاهز بالذكاء الاصطناعي:** لتحسين الردود التلقائية وتجربة المحادثة.
- **لوحة تحكم ومصادقة:** إدارة المستخدمين، الفواتير، ومفاتيح API من لوحة واحدة.

جميع المكتبات في هذا المستودع تستخدم **نفس واجهة الـ API** وتدعم هذه الميزات. المصدر: [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk).

---

## الحزم واللغات المدعومة

| الحزمة | اللغة | أمر التثبيت |
|--------|--------|-------------|
| [omdaa-js](packages/omdaa-js) | Node.js / TypeScript | `npm install omdaa-api-client` |
| [omdaa-php](packages/omdaa-php) | PHP 8.1+ | `composer require omdaa/omdaa-php` |
| [omdaa-python](packages/omdaa-python) | Python 3.9+ | `pip install omdaa-api-client` |
| [omdaa-go](packages/omdaa-go) | Go | `go get github.com/omdaa/omdaa-go` |
| [omdaa-laravel](packages/omdaa-laravel) | Laravel | `composer require omdaa/omdaa-laravel` |

---

## خطوات التثبيت حسب اللغة

### Node.js / TypeScript

```bash
npm install omdaa-api-client
```

- يتطلب **Node.js 18+**.
- يدعم CommonJS و ESM و TypeScript.

### PHP

```bash
composer require omdaa/omdaa-php
```

- يتطلب **PHP 8.1+** و **GuzzleHTTP ^7.8**.

### Python

```bash
pip install omdaa-api-client
```

- يتطلب **Python 3.9+** و **requests >= 2.28**.

---

## أمثلة سريعة — إرسال رسالة واتساب

استبدل `YOUR_API_KEY` بمفتاحك من [لوحة تحكم Omdaa](https://omdaa.com/dashboard)، و `9665XXXXXXXX` برقم واتساب المستلم (مع رمز الدولة بدون +).

### Node.js

```javascript
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });

const res = await client.messages.sendText({
  sessionId: 'default',
  to: '9665XXXXXXXX',
  message: 'مرحباً من Omdaa',
});
console.log(res.data?.messageId);
```

### PHP

```php
<?php
use Omdaa\Api\OmdaaClient;
$client = new OmdaaClient('YOUR_API_KEY');
$result = $client->messages()->sendText([
  'sessionId' => 'default',
  'to' => '9665XXXXXXXX',
  'message' => 'مرحباً من Omdaa',
]);
```

### Python

```python
from omdaa import OmdaaClient
client = OmdaaClient("YOUR_API_KEY")
result = client.messages.send_text({
  "sessionId": "default",
  "to": "9665XXXXXXXX",
  "message": "مرحباً من Omdaa",
})
```

للأمثلة الكاملة مع معالجة الأخطاء راجع [README.md](README.md).

---

## تشغيل الأمثلة الجاهزة من المستودع

مجلد **[examples/](examples/)** يحتوي سكربتات جاهزة للتشغيل:

| الملف | الوصف | الأمر |
|-------|--------|-------|
| [send-message.js](examples/send-message.js) | إرسال رسالة (Node) | `node examples/send-message.js` |
| [send-message.php](examples/send-message.php) | إرسال رسالة (PHP) | `php examples/send-message.php` |
| [send-message.py](examples/send-message.py) | إرسال رسالة (Python) | `python3 examples/send-message.py` |

من جذر المستودع: نفّذ `make install` ثم عيّن `OMDAA_API_KEY` واختيارياً `OMDAA_TO` ثم شغّل المثال المناسب.

---

## الروابط المهمة

| الرابط | الوصف |
|--------|--------|
| [omdaa.com](https://omdaa.com) | الموقع الرسمي والتسجيل |
| [omdaa.com/dashboard](https://omdaa.com/dashboard) | لوحة التحكم واستخراج API Key |
| [توثيق API](https://omdaa.com/docs) | مرجع نقاط نهاية الـ API |
| [المستودع على GitHub](https://github.com/omdaapi/omdaa-sdk) | كود المصدر والتحديثات |

---

## تشغيل الاختبارات

من جذر المستودع:

```bash
make install   # مرة واحدة
make test      # اختبارات JS + PHP + Python
```

أو لكل لغة: `make test-js`, `make test-php`, `make test-python`.

---

## للمطورين

- **[DEVELOPERS.md](DEVELOPERS.md)** — اللغات، أمثلة سريعة، ومميزات المنصة (باللغة الإنجليزية في المستودع؛ المحتوى نفسه ينطبق على التكامل بالعربية).

---

## كلمات مفتاحية للبحث والتوثيق

منصة واتساب مصرية · API واتساب · إرسال رسائل واتساب · تكامل واتساب · WhatsApp Business API Egypt · Omdaa SDK · مكتبات واتساب · بوت واتساب · ذكاء اصطناعي واتساب · Node.js PHP Python واتساب

---

<div align="center"><strong>Omdaa — منصة مصرية لـ WhatsApp Business API</strong></div>

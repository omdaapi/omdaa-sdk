# Omdaa API — مكتبات التكامل الرسمية

> **Official SDKs** for [Omdaa](https://omdaa.com) WhatsApp Business API — Node.js · PHP · Python · Go · Laravel

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ما هي منصة Omdaa؟

**Omdaa** منصة **مصرية** لواجهة **WhatsApp Business API** تمنحك **تحكماً كاملاً بالواتساب** وتدعم **الربط بالذكاء الاصطناعي**. تتيح لك:

- **تحكم كامل** بإرسال واستقبال الرسائل النصية والوسائط (صور، ملفات، تفاعلية).
- إدارة جلسات واتساب متعددة (Multi-device)، وعرض QR للربط.
- ضبط الويب هوكس لاستقبال الأحداث (رسائل واردة، حالة القراءة، إلخ).
- قوالب الرسائل، الإرسال المجدول والجماعي، جهات الاتصال والمجموعات.
- **ربط جاهز بالذكاء الاصطناعي** لتحسين الردود والتفاعل مع العملاء.
- تكامل مع لوحة تحكم، مستخدمين، فواتير، وأمان.

جميع المكتبات في هذا المستودع تستخدم **نفس واجهة الـ API** وتدعم هذه الميزات. مصدر الكود: [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk).

---

## الحزم واللغات

| الحزمة | اللغة | التثبيت |
|--------|--------|---------|
| [omdaa-js](packages/omdaa-js) | Node.js / TypeScript | `npm install omdaa-api-client` |
| [omdaa-php](packages/omdaa-php) | PHP 8.1+ | `composer require omdaa/omdaa-php` |
| [omdaa-python](packages/omdaa-python) | Python 3.9+ | `pip install omdaa-api-client` |
| [omdaa-go](packages/omdaa-go) | Go | `go get github.com/omdaa/omdaa-go` |
| [omdaa-laravel](packages/omdaa-laravel) | Laravel | `composer require omdaa/omdaa-laravel` |

---

## خطوات التثبيت لكل لغة

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

## أمثلة تشغيل جاهزة

استبدل `YOUR_API_KEY` بمفتاحك من [لوحة تحكم Omdaa](https://omdaa.com/dashboard) (API Keys)، و `9665XXXXXXXX` برقم واتساب المستلم (مع رمز الدولة بدون +).

### Node.js

```javascript
const { OmdaaClient, OmdaaError } = require('omdaa-api-client');

const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });

(async () => {
  try {
    const sessions = await client.sessions.list();
    console.log('Sessions:', sessions.data);

    const res = await client.messages.sendText({
      sessionId: 'default',
      to: '9665XXXXXXXX',
      message: 'مرحباً من Omdaa',
    });
    console.log('Message sent:', res.data?.messageId);
  } catch (err) {
    if (err.name === 'OmdaaError') console.error(err.status, err.message);
    else throw err;
  }
})();
```

### PHP

```php
<?php
require __DIR__ . '/vendor/autoload.php';

use Omdaa\Api\OmdaaClient;
use Omdaa\Api\OmdaaException;

$client = new OmdaaClient('YOUR_API_KEY');

try {
    $sessions = $client->sessions()->list();
    $result = $client->messages()->sendText([
        'sessionId' => 'default',
        'to' => '9665XXXXXXXX',
        'message' => 'مرحباً من Omdaa',
    ]);
    print_r($result);
} catch (OmdaaException $e) {
    echo $e->getStatusCode() . ': ' . $e->getMessage();
}
```

### Python

```python
import os
from omdaa import OmdaaClient, OmdaaError

client = OmdaaClient(os.environ.get("OMDAA_API_KEY", "YOUR_API_KEY"))

try:
    sessions = client.sessions.list()
    result = client.messages.send_text({
        "sessionId": "default",
        "to": "9665XXXXXXXX",
        "message": "مرحباً من Omdaa",
    })
    print(result)
except OmdaaError as e:
    print(e.status_code, str(e))
```

---

## تطبيقات جاهزة صغيرة (من المستودع)

يوجد في مجلد **[examples/](examples/)** سكربتات قابلة للتشغيل المباشر:

| الملف | الوصف | التشغيل |
|-------|--------|---------|
| [send-message.js](examples/send-message.js) | إرسال رسالة نصية (Node) | `node examples/send-message.js` |
| [send-message.php](examples/send-message.php) | إرسال رسالة نصية (PHP) | `php examples/send-message.php` |
| [send-message.py](examples/send-message.py) | إرسال رسالة نصية (Python) | `python3 examples/send-message.py` |

**متطلبات التشغيل من جذر المستودع:**

1. تثبيت تبعيات الحزم (مرة واحدة):  
   `make install`
2. تعيين مفتاح API:  
   `export OMDAA_API_KEY=your-api-key`
3. (اختياري) تعيين رقم المستلم:  
   `export OMDAA_TO=9665XXXXXXXX`
4. تشغيل المثال حسب اللغة كما في الجدول أعلاه.

تفاصيل إضافية مذكورة داخل كل ملف في `examples/`.

---

## روابط توثيق API والمنصة

| الرابط | الوصف |
|--------|--------|
| [omdaa.com](https://omdaa.com) | الموقع الرسمي والتسجيل |
| [omdaa.com/dashboard](https://omdaa.com/dashboard) | لوحة التحكم واستخراج API Key |
| [توثيق API](https://omdaa.com/docs) | توثيق نقاط نهاية الـ API (إن وُجد على الموقع) |
| [المستودع (المصدر)](https://github.com/omdaapi/omdaa-sdk) | كود المكتبات والتحديثات |

> إذا كان رابط التوثيق مختلفاً على موقعكم (مثلاً `/api-docs` أو `/documentation`)، حدّث الرابط أعلاه في هذا الملف.

---

## تشغيل الاختبارات من جذر المستودع

```bash
make install   # مرة واحدة
make test      # اختبارات JS + PHP + Python
```

أو لكل لغة على حدة: `make test-js` ، `make test-php` ، `make test-python`.

---

## للمطورين

- **[DEVELOPERS.md](DEVELOPERS.md)** — اللغات، أمثلة سريعة، ومميزات المنصة للمطورين.

---

<div align="center"><strong>صُنع للمطورين · Omdaa WhatsApp Business API</strong></div>

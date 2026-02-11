# 👩‍💻 للمطورين — Omdaa API

صفحة موجهة للمطورين: اللغات المدعومة، المكتبات الرسمية، ومميزات المنصة.

---

## 🛠 اللغات والمكتبات الرسمية

يمكنك التكامل مع Omdaa API بلغتك المفضلة عبر مكتبات جاهزة أو عبر HTTP مباشرة.

| اللغة / الإطار | الحزمة | التثبيت | الرابط |
|----------------|--------|---------|--------|
| **Node.js / TypeScript** | `omdaa-api-client` | `npm install omdaa-api-client` | [npm](https://www.npmjs.com/package/omdaa-api-client) |
| **PHP** | `omdaa/omdaa-php` | `composer require omdaa/omdaa-php` | [Packagist](https://packagist.org/packages/omdaa/omdaa-php) |
| **Python** | `omdaa-api-client` | `pip install omdaa-api-client` | [PyPI](https://pypi.org/project/omdaa-api-client/) |
| **Go** | `github.com/omdaa/omdaa-go` | `go get github.com/omdaa/omdaa-go` | GitHub |
| **Laravel** | `omdaa/omdaa-laravel` | `composer require omdaa/omdaa-laravel` | [Packagist](https://packagist.org/packages/omdaa/omdaa-laravel) |

جميع المكتبات تدعم **نفس موارد الـ API** (الرسائل، الجلسات، الويب هوكس، القوالب، المجدولة، الجماعية، جهات الاتصال، المجموعات، المحادثات، التخزين، الأمان، التدقيق، المستخدمين، البريد، الذكاء الاصطناعي، وغيرها).

---

## ⚡ أمثلة سريعة

### Node.js / TypeScript
```js
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });
const res = await client.messages.sendText({
  sessionId: 'default',
  to: '966xxxxxxxxx',
  message: 'مرحباً من Omdaa',
});
```

### PHP
```php
<?php
use Omdaa\Api\OmdaaClient;
$client = new OmdaaClient('YOUR_API_KEY');
$client->messages()->sendText([
  'sessionId' => 'default',
  'to' => '966xxxxxxxxx',
  'message' => 'مرحباً من Omdaa',
]);
```

### Python
```python
from omdaa import OmdaaClient
client = OmdaaClient("YOUR_API_KEY")
client.messages.send_text({
  "sessionId": "default",
  "to": "966xxxxxxxxx",
  "message": "مرحباً من Omdaa",
})
```

### Go
```go
import "github.com/omdaa/omdaa-go"

client := omdaa.NewOmdaaClient("YOUR_API_KEY", "")
client.Messages.SendText(map[string]interface{}{
  "sessionId": "default",
  "to":        "966xxxxxxxxx",
  "message":   "مرحباً من Omdaa",
})
```

### Laravel
```php
use Omdaa;
Omdaa::messages()->sendText([
  'sessionId' => 'default',
  'to' => '966xxxxxxxxx',
  'message' => 'مرحباً من Omdaa',
]);
```

---

## 🌟 مميزات المنصة للمطورين

| الميزة | الوصف |
|--------|--------|
| **واجهة REST موحدة** | نفس المسارات والاستجابات لجميع اللغات؛ توثيق واضح وسهل التكامل. |
| **مصادقة بسيطة** | Bearer API Key من لوحة التحكم؛ اختياريًا JWT للمناطق المحمية. |
| **موارد API شاملة** | رسائل (نص، صورة، ملف، تفاعلية، قوائم، أزرار، استطلاعات)، جلسات، ويب هوكس، قوالب، رسائل مجدولة وجماعية، جهات اتصال، مجموعات، محادثات، تخزين، تكاملات، طوابير، أمان، تدقيق، بريد، ذكاء اصطناعي، وغيرها. |
| **ويب هوكس (Webhooks)** | استقبال الأحداث فورًا (رسائل واردة، حالة الجلسة، إلخ) دون استعلام متكرر. |
| **جدولة ورسائل جماعية** | إرسال مؤجل وطلبات جماعية مع طوابير وإدارة حالة. |
| **دعم متعدد اللغات** | مكتبات رسمية لـ Node و PHP و Python و Go و Laravel؛ يمكنك أيضًا استخدام HTTP مباشرة من أي لغة. |

---

## 🔑 الحصول على API Key

1. سجّل دخولك إلى [لوحة تحكم Omdaa](https://omdaa.com/dashboard).
2. من الإعدادات أو قسم API أنشئ **API Key**.
3. استخدمها في رأس الطلب: `Authorization: Bearer YOUR_API_KEY`.

للمساعدة والدعم: [omdaa.com](https://omdaa.com) أو قنوات الدعم الرسمية.

---

<div align="center">**صُنع بـ ❤️ للمطورين**</div>

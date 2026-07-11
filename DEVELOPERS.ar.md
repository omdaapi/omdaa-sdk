# للمطورين — Omdaa API

مرجع المطورين: اللغات، المكتبات، MCP، n8n، ومميزات المنصة.

**English:** [DEVELOPERS.md](DEVELOPERS.md)

---

## المستودعات الرسمية

| المستودع | الغرض | الرابط |
|----------|-------|--------|
| **omdaa-sdk** | حزم SDK + إضافة Cursor MCP | [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk) |
| **n8n-nodes-whatsapp-omdaa** | عقدة n8n المجتمعية | [github.com/omdaapi/n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |

---

## اللغات والمكتبات

| اللغة | الحزمة | التثبيت |
|-------|--------|---------|
| **Node.js / TypeScript** | `omdaa-api-client` | `npm install omdaa-api-client` |
| **PHP 8.1+** | `omdaa/omdaa-php` | `composer require omdaa/omdaa-php` |
| **Python 3.9+** | `omdaa-api-client` | `pip install omdaa-api-client` |
| **Go 1.21+** | `github.com/omdaapi/omdaa-sdk/packages/omdaa-go` | `go get github.com/omdaapi/omdaa-sdk/packages/omdaa-go@v1.1.1` |
| **Laravel** | `omdaa/omdaa-laravel` | `composer require omdaa/omdaa-laravel` |

جميع المكتبات تدعم **نفس موارد API**: رسائل، جلسات، webhooks، قوالب، إرسال مجدول وجماعي، جهات اتصال، مجموعات، محادثات، تخزين، أمان، تدقيق، مستخدمين، بريد، AI، والمزيد.

---

## Cursor MCP (واتساب داخل Cursor)

خادم MCP HTTP مجاني v2.0 — بديل لـ Wassenger MCP المدفوع. **مصادقة Bearer آمنة** (بدون مفتاح في الرابط). تحكم كامل بالحساب (43 أداة).

- **Cursor Directory:** [cursor.directory/plugins/omdaa-api](https://cursor.directory/plugins/omdaa-api) (Rule + MCP + Skill)
- **نقطة النهاية:** `POST https://omdaa.com/api/v1/mcp` مع header `Authorization: Bearer YOUR_API_KEY`
- **الاكتشاف:** `GET https://omdaa.com/api/v1/mcp/info`
- **الإضافة:** [cursor-plugin/omdaa-whatsapp/](cursor-plugin/omdaa-whatsapp/) (v2.0.0)
- **التوثيق:** [omdaa.net/guides/mcp-ar.html](https://omdaa.net/guides/mcp-ar.html)
- **الصفحة:** [omdaa.com/mcp](https://omdaa.com/mcp)

**الأدوات:** جلسات (`create_session`, `get_qr`, `list_sessions`, `get_session_status`)، رسائل (`send_text_message`, `send_media`, `send_buttons`)، `check_whatsapp_number`, `get_webhook_config`, `get_health`.

---

## تكامل n8n

تثبيت العقدة المجتمعية:

```bash
npm install @omdaapi/n8n-nodes-whatsapp-omdaa
```

أو من واجهة n8n: **Settings → Community Nodes →** `@omdaapi/n8n-nodes-whatsapp-omdaa`

- المصدر: [n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa)
- n8n مستضاف: [omdaa.com/n8n](https://omdaa.com/n8n/)

---

## أمثلة سريعة

### Node.js
```js
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });
await client.messages.sendText({
  sessionId: 'default',
  to: '966xxxxxxxxx',
  message: 'مرحباً من Omdaa',
});
```

### PHP
```php
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

---

## مميزات المنصة

| الميزة | الوصف |
|--------|--------|
| **مجاني للأبد** | جلسات ورسائل وwebhooks وOmdaa AI بلا حدود — بدون بطاقة |
| **REST API موحّد** | `https://omdaa.com/api/v1` — نفس المسارات في كل SDK |
| **المصادقة** | `Authorization: Bearer YOUR_API_KEY` |
| **جلسات Baileys** | ربط واتساب multi-device عبر QR |
| **Webhooks** | أحداث فورية (رسائل، حالة الجلسة، QR) |
| **Omdaa AI** | بوتات Groq / OpenRouter من اللوحة |
| **OMDAA API Free** | Outbox push/pull لأي موقع أو سيرفر |
| **MCP** | تكامل Cursor لعمليات واتساب بالذكاء الاصطناعي |
| **Geo Links** | روابط حملات واتساب قابلة للتتبع |
| **Swagger** | [omdaa.com/api/v1/docs](https://omdaa.com/api/v1/docs) |

---

## الحصول على API Key

1. سجّل في [omdaa.com](https://omdaa.com).
2. افتح [لوحة التحكم → API Keys](https://omdaa.com/dashboard/api-keys).
3. أنشئ مفتاحاً واستخدم: `Authorization: Bearer YOUR_API_KEY`.

الدعم: [support@omdaa.com](mailto:support@omdaa.com)

---

<div align="center"><strong>مصمّم للمطورين — مجاني للأبد</strong></div>

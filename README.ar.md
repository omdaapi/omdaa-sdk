# Omdaa API — النظام البيئي الرسمي للمطورين

<!-- توثيق عربي احترافي: SDK، Cursor MCP واتساب، n8n، مجاني للأبد -->

<div align="center">

**[الموقع](https://omdaa.com)** · **[لوحة التحكم](https://omdaa.com/dashboard)** · **[التوثيق](https://omdaa.net)** · **[MCP](https://omdaa.com/mcp)** · **[API](https://omdaa.com/api/v1/health)**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![مجاني للأبد](https://img.shields.io/badge/التسعير-مجاني%20للأبد-10B981.svg)](https://omdaa.com)

### حالة الحزم على السجلات

[![npm omdaa-api-client](https://img.shields.io/npm/v/omdaa-api-client?label=npm%20JS)](https://www.npmjs.com/package/omdaa-api-client)
[![PyPI omdaa-api-client](https://img.shields.io/pypi/v/omdaa-api-client?label=PyPI)](https://pypi.org/project/omdaa-api-client/)
[![Packagist omdaa-php](https://img.shields.io/packagist/v/omdaa/omdaa-php?label=Packagist%20PHP)](https://packagist.org/packages/omdaa/omdaa-php)
[![Packagist omdaa-laravel](https://img.shields.io/packagist/v/omdaa/omdaa-laravel?label=Packagist%20Laravel)](https://packagist.org/packages/omdaa/omdaa-laravel)
[![npm n8n](https://img.shields.io/npm/v/@omdaapi/n8n-nodes-whatsapp-omdaa?label=npm%20n8n)](https://www.npmjs.com/package/@omdaapi/n8n-nodes-whatsapp-omdaa)
[![Go module](https://img.shields.io/github/v/tag/omdaapi/omdaa-sdk?label=Go&filter=packages/omdaa-go/*)](https://github.com/omdaapi/omdaa-sdk/tree/main/packages/omdaa-go)

**English:** [README.md](README.md) · [docs/QUICKSTART-EN.md](docs/QUICKSTART-EN.md)

</div>

---

## نظرة عامة

**[Omdaa](https://omdaa.com)** منصة أتمتة **واتساب مجانية للأبد** للشركات والمطورين. جلسات ورسائل وويب هوكس و**Omdaa AI** بلا حدود — بدون بطاقة ائتمان وبدون خطط مدفوعة.

هذا المستودع هو **المركز الرسمي للمطورين** في Omdaa:

| المكوّن | الوصف |
|---------|--------|
| **حزم SDK** | Node.js · PHP · Python · Go · Laravel — نفس REST API |
| **[إضافة Cursor MCP](cursor-plugin/omdaa-whatsapp/)** | خادم **Cursor MCP واتساب** مجاني — **بديل Wassenger MCP** |
| **أمثلة وCI** | سكربتات جاهزة · GitHub Actions · Dependabot |

**مستودع مرتبط:** [n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) — عقدة n8n المجتمعية.

---

## مجاني للأبد

| الميزة | متاح |
|--------|------|
| جلسات واتساب (Baileys) | بلا حدود |
| الرسائل والوسائط | بلا حدود |
| Webhooks | بلا حدود |
| Omdaa AI (Groq / OpenRouter) | بلا حدود |
| مفاتيح API ولوحة التحكم | مجاني |
| خادم MCP لـ Cursor | مجاني |

API الإنتاج: `https://omdaa.com/api/v1` · التوثيق: `https://omdaa.net`

---

## Cursor MCP واتساب (مجاني)

اربط واتساب بـ **Cursor** بنقرة واحدة — أرسل رسائل، تحقق من الأرقام، أدر الجلسات.

| المورد | الرابط |
|--------|--------|
| **Cursor Directory** | [cursor.directory/plugins/omdaa-api](https://cursor.directory/plugins/omdaa-api) |
| صفحة MCP | [omdaa.com/mcp](https://omdaa.com/mcp) |
| دليل عربي | [omdaa.net/guides/mcp-ar.html](https://omdaa.net/guides/mcp-ar.html) |
| دليل إنجليزي | [omdaa.net/guides/mcp-en.html](https://omdaa.net/guides/mcp-en.html) |
| اكتشاف API | `GET /api/v1/mcp/info` |
| مصدر الإضافة | [cursor-plugin/omdaa-whatsapp/](cursor-plugin/omdaa-whatsapp/) |

**التثبيت:** افتح [Cursor Directory → omdaa-api](https://cursor.directory/plugins/omdaa-api) → **Add to Cursor**، ثم عيّن `OMDAA_API_KEY` أو `Authorization: Bearer` في headers.

**تثبيت يدوي** — أضف إلى `mcp.json`:

```json
{
  "mcpServers": {
    "omdaa": {
      "type": "http",
      "url": "https://omdaa.com/api/v1/mcp",
      "headers": {
        "Authorization": "Bearer ${env:OMDAA_API_KEY}"
      }
    }
  }
}
```

**أدوات MCP v2.0 (43):** تحكم كامل بالحساب — جلسات · رسائل · وارد · webhooks · ملف شخصي/إحصائيات · تكاملات · مفاتيح API. انظر [دليل البلجن](cursor-plugin/omdaa-whatsapp/README.md).

---

## حزم SDK

| الحزمة | اللغة | التثبيت |
|--------|-------|---------|
| [omdaa-js](packages/omdaa-js) | Node.js / TypeScript | `npm install omdaa-api-client` |
| [omdaa-php](packages/omdaa-php) | PHP 8.1+ | `composer require omdaa/omdaa-php` |
| [omdaa-python](packages/omdaa-python) | Python 3.9+ | `pip install omdaa-api-client` |
| [omdaa-go](packages/omdaa-go) | Go 1.21+ | `go get github.com/omdaapi/omdaa-sdk/packages/omdaa-go@v1.1.1` |
| [omdaa-laravel](packages/omdaa-laravel) | Laravel | `composer require omdaa/omdaa-laravel` |

جميع الحزم تستخدم **نفس REST API** — رسائل، جلسات، webhooks، قوالب، إرسال مجدول وجماعي، جهات اتصال، مجموعات، تخزين، AI، والمزيد.

---

## البدء السريع

1. سجّل في [omdaa.com](https://omdaa.com) وأنشئ **API Key** من [لوحة التحكم](https://omdaa.com/dashboard/api-keys).
2. اربط جلسة واتساب (امسح QR من اللوحة).
3. ثبّت SDK للغتك وأرسل أول رسالة.

### Node.js

```javascript
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });

const res = await client.messages.sendText({
  sessionId: 'default',
  to: '9665XXXXXXXX',
  message: 'مرحباً من Omdaa',
});
console.log('تم الإرسال:', res.data?.messageId);
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

المزيد: [examples/](examples/) · [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md)

---

## تكاملات المنصة

| التكامل | لوحة التحكم | التوثيق |
|---------|-------------|---------|
| **n8n** | [omdaa.com/n8n](https://omdaa.com/n8n/) | [مستودع n8n](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |
| **Omdaa AI** | [dashboard/openai](https://omdaa.com/dashboard/openai) | [omdaa.net](https://omdaa.net) |
| **Webhooks** | [dashboard/webhooks](https://omdaa.com/dashboard/webhooks) | `/api/v1/webhooks` |
| **OMDAA API Free** | [dashboard/free-api](https://omdaa.com/dashboard/free-api) | Outbox push/pull |
| **Zapier** | صفحة التكاملات | قوالب webhook |
| **Geo Links** | [dashboard/geo-links](https://omdaa.com/dashboard/geo-links) | روابط تتبع |

---

## التوثيق

| المستند | اللغة | الوصف |
|---------|-------|--------|
| [README.ar.md](README.ar.md) | العربية | هذا الملف — نظرة شاملة |
| [README.md](README.md) | English | Full ecosystem overview |
| [DEVELOPERS.ar.md](DEVELOPERS.ar.md) | العربية | مرجع المطورين |
| [DEVELOPERS.md](DEVELOPERS.md) | English | Developer reference |
| [CHANGELOG.md](CHANGELOG.md) | English | سجل الإصدارات |
| [omdaa.net](https://omdaa.net) | عربي / English | موقع التوثيق الرسمي |

---

## التطوير

```bash
make install   # تثبيت تبعيات جميع الحزم
make test      # JS + PHP + Python + Go
```

---

## هيكل المستودع

```
omdaa-sdk/
├── packages/           # SDK رسمي (5 لغات)
├── cursor-plugin/      # إضافة Cursor MCP واتساب
├── examples/           # أمثلة send-message
├── docs/               # بدء سريع (عربي / إنجليزي)
├── .github/            # CI · Dependabot · SEO
└── DEVELOPERS.ar.md    # مميزات المنصة للمطورين
```

---

## الروابط

| الرابط | الوصف |
|--------|--------|
| [omdaa.com](https://omdaa.com) | الموقع والتسجيل |
| [omdaa.net](https://omdaa.net) | التوثيق |
| [Swagger](https://omdaa.com/api/v1/docs) | مرجع OpenAPI |
| [GitHub — omdaa-sdk](https://github.com/omdaapi/omdaa-sdk) | هذا المستودع |
| [GitHub — n8n](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) | تكامل n8n |
| [الدعم](mailto:support@omdaa.com) | support@omdaa.com |

---

<div align="center">
<strong>Omdaa — WhatsApp Business API مجاني للأبد</strong><br/>
مصمّم للمطورين · منصة مصرية · وصول عالمي
</div>

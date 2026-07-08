# Omdaa API — Official Developer Ecosystem

<!-- SEO: Official SDKs, Cursor MCP WhatsApp, n8n node for Omdaa WhatsApp Business API. Free forever. Node.js, PHP, Python, Go, Laravel. -->

<div align="center">

**[Website](https://omdaa.com)** · **[Dashboard](https://omdaa.com/dashboard)** · **[Docs](https://omdaa.net)** · **[MCP](https://omdaa.com/mcp)** · **[API](https://omdaa.com/api/v1/health)**

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
[![Free Forever](https://img.shields.io/badge/Pricing-Free%20Forever-10B981.svg)](https://omdaa.com)

### Package registry status

[![npm omdaa-api-client](https://img.shields.io/npm/v/omdaa-api-client?label=npm%20JS)](https://www.npmjs.com/package/omdaa-api-client)
[![PyPI omdaa-api-client](https://img.shields.io/pypi/v/omdaa-api-client?label=PyPI)](https://pypi.org/project/omdaa-api-client/)
[![Packagist omdaa-php](https://img.shields.io/packagist/v/omdaa/omdaa-php?label=Packagist%20PHP)](https://packagist.org/packages/omdaa/omdaa-php)
[![Packagist omdaa-laravel](https://img.shields.io/packagist/v/omdaa/omdaa-laravel?label=Packagist%20Laravel)](https://packagist.org/packages/omdaa/omdaa-laravel)
[![npm n8n node](https://img.shields.io/npm/v/@omdaapi/n8n-nodes-whatsapp-omdaa?label=npm%20n8n)](https://www.npmjs.com/package/@omdaapi/n8n-nodes-whatsapp-omdaa)
[![Go module](https://img.shields.io/github/v/tag/omdaapi/omdaa-sdk?label=Go&filter=packages/omdaa-go/*)](https://github.com/omdaapi/omdaa-sdk/tree/main/packages/omdaa-go)

**العربية:** [README.ar.md](README.ar.md) · [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md)

</div>

---

## Overview

**[Omdaa](https://omdaa.com)** is a **Free Forever** WhatsApp automation platform for businesses and developers. Unlimited sessions, messages, webhooks, and **Omdaa AI** — no credit card, no paid tiers.

This repository is the **official developer hub** for Omdaa:

| Component | Description |
|-----------|-------------|
| **SDK packages** | Node.js, PHP, Python, Go, Laravel — same REST API |
| **[Cursor MCP plugin](cursor-plugin/omdaa-whatsapp/)** | Free **Cursor MCP WhatsApp** server — **Wassenger MCP alternative** |
| **Examples & CI** | Runnable samples, GitHub Actions, Dependabot |

**Related repository:** [n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) — n8n community node.

---

## Free Forever

| Feature | Included |
|---------|----------|
| WhatsApp sessions (Baileys) | Unlimited |
| Messages & media | Unlimited |
| Webhooks | Unlimited |
| Omdaa AI (Groq / OpenRouter) | Unlimited |
| API keys & dashboard | Free |
| MCP server for Cursor | Free |

Production API: `https://omdaa.com/api/v1` · Docs: `https://omdaa.net`

---

## Cursor MCP WhatsApp (Free)

Connect WhatsApp to **Cursor** with one click — send messages, verify numbers, manage sessions.

| Resource | Link |
|----------|------|
| Landing page | [omdaa.com/mcp](https://omdaa.com/mcp) |
| English guide | [omdaa.net/guides/mcp-en.html](https://omdaa.net/guides/mcp-en.html) |
| Arabic guide | [omdaa.net/guides/mcp-ar.html](https://omdaa.net/guides/mcp-ar.html) |
| API discovery | `GET /api/v1/mcp/info` |
| Plugin source | [cursor-plugin/omdaa-whatsapp/](cursor-plugin/omdaa-whatsapp/) |

**Install in Cursor** — add to `mcp.json`:

```json
{
  "mcpServers": {
    "omdaa": {
      "type": "http",
      "url": "https://omdaa.com/api/v1/mcp?key=YOUR_API_KEY"
    }
  }
}
```

**MCP tools:** `list_sessions` · `get_session_status` · `send_text_message` · `check_whatsapp_number` · `get_webhook_config` · `get_health`

---

## SDK Packages

| Package | Language | Install |
|---------|----------|---------|
| [omdaa-js](packages/omdaa-js) | Node.js / TypeScript | `npm install omdaa-api-client` |
| [omdaa-php](packages/omdaa-php) | PHP 8.1+ | `composer require omdaa/omdaa-php` |
| [omdaa-python](packages/omdaa-python) | Python 3.9+ | `pip install omdaa-api-client` |
| [omdaa-go](packages/omdaa-go) | Go 1.21+ | `go get github.com/omdaapi/omdaa-sdk/packages/omdaa-go@v1.1.1` |
| [omdaa-laravel](packages/omdaa-laravel) | Laravel | `composer require omdaa/omdaa-laravel` |

All packages share the **same REST API** — messages, sessions, webhooks, templates, scheduled & bulk send, contacts, groups, storage, AI, and more.

---

## Quick Start

1. Sign up at [omdaa.com](https://omdaa.com) and create an **API Key** in the [dashboard](https://omdaa.com/dashboard/api-keys).
2. Link a WhatsApp session (scan QR in dashboard).
3. Install the SDK for your language and send your first message.

### Node.js

```javascript
const { OmdaaClient, OmdaaError } = require('omdaa-api-client');

const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });

(async () => {
  try {
    const res = await client.messages.sendText({
      sessionId: 'default',
      to: '9665XXXXXXXX',
      message: 'Hello from Omdaa',
    });
    console.log('Sent:', res.data?.messageId);
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

$client = new OmdaaClient('YOUR_API_KEY');
$result = $client->messages()->sendText([
    'sessionId' => 'default',
    'to' => '9665XXXXXXXX',
    'message' => 'Hello from Omdaa',
]);
```

### Python

```python
from omdaa import OmdaaClient

client = OmdaaClient("YOUR_API_KEY")
result = client.messages.send_text({
    "sessionId": "default",
    "to": "9665XXXXXXXX",
    "message": "Hello from Omdaa",
})
```

More examples: [examples/](examples/) · Arabic quick start: [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md) · English: [docs/QUICKSTART-EN.md](docs/QUICKSTART-EN.md)

---

## Platform Integrations

| Integration | Dashboard | Docs |
|-------------|-----------|------|
| **n8n** | [omdaa.com/n8n](https://omdaa.com/n8n/) | [n8n node repo](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |
| **Omdaa AI** | [dashboard/openai](https://omdaa.com/dashboard/openai) | [omdaa.net](https://omdaa.net) |
| **Webhooks** | [dashboard/webhooks](https://omdaa.com/dashboard/webhooks) | API `/api/v1/webhooks` |
| **OMDAA API Free** | [dashboard/free-api](https://omdaa.com/dashboard/free-api) | Outbox push/pull |
| **Zapier** | Integrations page | Webhook templates |
| **Geo Links** | [dashboard/geo-links](https://omdaa.com/dashboard/geo-links) | Tracking links |

---

## Documentation

| Document | Language | Description |
|----------|----------|-------------|
| [README.md](README.md) | English | This file — full ecosystem overview |
| [README.ar.md](README.ar.md) | Arabic | الشرح الكامل بالعربية |
| [DEVELOPERS.md](DEVELOPERS.md) | English | Developer reference |
| [DEVELOPERS.ar.md](DEVELOPERS.ar.md) | Arabic | مرجع المطورين |
| [CHANGELOG.md](CHANGELOG.md) | English | Release history |
| [omdaa.net](https://omdaa.net) | AR / EN | Official documentation site |

---

## Development

```bash
make install   # install all package deps
make test      # JS + PHP + Python + Go
make test-js   # Node.js only
```

JS coverage: `cd packages/omdaa-js && npm run test:coverage`

---

## Repository Structure

```
omdaa-sdk/
├── packages/           # Official SDKs (5 languages)
├── cursor-plugin/      # Cursor MCP WhatsApp plugin
├── examples/           # Runnable send-message samples
├── docs/               # Quick-start guides (AR / EN)
├── .github/            # CI, Dependabot, SEO metadata
└── DEVELOPERS.md       # Platform features for developers
```

---

## Links

| Link | Description |
|------|-------------|
| [omdaa.com](https://omdaa.com) | Website & signup |
| [omdaa.net](https://omdaa.net) | Documentation |
| [API health](https://omdaa.com/api/v1/health) | Live API status |
| [Swagger](https://omdaa.com/api/v1/docs) | OpenAPI reference |
| [GitHub — omdaa-sdk](https://github.com/omdaapi/omdaa-sdk) | This repo |
| [GitHub — n8n node](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) | n8n integration |
| [Support](mailto:support@omdaa.com) | support@omdaa.com |

---

## GitHub SEO (About section)

**Description:** `Official SDK & Cursor MCP for Omdaa WhatsApp API. Free forever. Node.js, PHP, Python, Go, Laravel, n8n. Wassenger MCP alternative.`

**Website:** `https://omdaa.com`

**Topics:** see [.github/TOPICS.txt](.github/TOPICS.txt)

---

<div align="center">
<strong>Omdaa — Free Forever WhatsApp Business API</strong><br/>
Built for developers · Egyptian platform · Global reach
</div>

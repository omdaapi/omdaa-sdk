# Quick Start — Omdaa API (English)

> Short guide to integrate with **Omdaa** WhatsApp Business API using official SDKs.

> **Free Forever:** Omdaa API is completely free — unlimited sessions, messages, Omdaa AI, and webhooks. No credit card required.

---

## 1. Get an API Key

1. Sign up at [omdaa.com](https://omdaa.com).
2. Open [Dashboard → API Keys](https://omdaa.com/dashboard/api-keys).
3. Create an **API Key** and store it securely.

---

## 2. Install the SDK

| Language | Command |
|----------|---------|
| Node.js | `npm install omdaa-api-client` |
| PHP | `composer require omdaa/omdaa-php` |
| Python | `pip install omdaa-api-client` |
| Go | `go get github.com/omdaa/omdaa-go` |

---

## 3. Send your first WhatsApp message

**Node.js:**
```javascript
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });
await client.messages.sendText({
  sessionId: 'default',
  to: '966512345678',
  message: 'Hello from Omdaa',
});
```

Replace `966512345678` with the full WhatsApp number (country code, no `+`).

---

## 4. Next steps

| Resource | Link |
|----------|------|
| Full docs (English) | [README.md](../README.md) |
| Full docs (Arabic) | [README.ar.md](../README.ar.md) |
| Developer reference | [DEVELOPERS.md](../DEVELOPERS.md) |
| Cursor MCP | [omdaa.com/mcp](https://omdaa.com/mcp) |
| n8n node | [GitHub](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |
| API docs | [omdaa.net](https://omdaa.net) |

---

**Omdaa** — Free Forever WhatsApp Business API · [omdaa.com](https://omdaa.com)

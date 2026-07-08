# For developers — Omdaa API

Developer reference: languages, libraries, MCP, n8n, and platform capabilities.

**العربية:** [DEVELOPERS.ar.md](DEVELOPERS.ar.md)

---

## Official repositories

| Repository | Purpose | Link |
|------------|---------|------|
| **omdaa-sdk** | SDK packages + Cursor MCP plugin | [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk) |
| **n8n-nodes-whatsapp-omdaa** | n8n community node | [github.com/omdaapi/n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |

---

## Languages & libraries

| Language | Package | Install |
|----------|---------|---------|
| **Node.js / TypeScript** | `omdaa-api-client` | `npm install omdaa-api-client` |
| **PHP 8.1+** | `omdaa/omdaa-php` | `composer require omdaa/omdaa-php` |
| **Python 3.9+** | `omdaa-api-client` | `pip install omdaa-api-client` |
| **Go 1.21+** | `github.com/omdaapi/omdaa-sdk/packages/omdaa-go` | `go get github.com/omdaapi/omdaa-sdk/packages/omdaa-go@v1.1.1` |
| **Laravel** | `omdaa/omdaa-laravel` | `composer require omdaa/omdaa-laravel` |

All libraries expose the **same API resources**: messages, sessions, webhooks, templates, scheduled & bulk, contacts, groups, chats, storage, security, audit, users, email, AI, and more.

---

## Cursor MCP (WhatsApp in Cursor)

Free HTTP MCP server v1.2 — alternative to paid Wassenger MCP. **Secure Bearer auth** (no API key in URL).

- **Cursor Directory:** [cursor.directory/plugins/omdaa-api](https://cursor.directory/plugins/omdaa-api) (Rule + MCP + Skill)
- **Endpoint:** `POST https://omdaa.com/api/v1/mcp` with header `Authorization: Bearer YOUR_API_KEY`
- **Discovery:** `GET https://omdaa.com/api/v1/mcp/info`
- **Plugin:** [cursor-plugin/omdaa-whatsapp/](cursor-plugin/omdaa-whatsapp/) (v1.2.0)
- **Docs:** [omdaa.net/guides/mcp-en.html](https://omdaa.net/guides/mcp-en.html)
- **Landing:** [omdaa.com/mcp](https://omdaa.com/mcp)

**Tools:** sessions (`create_session`, `get_qr`, `list_sessions`, `get_session_status`), messaging (`send_text_message`, `send_media`, `send_buttons`), `check_whatsapp_number`, `get_webhook_config`, `get_health`.

---

## n8n integration

Install the community node:

```bash
npm install @omdaapi/n8n-nodes-whatsapp-omdaa
```

Or from n8n UI: **Settings → Community Nodes →** `@omdaapi/n8n-nodes-whatsapp-omdaa`

- Source: [n8n-nodes-whatsapp-omdaa](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa)
- Hosted n8n: [omdaa.com/n8n](https://omdaa.com/n8n/)

---

## Quick examples

### Node.js
```js
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });
await client.messages.sendText({
  sessionId: 'default',
  to: '966xxxxxxxxx',
  message: 'Hello from Omdaa',
});
```

### PHP
```php
use Omdaa\Api\OmdaaClient;
$client = new OmdaaClient('YOUR_API_KEY');
$client->messages()->sendText([
  'sessionId' => 'default',
  'to' => '966xxxxxxxxx',
  'message' => 'Hello from Omdaa',
]);
```

### Python
```python
from omdaa import OmdaaClient
client = OmdaaClient("YOUR_API_KEY")
client.messages.send_text({
  "sessionId": "default",
  "to": "966xxxxxxxxx",
  "message": "Hello from Omdaa",
})
```

### Go
```go
import omdaa "github.com/omdaapi/omdaa-sdk/packages/omdaa-go"

client := omdaa.NewOmdaaClient("YOUR_API_KEY", "")
client.Messages.SendText(map[string]interface{}{
  "sessionId": "default",
  "to":        "966xxxxxxxxx",
  "message":   "Hello from Omdaa",
})
```

---

## Platform features

| Feature | Description |
|---------|-------------|
| **Free Forever** | Unlimited sessions, messages, webhooks, Omdaa AI — no credit card |
| **Unified REST API** | `https://omdaa.com/api/v1` — same paths across all SDKs |
| **Auth** | `Authorization: Bearer YOUR_API_KEY` |
| **Baileys sessions** | Multi-device WhatsApp linking via QR |
| **Webhooks** | Real-time events (messages, session status, QR) |
| **Omdaa AI** | Groq / OpenRouter bots via dashboard |
| **OMDAA API Free** | Outbox push/pull for any website or server |
| **MCP** | Cursor integration for AI-assisted WhatsApp ops |
| **Geo Links** | Trackable WhatsApp campaign links |
| **Swagger** | [omdaa.com/api/v1/docs](https://omdaa.com/api/v1/docs) |

---

## Getting an API key

1. Sign up at [omdaa.com](https://omdaa.com).
2. Open [Dashboard → API Keys](https://omdaa.com/dashboard/api-keys).
3. Create a key and use: `Authorization: Bearer YOUR_API_KEY`.

Support: [support@omdaa.com](mailto:support@omdaa.com)

---

<div align="center"><strong>Built for developers — Free Forever</strong></div>

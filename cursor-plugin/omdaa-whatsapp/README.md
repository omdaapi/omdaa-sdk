# Omdaa WhatsApp MCP — Cursor Plugin

Free forever WhatsApp MCP server for [Cursor](https://cursor.com). Connect WhatsApp to your AI assistant: send messages, verify numbers, list sessions, and read webhook config.

**Wassenger MCP alternative** — no Enterprise plan required.

| Resource | Link |
|----------|------|
| **Cursor Directory** | [cursor.directory/plugins/omdaa-api](https://cursor.directory/plugins/omdaa-api) |
| Landing | [omdaa.com/mcp](https://omdaa.com/mcp) |
| Docs (EN) | [omdaa.net/guides/mcp-en.html](https://omdaa.net/guides/mcp-en.html) |
| Docs (AR) | [omdaa.net/guides/mcp-ar.html](https://omdaa.net/guides/mcp-ar.html) |
| API discovery | `GET https://omdaa.com/api/v1/mcp/info` |
| API Keys | [dashboard/api-keys](https://omdaa.com/dashboard/api-keys) |
| Publisher namespace | `@omdaa-api` |

## Install (recommended)

1. Open **[omdaa-api on Cursor Directory](https://cursor.directory/plugins/omdaa-api)** → **Add to Cursor**.
2. Or one-click MCP install:

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=Omdaa%20WhatsApp&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vb21kYWEuY29tL2FwaS92MS9tY3A_a2V5PVlPVVJfQVBJX0tFWSJ9)

3. Replace `YOUR_API_KEY` in Cursor MCP settings with a key from [dashboard/api-keys](https://omdaa.com/dashboard/api-keys).
4. Connect a WhatsApp session (scan QR in [dashboard/sessions](https://omdaa.com/dashboard/sessions)).

## Manual install

Add to Cursor `mcp.json` (recommended — key in header, not URL):

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

Set `OMDAA_API_KEY` in your environment, or paste `Bearer YOUR_API_KEY` directly in `headers`.

## Components (Open Plugins)

| Type | Name | Description |
|------|------|-------------|
| MCP Server | `omdaa` | HTTP MCP → `https://omdaa.com/api/v1/mcp` |
| Rule | `omdaa-whatsapp-mcp` | Guides the agent to use Omdaa tools correctly |
| Skill | `send-whatsapp` | Workflow for send / verify / sessions / webhooks |

## Tools

| Tool | Description |
|------|-------------|
| `list_sessions` | List WhatsApp sessions |
| `get_session_status` | Connection status for a session |
| `send_text_message` | Send a text message |
| `check_whatsapp_number` | Verify if numbers are on WhatsApp |
| `get_webhook_config` | Webhook settings for a session |
| `get_health` | API health check |

## Local test (developers)

```bash
ln -s "$(pwd)" ~/.cursor/plugins/local/omdaa-whatsapp
# Restart Cursor, then configure API key
```

## Publish

| Channel | Status / Link |
|---------|----------------|
| Cursor Directory | ✅ [Listed](https://cursor.directory/plugins/omdaa-api) |
| Cursor Marketplace | [Publisher application](https://cursor.com/marketplace/publish) |
| Source | [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk/tree/main/cursor-plugin/omdaa-whatsapp) |

## License

MIT — Omdaa API ([omdaa.com](https://omdaa.com))

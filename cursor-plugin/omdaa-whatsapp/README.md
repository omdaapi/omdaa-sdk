# Omdaa WhatsApp MCP — Cursor Plugin

Free forever WhatsApp MCP server for [Cursor](https://cursor.com). Connect WhatsApp to your AI assistant: send messages, verify numbers, list sessions, and read webhook config.

- **Landing:** https://omdaa.com/mcp
- **Docs:** https://omdaa.net/guides/mcp-en.html
- **API discovery:** `GET https://omdaa.com/api/v1/mcp/info`
- **API Keys:** https://omdaa.com/dashboard/api-keys

## Install (one click)

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=Omdaa%20WhatsApp&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vb21kYWEuY29tL2FwaS92MS9tY3A_a2V5PVlPVVJfQVBJX0tFWSJ9)

Replace `YOUR_API_KEY` in Cursor MCP settings after install.

## Manual install

Add to `mcp.json`:

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

## Tools

| Tool | Description |
|------|-------------|
| `list_sessions` | List WhatsApp sessions |
| `get_session_status` | Connection status for a session |
| `send_text_message` | Send a text message |
| `check_whatsapp_number` | Verify if numbers are on WhatsApp |
| `get_webhook_config` | Webhook settings for a session |
| `get_health` | API health check |

## Publish to Cursor Marketplace

1. Test locally: `ln -s "$(pwd)" ~/.cursor/plugins/local/omdaa-whatsapp` then restart Cursor.
2. Submit: https://cursor.com/marketplace/publish (repo: `https://github.com/omdaapi/omdaa-sdk`, path: `cursor-plugin/omdaa-whatsapp`)
3. Community listing: https://cursor.directory/plugins/new

## License

MIT — Omdaa API (https://omdaa.com)

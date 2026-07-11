# Omdaa WhatsApp MCP — Cursor Plugin

Free forever WhatsApp MCP server for [Cursor](https://cursor.com). Connect WhatsApp to your AI assistant: create sessions, scan QR, send text/media/buttons, verify numbers, and manage webhooks.

**Wassenger MCP alternative** — no Enterprise plan required · **MCP v2.0.0** · **43 tools** · **Full account control** · **Secure Bearer auth**

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
2. Or one-click MCP install (uses `Authorization` header — not `?key=` in URL):

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=Omdaa%20WhatsApp&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vb21kYWEuY29tL2FwaS92MS9tY3AiLCJoZWFkZXJzIjp7IkF1dGhvcml6YXRpb24iOiJCZWFyZXIgJHtlbnY6T01EQUFfQVBJX0tFWX0ifX0=)

3. Set `OMDAA_API_KEY` in your environment, or paste your key in `headers.Authorization` in Cursor MCP settings.
4. Get API key from [dashboard/api-keys](https://omdaa.com/dashboard/api-keys).
5. Connect WhatsApp: use `create_session` + `get_qr` from MCP, or scan QR in [dashboard/sessions](https://omdaa.com/dashboard/sessions).

## Manual install

Add to Cursor `mcp.json`:

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

## Components (Open Plugins)

| Type | Name | Description |
|------|------|-------------|
| MCP Server | `omdaa` | Streamable HTTP MCP → `https://omdaa.com/api/v1/mcp` |
| Rule | `omdaa-whatsapp-mcp` | Guides the agent to use Omdaa tools correctly |
| Skill | `send-whatsapp` | Workflow for sessions, send, media, buttons, verify |

## Tools (v2.0.0 — 43)

| Area | Tools |
|------|-------|
| Sessions | `list_sessions` · `create_session` · `get_qr` · `regenerate_qr` · `get_session_status` · `delete_session` · `logout_session` · `pause_session` |
| Messaging | `send_text_message` · `send_media` · `send_buttons` · `check_whatsapp_number` |
| Inbox | `list_chats` · `get_messages` · `search_messages` · `list_contacts` |
| Webhooks | `get_webhook_config` · `set_webhook` · `test_webhook` · `remove_webhook` · `list_webhook_events` · `get_webhook_stats` |
| Account | `get_profile` · `update_profile` · `get_account_stats` · `get_mcp_usage` · `get_health` |
| Integrations | Omdaa AI · n8n · Free API · Geo Links |
| API keys | `list_api_keys` · create/revoke/rotate (**JWT only**) |

Destructive tools require `confirm: true`.

## Production check (2026-07-11)

Verified against `https://omdaa.com/api/v1/mcp`:

- `get_health` → healthy · MCP `2.0.0` · 43 tools
- `get_profile` / `list_integrations` / `list_api_keys` → OK
- `create_api_key` via API key → correctly rejected (JWT required)

## Local test (developers)

```bash
ln -s "$(pwd)" ~/.cursor/plugins/local/omdaa-whatsapp
# Restart Cursor, then set OMDAA_API_KEY
```

## Publish

| Channel | Status / Link |
|---------|----------------|
| Cursor Directory | ✅ [Listed](https://cursor.directory/plugins/omdaa-api) |
| Cursor Marketplace | [Publisher application](https://cursor.com/marketplace/publish) |
| Source | [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk/tree/main/cursor-plugin/omdaa-whatsapp) |

## License

MIT — Omdaa API ([omdaa.com](https://omdaa.com))

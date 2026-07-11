---
name: send-whatsapp
description: Control Omdaa WhatsApp and account via MCP v2.0 — sessions, QR, send text/media/buttons, inbox, webhooks, integrations, profile, stats. Use when the user asks about WhatsApp messaging or Omdaa account control from Cursor.
---

# Omdaa MCP v2.0 — WhatsApp + full account control

## Prerequisites

1. **API key** — create at https://omdaa.com/dashboard/api-keys
2. **MCP server** — `omdaa` in Cursor with `Authorization: Bearer` (`https://omdaa.com/api/v1/mcp`)
3. **Connected session** (for send) — `create_session` + `get_qr`, or dashboard QR

## Workflows

### Link a new WhatsApp session

1. `create_session` (optional `deviceName`)
2. Wait 2–5s → `get_qr` / `regenerate_qr`
3. User scans QR → Linked Devices
4. `get_session_status` until `connected`

### Send messages

- Text: `send_text_message` (`sessionId`, `to`, `message`)
- Media: `send_media` (`type` + `mediaUrl` or `mediaBase64`)
- Buttons: `send_buttons` (max 3)
- Verify numbers: `check_whatsapp_number`

### Inbox

- `list_chats` · `get_messages` · `search_messages` · `list_contacts`

### Session lifecycle

- `delete_session` / `logout_session` / `pause_session` — destructive deletes need `confirm: true`

### Webhooks & account

- Webhooks: `get_webhook_config` · `set_webhook` · `test_webhook` · `remove_webhook`
- Profile/stats: `get_profile` · `update_profile` · `get_account_stats` · `get_mcp_usage`
- Integrations: `list_integrations` · Omdaa AI / n8n / Free API / Geo tools
- API keys: `list_api_keys` OK with API key; create/revoke/rotate need **JWT**

## Notes

- Free forever — https://omdaa.com/mcp
- Docs: https://omdaa.net/guides/mcp-en.html · AR: https://omdaa.net/guides/mcp-ar.html
- If MCP is not connected, guide install from https://omdaa.com/mcp

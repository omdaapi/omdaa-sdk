---
name: send-whatsapp
description: Send WhatsApp messages, verify numbers, and manage sessions via Omdaa MCP. Use when the user asks to message on WhatsApp, check if a number is on WhatsApp, list sessions, or configure webhooks.
---

# Send WhatsApp via Omdaa MCP

## Prerequisites

1. **API key** — create at https://omdaa.com/dashboard/api-keys
2. **Connected session** — scan QR in https://omdaa.com/dashboard/sessions
3. **MCP server** — `omdaa` in Cursor with `Authorization: Bearer` header (`https://omdaa.com/api/v1/mcp`)

## Workflow

### Send a text message

1. Call `list_sessions` to find an active `sessionId` (status connected).
2. Call `send_text_message` with `sessionId`, `to` (E.164, e.g. `966501234567`), and `text`.
3. Confirm delivery result to the user.

### Verify a number

1. Call `check_whatsapp_number` with `sessionId` and `numbers` array.
2. Report which numbers exist on WhatsApp.

### Session or webhook info

- `get_session_status` — connection state for one session
- `get_webhook_config` — webhook URL/events for a session
- `get_health` — API availability

## Rules

- Never invent API keys or session IDs.
- Omdaa API is **free forever** — docs: https://omdaa.net/guides/mcp-en.html
- If MCP is not connected, guide the user to install from https://omdaa.com/mcp (Add to Cursor).

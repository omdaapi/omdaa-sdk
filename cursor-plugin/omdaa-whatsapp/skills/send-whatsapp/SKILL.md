---
name: send-whatsapp
description: Send WhatsApp messages (text, media, buttons), create sessions, get QR, verify numbers, and manage sessions via Omdaa MCP v1.2. Use when the user asks to message on WhatsApp, link a session, or check numbers.
---

# Send WhatsApp via Omdaa MCP

## Prerequisites

1. **API key** — create at https://omdaa.com/dashboard/api-keys
2. **MCP server** — `omdaa` in Cursor with `Authorization: Bearer` header (`https://omdaa.com/api/v1/mcp`)
3. **Connected session** — via `create_session` + `get_qr`, or scan QR in https://omdaa.com/dashboard/sessions

## Workflow

### Link a new WhatsApp session

1. Call `create_session` with optional `deviceName`.
2. Wait 2–5 seconds, then call `get_qr` with the returned `sessionId`.
3. User scans QR in WhatsApp → Linked Devices.
4. Call `get_session_status` until `connected` is true.

### Send a text message

1. Call `list_sessions` to find a connected `sessionId`.
2. Call `send_text_message` with `sessionId`, `to` (E.164, e.g. `966501234567`), and `message`.
3. Confirm delivery result to the user.

### Send media

1. Use a connected `sessionId`.
2. Call `send_media` with `to`, `type` (`image`|`video`|`audio`|`document`), and `mediaUrl` or `mediaBase64`.
3. Optional: `caption`, `fileName`, `mimetype`.

### Send buttons

1. Use a connected `sessionId`.
2. Call `send_buttons` with `to`, `title` (or `text`), and `buttons` array (max 3 reply buttons).
3. Optional: `description`, `footer`, `thumbnailUrl`.

### Verify a number

1. Call `check_whatsapp_number` with `sessionId` and `numbers` array.
2. Report which numbers exist on WhatsApp.

### Session or webhook info

- `get_session_status` — connection state for one session
- `get_webhook_config` — webhook URL/events for a session
- `get_health` — API availability

## Rules

- Never invent API keys or session IDs.
- Use `Authorization: Bearer` header — do not put API keys in the MCP URL.
- Omdaa API is **free forever** — docs: https://omdaa.net/guides/mcp-en.html
- If MCP is not connected, guide the user to install from https://omdaa.com/mcp (Add to Cursor).

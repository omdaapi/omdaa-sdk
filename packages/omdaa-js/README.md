# omdaa-api-client

Official JavaScript/TypeScript client for the [Omdaa](https://omdaa.com) WhatsApp Business API.

## Installation

```bash
npm install omdaa-api-client
```

## Quick Start

```javascript
const { OmdaaClient } = require('omdaa-api-client');

const client = new OmdaaClient({
  apiKey: 'your-api-key', // From Omdaa dashboard (API Keys)
  baseURL: 'https://omdaa.com/api/v1', // Optional, this is the default
});

// List sessions
const { data } = await client.sessions.list();

// Send a text message
await client.messages.sendText({
  sessionId: 'default',
  to: '201234567890',
  message: 'Hello from Omdaa!',
});

// Get or set webhook
const webhook = await client.webhooks.get();
await client.webhooks.set({ url: 'https://yoursite.com/webhook', enabled: true });
```

## TypeScript / ESM

```typescript
import { OmdaaClient, OmdaaError } from 'omdaa-api-client';

const client = new OmdaaClient({ apiKey: process.env.OMDAA_API_KEY! });

try {
  const res = await client.messages.sendText({
    sessionId: 'default',
    to: '201234567890',
    message: 'Hi',
  });
  console.log(res.data?.messageId);
} catch (err) {
  if (err instanceof OmdaaError) {
    console.error(err.status, err.message);
  }
}
```

## API Overview

- **Messages**: `client.messages.sendText()`, `sendImage()`, `getReceived()`, `getSent()`, `getStats()`, `getByChat()`
- **Sessions**: `client.sessions.list()`, `create()`, `get()`, `getQr()`, `disconnect()`, `delete()`
- **Webhooks**: `client.webhooks.get()`, `set()`, `remove()`, `test()`, `getEvents()`, `getStats()`

Authentication uses **Bearer** with your API Key (or JWT). Get your API key from the Omdaa dashboard under API Keys.

## License

MIT

# For developers — Omdaa API

Developer-focused: supported languages, official libraries, and platform features.

---

## Languages & official libraries

Integrate with Omdaa API in your preferred language via ready-made libraries or direct HTTP.

| Language / framework | Package | Install | Link |
|---------------------|---------|---------|------|
| **Node.js / TypeScript** | `omdaa-api-client` | `npm install omdaa-api-client` | [npm](https://www.npmjs.com/package/omdaa-api-client) |
| **PHP** | `omdaa/omdaa-php` | `composer require omdaa/omdaa-php` | [Packagist](https://packagist.org/packages/omdaa/omdaa-php) |
| **Python** | `omdaa-api-client` | `pip install omdaa-api-client` | [PyPI](https://pypi.org/project/omdaa-api-client/) |
| **Go** | `github.com/omdaa/omdaa-go` | `go get github.com/omdaa/omdaa-go` | [Source](https://github.com/omdaapi/omdaa-sdk/tree/main/packages/omdaa-go) |
| **Laravel** | `omdaa/omdaa-laravel` | `composer require omdaa/omdaa-laravel` | [Packagist](https://packagist.org/packages/omdaa/omdaa-laravel) |

All libraries support the **same API resources** (messages, sessions, webhooks, templates, scheduled, bulk, contacts, groups, chats, storage, security, audit, users, email, AI, and more).

---

## Quick examples

### Node.js / TypeScript
```js
const { OmdaaClient } = require('omdaa-api-client');
const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });
const res = await client.messages.sendText({
  sessionId: 'default',
  to: '966xxxxxxxxx',
  message: 'Hello from Omdaa',
});
```

### PHP
```php
<?php
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
import "github.com/omdaa/omdaa-go"

client := omdaa.NewOmdaaClient("YOUR_API_KEY", "")
client.Messages.SendText(map[string]interface{}{
  "sessionId": "default",
  "to":        "966xxxxxxxxx",
  "message":   "Hello from Omdaa",
})
```

### Laravel
```php
use Omdaa;
Omdaa::messages()->sendText([
  'sessionId' => 'default',
  'to' => '966xxxxxxxxx',
  'message' => 'Hello from Omdaa',
]);
```

---

## Platform features for developers

| Feature | Description |
|--------|-------------|
| **Unified REST API** | Same paths and responses across all languages; clear docs and easy integration. |
| **Simple auth** | Bearer API Key from dashboard; optional JWT for protected areas. |
| **Full API coverage** | Messages (text, image, file, interactive, lists, buttons, polls), sessions, webhooks, templates, scheduled & bulk, contacts, groups, chats, storage, integrations, queues, security, audit, email, AI, and more. |
| **Webhooks** | Receive events in real time (incoming messages, session status, etc.) without polling. |
| **Scheduling & bulk** | Delayed send and bulk requests with queues and status. |
| **Multi-language SDKs** | Official libraries for Node, PHP, Python, Go, Laravel; you can also use raw HTTP from any language. |

---

## Getting an API key

1. Log in to the [Omdaa dashboard](https://omdaa.com/dashboard).
2. From Settings or the API section, create an **API Key**.
3. Use it in the request header: `Authorization: Bearer YOUR_API_KEY`.

For help and support: [omdaa.com](https://omdaa.com) or official support channels.

---

## Source code

All libraries (including Go) live in a single repo: [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk).

---

<div align="center">**Built for developers**</div>

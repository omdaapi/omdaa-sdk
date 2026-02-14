# Omdaa API — Official SDKs

<!-- SEO: Official SDKs for Omdaa WhatsApp Business API. Send WhatsApp messages, manage sessions, webhooks. Egyptian platform. Full WhatsApp control, AI integration. Node.js, PHP, Python, Go, Laravel. -->

> **Official SDKs** for [Omdaa](https://omdaa.com) **WhatsApp Business API** — Egyptian platform · Full WhatsApp control · AI integration · Node.js · PHP · Python · Go · Laravel

**العربية:** [الشرح الكامل بالعربية (Arabic documentation)](README.ar.md) · **Quick start (AR):** [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md)

[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

---

## What is Omdaa?

**Omdaa** is an **Egyptian** [WhatsApp Business API](https://omdaa.com) platform for **sending and receiving WhatsApp messages**, with **full control** and **AI integration**. Use it to build WhatsApp bots, notifications, and customer support. It lets you:

- **Full control** over sending and receiving text and media messages (images, files, interactive).
- Manage multiple WhatsApp sessions (multi-device) and display QR for linking.
- Configure webhooks to receive events (incoming messages, read receipts, etc.).
- Message templates, scheduled and bulk sending, contacts and groups.
- **Ready-made AI integration** to improve replies and customer engagement.
- Dashboard, users, billing, and security.

All libraries in this repo use the **same API** and support these features. Source: [github.com/omdaapi/omdaa-sdk](https://github.com/omdaapi/omdaa-sdk).

---

## Packages & languages

| Package | Language | Install |
|--------|----------|---------|
| [omdaa-js](packages/omdaa-js) | Node.js / TypeScript | `npm install omdaa-api-client` |
| [omdaa-php](packages/omdaa-php) | PHP 8.1+ | `composer require omdaa/omdaa-php` |
| [omdaa-python](packages/omdaa-python) | Python 3.9+ | `pip install omdaa-api-client` |
| [omdaa-go](packages/omdaa-go) | Go | `go get github.com/omdaa/omdaa-go` |
| [omdaa-laravel](packages/omdaa-laravel) | Laravel | `composer require omdaa/omdaa-laravel` |

---

## Installation (per language)

### Node.js / TypeScript

```bash
npm install omdaa-api-client
```

- Requires **Node.js 18+**.
- Supports CommonJS, ESM, and TypeScript.

### PHP

```bash
composer require omdaa/omdaa-php
```

- Requires **PHP 8.1+** and **GuzzleHTTP ^7.8**.

### Python

```bash
pip install omdaa-api-client
```

- Requires **Python 3.9+** and **requests >= 2.28**.

---

## Quick start examples

Replace `YOUR_API_KEY` with your key from the [Omdaa dashboard](https://omdaa.com/dashboard) (API Keys), and `9665XXXXXXXX` with the recipient WhatsApp number (country code, no +).

### Node.js

```javascript
const { OmdaaClient, OmdaaError } = require('omdaa-api-client');

const client = new OmdaaClient({ apiKey: 'YOUR_API_KEY' });

(async () => {
  try {
    const sessions = await client.sessions.list();
    console.log('Sessions:', sessions.data);

    const res = await client.messages.sendText({
      sessionId: 'default',
      to: '9665XXXXXXXX',
      message: 'Hello from Omdaa',
    });
    console.log('Message sent:', res.data?.messageId);
  } catch (err) {
    if (err.name === 'OmdaaError') console.error(err.status, err.message);
    else throw err;
  }
})();
```

### PHP

```php
<?php
require __DIR__ . '/vendor/autoload.php';

use Omdaa\Api\OmdaaClient;
use Omdaa\Api\OmdaaException;

$client = new OmdaaClient('YOUR_API_KEY');

try {
    $sessions = $client->sessions()->list();
    $result = $client->messages()->sendText([
        'sessionId' => 'default',
        'to' => '9665XXXXXXXX',
        'message' => 'Hello from Omdaa',
    ]);
    print_r($result);
} catch (OmdaaException $e) {
    echo $e->getStatusCode() . ': ' . $e->getMessage();
}
```

### Python

```python
import os
from omdaa import OmdaaClient, OmdaaError

client = OmdaaClient(os.environ.get("OMDAA_API_KEY", "YOUR_API_KEY"))

try:
    sessions = client.sessions.list()
    result = client.messages.send_text({
        "sessionId": "default",
        "to": "9665XXXXXXXX",
        "message": "Hello from Omdaa",
    })
    print(result)
except OmdaaError as e:
    print(e.status_code, str(e))
```

---

## Ready-to-run examples (from repo)

The **[examples/](examples/)** folder contains runnable scripts:

| File | Description | Run |
|------|-------------|-----|
| [send-message.js](examples/send-message.js) | Send text (Node) | `node examples/send-message.js` |
| [send-message.php](examples/send-message.php) | Send text (PHP) | `php examples/send-message.php` |
| [send-message.py](examples/send-message.py) | Send text (Python) | `python3 examples/send-message.py` |

**From repo root:**

1. Install deps (once): `make install`
2. Set API key: `export OMDAA_API_KEY=your-api-key`
3. Optional recipient: `export OMDAA_TO=9665XXXXXXXX`
4. Run the example for your language as in the table above.

---

## Documentation

| Link | Description |
|------|-------------|
| [README (this file)](README.md) | Full docs in English |
| [README.ar.md](README.ar.md) | Full docs in **Arabic** (الشرح بالعربية) |
| [docs/QUICKSTART-AR.md](docs/QUICKSTART-AR.md) | Quick start in **Arabic** (البدء السريع) |
| [CHANGELOG.md](CHANGELOG.md) | Version history and release notes |

## Links

| Link | Description |
|------|-------------|
| [omdaa.com](https://omdaa.com) | Website & signup |
| [omdaa.com/dashboard](https://omdaa.com/dashboard) | Dashboard & API key |
| [API docs](https://omdaa.com/docs) | API reference (if available on site) |
| [This repo](https://github.com/omdaapi/omdaa-sdk) | Source code |

---

## Tests (from repo root)

```bash
make install   # once
make test      # JS + PHP + Python + Go
```

Or per language: `make test-js`, `make test-php`, `make test-python`, `make test-go`.  
JS coverage: `cd packages/omdaa-js && npm run test:coverage`.

---

## For developers

- **[DEVELOPERS.md](DEVELOPERS.md)** — Languages, quick examples, platform features.

---

## GitHub SEO

- **About → Description:**  
  `Official SDK for Omdaa WhatsApp Business API (Egypt). Node.js, PHP, Python, Go, Laravel. Full WhatsApp control & AI integration.`
- **About → Website:** `https://omdaa.com`
- **Topics:** `whatsapp`, `whatsapp-api`, `omdaa`, `sdk`, `egypt`, `nodejs`, `php`, `python`, `laravel`, `api-client`, `typescript`

See [.github/DESCRIPTION.txt](.github/DESCRIPTION.txt) (EN), [.github/DESCRIPTION-AR.txt](.github/DESCRIPTION-AR.txt) (AR), and [.github/TOPICS.txt](.github/TOPICS.txt) for copy-paste.

---

<div align="center"><strong>Omdaa WhatsApp Business API · Egyptian platform</strong></div>

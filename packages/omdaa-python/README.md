# omdaa-api-client (Python)

Official Python client for the [Omdaa](https://omdaa.com) WhatsApp Business API.

## Installation

```bash
pip install omdaa-api-client
```

## Quick Start

```python
from omdaa import OmdaaClient, OmdaaError

client = OmdaaClient("your-api-key")
# Optional: OmdaaClient("your-api-key", base_url="https://omdaa.com/api/v1")

try:
    sessions = client.sessions.list()
    result = client.messages.send_text({
        "sessionId": "default",
        "to": "201234567890",
        "message": "Hello from Omdaa Python!",
    })
    client.webhooks.set({"url": "https://yoursite.com/webhook", "enabled": True})
except OmdaaError as e:
    print(e.status_code, str(e))
```

## API Resources

Same as the Node.js SDK: `messages`, `sessions`, `webhooks`, `templates`, `scheduled`, `bulk`, `contacts`, `groups`, `chats`, `business`, `storage`, `labels`, `integrations`, `queue`, `interactive`, `api_keys`, `profile`, `dashboard`, `plans`, `billing`, `referral`, `notifications`, `metrics`, `backup`, `security`, `audit`, `organizations`, `settings`, `channels`, `privacy`, `support`, `proxy`, `calls`, `auth`, `users`, `email`, `ai`.

## Requirements

- Python 3.9+
- requests >= 2.28.0

## Development & tests

```bash
pip install -e ".[dev]"
python -m pytest tests -v
# or: python -m unittest discover -s tests -v
```

## License

MIT

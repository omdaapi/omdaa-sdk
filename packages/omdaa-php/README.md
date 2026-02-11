# omdaa-php

Official PHP client for the [Omdaa](https://omdaa.com) WhatsApp Business API.

## Installation

```bash
composer require omdaa/omdaa-php
```

## Quick Start

```php
<?php

require __DIR__ . '/vendor/autoload.php';

use Omdaa\Api\OmdaaClient;
use Omdaa\Api\OmdaaException;

$client = new OmdaaClient('your-api-key');
// Optional: new OmdaaClient('your-api-key', 'https://omdaa.com/api/v1');

try {
    // List sessions
    $sessions = $client->sessions()->list();

    // Send a text message
    $result = $client->messages()->sendText([
        'sessionId' => 'default',
        'to' => '201234567890',
        'message' => 'Hello from Omdaa PHP!',
    ]);

    // Webhooks
    $client->webhooks()->set(['url' => 'https://yoursite.com/webhook', 'enabled' => true]);
} catch (OmdaaException $e) {
    echo $e->getStatusCode() . ': ' . $e->getMessage();
}
```

## API Resources

All resources match the JavaScript SDK: `messages()`, `sessions()`, `webhooks()`, `templates()`, `scheduled()`, `bulk()`, `contacts()`, `groups()`, `chats()`, `business()`, `storage()`, `labels()`, `integrations()`, `queue()`, `interactive()`, `apiKeys()`, `profile()`, `dashboard()`, `plans()`, `billing()`, `referral()`, `notifications()`, `metrics()`, `backup()`, `security()`, `audit()`, `organizations()`, `settings()`, `channels()`, `privacy()`, `support()`, `proxy()`, `calls()`, `auth()`, `users()`, `email()`, `ai()`.

## Requirements

- PHP 8.1+
- GuzzleHTTP 7.8+

## Development & tests

```bash
composer install
vendor/bin/phpunit
```

## License

MIT

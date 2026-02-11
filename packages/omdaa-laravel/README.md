# omdaa-laravel

Laravel integration for the [Omdaa](https://omdaa.com) WhatsApp Business API. Wraps [omdaa/omdaa-php](https://github.com/omdaa/omdaa-php).

## Installation

```bash
composer require omdaa/omdaa-laravel
```

Publish config (optional):

```bash
php artisan vendor:publish --tag=omdaa-config
```

Add to `.env`:

```
OMDAA_API_KEY=your-api-key
OMDAA_BASE_URL=https://omdaa.com/api/v1
```

## Usage

### Via Facade

```php
use Omdaa;

$sessions = Omdaa::sessions()->list();
Omdaa::messages()->sendText([
    'sessionId' => 'default',
    'to' => '201234567890',
    'message' => 'Hello from Laravel!',
]);
Omdaa::webhooks()->set(['url' => 'https://yoursite.com/webhook', 'enabled' => true]);
```

### Via dependency injection

```php
use Omdaa\Laravel\OmdaaManager;

class MyController
{
    public function __construct(
        private OmdaaManager $omdaa
    ) {}

    public function index()
    {
        $client = $this->omdaa->client();
        $sessions = $client->sessions()->list();
        return response()->json($sessions);
    }
}
```

## Local development (monorepo)

From the repo root, install with the local PHP package:

```bash
cd packages/omdaa-laravel
composer install
```

The `composer.json` includes a path repository pointing to `../omdaa-php`, so the local omdaa-php is used. For production, install from Packagist: `composer require omdaa/omdaa-laravel`.

## Requirements

- PHP 8.1+
- Laravel 9.x, 10.x or 11.x
- omdaa/omdaa-php ^1.0

## License

MIT

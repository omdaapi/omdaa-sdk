<?php
/**
 * Example: Send a text message via Omdaa API (PHP)
 *
 * Run from repo root after install:
 *   cd packages/omdaa-php && composer install && cd ../..
 *   export OMDAA_API_KEY=your-api-key
 *   export OMDAA_TO=9665XXXXXXXX   # optional
 *   php examples/send-message.php
 *
 * Or from your project after: composer require omdaa/omdaa-php
 * Then copy this script and adjust autoload path if needed.
 */

$autoloadFromRoot = __DIR__ . '/../packages/omdaa-php/vendor/autoload.php';
$autoloadLocal   = __DIR__ . '/vendor/autoload.php';

if (file_exists($autoloadFromRoot)) {
    require_once $autoloadFromRoot;
} elseif (file_exists($autoloadLocal)) {
    require_once $autoloadLocal;
} else {
    fwrite(STDERR, "Run from repo root after: make install or composer install in packages/omdaa-php\n");
    exit(1);
}

use Omdaa\Api\OmdaaClient;
use Omdaa\Api\OmdaaException;

$apiKey = getenv('OMDAA_API_KEY') ?: '';
$to     = getenv('OMDAA_TO') ?: '966500000000';

if ($apiKey === '') {
    fwrite(STDERR, "Set OMDAA_API_KEY then run the script again.\n");
    exit(1);
}

$client = new OmdaaClient($apiKey);

try {
    $result = $client->messages()->sendText([
        'sessionId' => 'default',
        'to'        => $to,
        'message'   => 'Hello from Omdaa SDK (PHP)',
    ]);
    echo 'Sent successfully: ', json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), "\n";
} catch (OmdaaException $e) {
    fwrite(STDERR, 'API error: ' . $e->getStatusCode() . ' ' . $e->getMessage() . "\n");
    exit(1);
}

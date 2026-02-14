<?php
/**
 * مثال جاهز: إرسال رسالة نصية عبر Omdaa API (PHP)
 *
 * التشغيل من جذر المستودع بعد التثبيت:
 *   cd packages/omdaa-php && composer install && cd ../..
 *   export OMDAA_API_KEY=your-api-key
 *   export OMDAA_TO=9665XXXXXXXX   # اختياري
 *   php examples/send-message.php
 *
 * أو من مشروعك بعد: composer require omdaa/omdaa-php
 * ثم انسخ السكربت وعدّل مسار autoload إن لزم.
 */

$autoloadFromRoot = __DIR__ . '/../packages/omdaa-php/vendor/autoload.php';
$autoloadLocal   = __DIR__ . '/vendor/autoload.php';

if (file_exists($autoloadFromRoot)) {
    require_once $autoloadFromRoot;
} elseif (file_exists($autoloadLocal)) {
    require_once $autoloadLocal;
} else {
    fwrite(STDERR, "شغّل من جذر المستودع بعد: make install أو composer install داخل packages/omdaa-php\n");
    exit(1);
}

use Omdaa\Api\OmdaaClient;
use Omdaa\Api\OmdaaException;

$apiKey = getenv('OMDAA_API_KEY') ?: '';
$to     = getenv('OMDAA_TO') ?: '966500000000';

if ($apiKey === '') {
    fwrite(STDERR, "عيّن OMDAA_API_KEY ثم شغّل السكربت مرة أخرى.\n");
    exit(1);
}

$client = new OmdaaClient($apiKey);

try {
    $result = $client->messages()->sendText([
        'sessionId' => 'default',
        'to'        => $to,
        'message'   => 'مرحباً من Omdaa SDK (PHP)',
    ]);
    echo 'تم الإرسال بنجاح: ', json_encode($result, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), "\n";
} catch (OmdaaException $e) {
    fwrite(STDERR, 'خطأ من API: ' . $e->getStatusCode() . ' ' . $e->getMessage() . "\n");
    exit(1);
}

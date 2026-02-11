<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class AuditResource
{
    public function __construct(private Client $client) {}

    public function getLogs(array $params = []): array { return $this->client->get('/audit', $params); }
    public function export(array $params = []): array { return $this->client->get('/audit/export', $params); }
}

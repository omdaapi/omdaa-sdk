<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class BackupResource
{
    public function __construct(private Client $client) {}

    public function create(array $body = []): array { return $this->client->post('/backup', $body); }
    public function list(array $params = []): array { return $this->client->get('/backup', $params); }
    public function restore(array $body): array { return $this->client->post('/backup/restore', $body); }
}

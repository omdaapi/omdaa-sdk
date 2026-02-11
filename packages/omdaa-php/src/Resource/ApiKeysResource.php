<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ApiKeysResource
{
    public function __construct(private Client $client) {}

    public function getAll(): array { return $this->client->get('/api-keys'); }
    public function create(array $body = []): array { return $this->client->post('/api-keys/create', $body); }
    public function update(string $keyId, array $body): array { return $this->client->put('/api-keys/' . rawurlencode($keyId), $body); }
    public function revoke(string $keyId): array { return $this->client->delete('/api-keys/' . rawurlencode($keyId)); }
    public function rotate(string $keyId): array { return $this->client->post('/api-keys/' . rawurlencode($keyId) . '/rotate'); }
    public function getStats(): array { return $this->client->get('/api-keys/stats'); }
    public function getUsage(string $keyId): array { return $this->client->get('/api-keys/' . rawurlencode($keyId) . '/usage'); }
}

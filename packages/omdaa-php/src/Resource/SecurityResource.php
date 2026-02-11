<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class SecurityResource
{
    public function __construct(private Client $client) {}

    public function addToWhitelist(array $body): array { return $this->client->post('/security/whitelist', $body); }
    public function getWhitelist(): array { return $this->client->get('/security/whitelist'); }
    public function removeFromWhitelist(string $ipAddress): array { return $this->client->delete('/security/whitelist/' . rawurlencode($ipAddress)); }
    public function getLogs(array $params = []): array { return $this->client->get('/security/logs', $params); }
}

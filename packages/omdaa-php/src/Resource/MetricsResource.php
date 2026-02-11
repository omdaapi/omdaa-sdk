<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class MetricsResource
{
    public function __construct(private Client $client) {}

    public function getAll(array $params = []): array { return $this->client->get('/metrics', $params); }
    public function getSummary(array $params = []): array { return $this->client->get('/metrics/summary', $params); }
    public function getHealth(array $params = []): array { return $this->client->get('/metrics/health', $params); }
    public function getUnhealthy(array $params = []): array { return $this->client->get('/metrics/health/unhealthy', $params); }
    public function getSession(string $sessionId, array $params = []): array { return $this->client->get('/metrics/session/' . rawurlencode($sessionId), $params); }
    public function getUser(string $userId, array $params = []): array { return $this->client->get('/metrics/user/' . rawurlencode($userId), $params); }
    public function getMessageStats(array $params = []): array { return $this->client->get('/metrics/messages/stats', $params); }
    public function refresh(): array { return $this->client->post('/metrics/refresh'); }
}

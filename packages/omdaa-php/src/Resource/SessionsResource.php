<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class SessionsResource
{
    public function __construct(private Client $client) {}

    public function list(): array
    {
        return $this->client->get('/sessions');
    }

    public function create(array $params = []): array
    {
        return $this->client->post('/sessions/create', $params);
    }

    public function get(string $sessionId): array
    {
        return $this->client->get('/sessions/' . rawurlencode($sessionId));
    }

    public function getQr(string $sessionId): array
    {
        return $this->client->get('/sessions/' . rawurlencode($sessionId) . '/qr');
    }

    public function disconnect(string $sessionId): array
    {
        return $this->client->delete('/sessions/' . rawurlencode($sessionId) . '/logout');
    }

    public function delete(string $sessionId): array
    {
        return $this->client->delete('/sessions/delete/' . rawurlencode($sessionId));
    }
}

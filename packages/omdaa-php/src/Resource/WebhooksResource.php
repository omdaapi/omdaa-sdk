<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class WebhooksResource
{
    public function __construct(private Client $client) {}

    public function get(): array
    {
        return $this->client->get('/webhooks');
    }

    public function set(array $params): array
    {
        return $this->client->post('/webhooks/set', $params);
    }

    public function remove(): array
    {
        return $this->client->delete('/webhooks/remove');
    }

    public function test(): array
    {
        return $this->client->get('/webhooks/test');
    }

    public function getEvents(array $params = []): array
    {
        return $this->client->get('/webhooks/events', $params);
    }

    public function getStats(): array
    {
        return $this->client->get('/webhooks/stats');
    }
}

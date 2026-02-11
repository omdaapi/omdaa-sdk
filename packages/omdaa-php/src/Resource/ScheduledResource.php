<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ScheduledResource
{
    public function __construct(private Client $client) {}

    public function schedule(array $body): array { return $this->client->post('/scheduled', $body); }
    public function getScheduledMessages(array $params = []): array { return $this->client->get('/scheduled', $params); }
    public function cancel(string $scheduledMessageId): array { return $this->client->delete('/scheduled/' . rawurlencode($scheduledMessageId)); }
}

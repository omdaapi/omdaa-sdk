<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ChannelsResource
{
    public function __construct(private Client $client) {}

    public function getAll(array $params = []): array { return $this->client->get('/channels', $params); }
    public function create(array $body): array { return $this->client->post('/channels', $body); }
    public function get(string $channelId): array { return $this->client->get('/channels/' . rawurlencode($channelId)); }
    public function update(string $channelId, array $body): array { return $this->client->put('/channels/' . rawurlencode($channelId), $body); }
    public function delete(string $channelId): array { return $this->client->delete('/channels/' . rawurlencode($channelId)); }
    public function getStats(string $channelId): array { return $this->client->get('/channels/' . rawurlencode($channelId) . '/stats'); }
}

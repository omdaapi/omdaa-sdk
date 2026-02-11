<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class LabelsResource
{
    public function __construct(private Client $client) {}

    public function create(array $body): array { return $this->client->post('/labels', $body); }
    public function getUserLabels(array $params = []): array { return $this->client->get('/labels', $params); }
    public function search(array $params = []): array { return $this->client->get('/labels/search', $params); }
    public function getStats(array $params = []): array { return $this->client->get('/labels/stats', $params); }
    public function sync(): array { return $this->client->post('/labels/sync'); }
    public function getLabel(string $labelId): array { return $this->client->get('/labels/' . rawurlencode($labelId)); }
    public function update(string $labelId, array $body): array { return $this->client->put('/labels/' . rawurlencode($labelId), $body); }
    public function delete(string $labelId): array { return $this->client->delete('/labels/' . rawurlencode($labelId)); }
    public function assignToMessage(string $labelId, string $messageId): array { return $this->client->post('/labels/' . rawurlencode($labelId) . '/messages/' . rawurlencode($messageId)); }
    public function removeFromMessage(string $labelId, string $messageId): array { return $this->client->delete('/labels/' . rawurlencode($labelId) . '/messages/' . rawurlencode($messageId)); }
    public function getMessagesByLabel(string $labelId, array $params = []): array { return $this->client->get('/labels/' . rawurlencode($labelId) . '/messages', $params); }
}

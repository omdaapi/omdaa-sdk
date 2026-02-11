<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class NotificationsResource
{
    public function __construct(private Client $client) {}

    public function getAll(array $params = []): array { return $this->client->get('/notifications', $params); }
    public function getStats(): array { return $this->client->get('/notifications/stats'); }
    public function sendTest(array $body = []): array { return $this->client->post('/notifications/test', $body); }
    public function markAllRead(): array { return $this->client->put('/notifications/read-all'); }
    public function markAsRead(string $notificationId): array { return $this->client->put('/notifications/' . rawurlencode($notificationId) . '/read'); }
    public function delete(string $notificationId): array { return $this->client->delete('/notifications/' . rawurlencode($notificationId)); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class UsersResource
{
    public function __construct(private Client $client) {}

    public function getMe(): array { return $this->client->get('/users/me'); }
    public function updateMe(array $body): array { return $this->client->put('/users/me', $body); }
    public function getStats(): array { return $this->client->get('/users/stats'); }
    public function getPreferences(): array { return $this->client->get('/users/preferences'); }
    public function updatePreferences(array $body): array { return $this->client->put('/users/preferences', $body); }
    public function getNotificationSettings(): array { return $this->client->get('/users/notification-settings'); }
    public function updateNotificationSettings(array $body): array { return $this->client->put('/users/notification-settings', $body); }
    public function savePushSubscription(array $body): array { return $this->client->post('/users/push-subscription', $body); }
    public function deletePushSubscription(): array { return $this->client->delete('/users/push-subscription'); }
    public function deleteMe(): array { return $this->client->delete('/users/me'); }
}

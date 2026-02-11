<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class SettingsResource
{
    public function __construct(private Client $client) {}

    public function get(): array { return $this->client->get('/settings'); }
    public function update(array $body): array { return $this->client->put('/settings', $body); }
    public function changePassword(array $body): array { return $this->client->post('/settings/change-password', $body); }
    public function updateProfile(array $body): array { return $this->client->put('/settings/profile', $body); }
}

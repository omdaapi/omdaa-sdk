<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class PrivacyResource
{
    public function __construct(private Client $client) {}

    public function getSettings(array $params = []): array { return $this->client->get('/privacy/settings', $params); }
    public function updateLastSeen(array $body): array { return $this->client->put('/privacy/last-seen', $body); }
    public function updateProfilePicture(array $body): array { return $this->client->put('/privacy/profile-picture', $body); }
    public function updateStatus(array $body): array { return $this->client->put('/privacy/status', $body); }
    public function updateOnline(array $body): array { return $this->client->put('/privacy/online', $body); }
    public function updateGroupAdd(array $body): array { return $this->client->put('/privacy/group-add', $body); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ProfileResource
{
    public function __construct(private Client $client) {}

    public function get(array $params = []): array { return $this->client->get('/profile', $params); }
    public function updateName(array $body): array { return $this->client->put('/profile/name', $body); }
    public function updateStatus(array $body): array { return $this->client->put('/profile/status', $body); }
    public function updatePicture(array $body): array { return $this->client->put('/profile/picture', $body); }
    public function removePicture(): array { return $this->client->delete('/profile/picture'); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class StorageResource
{
    public function __construct(private Client $client) {}

    public function configure(array $body): array { return $this->client->post('/storage/configure', $body); }
    public function getUrl(array $params = []): array { return $this->client->get('/storage/url', $params); }
    public function deleteMedia(array $body = []): array { return $this->client->delete('/storage/delete', $body); }
    public function getStatus(): array { return $this->client->get('/storage/status'); }
}

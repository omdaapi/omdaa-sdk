<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class BusinessResource
{
    public function __construct(private Client $client) {}

    public function getCatalog(array $params = []): array { return $this->client->get('/business/catalog', $params); }
    public function getCollections(array $params = []): array { return $this->client->get('/business/collections', $params); }
    public function getProfile(array $params = []): array { return $this->client->get('/business/profile', $params); }
}

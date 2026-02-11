<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ProxyResource
{
    public function __construct(private Client $client) {}

    public function get(): array { return $this->client->get('/proxy'); }
    public function set(array $body): array { return $this->client->post('/proxy/set', $body); }
    public function remove(): array { return $this->client->post('/proxy/remove'); }
    public function test(array $body = []): array { return $this->client->post('/proxy/test', $body); }
}

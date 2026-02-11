<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class CallsResource
{
    public function __construct(private Client $client) {}

    public function offer(array $body): array { return $this->client->post('/calls/offer', $body); }
    public function handle(array $body): array { return $this->client->post('/calls/handle', $body); }
}

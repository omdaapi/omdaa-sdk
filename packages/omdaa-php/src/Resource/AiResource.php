<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class AiResource
{
    public function __construct(private Client $client) {}

    public function chat(array $body): array { return $this->client->post('/ai/assistant', $body); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class InteractiveResource
{
    public function __construct(private Client $client) {}

    public function sendButtons(array $body): array { return $this->client->post('/interactive/buttons', $body); }
    public function sendList(array $body): array { return $this->client->post('/interactive/lists', $body); }
    public function sendTemplate(array $body): array { return $this->client->post('/interactive/templates', $body); }
}

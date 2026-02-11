<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ContactsResource
{
    public function __construct(private Client $client) {}

    public function getContacts(array $params = []): array { return $this->client->get('/contacts', $params); }
    public function getPicture(string $jid, array $params): array { return $this->client->get('/contacts/' . rawurlencode($jid) . '/picture', $params); }
    public function getInfo(string $jid, array $params): array { return $this->client->get('/contacts/' . rawurlencode($jid) . '/info', $params); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class OrganizationsResource
{
    public function __construct(private Client $client) {}

    public function getAll(): array { return $this->client->get('/organizations'); }
    public function create(array $body): array { return $this->client->post('/organizations', $body); }
    public function get(string $id): array { return $this->client->get('/organizations/' . rawurlencode($id)); }
    public function update(string $id, array $body): array { return $this->client->put('/organizations/' . rawurlencode($id), $body); }
    public function delete(string $id): array { return $this->client->delete('/organizations/' . rawurlencode($id)); }
    public function addMember(string $id, array $body): array { return $this->client->post('/organizations/' . rawurlencode($id) . '/members', $body); }
    public function removeMember(string $id, string $userId): array { return $this->client->delete('/organizations/' . rawurlencode($id) . '/members/' . rawurlencode($userId)); }
    public function getTeams(string $id): array { return $this->client->get('/organizations/' . rawurlencode($id) . '/teams'); }
}

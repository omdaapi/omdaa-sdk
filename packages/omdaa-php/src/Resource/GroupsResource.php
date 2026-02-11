<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class GroupsResource
{
    public function __construct(private Client $client) {}

    public function getGroups(array $params = []): array { return $this->client->get('/groups', $params); }
    public function getDetails(string $groupId, array $params = []): array { return $this->client->get('/groups/' . rawurlencode($groupId), $params); }
    public function sendMessage(string $groupId, array $body): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/send', $body); }
    public function create(array $body): array { return $this->client->post('/groups/create', $body); }
    public function updateSubject(string $groupId, array $body): array { return $this->client->put('/groups/' . rawurlencode($groupId) . '/subject', $body); }
    public function updateDescription(string $groupId, array $body): array { return $this->client->put('/groups/' . rawurlencode($groupId) . '/description', $body); }
    public function addParticipants(string $groupId, array $body): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/participants/add', $body); }
    public function removeParticipants(string $groupId, array $body): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/participants/remove', $body); }
    public function leave(string $groupId): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/leave'); }
    public function setAdmin(string $groupId, array $body): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/admin', $body); }
    public function updateSettings(string $groupId, array $body): array { return $this->client->put('/groups/' . rawurlencode($groupId) . '/settings', $body); }
    public function getInviteLink(string $groupId, array $params = []): array { return $this->client->get('/groups/' . rawurlencode($groupId) . '/invite-link', $params); }
    public function revokeInviteLink(string $groupId): array { return $this->client->delete('/groups/' . rawurlencode($groupId) . '/invite-link'); }
    public function toggleEphemeral(string $groupId, array $body = []): array { return $this->client->post('/groups/' . rawurlencode($groupId) . '/ephemeral', $body); }
    public function acceptInvite(array $body): array { return $this->client->post('/groups/accept-invite', $body); }
}

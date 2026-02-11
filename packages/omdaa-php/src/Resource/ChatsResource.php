<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ChatsResource
{
    public function __construct(private Client $client) {}

    public function pin(string $jid, array $body = []): array { return $this->client->post('/chats/' . rawurlencode($jid) . '/pin', $body); }
    public function unpin(string $jid): array { return $this->client->delete('/chats/' . rawurlencode($jid) . '/pin'); }
    public function archive(string $jid, array $body = []): array { return $this->client->post('/chats/' . rawurlencode($jid) . '/archive', $body); }
    public function unarchive(string $jid): array { return $this->client->delete('/chats/' . rawurlencode($jid) . '/archive'); }
    public function getPinned(array $params = []): array { return $this->client->get('/chats/pinned', $params); }
    public function getArchived(array $params = []): array { return $this->client->get('/chats/archived', $params); }
    public function search(array $params = []): array { return $this->client->get('/chats/search', $params); }
    public function searchInChat(string $jid, array $params = []): array { return $this->client->get('/chats/' . rawurlencode($jid) . '/search', $params); }
    public function getStatistics(string $jid, array $params = []): array { return $this->client->get('/chats/' . rawurlencode($jid) . '/statistics', $params); }
    public function exportChat(string $jid, array $params = []): array { return $this->client->get('/chats/' . rawurlencode($jid) . '/export', $params); }
    public function markUnread(array $body): array { return $this->client->post('/chats/mark-unread', $body); }
    public function block(array $body): array { return $this->client->post('/chats/block', $body); }
    public function deleteMessage(array $body): array { return $this->client->post('/chats/delete-message', $body); }
    public function updateMessage(array $body): array { return $this->client->put('/chats/update-message', $body); }
    public function getBase64(array $body): array { return $this->client->post('/chats/get-base64', $body); }
    public function getPrivacySettings(array $params = []): array { return $this->client->get('/chats/privacy-settings', $params); }
    public function updatePrivacySettings(array $body): array { return $this->client->put('/chats/privacy-settings', $body); }
    public function whatsappNumber(array $body): array { return $this->client->post('/chats/whatsapp-number', $body); }
    public function fetchProfilePicture(array $body): array { return $this->client->post('/chats/profile-picture', $body); }
    public function fetchProfile(array $body): array { return $this->client->post('/chats/profile', $body); }
    public function findByRemoteJid(array $params): array { return $this->client->get('/chats/find-by-remote-jid', $params); }
    public function sendPresence(array $body): array { return $this->client->post('/chats/send-presence', $body); }
    public function getStatusMessages(array $params = []): array { return $this->client->get('/chats/status-messages', $params); }
}

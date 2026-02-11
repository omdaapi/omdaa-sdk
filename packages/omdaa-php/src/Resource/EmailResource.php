<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class EmailResource
{
    public function __construct(private Client $client) {}

    public function getStatus(): array { return $this->client->get('/email/status'); }
    public function testConnection(): array { return $this->client->get('/email/test'); }
    public function send(array $body): array { return $this->client->post('/email/send', $body); }
    public function fetchImap(array $params = []): array { return $this->client->get('/email/imap', $params); }
    public function listImapFolders(): array { return $this->client->get('/email/imap/folders'); }
    public function fetchPop(array $params = []): array { return $this->client->get('/email/pop', $params); }
    public function sendAdvanced(array $body): array { return $this->client->post('/email/advanced/send', $body); }
    public function sendTemplate(array $body): array { return $this->client->post('/email/advanced/send-template', $body); }
    public function sendBulk(array $body): array { return $this->client->post('/email/advanced/send-bulk', $body); }
    public function getAllEmails(array $params = []): array { return $this->client->get('/email/advanced/emails', $params); }
    public function searchEmails(array $params = []): array { return $this->client->get('/email/advanced/emails/search', $params); }
    public function getEmailsByEntity(string $entityType, string $entityId): array { return $this->client->get('/email/advanced/emails/entity/' . rawurlencode($entityType) . '/' . rawurlencode($entityId)); }
    public function getEmailById(string $id): array { return $this->client->get('/email/advanced/emails/' . rawurlencode($id)); }
    public function deleteEmail(string $id): array { return $this->client->delete('/email/advanced/emails/' . rawurlencode($id)); }
    public function fetchAndStore(array $body = []): array { return $this->client->post('/email/advanced/fetch-store', $body); }
    public function getStatistics(): array { return $this->client->get('/email/advanced/statistics'); }
    public function retryFailed(array $body = []): array { return $this->client->post('/email/advanced/retry-failed', $body); }
}

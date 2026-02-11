<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class SupportResource
{
    public function __construct(private Client $client) {}

    public function getTickets(array $params = []): array { return $this->client->get('/support/tickets', $params); }
    public function createTicket(array $body): array { return $this->client->post('/support/tickets', $body); }
    public function getTicketDetails(string $ticketId): array { return $this->client->get('/support/tickets/' . rawurlencode($ticketId)); }
    public function addMessage(string $ticketId, array $body): array { return $this->client->post('/support/tickets/' . rawurlencode($ticketId) . '/messages', $body); }
    public function contact(array $body): array { return $this->client->post('/support/contact', $body); }
    public function getStatus(): array { return $this->client->get('/support/status'); }
}

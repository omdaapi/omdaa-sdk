<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class ReferralResource
{
    public function __construct(private Client $client) {}

    public function getStats(): array { return $this->client->get('/referral/stats'); }
    public function sendInvite(array $body): array { return $this->client->post('/referral/send-invite', $body); }
}

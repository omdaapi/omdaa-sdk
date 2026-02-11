<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class DashboardResource
{
    public function __construct(private Client $client) {}

    public function getStats(): array { return $this->client->get('/dashboard/stats'); }
    public function getActivity(array $params = []): array { return $this->client->get('/dashboard/activity', $params); }
    public function getTrends(array $params = []): array { return $this->client->get('/dashboard/trends', $params); }
}

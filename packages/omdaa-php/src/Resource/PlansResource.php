<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class PlansResource
{
    public function __construct(private Client $client) {}

    public function getPlans(): array { return $this->client->get('/plans'); }
    public function getCurrentPlan(): array { return $this->client->get('/plans/current'); }
    public function getUsage(): array { return $this->client->get('/plans/usage'); }
    public function compare(array $params = []): array { return $this->client->get('/plans/compare', $params); }
    public function create(array $body): array { return $this->client->post('/plans', $body); }
    public function update(string $id, array $body): array { return $this->client->put('/plans/' . rawurlencode($id), $body); }
    public function delete(string $id): array { return $this->client->delete('/plans/' . rawurlencode($id)); }
}

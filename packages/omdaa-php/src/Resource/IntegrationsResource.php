<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class IntegrationsResource
{
    public function __construct(private Client $client) {}

    public function getStatus(): array { return $this->client->get('/integrations/status'); }
    public function triggerN8nWorkflow(array $body): array { return $this->client->post('/integrations/n8n/trigger-workflow', $body); }
    public function getN8nWebhooks(): array { return $this->client->get('/integrations/n8n/webhooks'); }
}

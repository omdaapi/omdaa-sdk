<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class BulkResource
{
    public function __construct(private Client $client) {}

    public function createJob(array $body): array { return $this->client->post('/bulk', $body); }
    public function getJobStatus(string $bulkJobId): array { return $this->client->get('/bulk/' . rawurlencode($bulkJobId) . '/status'); }
    public function pause(string $bulkJobId): array { return $this->client->post('/bulk/' . rawurlencode($bulkJobId) . '/pause'); }
    public function resume(string $bulkJobId): array { return $this->client->post('/bulk/' . rawurlencode($bulkJobId) . '/resume'); }
}

<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class QueueResource
{
    public function __construct(private Client $client) {}

    public function getStats(): array { return $this->client->get('/queue/stats'); }
    public function getMetrics(): array { return $this->client->get('/queue/metrics'); }
    public function getQueueStats(string $queueName): array { return $this->client->get('/queue/' . rawurlencode($queueName) . '/stats'); }
    public function getQueueJobs(string $queueName, array $params = []): array { return $this->client->get('/queue/' . rawurlencode($queueName) . '/jobs', $params); }
    public function getJobDetails(string $queueName, string $jobId): array { return $this->client->get('/queue/' . rawurlencode($queueName) . '/jobs/' . rawurlencode($jobId)); }
    public function retryJob(string $queueName, string $jobId): array { return $this->client->post('/queue/' . rawurlencode($queueName) . '/jobs/' . rawurlencode($jobId) . '/retry'); }
    public function cancelJob(string $queueName, string $jobId): array { return $this->client->delete('/queue/' . rawurlencode($queueName) . '/jobs/' . rawurlencode($jobId)); }
    public function pauseQueue(string $queueName): array { return $this->client->post('/queue/' . rawurlencode($queueName) . '/pause'); }
    public function resumeQueue(string $queueName): array { return $this->client->post('/queue/' . rawurlencode($queueName) . '/resume'); }
    public function cleanQueue(string $queueName, array $body = []): array { return $this->client->post('/queue/' . rawurlencode($queueName) . '/clean', $body); }
    public function emptyQueue(string $queueName): array { return $this->client->delete('/queue/' . rawurlencode($queueName) . '/empty'); }
}

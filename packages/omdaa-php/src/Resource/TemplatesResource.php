<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class TemplatesResource
{
    public function __construct(private Client $client) {}

    public function create(array $body): array { return $this->client->post('/templates', $body); }
    public function getAll(array $params = []): array { return $this->client->get('/templates', $params); }
    public function getStats(): array { return $this->client->get('/templates/stats'); }
    public function getPopular(array $params = []): array { return $this->client->get('/templates/popular', $params); }
    public function getLibrary(array $params = []): array { return $this->client->get('/templates/library', $params); }
    public function getIndustries(): array { return $this->client->get('/templates/industries'); }
    public function validate(array $body): array { return $this->client->post('/templates/validate', $body); }
    public function createDefaults(array $body = []): array { return $this->client->post('/templates/defaults', $body); }
    public function export(array $body = []): array { return $this->client->post('/templates/export', $body); }
    public function import(array $body): array { return $this->client->post('/templates/import', $body); }
    public function getByCategory(string $category): array { return $this->client->get('/templates/category/' . rawurlencode($category)); }
    public function getById(string $templateId): array { return $this->client->get('/templates/' . rawurlencode($templateId)); }
    public function preview(string $templateId, array $body = []): array { return $this->client->post('/templates/' . rawurlencode($templateId) . '/preview', $body); }
    public function sendFromTemplate(string $templateId, array $body): array { return $this->client->post('/templates/' . rawurlencode($templateId) . '/send', $body); }
    public function update(string $templateId, array $body): array { return $this->client->put('/templates/' . rawurlencode($templateId), $body); }
    public function delete(string $templateId): array { return $this->client->delete('/templates/' . rawurlencode($templateId)); }
    public function render(string $templateId, array $body = []): array { return $this->client->post('/templates/' . rawurlencode($templateId) . '/render', $body); }
    public function duplicate(string $templateId): array { return $this->client->post('/templates/' . rawurlencode($templateId) . '/duplicate'); }
}

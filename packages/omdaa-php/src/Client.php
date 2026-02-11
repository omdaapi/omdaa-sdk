<?php

declare(strict_types=1);

namespace Omdaa\Api;

use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\RequestException;
use Psr\Http\Message\ResponseInterface;

final class Client
{
    private const DEFAULT_BASE_URI = 'https://omdaa.com/api/v1';

    private GuzzleClient $http;
    private string $apiKey;

    public function __construct(string $apiKey, ?string $baseUrl = null)
    {
        $this->apiKey = $apiKey;
        $baseUrl = rtrim($baseUrl ?? self::DEFAULT_BASE_URI, '/');
        $this->http = new GuzzleClient([
            'base_uri' => $baseUrl . '/',
            'headers' => [
                'Authorization' => 'Bearer ' . $apiKey,
                'Content-Type' => 'application/json',
                'Accept' => 'application/json',
            ],
        ]);
    }

    /**
     * @return array{success: bool, data?: mixed, message?: string}
     */
    public function request(string $method, string $path, array $body = [], array $query = []): array
    {
        $options = [];
        if (!empty($query)) {
            $options['query'] = $query;
        }
        if (!empty($body) && $method !== 'GET') {
            $options['json'] = $body;
        }

        try {
            $response = $this->http->request($method, ltrim($path, '/'), $options);
        } catch (RequestException $e) {
            $statusCode = $e->getResponse()?->getStatusCode();
            $responseBody = $e->getResponse() ? $this->decodeBody($e->getResponse()) : null;
            $message = $responseBody['message'] ?? $e->getMessage();
            throw new OmdaaException($message, $statusCode, $responseBody);
        }

        return $this->decodeBody($response);
    }

    public function get(string $path, array $query = []): array
    {
        return $this->request('GET', $path, [], $query);
    }

    public function post(string $path, array $body = []): array
    {
        return $this->request('POST', $path, $body);
    }

    public function put(string $path, array $body = []): array
    {
        return $this->request('PUT', $path, $body);
    }

    public function delete(string $path, array $body = []): array
    {
        return $this->request('DELETE', $path, $body);
    }

    public function getHttpClient(): GuzzleClient
    {
        return $this->http;
    }

    private function decodeBody(ResponseInterface $response): array
    {
        $body = (string) $response->getBody();
        $decoded = json_decode($body, true);
        return is_array($decoded) ? $decoded : ['success' => false, 'message' => $body];
    }
}

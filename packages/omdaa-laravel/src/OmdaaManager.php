<?php

namespace Omdaa\Laravel;

use Omdaa\Api\OmdaaClient;

class OmdaaManager
{
    protected ?OmdaaClient $client = null;

    public function __construct(
        protected string $apiKey,
        protected string $baseUrl
    ) {
    }

    public function client(): OmdaaClient
    {
        if ($this->client === null) {
            $this->client = new OmdaaClient($this->apiKey, $this->baseUrl);
        }
        return $this->client;
    }

    public function __call(string $method, array $args): mixed
    {
        return $this->client()->{$method}(...$args);
    }
}

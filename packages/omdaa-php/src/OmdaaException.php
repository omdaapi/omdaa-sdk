<?php

declare(strict_types=1);

namespace Omdaa\Api;

use Exception;

final class OmdaaException extends Exception
{
    public function __construct(
        string $message,
        private ?int $statusCode = null,
        private ?array $body = null
    ) {
        parent::__construct($message);
    }

    public function getStatusCode(): ?int
    {
        return $this->statusCode;
    }

    public function getBody(): ?array
    {
        return $this->body;
    }
}

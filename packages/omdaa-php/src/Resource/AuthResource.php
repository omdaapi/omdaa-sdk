<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class AuthResource
{
    public function __construct(private Client $client) {}

    public function checkAvailability(array $params): array { return $this->client->get('/auth/check-availability', $params); }
    public function register(array $body): array { return $this->client->post('/auth/register', $body); }
    public function verifyEmail(array $body): array { return $this->client->post('/auth/verify-email', $body); }
    public function resendVerification(array $body = []): array { return $this->client->post('/auth/resend-verification', $body); }
    public function login(array $body): array { return $this->client->post('/auth/login', $body); }
    public function logout(): array { return $this->client->post('/auth/logout'); }
    public function getProfile(): array { return $this->client->get('/auth/profile'); }
    public function updateProfile(array $body): array { return $this->client->put('/auth/profile', $body); }
    public function refresh(): array { return $this->client->post('/auth/refresh'); }
    public function forgotPassword(array $body): array { return $this->client->post('/auth/forgot-password', $body); }
    public function resetPassword(array $body): array { return $this->client->post('/auth/reset-password', $body); }
}

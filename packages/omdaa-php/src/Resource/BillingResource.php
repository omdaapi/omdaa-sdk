<?php

declare(strict_types=1);

namespace Omdaa\Api\Resource;

use Omdaa\Api\Client;

final class BillingResource
{
    public function __construct(private Client $client) {}

    public function subscribe(array $body): array { return $this->client->post('/billing/subscribe', $body); }
    public function cancel(array $body = []): array { return $this->client->post('/billing/cancel', $body); }
    public function getInvoices(array $params = []): array { return $this->client->get('/billing/invoices', $params); }
    public function getSubscription(): array { return $this->client->get('/billing/subscription'); }
    public function purchaseSession(array $body): array { return $this->client->post('/billing/purchase-session', $body); }
    public function getSessionPurchases(array $params = []): array { return $this->client->get('/billing/session-purchases', $params); }
    public function getProducts(): array { return $this->client->get('/billing/products'); }
    public function validateCoupon(array $body): array { return $this->client->post('/billing/validate-coupon', $body); }
    public function checkout(array $body): array { return $this->client->post('/billing/checkout', $body); }
}

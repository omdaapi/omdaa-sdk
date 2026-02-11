/**
 * Billing resource - subscription, invoices, checkout
 */

import type { OmdaaClient } from '../client';

export class BillingResource {
  constructor(private client: OmdaaClient) {}

  async subscribe(body: Record<string, unknown>) {
    return this.client.post('/billing/subscribe', body);
  }

  async cancel(body?: Record<string, unknown>) {
    return this.client.post('/billing/cancel', body);
  }

  async getInvoices(params?: Record<string, string>) {
    return this.client.get('/billing/invoices', params);
  }

  async getSubscription() {
    return this.client.get('/billing/subscription');
  }

  async purchaseSession(body: Record<string, unknown>) {
    return this.client.post('/billing/purchase-session', body);
  }

  async getSessionPurchases(params?: Record<string, string>) {
    return this.client.get('/billing/session-purchases', params);
  }

  async getProducts() {
    return this.client.get('/billing/products');
  }

  async validateCoupon(body: Record<string, unknown>) {
    return this.client.post('/billing/validate-coupon', body);
  }

  async checkout(body: Record<string, unknown>) {
    return this.client.post('/billing/checkout', body);
  }
}

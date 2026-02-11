/**
 * Webhooks resource - set and manage webhook configuration
 * Note: Some webhook endpoints may require JWT (user login) instead of API key.
 */

import type { OmdaaClient } from '../client';
import type { WebhookConfig } from '../types';
import type { SetWebhookParams } from '../types';

export class WebhooksResource {
  constructor(private client: OmdaaClient) {}

  /**
   * Get current webhook configuration
   * GET /webhooks
   */
  async get() {
    return this.client.get<WebhookConfig>('/webhooks');
  }

  /**
   * Set webhook URL and options
   * POST /webhooks/set
   */
  async set(params: SetWebhookParams) {
    return this.client.post<{ message?: string }>('/webhooks/set', params);
  }

  /**
   * Remove webhook
   * DELETE /webhooks/remove
   */
  async remove() {
    return this.client.delete<{ message?: string }>('/webhooks/remove');
  }

  /**
   * Test webhook
   * GET /webhooks/test
   */
  async test() {
    return this.client.get<{ success?: boolean }>('/webhooks/test');
  }

  /**
   * Get webhook events history
   * GET /webhooks/events
   */
  async getEvents(params?: { limit?: string; skip?: string }) {
    return this.client.get('/webhooks/events', params as Record<string, string> | undefined);
  }

  /**
   * Get webhook statistics
   * GET /webhooks/stats
   */
  async getStats() {
    return this.client.get('/webhooks/stats');
  }
}

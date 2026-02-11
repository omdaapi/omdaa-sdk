/**
 * Scheduled messages resource
 * Note: Uses protect (JWT) on backend.
 */

import type { OmdaaClient } from '../client';

export class ScheduledResource {
  constructor(private client: OmdaaClient) {}

  async schedule(body: Record<string, unknown>) {
    return this.client.post('/scheduled', body);
  }

  async getScheduledMessages(params?: Record<string, string>) {
    return this.client.get('/scheduled', params);
  }

  async cancel(scheduledMessageId: string) {
    return this.client.delete(`/scheduled/${encodeURIComponent(scheduledMessageId)}`);
  }
}

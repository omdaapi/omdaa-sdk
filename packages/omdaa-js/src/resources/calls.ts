/**
 * Calls resource - offer/handle calls
 */

import type { OmdaaClient } from '../client';

export class CallsResource {
  constructor(private client: OmdaaClient) {}

  async offer(body: Record<string, unknown>) {
    return this.client.post('/calls/offer', body);
  }

  async handle(body: Record<string, unknown>) {
    return this.client.post('/calls/handle', body);
  }
}

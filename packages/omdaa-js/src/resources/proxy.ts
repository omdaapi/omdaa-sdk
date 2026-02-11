/**
 * Proxy resource - set/remove/test proxy
 */

import type { OmdaaClient } from '../client';

export class ProxyResource {
  constructor(private client: OmdaaClient) {}

  async get() {
    return this.client.get('/proxy');
  }

  async set(body: Record<string, unknown>) {
    return this.client.post('/proxy/set', body);
  }

  async remove() {
    return this.client.post('/proxy/remove');
  }

  async test(body?: Record<string, unknown>) {
    return this.client.post('/proxy/test', body);
  }
}

/**
 * API Keys resource - manage API keys (JWT typically)
 */

import type { OmdaaClient } from '../client';

export class ApiKeysResource {
  constructor(private client: OmdaaClient) {}

  async getAll() {
    return this.client.get('/api-keys');
  }

  async create(body?: Record<string, unknown>) {
    return this.client.post('/api-keys/create', body);
  }

  async update(keyId: string, body: Record<string, unknown>) {
    return this.client.put(`/api-keys/${encodeURIComponent(keyId)}`, body);
  }

  async revoke(keyId: string) {
    return this.client.delete(`/api-keys/${encodeURIComponent(keyId)}`);
  }

  async rotate(keyId: string) {
    return this.client.post(`/api-keys/${encodeURIComponent(keyId)}/rotate`);
  }

  async getStats() {
    return this.client.get('/api-keys/stats');
  }

  async getUsage(keyId: string) {
    return this.client.get(`/api-keys/${encodeURIComponent(keyId)}/usage`);
  }
}

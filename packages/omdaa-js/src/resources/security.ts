/**
 * Security resource - whitelist, logs
 */

import type { OmdaaClient } from '../client';

export class SecurityResource {
  constructor(private client: OmdaaClient) {}

  async addToWhitelist(body: Record<string, unknown>) {
    return this.client.post('/security/whitelist', body);
  }

  async getWhitelist() {
    return this.client.get('/security/whitelist');
  }

  async removeFromWhitelist(ipAddress: string) {
    return this.client.delete(`/security/whitelist/${encodeURIComponent(ipAddress)}`);
  }

  async getLogs(params?: Record<string, string>) {
    return this.client.get('/security/logs', params);
  }
}

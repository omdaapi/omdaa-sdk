/**
 * Audit resource - audit logs
 */

import type { OmdaaClient } from '../client';

export class AuditResource {
  constructor(private client: OmdaaClient) {}

  async getLogs(params?: Record<string, string>) {
    return this.client.get('/audit', params);
  }

  async export(params?: Record<string, string>) {
    return this.client.get('/audit/export', params);
  }
}

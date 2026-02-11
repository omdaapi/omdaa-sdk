/**
 * Backup resource
 */

import type { OmdaaClient } from '../client';

export class BackupResource {
  constructor(private client: OmdaaClient) {}

  async create(body?: Record<string, unknown>) {
    return this.client.post('/backup', body);
  }

  async list(params?: Record<string, string>) {
    return this.client.get('/backup', params);
  }

  async restore(body: Record<string, unknown>) {
    return this.client.post('/backup/restore', body);
  }
}

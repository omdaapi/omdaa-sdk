/**
 * Bulk messages resource
 * Note: Uses protect (JWT) on backend. CSV upload is multipart.
 */

import type { OmdaaClient } from '../client';

export class BulkResource {
  constructor(private client: OmdaaClient) {}

  async createJob(body: Record<string, unknown>) {
    return this.client.post('/bulk', body);
  }

  async getJobStatus(bulkJobId: string) {
    return this.client.get(`/bulk/${encodeURIComponent(bulkJobId)}/status`);
  }

  async pause(bulkJobId: string) {
    return this.client.post(`/bulk/${encodeURIComponent(bulkJobId)}/pause`);
  }

  async resume(bulkJobId: string) {
    return this.client.post(`/bulk/${encodeURIComponent(bulkJobId)}/resume`);
  }
}

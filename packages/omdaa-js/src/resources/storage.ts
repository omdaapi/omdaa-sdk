/**
 * Storage resource - S3/media storage
 * Upload/delete use multipart in backend; SDK sends JSON where applicable.
 */

import type { OmdaaClient } from '../client';

export class StorageResource {
  constructor(private client: OmdaaClient) {}

  async configure(body: Record<string, unknown>) {
    return this.client.post('/storage/configure', body);
  }

  async getUrl(params?: Record<string, string>) {
    return this.client.get('/storage/url', params);
  }

  async deleteMedia(body?: Record<string, unknown>) {
    return this.client.delete('/storage/delete', body);
  }

  async getStatus() {
    return this.client.get('/storage/status');
  }
}

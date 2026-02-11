/**
 * Business resource - WhatsApp Business catalog & profile
 */

import type { OmdaaClient } from '../client';

export class BusinessResource {
  constructor(private client: OmdaaClient) {}

  async getCatalog(params?: Record<string, string>) {
    return this.client.get('/business/catalog', params);
  }

  async getCollections(params?: Record<string, string>) {
    return this.client.get('/business/collections', params);
  }

  async getProfile(params?: Record<string, string>) {
    return this.client.get('/business/profile', params);
  }
}

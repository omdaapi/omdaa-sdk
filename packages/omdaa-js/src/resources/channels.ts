/**
 * Channels resource
 */

import type { OmdaaClient } from '../client';

export class ChannelsResource {
  constructor(private client: OmdaaClient) {}

  async getAll(params?: Record<string, string>) {
    return this.client.get('/channels', params);
  }

  async create(body: Record<string, unknown>) {
    return this.client.post('/channels', body);
  }

  async get(channelId: string) {
    return this.client.get(`/channels/${encodeURIComponent(channelId)}`);
  }

  async update(channelId: string, body: Record<string, unknown>) {
    return this.client.put(`/channels/${encodeURIComponent(channelId)}`, body);
  }

  async delete(channelId: string) {
    return this.client.delete(`/channels/${encodeURIComponent(channelId)}`);
  }

  async getStats(channelId: string) {
    return this.client.get(`/channels/${encodeURIComponent(channelId)}/stats`);
  }
}

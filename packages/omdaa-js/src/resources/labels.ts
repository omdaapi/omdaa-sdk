/**
 * Labels resource - message labels
 */

import type { OmdaaClient } from '../client';

export class LabelsResource {
  constructor(private client: OmdaaClient) {}

  async create(body: Record<string, unknown>) {
    return this.client.post('/labels', body);
  }

  async getUserLabels(params?: Record<string, string>) {
    return this.client.get('/labels', params);
  }

  async search(params?: Record<string, string>) {
    return this.client.get('/labels/search', params);
  }

  async getStats(params?: Record<string, string>) {
    return this.client.get('/labels/stats', params);
  }

  async sync() {
    return this.client.post('/labels/sync');
  }

  async getLabel(labelId: string) {
    return this.client.get(`/labels/${encodeURIComponent(labelId)}`);
  }

  async update(labelId: string, body: Record<string, unknown>) {
    return this.client.put(`/labels/${encodeURIComponent(labelId)}`, body);
  }

  async delete(labelId: string) {
    return this.client.delete(`/labels/${encodeURIComponent(labelId)}`);
  }

  async assignToMessage(labelId: string, messageId: string) {
    return this.client.post(`/labels/${encodeURIComponent(labelId)}/messages/${encodeURIComponent(messageId)}`);
  }

  async removeFromMessage(labelId: string, messageId: string) {
    return this.client.delete(`/labels/${encodeURIComponent(labelId)}/messages/${encodeURIComponent(messageId)}`);
  }

  async getMessagesByLabel(labelId: string, params?: Record<string, string>) {
    return this.client.get(`/labels/${encodeURIComponent(labelId)}/messages`, params);
  }
}

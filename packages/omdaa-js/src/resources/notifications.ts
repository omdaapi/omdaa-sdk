/**
 * Notifications resource
 */

import type { OmdaaClient } from '../client';

export class NotificationsResource {
  constructor(private client: OmdaaClient) {}

  async getAll(params?: Record<string, string>) {
    return this.client.get('/notifications', params);
  }

  async getStats() {
    return this.client.get('/notifications/stats');
  }

  async sendTest(body?: Record<string, unknown>) {
    return this.client.post('/notifications/test', body);
  }

  async markAllRead() {
    return this.client.put('/notifications/read-all');
  }

  async markAsRead(notificationId: string) {
    return this.client.put(`/notifications/${encodeURIComponent(notificationId)}/read`);
  }

  async delete(notificationId: string) {
    return this.client.delete(`/notifications/${encodeURIComponent(notificationId)}`);
  }
}

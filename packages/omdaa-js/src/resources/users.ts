/**
 * Users resource - me, preferences, stats (JWT)
 */

import type { OmdaaClient } from '../client';

export class UsersResource {
  constructor(private client: OmdaaClient) {}

  async getMe() {
    return this.client.get('/users/me');
  }

  async updateMe(body: Record<string, unknown>) {
    return this.client.put('/users/me', body);
  }

  async getStats() {
    return this.client.get('/users/stats');
  }

  async getPreferences() {
    return this.client.get('/users/preferences');
  }

  async updatePreferences(body: Record<string, unknown>) {
    return this.client.put('/users/preferences', body);
  }

  async getNotificationSettings() {
    return this.client.get('/users/notification-settings');
  }

  async updateNotificationSettings(body: Record<string, unknown>) {
    return this.client.put('/users/notification-settings', body);
  }

  async savePushSubscription(body: Record<string, unknown>) {
    return this.client.post('/users/push-subscription', body);
  }

  async deletePushSubscription() {
    return this.client.delete('/users/push-subscription');
  }

  async deleteMe() {
    return this.client.delete('/users/me');
  }
}

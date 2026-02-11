/**
 * Settings resource - user settings (JWT)
 */

import type { OmdaaClient } from '../client';

export class SettingsResource {
  constructor(private client: OmdaaClient) {}

  async get() {
    return this.client.get('/settings');
  }

  async update(body: Record<string, unknown>) {
    return this.client.put('/settings', body);
  }

  async changePassword(body: Record<string, unknown>) {
    return this.client.post('/settings/change-password', body);
  }

  async updateProfile(body: Record<string, unknown>) {
    return this.client.put('/settings/profile', body);
  }
}

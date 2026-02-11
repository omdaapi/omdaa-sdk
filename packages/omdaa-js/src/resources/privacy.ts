/**
 * Privacy resource - last seen, profile picture, status, etc.
 */

import type { OmdaaClient } from '../client';

export class PrivacyResource {
  constructor(private client: OmdaaClient) {}

  async getSettings(params?: Record<string, string>) {
    return this.client.get('/privacy/settings', params);
  }

  async updateLastSeen(body: Record<string, unknown>) {
    return this.client.put('/privacy/last-seen', body);
  }

  async updateProfilePicture(body: Record<string, unknown>) {
    return this.client.put('/privacy/profile-picture', body);
  }

  async updateStatus(body: Record<string, unknown>) {
    return this.client.put('/privacy/status', body);
  }

  async updateOnline(body: Record<string, unknown>) {
    return this.client.put('/privacy/online', body);
  }

  async updateGroupAdd(body: Record<string, unknown>) {
    return this.client.put('/privacy/group-add', body);
  }
}

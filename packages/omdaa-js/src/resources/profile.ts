/**
 * Profile resource - user/WhatsApp profile (JWT)
 */

import type { OmdaaClient } from '../client';

export class ProfileResource {
  constructor(private client: OmdaaClient) {}

  async get(params?: { sessionId?: string }) {
    return this.client.get('/profile', params as Record<string, string> | undefined);
  }

  async updateName(body: Record<string, unknown>) {
    return this.client.put('/profile/name', body);
  }

  async updateStatus(body: Record<string, unknown>) {
    return this.client.put('/profile/status', body);
  }

  async updatePicture(body: Record<string, unknown>) {
    return this.client.put('/profile/picture', body);
  }

  async removePicture() {
    return this.client.delete('/profile/picture');
  }
}

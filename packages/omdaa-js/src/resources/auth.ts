/**
 * Auth resource - register, login, refresh, forgot-password, etc.
 */

import type { OmdaaClient } from '../client';

export class AuthResource {
  constructor(private client: OmdaaClient) {}

  async checkAvailability(params: { email?: string; username?: string }) {
    return this.client.get('/auth/check-availability', params as Record<string, string>);
  }

  async register(body: Record<string, unknown>) {
    return this.client.post('/auth/register', body);
  }

  async verifyEmail(body: Record<string, unknown>) {
    return this.client.post('/auth/verify-email', body);
  }

  async resendVerification(body?: Record<string, unknown>) {
    return this.client.post('/auth/resend-verification', body);
  }

  async login(body: Record<string, unknown>) {
    return this.client.post('/auth/login', body);
  }

  async logout() {
    return this.client.post('/auth/logout');
  }

  async getProfile() {
    return this.client.get('/auth/profile');
  }

  async updateProfile(body: Record<string, unknown>) {
    return this.client.put('/auth/profile', body);
  }

  async refresh() {
    return this.client.post('/auth/refresh');
  }

  async forgotPassword(body: Record<string, unknown>) {
    return this.client.post('/auth/forgot-password', body);
  }

  async resetPassword(body: Record<string, unknown>) {
    return this.client.post('/auth/reset-password', body);
  }
}

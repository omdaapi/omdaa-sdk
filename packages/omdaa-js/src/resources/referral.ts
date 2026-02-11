/**
 * Referral resource
 */

import type { OmdaaClient } from '../client';

export class ReferralResource {
  constructor(private client: OmdaaClient) {}

  async getStats() {
    return this.client.get('/referral/stats');
  }

  async sendInvite(body: Record<string, unknown>) {
    return this.client.post('/referral/send-invite', body);
  }
}

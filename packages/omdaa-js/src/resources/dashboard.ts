/**
 * Dashboard resource - stats, activity, trends (JWT)
 */

import type { OmdaaClient } from '../client';

export class DashboardResource {
  constructor(private client: OmdaaClient) {}

  async getStats() {
    return this.client.get('/dashboard/stats');
  }

  async getActivity(params?: Record<string, string>) {
    return this.client.get('/dashboard/activity', params);
  }

  async getTrends(params?: Record<string, string>) {
    return this.client.get('/dashboard/trends', params);
  }
}

/**
 * Plans resource - subscription plans
 */

import type { OmdaaClient } from '../client';

export class PlansResource {
  constructor(private client: OmdaaClient) {}

  async getPlans() {
    return this.client.get('/plans');
  }

  async getCurrentPlan() {
    return this.client.get('/plans/current');
  }

  async getUsage() {
    return this.client.get('/plans/usage');
  }

  async compare(params?: Record<string, string>) {
    return this.client.get('/plans/compare', params);
  }

  async create(body: Record<string, unknown>) {
    return this.client.post('/plans', body);
  }

  async update(id: string, body: Record<string, unknown>) {
    return this.client.put(`/plans/${encodeURIComponent(id)}`, body);
  }

  async delete(id: string) {
    return this.client.delete(`/plans/${encodeURIComponent(id)}`);
  }
}

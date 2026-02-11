/**
 * Metrics resource - admin/metrics
 */

import type { OmdaaClient } from '../client';

export class MetricsResource {
  constructor(private client: OmdaaClient) {}

  async getAll(params?: Record<string, string>) {
    return this.client.get('/metrics', params);
  }

  async getSummary(params?: Record<string, string>) {
    return this.client.get('/metrics/summary', params);
  }

  async getHealth(params?: Record<string, string>) {
    return this.client.get('/metrics/health', params);
  }

  async getUnhealthy(params?: Record<string, string>) {
    return this.client.get('/metrics/health/unhealthy', params);
  }

  async getSession(sessionId: string, params?: Record<string, string>) {
    return this.client.get(`/metrics/session/${encodeURIComponent(sessionId)}`, params);
  }

  async getUser(userId: string, params?: Record<string, string>) {
    return this.client.get(`/metrics/user/${encodeURIComponent(userId)}`, params);
  }

  async getMessageStats(params?: Record<string, string>) {
    return this.client.get('/metrics/messages/stats', params);
  }

  async refresh() {
    return this.client.post('/metrics/refresh');
  }
}

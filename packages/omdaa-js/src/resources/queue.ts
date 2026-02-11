/**
 * Queue resource - job queues (admin/super_admin)
 */

import type { OmdaaClient } from '../client';

export class QueueResource {
  constructor(private client: OmdaaClient) {}

  async getStats() {
    return this.client.get('/queue/stats');
  }

  async getMetrics() {
    return this.client.get('/queue/metrics');
  }

  async getQueueStats(queueName: string) {
    return this.client.get(`/queue/${encodeURIComponent(queueName)}/stats`);
  }

  async getQueueJobs(queueName: string, params?: { status?: string; start?: string; end?: string }) {
    return this.client.get(`/queue/${encodeURIComponent(queueName)}/jobs`, params as Record<string, string>);
  }

  async getJobDetails(queueName: string, jobId: string) {
    return this.client.get(`/queue/${encodeURIComponent(queueName)}/jobs/${encodeURIComponent(jobId)}`);
  }

  async retryJob(queueName: string, jobId: string) {
    return this.client.post(`/queue/${encodeURIComponent(queueName)}/jobs/${encodeURIComponent(jobId)}/retry`);
  }

  async cancelJob(queueName: string, jobId: string) {
    return this.client.delete(`/queue/${encodeURIComponent(queueName)}/jobs/${encodeURIComponent(jobId)}`);
  }

  async pauseQueue(queueName: string) {
    return this.client.post(`/queue/${encodeURIComponent(queueName)}/pause`);
  }

  async resumeQueue(queueName: string) {
    return this.client.post(`/queue/${encodeURIComponent(queueName)}/resume`);
  }

  async cleanQueue(queueName: string, body?: { grace?: number; status?: string }) {
    return this.client.post(`/queue/${encodeURIComponent(queueName)}/clean`, body);
  }

  async emptyQueue(queueName: string) {
    return this.client.delete(`/queue/${encodeURIComponent(queueName)}/empty`);
  }
}

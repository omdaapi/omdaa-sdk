/**
 * Email resource - send, status, advanced (JWT)
 */

import type { OmdaaClient } from '../client';

export class EmailResource {
  constructor(private client: OmdaaClient) {}

  async getStatus() {
    return this.client.get('/email/status');
  }

  async testConnection() {
    return this.client.get('/email/test');
  }

  async send(body: Record<string, unknown>) {
    return this.client.post('/email/send', body);
  }

  async fetchImap(params?: Record<string, string>) {
    return this.client.get('/email/imap', params);
  }

  async listImapFolders() {
    return this.client.get('/email/imap/folders');
  }

  async fetchPop(params?: Record<string, string>) {
    return this.client.get('/email/pop', params);
  }

  async sendAdvanced(body: Record<string, unknown>) {
    return this.client.post('/email/advanced/send', body);
  }

  async sendTemplate(body: Record<string, unknown>) {
    return this.client.post('/email/advanced/send-template', body);
  }

  async sendBulk(body: Record<string, unknown>) {
    return this.client.post('/email/advanced/send-bulk', body);
  }

  async getAllEmails(params?: Record<string, string>) {
    return this.client.get('/email/advanced/emails', params);
  }

  async searchEmails(params?: Record<string, string>) {
    return this.client.get('/email/advanced/emails/search', params);
  }

  async getEmailsByEntity(entityType: string, entityId: string) {
    return this.client.get(`/email/advanced/emails/entity/${encodeURIComponent(entityType)}/${encodeURIComponent(entityId)}`);
  }

  async getEmailById(id: string) {
    return this.client.get(`/email/advanced/emails/${encodeURIComponent(id)}`);
  }

  async deleteEmail(id: string) {
    return this.client.delete(`/email/advanced/emails/${encodeURIComponent(id)}`);
  }

  async fetchAndStore(body?: Record<string, unknown>) {
    return this.client.post('/email/advanced/fetch-store', body);
  }

  async getStatistics() {
    return this.client.get('/email/advanced/statistics');
  }

  async retryFailed(body?: Record<string, unknown>) {
    return this.client.post('/email/advanced/retry-failed', body);
  }
}

/**
 * Templates resource - message templates
 * Note: May require JWT (authenticate) depending on backend.
 */

import type { OmdaaClient } from '../client';

export class TemplatesResource {
  constructor(private client: OmdaaClient) {}

  async create(body: Record<string, unknown>) {
    return this.client.post('/templates', body);
  }

  async getAll(params?: Record<string, string>) {
    return this.client.get('/templates', params);
  }

  async getStats() {
    return this.client.get('/templates/stats');
  }

  async getPopular(params?: Record<string, string>) {
    return this.client.get('/templates/popular', params);
  }

  async getLibrary(params?: Record<string, string>) {
    return this.client.get('/templates/library', params);
  }

  async getIndustries() {
    return this.client.get('/templates/industries');
  }

  async validate(body: Record<string, unknown>) {
    return this.client.post('/templates/validate', body);
  }

  async createDefaults(body?: Record<string, unknown>) {
    return this.client.post('/templates/defaults', body);
  }

  async export(body?: Record<string, unknown>) {
    return this.client.post('/templates/export', body);
  }

  async import(body: { templates: Record<string, unknown>[] }) {
    return this.client.post('/templates/import', body);
  }

  async getByCategory(category: string) {
    return this.client.get(`/templates/category/${encodeURIComponent(category)}`);
  }

  async getById(templateId: string) {
    return this.client.get(`/templates/${encodeURIComponent(templateId)}`);
  }

  async preview(templateId: string, body?: { variables?: Record<string, string> }) {
    return this.client.post(`/templates/${encodeURIComponent(templateId)}/preview`, body);
  }

  async sendFromTemplate(templateId: string, body: { sessionId: string; to: string; variables?: Record<string, string> }) {
    return this.client.post(`/templates/${encodeURIComponent(templateId)}/send`, body);
  }

  async update(templateId: string, body: Record<string, unknown>) {
    return this.client.put(`/templates/${encodeURIComponent(templateId)}`, body);
  }

  async delete(templateId: string) {
    return this.client.delete(`/templates/${encodeURIComponent(templateId)}`);
  }

  async render(templateId: string, body?: { variables?: Record<string, string> }) {
    return this.client.post(`/templates/${encodeURIComponent(templateId)}/render`, body);
  }

  async duplicate(templateId: string) {
    return this.client.post(`/templates/${encodeURIComponent(templateId)}/duplicate`);
  }
}

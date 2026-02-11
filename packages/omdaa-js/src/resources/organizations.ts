/**
 * Organizations resource
 */

import type { OmdaaClient } from '../client';

export class OrganizationsResource {
  constructor(private client: OmdaaClient) {}

  async getAll() {
    return this.client.get('/organizations');
  }

  async create(body: Record<string, unknown>) {
    return this.client.post('/organizations', body);
  }

  async get(id: string) {
    return this.client.get(`/organizations/${encodeURIComponent(id)}`);
  }

  async update(id: string, body: Record<string, unknown>) {
    return this.client.put(`/organizations/${encodeURIComponent(id)}`, body);
  }

  async delete(id: string) {
    return this.client.delete(`/organizations/${encodeURIComponent(id)}`);
  }

  async addMember(id: string, body: Record<string, unknown>) {
    return this.client.post(`/organizations/${encodeURIComponent(id)}/members`, body);
  }

  async removeMember(id: string, userId: string) {
    return this.client.delete(`/organizations/${encodeURIComponent(id)}/members/${encodeURIComponent(userId)}`);
  }

  async getTeams(id: string) {
    return this.client.get(`/organizations/${encodeURIComponent(id)}/teams`);
  }
}

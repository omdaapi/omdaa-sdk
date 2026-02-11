/**
 * Groups resource - WhatsApp groups
 * Note: Backend uses JWT (verifyToken). API Key may work if backend allows.
 */

import type { OmdaaClient } from '../client';

export class GroupsResource {
  constructor(private client: OmdaaClient) {}

  async getGroups(params?: Record<string, string>) {
    return this.client.get('/groups', params);
  }

  async getDetails(groupId: string, params?: { sessionId?: string }) {
    return this.client.get(`/groups/${encodeURIComponent(groupId)}`, params as Record<string, string> | undefined);
  }

  async sendMessage(groupId: string, body: Record<string, unknown>) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/send`, body);
  }

  async create(body: Record<string, unknown>) {
    return this.client.post('/groups/create', body);
  }

  async updateSubject(groupId: string, body: Record<string, unknown>) {
    return this.client.put(`/groups/${encodeURIComponent(groupId)}/subject`, body);
  }

  async updateDescription(groupId: string, body: Record<string, unknown>) {
    return this.client.put(`/groups/${encodeURIComponent(groupId)}/description`, body);
  }

  async addParticipants(groupId: string, body: Record<string, unknown>) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/participants/add`, body);
  }

  async removeParticipants(groupId: string, body: Record<string, unknown>) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/participants/remove`, body);
  }

  async leave(groupId: string) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/leave`);
  }

  async setAdmin(groupId: string, body: Record<string, unknown>) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/admin`, body);
  }

  async updateSettings(groupId: string, body: Record<string, unknown>) {
    return this.client.put(`/groups/${encodeURIComponent(groupId)}/settings`, body);
  }

  async getInviteLink(groupId: string, params?: Record<string, string>) {
    return this.client.get(`/groups/${encodeURIComponent(groupId)}/invite-link`, params);
  }

  async revokeInviteLink(groupId: string) {
    return this.client.delete(`/groups/${encodeURIComponent(groupId)}/invite-link`);
  }

  async toggleEphemeral(groupId: string, body?: Record<string, unknown>) {
    return this.client.post(`/groups/${encodeURIComponent(groupId)}/ephemeral`, body);
  }

  async acceptInvite(body: Record<string, unknown>) {
    return this.client.post('/groups/accept-invite', body);
  }
}

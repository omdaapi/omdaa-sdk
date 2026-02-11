/**
 * Chats resource - pin, archive, search, block, etc.
 */

import type { OmdaaClient } from '../client';

export class ChatsResource {
  constructor(private client: OmdaaClient) {}

  async pin(jid: string, body?: Record<string, unknown>) {
    return this.client.post(`/chats/${encodeURIComponent(jid)}/pin`, body);
  }

  async unpin(jid: string) {
    return this.client.delete(`/chats/${encodeURIComponent(jid)}/pin`);
  }

  async archive(jid: string, body?: Record<string, unknown>) {
    return this.client.post(`/chats/${encodeURIComponent(jid)}/archive`, body);
  }

  async unarchive(jid: string) {
    return this.client.delete(`/chats/${encodeURIComponent(jid)}/archive`);
  }

  async getPinned(params?: Record<string, string>) {
    return this.client.get('/chats/pinned', params);
  }

  async getArchived(params?: Record<string, string>) {
    return this.client.get('/chats/archived', params);
  }

  async search(params?: Record<string, string>) {
    return this.client.get('/chats/search', params);
  }

  async searchInChat(jid: string, params?: Record<string, string>) {
    return this.client.get(`/chats/${encodeURIComponent(jid)}/search`, params);
  }

  async getStatistics(jid: string, params?: Record<string, string>) {
    return this.client.get(`/chats/${encodeURIComponent(jid)}/statistics`, params);
  }

  async exportChat(jid: string, params?: Record<string, string>) {
    return this.client.get(`/chats/${encodeURIComponent(jid)}/export`, params);
  }

  async markUnread(body: Record<string, unknown>) {
    return this.client.post('/chats/mark-unread', body);
  }

  async block(body: Record<string, unknown>) {
    return this.client.post('/chats/block', body);
  }

  async deleteMessage(body: Record<string, unknown>) {
    return this.client.post('/chats/delete-message', body);
  }

  async updateMessage(body: Record<string, unknown>) {
    return this.client.put('/chats/update-message', body);
  }

  async getBase64(body: Record<string, unknown>) {
    return this.client.post('/chats/get-base64', body);
  }

  async getPrivacySettings(params?: Record<string, string>) {
    return this.client.get('/chats/privacy-settings', params);
  }

  async updatePrivacySettings(body: Record<string, unknown>) {
    return this.client.put('/chats/privacy-settings', body);
  }

  async whatsappNumber(body: Record<string, unknown>) {
    return this.client.post('/chats/whatsapp-number', body);
  }

  async fetchProfilePicture(body: Record<string, unknown>) {
    return this.client.post('/chats/profile-picture', body);
  }

  async fetchProfile(body: Record<string, unknown>) {
    return this.client.post('/chats/profile', body);
  }

  async findByRemoteJid(params: { sessionId?: string; remoteJid?: string }) {
    return this.client.get('/chats/find-by-remote-jid', params as Record<string, string>);
  }

  async sendPresence(body: Record<string, unknown>) {
    return this.client.post('/chats/send-presence', body);
  }

  async getStatusMessages(params?: { sessionId?: string; limit?: string }) {
    return this.client.get('/chats/status-messages', params as Record<string, string> | undefined);
  }
}

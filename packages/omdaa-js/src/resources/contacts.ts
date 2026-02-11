/**
 * Contacts resource - WhatsApp contacts
 */

import type { OmdaaClient } from '../client';

export class ContactsResource {
  constructor(private client: OmdaaClient) {}

  async getContacts(params?: { sessionId?: string }) {
    return this.client.get('/contacts', params as Record<string, string> | undefined);
  }

  async getPicture(jid: string, params: { sessionId: string }) {
    return this.client.get(`/contacts/${encodeURIComponent(jid)}/picture`, params);
  }

  async getInfo(jid: string, params: { sessionId: string }) {
    return this.client.get(`/contacts/${encodeURIComponent(jid)}/info`, params);
  }
}

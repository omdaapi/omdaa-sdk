/**
 * Support resource - tickets
 */

import type { OmdaaClient } from '../client';

export class SupportResource {
  constructor(private client: OmdaaClient) {}

  async getTickets(params?: Record<string, string>) {
    return this.client.get('/support/tickets', params);
  }

  async createTicket(body: Record<string, unknown>) {
    return this.client.post('/support/tickets', body);
  }

  async getTicketDetails(ticketId: string) {
    return this.client.get(`/support/tickets/${encodeURIComponent(ticketId)}`);
  }

  async addMessage(ticketId: string, body: Record<string, unknown>) {
    return this.client.post(`/support/tickets/${encodeURIComponent(ticketId)}/messages`, body);
  }

  async contact(body: Record<string, unknown>) {
    return this.client.post('/support/contact', body);
  }

  async getStatus() {
    return this.client.get('/support/status');
  }
}

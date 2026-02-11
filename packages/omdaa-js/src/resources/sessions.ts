/**
 * Sessions resource - create and manage WhatsApp sessions
 */

import type { OmdaaClient } from '../client';
import type { Session } from '../types';
import type { CreateSessionParams } from '../types';

export class SessionsResource {
  constructor(private client: OmdaaClient) {}

  /**
   * Get all user sessions
   * GET /sessions
   */
  async list() {
    return this.client.get<{ sessions?: Session[]; data?: Session[] }>('/sessions');
  }

  /**
   * Create a new session
   * POST /sessions/create
   */
  async create(params?: CreateSessionParams) {
    return this.client.post<{ session?: Session; sessionId?: string; qr?: string }>(
      '/sessions/create',
      params ?? {}
    );
  }

  /**
   * Get a single session by ID
   * GET /sessions/:sessionId
   */
  async get(sessionId: string) {
    return this.client.get<Session>(`/sessions/${encodeURIComponent(sessionId)}`);
  }

  /**
   * Get QR code for session (if not connected)
   * GET /sessions/:sessionId/qr
   */
  async getQr(sessionId: string) {
    return this.client.get<{ qr?: string; image?: string }>(`/sessions/${encodeURIComponent(sessionId)}/qr`);
  }

  /**
   * Logout / disconnect session
   * DELETE /sessions/:sessionId/logout
   */
  async disconnect(sessionId: string) {
    return this.client.delete<{ message?: string }>(`/sessions/${encodeURIComponent(sessionId)}/logout`);
  }

  /**
   * Delete session permanently
   * DELETE /sessions/delete/:sessionId
   */
  async delete(sessionId: string) {
    return this.client.delete<{ message?: string }>(`/sessions/delete/${encodeURIComponent(sessionId)}`);
  }
}

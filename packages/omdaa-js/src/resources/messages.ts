/**
 * Messages resource - send and manage messages
 */

import type { OmdaaClient } from '../client';
import type { ApiResponse } from '../types';
import type { SendTextParams } from '../types';

export class MessagesResource {
  constructor(private client: OmdaaClient) {}

  /**
   * Send a text message
   * POST /messages/send-text
   */
  async sendText(params: SendTextParams) {
    const body = {
      sessionId: params.sessionId,
      to: params.to,
      message: params.message ?? params.text,
      quotedMessageId: params.quotedMessageId,
      quoted: params.quoted,
    };
    return this.client.post<{ messageId?: string }>('/messages/send-text', body);
  }

  /**
   * Send an image (multipart - use FormData in browser or pass file path in Node)
   * POST /messages/send-image
   * For SDK we accept URL or base64; actual multipart can be added later
   */
  async sendImage(params: {
    sessionId: string;
    to: string;
    image: string | Blob;
    caption?: string;
  }) {
    return this.client.post('/messages/send-image', params as unknown as Record<string, unknown>);
  }

  /**
   * Get received messages
   * GET /messages/received
   */
  async getReceived(params?: { sessionId?: string; limit?: string; skip?: string }) {
    return this.client.get('/messages/received', params as Record<string, string> | undefined);
  }

  /**
   * Get sent messages
   * GET /messages/sent
   */
  async getSent(params?: { sessionId?: string; limit?: string; skip?: string }) {
    return this.client.get('/messages/sent', params as Record<string, string> | undefined);
  }

  /**
   * Get message stats
   * GET /messages/stats
   */
  async getStats(params?: { sessionId?: string }) {
    return this.client.get<Record<string, unknown>>('/messages/stats', params as Record<string, string> | undefined);
  }

  /**
   * Get messages by chat
   * GET /messages/chat/:remoteJid
   */
  async getByChat(remoteJid: string, params?: { sessionId?: string }) {
    const search = params?.sessionId ? { sessionId: params.sessionId } : undefined;
    return this.client.get<ApiResponse<unknown>>(`/messages/chat/${encodeURIComponent(remoteJid)}`, search);
  }

  async search(params?: Record<string, string>) {
    return this.client.get('/messages/search', params);
  }

  async getRecentChats(params?: Record<string, string>) {
    return this.client.get('/messages/recent-chats', params);
  }

  async getChats(params?: { sessionId?: string }) {
    return this.client.get('/messages/chats', params as Record<string, string>);
  }

  async deleteMessage(messageId: string) {
    return this.client.delete(`/messages/${encodeURIComponent(messageId)}`);
  }

  async forward(body: Record<string, unknown>) {
    return this.client.post('/messages/forward', body);
  }

  async forwardMultiple(body: Record<string, unknown>) {
    return this.client.post('/messages/forward-multiple', body);
  }

  async deleteMultiple(body: Record<string, unknown>) {
    return this.client.delete('/messages/multiple', body);
  }

  async schedule(body: Record<string, unknown>) {
    return this.client.post('/messages/schedule', body);
  }

  async sendLocation(body: Record<string, unknown>) {
    return this.client.post('/messages/send-location', body);
  }

  async sendContact(body: Record<string, unknown>) {
    return this.client.post('/messages/send-contact', body);
  }

  async sendVoice(body: Record<string, unknown>) {
    return this.client.post('/messages/send-voice', body);
  }

  async sendAudio(body: Record<string, unknown>) {
    return this.client.post('/messages/send-audio', body);
  }

  async sendReaction(body: Record<string, unknown>) {
    return this.client.post('/messages/reaction', body);
  }

  async removeReaction(body: Record<string, unknown>) {
    return this.client.delete('/messages/reaction', body);
  }

  async sendReadReceipt(body: Record<string, unknown>) {
    return this.client.post('/messages/read-receipt', body);
  }

  async markChatRead(body: Record<string, unknown>) {
    return this.client.post('/messages/mark-chat-read', body);
  }

  async getReadStatus(messageId: string) {
    return this.client.get(`/messages/read-status/${encodeURIComponent(messageId)}`);
  }

  async updateReadReceiptsPrivacy(body: Record<string, unknown>) {
    return this.client.put('/messages/privacy/read-receipts', body);
  }

  async sendTyping(body: Record<string, unknown>) {
    return this.client.post('/messages/typing', body);
  }

  async sendRecording(body: Record<string, unknown>) {
    return this.client.post('/messages/recording', body);
  }

  async sendFile(body: Record<string, unknown>) {
    return this.client.post('/messages/send-file', body);
  }

  async sendMedia(body: Record<string, unknown>) {
    return this.client.post('/messages/send-media', body);
  }

  async sendPoll(body: Record<string, unknown>) {
    return this.client.post('/messages/send-poll', body);
  }

  async sendList(body: Record<string, unknown>) {
    return this.client.post('/messages/send-list', body);
  }

  async sendButtons(body: Record<string, unknown>) {
    return this.client.post('/messages/send-buttons', body);
  }

  async sendStatus(body: Record<string, unknown>) {
    return this.client.post('/messages/send-status', body);
  }

  async sendMediaAdvanced(body: Record<string, unknown>) {
    return this.client.post('/messages/send-media-advanced', body);
  }

  async sendPTV(body: Record<string, unknown>) {
    return this.client.post('/messages/send-ptv', body);
  }

  async sendSticker(body: Record<string, unknown>) {
    return this.client.post('/messages/send-sticker', body);
  }

  async getPollResults(pollId: string, params?: Record<string, string>) {
    return this.client.get(`/messages/poll/${encodeURIComponent(pollId)}/results`, params);
  }
}

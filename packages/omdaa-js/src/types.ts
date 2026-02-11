/**
 * Request/Response types for Omdaa API
 */

export interface OmdaaClientOptions {
  /** API Key (or JWT). Get from Omdaa dashboard. */
  apiKey: string;
  /** Base URL of the API (default: https://omdaa.com/api/v1) */
  baseURL?: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  status?: number;
}

export interface OmdaaApiError {
  success: false;
  message: string;
  status?: number;
  error?: string;
}

/** POST /messages/send-text */
export interface SendTextParams {
  sessionId: string;
  to: string;
  message?: string;
  text?: string;
  quotedMessageId?: string;
  quoted?: string;
}

/** POST /sessions/create */
export interface CreateSessionParams {
  deviceName?: string;
  phoneNumber?: string;
}

export interface Session {
  _id?: string;
  sessionId: string;
  deviceName?: string;
  status?: string;
  isConnected?: boolean;
  createdAt?: string;
  [key: string]: unknown;
}

/** POST /webhooks/set */
export interface SetWebhookParams {
  url?: string;
  webhookUrl?: string;
  secret?: string;
  events?: string[];
  byEvents?: boolean;
  enabled?: boolean;
  base64?: boolean;
  headers?: Record<string, string>;
}

export interface WebhookConfig {
  webhookUrl?: string;
  enabled?: boolean;
  events?: string[];
  [key: string]: unknown;
}

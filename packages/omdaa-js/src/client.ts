/**
 * OmdaaClient - HTTP client with Bearer auth for Omdaa API
 */

import type { ApiResponse, OmdaaApiError } from './types';

const DEFAULT_BASE_URL = 'https://omdaa.com/api/v1';

export class OmdaaError extends Error {
  constructor(
    message: string,
    public status?: number,
    public body?: OmdaaApiError
  ) {
    super(message);
    this.name = 'OmdaaError';
  }
}

export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
  body?: unknown;
  searchParams?: Record<string, string>;
}

export class OmdaaClient {
  private apiKey: string;
  private baseURL: string;

  constructor(options: { apiKey: string; baseURL?: string }) {
    this.apiKey = options.apiKey;
    this.baseURL = (options.baseURL || DEFAULT_BASE_URL).replace(/\/$/, '');
  }

  /**
   * Send authenticated request to Omdaa API
   */
  async request<T>(config: RequestConfig): Promise<ApiResponse<T>> {
    const url = new URL(this.baseURL + config.path);
    if (config.searchParams) {
      Object.entries(config.searchParams).forEach(([k, v]) => {
        if (v != null && v !== '') url.searchParams.set(k, String(v));
      });
    }

    const headers: Record<string, string> = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };

    const init: RequestInit = {
      method: config.method,
      headers,
    };

    if (config.body !== undefined && config.method !== 'GET') {
      init.body = JSON.stringify(config.body);
    }

    const res = await fetch(url.toString(), init);
    let data: ApiResponse<T> | OmdaaApiError;

    const text = await res.text();
    try {
      data = JSON.parse(text) as ApiResponse<T> | OmdaaApiError;
    } catch {
      data = { success: false, message: text || res.statusText };
    }

    if (!res.ok) {
      const err = data as OmdaaApiError;
      throw new OmdaaError(
        err.message || res.statusText || `HTTP ${res.status}`,
        res.status,
        err
      );
    }

    return data as ApiResponse<T>;
  }

  /** GET request helper */
  get<T>(path: string, params?: Record<string, string>) {
    return this.request<T>({ method: 'GET', path, searchParams: params });
  }

  /** POST request helper */
  post<T>(path: string, body?: unknown) {
    return this.request<T>({ method: 'POST', path, body });
  }

  /** PUT request helper */
  put<T>(path: string, body?: unknown) {
    return this.request<T>({ method: 'PUT', path, body });
  }

  /** PATCH request helper */
  patch<T>(path: string, body?: unknown) {
    return this.request<T>({ method: 'PATCH', path, body });
  }

  /** DELETE request helper */
  delete<T>(path: string, body?: unknown) {
    return this.request<T>({ method: 'DELETE', path, body });
  }
}

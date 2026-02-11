import { describe, it, expect, vi, beforeEach } from 'vitest';
import { OmdaaClient, OmdaaError } from './client';

describe('OmdaaClient', () => {
  const apiKey = 'omdaa_test_key_123';
  const baseURL = 'https://api.example.com/api/v1';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  describe('request', () => {
    it('sends GET with Authorization Bearer header', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve(JSON.stringify({ success: true, data: {} })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });
      await client.get('/sessions');

      expect(mockFetch).toHaveBeenCalledTimes(1);
      const [url, init] = mockFetch.mock.calls[0];
      expect(url).toBe(baseURL + '/sessions');
      expect(init?.method).toBe('GET');
      expect(init?.headers).toEqual(
        expect.objectContaining({
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        })
      );
    });

    it('sends POST with body and correct URL', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve(JSON.stringify({ success: true, data: { messageId: 'm1' } })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });
      await client.post('/messages/send-text', {
        sessionId: 'default',
        to: '201234567890',
        message: 'Hello',
      });

      expect(mockFetch).toHaveBeenCalledTimes(1);
      const [url, init] = mockFetch.mock.calls[0];
      expect(url).toBe(baseURL + '/messages/send-text');
      expect(init?.method).toBe('POST');
      expect(init?.body).toBe(
        JSON.stringify({
          sessionId: 'default',
          to: '201234567890',
          message: 'Hello',
        })
      );
    });

    it('appends search params to URL for GET', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve(JSON.stringify({ success: true })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });
      await client.get('/messages/received', { sessionId: 's1', limit: '10' });

      const [url] = mockFetch.mock.calls[0];
      const u = new URL(url);
      expect(u.searchParams.get('sessionId')).toBe('s1');
      expect(u.searchParams.get('limit')).toBe('10');
    });

    it('throws OmdaaError on 4xx response', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 401,
        text: () => Promise.resolve(JSON.stringify({ success: false, message: 'Unauthorized' })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });

      await expect(client.get('/sessions')).rejects.toThrow(OmdaaError);
      await expect(client.get('/sessions')).rejects.toMatchObject({
        message: 'Unauthorized',
        status: 401,
      });
    });

    it('uses default baseURL when not provided', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve(JSON.stringify({ success: true })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey });
      await client.get('/health');

      const [url] = mockFetch.mock.calls[0];
      expect(url).toMatch(/^https:\/\/omdaa\.com\/api\/v1\/health/);
    });
  });
});

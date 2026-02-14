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

    it('sends PATCH with body', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve(JSON.stringify({ success: true, data: { updated: true } })),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });
      await client.patch('/settings/profile', { name: 'New Name' });

      expect(mockFetch).toHaveBeenCalledTimes(1);
      const [url, init] = mockFetch.mock.calls[0];
      expect(url).toBe(baseURL + '/settings/profile');
      expect(init?.method).toBe('PATCH');
      expect(init?.body).toBe(JSON.stringify({ name: 'New Name' }));
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

    it('throws OmdaaError with message from body when response is non-JSON', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: false,
        status: 502,
        text: () => Promise.resolve('<html>Bad Gateway</html>'),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });

      await expect(client.get('/sessions')).rejects.toThrow(OmdaaError);
      await expect(client.get('/sessions')).rejects.toMatchObject({
        message: '<html>Bad Gateway</html>',
        status: 502,
      });
    });

    it('returns success: false when response is OK but body is non-JSON', async () => {
      const mockFetch = vi.fn().mockResolvedValue({
        ok: true,
        status: 200,
        text: () => Promise.resolve('plain text'),
      });
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });
      const res = await client.get('/sessions');

      expect(res.success).toBe(false);
      expect(res.message).toBe('plain text');
    });

    it('propagates network/fetch errors (e.g. connection refused)', async () => {
      const networkError = new TypeError('fetch failed');
      const mockFetch = vi.fn().mockRejectedValue(networkError);
      vi.stubGlobal('fetch', mockFetch);

      const client = new OmdaaClient({ apiKey, baseURL });

      await expect(client.get('/sessions')).rejects.toThrow('fetch failed');
      await expect(client.get('/sessions')).rejects.toBe(networkError);
    });
  });
});

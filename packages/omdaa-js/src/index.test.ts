import { describe, it, expect, vi, beforeEach } from 'vitest';
import { OmdaaClient } from './index';

describe('OmdaaClient (with resources)', () => {
  const apiKey = 'omdaa_key_456';
  const baseURL = 'https://api.test.com/api/v1';

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it('messages.sendText calls POST /messages/send-text with correct body', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: () => Promise.resolve(JSON.stringify({ success: true, data: { messageId: 'msg-1' } })),
    });
    vi.stubGlobal('fetch', mockFetch);

    const client = new OmdaaClient({ apiKey, baseURL });
    const res = await client.messages.sendText({
      sessionId: 'default',
      to: '201234567890',
      message: 'Hi from SDK',
    });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    const [url, init] = mockFetch.mock.calls[0];
    expect(url).toBe(baseURL + '/messages/send-text');
    expect(JSON.parse(init!.body as string)).toEqual({
      sessionId: 'default',
      to: '201234567890',
      message: 'Hi from SDK',
      quotedMessageId: undefined,
      quoted: undefined,
    });
    expect(res.success).toBe(true);
  });

  it('sessions.list calls GET /sessions', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: () =>
        Promise.resolve(
          JSON.stringify({ success: true, data: { sessions: [{ sessionId: 's1' }] } })
        ),
    });
    vi.stubGlobal('fetch', mockFetch);

    const client = new OmdaaClient({ apiKey, baseURL });
    await client.sessions.list();

    const [url] = mockFetch.mock.calls[0];
    expect(url).toBe(baseURL + '/sessions');
  });

  it('webhooks.get calls GET /webhooks', async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: () =>
        Promise.resolve(
          JSON.stringify({ success: true, data: { webhookUrl: 'https://example.com/hook' } })
        ),
    });
    vi.stubGlobal('fetch', mockFetch);

    const client = new OmdaaClient({ apiKey, baseURL });
    await client.webhooks.get();

    const [url] = mockFetch.mock.calls[0];
    expect(url).toBe(baseURL + '/webhooks');
  });
});

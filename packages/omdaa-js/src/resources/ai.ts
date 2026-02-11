/**
 * AI Assistant resource - chat
 */

import type { OmdaaClient } from '../client';

export class AiResource {
  constructor(private client: OmdaaClient) {}

  async chat(body: Record<string, unknown>) {
    return this.client.post('/ai/assistant', body);
  }
}

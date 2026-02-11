/**
 * Interactive messages resource - buttons, lists, templates
 * Note: Uses protect (JWT) on backend.
 */

import type { OmdaaClient } from '../client';

export class InteractiveResource {
  constructor(private client: OmdaaClient) {}

  async sendButtons(body: Record<string, unknown>) {
    return this.client.post('/interactive/buttons', body);
  }

  async sendList(body: Record<string, unknown>) {
    return this.client.post('/interactive/lists', body);
  }

  async sendTemplate(body: Record<string, unknown>) {
    return this.client.post('/interactive/templates', body);
  }
}

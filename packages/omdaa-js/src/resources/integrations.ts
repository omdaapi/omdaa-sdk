/**
 * Integrations resource - n8n, status, etc.
 * Note: Many routes use JWT (authenticateJWT).
 */

import type { OmdaaClient } from '../client';

export class IntegrationsResource {
  constructor(private client: OmdaaClient) {}

  async getStatus() {
    return this.client.get('/integrations/status');
  }

  async triggerN8nWorkflow(body: Record<string, unknown>) {
    return this.client.post('/integrations/n8n/trigger-workflow', body);
  }

  async getN8nWebhooks() {
    return this.client.get('/integrations/n8n/webhooks');
  }
}

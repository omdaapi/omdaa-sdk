/**
 * Omdaa API Client - Node.js / TypeScript SDK
 * @packageDocumentation
 */

import { OmdaaClient as BaseOmdaaClient } from './client';
import { MessagesResource } from './resources/messages';
import { SessionsResource } from './resources/sessions';
import { WebhooksResource } from './resources/webhooks';
import { TemplatesResource } from './resources/templates';
import { ScheduledResource } from './resources/scheduled';
import { BulkResource } from './resources/bulk';
import { ContactsResource } from './resources/contacts';
import { GroupsResource } from './resources/groups';
import { ChatsResource } from './resources/chats';
import { BusinessResource } from './resources/business';
import { StorageResource } from './resources/storage';
import { LabelsResource } from './resources/labels';
import { IntegrationsResource } from './resources/integrations';
import { QueueResource } from './resources/queue';
import { InteractiveResource } from './resources/interactive';
import { ApiKeysResource } from './resources/apiKeys';
import { ProfileResource } from './resources/profile';
import { DashboardResource } from './resources/dashboard';
import { PlansResource } from './resources/plans';
import { BillingResource } from './resources/billing';
import { ReferralResource } from './resources/referral';
import { NotificationsResource } from './resources/notifications';
import { MetricsResource } from './resources/metrics';
import { BackupResource } from './resources/backup';
import { SecurityResource } from './resources/security';
import { AuditResource } from './resources/audit';
import { OrganizationsResource } from './resources/organizations';
import { SettingsResource } from './resources/settings';
import { ChannelsResource } from './resources/channels';
import { PrivacyResource } from './resources/privacy';
import { SupportResource } from './resources/support';
import { ProxyResource } from './resources/proxy';
import { CallsResource } from './resources/calls';
import { AuthResource } from './resources/auth';
import { UsersResource } from './resources/users';
import { EmailResource } from './resources/email';
import { AiResource } from './resources/ai';
import type { OmdaaClientOptions } from './types';

/**
 * Main client with all API resources.
 * Use with API Key from Omdaa dashboard (Bearer auth).
 * Some endpoints require JWT (e.g. auth, users, profile, api-keys).
 *
 * @example
 * ```ts
 * import { OmdaaClient } from 'omdaa-api-client';
 * const client = new OmdaaClient({ apiKey: 'your-api-key' });
 * const res = await client.messages.sendText({
 *   sessionId: 'default',
 *   to: '201234567890',
 *   message: 'Hello',
 * });
 * ```
 */
export class OmdaaClient extends BaseOmdaaClient {
  public readonly messages: MessagesResource;
  public readonly sessions: SessionsResource;
  public readonly webhooks: WebhooksResource;
  public readonly templates: TemplatesResource;
  public readonly scheduled: ScheduledResource;
  public readonly bulk: BulkResource;
  public readonly contacts: ContactsResource;
  public readonly groups: GroupsResource;
  public readonly chats: ChatsResource;
  public readonly business: BusinessResource;
  public readonly storage: StorageResource;
  public readonly labels: LabelsResource;
  public readonly integrations: IntegrationsResource;
  public readonly queue: QueueResource;
  public readonly interactive: InteractiveResource;
  public readonly apiKeys: ApiKeysResource;
  public readonly profile: ProfileResource;
  public readonly dashboard: DashboardResource;
  public readonly plans: PlansResource;
  public readonly billing: BillingResource;
  public readonly referral: ReferralResource;
  public readonly notifications: NotificationsResource;
  public readonly metrics: MetricsResource;
  public readonly backup: BackupResource;
  public readonly security: SecurityResource;
  public readonly audit: AuditResource;
  public readonly organizations: OrganizationsResource;
  public readonly settings: SettingsResource;
  public readonly channels: ChannelsResource;
  public readonly privacy: PrivacyResource;
  public readonly support: SupportResource;
  public readonly proxy: ProxyResource;
  public readonly calls: CallsResource;
  public readonly auth: AuthResource;
  public readonly users: UsersResource;
  public readonly email: EmailResource;
  public readonly ai: AiResource;

  constructor(options: OmdaaClientOptions) {
    super(options);
    this.messages = new MessagesResource(this);
    this.sessions = new SessionsResource(this);
    this.webhooks = new WebhooksResource(this);
    this.templates = new TemplatesResource(this);
    this.scheduled = new ScheduledResource(this);
    this.bulk = new BulkResource(this);
    this.contacts = new ContactsResource(this);
    this.groups = new GroupsResource(this);
    this.chats = new ChatsResource(this);
    this.business = new BusinessResource(this);
    this.storage = new StorageResource(this);
    this.labels = new LabelsResource(this);
    this.integrations = new IntegrationsResource(this);
    this.queue = new QueueResource(this);
    this.interactive = new InteractiveResource(this);
    this.apiKeys = new ApiKeysResource(this);
    this.profile = new ProfileResource(this);
    this.dashboard = new DashboardResource(this);
    this.plans = new PlansResource(this);
    this.billing = new BillingResource(this);
    this.referral = new ReferralResource(this);
    this.notifications = new NotificationsResource(this);
    this.metrics = new MetricsResource(this);
    this.backup = new BackupResource(this);
    this.security = new SecurityResource(this);
    this.audit = new AuditResource(this);
    this.organizations = new OrganizationsResource(this);
    this.settings = new SettingsResource(this);
    this.channels = new ChannelsResource(this);
    this.privacy = new PrivacyResource(this);
    this.support = new SupportResource(this);
    this.proxy = new ProxyResource(this);
    this.calls = new CallsResource(this);
    this.auth = new AuthResource(this);
    this.users = new UsersResource(this);
    this.email = new EmailResource(this);
    this.ai = new AiResource(this);
  }
}

export { OmdaaError } from './client';
export type { RequestConfig } from './client';

export type {
  OmdaaClientOptions,
  ApiResponse,
  OmdaaApiError,
  SendTextParams,
  CreateSessionParams,
  Session,
  SetWebhookParams,
  WebhookConfig,
} from './types';

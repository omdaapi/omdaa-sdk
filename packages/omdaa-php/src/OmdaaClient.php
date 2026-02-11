<?php

declare(strict_types=1);

namespace Omdaa\Api;

use Omdaa\Api\Resource\ApiKeysResource;
use Omdaa\Api\Resource\AiResource;
use Omdaa\Api\Resource\AuditResource;
use Omdaa\Api\Resource\AuthResource;
use Omdaa\Api\Resource\BackupResource;
use Omdaa\Api\Resource\BillingResource;
use Omdaa\Api\Resource\BulkResource;
use Omdaa\Api\Resource\BusinessResource;
use Omdaa\Api\Resource\CallsResource;
use Omdaa\Api\Resource\ChannelsResource;
use Omdaa\Api\Resource\ChatsResource;
use Omdaa\Api\Resource\ContactsResource;
use Omdaa\Api\Resource\DashboardResource;
use Omdaa\Api\Resource\EmailResource;
use Omdaa\Api\Resource\GroupsResource;
use Omdaa\Api\Resource\IntegrationsResource;
use Omdaa\Api\Resource\InteractiveResource;
use Omdaa\Api\Resource\LabelsResource;
use Omdaa\Api\Resource\MessagesResource;
use Omdaa\Api\Resource\MetricsResource;
use Omdaa\Api\Resource\NotificationsResource;
use Omdaa\Api\Resource\OrganizationsResource;
use Omdaa\Api\Resource\PlansResource;
use Omdaa\Api\Resource\PrivacyResource;
use Omdaa\Api\Resource\ProfileResource;
use Omdaa\Api\Resource\ProxyResource;
use Omdaa\Api\Resource\QueueResource;
use Omdaa\Api\Resource\ReferralResource;
use Omdaa\Api\Resource\ScheduledResource;
use Omdaa\Api\Resource\SecurityResource;
use Omdaa\Api\Resource\SessionsResource;
use Omdaa\Api\Resource\SettingsResource;
use Omdaa\Api\Resource\StorageResource;
use Omdaa\Api\Resource\SupportResource;
use Omdaa\Api\Resource\TemplatesResource;
use Omdaa\Api\Resource\UsersResource;
use Omdaa\Api\Resource\WebhooksResource;

final class OmdaaClient
{
    private Client $client;

    public function __construct(string $apiKey, ?string $baseUrl = null)
    {
        $this->client = new Client($apiKey, $baseUrl);
    }

    public function messages(): MessagesResource
    {
        return new MessagesResource($this->client);
    }

    public function sessions(): SessionsResource
    {
        return new SessionsResource($this->client);
    }

    public function webhooks(): WebhooksResource
    {
        return new WebhooksResource($this->client);
    }

    public function templates(): TemplatesResource
    {
        return new TemplatesResource($this->client);
    }

    public function scheduled(): ScheduledResource
    {
        return new ScheduledResource($this->client);
    }

    public function bulk(): BulkResource
    {
        return new BulkResource($this->client);
    }

    public function contacts(): ContactsResource
    {
        return new ContactsResource($this->client);
    }

    public function groups(): GroupsResource
    {
        return new GroupsResource($this->client);
    }

    public function chats(): ChatsResource
    {
        return new ChatsResource($this->client);
    }

    public function business(): BusinessResource
    {
        return new BusinessResource($this->client);
    }

    public function storage(): StorageResource
    {
        return new StorageResource($this->client);
    }

    public function labels(): LabelsResource
    {
        return new LabelsResource($this->client);
    }

    public function integrations(): IntegrationsResource
    {
        return new IntegrationsResource($this->client);
    }

    public function queue(): QueueResource
    {
        return new QueueResource($this->client);
    }

    public function interactive(): InteractiveResource
    {
        return new InteractiveResource($this->client);
    }

    public function apiKeys(): ApiKeysResource
    {
        return new ApiKeysResource($this->client);
    }

    public function profile(): ProfileResource
    {
        return new ProfileResource($this->client);
    }

    public function dashboard(): DashboardResource
    {
        return new DashboardResource($this->client);
    }

    public function plans(): PlansResource
    {
        return new PlansResource($this->client);
    }

    public function billing(): BillingResource
    {
        return new BillingResource($this->client);
    }

    public function referral(): ReferralResource
    {
        return new ReferralResource($this->client);
    }

    public function notifications(): NotificationsResource
    {
        return new NotificationsResource($this->client);
    }

    public function metrics(): MetricsResource
    {
        return new MetricsResource($this->client);
    }

    public function backup(): BackupResource
    {
        return new BackupResource($this->client);
    }

    public function security(): SecurityResource
    {
        return new SecurityResource($this->client);
    }

    public function audit(): AuditResource
    {
        return new AuditResource($this->client);
    }

    public function organizations(): OrganizationsResource
    {
        return new OrganizationsResource($this->client);
    }

    public function settings(): SettingsResource
    {
        return new SettingsResource($this->client);
    }

    public function channels(): ChannelsResource
    {
        return new ChannelsResource($this->client);
    }

    public function privacy(): PrivacyResource
    {
        return new PrivacyResource($this->client);
    }

    public function support(): SupportResource
    {
        return new SupportResource($this->client);
    }

    public function proxy(): ProxyResource
    {
        return new ProxyResource($this->client);
    }

    public function calls(): CallsResource
    {
        return new CallsResource($this->client);
    }

    public function auth(): AuthResource
    {
        return new AuthResource($this->client);
    }

    public function users(): UsersResource
    {
        return new UsersResource($this->client);
    }

    public function email(): EmailResource
    {
        return new EmailResource($this->client);
    }

    public function ai(): AiResource
    {
        return new AiResource($this->client);
    }
}

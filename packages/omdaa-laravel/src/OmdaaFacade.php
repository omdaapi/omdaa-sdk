<?php

namespace Omdaa\Laravel;

use Illuminate\Support\Facades\Facade;

/**
 * @method static \Omdaa\Api\OmdaaClient client()
 * @method static \Omdaa\Api\Resource\MessagesResource messages()
 * @method static \Omdaa\Api\Resource\SessionsResource sessions()
 * @method static \Omdaa\Api\Resource\WebhooksResource webhooks()
 * @method static \Omdaa\Api\Resource\TemplatesResource templates()
 * @method static \Omdaa\Api\Resource\ScheduledResource scheduled()
 * @method static \Omdaa\Api\Resource\BulkResource bulk()
 * @method static \Omdaa\Api\Resource\ContactsResource contacts()
 * @method static \Omdaa\Api\Resource\GroupsResource groups()
 * @method static \Omdaa\Api\Resource\ChatsResource chats()
 * @method static \Omdaa\Api\Resource\BusinessResource business()
 * @method static \Omdaa\Api\Resource\StorageResource storage()
 * @method static \Omdaa\Api\Resource\LabelsResource labels()
 * @method static \Omdaa\Api\Resource\IntegrationsResource integrations()
 * @method static \Omdaa\Api\Resource\QueueResource queue()
 * @method static \Omdaa\Api\Resource\InteractiveResource interactive()
 * @method static \Omdaa\Api\Resource\ApiKeysResource apiKeys()
 * @method static \Omdaa\Api\Resource\ProfileResource profile()
 * @method static \Omdaa\Api\Resource\DashboardResource dashboard()
 * @method static \Omdaa\Api\Resource\PlansResource plans()
 * @method static \Omdaa\Api\Resource\BillingResource billing()
 * @method static \Omdaa\Api\Resource\ReferralResource referral()
 * @method static \Omdaa\Api\Resource\NotificationsResource notifications()
 * @method static \Omdaa\Api\Resource\MetricsResource metrics()
 * @method static \Omdaa\Api\Resource\BackupResource backup()
 * @method static \Omdaa\Api\Resource\SecurityResource security()
 * @method static \Omdaa\Api\Resource\AuditResource audit()
 * @method static \Omdaa\Api\Resource\OrganizationsResource organizations()
 * @method static \Omdaa\Api\Resource\SettingsResource settings()
 * @method static \Omdaa\Api\Resource\ChannelsResource channels()
 * @method static \Omdaa\Api\Resource\PrivacyResource privacy()
 * @method static \Omdaa\Api\Resource\SupportResource support()
 * @method static \Omdaa\Api\Resource\ProxyResource proxy()
 * @method static \Omdaa\Api\Resource\CallsResource calls()
 * @method static \Omdaa\Api\Resource\AuthResource auth()
 * @method static \Omdaa\Api\Resource\UsersResource users()
 * @method static \Omdaa\Api\Resource\EmailResource email()
 * @method static \Omdaa\Api\Resource\AiResource ai()
 *
 * @see \Omdaa\Laravel\OmdaaManager
 */
class OmdaaFacade extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return OmdaaManager::class;
    }
}

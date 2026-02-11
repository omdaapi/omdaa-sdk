package omdaa

// OmdaaClient is the main client with all API resources. Use with API Key (Bearer auth).
type OmdaaClient struct {
	*Client
	Messages       *MessagesResource
	Sessions       *SessionsResource
	Webhooks       *WebhooksResource
	Templates      *TemplatesResource
	Scheduled      *ScheduledResource
	Bulk           *BulkResource
	Contacts       *ContactsResource
	Groups         *GroupsResource
	Chats          *ChatsResource
	Business       *BusinessResource
	Storage        *StorageResource
	Labels         *LabelsResource
	Integrations   *IntegrationsResource
	Queue          *QueueResource
	Interactive    *InteractiveResource
	ApiKeys        *ApiKeysResource
	Profile        *ProfileResource
	Dashboard      *DashboardResource
	Plans          *PlansResource
	Billing        *BillingResource
	Referral       *ReferralResource
	Notifications  *NotificationsResource
	Metrics        *MetricsResource
	Backup         *BackupResource
	Security       *SecurityResource
	Audit          *AuditResource
	Organizations  *OrganizationsResource
	Settings       *SettingsResource
	Channels       *ChannelsResource
	Privacy        *PrivacyResource
	Support        *SupportResource
	Proxy          *ProxyResource
	Calls          *CallsResource
	Auth           *AuthResource
	Users          *UsersResource
	Email          *EmailResource
	Ai             *AiResource
}

// NewOmdaaClient creates a new OmdaaClient with the given API key and optional base URL.
func NewOmdaaClient(apiKey string, baseURL string) *OmdaaClient {
	c := NewClient(apiKey, baseURL)
	return &OmdaaClient{
		Client:         c,
		Messages:       &MessagesResource{c: c},
		Sessions:       &SessionsResource{c: c},
		Webhooks:       &WebhooksResource{c: c},
		Templates:      &TemplatesResource{c: c},
		Scheduled:      &ScheduledResource{c: c},
		Bulk:           &BulkResource{c: c},
		Contacts:       &ContactsResource{c: c},
		Groups:         &GroupsResource{c: c},
		Chats:          &ChatsResource{c: c},
		Business:       &BusinessResource{c: c},
		Storage:        &StorageResource{c: c},
		Labels:         &LabelsResource{c: c},
		Integrations:   &IntegrationsResource{c: c},
		Queue:          &QueueResource{c: c},
		Interactive:    &InteractiveResource{c: c},
		ApiKeys:        &ApiKeysResource{c: c},
		Profile:        &ProfileResource{c: c},
		Dashboard:      &DashboardResource{c: c},
		Plans:          &PlansResource{c: c},
		Billing:        &BillingResource{c: c},
		Referral:       &ReferralResource{c: c},
		Notifications:  &NotificationsResource{c: c},
		Metrics:        &MetricsResource{c: c},
		Backup:         &BackupResource{c: c},
		Security:       &SecurityResource{c: c},
		Audit:          &AuditResource{c: c},
		Organizations:  &OrganizationsResource{c: c},
		Settings:       &SettingsResource{c: c},
		Channels:       &ChannelsResource{c: c},
		Privacy:        &PrivacyResource{c: c},
		Support:        &SupportResource{c: c},
		Proxy:          &ProxyResource{c: c},
		Calls:          &CallsResource{c: c},
		Auth:           &AuthResource{c: c},
		Users:          &UsersResource{c: c},
		Email:          &EmailResource{c: c},
		Ai:             &AiResource{c: c},
	}
}

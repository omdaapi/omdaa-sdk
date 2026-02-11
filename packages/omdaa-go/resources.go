package omdaa

import "net/url"

// Messages
type MessagesResource struct{ c *Client }

func (r *MessagesResource) SendText(params map[string]interface{}) (map[string]interface{}, error) {
	body := map[string]interface{}{
		"sessionId": params["sessionId"],
		"to":        params["to"],
		"message":   params["message"],
	}
	if params["message"] == nil {
		body["message"] = params["text"]
	}
	if params["quotedMessageId"] != nil {
		body["quotedMessageId"] = params["quotedMessageId"]
	}
	if params["quoted"] != nil {
		body["quoted"] = params["quoted"]
	}
	return r.c.Post("/messages/send-text", body)
}
func (r *MessagesResource) SendImage(params map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/messages/send-image", params)
}
func (r *MessagesResource) GetReceived(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/messages/received", params)
}
func (r *MessagesResource) GetSent(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/messages/sent", params)
}
func (r *MessagesResource) GetStats(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/messages/stats", params)
}
func (r *MessagesResource) GetByChat(remoteJid string, params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/messages/chat/"+url.PathEscape(remoteJid), params)
}
func (r *MessagesResource) Search(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/messages/search", params)
}
func (r *MessagesResource) DeleteMessage(messageId string) (map[string]interface{}, error) {
	return r.c.Delete("/messages/"+url.PathEscape(messageId), nil)
}
func (r *MessagesResource) SendFile(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/messages/send-file", body)
}
func (r *MessagesResource) SendReaction(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/messages/reaction", body)
}

// Sessions
type SessionsResource struct{ c *Client }

func (r *SessionsResource) List() (map[string]interface{}, error) {
	return r.c.Get("/sessions", nil)
}
func (r *SessionsResource) Create(params map[string]interface{}) (map[string]interface{}, error) {
	if params == nil {
		params = map[string]interface{}{}
	}
	return r.c.Post("/sessions/create", params)
}
func (r *SessionsResource) Get(sessionId string) (map[string]interface{}, error) {
	return r.c.Get("/sessions/"+url.PathEscape(sessionId), nil)
}
func (r *SessionsResource) GetQR(sessionId string) (map[string]interface{}, error) {
	return r.c.Get("/sessions/"+url.PathEscape(sessionId)+"/qr", nil)
}
func (r *SessionsResource) Disconnect(sessionId string) (map[string]interface{}, error) {
	return r.c.Delete("/sessions/"+url.PathEscape(sessionId)+"/logout", nil)
}
func (r *SessionsResource) Delete(sessionId string) (map[string]interface{}, error) {
	return r.c.Delete("/sessions/delete/"+url.PathEscape(sessionId), nil)
}

// Webhooks
type WebhooksResource struct{ c *Client }

func (r *WebhooksResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/webhooks", nil)
}
func (r *WebhooksResource) Set(params map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/webhooks/set", params)
}
func (r *WebhooksResource) Remove() (map[string]interface{}, error) {
	return r.c.Delete("/webhooks/remove", nil)
}
func (r *WebhooksResource) Test() (map[string]interface{}, error) {
	return r.c.Get("/webhooks/test", nil)
}

// Templates
type TemplatesResource struct{ c *Client }

func (r *TemplatesResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/templates", params)
}
func (r *TemplatesResource) Get(templateId string) (map[string]interface{}, error) {
	return r.c.Get("/templates/"+url.PathEscape(templateId), nil)
}
func (r *TemplatesResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/templates", body)
}
func (r *TemplatesResource) Delete(templateId string) (map[string]interface{}, error) {
	return r.c.Delete("/templates/"+url.PathEscape(templateId), nil)
}

// Scheduled, Bulk, Contacts, Groups, Chats
type ScheduledResource struct{ c *Client }

func (r *ScheduledResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/scheduled", params)
}
func (r *ScheduledResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/scheduled/"+url.PathEscape(id), nil)
}
func (r *ScheduledResource) Cancel(id string) (map[string]interface{}, error) {
	return r.c.Delete("/scheduled/"+url.PathEscape(id), nil)
}

type BulkResource struct{ c *Client }

func (r *BulkResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/bulk", params)
}
func (r *BulkResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/bulk/"+url.PathEscape(id), nil)
}
func (r *BulkResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/bulk", body)
}

type ContactsResource struct{ c *Client }

func (r *ContactsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/contacts", params)
}
func (r *ContactsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/contacts/"+url.PathEscape(id), nil)
}
func (r *ContactsResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/contacts", body)
}

type GroupsResource struct{ c *Client }

func (r *GroupsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/groups", params)
}
func (r *GroupsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/groups/"+url.PathEscape(id), nil)
}
func (r *GroupsResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/groups", body)
}

type ChatsResource struct{ c *Client }

func (r *ChatsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/chats", params)
}
func (r *ChatsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/chats/"+url.PathEscape(id), nil)
}

// Business, Storage, Labels, Integrations, Queue, Interactive
type BusinessResource struct{ c *Client }

func (r *BusinessResource) Get(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/business", params)
}
func (r *BusinessResource) Update(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/business", body)
}

type StorageResource struct{ c *Client }

func (r *StorageResource) GetUsage(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/storage/usage", params)
}

type LabelsResource struct{ c *Client }

func (r *LabelsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/labels", params)
}
func (r *LabelsResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/labels", body)
}
func (r *LabelsResource) Delete(id string) (map[string]interface{}, error) {
	return r.c.Delete("/labels/"+url.PathEscape(id), nil)
}

type IntegrationsResource struct{ c *Client }

func (r *IntegrationsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/integrations", params)
}
func (r *IntegrationsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/integrations/"+url.PathEscape(id), nil)
}

type QueueResource struct{ c *Client }

func (r *QueueResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/queue", params)
}
func (r *QueueResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/queue/"+url.PathEscape(id), nil)
}
func (r *QueueResource) Cancel(id string) (map[string]interface{}, error) {
	return r.c.Delete("/queue/"+url.PathEscape(id), nil)
}

type InteractiveResource struct{ c *Client }

func (r *InteractiveResource) SendList(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/interactive/list", body)
}
func (r *InteractiveResource) SendButtons(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/interactive/buttons", body)
}

// ApiKeys, Profile, Dashboard, Plans, Billing, Referral
type ApiKeysResource struct{ c *Client }

func (r *ApiKeysResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/api-keys", params)
}
func (r *ApiKeysResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/api-keys", body)
}
func (r *ApiKeysResource) Revoke(id string) (map[string]interface{}, error) {
	return r.c.Delete("/api-keys/"+url.PathEscape(id), nil)
}

type ProfileResource struct{ c *Client }

func (r *ProfileResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/profile", nil)
}
func (r *ProfileResource) Update(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/profile", body)
}

type DashboardResource struct{ c *Client }

func (r *DashboardResource) Get(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/dashboard", params)
}

type PlansResource struct{ c *Client }

func (r *PlansResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/plans", params)
}
func (r *PlansResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/plans/"+url.PathEscape(id), nil)
}

type BillingResource struct{ c *Client }

func (r *BillingResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/billing", nil)
}
func (r *BillingResource) GetInvoices(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/billing/invoices", params)
}

type ReferralResource struct{ c *Client }

func (r *ReferralResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/referral", nil)
}
func (r *ReferralResource) GetLinks(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/referral/links", params)
}

// Notifications, Metrics, Backup, Security, Audit
type NotificationsResource struct{ c *Client }

func (r *NotificationsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/notifications", params)
}
func (r *NotificationsResource) MarkRead(id string) (map[string]interface{}, error) {
	return r.c.Post("/notifications/"+url.PathEscape(id)+"/read", map[string]interface{}{})
}

type MetricsResource struct{ c *Client }

func (r *MetricsResource) Get(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/metrics", params)
}

type BackupResource struct{ c *Client }

func (r *BackupResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	if body == nil {
		body = map[string]interface{}{}
	}
	return r.c.Post("/backup", body)
}
func (r *BackupResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/backup", params)
}
func (r *BackupResource) Restore(id string) (map[string]interface{}, error) {
	return r.c.Post("/backup/"+url.PathEscape(id)+"/restore", map[string]interface{}{})
}

type SecurityResource struct{ c *Client }

func (r *SecurityResource) GetSettings() (map[string]interface{}, error) {
	return r.c.Get("/security/settings", nil)
}
func (r *SecurityResource) UpdateSettings(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/security/settings", body)
}

type AuditResource struct{ c *Client }

func (r *AuditResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/audit", params)
}
func (r *AuditResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/audit/"+url.PathEscape(id), nil)
}

// Organizations, Settings, Channels, Privacy, Support, Proxy, Calls
type OrganizationsResource struct{ c *Client }

func (r *OrganizationsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/organizations", params)
}
func (r *OrganizationsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/organizations/"+url.PathEscape(id), nil)
}
func (r *OrganizationsResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/organizations", body)
}
func (r *OrganizationsResource) Update(id string, body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/organizations/"+url.PathEscape(id), body)
}

type SettingsResource struct{ c *Client }

func (r *SettingsResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/settings", nil)
}
func (r *SettingsResource) Update(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/settings", body)
}

type ChannelsResource struct{ c *Client }

func (r *ChannelsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/channels", params)
}
func (r *ChannelsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/channels/"+url.PathEscape(id), nil)
}

type PrivacyResource struct{ c *Client }

func (r *PrivacyResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/privacy", nil)
}
func (r *PrivacyResource) Update(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/privacy", body)
}

type SupportResource struct{ c *Client }

func (r *SupportResource) Tickets(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/support/tickets", params)
}
func (r *SupportResource) CreateTicket(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/support/tickets", body)
}

type ProxyResource struct{ c *Client }

func (r *ProxyResource) Get() (map[string]interface{}, error) {
	return r.c.Get("/proxy", nil)
}
func (r *ProxyResource) Update(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/proxy", body)
}

type CallsResource struct{ c *Client }

func (r *CallsResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/calls", params)
}
func (r *CallsResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/calls/"+url.PathEscape(id), nil)
}

// Auth, Users, Email, Ai
type AuthResource struct{ c *Client }

func (r *AuthResource) Login(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/auth/login", body)
}
func (r *AuthResource) Logout() (map[string]interface{}, error) {
	return r.c.Post("/auth/logout", map[string]interface{}{})
}
func (r *AuthResource) Refresh(body map[string]interface{}) (map[string]interface{}, error) {
	if body == nil {
		body = map[string]interface{}{}
	}
	return r.c.Post("/auth/refresh", body)
}
func (r *AuthResource) Me() (map[string]interface{}, error) {
	return r.c.Get("/auth/me", nil)
}

type UsersResource struct{ c *Client }

func (r *UsersResource) List(params map[string]string) (map[string]interface{}, error) {
	return r.c.Get("/users", params)
}
func (r *UsersResource) Get(id string) (map[string]interface{}, error) {
	return r.c.Get("/users/"+url.PathEscape(id), nil)
}
func (r *UsersResource) Create(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/users", body)
}
func (r *UsersResource) Update(id string, body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Put("/users/"+url.PathEscape(id), body)
}
func (r *UsersResource) Delete(id string) (map[string]interface{}, error) {
	return r.c.Delete("/users/"+url.PathEscape(id), nil)
}

type EmailResource struct{ c *Client }

func (r *EmailResource) Send(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/email/send", body)
}
func (r *EmailResource) GetSettings() (map[string]interface{}, error) {
	return r.c.Get("/email/settings", nil)
}

type AiResource struct{ c *Client }

func (r *AiResource) Chat(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/ai/chat", body)
}
func (r *AiResource) Completions(body map[string]interface{}) (map[string]interface{}, error) {
	return r.c.Post("/ai/completions", body)
}

# All API resources - mirror omdaa-js SDK paths and methods.
from urllib.parse import quote


class MessagesResource:
    def __init__(self, client):
        self._client = client

    def send_text(self, params):
        body = {
            "sessionId": params.get("sessionId"),
            "to": params.get("to"),
            "message": params.get("message") or params.get("text"),
            "quotedMessageId": params.get("quotedMessageId"),
            "quoted": params.get("quoted"),
        }
        return self._client.post("/messages/send-text", body)

    def send_image(self, params):
        return self._client.post("/messages/send-image", params)

    def get_received(self, params=None):
        return self._client.get("/messages/received", params=params)

    def get_sent(self, params=None):
        return self._client.get("/messages/sent", params=params)

    def get_stats(self, params=None):
        return self._client.get("/messages/stats", params=params)

    def get_by_chat(self, remote_jid, params=None):
        return self._client.get(f"/messages/chat/{quote(remote_jid)}", params=params)

    def search(self, params=None):
        return self._client.get("/messages/search", params=params)

    def get_recent_chats(self, params=None):
        return self._client.get("/messages/recent-chats", params=params)

    def get_chats(self, params=None):
        return self._client.get("/messages/chats", params=params)

    def delete_message(self, message_id):
        return self._client.delete(f"/messages/{quote(message_id)}")

    def forward(self, body):
        return self._client.post("/messages/forward", body)

    def forward_multiple(self, body):
        return self._client.post("/messages/forward-multiple", body)

    def delete_multiple(self, body):
        return self._client.delete("/messages/multiple", body)

    def schedule(self, body):
        return self._client.post("/messages/schedule", body)

    def send_location(self, body):
        return self._client.post("/messages/send-location", body)

    def send_contact(self, body):
        return self._client.post("/messages/send-contact", body)

    def send_voice(self, body):
        return self._client.post("/messages/send-voice", body)

    def send_audio(self, body):
        return self._client.post("/messages/send-audio", body)

    def send_reaction(self, body):
        return self._client.post("/messages/reaction", body)

    def remove_reaction(self, body):
        return self._client.delete("/messages/reaction", body)

    def send_read_receipt(self, body):
        return self._client.post("/messages/read-receipt", body)

    def mark_chat_read(self, body):
        return self._client.post("/messages/mark-chat-read", body)

    def get_read_status(self, message_id):
        return self._client.get(f"/messages/read-status/{quote(message_id)}")

    def update_read_receipts_privacy(self, body):
        return self._client.put("/messages/privacy/read-receipts", body)

    def send_typing(self, body):
        return self._client.post("/messages/typing", body)

    def send_recording(self, body):
        return self._client.post("/messages/recording", body)

    def send_file(self, body):
        return self._client.post("/messages/send-file", body)

    def send_media(self, body):
        return self._client.post("/messages/send-media", body)

    def send_poll(self, body):
        return self._client.post("/messages/send-poll", body)

    def send_list(self, body):
        return self._client.post("/messages/send-list", body)

    def send_buttons(self, body):
        return self._client.post("/messages/send-buttons", body)

    def send_status(self, body):
        return self._client.post("/messages/send-status", body)

    def send_media_advanced(self, body):
        return self._client.post("/messages/send-media-advanced", body)

    def send_ptv(self, body):
        return self._client.post("/messages/send-ptv", body)

    def send_sticker(self, body):
        return self._client.post("/messages/send-sticker", body)

    def get_poll_results(self, poll_id, params=None):
        return self._client.get(f"/messages/poll/{quote(poll_id)}/results", params=params)


class SessionsResource:
    def __init__(self, client):
        self._client = client

    def list(self):
        return self._client.get("/sessions")

    def create(self, params=None):
        return self._client.post("/sessions/create", params or {})

    def get(self, session_id):
        return self._client.get(f"/sessions/{quote(session_id)}")

    def get_qr(self, session_id):
        return self._client.get(f"/sessions/{quote(session_id)}/qr")

    def disconnect(self, session_id):
        return self._client.delete(f"/sessions/{quote(session_id)}/logout")

    def delete(self, session_id):
        return self._client.delete(f"/sessions/delete/{quote(session_id)}")


class WebhooksResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/webhooks")

    def set(self, params):
        return self._client.post("/webhooks/set", params)

    def remove(self):
        return self._client.delete("/webhooks/remove")

    def test(self):
        return self._client.get("/webhooks/test")

    def get_events(self, params=None):
        return self._client.get("/webhooks/events", params=params)

    def get_stats(self):
        return self._client.get("/webhooks/stats")


class TemplatesResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/templates", params=params)

    def get(self, template_id):
        return self._client.get(f"/templates/{quote(template_id)}")

    def create(self, body):
        return self._client.post("/templates", body)

    def delete(self, template_id):
        return self._client.delete(f"/templates/{quote(template_id)}")


class ScheduledResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/scheduled", params=params)

    def get(self, scheduled_id):
        return self._client.get(f"/scheduled/{quote(scheduled_id)}")

    def cancel(self, scheduled_id):
        return self._client.delete(f"/scheduled/{quote(scheduled_id)}")


class BulkResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/bulk", params=params)

    def get(self, bulk_id):
        return self._client.get(f"/bulk/{quote(bulk_id)}")

    def create(self, body):
        return self._client.post("/bulk", body)

    def cancel(self, bulk_id):
        return self._client.delete(f"/bulk/{quote(bulk_id)}")


class ContactsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/contacts", params=params)

    def get(self, contact_id):
        return self._client.get(f"/contacts/{quote(contact_id)}")

    def create(self, body):
        return self._client.post("/contacts", body)

    def update(self, contact_id, body):
        return self._client.put(f"/contacts/{quote(contact_id)}", body)

    def delete(self, contact_id):
        return self._client.delete(f"/contacts/{quote(contact_id)}")


class GroupsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/groups", params=params)

    def get(self, group_id):
        return self._client.get(f"/groups/{quote(group_id)}")

    def create(self, body):
        return self._client.post("/groups", body)

    def update(self, group_id, body):
        return self._client.put(f"/groups/{quote(group_id)}", body)

    def leave(self, group_id):
        return self._client.post(f"/groups/{quote(group_id)}/leave", {})


class ChatsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/chats", params=params)

    def get(self, chat_id):
        return self._client.get(f"/chats/{quote(chat_id)}")

    def archive(self, chat_id, body=None):
        return self._client.post(f"/chats/{quote(chat_id)}/archive", body or {})

    def unarchive(self, chat_id):
        return self._client.post(f"/chats/{quote(chat_id)}/unarchive", {})


class BusinessResource:
    def __init__(self, client):
        self._client = client

    def get(self, params=None):
        return self._client.get("/business", params=params)

    def update(self, body):
        return self._client.put("/business", body)


class StorageResource:
    def __init__(self, client):
        self._client = client

    def get_usage(self, params=None):
        return self._client.get("/storage/usage", params=params)

    def list_files(self, params=None):
        return self._client.get("/storage/files", params=params)


class LabelsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/labels", params=params)

    def get(self, label_id):
        return self._client.get(f"/labels/{quote(label_id)}")

    def create(self, body):
        return self._client.post("/labels", body)

    def delete(self, label_id):
        return self._client.delete(f"/labels/{quote(label_id)}")


class IntegrationsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/integrations", params=params)

    def get(self, integration_id):
        return self._client.get(f"/integrations/{quote(integration_id)}")

    def connect(self, body):
        return self._client.post("/integrations/connect", body)

    def disconnect(self, integration_id):
        return self._client.delete(f"/integrations/{quote(integration_id)}")


class QueueResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/queue", params=params)

    def get(self, job_id):
        return self._client.get(f"/queue/{quote(job_id)}")

    def cancel(self, job_id):
        return self._client.delete(f"/queue/{quote(job_id)}")


class InteractiveResource:
    def __init__(self, client):
        self._client = client

    def send_list(self, body):
        return self._client.post("/interactive/list", body)

    def send_buttons(self, body):
        return self._client.post("/interactive/buttons", body)


class ApiKeysResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/api-keys", params=params)

    def create(self, body):
        return self._client.post("/api-keys", body)

    def revoke(self, key_id):
        return self._client.delete(f"/api-keys/{quote(key_id)}")


class ProfileResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/profile")

    def update(self, body):
        return self._client.put("/profile", body)


class DashboardResource:
    def __init__(self, client):
        self._client = client

    def get(self, params=None):
        return self._client.get("/dashboard", params=params)


class PlansResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/plans", params=params)

    def get(self, plan_id):
        return self._client.get(f"/plans/{quote(plan_id)}")


class BillingResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/billing")

    def get_invoices(self, params=None):
        return self._client.get("/billing/invoices", params=params)


class ReferralResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/referral")

    def get_links(self, params=None):
        return self._client.get("/referral/links", params=params)


class NotificationsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/notifications", params=params)

    def mark_read(self, notification_id):
        return self._client.post(f"/notifications/{quote(notification_id)}/read", {})


class MetricsResource:
    def __init__(self, client):
        self._client = client

    def get(self, params=None):
        return self._client.get("/metrics", params=params)


class BackupResource:
    def __init__(self, client):
        self._client = client

    def create(self, body=None):
        return self._client.post("/backup", body or {})

    def list(self, params=None):
        return self._client.get("/backup", params=params)

    def restore(self, backup_id):
        return self._client.post(f"/backup/{quote(backup_id)}/restore", {})


class SecurityResource:
    def __init__(self, client):
        self._client = client

    def get_settings(self):
        return self._client.get("/security/settings")

    def update_settings(self, body):
        return self._client.put("/security/settings", body)


class AuditResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/audit", params=params)

    def get(self, audit_id):
        return self._client.get(f"/audit/{quote(audit_id)}")


class OrganizationsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/organizations", params=params)

    def get(self, org_id):
        return self._client.get(f"/organizations/{quote(org_id)}")

    def create(self, body):
        return self._client.post("/organizations", body)

    def update(self, org_id, body):
        return self._client.put(f"/organizations/{quote(org_id)}", body)


class SettingsResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/settings")

    def update(self, body):
        return self._client.put("/settings", body)


class ChannelsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/channels", params=params)

    def get(self, channel_id):
        return self._client.get(f"/channels/{quote(channel_id)}")


class PrivacyResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/privacy")

    def update(self, body):
        return self._client.put("/privacy", body)


class SupportResource:
    def __init__(self, client):
        self._client = client

    def tickets(self, params=None):
        return self._client.get("/support/tickets", params=params)

    def create_ticket(self, body):
        return self._client.post("/support/tickets", body)


class ProxyResource:
    def __init__(self, client):
        self._client = client

    def get(self):
        return self._client.get("/proxy")

    def update(self, body):
        return self._client.put("/proxy", body)


class CallsResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/calls", params=params)

    def get(self, call_id):
        return self._client.get(f"/calls/{quote(call_id)}")


class AuthResource:
    def __init__(self, client):
        self._client = client

    def login(self, body):
        return self._client.post("/auth/login", body)

    def logout(self):
        return self._client.post("/auth/logout", {})

    def refresh(self, body=None):
        return self._client.post("/auth/refresh", body or {})

    def me(self):
        return self._client.get("/auth/me")


class UsersResource:
    def __init__(self, client):
        self._client = client

    def list(self, params=None):
        return self._client.get("/users", params=params)

    def get(self, user_id):
        return self._client.get(f"/users/{quote(user_id)}")

    def create(self, body):
        return self._client.post("/users", body)

    def update(self, user_id, body):
        return self._client.put(f"/users/{quote(user_id)}", body)

    def delete(self, user_id):
        return self._client.delete(f"/users/{quote(user_id)}")


class EmailResource:
    def __init__(self, client):
        self._client = client

    def send(self, body):
        return self._client.post("/email/send", body)

    def get_settings(self):
        return self._client.get("/email/settings")


class AiResource:
    def __init__(self, client):
        self._client = client

    def chat(self, body):
        return self._client.post("/ai/chat", body)

    def completions(self, body):
        return self._client.post("/ai/completions", body)

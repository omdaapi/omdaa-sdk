"""
HTTP client for Omdaa API with Bearer auth.
"""

from typing import Optional

import requests
from omdaa.exceptions import OmdaaError

DEFAULT_BASE_URL = "https://omdaa.com/api/v1"


class Client:
    def __init__(self, api_key: str, base_url: Optional[str] = None):
        self.api_key = api_key
        self.base_url = (base_url or DEFAULT_BASE_URL).rstrip("/")
        self._session = requests.Session()
        self._session.headers.update({
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json",
        })

    def request(
        self,
        method: str,
        path: str,
        body: Optional[dict] = None,
        params: Optional[dict] = None,
    ) -> dict:
        url = f"{self.base_url}{path}" if path.startswith("/") else f"{self.base_url}/{path}"
        kwargs = {}
        if params:
            kwargs["params"] = {k: v for k, v in params.items() if v is not None}
        if body and method != "GET":
            kwargs["json"] = body
        try:
            r = self._session.request(method, url, **kwargs)
            data = r.json() if r.content else {}
            if not r.ok:
                raise OmdaaError(
                    data.get("message", r.text or r.reason),
                    status_code=r.status_code,
                    body=data if isinstance(data, dict) else None,
                )
            return data
        except OmdaaError:
            raise
        except requests.RequestException as e:
            raise OmdaaError(str(e)) from e

    def get(self, path: str, params: dict | None = None) -> dict:
        return self.request("GET", path, params=params)

    def post(self, path: str, body: Optional[dict] = None) -> dict:
        return self.request("POST", path, body=body or {})

    def put(self, path: str, body: Optional[dict] = None) -> dict:
        return self.request("PUT", path, body=body or {})

    def delete(self, path: str, body: Optional[dict] = None) -> dict:
        return self.request("DELETE", path, body=body)


class OmdaaClient:
    """Main client with all API resources. Use with API Key (Bearer auth)."""

    def __init__(self, api_key: str, base_url: Optional[str] = None):
        self._client = Client(api_key, base_url)
        from omdaa.resources.resources import (
            MessagesResource,
            SessionsResource,
            WebhooksResource,
            TemplatesResource,
            ScheduledResource,
            BulkResource,
            ContactsResource,
            GroupsResource,
            ChatsResource,
            BusinessResource,
            StorageResource,
            LabelsResource,
            IntegrationsResource,
            QueueResource,
            InteractiveResource,
            ApiKeysResource,
            ProfileResource,
            DashboardResource,
            PlansResource,
            BillingResource,
            ReferralResource,
            NotificationsResource,
            MetricsResource,
            BackupResource,
            SecurityResource,
            AuditResource,
            OrganizationsResource,
            SettingsResource,
            ChannelsResource,
            PrivacyResource,
            SupportResource,
            ProxyResource,
            CallsResource,
            AuthResource,
            UsersResource,
            EmailResource,
            AiResource,
        )
        self.messages = MessagesResource(self)
        self.sessions = SessionsResource(self)
        self.webhooks = WebhooksResource(self)
        self.templates = TemplatesResource(self)
        self.scheduled = ScheduledResource(self)
        self.bulk = BulkResource(self)
        self.contacts = ContactsResource(self)
        self.groups = GroupsResource(self)
        self.chats = ChatsResource(self)
        self.business = BusinessResource(self)
        self.storage = StorageResource(self)
        self.labels = LabelsResource(self)
        self.integrations = IntegrationsResource(self)
        self.queue = QueueResource(self)
        self.interactive = InteractiveResource(self)
        self.api_keys = ApiKeysResource(self)
        self.profile = ProfileResource(self)
        self.dashboard = DashboardResource(self)
        self.plans = PlansResource(self)
        self.billing = BillingResource(self)
        self.referral = ReferralResource(self)
        self.notifications = NotificationsResource(self)
        self.metrics = MetricsResource(self)
        self.backup = BackupResource(self)
        self.security = SecurityResource(self)
        self.audit = AuditResource(self)
        self.organizations = OrganizationsResource(self)
        self.settings = SettingsResource(self)
        self.channels = ChannelsResource(self)
        self.privacy = PrivacyResource(self)
        self.support = SupportResource(self)
        self.proxy = ProxyResource(self)
        self.calls = CallsResource(self)
        self.auth = AuthResource(self)
        self.users = UsersResource(self)
        self.email = EmailResource(self)
        self.ai = AiResource(self)

    def get(self, path: str, params: Optional[dict] = None) -> dict:
        return self._client.get(path, params=params)

    def post(self, path: str, body: Optional[dict] = None) -> dict:
        return self._client.post(path, body=body)

    def put(self, path: str, body: Optional[dict] = None) -> dict:
        return self._client.put(path, body=body)

    def delete(self, path: str, body: Optional[dict] = None) -> dict:
        return self._client.delete(path, body=body)

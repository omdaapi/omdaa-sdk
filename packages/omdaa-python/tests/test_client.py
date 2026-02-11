"""Tests for OmdaaClient and Client."""
import sys
from pathlib import Path
from unittest import main, TestCase
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "src"))

from omdaa import OmdaaClient, OmdaaError
from omdaa.client import Client


class TestOmdaaError(TestCase):
    def test_omdaa_error_has_status_code_and_body(self):
        e = OmdaaError("Bad request", status_code=400, body={"code": "invalid"})
        self.assertEqual(str(e), "Bad request")
        self.assertEqual(e.status_code, 400)
        self.assertEqual(e.body, {"code": "invalid"})


class TestOmdaaClientResources(TestCase):
    def test_omdaa_client_creates_all_resources(self):
        with patch.object(Client, "request", return_value={"success": True}):
            client = OmdaaClient("test-key")
        self.assertIsNotNone(client.messages)
        self.assertIsNotNone(client.sessions)
        self.assertIsNotNone(client.webhooks)
        self.assertIsNotNone(client.templates)
        self.assertIsNotNone(client.scheduled)
        self.assertIsNotNone(client.bulk)
        self.assertIsNotNone(client.contacts)
        self.assertIsNotNone(client.groups)
        self.assertIsNotNone(client.chats)
        self.assertIsNotNone(client.business)
        self.assertIsNotNone(client.storage)
        self.assertIsNotNone(client.labels)
        self.assertIsNotNone(client.integrations)
        self.assertIsNotNone(client.queue)
        self.assertIsNotNone(client.interactive)
        self.assertIsNotNone(client.api_keys)
        self.assertIsNotNone(client.profile)
        self.assertIsNotNone(client.dashboard)
        self.assertIsNotNone(client.plans)
        self.assertIsNotNone(client.billing)
        self.assertIsNotNone(client.referral)
        self.assertIsNotNone(client.notifications)
        self.assertIsNotNone(client.metrics)
        self.assertIsNotNone(client.backup)
        self.assertIsNotNone(client.security)
        self.assertIsNotNone(client.audit)
        self.assertIsNotNone(client.organizations)
        self.assertIsNotNone(client.settings)
        self.assertIsNotNone(client.channels)
        self.assertIsNotNone(client.privacy)
        self.assertIsNotNone(client.support)
        self.assertIsNotNone(client.proxy)
        self.assertIsNotNone(client.calls)
        self.assertIsNotNone(client.auth)
        self.assertIsNotNone(client.users)
        self.assertIsNotNone(client.email)
        self.assertIsNotNone(client.ai)


class TestMessagesSendText(TestCase):
    def test_messages_send_text_calls_post(self):
        with patch.object(Client, "request", return_value={"success": True, "messageId": "msg-1"}) as m:
            client = OmdaaClient("test-key")
            out = client.messages.send_text({
                "sessionId": "default",
                "to": "201234567890",
                "message": "Hello",
            })
        self.assertEqual(out["messageId"], "msg-1")
        m.assert_called_once()
        call = m.call_args
        args, kwargs = call[0], call[1]
        self.assertIn("POST", args)
        self.assertIn("/messages/send-text", args)
        self.assertEqual(kwargs["body"]["sessionId"], "default")
        self.assertEqual(call[1]["body"]["to"], "201234567890")
        self.assertEqual(call[1]["body"]["message"], "Hello")


class TestSessionsList(TestCase):
    def test_sessions_list_calls_get(self):
        with patch.object(Client, "request", return_value={"sessions": []}) as m:
            client = OmdaaClient("test-key")
            out = client.sessions.list()
        self.assertIn("sessions", out)
        m.assert_called_once()
        args = m.call_args[0]
        self.assertIn("GET", args)
        self.assertIn("/sessions", args)


if __name__ == "__main__":
    main()

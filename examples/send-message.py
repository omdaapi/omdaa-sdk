#!/usr/bin/env python3
"""
مثال جاهز: إرسال رسالة نصية عبر Omdaa API (Python)

التشغيل من جذر المستودع بعد التثبيت:
  pip install -e packages/omdaa-python
  export OMDAA_API_KEY=your-api-key
  export OMDAA_TO=9665XXXXXXXX   # اختياري
  python3 examples/send-message.py

أو من مشروعك بعد: pip install omdaa-api-client
"""

import os
import sys

# من المستودع: إتاحة الحزمة من packages/omdaa-python
_repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
_src = os.path.join(_repo_root, "packages", "omdaa-python", "src")
if os.path.isdir(_src) and _src not in sys.path:
    sys.path.insert(0, _src)

from omdaa import OmdaaClient, OmdaaError

def main():
    api_key = os.environ.get("OMDAA_API_KEY", "")
    to = os.environ.get("OMDAA_TO", "966500000000")

    if not api_key:
        print("عيّن OMDAA_API_KEY ثم شغّل السكربت مرة أخرى.", file=sys.stderr)
        sys.exit(1)

    client = OmdaaClient(api_key)

    try:
        result = client.messages.send_text({
            "sessionId": "default",
            "to": to,
            "message": "مرحباً من Omdaa SDK (Python)",
        })
        print("تم الإرسال بنجاح:", result)
    except OmdaaError as e:
        print("خطأ من API:", e.status_code, str(e), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()

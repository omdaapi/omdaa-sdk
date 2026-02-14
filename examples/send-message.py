#!/usr/bin/env python3
"""
Example: Send a text message via Omdaa API (Python)

Run from repo root after install:
  pip install -e packages/omdaa-python
  export OMDAA_API_KEY=your-api-key
  export OMDAA_TO=9665XXXXXXXX   # optional
  python3 examples/send-message.py

Or from your project after: pip install omdaa-api-client
"""

import os
import sys

# From repo: make package available from packages/omdaa-python
_repo_root = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
_src = os.path.join(_repo_root, "packages", "omdaa-python", "src")
if os.path.isdir(_src) and _src not in sys.path:
    sys.path.insert(0, _src)

from omdaa import OmdaaClient, OmdaaError

def main():
    api_key = os.environ.get("OMDAA_API_KEY", "")
    to = os.environ.get("OMDAA_TO", "966500000000")

    if not api_key:
        print("Set OMDAA_API_KEY then run the script again.", file=sys.stderr)
        sys.exit(1)

    client = OmdaaClient(api_key)

    try:
        result = client.messages.send_text({
            "sessionId": "default",
            "to": to,
            "message": "Hello from Omdaa SDK (Python)",
        })
        print("Sent successfully:", result)
    except OmdaaError as e:
        print("API error:", e.status_code, str(e), file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()

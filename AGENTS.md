# AGENTS.md

## Cursor Cloud specific instructions

This is a multi-language SDK monorepo (Node.js/TS, PHP, Python, Go) for the Omdaa WhatsApp Business API. There are **no running services** — only client libraries and their tests.

### System dependencies (pre-installed in snapshot)

- **Node.js 20** (via nvm; `.nvmrc` pins version 20)
- **PHP 8.3** with extensions: xml, mbstring, curl, zip
- **Composer** (PHP package manager)
- **Python 3.12** (system)
- **Go 1.22**

### Key commands (all from repo root)

| Task | Command |
|------|---------|
| Install all deps | `make install` |
| Run all tests | `make test` |
| Build JS SDK | `make build` |
| Test single language | `make test-js`, `make test-php`, `make test-python`, `make test-go` |
| JS coverage | `cd packages/omdaa-js && npm run test:coverage` |

### Important notes

- You must `source ~/.nvm/nvm.sh && nvm use 20` before running any Node/npm commands, since the shell does not auto-load nvm.
- The Makefile `install` target runs `npm install` + `npm run build` for JS first (PHP/Python packages depend on the built JS via root `package.json`), then installs PHP (Composer) and Python (pip editable) deps.
- The Makefile sets `COMPOSER_ALLOW_SUPERUSER=1` for PHP targets, so Composer runs without warnings in root/CI environments.
- Examples in `examples/` require `OMDAA_API_KEY` env var. Without it they print an error and exit with code 1 — this is expected and is how CI's smoke test validates them.
- There is no lint command configured in this repo; testing via `make test` is the primary quality gate.
- Go SDK has zero external dependencies; `go test ./...` is self-contained.

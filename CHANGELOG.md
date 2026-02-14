# Changelog

All notable changes to this project and its packages will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- GitHub Actions CI (test-js, test-php, test-python, test-go, examples smoke).
- Vitest coverage for omdaa-js; `npm run test:coverage`.
- Dependabot for npm, Composer, and pip.
- NOTICE file (Apache 2.0).
- .nvmrc for Node version consistency.

### Changed
- License: MIT → Apache-2.0 (all packages).
- Root package.json: added `license` field.

---

## [1.1.1] - 2026-02-14

### Added
- Arabic documentation: README.ar.md, docs/QUICKSTART-AR.md.
- .github/DESCRIPTION.txt, DESCRIPTION-AR.txt, TOPICS.txt for repo SEO.
- Makefile: test, test-js, test-php, test-python, build, install.
- examples/: send-message.js, send-message.php, send-message.py (runnable from repo root).
- Root package.json for monorepo scripts and example:node.
- Extra JS tests: non-JSON response, network error, OK response with non-JSON body.
- Python package version aligned to 1.1.1.

### Changed
- README: full English; links to Arabic docs; Documentation table; stronger SEO.
- DEVELOPERS.md: full English.
- Examples and Makefile messages in English.
- Copyright: Omdaa (https://omdaa.com).

### Fixed
- Composer: run tests with COMPOSER_ALLOW_SUPERUSER=1 in Makefile to avoid root warning when using `make test`.

---

## [1.0.0] and earlier

- Initial SDK releases for Node.js, PHP, Python, Go, and Laravel.
- Official Omdaa WhatsApp Business API client libraries.

[Unreleased]: https://github.com/omdaapi/omdaa-sdk/compare/main...HEAD
[1.1.1]: https://github.com/omdaapi/omdaa-sdk/compare/v1.0.0...v1.1.1

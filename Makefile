# Omdaa SDK - Run tests and build from repo root
# Usage: make test | make test-js | make test-php | make test-python | make build

.PHONY: test test-js test-php test-python build install

test: test-js test-php test-python
	@echo ""
	@echo "All tests passed (JS + PHP + Python)"

test-js:
	@echo "Running JavaScript/TypeScript tests..."
	@cd packages/omdaa-js && npm test

test-php:
	@echo "Running PHP tests..."
	@cd packages/omdaa-php && COMPOSER_ALLOW_SUPERUSER=1 composer test

test-python:
	@echo "Running Python tests..."
	@cd packages/omdaa-python && python3 -m pytest tests/ -v

build: build-js
	@echo "Build complete"

build-js:
	@echo "Building omdaa-js..."
	@cd packages/omdaa-js && npm run build

install: install-js build-js install-php install-python install-root
	@echo "All package dependencies installed"

install-js:
	@cd packages/omdaa-js && npm install

install-root:
	@npm install

install-php:
	@cd packages/omdaa-php && COMPOSER_ALLOW_SUPERUSER=1 composer install

install-python:
	@cd packages/omdaa-python && pip3 install -e ".[dev]" 2>/dev/null || python3 -m pip install -e ".[dev]"

# Omdaa SDK - تشغيل الاختبارات والبناء من الجذر
# استخدم: make test | make test-js | make test-php | make test-python | make build

.PHONY: test test-js test-php test-python build install

test: test-js test-php test-python
	@echo ""
	@echo "✅ جميع الاختبارات نجحت (JS + PHP + Python)"

test-js:
	@echo "▶ تشغيل اختبارات JavaScript/TypeScript..."
	@cd packages/omdaa-js && npm test

test-php:
	@echo "▶ تشغيل اختبارات PHP..."
	@cd packages/omdaa-php && COMPOSER_ALLOW_SUPERUSER=1 composer test

test-python:
	@echo "▶ تشغيل اختبارات Python..."
	@cd packages/omdaa-python && python3 -m pytest tests/ -v

build: build-js
	@echo "✅ البناء اكتمل"

build-js:
	@echo "▶ بناء حزمة omdaa-js..."
	@cd packages/omdaa-js && npm run build

install: install-js build-js install-php install-python install-root
	@echo "✅ تثبيت تبعيات جميع الحزم اكتمل"

install-js:
	@cd packages/omdaa-js && npm install

install-root:
	@npm install

install-php:
	@cd packages/omdaa-php && COMPOSER_ALLOW_SUPERUSER=1 composer install

install-python:
	@cd packages/omdaa-python && pip3 install -e ".[dev]" 2>/dev/null || python3 -m pip install -e ".[dev]"

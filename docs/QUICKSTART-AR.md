# البدء السريع — Omdaa API بالعربية

> دليل مختصر للتكامل مع **منصة Omdaa** (واتساب للأعمال) باستخدام المكتبات الرسمية.

> **مجاني للأبد:** Omdaa API مجاني بالكامل — لا اشتراكات ولا بطاقة ائتمان. جميع المميزات متاحة للجميع.

---

## 1. الحصول على مفتاح API

1. ادخل إلى [omdaa.com](https://omdaa.com) وسجّل أو سجّل الدخول.
2. من [لوحة التحكم](https://omdaa.com/dashboard) انتقل إلى إعدادات API أو API Keys.
3. أنشئ **API Key** واحفظه — ستستخدمه في كل طلباتك.

---

## 2. تثبيت المكتبة حسب لغتك

| اللغة | الأمر |
|--------|--------|
| Node.js | `npm install omdaa-api-client` |
| PHP | `composer require omdaa/omdaa-php` |
| Python | `pip install omdaa-api-client` |

---

## 3. إرسال أول رسالة واتساب

- **Node.js:** أنشئ عميلاً بـ `new OmdaaClient({ apiKey: 'YOUR_API_KEY' })` ثم استدعِ `client.messages.sendText({ sessionId: 'default', to: 'رقم_المستلم', message: 'النص' })`.
- **PHP:** `new OmdaaClient('YOUR_API_KEY')` ثم `$client->messages()->sendText([...])`.
- **Python:** `OmdaaClient("YOUR_API_KEY")` ثم `client.messages.send_text({...})`.

استبدل `رقم_المستلم` برقم واتساب كامل مع رمز الدولة (مثال: 966512345678).

---

## 4. الخطوة التالية

| المورد | الرابط |
|--------|--------|
| الشرح الكامل (عربي) | [README.ar.md](../README.ar.md) |
| الشرح الكامل (English) | [README.md](../README.md) |
| مرجع المطورين | [DEVELOPERS.ar.md](../DEVELOPERS.ar.md) |
| Cursor MCP واتساب | [omdaa.com/mcp](https://omdaa.com/mcp) · [Cursor Directory](https://cursor.directory/plugins/omdaa-api) |
| عقدة n8n | [GitHub](https://github.com/omdaapi/n8n-nodes-whatsapp-omdaa) |
| التوثيق الرسمي | [omdaa.net](https://omdaa.net) |

---

منصة **Omdaa** مصرية، تدعم تحكماً كاملاً بالواتساب والربط بالذكاء الاصطناعي. للمساعدة: [omdaa.com](https://omdaa.com).

# البدء السريع — Omdaa API بالعربية

> دليل مختصر للتكامل مع **منصة Omdaa** (واتساب للأعمال) باستخدام المكتبات الرسمية.

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

- **الشرح الكامل بالعربية:** [README.ar.md](../README.ar.md)
- **التوثيق بالإنجليزية والأمثلة الكاملة:** [README.md](../README.md)
- **للمطورين (مميزات المنصة):** [DEVELOPERS.md](../DEVELOPERS.md)

---

منصة **Omdaa** مصرية، تدعم تحكماً كاملاً بالواتساب والربط بالذكاء الاصطناعي. للمساعدة: [omdaa.com](https://omdaa.com).

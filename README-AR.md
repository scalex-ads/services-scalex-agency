# صفحة ScaleX Ads للخدمات (Landing Page)

صفحة ثابتة (HTML/CSS/JS) من غير أي باك إند، جاهزة لـ GitHub Pages.

## الرفع على GitHub Pages
1. اعمل Repository جديد على GitHub (مثلًا `scalex-landing`).
2. ارفع محتوى الفولدر ده كله (`index.html` و`assets` و`.nojekyll`) في الـ root.
3. من Settings ← Pages: اختار Branch = `main` وFolder = `/ (root)` واضغط Save.
4. بعد دقيقة أو اتنين الصفحة تظهر على `https://USERNAME.github.io/REPO/`.

## التعديل
كل اللي بيتعدّل في أول ملف `assets/app.js`:
- `CONFIG.waNumber`: رقم الواتساب.
- `SERVICES`: الخدمات (العنوان والوصف والتفاصيل).
- `PKG_ITEMS`: عناصر "فصّل باقتك".
- `DESIGNS` و`REVIEWS`: أسماء ملفات التصاميم وصور التقييمات (الصور في `assets/img`).
نصوص الباقات والهيرو والفورم في `index.html`. الألوان في أول `assets/style.css`.

## الفورم
الفورم والباقات بيفتحوا واتساب برسالة جاهزة (مفيش سيرفر، فالبيانات مش بتتخزن في أي مكان).
لو عايز تستقبل البيانات في شيت أو إيميل، ممكن نربطه بخدمة زي Formspree أو Google Sheets.

## ملاحظة
قبل النشر راجع أرقام قسم الإحصائيات (من لقطة Ads Manager) وتأكد إنها تعبّر عن اللي عايز تعلنه.

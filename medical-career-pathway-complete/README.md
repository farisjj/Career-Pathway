# Medical Career Pathway 🏥

## نظرة عامة | Overview

**Medical Career Pathway** هو دليل شامل ومرجعي لاستكمال المسيرة الطبية والاختصاص في أفضل الدول العالمية. يوفر الموقع معلومات تفصيلية عن متطلبات الاختصاص والامتحانات والرواتب والفرص الوظيفية في 6 دول رائدة.

A comprehensive guide for medical professionals seeking specialization abroad. The platform provides detailed information about requirements, exams, salaries, and career opportunities in 6 leading countries.

---

## المميزات الرئيسية | Key Features

✨ **معلومات شاملة عن 6 دول:**
- 🇺🇸 الولايات المتحدة الأمريكية (USA) - USMLE, Match, Residency
- 🇬🇧 المملكة المتحدة (UK) - UKMLA, GMC, NHS
- 🇩🇪 ألمانيا (Germany) - Approbation, Facharzt
- 🇦🇺 أستراليا (Australia) - AMC, AHPRA
- 🇶🇦 قطر (Qatar) - HMC, Sidra Medicine
- 🇯🇴 الأردن (Jordan) - RMS, MOH

📋 **محتوى تفصيلي يشمل:**
- ✅ متطلبات القبول والامتحانات المطلوبة
- ✅ جداول الرواتب والحوافز الشاملة
- ✅ قصص النجاح من أطباء حقيقيين
- ✅ نصائح عملية وإرشادات مهمة
- ✅ فيديوهات توضيحية لكل مسار
- ✅ أسئلة شائعة وإجابات مفصلة

🎨 **تصميم احترافي:**
- ✨ واجهة مستخدم حديثة وسهلة الاستخدام
- 🌍 دعم كامل للعربية والإنجليزية (RTL/LTR)
- 🖼️ صور احترافية بالذكاء الاصطناعي
- 📱 تصميم متجاوب (Responsive Design)
- ⚡ أداء عالي جداً

---

## المتطلبات | Requirements

- **Node.js:** 18.0.0 أو أحدث
- **npm:** 9.0.0 أو أحدث (أو pnpm 8.0.0+)
- **متصفح حديث:** Chrome, Firefox, Safari, Edge

---

## التثبيت والتشغيل | Installation & Setup

### 1. استنساخ المستودع
```bash
git clone https://github.com/yourusername/medical-career-pathway.git
cd medical-career-pathway
```

### 2. تثبيت المكتبات
```bash
# باستخدام npm
npm install

# أو باستخدام pnpm
pnpm install
```

### 3. تشغيل خادم التطوير
```bash
# باستخدام npm
npm run dev

# أو باستخدام pnpm
pnpm dev
```

سيتم فتح الموقع على `http://localhost:5173`

### 4. بناء المشروع للإنتاج
```bash
# باستخدام npm
npm run build

# أو باستخدام pnpm
pnpm build
```

### 5. معاينة النسخة الإنتاجية
```bash
# باستخدام npm
npm run preview

# أو باستخدام pnpm
pnpm preview
```

---

## هيكل المشروع | Project Structure

```
medical-career-pathway/
├── client/
│   ├── src/
│   │   ├── pages/                    # صفحات التطبيق
│   │   │   ├── Home.tsx              # الصفحة الرئيسية
│   │   │   ├── CountryDetail.tsx     # صفحة تفاصيل الدول
│   │   │   └── NotFound.tsx          # صفحة 404
│   │   │
│   │   ├── components/               # مكونات React
│   │   │   ├── PathwayTabs.tsx       # مكون التبويبات
│   │   │   ├── ErrorBoundary.tsx     # معالج الأخطاء
│   │   │   ├── ManusDialog.tsx       # مكون الحوار
│   │   │   ├── Map.tsx               # مكون الخريطة
│   │   │   └── ui/                   # مكونات shadcn/ui
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── tabs.tsx
│   │   │       └── ... (40+ مكون)
│   │   │
│   │   ├── data/                     # ملفات البيانات
│   │   │   ├── countriesData.ts      # بيانات الدول
│   │   │   └── pathwayDetails.ts     # تفاصيل المسارات
│   │   │
│   │   ├── contexts/                 # React Contexts
│   │   │   └── ThemeContext.tsx      # سياق المظهر
│   │   │
│   │   ├── hooks/                    # Custom Hooks
│   │   │   ├── useComposition.ts
│   │   │   ├── useMobile.tsx
│   │   │   └── usePersistFn.ts
│   │   │
│   │   ├── lib/                      # Utility Functions
│   │   │   └── utils.ts
│   │   │
│   │   ├── App.tsx                   # مكون التطبيق الرئيسي
│   │   ├── main.tsx                  # نقطة الدخول
│   │   └── index.css                 # الأنماط العامة
│   │
│   ├── public/                       # ملفات عامة
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── manifest.json
│   │
│   └── index.html                    # ملف HTML الرئيسي
│
├── server/                           # ملفات الخادم (placeholder)
├── shared/                           # ملفات مشتركة
├── patches/                          # تصحيحات npm
├── node_modules/                     # المكتبات المثبتة
├── package.json                      # المكتبات والتبعيات
├── pnpm-lock.yaml                    # ملف القفل
├── tsconfig.json                     # إعدادات TypeScript
├── vite.config.ts                    # إعدادات Vite
├── components.json                   # إعدادات shadcn/ui
└── README.md                         # هذا الملف
```

---

## المكدس التكنولوجي | Tech Stack

### Frontend
- **Framework:** React 19.2.1
- **Language:** TypeScript 5.6.3
- **Build Tool:** Vite 7.1.7
- **Styling:** Tailwind CSS 4.1.14
- **UI Components:** shadcn/ui
- **Routing:** Wouter 3.3.5
- **Forms:** React Hook Form 7.64.0
- **Validation:** Zod 4.1.12
- **Icons:** Lucide React 0.453.0
- **Animations:** Framer Motion 12.23.22
- **Markdown:** Streamdown 1.4.0
- **Toast Notifications:** Sonner 2.0.7

### Development
- **Type Checking:** TypeScript
- **Code Formatting:** Prettier 3.6.2
- **Linting:** ESLint (via Vite)
- **Testing:** Vitest 2.1.4

### Build & Deployment
- **Package Manager:** pnpm 10.4.1
- **Node Version:** 22.13.0

---

## الميزات المتقدمة | Advanced Features

### 1. دعم اللغات ثنائي الاتجاه
```typescript
// دعم كامل للعربية والإنجليزية
// RTL/LTR ديناميكي
// معالجة صحيحة للنصوص المختلطة
```

### 2. تصميم متجاوب
- Mobile-first approach
- Breakpoints محسّنة
- تحسينات الأداء
- تجربة مستخدم ممتازة

### 3. محتوى ديناميكي
- بيانات منظمة وسهلة التحديث
- صور احترافية بالذكاء الاصطناعي
- فيديوهات توضيحية مدمجة
- أسئلة شائعة شاملة

### 4. تحسينات SEO
- Meta tags محسّنة
- Open Graph support
- Structured data
- Sitemap

---

## الإعدادات والتخصيص | Configuration

### تغيير الألوان والأنماط
عدّل ملف `client/src/index.css`:

```css
:root {
  --primary: #1e3a8a;           /* اللون الأساسي */
  --secondary: #0d9488;         /* اللون الثانوي */
  --accent: #06b6d4;            /* لون التركيز */
  --background: #ffffff;        /* لون الخلفية */
  --foreground: #0f172a;        /* لون النص */
}
```

### إضافة دول جديدة
أضف بيانات الدولة في `client/src/data/countriesData.ts`:

```typescript
{
  id: "country-id",
  name: "Country Name",
  nameAr: "اسم الدولة",
  flag: "🚩",
  image: "image-url",
  description: "وصف الدولة",
  tags: [
    { label: "اللغة", value: "اللغة" },
    { label: "التكلفة", value: "المستوى" },
    { label: "الامتحانات", value: "الامتحان" }
  ],
  requirements: ["متطلب 1", "متطلب 2"],
  successStories: [
    {
      name: "اسم الطبيب",
      specialty: "التخصص",
      achievement: "الإنجاز"
    }
  ],
  faqs: [
    {
      question: "السؤال",
      answer: "الإجابة"
    }
  ]
}
```

### تخصيص الخطوط
عدّل `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
```

---

## النشر | Deployment

### خيار 1: Vercel (موصى به)
```bash
# تثبيت Vercel CLI
npm install -g vercel

# النشر
vercel
```

### خيار 2: Netlify
```bash
# تثبيت Netlify CLI
npm install -g netlify-cli

# البناء والنشر
npm run build
netlify deploy --prod --dir=dist
```

### خيار 3: GitHub Pages
```bash
# البناء
npm run build

# رفع محتوى المجلد dist إلى gh-pages branch
```

### خيار 4: Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "preview"]
```

---

## المساهمة | Contributing

نرحب بالمساهمات! يرجى اتباع الخطوات التالية:

1. **Fork المستودع**
   ```bash
   git clone https://github.com/yourusername/medical-career-pathway.git
   ```

2. **إنشاء فرع جديد**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Commit التغييرات**
   ```bash
   git commit -m 'Add amazing feature'
   ```

4. **Push للفرع**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **فتح Pull Request**

---

## الترخيص | License

هذا المشروع مرخص تحت **MIT License** - انظر ملف [LICENSE](LICENSE) للتفاصيل.

---

## التواصل | Contact

للأسئلة والاستفسارات:

- 📧 **البريد الإلكتروني:** info@thegooddoctors.com
- 🌐 **الموقع:** https://thegooddoctors.com
- 💼 **LinkedIn:** The Good Doctors Initiative
- 📱 **WhatsApp:** [رابط WhatsApp]
- 🎥 **YouTube:** [قناة YouTube]

---

## شكر وتقدير | Acknowledgments

شكر خاص لـ:
- ✨ فريق The Good Doctors Initiative
- 👨‍⚕️ جميع الأطباء الذين ساهموا بقصصهم
- 🌍 المجتمع الطبي العربي
- 💪 كل من ساهم في تطوير هذا المشروع

---

## الخارطة الطريقية | Roadmap

- [ ] إضافة نموذج استشارة مباشرة
- [ ] إضافة أداة مقارنة تفاعلية بين الدول
- [ ] إضافة قسم "الأسئلة الشائعة" الشامل
- [ ] إضافة نظام تقييمات المستخدمين
- [ ] إضافة نسخة تطبيق موبايل
- [ ] إضافة نظام الإشعارات
- [ ] إضافة دول جديدة
- [ ] تحسينات SEO إضافية

---

## الإحصائيات | Statistics

- 📊 **عدد الدول:** 6 دول
- 📚 **عدد المسارات:** 25+ مسار تفصيلي
- 👨‍⚕️ **قصص النجاح:** 15+ قصة حقيقية
- ❓ **الأسئلة الشائعة:** 50+ سؤال وإجابة
- 🎨 **الصور:** 6 صور احترافية بالذكاء الاصطناعي
- 🎥 **الفيديوهات:** 6 فيديوهات توضيحية

---

## الدعم | Support

إذا واجهت أي مشاكل أو كان لديك اقتراحات:

1. تحقق من [الأسئلة الشائعة](FAQ.md)
2. ابحث في [المشاكل المفتوحة](issues)
3. أنشئ [مشكلة جديدة](issues/new)
4. تواصل معنا عبر البريد الإلكتروني

---

## سجل التغييرات | Changelog

### الإصدار 1.0.0 (مايو 2026)
- ✅ الإطلاق الأولي للموقع
- ✅ إضافة 6 دول رائدة
- ✅ محتوى شامل عن المسارات الطبية
- ✅ دعم كامل للعربية والإنجليزية
- ✅ صور احترافية بالذكاء الاصطناعي
- ✅ فيديوهات توضيحية
- ✅ قصص نجاح حقيقية

---

**آخر تحديث:** مايو 2026  
**الإصدار:** 1.0.0  
**الحالة:** ✅ جاهز للإنتاج

---

<div dir="rtl">

### 🎯 مهمتنا

نحن هنا لمساعدة الأطباء الطموحين على تحقيق أحلامهم المهنية من خلال توفير معلومات دقيقة وشاملة عن أفضل المسارات الطبية العالمية.

### 💡 رؤيتنا

أن نكون المرجع الأول والموثوق للأطباء العرب الذين يسعون للتخصص والتطور المهني في الخارج.

### 🚀 قيمنا

- **الشفافية:** معلومات دقيقة وموثوقة
- **الجودة:** محتوى احترافي وشامل
- **المساعدة:** دعم كامل للطلاب والأطباء
- **الابتكار:** تحديث مستمر للمعلومات

</div>


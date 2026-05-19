export interface CountryData {
  id: string;
  name: string;
  nameAr: string;
  flag: string;
  image: string;
  description: string;
  tags: { label: string; value: string }[];
  whyChoose: { text: string; icon: string }[];
  exams: { title: string; description: string }[];
  salaries: { position: string; range: string }[];
  requirements: { text: string; icon: string }[];
  advantages: { text: string; icon: string }[];
  disadvantages: { text: string; icon: string }[];
  tips: string[];
  successStories: { name: string; specialty: string; description: string; achievement: string }[];
  questions: { title: string; content: string }[];
  importantInfo: { title: string; content: string }[];
}

export const countriesData: CountryData[] = [
  {
    id: "usa",
    name: "United States",
    nameAr: "الولايات المتحدة الأمريكية",
    flag: "🇺🇸",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/usa-medical-system-6MBgAWDHnqLoorzAPd2xeJ.webp",
    description: "الولايات المتحدة توفر نظام صحي متقدم مع رواتب عالية جداً وفرص تدريب متميزة.",
    tags: [
      { label: "اللغة", value: "الإنجليزية" },
      { label: "التكلفة", value: "مرتفعة جداً" },
      { label: "الامتحانات", value: "USMLE" }
    ],
    whyChoose: [
      { text: "نظام صحي متقدم وأبحاث طبية عالمية الجودة", icon: "Hospital" },
      { text: "فرص تدريب متميزة في أفضل المستشفيات العالمية", icon: "GraduationCap" },
      { text: "رواتب عالية جداً مقارنة بدول أخرى", icon: "DollarSign" },
      { text: "فرص تطور مهني ممتازة", icon: "TrendingUp" },
      { text: "جودة حياة عالية جداً", icon: "Heart" }
    ],
    exams: [
      {
        title: "USMLE Step 1",
        description: "تقييم المعرفة الطبية الأساسية. امتحان نظري يركز على الأساسيات والعلوم الطبية الأساسية. يتكون من 280 سؤال متعدد الخيارات."
      },
      {
        title: "USMLE Step 2 CK",
        description: "الامتحان السريري. يقيس المعرفة السريرية والقدرة على التشخيص والعلاج. يتكون من 318 سؤال."
      },
      {
        title: "OET (Occupational English Test)",
        description: "امتحان لغة إنجليزية يركز على السياق الطبي. بديل لامتحان CS وشرط أساسي للحصول على شهادة ECFMG. يقيس مهارات التواصل الطبي."
      },
      {
        title: "USMLE Step 3",
        description: "امتحان الترخيص النهائي. يركز على الإدارة السريرية والقرارات الطبية."
      }
    ],
    salaries: [
      { position: "طبيب عام (Resident السنة الأولى)", range: "60,000-70,000 دولار سنوياً" },
      { position: "أخصائي (Fellow)", range: "80,000-100,000 دولار سنوياً" },
      { position: "استشاري (Attending)", range: "150,000-300,000+ دولار سنوياً حسب التخصص" }
    ],
    requirements: [
      { text: "شهادة طبية معترف بها دولياً", icon: "CheckCircle2" },
      { text: "USMLE Step 1, Step 2 CK, OET", icon: "CheckCircle2" },
      { text: "ECFMG Certification", icon: "CheckCircle2" },
      { text: "رسالة توصية من أساتذة", icon: "CheckCircle2" },
      { text: "سيرة ذاتية قوية", icon: "CheckCircle2" },
      { text: "مقابلة شخصية", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "رواتب عالية جداً مقارنة بدول أخرى", icon: "DollarSign" },
      { text: "فرص تدريب متميزة في أفضل المستشفيات العالمية", icon: "GraduationCap" },
      { text: "نظام صحي متقدم وأبحاث طبية عالمية الجودة", icon: "Hospital" },
      { text: "فرص تطور مهني ممتازة", icon: "TrendingUp" },
      { text: "جودة حياة عالية جداً", icon: "Heart" }
    ],
    disadvantages: [
      { text: "امتحانات صعبة جداً وتنافسية عالية جداً", icon: "AlertCircle" },
      { text: "تكاليف التعليم والامتحانات مرتفعة جداً", icon: "AlertCircle" },
      { text: "ساعات عمل طويلة جداً خاصة في الإقامة", icon: "AlertCircle" },
      { text: "ضغط نفسي كبير جداً", icon: "AlertCircle" },
      { text: "صعوبة الحصول على visa", icon: "AlertCircle" }
    ],
    tips: [
      "ابدأ التحضير للـ USMLE في السنة الرابعة من الطب",
      "ركز على الأساسيات والمعرفة العملية",
      "احصل على خبرة سريرية قبل التقديم",
      "اكتب أبحاث علمية لتقوية سيرتك الذاتية",
      "تواصل مع أطباء يعملون في الولايات المتحدة"
    ],
    successStories: [
      {
        name: "د. فيليب سالم",
        specialty: "طب الأورام (Oncology)",
        description: "مرجع عالمي في طب الأورام",
        achievement: "له إسهامات ضخمة في الأبحاث السريرية لعلاج السرطان"
      },
      {
        name: "د. حازم صافي",
        specialty: "جراحة القلب والأوعية الدموية",
        description: "رائد جراحة القلب",
        achievement: "له تقنيات جراحية مسجلة باسمه عالمياً"
      },
      {
        name: "د. معاوية أبو جابر",
        specialty: "طب الأطفال (Pediatrics)",
        description: "مقيم أطفال (خريج اليرموك)",
        achievement: "يمثل قصة نجاح ملهمة للطبيب الشاب في شق طريقه بثبات في نظام الإقامة الأمريكي"
      }
    ],
    questions: [
      {
        title: "ما هي خطوات التقديم للعمل في الولايات المتحدة؟",
        content: "1. اجتياز USMLE Step 1 وStep 2 CK وOET. 2. الحصول على ECFMG Certification. 3. التقديم على برامج الإقامة. 4. اجتياز المقابلات الشخصية. 5. الحصول على عرض عمل."
      },
      {
        title: "كم يستغرق التحضير للـ USMLE؟",
        content: "عادة 3-4 أشهر من التحضير المكثف. لكن يُنصح بالبدء من السنة الرابعة من الطب بشكل تدريجي."
      }
    ],
    importantInfo: [
      {
        title: "تكاليف الامتحانات",
        content: "التكلفة الإجمالية حوالي 2,800 دولار لجميع الامتحانات."
      },
      {
        title: "مدة الإقامة",
        content: "تختلف حسب التخصص: الطب الباطني والجراحة: 5 سنوات. طب الأسرة: 3 سنوات."
      }
    ]
  },
  {
    id: "uk",
    name: "United Kingdom",
    nameAr: "المملكة المتحدة",
    flag: "🇬🇧",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/uk-medical-system-2NJbazxBfmtjYtyRWFhncq.webp",
    description: "المملكة المتحدة توفر نظام NHS عريق مع تدريب طبي عالي الجودة وفرص بحثية ممتازة.",
    tags: [
      { label: "اللغة", value: "الإنجليزية" },
      { label: "التكلفة", value: "متوسطة" },
      { label: "الامتحانات", value: "PLAB" }
    ],
    whyChoose: [
      { text: "نظام NHS المشهور عالمياً", icon: "Stethoscope" },
      { text: "تدريب طبي منظم وعالي الجودة", icon: "BookOpen" },
      { text: "فرص عمل مستقرة وآمنة", icon: "Briefcase" },
      { text: "بيئة عمل احترافية جداً", icon: "Briefcase" },
      { text: "نظام صحي متقدم جداً", icon: "Hospital" }
    ],
    exams: [
      {
        title: "PLAB Part 1",
        description: "امتحان نظري (Multiple Choice). يقيس المعرفة الطبية الأساسية. يتكون من 180 سؤال."
      },
      {
        title: "PLAB Part 2",
        description: "امتحان عملي (OSCE). يقيس المهارات السريرية والتواصل مع المريض. يتكون من 16 محطة سريرية."
      },
      {
        title: "AKT (Applied Knowledge Test)",
        description: "امتحان للمقيمين. يقيس المعرفة السريرية المطبقة في الممارسة اليومية."
      }
    ],
    salaries: [
      { position: "FY1 (السنة الأولى)", range: "28,000-30,000 باوند سنوياً" },
      { position: "FY2 (السنة الثانية)", range: "32,000-34,000 باوند سنوياً" },
      { position: "Registrar (مقيم)", range: "45,000-55,000 باوند سنوياً" },
      { position: "Consultant (استشاري)", range: "80,000-120,000+ باوند سنوياً" }
    ],
    requirements: [
      { text: "PLAB Part 1 و Part 2", icon: "CheckCircle2" },
      { text: "GMC Registration", icon: "CheckCircle2" },
      { text: "OET/IELTS (إذا لم تكن الإنجليزية لغتك الأم)", icon: "CheckCircle2" },
      { text: "سنة امتياز أردنية", icon: "CheckCircle2" },
      { text: "رسالة توصية من الكلية", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "نظام NHS المشهور عالمياً", icon: "Stethoscope" },
      { text: "تدريب طبي منظم وعالي الجودة", icon: "BookOpen" },
      { text: "فرص عمل مستقرة وآمنة", icon: "Briefcase" },
      { text: "بيئة عمل احترافية جداً", icon: "Briefcase" },
      { text: "نظام صحي متقدم جداً", icon: "Hospital" }
    ],
    disadvantages: [
      { text: "رواتب أقل من الولايات المتحدة", icon: "AlertCircle" },
      { text: "امتحانات صعبة وتنافسية عالية", icon: "AlertCircle" },
      { text: "ساعات عمل طويلة", icon: "AlertCircle" },
      { text: "ضغط نفسي كبير", icon: "AlertCircle" },
      { text: "صعوبة الحصول على visa وتصريح عمل", icon: "AlertCircle" }
    ],
    tips: [
      "ركز على PLAB Part 2 (الامتحان العملي) لأنه الأصعب",
      "اعمل في وظائف غير تدريبية أولاً للتعود على النظام",
      "اقرأ عن بروتوكولات NHS المختلفة",
      "احصل على Portfolio قوي (أبحاث، presentations)",
      "تعلم اللغة الإنجليزية الطبية جيداً"
    ],
    successStories: [
      {
        name: "السير مجدي يعقوب",
        specialty: "جراحة القلب المفتوح",
        description: "أسطورة جراحة القلب",
        achievement: "أحد أكثر الجراحين تأثيراً في تاريخ الـ NHS"
      },
      {
        name: "د. نديم حبايب",
        specialty: "طب الأعصاب",
        description: "استشاري بارز",
        achievement: "له بصمة واضحة في التدريب الطبي في بريطانيا"
      },
      {
        name: "د. علي خفاجة",
        specialty: "طب الطوارئ (Emergency Medicine)",
        description: "متخصص في طب الطوارئ",
        achievement: "نموذج لكسر حاجز التحديات واختراق النظام الطبي البريطاني بكفاءة"
      }
    ],
    questions: [
      {
        title: "ما الفرق بين PLAB و USMLE؟",
        content: "PLAB هو امتحان بريطاني يركز على نظام NHS والممارسة البريطانية. USMLE هو امتحان أمريكي. كل دولة لها متطلباتها الخاصة."
      },
      {
        title: "كم يستغرق الحصول على GMC Registration؟",
        content: "عادة حوالي شهر بعد اجتياز PLAB Part 2."
      }
    ],
    importantInfo: [
      {
        title: "تكاليف الامتحانات",
        content: "PLAB Part 1: 600 جنيه إسترليني. PLAB Part 2: 1,200 جنيه إسترليني."
      },
      {
        title: "مدة التدريب",
        content: "عادة 5-7 سنوات للتخصص الكامل."
      }
    ]
  },
  {
    id: "australia",
    name: "Australia",
    nameAr: "أستراليا",
    flag: "🇦🇺",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/australia-medical-system-bXS7Ev7zqxoJP4pmDyZBuw.webp",
    description: "أستراليا توفر نظام صحي متقدم مع جودة حياة عالية جداً وفرص هجرة ممتازة.",
    tags: [
      { label: "اللغة", value: "الإنجليزية" },
      { label: "التكلفة", value: "متوسطة" },
      { label: "الامتحانات", value: "AMC" }
    ],
    whyChoose: [
      { text: "جودة حياة عالية جداً", icon: "Heart" },
      { text: "نظام صحي متقدم وحديث", icon: "Hospital" },
      { text: "فرص هجرة دائمة متاحة", icon: "Globe" },
      { text: "رواتب جيدة جداً", icon: "DollarSign" },
      { text: "بيئة عمل آمنة ومستقرة", icon: "Briefcase" }
    ],
    exams: [
      {
        title: "AMC Exam",
        description: "امتحان طبي أسترالي شامل. يقيس المعرفة الطبية والمهارات السريرية."
      },
      {
        title: "AHPRA Registration",
        description: "تسجيل مع هيئة الصحة الأسترالية. شرط أساسي للعمل."
      }
    ],
    salaries: [
      { position: "طبيب عام (GP)", range: "80,000-120,000 دولار أسترالي سنوياً" },
      { position: "أخصائي (Specialist)", range: "120,000-200,000+ دولار أسترالي سنوياً" }
    ],
    requirements: [
      { text: "شهادة طبية معترف بها دولياً", icon: "CheckCircle2" },
      { text: "اجتياز AMC Exam", icon: "CheckCircle2" },
      { text: "IELTS أو OET", icon: "CheckCircle2" },
      { text: "خبرة سريرية", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "جودة حياة عالية جداً", icon: "Heart" },
      { text: "نظام صحي متقدم وحديث", icon: "Hospital" },
      { text: "فرص هجرة دائمة متاحة", icon: "Globe" },
      { text: "رواتب جيدة جداً", icon: "DollarSign" },
      { text: "بيئة عمل آمنة ومستقرة", icon: "Briefcase" }
    ],
    disadvantages: [
      { text: "امتحانات صعبة وتنافسية عالية", icon: "AlertCircle" },
      { text: "تكاليف المعيشة عالية جداً", icon: "AlertCircle" },
      { text: "بعيدة جغرافياً عن الشرق الأوسط", icon: "AlertCircle" },
      { text: "صعوبة الحصول على visa", icon: "AlertCircle" }
    ],
    tips: [
      "ركز على اللغة الإنجليزية الطبية",
      "احصل على خبرة سريرية قبل التقديم",
      "تعرف على النظام الصحي الأسترالي",
      "تواصل مع أطباء يعملون في أستراليا"
    ],
    successStories: [
      {
        name: "د. منجد المدرس",
        specialty: "جراحة العظام (Orthopedic Surgery)",
        description: "جراح عظام رائد",
        achievement: "رائد عالمياً في الجراحة التعويضية والأطراف الصناعية الروبوتية"
      },
      {
        name: "د. محمد المقابلة",
        specialty: "الطب الأكاديمي",
        description: "قامة أكاديمية",
        achievement: "أثبت كفاءة الطبيب الأردني في أستراليا، وعاد لينقل خبرته السريرية والتدريسية لجامعاتنا الوطنية"
      }
    ],
    questions: [
      {
        title: "هل يمكن الحصول على إقامة دائمة؟",
        content: "نعم، أستراليا توفر برامج هجرة للأطباء المؤهلين."
      }
    ],
    importantInfo: [
      {
        title: "تكاليف الامتحانات",
        content: "AMC Exam: حوالي 1,000 دولار أسترالي."
      }
    ]
  },
  {
    id: "qatar",
    name: "Qatar",
    nameAr: "قطر",
    flag: "🇶🇦",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/qatar-medical-system-9Mk3NrmapbrZdfsn5wv5a5.webp",
    description: "قطر توفر رواتب عالية جداً وفرص عمل ممتازة مع مستشفيات حديثة جداً.",
    tags: [
      { label: "اللغة", value: "الإنجليزية والعربية" },
      { label: "التكلفة", value: "منخفضة" },
      { label: "الامتحانات", value: "PROMETRIC" }
    ],
    whyChoose: [
      { text: "رواتب عالية جداً", icon: "DollarSign" },
      { text: "مستشفيات حديثة جداً", icon: "Hospital" },
      { text: "بيئة عمل آمنة", icon: "Briefcase" },
      { text: "قرب من الوطن", icon: "Heart" },
      { text: "فرص تطور مهني ممتازة", icon: "TrendingUp" }
    ],
    exams: [
      {
        title: "PROMETRIC Exam",
        description: "امتحان طبي معترف به في قطر."
      },
      {
        title: "SMLE",
        description: "امتحان الترخيص الطبي في الخليج."
      }
    ],
    salaries: [
      { position: "طبيب عام", range: "15,000-20,000 ريال قطري شهرياً" },
      { position: "أخصائي", range: "20,000-35,000 ريال قطري شهرياً" }
    ],
    requirements: [
      { text: "شهادة طبية معترف بها", icon: "CheckCircle2" },
      { text: "اجتياز الامتحانات المطلوبة", icon: "CheckCircle2" },
      { text: "خبرة سريرية", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "رواتب عالية جداً", icon: "DollarSign" },
      { text: "مستشفيات حديثة جداً", icon: "Hospital" },
      { text: "بيئة عمل آمنة", icon: "Briefcase" },
      { text: "قرب من الوطن", icon: "Heart" },
      { text: "فرص تطور مهني ممتازة", icon: "TrendingUp" }
    ],
    disadvantages: [
      { text: "تنافسية عالية جداً", icon: "AlertCircle" },
      { text: "ضغط عمل كبير", icon: "AlertCircle" },
      { text: "بعيدة عن الأهل", icon: "AlertCircle" }
    ],
    tips: [
      "ركز على الخبرة السريرية",
      "تعلم اللغة الإنجليزية الطبية",
      "تواصل مع أطباء يعملون في قطر"
    ],
    successStories: [
      {
        name: "د. عبد اللطيف الخال",
        specialty: "القيادة الطبية",
        description: "قيادة طبية بارزة",
        achievement: "استشاري أول في مؤسسة حمد الطبية (HMC) له دور محوري في رسم سياسات التعليم الطبي"
      },
      {
        name: "د. هاشم أبو سرحان",
        specialty: "طب العيون (Ophthalmology)",
        description: "مقيم عيون (خريج اليرموك)",
        achievement: "نموذج استثنائي في المزاوجة بين العمل السريري والبحث العلمي، يمتلك سجلاً حافلاً بأكثر من 110 أبحاث علمية"
      }
    ],
    questions: [
      {
        title: "هل يمكن العمل بدون خبرة سابقة؟",
        content: "يفضل أن تكون لديك خبرة سريرية قبل التقديم."
      }
    ],
    importantInfo: [
      {
        title: "تكاليف المعيشة",
        content: "تكاليف المعيشة منخفضة جداً مقارنة بالراتب."
      }
    ]
  },
  {
    id: "germany",
    name: "Germany",
    nameAr: "ألمانيا",
    flag: "🇩🇪",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/germany-medical-system-DwY8Lg6Hbx7QraY7wKDjLB.webp",
    description: "ألمانيا توفر نظام صحي متقدم مع فرص تدريب ممتازة وبحث علمي عالي الجودة.",
    tags: [
      { label: "اللغة", value: "الألمانية والإنجليزية" },
      { label: "التكلفة", value: "متوسطة" },
      { label: "الامتحانات", value: "FMGE" }
    ],
    whyChoose: [
      { text: "نظام صحي متقدم جداً", icon: "Hospital" },
      { text: "فرص بحث علمي عالمية", icon: "BookOpen" },
      { text: "تدريب طبي منظم وعالي الجودة", icon: "GraduationCap" },
      { text: "رواتب جيدة", icon: "DollarSign" },
      { text: "بيئة عمل احترافية", icon: "Briefcase" }
    ],
    exams: [
      {
        title: "FMGE",
        description: "امتحان الترخيص الطبي الألماني."
      },
      {
        title: "Language Test",
        description: "اختبار اللغة الألمانية (B2 أو C1)."
      }
    ],
    salaries: [
      { position: "طبيب عام (Assistenzarzt)", range: "50,000-60,000 يورو سنوياً" },
      { position: "أخصائي (Facharzt)", range: "80,000-120,000 يورو سنوياً" }
    ],
    requirements: [
      { text: "شهادة طبية معترف بها", icon: "CheckCircle2" },
      { text: "اجتياز FMGE", icon: "CheckCircle2" },
      { text: "إتقان اللغة الألمانية", icon: "CheckCircle2" },
      { text: "خبرة سريرية", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "نظام صحي متقدم جداً", icon: "Hospital" },
      { text: "فرص بحث علمي عالمية", icon: "BookOpen" },
      { text: "تدريب طبي منظم وعالي الجودة", icon: "GraduationCap" },
      { text: "رواتب جيدة", icon: "DollarSign" },
      { text: "بيئة عمل احترافية", icon: "Briefcase" }
    ],
    disadvantages: [
      { text: "اللغة الألمانية صعبة جداً", icon: "AlertCircle" },
      { text: "امتحانات صعبة وتنافسية عالية", icon: "AlertCircle" },
      { text: "بعيدة جغرافياً عن الشرق الأوسط", icon: "AlertCircle" }
    ],
    tips: [
      "تعلم اللغة الألمانية قبل التقديم",
      "احصل على خبرة سريرية قبل التقديم",
      "تواصل مع أطباء يعملون في ألمانيا"
    ],
    successStories: [
      {
        name: "د. ماجد سامي",
        specialty: "جراحة المخ والأعصاب (Neurosurgery)",
        description: "الأب الروحي لجراحة المخ الحديثة",
        achievement: "وجهة علمية وملهمة للأطباء العرب"
      },
      {
        name: "د. عمر القضاة",
        specialty: "الطب المتعدد التخصصات",
        description: "نموذج شبابي",
        achievement: "يوضح كيفية التغلب على عائق اللغة الألمانية بذكاء، والاندماج بسلاسة في نظام الاختصاص والتدريب هناك"
      }
    ],
    questions: [
      {
        title: "هل يمكن العمل بدون إتقان اللغة الألمانية؟",
        content: "يفضل إتقان اللغة الألمانية على الأقل B2."
      }
    ],
    importantInfo: [
      {
        title: "تكاليف الامتحانات",
        content: "تختلف حسب الولاية الألمانية."
      }
    ]
  },
  {
    id: "jordan",
    name: "Jordan",
    nameAr: "الأردن",
    flag: "🇯🇴",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663659984091/4WsGFjM6hMYRXFRyPiijzn/jordan-medical-system-2wJJ3wS5XiGpEfmYMsrvy9.webp",
    description: "الأردن يوفر فرص عمل محلية جيدة مع نظام صحي متطور وقرب من الوطن.",
    tags: [
      { label: "اللغة", value: "العربية والإنجليزية" },
      { label: "التكلفة", value: "منخفضة" },
      { label: "الامتحانات", value: "JMC" }
    ],
    whyChoose: [
      { text: "قرب من الأهل والوطن", icon: "Heart" },
      { text: "نظام صحي متطور", icon: "Hospital" },
      { text: "فرص عمل محلية جيدة", icon: "Briefcase" },
      { text: "تكاليف معيشة منخفضة", icon: "DollarSign" },
      { text: "بيئة عمل مألوفة", icon: "Home" }
    ],
    exams: [
      {
        title: "JMC Exam",
        description: "امتحان الترخيص الطبي الأردني."
      }
    ],
    salaries: [
      { position: "طبيب عام", range: "800-1,200 دينار أردني شهرياً" },
      { position: "أخصائي", range: "1,500-2,500 دينار أردني شهرياً" }
    ],
    requirements: [
      { text: "شهادة طبية معترف بها", icon: "CheckCircle2" },
      { text: "اجتياز JMC", icon: "CheckCircle2" },
      { text: "سنة امتياز", icon: "CheckCircle2" }
    ],
    advantages: [
      { text: "قرب من الأهل والوطن", icon: "Heart" },
      { text: "نظام صحي متطور", icon: "Hospital" },
      { text: "فرص عمل محلية جيدة", icon: "Briefcase" },
      { text: "تكاليف معيشة منخفضة", icon: "DollarSign" },
      { text: "بيئة عمل مألوفة", icon: "Home" }
    ],
    disadvantages: [
      { text: "رواتب أقل من الدول الأخرى", icon: "AlertCircle" },
      { text: "فرص تطور مهني محدودة", icon: "AlertCircle" },
      { text: "فرص بحث علمي محدودة", icon: "AlertCircle" }
    ],
    tips: [
      "ركز على الخبرة السريرية المحلية",
      "اجتز الامتحانات المطلوبة",
      "ابني شبكة علاقات مهنية قوية"
    ],
    successStories: [
      {
        name: "د. عاصم منصور",
        specialty: "طب الأورام (Oncology)",
        description: "مدير عام مركز الحسين للسرطان",
        achievement: "قامة وطنية حولت المركز إلى صرح عالمي رائد في علاج الأورام، ونموذج لبناء مسار مهني استثنائي داخل الوطن"
      },
      {
        name: "د. عبد الله القضاة",
        specialty: "الطب العام",
        description: "طبيب متميز",
        achievement: "يمثل الشغف والالتزام العالي، ويوضح مسار التميز المتاح داخل القطاعات الصحية الأردنية"
      }
    ],
    questions: [
      {
        title: "هل يمكن العمل في الخارج بعد التخرج من الأردن؟",
        content: "نعم، يمكنك التقديم في دول أخرى بعد الحصول على الخبرة المطلوبة."
      }
    ],
    importantInfo: [
      {
        title: "فرص التطور المهني",
        content: "يمكن الدراسة العليا والتخصص في الأردن أو الخارج."
      }
    ]
  }
];

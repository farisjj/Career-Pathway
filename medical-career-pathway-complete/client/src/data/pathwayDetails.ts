export interface PathwaySection {
  id: string;
  title: string;
  titleAr: string;
  content: PathwayContent[];
}

export interface PathwayContent {
  title: string;
  titleAr: string;
  items?: string[];
  itemsAr?: string[];
  details?: Record<string, any>;
}

// JORDAN PATHWAY
export const jordanPathways: PathwaySection[] = [
  {
    id: "royal-medical-services",
    title: "Royal Medical Services (RMS)",
    titleAr: "الخدمات الطبية الملكية",
    content: [
      {
        title: "Admission Process",
        titleAr: "آلية القبول",
        itemsAr: [
          "إعلان مفتوح سنوي",
          "شروط العمر: 25-40 سنة",
          "ثلاث فرص للتقديم",
          "شهادة طبية معترف بها دولياً"
        ]
      },
      {
        title: "Exams and Interviews",
        titleAr: "الامتحانات والمقابلات",
        itemsAr: [
          "امتحان فني: 60 سؤال، علامة النجاح 30",
          "فحص طبي شامل",
          "مقابلة شخصية",
          "موافقة أمنية"
        ]
      },
      {
        title: "Financial and Legal Commitment",
        titleAr: "الالتزام المادي والقانوني",
        itemsAr: [
          "مدة الالتزام بعد التخصص: 20-25 سنة للعسكري",
          "شرط جزائي للاستقالة",
          "رسوم من الطبيب المدني حسب التخصص"
        ]
      },
      {
        title: "Salaries and Benefits",
        titleAr: "الرواتب والحوافز",
        details: {
          "طبيب عام": "1200 دينار",
          "مقيم": "1500 دينار",
          "أخصائي": "2000+ دينار",
          "ملاحظة": "الطبيب المدني: لا يتقاضى راتباً"
        }
      }
    ]
  },
  {
    id: "ministry-of-health",
    title: "Ministry of Health",
    titleAr: "وزارة الصحة",
    content: [
      {
        title: "New System (Open Announcement)",
        titleAr: "النظام الجديد (الإعلان المفتوح)",
        itemsAr: [
          "امتحان من بنك أسئلة (8000 سؤال)",
          "اختيار أعلى العلامات",
          "نظام نقاط للترتيب"
        ]
      },
      {
        title: "Commitment and Salaries",
        titleAr: "الالتزام والرواتب",
        details: {
          "الالتزام": "ضعف مدة الإقامة للمقيمين",
          "طبيب عام": "1000-1200 دينار",
          "مقيم": "1200-1500 دينار",
          "أخصائي": "1800-2500 دينار"
        }
      }
    ]
  },
  {
    id: "university-hospitals",
    title: "University Hospitals",
    titleAr: "المستشفيات الجامعية",
    content: [
      {
        title: "King Founder Hospital",
        titleAr: "مستشفى الملك المؤسس",
        details: {
          "المقاعد": "3-4 لكل تخصص",
          "نظام النقاط": "امتحان (60)، معدل (30)، جامعة (10)",
          "الراتب": "حوالي 900 دينار",
          "الرسوم": "1500-2000 دينار"
        }
      },
      {
        title: "University Hospital",
        titleAr: "المستشفى الأردنية",
        details: {
          "نظام النقاط": "امتحان (60)، معدل (30)، جامعة (10)",
          "الراتب": "850 دينار",
          "الرسوم": "1800-2400 دينار"
        }
      },
      {
        title: "Karak Government Hospital",
        titleAr: "مستشفى الكرك الحكومي",
        details: {
          "الحالة": "برنامج جديد (غير مدفوع حالياً)",
          "التخصصات": "الأربعة الكبرى فقط",
          "نظام النقاط": "امتحان (60)، معدل (25)، جامعة (10)"
        }
      },
      {
        title: "Al-Hashimiya University",
        titleAr: "مستشفى الهاشمية",
        details: {
          "التخصصات": "باطني، أطفال، نسائية، جراحة",
          "الراتب": "500 دينار",
          "الزيادة السنوية": "20 دينار",
          "الرسوم": "1800 (السنة الأولى)، 1200 (السنوات التالية)"
        }
      }
    ]
  },
  {
    id: "private-hospitals",
    title: "Private Hospitals",
    titleAr: "المستشفيات الخاصة",
    content: [
      {
        title: "General Information",
        titleAr: "معلومات عامة",
        itemsAr: [
          "عقود سنوية (قد تكون 2-5 سنوات)",
          "شروط جزائية: 3000-7000 دينار",
          "تعلم قليل (المرضى يفضلون الاستشاري)",
          "واسطات شائعة",
          "لا يوجد التزام بعد الانتهاء",
          "بعض المستشفيات تمنح بورد عربي أو أردني"
        ]
      },
      {
        title: "Hospitals Offering Residency Programs",
        titleAr: "المستشفيات التي تقدم برامج إقامة",
        itemsAr: [
          "مستشفى الاستشاري",
          "مستشفى الإسلامي",
          "مستشفى الأردن",
          "مستشفى رشيد",
          "مستشفى الاستقلال",
          "مستشفى العبدلي للعيون",
          "مستشفى ابن الهيثم",
          "مستشفى الأمل",
          "مستشفى الكندي",
          "مستشفى الإسراء"
        ]
      }
    ]
  },
  {
    id: "hussein-cancer-center",
    title: "Hussein Cancer Center",
    titleAr: "مستشفى الحسين للسرطان",
    content: [
      {
        title: "Transition Program",
        titleAr: "برنامج الترانزيشن",
        details: {
          "التخصصات": "باطني، أطفال، جراحة",
          "المدة": "سنة واحدة",
          "الراتب": "700 دينار",
          "الهدف": "ملء الفراغ في السيرة الذاتية وإجراء الأبحاث",
          "الفائدة": "يزيد فرص القبول في برامج التخصص الخارجية"
        }
      }
    ]
  }
];

// GERMANY PATHWAY
export const germanyPathways: PathwaySection[] = [
  {
    id: "language-requirements",
    title: "Language Requirements",
    titleAr: "متطلبات اللغة",
    content: [
      {
        title: "Language Levels",
        titleAr: "مستويات اللغة",
        details: {
          "B1": "للفيزا",
          "B2": "لامتحان اللغة الطبية",
          "C1": "لبعض التخصصات (مثل الجلدية)",
          "ملاحظة": "شهادة اللغة: يجب ألا يتجاوز عمرها سنة للسفارة"
        }
      }
    ]
  },
  {
    id: "exams-certificates",
    title: "Exams and Certificates",
    titleAr: "الامتحانات والشهادات",
    content: [
      {
        title: "Medical Language Exam (FSP)",
        titleAr: "امتحان اللغة الطبية (FSP)",
        details: {
          "الأقسام": "أخذ السيرة، الكتابة، التقديم",
          "المدة": "3 ساعات",
          "التكلفة": "حوالي 400 يورو"
        }
      },
      {
        title: "Medical Degree Equivalence (Approbation)",
        titleAr: "معادلة شهادة الطب (Approbation)",
        details: {
          "مدة الإجراءات": "2-3 أشهر",
          "التكلفة": "100-200 يورو"
        }
      }
    ]
  },
  {
    id: "financial-requirements",
    title: "Financial Requirements",
    titleAr: "المتطلبات المالية",
    content: [
      {
        title: "Blocked Account (Sperrkonto)",
        titleAr: "الحساب المغلق",
        details: {
          "المبلغ": "13,104 يورو",
          "البديل": "وجود كفيل ألماني"
        }
      }
    ]
  },
  {
    id: "work-environment",
    title: "Work Environment and Salaries",
    titleAr: "بيئة العمل والرواتب",
    content: [
      {
        title: "Resident Salary",
        titleAr: "راتب المقيم",
        details: {
          "الراتب الإجمالي": "3500-4000 يورو",
          "الراتب الصافي": "3000-3500 يورو (بعد خصم 30-40% ضرائب)",
          "الإجازات": "20-30 يوم سنوياً",
          "المناوبات": "3-4 مناوبات شهرياً"
        }
      }
    ]
  },
  {
    id: "clinical-training",
    title: "Clinical Training",
    titleAr: "التدريب السريري",
    content: [
      {
        title: "Famulatur / Elective",
        titleAr: "Famulatur / Elective",
        itemsAr: [
          "مراسلة المستشفيات مباشرة",
          "صيغة الإيميل احترافية",
          "الفوائد: التعرف على النظام والحصول على توصيات"
        ]
      }
    ]
  }
];

// AUSTRALIA PATHWAY
export const australiaPathways: PathwaySection[] = [
  {
    id: "amc-pathways",
    title: "AMC Pathways",
    titleAr: "مسارات المجلس الطبي الأسترالي",
    content: [
      {
        title: "Standard Pathway",
        titleAr: "المسار القياسي",
        details: {
          "الفئة": "للخريجين الدوليين",
          "المتطلبات": "اجتياز AMC 1 وAMC 2"
        }
      },
      {
        title: "Specialist Pathway",
        titleAr: "مسار الاختصاصيين",
        details: {
          "الفئة": "للاختصاصيين المعترف بهم",
          "المتطلبات": "متطلبات مختلفة"
        }
      },
      {
        title: "Competent Authority Pathway",
        titleAr: "مسار السلطة المختصة",
        details: {
          "الفئة": "للأطباء من دول معينة"
        }
      }
    ]
  },
  {
    id: "amc-exams",
    title: "AMC Exams",
    titleAr: "امتحانات الـ AMC",
    content: [
      {
        title: "Theoretical Exam (AMC 1)",
        titleAr: "الامتحان النظري (AMC 1)",
        details: {
          "عدد الأسئلة": "150 MCQ",
          "التكلفة": "حوالي 1200 دولار أسترالي",
          "التخصصات": "أساسيات، باطني، جراحة، أطفال، نسائية"
        }
      },
      {
        title: "Clinical Exam (AMC 2 - OSCE)",
        titleAr: "الامتحان السريري (AMC 2 - OSCE)",
        details: {
          "عدد المحطات": "16 محطة",
          "التكلفة": "حوالي 1500 دولار أسترالي",
          "المدة": "يوم واحد",
          "شروط النجاح": "50% في كل محطة"
        }
      }
    ]
  },
  {
    id: "language-requirements-au",
    title: "Language Requirements",
    titleAr: "متطلبات اللغة",
    content: [
      {
        title: "English Proficiency",
        titleAr: "إتقان اللغة الإنجليزية",
        details: {
          "IELTS": "7.0 في كل مكون",
          "OET": "B في كل مكون"
        }
      }
    ]
  },
  {
    id: "work-environment-au",
    title: "Work Environment and Salaries",
    titleAr: "بيئة العمل والرواتب",
    content: [
      {
        title: "Junior Resident",
        titleAr: "المقيم المبتدئ",
        details: {
          "الراتب": "60,000-100,000 دولار أسترالي",
          "الساعات": "38-40 ساعة أسبوعياً",
          "المناوبات": "1-2 مناوبة شهرياً"
        }
      },
      {
        title: "Specialist",
        titleAr: "الاختصاصي",
        details: {
          "الراتب": "يبدأ من 250,000 دولار أسترالي",
          "ملاحظة": "يختلف حسب التخصص والخبرة"
        }
      },
      {
        title: "Important Notes",
        titleAr: "ملاحظات مهمة",
        itemsAr: [
          "الضرائب مرتفعة (30-40%)",
          "نظام استرجاع ضريبي (Tax Return)",
          "جودة حياة عالية جداً",
          "فرص هجرة دائمة متاحة"
        ]
      }
    ]
  }
];


// QATAR PATHWAY
export const qatarPathways: PathwaySection[] = [
  {
    id: "medical-institutions",
    title: "Medical Institutions",
    titleAr: "المؤسسات الطبية",
    content: [
      {
        title: "Hamad Medical Corporation (HMC)",
        titleAr: "مؤسسة حمد الطبية",
        details: {
          "النوع": "حكومية",
          "التصنيف": "المؤسسة الرئيسية الأكبر في قطر",
          "البرامج": "جميع التخصصات الطبية",
          "المنافسة": "عالية جداً"
        }
      },
      {
        title: "Sidra Medicine",
        titleAr: "مستشفى سدرة للطب",
        details: {
          "النوع": "شبه حكومية",
          "التخصص": "طب الأطفال والنساء والتوليد",
          "التصنيف": "مستشفى متخصص عالي المستوى",
          "المنافسة": "عالية"
        }
      }
    ]
  },
  {
    id: "medical-exams-qatar",
    title: "Medical Exams and Language",
    titleAr: "الامتحانات الطبية واللغة",
    content: [
      {
        title: "Medical Exam Options",
        titleAr: "خيارات الامتحانات الطبية",
        details: {
          "USMLE": "خيار عام معترف به دولياً",
          "IFOM": "امتحان محلي قطري (مفضل في قطر)",
          "الحد الأدنى المفضل": "85-88 درجة في IFOM",
          "الملاحظة": "IFOM يزيد فرص القبول في المؤسسات القطرية"
        }
      },
      {
        title: "Language Requirements",
        titleAr: "متطلبات اللغة",
        details: {
          "IELTS": "7.0 أو أعلى",
          "TOEFL iBT": "100 أو أعلى",
          "OET": "B أو أعلى",
          "الملاحظة": "جميع الخيارات مقبولة"
        }
      }
    ]
  },
  {
    id: "application-requirements-qatar",
    title: "Application Requirements",
    titleAr: "شروط التقديم الأساسية",
    content: [
      {
        title: "Basic Requirements",
        titleAr: "المتطلبات الأساسية",
        itemsAr: [
          "إكمال سنة الامتياز بنجاح",
          "عدم وجود انقطاع (Gap) لأكثر من سنتين",
          "شهادة طبية معترف بها دولياً",
          "اجتياز الامتحانات الطبية المطلوبة",
          "إثبات إتقان اللغة الإنجليزية"
        ]
      },
      {
        title: "Application Deadlines",
        titleAr: "مواعيد التقديم",
        details: {
          "حمد الطبية": "عادة في الربع الأول من السنة",
          "سدرة للطب": "قد تختلف حسب التخصص",
          "الملاحظة": "يُنصح بالتحقق من المواقع الرسمية للتحديثات"
        }
      }
    ]
  },
  {
    id: "boost-acceptance-qatar",
    title: "Boost Your Acceptance Chances",
    titleAr: "تعزيز فرص القبول",
    content: [
      {
        title: "Key Factors",
        titleAr: "العوامل الرئيسية",
        itemsAr: [
          "الأبحاث العلمية (Research) - أساسي جداً",
          "الزيارات السريرية (Electives) في مستشفيات معروفة",
          "وجود إقامة قطرية (QID) أو كفيل قطري",
          "خطابات توصية قوية من أساتذة معروفين",
          "سيرة ذاتية متميزة وخبرة عملية",
          "درجات عالية في الامتحانات الطبية"
        ]
      }
    ]
  }
];

// USA PATHWAY
export const usaPathways: PathwaySection[] = [
  {
    id: "usmle-exams",
    title: "USMLE Exams",
    titleAr: "امتحانات USMLE",
    content: [
      {
        title: "ECFMG Certification",
        titleAr: "شهادة ECFMG",
        details: {
          "المتطلبات": "اجتياز Step 1 وStep 2 CK وامتحان اللغة OET",
          "Step 1": "الامتحان الأساسي (العلوم الأساسية)",
          "Step 2 CK": "الامتحان السريري (المعرفة السريرية)",
          "OET": "امتحان اللغة الطبية",
          "المدة": "عادة 1-2 سنة لإكمال جميع الخطوات"
        }
      },
      {
        title: "OET (Occupational English Test)",
        titleAr: "OET (اختبار اللغة الإنجليزية المهني)",
        details: {
          "الوصف": "امتحان لغة إنجليزية يركز على السياق الطبي",
          "الأهمية": "بديل لامتحان CS وشرط أساسي للحصول على شهادة ECFMG",
          "الحد الأدنى": "B في جميع المكونات",
          "المدة": "حوالي 2 ساعات و 45 دقيقة"
        }
      }
    ]
  },
  {
    id: "the-match",
    title: "The Match System",
    titleAr: "نظام المطابقة",
    content: [
      {
        title: "ERAS Application",
        titleAr: "تطبيق ERAS",
        details: {
          "الغرض": "نظام التقديم الموحد للإقامة الطبية",
          "المتطلبات": "سيرة ذاتية، خطابات توصية، نتائج امتحانات",
          "المقابلات": "مهمة جداً لفرص القبول",
          "التدريب السريري": "USCE/Electives في مستشفيات أمريكية"
        }
      },
      {
        title: "Success Factors",
        titleAr: "عوامل النجاح",
        itemsAr: [
          "درجات عالية في USMLE (خاصة Step 1 وStep 2 CK)",
          "إجادة اللغة الإنجليزية (اجتياز OET)",
          "خطابات توصية قوية من أطباء أمريكيين",
          "تدريب سريري في مستشفيات أمريكية معروفة",
          "مقابلات شخصية قوية وانطباع إيجابي",
          "سيرة ذاتية متميزة مع أبحاث وإنجازات",
          "التخصص المختار (بعض التخصصات أكثر تنافسية)"
        ]
      }
    ]
  },
  {
    id: "visa-requirements",
    title: "Visa Requirements",
    titleAr: "متطلبات التأشيرات",
    content: [
      {
        title: "J1 Visa",
        titleAr: "تأشيرة J1",
        details: {
          "الغرض": "للتبادل الثقافي والتدريب",
          "شرط العودة": "يجب العودة للبلد الأصلي لمدة سنتين",
          "البديل": "J1 Waiver - للعمل في مناطق نائية أو مستقلة",
          "المدة": "حسب برنامج الإقامة"
        }
      },
      {
        title: "H1B Visa",
        titleAr: "تأشيرة H1B",
        details: {
          "الغرض": "للعمل المتخصص والطريق نحو الجرين كارد",
          "المتطلبات": "عرض عمل من صاحب عمل أمريكي",
          "الفائدة": "طريق مباشر للإقامة الدائمة",
          "المدة": "3 سنوات قابلة للتجديد"
        }
      }
    ]
  },
  {
    id: "salaries-competitiveness",
    title: "Salaries and Competitiveness",
    titleAr: "الرواتب والمنافسة",
    content: [
      {
        title: "Resident Salaries",
        titleAr: "رواتب المقيمين",
        details: {
          "السنة الأولى (PGY-1)": "حوالي 60,000-63,000 دولار إجمالي",
          "السنة الثانية (PGY-2)": "حوالي 63,000-65,000 دولار إجمالي",
          "الراتب الصافي": "بعد خصم الضرائب والتأمين (30-40%)",
          "الزيادات السنوية": "تزداد مع كل سنة من الإقامة"
        }
      },
      {
        title: "Competitive Specialties",
        titleAr: "التخصصات التنافسية",
        itemsAr: [
          "الجراحة العامة - تنافسية عالية. نسبة القبول في البرنامج الكامل تتراوح بين 5% إلى 8% فقط. البرنامج المبدئي لسنة واحدة أسهل قبولاً، لكنه لا يضمن إكمال التخصص",
          "طب الأطفال - تنافسية منخفضة. يُعد من أكثر التخصصات ترحيباً بالأطباء الأجانب، حيث يشغلون حوالي 15% إلى 20% من المقاعد. خيار ممتاز ومتاح بقوة",
          "الأمراض الجلدية - تنافسية فائقة وشبه مستحيلة. نسبة القبول للأطباء الأجانب لا تتجاوز 1% إلى 2%. تتطلب درجات استثنائية، وأبحاثاً سريرية داخل أمريكا، وشبكة علاقات قوية",
          "الأشعة - تنافسية عالية جداً وفي تزايد. تتراوح نسبة الأطباء الأجانب المقبولين بين 7% إلى 10%. تتطلب علامات مرتفعة جداً وسيرة ذاتية غنية بالأبحاث",
          "الطب النفسي - تنافسية متوسطة وتميل للارتفاع السريع. لم يعد تخصصاً سهلاً كما في السابق، لكنه يظل قابلاً للوصول بنسبة قبول للأطباء الأجانب تبلغ 10% إلى 12%",
              "التخصصات الجراحية والدقيقة مثل الجلدية والعظام: أقل من 3%",
                  "التخصصات متوسطة وعالية التنافسية مثل الأشعة والجراحة العامة: من 5% إلى 12%",
                      "التخصصات الصديقة للأجانب مثل الباطني وطب الأطفال: من 15% إلى 30% أو أكثر"
        ]
      }
    ]
  }
];

// UK PATHWAY
export const ukPathways: PathwaySection[] = [
  {
    id: "ukmla-system",
    title: "UKMLA System",
    titleAr: "نظام UKMLA الجديد",
    content: [
      {
        title: "New System Overview",
        titleAr: "نظرة عامة على النظام الجديد",
        details: {
          "الحالة": "حل محل امتحان PLAB",
          "الفائدة": "نظام موحد وأكثر شمولاً",
          "التقييم": "يقيس المعرفة والمهارات السريرية",
          "المعترف به": "معترف به من GMC (المجلس الطبي العام)"
        }
      }
    ]
  },
  {
    id: "language-exam-uk",
    title: "Language Exam",
    titleAr: "امتحان اللغة",
    content: [
      {
        title: "Language Options",
        titleAr: "خيارات اللغة",
        details: {
          "OET": "امتحان اللغة الطبية (مفضل)",
          "IELTS": "اختبار اللغة الإنجليزية العام",
          "الحد الأدنى OET": "B في جميع المكونات",
          "الحد الأدنى IELTS": "7.0 في جميع المكونات"
        }
      }
    ]
  },
  {
    id: "akt-exam",
    title: "AKT Exam",
    titleAr: "امتحان AKT",
    content: [
      {
        title: "Applied Knowledge Test",
        titleAr: "اختبار المعرفة التطبيقية",
        details: {
          "عدد الأسئلة": "180 سؤال MCQ",
          "المدة": "3 ساعات",
          "التكلفة": "حوالي 200-250 باوند",
          "مصادر الدراسة": "Plabable وموارد GMC الرسمية",
          "معدل النجاح": "حوالي 70% من المتقدمين"
        }
      }
    ]
  },
  {
    id: "cpsa-exam",
    title: "CPSA Exam",
    titleAr: "امتحان CPSA",
    content: [
      {
        title: "Clinical and Professional Skills Assessment",
        titleAr: "تقييم المهارات السريرية والمهنية",
        details: {
          "عدد المحطات": "16 محطة OSCE",
          "المكان": "مانشستر فقط (حصري)",
          "التكلفة": "981 باوند",
          "المدة": "يوم واحد (8 ساعات تقريباً)",
          "معدل النجاح": "حوالي 60-65% من المتقدمين"
        }
      }
    ]
  },
  {
    id: "gmc-registration",
    title: "GMC Registration and Work",
    titleAr: "التسجيل والعمل",
    content: [
      {
        title: "GMC Registration Process",
        titleAr: "عملية التسجيل في GMC",
        itemsAr: [
          "التقديم إلكتروني عبر موقع GMC",
          "تقديم المستندات المطلوبة (شهادات، تقارير)",
          "دفع رسوم التسجيل (حوالي 174 باوند)",
          "الموافقة عادة خلال شهر",
          "الحصول على رقم GMC الخاص بك"
        ]
      }
    ]
  },
  {
    id: "job-progression",
    title: "Job Progression",
    titleAr: "التدرج الوظيفي",
    content: [
      {
        title: "Non-Training Jobs (Trust Grade)",
        titleAr: "الوظائف غير التدريبية",
        details: {
          "المستوى": "FY2 أو SHO (Senior House Officer)",
          "الهدف": "التعود على نظام NHS والحصول على خبرة",
          "المدة المقترحة": "1-2 سنة قبل التقديم للإقامة",
          "الفائدة": "تجنب الصدمة النظامية والحصول على توصيات قوية"
        }
      },
      {
        title: "Training Posts (Residency)",
        titleAr: "برامج الإقامة",
        itemsAr: [
          "تنافسية جداً بين الأطباء الأجانب",
          "تعتمد على السيرة الذاتية والأداء",
          "تقييم عبر المقابلة و/أو امتحان MSRA",
          "أهمية وجود Portfolio قوي"
        ]
      }
    ]
  },
  {
    id: "portfolio-building",
    title: "Portfolio Building",
    titleAr: "بناء السيرة الذاتية",
    content: [
      {
        title: "Key Portfolio Components",
        titleAr: "مكونات السيرة الذاتية الرئيسية",
        itemsAr: [
          "مشاريع تحسين الجودة (Quality Improvement Projects/Audits)",
          "الأبحاث العلمية والمنشورات",
          "التدريس والتدريب الطلاب",
          "المشاركة في الندوات والمؤتمرات",
          "الشهادات الإضافية والدورات",
          "الخدمة المجتمعية والقيادة",
          "خطابات توصية قوية من استشاريين معروفين"
        ]
      },
      {
        title: "Audit and QIP Examples",
        titleAr: "أمثلة على المشاريع",
        itemsAr: [
          "تحسين معدلات الالتزام بالبروتوكولات",
          "تقليل أوقات الانتظار",
          "تحسين رضا المرضى",
          "تقليل الأخطاء الطبية",
          "تحسين الكفاءة الإدارية"
        ]
      }
    ]
  }
];

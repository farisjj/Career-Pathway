import { useRoute, useLocation } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { countriesData } from "@/data/countriesData";
import { PathwayTabs } from "@/components/PathwayTabs";
import { jordanPathways, germanyPathways, australiaPathways, qatarPathways, usaPathways, ukPathways } from "@/data/pathwayDetails";
import {
  ArrowLeft,
  Hospital,
  GraduationCap,
  DollarSign,
  TrendingUp,
  Heart,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Award,
  HelpCircle,
  Stethoscope,
  BookOpen,
  Briefcase,
  Globe,
  Home,
  MessageCircle,
} from "lucide-react";

/**
 * Design Philosophy: Detailed Medical Career Information
 * - Navy Blue (#1e3a8a) + Medical Teal (#0d9488)
 * - Comprehensive information architecture
 * - RTL-first layout with Arabic typography
 * - Organized sections with clear visual hierarchy
 */

function getIcon(iconName: string) {
  const icons: Record<string, React.ComponentType<any>> = {
    Hospital,
    GraduationCap,
    DollarSign,
    TrendingUp,
    Heart,
    CheckCircle2,
    AlertCircle,
    Stethoscope,
    BookOpen,
    Briefcase,
    Globe,
    Home,
  };
  return icons[iconName] || CheckCircle2;
}

export default function CountryDetail() {
  const [match, params] = useRoute("/country/:id");
  const [, setLocation] = useLocation();

  if (!match) return null;

  const country = countriesData.find((c) => c.id === params?.id);

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm p-8 text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
            الدولة غير موجودة
          </h1>
          <p className="text-slate-600 mb-6" style={{ fontFamily: "Tajawal, sans-serif" }}>
            عذراً، لم نتمكن من العثور على معلومات هذه الدولة.
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            العودة للرئيسية
          </Button>
        </Card>
      </div>
    );
  }

  // Get pathway data for specific countries
  const getPathwayData = () => {
    if (country.id === "jordan") return jordanPathways;
    if (country.id === "germany") return germanyPathways;
    if (country.id === "australia") return australiaPathways;
    if (country.id === "qatar") return qatarPathways;
    if (country.id === "usa") return usaPathways;
    if (country.id === "uk") return ukPathways;
    return null;
  };

  const pathwayData = getPathwayData();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => setLocation("/")}
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Tajawal, sans-serif" }}
          >
            <ArrowLeft className="w-5 h-5" />
            العودة
          </button>
          <div className="flex items-center gap-4">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <h1 className="text-4xl font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                {country.nameAr}
              </h1>
              <p className="text-xl text-teal-200" style={{ fontFamily: "Poppins, sans-serif" }}>
                {country.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={country.image}
          alt={country.nameAr}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Overview Section */}
        <section className="mb-20">
          <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ fontFamily: "Tajawal, sans-serif" }}>
            {country.description}
          </p>

          {/* Why Choose Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
              لماذا تختار {country.nameAr}؟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {country.whyChoose.map((item, idx) => {
                const Icon = getIcon(item.icon);
                return (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                    <Icon className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                    <p className="font-tajawal text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Exams Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <BookOpen className="w-8 h-8 text-blue-600" />
            الامتحانات المطلوبة
          </h2>
          <div className="space-y-4">
            {country.exams.map((exam, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-bold text-blue-900 mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {exam.title}
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>
                  {exam.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Salaries Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <DollarSign className="w-8 h-8 text-blue-600" />
            الرواتب والفرص المالية
          </h2>
          <div className="space-y-3">
            {country.salaries.map((salary, idx) => (
              <div key={idx} className="flex justify-between items-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-tajawal text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>
                  {salary.position}
                </span>
                <span className="font-bold text-blue-600" style={{ fontFamily: "Tajawal, sans-serif" }}>
                  {salary.range}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <CheckCircle2 className="w-8 h-8 text-blue-600" />
            المتطلبات الأساسية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {country.requirements.map((item, idx) => {
              const Icon = getIcon(item.icon || "CheckCircle2");
              return (
                <div key={idx} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="font-tajawal text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Advantages Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <TrendingUp className="w-8 h-8 text-blue-600" />
            المميزات والفرص
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {country.advantages.map((item, idx) => {
              const Icon = getIcon(item.icon || "CheckCircle2");
              return (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-l-4 border-blue-600">
                  <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p className="font-tajawal text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Disadvantages Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <AlertCircle className="w-8 h-8 text-red-600" />
            التحديات والصعوبات
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {country.disadvantages.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <p className="font-tajawal text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <Lightbulb className="w-8 h-8 text-blue-600" />
            نصائح عملية
          </h2>
          <div className="space-y-4">
            {country.tips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {idx + 1}
                </div>
                <p className="font-tajawal text-gray-700 pt-1" style={{ fontFamily: "Tajawal, sans-serif" }}>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <Award className="w-8 h-8 text-blue-600" />
            قصص نجاح ملهمة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {country.successStories.map((story, idx) => (
              <Card key={idx} className="p-6 border-t-4 border-blue-600 hover:shadow-lg transition-all">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-blue-900" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {story.name}
                  </h3>
                  <p className="text-blue-600 text-sm" style={{ fontFamily: "Tajawal, sans-serif" }}>
                    {story.specialty}
                  </p>
                </div>
                <p className="text-gray-700 mb-3" style={{ fontFamily: "Tajawal, sans-serif" }}>
                  {story.description}
                </p>
                <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-600">
                  <p className="text-sm text-blue-900" style={{ fontFamily: "Tajawal, sans-serif" }}>
                    <strong>الإنجاز:</strong> {story.achievement}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Q&A Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3" style={{ fontFamily: "Cairo, sans-serif" }}>
            <HelpCircle className="w-8 h-8 text-blue-600" />
            أسئلة شائعة
          </h2>
          <div className="space-y-4">
            {country.questions.map((q, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-blue-600">
                <h3 className="text-lg font-bold text-blue-900 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {q.title}
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Tajawal, sans-serif", direction: "rtl" }}>
                  {q.content}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Important Info Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-6" style={{ fontFamily: "Cairo, sans-serif" }}>
            معلومات مهمة
          </h2>
          <div className="space-y-4">
            {country.importantInfo.map((info, idx) => (
              <Card key={idx} className="p-6 border-l-4 border-teal-600">
                <h3 className="text-lg font-bold text-blue-900 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>
                  {info.title}
                </h3>
                <p className="text-gray-700" style={{ fontFamily: "Tajawal, sans-serif" }}>
                  {info.content}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Pathway Tabs Section - For specific countries */}
        {pathwayData && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-blue-900 mb-8" style={{ fontFamily: "Cairo, sans-serif" }}>
              مسارات التخصص التفصيلية
            </h2>
            <PathwayTabs sections={pathwayData} />
          </section>
        )}

      </div>
    </div>
  );
}

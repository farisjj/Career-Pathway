import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { BookOpen, Zap, Users, Mail, MessageCircle, Linkedin, Play } from "lucide-react";

const videoLinks = {
  jordan: "https://youtu.be/hXMqw6xovoU?si=ufxk7HHTl1w1Oxm1",
  germany: "https://youtu.be/9qgSUdkPC1o?si=ax_dr7giT6_w1yzH",
  australia: "https://youtu.be/uJYTkeHJkOg?si=ohAMeGP7U53mT6AR",
  qatar: "https://youtu.be/VDsxSv0SRNM?si=WR6_zdKVTYlLOGj2",
  usa: "https://youtu.be/6JRbw4JWVJk?si=wzfScuH2FdgItrUJ",
  uk: "https://youtu.be/92SfyH-bL4g?si=s0zVmACIvHDAtyfL"
};
import { countriesData } from "@/data/countriesData";

/**
 * Design Philosophy: Premium Medical Career Guide
 * - Navy Blue (#1e3a8a) + Medical Teal (#0d9488) + Soft gradients
 * - Professional typography: Cairo (Arabic) + Poppins (English)
 * - RTL-first layout with proper BiDi support
 * - Elegant cards with soft shadows and smooth transitions
 */

export default function Home() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Professional Medical Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 py-32 px-4 text-white">
        {/* Soft animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 bg-teal-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        {/* Medical/Travel Illustration Background */}
        <div className="absolute inset-0 opacity-5">
          <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="medical-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="30" fill="white" opacity="0.1"/>
                <path d="M 50 30 L 50 70 M 30 50 L 70 50" stroke="white" strokeWidth="2" opacity="0.1"/>
                <path d="M 150 100 Q 160 80 170 100" stroke="white" strokeWidth="2" opacity="0.1"/>
              </pattern>
            </defs>
            <rect width="1200" height="600" fill="url(#medical-pattern)"/>
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" style={{ fontFamily: "Cairo, sans-serif" }}>
              مسارك الطبي
            </h1>
            <p className="text-2xl md:text-3xl font-light mb-6 text-teal-100" style={{ fontFamily: "Poppins, sans-serif" }}>
              Medical Career Pathway
            </p>
            <h2 className="text-lg md:text-2xl font-bold mb-8 tracking-wide text-teal-200" style={{ fontFamily: "Cairo, sans-serif" }}>
              الدليل المرجعي للاختصاص الطبي في الخارج
            </h2>
            <p className="text-base md:text-lg mb-12 max-w-3xl mx-auto leading-relaxed text-gray-100" style={{ fontFamily: "Tajawal, sans-serif" }}>
              دليلك الشامل والمرجعي لاستكمال مسيرتك الطبية والاختصاص في أفضل الدول العالمية. اكتشف الفرص، تعرف على المتطلبات، وابدأ رحلتك نحو النجاح الطبي العالمي.
            </p>
            <button
              onClick={() => document.getElementById('countries')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-12 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
              style={{ fontFamily: "Tajawal, sans-serif" }}
            >
              اكتشف الدول المتاحة
            </button>
          </div>
        </div>
      </section>

      {/* Features Section - Refined Cards with Soft Shadows */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
            ما الذي ستجده هنا؟
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg max-w-3xl mx-auto" style={{ fontFamily: "Tajawal, sans-serif" }}>
            معلومات شاملة ومفصلة لكل دولة لمساعدتك في اتخاذ القرار الصحيح
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Card className="p-8 hover:shadow-lg transition-all border-0 bg-white group">
              <div className="mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                <BookOpen className="w-16 h-16 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>معلومات شاملة</h3>
              <p className="text-slate-600" style={{ fontFamily: "Tajawal, sans-serif" }}>تفاصيل دقيقة عن متطلبات الاختصاص والامتحانات والشروط في كل دولة</p>
            </Card>

            {/* Card 2 */}
            <Card className="p-8 hover:shadow-lg transition-all border-0 bg-white group">
              <div className="mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                <Zap className="w-16 h-16 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>معلومات مالية</h3>
              <p className="text-slate-600" style={{ fontFamily: "Tajawal, sans-serif" }}>رواتب متوقعة وتكاليف معيشية والفرص الاقتصادية في كل دولة</p>
            </Card>

            {/* Card 3 */}
            <Card className="p-8 hover:shadow-lg transition-all border-0 bg-white group">
              <div className="mb-6 text-indigo-600 group-hover:scale-110 transition-transform">
                <Users className="w-16 h-16 stroke-[1.5]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3" style={{ fontFamily: "Cairo, sans-serif" }}>نصائح عملية</h3>
              <p className="text-slate-600" style={{ fontFamily: "Tajawal, sans-serif" }}>نصائح من أطباء ناجحين وخطوات عملية للتقديم والنجاح</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Countries Grid Section with Tags */}
      <section id="countries" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900" style={{ fontFamily: "Cairo, sans-serif" }}>
            الدول المتاحة
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg max-w-3xl mx-auto" style={{ fontFamily: "Tajawal, sans-serif" }}>
            اختر الدولة التي تهمك لمعرفة المزيد عن متطلبات الاختصاص والرواتب والفرص والتحديات
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {countriesData.map((country) => (
              <Card
                key={country.id}
                className="overflow-hidden hover:shadow-xl transition-all border-0 bg-white cursor-pointer group h-full flex flex-col"
                onClick={() => setLocation(`/country/${country.id}`)}
              >
                {/* Country Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Flag Badge */}
                  <div className="absolute top-4 right-4 text-4xl bg-white bg-opacity-90 rounded-lg p-2 shadow-md">
                    {country.flag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Country Name */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "Cairo, sans-serif" }}>
                    {country.nameAr}
                  </h3>
                  <p className="text-sm text-slate-500 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>{country.name}</p>

                  {/* Quick Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs border border-slate-300"
                        style={{ fontFamily: "Tajawal, sans-serif" }}
                      >
                        <span className="font-bold">{tag.label}:</span> {tag.value}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed" style={{ fontFamily: "Tajawal, sans-serif" }}>
                    {country.description}
                  </p>

                  {/* Button */}
                  <Button
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold"
                    style={{ fontFamily: "Tajawal, sans-serif" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLocation(`/country/${country.id}`);
                    }}
                  >
                    اكتشف المزيد
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Video Links */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-teal-800 to-slate-900 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>
            شاهد فيديوهات المسارات
          </h2>
          <p className="text-center text-teal-100 mb-12 text-lg max-w-3xl mx-auto" style={{ fontFamily: "Tajawal, sans-serif" }}>
            اشاهد شرح تفصيلي لكل مسار طبي من خلال الفيديوهات التعليمية
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "jordan", name: "مسار الأردن", flag: "🇯🇴" },
              { id: "germany", name: "مسار ألمانيا", flag: "🇩🇪" },
              { id: "australia", name: "مسار أستراليا", flag: "🇦🇺" },
              { id: "qatar", name: "مسار قطر", flag: "🇶🇦" },
              { id: "usa", name: "مسار أمريكا", flag: "🇺🇸" },
              { id: "uk", name: "مسار بريطانيا", flag: "🇬🇧" }
            ].map((video) => (
              <a
                key={video.id}
                href={videoLinks[video.id as keyof typeof videoLinks]}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex flex-col items-center justify-center h-32">
                  <div className="text-5xl mb-3">{video.flag}</div>
                  <div className="flex items-center gap-2 mb-2">
                    <Play className="w-5 h-5 text-teal-400" />
                    <h3 className="text-xl font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>
                      {video.name}
                    </h3>
                  </div>
                  <p className="text-sm text-teal-300" style={{ fontFamily: "Tajawal, sans-serif" }}>
                    اضغط لمشاهدة الفيديو
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Professional Grid Layout with Social Icons */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Logo and Brand */}
            <div className="text-center md:text-center flex flex-col items-center">
              <img
                src="/IMG_20260519_134247_878.jpg"
                alt="The Good Doctors Logo"
                className="w-24 h-24 mb-4 object-contain"
              />
              <h4 className="text-xl font-bold" style={{ fontFamily: "Cairo, sans-serif" }}>Career Pathway</h4>
            </div>

            {/* Column 2: Developer Info */}
            <div className="text-center">
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>معلومات المطور</h4>
              <p className="text-slate-300 text-sm mb-2" style={{ fontFamily: "Tajawal, sans-serif" }}>
                <span className="font-bold">Faris Motasem Zaki Al-Rabba</span>
              </p>
              <p className="text-slate-400 text-sm" style={{ fontFamily: "Tajawal, sans-serif" }}>
                Medical Student at Yarmouk University
              </p>
            </div>

            {/* Column 3: Contact Info with Social Icons */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold mb-4" style={{ fontFamily: "Cairo, sans-serif" }}>تواصل معنا</h4>
              <div className="flex justify-center md:justify-start gap-6">
                <a
                  href="https://wa.me/962782498874"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href="https://t.me/B0SSF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                  title="Telegram"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/faris-kilani-rabba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-teal-400 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400 text-sm" style={{ fontFamily: "Tajawal, sans-serif" }}>
              © 2026 Medical Career Pathway Guide. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

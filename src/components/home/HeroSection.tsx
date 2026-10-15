"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Sparkles, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data/projects";

const HERO_SLIDES = [
  {
    image: "/images/projects/sheraton-resort/sheraton-obhur-hotel-suite-custom-woodwork.jpeg",
    title: "منتجع شيراتون أبحر الشمالية",
    subtitle: "فخامة الضيافة العالمية والأعمال الخشبية الفندقية الحصرية",
    location: "جدة - أبحر",
    client: "Sheraton Obhur Resort",
    tag: "ضيافة فاخرة"
  },
  {
    image: "/images/projects/kokiyan-beach/kokiyan-beach-panoramic-seaside-dining.jpeg",
    title: "مطعم وكافيه شاطئ كويكان",
    subtitle: "إطلالة بانورامية ساحلية ساحرة مع مطابخ وغرف تبريد مركزية",
    location: "جدة - الواجهة البحرية",
    client: "Coastline LLC",
    tag: "تجهيز مطاعم متكامل"
  },
  {
    image: "/images/projects/ashley-jeddah/ashley-jeddah-luxury-furniture-showroom.jpeg",
    title: "معرض آشلي للأثاث المنزلي",
    subtitle: "إعادة تأهيل وتشطيب شامل على مساحة 4,600 م² بأرقى المعايير",
    location: "جدة - طريق الملك",
    client: "Ashley HomeStore",
    tag: "تجزئة ومعارض كبرى"
  },
  {
    image: "/images/projects/balcony-restaurant/balcony-restaurant-outdoor-terrace-woodwork.jpeg",
    title: "مطعم وتراس بلكونة",
    subtitle: "أجواء دافئة وتصنيع أثاث وديكورات خشبية مخصصة بالكامل",
    location: "جدة - الروضة",
    client: "Balcony Restaurant",
    tag: "مطاعم وكافيهات"
  },
  {
    image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-facade-main-entrance.jpeg",
    title: "صرح مفروشات الرقيب",
    subtitle: "صالة عرض تجارية عملاقة بمساحة 4,000 م² مع دور ميزانين",
    location: "تبوك - المملكة العربية السعودية",
    client: "Al Rugaib Furniture",
    tag: "صروح تجارية"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const active = HERO_SLIDES[currentSlide];

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#fcfaf7]">
      {/* Background Architectural Grid (matching cover of profile) */}
      <div className="absolute inset-0 profile-dots-bg pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#d7a138]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column: Alluring Copy & Narrative (7 cols) */}
          <div className="lg:col-span-7 text-right">
            {/* Elegant Tag */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs sm:text-sm font-bold mb-6">
              <Sparkles className="w-4 h-4 text-[#d7a138]" />
              <span>دار التصميم والتنفيذ الإنشائي الفاخر | مؤسسة التشييد</span>
            </div>

            {/* Irresistible Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1b2026] leading-[1.2] tracking-tight">
              نُحوّل مساحتك الخالية إلى{" "}
              <span className="block mt-2 text-[#d7a138]">
                صرح استثماري يأسر زبائنك
              </span>
            </h1>

            {/* Alluring Executive Copy */}
            <p className="mt-6 text-base sm:text-lg text-[#555d66] leading-relaxed font-normal max-w-2xl">
              سواء كنت تؤسس <strong className="text-[#1b2026]">مطاعم وكافيهات راقية</strong>، أو <strong className="text-[#1b2026]">صالات عرض تجارية كبرى</strong>، أو مقراً يعكس مكانة علامتك — نتولى في «التشييد المختلف» كافة التفاصيل: من المخططات والتنفيذ وتصنيع الأثاث الفاخر وحتى <span className="text-[#b88628] font-bold">تسليم المفتاح جاهزاً للتشغيل وجني الأرباح</span> في الموعد المحدد دون صداع المقاولين ومفاجآت التكاليف.
            </p>

            {/* Classy Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] hover:from-[#c48f2b] hover:to-[#d7a138] shadow-xl shadow-[#d7a138]/25 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>تواصل مع مستشارينا المعماريين</span>
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("مرحباً، أود استشارة حول مشروع تجاري استثماري أخطط لتنفيذه.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-[#1b2026] bg-white hover:bg-[#f6f2eb] border border-[#6d7277]/25 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm hover:border-[#d7a138]/50"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
                <span>تحدث معنا عبر واتساب</span>
              </a>
            </div>

            {/* Reassurance Metrics */}
            <div className="mt-12 pt-6 border-t border-[#6d7277]/15 grid grid-cols-3 gap-4 max-w-xl">
              <div>
                <div className="text-xl sm:text-3xl font-black text-[#d7a138] font-mono">100%</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b2026] mt-0.5">تسليم مفتاح متكامل</div>
                <div className="text-[11px] text-[#6d7277]">من المخطط حتى التشغيل</div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-black text-[#d7a138] font-mono">+50,000 م²</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b2026] mt-0.5">مساحات صُممت ونُفذت</div>
                <div className="text-[11px] text-[#6d7277]">صروح تجارية ومطاعم</div>
              </div>

              <div>
                <div className="text-xl sm:text-3xl font-black text-[#d7a138] font-mono">شراكات نجاح</div>
                <div className="text-xs sm:text-sm font-bold text-[#1b2026] mt-0.5">شيراتون، الرقيب، آشلي</div>
                <div className="text-[11px] text-[#6d7277]">ثقة كبرى العلامات</div>
              </div>
            </div>
          </div>

          {/* Left Column: Moving Photo Showcase / Carousel (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 shadow-2xl border-2 border-[#d7a138]/40">
              
              {/* Carousel Image Screen */}
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-slate-900">
                {HERO_SLIDES.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    {/* Caption Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* Top Tag */}
                    <div className="absolute top-4 right-4 bg-[#d7a138] text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
                      {slide.tag}
                    </div>

                    {/* Bottom Caption Box */}
                    <div className="absolute bottom-4 right-4 left-4 text-right text-white">
                      <div className="flex items-center gap-1.5 text-xs text-[#d7a138] font-semibold mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{slide.location}</span>
                        <span>•</span>
                        <span>المالك: {slide.client}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-black leading-tight mb-1">
                        {slide.title}
                      </h3>
                      <p className="text-xs text-slate-200 line-clamp-2 font-light">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <div className="pt-3 px-2 flex items-center justify-between text-xs text-[#6d7277]">
                <div className="flex items-center gap-1.5">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === currentSlide
                          ? "w-8 bg-[#d7a138]"
                          : "w-2 bg-[#6d7277]/30 hover:bg-[#6d7277]"
                      }`}
                      aria-label={`شريحة ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-1.5 rounded-full bg-[#f6f2eb] hover:bg-[#d7a138] hover:text-white transition-colors cursor-pointer text-[#1b2026]"
                    aria-label="السابق"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-1.5 rounded-full bg-[#f6f2eb] hover:bg-[#d7a138] hover:text-white transition-colors cursor-pointer text-[#1b2026]"
                    aria-label="التالي"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

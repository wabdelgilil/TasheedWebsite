import Link from "next/link";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data";
import SectionBadge from "@/components/ui/SectionBadge";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function TurnkeyExperience() {
  const benefits = [
    {
      emoji: "📜",
      badgeBg: "bg-amber-100 border-amber-300",
      title: "مسؤول واحد وعقد متكامل شامل",
      desc: "وداعاً لصداع المقاولين المتعددين والتلاوم بين مصمم الديكور ومهندس العظم. نحن نتولى المخططات، الإنشاء، التشطيب الفاخر، وتصنيع الأثاث تحت سقف واحد وبإشراف هندسي موحد.",
    },
    {
      emoji: "⏱️",
      badgeBg: "bg-emerald-100 border-emerald-300",
      title: "التزام صارم بالوقت لحماية إيجارك",
      desc: "ندرك كرؤساء أعمال أن كل يوم تأخير في افتتاح مطعمك أو معرضك يعني دفع إيجار ورواتب دون مبيعات. نعمل بجداول زمنية دقيقة وفِرق عمل متزامنة لإنجاز مشروعك في الموعد المحدد.",
    },
    {
      emoji: "🏛️",
      badgeBg: "bg-blue-100 border-blue-300",
      title: "تراخيص حكومية سريعة وسلسة",
      desc: "تنفيذ متوافق 100% مع كود البناء السعودي، متطلبات الدفاع المدني، واشتراطات أمانة المدن وبلدي، حتى لا تواجه أي عراقيل عند إصدار رخصة التشغيل النهائية.",
    },
    {
      emoji: "💎",
      badgeBg: "bg-purple-100 border-purple-300",
      title: "وضوح مالي وشفافية من اليوم الأول",
      desc: "دراسة جدوى وحصر كميات هندسي دقيق يقدم لك التكلفة الفعلية بوضوح تام، دون مفاجآت في التكاليف أثناء العمل أو بنود غير متوقعة.",
    },
  ];

  return (
    <section className="py-24 bg-[#f6f2ec] relative overflow-hidden border-t border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border-2 border-[#d7a138]/40 p-8 sm:p-14 shadow-xl relative">
          
          <div className="max-w-3xl text-right mb-14">
            <SectionBadge icon={<span>🛡️</span>}>
              ضمان الاستثمار وراحة البال
            </SectionBadge>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1b2026] leading-tight">
              تجربة تسليم المفتاح الهادئة: أنت ترسم الرؤية ونحن نتكفل بكل التفاصيل
            </h2>
            <p className="mt-4 text-[#57606a] text-sm sm:text-base leading-relaxed font-normal">
              صُممت خدماتنا خصيصاً لأصحاب الأعمال والمستثمرين، لتمكينك من التركيز على خططك التسويقية والتجارية بينما يقوم فريقنا بتحويل المكان إلى تحفة فنية جاهزة للربح.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benefits.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#fcfaf7] p-6 sm:p-8 rounded-2xl border border-[#6d7277]/15 hover:border-[#d7a138] transition-all text-right group shadow-sm hover:shadow-md"
              >
                <div className={`w-14 h-14 rounded-2xl ${b.badgeBg} border flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform shadow-xs`}>
                  <span>{b.emoji}</span>
                </div>
                <h3 className="text-lg font-black text-[#1b2026] mb-2 group-hover:text-[#d7a138] transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-[#57606a] leading-relaxed font-normal">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Before & After Interactive Showcase */}
          <div className="mb-14 pt-6 border-t border-[#6d7277]/15">
            <div className="text-right mb-6">
              <span className="text-xs font-bold text-[#d7a138] uppercase tracking-wider block mb-1">
                برهان الإتقان المعماري على أرض الواقع
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#1b2026]">
                شاهد الفارق: من هيكل الميزانين الفولاذي إلى صرح مفروشات الرقيب المتلألئ
              </h3>
            </div>
            <BeforeAfterSlider
              beforeImage="/images/projects/alrugaib-tabuk/alrugaib-tabuk-steel-mezzanine-structural-framework.jpeg"
              afterImage="/images/projects/alrugaib-tabuk/alrugaib-tabuk-mezzanine-panoramic-showroom-view.jpeg"
              beforeLabel="مرحلة الهيكل والتأسيس الإنشائي"
              afterLabel="الصرح التجاري بعد التسليم النهائي"
              title="صرح مفروشات الرقيب - فرع تبوك (4,000 م²)"
              subtitle="تنفيذ كامل للهيكل، الميزانين، والتشطيب الداخلي الفاخر"
            />
          </div>

          {/* Action Strip */}
          <div className="pt-8 border-t border-[#6d7277]/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-right">
              <h4 className="text-base font-bold text-[#1b2026]">هل لديك موقع أو مخطط تود مناقشته؟</h4>
              <p className="text-xs text-[#6d7277] mt-1">تواصل مباشرة مع مهندسي التشييد لترتيب جلسة استشارية أولية لمشروعك.</p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-black text-xs sm:text-sm text-[#1b2026] bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] hover:brightness-105 shadow-md shadow-[#d7a138]/20 transition-all text-center cursor-pointer"
              >
                <span>تواصل معنا لمناقشة مشروعك</span>
              </Link>
              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("مرحباً، أود استشارة حول مشروع استثماري وتسليم على المفتاح.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-[#1b2026] bg-[#fcfaf7] hover:bg-white border border-[#6d7277]/25 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>واتساب</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

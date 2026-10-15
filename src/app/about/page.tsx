import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Building, Target, Compass, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/projects";

export default function AboutPage() {
  const pillars = [
    {
      title: "التحليل المنهجي والدراسة الدقيقة",
      desc: "فريق متخصص في دراسات الجدوى، الحصر والكميات، إعداد المخططات الهندسية والجداول الزمنية الدقيقة التي تضمن إنجاز المشروع في وقته المحدد دون مفاجآت.",
      icon: Compass,
      gradient: "from-blue-600 to-indigo-600 text-white shadow-blue-500/20",
    },
    {
      title: "توريد الخامات بأسعار تنافسية وجودة عالمية",
      desc: "علاقات وشراكات استراتيجية مع كبرى مصانع الحديد، الخرسانة، الأخشاب المعالجة، والأنظمة الكهروميكانيكية لتوفير مواد مطابقة لأعلى المواصفات بأفضل تكلفة استثمارية.",
      icon: Target,
      gradient: "from-amber-600 to-yellow-500 text-white shadow-amber-500/20",
    },
    {
      title: "قوى عاملة وكوادر هندسية محترفة",
      desc: "طاقم عمل متكامل يضم مهندسين إنشائيين، معماريين، كهروميكانيك، ومشرفي سلامة وجودة يتابعون كل تفصيلة في موقع العمل يومياً لضمان الدقة والأمان.",
      icon: Building,
      gradient: "from-emerald-600 to-teal-600 text-white shadow-emerald-500/20",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-3">
          <Building className="w-4 h-4 text-[#d7a138]" />
          <span>عن مؤسسة التشييد المختلف للمقاولات</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1b2026] leading-tight">
          شريكك الهندسي الموثوق لتنفيذ المشاريع الكبرى بأعلى معايير الإتقان
        </h1>
        <p className="mt-6 text-[#57606a] text-base sm:text-lg leading-relaxed">
          تأسست مؤسسة التشييد المختلف لتكون الخيار الأول والأكثر نجاحاً في قطاع المقاولات العامة، تشييد المستودعات، التشطيب التجاري الفاخر، وتجهيز قطاع المطاعم والضيافة في المملكة العربية السعودية.
        </p>
      </div>

      {/* Identity & Legal Data Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-[#d7a138]/30 shadow-xl">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-black text-[#1b2026]">
              البيانات الرسمية والاعتمادات النظامية
            </h2>
            <p className="text-xs text-[#57606a] mt-1">
              مؤسسة وطنية مسجلة ومعتمدة لدى كافة الجهات والهيئات الحكومية ذات العلاقة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#6d7277]/15 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🏛️</span>
                <span className="text-xs text-[#57606a] font-bold">الاسم التجاري المعتمد</span>
              </div>
              <span className="text-sm font-black text-[#1b2026] block">مؤسسة التشييد المختلف للمقاولات العامة</span>
              <span className="text-[11px] text-[#b88628] block mt-1 font-mono font-bold">Tasheed Unique Contracting</span>
            </div>

            <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#6d7277]/15 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📜</span>
                <span className="text-xs text-[#57606a] font-bold">السجل التجاري (وزارة التجارة)</span>
              </div>
              <span className="text-lg font-black text-[#d7a138] font-mono block" dir="ltr">{COMPANY_INFO.crNumber}</span>
              <span className="text-[11px] text-[#57606a] block mt-1">المركز الرئيسي: جدة</span>
            </div>

            <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#6d7277]/15 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📑</span>
                <span className="text-xs text-[#57606a] font-bold">الرقم الضريبي (هيئة الزكاة)</span>
              </div>
              <span className="text-sm font-black text-[#d7a138] font-mono block" dir="ltr">{COMPANY_INFO.vatNumber}</span>
              <span className="text-[11px] text-[#57606a] block mt-1">مسجل وضريبة قيمة مضافة فعالة</span>
            </div>

            <div className="bg-[#fcfaf7] p-5 rounded-2xl border border-[#6d7277]/15 shadow-xs">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🇸🇦</span>
                <span className="text-xs text-[#57606a] font-bold">الرقم الوطني الموحد</span>
              </div>
              <span className="text-lg font-black text-[#1b2026] font-mono block" dir="ltr">{COMPANY_INFO.nationalId}</span>
              <span className="text-[11px] text-emerald-700 font-bold block mt-1">مصنف ومعتمد من &quot;منشآت&quot;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d7a138]/10 text-[#b88628] text-xs font-bold mb-2">
            <Target className="w-3.5 h-3.5 text-[#d7a138]" />
            <span>ركائز النجاح التشغيلي</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b2026]">
            منهجيتنا في العمل والإنجاز
          </h2>
          <p className="mt-2 text-[#57606a] text-sm">
            المنهج الهندسي الصارم الذي يضمن لعملائنا راحة البال الكاملة والتسليم في الموعد المحدد.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all text-right shadow-sm hover:shadow-lg group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pil.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-black text-[#1b2026] mb-3 group-hover:text-[#d7a138] transition-colors">
                  {pil.title}
                </h3>
                <p className="text-sm text-[#57606a] leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Certificates Section */}
      <div id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#6d7277]/15">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4 text-[#d7a138]" />
            <span>الاعتمادات والتراخيص الرسمية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1b2026]">
            وثائقنا الرسمية والتراخيص الحكومية
          </h2>
          <p className="mt-2 text-[#57606a] text-sm">
            يمكن لعملائنا والجهات الحكومية والشركات التحقق المباشر من التراخيص والاعتمادات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-3xl border border-[#6d7277]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-[#f8f6f0] border border-[#6d7277]/15 mb-4">
              <Image
                src="/images/certificates/vat_cr.png"
                alt="شهادة تسجيل ضريبة القيمة المضافة والسجل التجاري"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="text-right">
              <h4 className="text-base font-black text-[#1b2026] mb-1">
                شهادة التسجيل في ضريبة القيمة المضافة & السجل التجاري
              </h4>
              <p className="text-xs text-[#57606a]">
                صادرة عن هيئة الزكاة والضريبة والجمارك ووزارة التجارة بالمملكة العربية السعودية.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-[#6d7277]/20 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden bg-[#f8f6f0] border border-[#6d7277]/15 mb-4">
              <Image
                src="/images/certificates/monshaat_balady.png"
                alt="شهادة اعتماد منشآت ورمز التحقق"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="text-right">
              <h4 className="text-base font-black text-[#1b2026] mb-1">
                شهادة الهيئة العامة للمنشآت (منشآت) ورمز التحقق التجاري
              </h4>
              <p className="text-xs text-[#57606a]">
                تصنيف المنشآت الصغيرة والمتوسطة المعتمدة لدى وزارة التجارة والمركز السعودي للأعمال.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#d7a138] hover:bg-[#c48f2b] transition-all shadow-xl shadow-[#d7a138]/20 hover:scale-105"
          >
            <span>التقِ بفريق التشييد وناقش مشروعك</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

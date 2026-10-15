import Image from "next/image";
import Link from "next/link";
import { PROJECTS, COMPANY_INFO } from "@/data/projects";
import { UtensilsCrossed, CheckCircle2, Flame, Snowflake, Hammer, Compass, ArrowLeft, Phone, Calendar } from "lucide-react";

export default function RestaurantsPage() {
  const restaurantProjects = PROJECTS.filter((p) => p.category === "restaurants-cafes");

  const specialPillars = [
    {
      title: "مطابخ مركزية وغرف تبريد صناعية",
      desc: "تجهيز وتأسيس خطوط الطهي، أفران، غرف التبريد والتجميد، مع مراعاة أعلى معايير السلامة وصحة الغذاء (HACCP) ومواصفات أمانة المدن.",
      icon: Snowflake,
      gradient: "from-cyan-500 to-teal-600 text-white shadow-cyan-500/20",
    },
    {
      title: "أنظمة الشفط والتكييف والمداخن (HVAC)",
      desc: "تصميم وتنفيذ مجاري الهواء وشبكات مراوح الشفط المقاومة للحرارة والزيوت مع أنظمة إطفاء الحرائق التلقائية (Hood Fire Suppression System).",
      icon: Flame,
      gradient: "from-amber-500 to-orange-500 text-white shadow-orange-500/20",
    },
    {
      title: "أعمال النجارة والديكور الخشبي المخصص",
      desc: "تصنيع الكاونترات، بارات القهوة، طاولات الطعام الفاخرة، كبائن الجلوس (Booths)، والأسقف الخشبية بتشطيبات حرفية عالية المتانة تدوم طويلاً.",
      icon: Hammer,
      gradient: "from-amber-700 via-amber-600 to-[#d7a138] text-white shadow-amber-900/20",
    },
    {
      title: "مخططات تنفيذية 3D و Shop Drawings",
      desc: "دراسة وتوزيع الحركة التشغيلية لرواد المطعم وطاقم الخدمة من خلال تصاميم ثلاثية الأبعاد ومخططات دقيقة تمنع أي هدر أو تعارض بالموقع.",
      icon: Compass,
      gradient: "from-blue-600 to-indigo-600 text-white shadow-blue-500/20",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      {/* Hero Header */}
      <div className="relative py-16 overflow-hidden border-b border-[#6d7277]/15 bg-gradient-to-b from-[#f5f0e6] to-[#fcfaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/15 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold mb-4">
            <UtensilsCrossed className="w-4 h-4 text-[#d7a138]" />
            <span>قطاع الضيافة والمطاعم الفاخرة | Tasheed Hospitality</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1b2026] leading-tight max-w-4xl mx-auto">
            متخصصون في تصميم وتجهيز{" "}
            <span className="text-[#d7a138] block mt-2">
              أرقى المطاعم والكافيهات بالمملكة
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-lg text-[#57606a] max-w-3xl mx-auto leading-relaxed">
            حلول هندسية ومعمارية متكاملة (Turnkey Fit-out) تشمل الأعمال الإنشائية، الكهروميكانيكية، التبريد، وأنظمة الشفط، إلى جانب تصنيع الأثاث والديكورات الخشبية والواجهات الزجاجية بدقة فائقة تواكب رؤيتك الاستثمارية.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact?type=restaurant"
              className="px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-[#d7a138] hover:bg-[#c48f2b] shadow-xl shadow-[#d7a138]/20 transition-all hover:scale-105"
            >
              جلسة استشارية خاصة لمطعمك
            </Link>
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent("مرحباً، أود استشارة حول تشطيب وتجهيز مطعم / كافيه.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-semibold text-[#1b2026] bg-white hover:bg-[#f6f2ec] border border-[#6d7277]/20 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>تحدث مع مستشارينا عبر واتساب</span>
              <Phone className="w-4 h-4 text-[#d7a138]" />
            </a>
          </div>
        </div>
      </div>

      {/* Hospitality Specialized Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#d7a138]/10 text-[#b88628] text-xs font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block"></span>
            <span>معايير تشغيلية عالمية</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b2026]">
            لماذا يختار رواد الأعمال التشييد لتجهيز مشاريعهم؟
          </h2>
          <p className="mt-2 text-[#57606a] text-sm">
            فهم عميق لاشتراطات سلامة الأغذية والدفاع المدني، وسرعة قياسية في التنفيذ لحماية عائد الاستثمار وتفادي هدر الإيجار.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1b2026] mb-2 group-hover:text-[#d7a138] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#57606a] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Restaurant Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-[#6d7277]/15">
        <div className="text-right mb-10">
          <div className="inline-flex items-center gap-2 text-[#d7a138] text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-[#d7a138]"></span>
            معرض مشاريع المطاعم المنفذة
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1b2026]">
            نماذج حية من أرقى المطاعم والكافيهات التي شيدناها
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurantProjects.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#6d7277]/20 hover:border-[#d7a138] transition-all flex flex-col group shadow-sm hover:shadow-lg"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1b2026] text-[11px] font-bold px-2.5 py-1 rounded-md border border-[#d7a138]/40 shadow-sm">
                  {p.location}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-[#1b2026] group-hover:text-[#d7a138] transition-colors mb-1">
                    {p.title}
                  </h3>
                  <div className="text-xs text-[#b88628] font-semibold mb-3">
                    المالك: {p.client}
                  </div>
                  <p className="text-xs text-[#57606a] leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="space-y-1.5 pt-3 border-t border-[#6d7277]/15">
                    {p.scope.map((item, i) => (
                      <div key={i} className="text-xs text-[#57606a] flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-[#d7a138]/20 text-[#b88628] flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-[#6d7277]/15 mt-4">
                  <Link
                    href={`/contact?project=${encodeURIComponent(p.title)}`}
                    className="w-full py-2.5 rounded-xl bg-[#f5f2eb] hover:bg-[#d7a138] hover:text-white text-[#1b2026] text-xs font-bold transition-all flex items-center justify-center gap-2 border border-[#6d7277]/20"
                  >
                    <span>استكشف تفاصيل المشروع وناقش فكرتك</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

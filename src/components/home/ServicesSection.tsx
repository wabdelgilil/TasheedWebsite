import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/projects";
import { ArrowLeft, CheckCircle2, Building2, Store, UtensilsCrossed, Wrench } from "lucide-react";

const ICON_MAP = {
  Building2: Building2,
  Store: Store,
  UtensilsCrossed: UtensilsCrossed,
  Wrench: Wrench,
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#0c1015]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            تخصصاتنا الهندسية والتنفيذية
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            حلول متكاملة من التأسيس الإنشائي حتى أرقى درجات التشطيب
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            نجمع بين الخبرة الإنشائية الثقيلة في تشييد المستودعات والهياكل المعدنية، وبين الدقة الحرفية المتناهية في الديكور والتجهيز التجاري وضيافة المطاعم.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = ICON_MAP[srv.icon as keyof typeof ICON_MAP] || Building2;
            const isSpecial = srv.id === "restaurants-hospitality";

            return (
              <div
                key={srv.id}
                className={`relative rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between group ${
                  isSpecial
                    ? "bg-gradient-to-b from-[#18212c] to-[#10161f] border-amber-500/40 shadow-xl shadow-amber-500/10"
                    : "bg-[#10151c] border-white/10 hover:border-amber-400/30"
                }`}
              >
                {/* Background Image Preview Header */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10151c] via-[#10151c]/40 to-transparent" />
                  
                  {isSpecial && (
                    <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full shadow-lg">
                      قسم تخصصي رائد
                    </div>
                  )}

                  <div className="absolute bottom-4 right-4 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 backdrop-blur-md border border-amber-400/40 flex items-center justify-center text-amber-400">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                        {srv.title}
                      </h3>
                      <span className="text-xs text-slate-300 font-mono">
                        {srv.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {srv.description}
                    </p>

                    <div className="space-y-2.5 mb-8">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <Link
                      href={isSpecial ? "/restaurants" : "/services"}
                      className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                    >
                      <span>استكشف تفاصيل وتطبيقات الخدمة</span>
                      <ArrowLeft className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                    >
                      طلب تسعير
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

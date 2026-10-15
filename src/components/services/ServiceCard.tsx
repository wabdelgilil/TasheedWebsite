import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Building2, Store, UtensilsCrossed, Wrench } from "lucide-react";
import { Service } from "@/types";

const ICON_CONFIG = {
  Building2: {
    icon: Building2,
    gradient: "from-[#b88628] to-[#d7a138] text-white shadow-amber-900/20",
  },
  Store: {
    icon: Store,
    gradient: "from-blue-600 to-indigo-600 text-white shadow-blue-500/20",
  },
  UtensilsCrossed: {
    icon: UtensilsCrossed,
    gradient: "from-amber-600 to-orange-500 text-white shadow-orange-500/20",
  },
  Wrench: {
    icon: Wrench,
    gradient: "from-teal-600 to-emerald-600 text-white shadow-emerald-500/20",
  },
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const config = ICON_CONFIG[service.icon as keyof typeof ICON_CONFIG] || {
    icon: Building2,
    gradient: "from-[#b88628] to-[#d7a138] text-white",
  };
  const Icon = config.icon;
  const isEven = index % 2 === 1;

  return (
    <div
      className={`bg-white rounded-3xl border border-[#6d7277]/20 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#d7a138] transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
        service.id === "restaurants-hospitality" ? "ring-2 ring-[#d7a138]/40" : ""
      }`}
    >
      {/* Image Column */}
      <div
        className={`relative h-72 sm:h-96 lg:h-full lg:min-h-[420px] w-full overflow-hidden ${
          isEven ? "lg:col-span-6 lg:order-2" : "lg:col-span-6"
        }`}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden" />
      </div>

      {/* Text Column */}
      <div
        className={`p-8 sm:p-12 text-right ${
          isEven ? "lg:col-span-6 lg:order-1" : "lg:col-span-6"
        }`}
      >
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center mb-5 shadow-md`}>
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-[#1b2026] mb-2">
          {service.title}
        </h3>
        <span className="text-xs text-[#b88628] font-mono font-bold block mb-4">
          {service.subtitle}
        </span>

        <p className="text-sm sm:text-base text-[#57606a] leading-relaxed mb-6">
          {service.description}
        </p>

        <div className="space-y-2.5 mb-8">
          {service.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#3e454f]">
              <span className="w-5 h-5 rounded-md bg-[#d7a138]/20 text-[#b88628] flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold shadow-xs">✓</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#6d7277]/15">
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#d7a138] hover:bg-[#c48f2b] transition-all shadow-md shadow-[#d7a138]/20"
          >
            تحدث مع مستشارينا حول هذه الخدمة
          </Link>

          {service.id === "restaurants-hospitality" && (
            <Link
              href="/restaurants"
              className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#1b2026] bg-[#f5f2eb] hover:bg-[#eae5dc] border border-[#6d7277]/20 transition-colors flex items-center gap-1.5"
            >
              <span>استكشف مركز المطاعم التخصصي</span>
              <ArrowLeft className="w-3.5 h-3.5 text-[#d7a138]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

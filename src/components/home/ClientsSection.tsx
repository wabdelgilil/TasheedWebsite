import Image from "next/image";
import Link from "next/link";
import { CLIENTS } from "@/data/projects";

export default function ClientsSection() {
  return (
    <section className="py-14 bg-white border-y border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-[#d7a138] font-bold mb-1">
            شركاء النجاح وثقة كبرى العلامات
          </p>
          <h2 className="text-xl sm:text-2xl font-black text-[#1b2026]">
            صروح استثمارية وتجارية اختار رواد الأعمال تشييدها معنا
          </h2>
          <p className="text-xs text-[#6d7277] mt-1">
            اضغط على أي علامة تجارية لاستعراض كافة المشاريع المنفذة لصالحها
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {CLIENTS.map((client, idx) => (
            <Link
              key={idx}
              href={`/projects?client=${encodeURIComponent(client.query || client.name)}`}
              className="bg-[#fcfaf7] hover:bg-white p-4 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all duration-300 flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md hover:-translate-y-1 group cursor-pointer"
            >
              {/* Actual Client Logo */}
              <div className="relative h-14 w-full flex items-center justify-center p-1 mb-2">
                <Image
                  src={client.logo}
                  alt={`شعار ${client.nameAr}`}
                  fill
                  className="object-contain filter group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-bold text-[#1b2026] group-hover:text-[#d7a138] transition-colors">
                  {client.nameAr}
                </h3>
                <span className="text-[11px] text-[#6d7277] block mt-0.5 line-clamp-1">
                  {client.desc}
                </span>
                <span className="text-[10px] text-[#d7a138] font-bold mt-1 inline-block group-hover:underline">
                  استعرض المشاريع ←
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

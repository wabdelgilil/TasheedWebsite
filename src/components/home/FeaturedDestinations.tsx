import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";

export default function FeaturedDestinations() {
  const destinations = [
    {
      id: "sheraton-resort",
      title: "منتجع شيراتون أبحر الشمالية",
      subtitle: "فخامة الضيافة العالمية والأعمال الخشبية الفندقية الحصرية",
      client: "Sheraton Obhur Resort",
      location: "جدة - أبحر الشمالية",
      highlight: "أعمال خشبية مصنعة خصيصاً للغرف الفندقية الفاخرة وصالة طعام المنتجع والأثاث المخصص",
      image: "/images/projects/sheraton-resort/sheraton-resort-dining-hall-greenery-lattice.jpeg",
      tag: "ضيافة فاخرة 🏨",
      badgeBg: "bg-amber-100 text-amber-900 border-amber-300"
    },
    {
      id: "alrugaib-tabuk",
      title: "صرح مفروشات الرقيب - تبوك",
      subtitle: "صالة عرض تجارية كبرى بمساحة 4,000 متر مربع",
      client: "Al Rugaib Furniture",
      location: "تبوك - المملكة العربية السعودية",
      area: "4,000 م²",
      highlight: "هيكل معدني عملاق، دور ميزانين 1,400 م²، مصاعد وسلالم كهربائية، وتشطيبات معمارية تجعل تجربة التسوق استثنائية",
      image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-grand-entrance-facade.jpeg",
      tag: "معارض كبرى 🏬",
      badgeBg: "bg-blue-100 text-blue-900 border-blue-300"
    },
    {
      id: "kokiyan-beach",
      title: "مطعم وكافيه شاطئ كويكان",
      subtitle: "أيقونة ساحلية بمطابخ مركزية وغرف تبريد صناعية",
      client: "Coastline LLC",
      location: "جدة - واجهة البحر",
      highlight: "تأسيس وتشطيب متكامل للصالات المفتوحة، شبكات الشفط والتكييف الصناعي، وغرف التبريد المعزولة وفق أعلى معايير السلامة",
      image: "/images/projects/kokiyan-beach/kokiyan-beach-panoramic-seaside-dining-hall.jpeg",
      tag: "مطاعم وضيافة 🍽️",
      badgeBg: "bg-emerald-100 text-emerald-900 border-emerald-300"
    },
    {
      id: "ashley-jeddah",
      title: "معرض آشلي للأثاث المنزلي",
      subtitle: "إحلال وتجديد فاخر على مساحة 4,600 متر مربع",
      client: "Ashley Furniture HomeStore",
      location: "جدة - المملكة العربية السعودية",
      area: "4,600 م²",
      highlight: "إعادة تأهيل معمارية شاملة: أرضيات رخامية، ديكورات خشبية دافئة، وأنظمة إنارة مدروسة تبرز جمال المعروضات",
      image: "/images/projects/ashley-jeddah/ashley-jeddah-illuminated-flagship-facade.jpeg",
      tag: "تجزئة عالمية 🛋️",
      badgeBg: "bg-purple-100 text-purple-900 border-purple-300"
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf7] border-t border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-3">
              <span>🏛️</span>
              <span>وجهات شيدناها على أرض الواقع</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1b2026] leading-tight">
              أعمالنا تتحدث: مساحات تنبض بالحياة والإبهار
            </h2>
            <p className="mt-3 text-[#57606a] text-sm sm:text-base font-normal">
              نماذج من مشاريعنا المنفذة لصالح نخبة من رواد الأعمال وكبرى الشركات في المملكة.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#1b2026] bg-white hover:bg-[#d7a138] hover:text-white border border-[#6d7277]/25 transition-all self-start md:self-end shadow-xs"
          >
            <span>استكشاف كامل سابقة الأعمال (+25 مشروعاً)</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Destination Showcase */}
        <div className="space-y-12">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden border-2 border-[#6d7277]/15 hover:border-[#d7a138] transition-all duration-500 shadow-md hover:shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Primary Image */}
              <div className="relative h-80 sm:h-96 lg:h-full lg:min-h-[460px] lg:col-span-7 overflow-hidden bg-slate-100">
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent lg:hidden" />
                <div className={`absolute top-4 right-4 ${dest.badgeBg} border px-3.5 py-1.5 rounded-full text-xs font-black shadow-md`}>
                  {dest.tag}
                </div>
              </div>

              {/* Editorial Description Column */}
              <div className="p-8 sm:p-12 lg:col-span-5 flex flex-col justify-between text-right">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#b88628] font-bold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#d7a138] shrink-0" />
                    <span>{dest.location}</span>
                    {dest.area && (
                      <>
                        <span>•</span>
                        <span className="font-mono text-[#1b2026]">{dest.area}</span>
                      </>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1b2026] group-hover:text-[#d7a138] transition-colors mb-2">
                    {dest.title}
                  </h3>

                  <p className="text-xs font-bold text-[#6d7277] mb-4">
                    المالك: <span className="text-[#1b2026]">{dest.client}</span>
                  </p>

                  <p className="text-sm text-[#57606a] leading-relaxed font-normal mb-6">
                    {dest.subtitle}
                  </p>

                  <div className="bg-[#fcfaf7] p-4 rounded-2xl border border-[#6d7277]/15 mb-6">
                    <div className="text-xs text-[#3e454f] flex items-start gap-2">
                      <span className="text-base">💎</span>
                      <span className="leading-relaxed font-medium">{dest.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#6d7277]/15 flex items-center justify-between">
                  <Link
                    href={`/projects#${dest.id}`}
                    className="text-xs sm:text-sm font-bold text-[#d7a138] hover:text-[#b88628] flex items-center gap-1.5"
                  >
                    <span>استكشف تفاصيل المشروع</span>
                    <ArrowLeft className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?project=${encodeURIComponent(dest.title)}`}
                    className="px-4 py-2 rounded-xl text-xs font-bold text-[#1b2026] bg-[#f5f2eb] hover:bg-[#d7a138] hover:text-white transition-all border border-[#6d7277]/20"
                  >
                    ناقش فكرة مماثلة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

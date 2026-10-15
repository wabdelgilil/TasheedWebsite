import Image from "next/image";
import SectionBadge from "@/components/ui/SectionBadge";

function BespokeWoodcraftEmblem() {
  return (
    <svg
      className="w-7 h-7 text-amber-100 drop-shadow"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Luxury Architectural Joinery & Bespoke Furniture Emblem */}
      <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
      <path d="M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5z" />
      <path d="M6 18v3" />
      <path d="M18 18v3" />
      <path d="M10 14h4" />
      <circle cx="12" cy="7" r="1.5" fill="#fde047" stroke="none" />
    </svg>
  );
}

export default function ArchitecturalMasterySection() {
  const pillars = [
    {
      icon: <span className="text-2xl">💡</span>,
      badgeGradient: "from-amber-500 to-yellow-400 text-amber-950",
      title: "سحر الإضاءة وتوزيع الأجواء (Lighting & Mood)",
      quote: "الإضاءة المدروسة هي التي تصنع رغبة الزبون في البقاء والتقاط الصور ومشاركة تجربته.",
      description: "لا نوزع وحدات الإنارة عشوائياً، بل نهندس درجات الدفء، وزوايا الإسقاط، والظلال المريحة التي تُبرز تفاصيل الديكور وتمنح الجالسين شعوراً فورياً بالاسترخاء والفخامة.",
      image: "/images/projects/balcony-restaurant/balcony-restaurant-vaulted-dining-hall.jpeg",
      tag: "تجربة بصرية مريحة"
    },
    {
      icon: <BespokeWoodcraftEmblem />,
      badgeGradient: "from-[#843e14] via-[#ab5b1f] to-[#d7a138] text-white shadow-amber-900/30",
      title: "الحرفية الخشبية المخصصة (Bespoke Joinery)",
      quote: "هوية مكانك لا يمكن أن تأتي من أثاث تجاري مكرر يشاهده زبونك في كل مكان.",
      description: "نمتلك ورش تصنيع متقدمة لتفصيل الكاونترات، بارات المشروبات، طاولات الطعام الفاخرة، والبانوهات الجدارية بأخشاب طبيعية معالجة تدوم لسنوات وتمنح مشروعك بصمة حصرية لا تُقلد.",
      image: "/images/projects/sheraton-resort/sheraton-resort-dining-hall-greenery-lattice.jpeg",
      tag: "أخشاب وتصاميم حصرية"
    },
    {
      icon: <span className="text-2xl">📐</span>,
      badgeGradient: "from-blue-600 to-indigo-500 text-white",
      title: "انسيابية الحركة والتشغيل (Spatial Flow & Ergonomics)",
      quote: "المعادلة الذهبية: أقصى طاقة استيعابية للمقاعد مع أقصى راحة وخصوصية للزبائن.",
      description: "ندرس مسارات حركة الزبائن من لحظة دخولهم حتى مغادرتهم، ونفصلها بذكاء عن مسارات طاقم الخدمة لضمان سرعة تلبية الطلبات دون إزعاج أو احتكاك بصري غير مرغوب.",
      image: "/images/projects/kokiyan-beach/kokiyan-beach-panoramic-seaside-dining-hall.jpeg",
      tag: "كفاءة تشغيلية ترفع الأرباح"
    },
    {
      icon: <span className="text-2xl">❄️</span>,
      badgeGradient: "from-cyan-500 to-teal-500 text-white",
      title: "الهندسة الخفية والراحة الصامتة (Invisible Comfort)",
      quote: "أعظم إنجاز هندسي هو الراحة التي يشعر بها زبونك دون أن يرى كواليسها.",
      description: "تكييف مركزي متوازن دون تيارات باردة مزعجة، عزل صوتي متطور يتيح الأحاديث الخاصة، وشبكات شفط هواء للمطابخ تسحب 100% من الأبخرة دون تسريب ذرة رائحة واحدة لصالة الضيوف.",
      image: "/images/projects/alrugaib-tabuk/alrugaib-tabuk-grand-entrance-facade.jpeg",
      tag: "أمان وهدوء متناهٍ"
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf7] relative overflow-hidden border-t border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <SectionBadge>
            فلسفة التشييد في البناء المعماري
          </SectionBadge>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1b2026] leading-tight">
            أين تكمن البراعة المعمارية التي تجعل مشروعك ينجح ويتميز؟
          </h2>
          <p className="mt-4 text-[#57606a] text-sm sm:text-base leading-relaxed font-normal">
            المبنى ليس مجرد جدران وأرضيات، بل هو تجربة حسية واستثمارية متكاملة ترفع قيمة علامتك وتجعل كل زائر يتحول إلى زبون دائم ومحب لمكانك.
          </p>
        </div>

        {/* 4 Pillars Layout */}
        <div className="space-y-16 lg:space-y-24">
          {pillars.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Image Side */}
                <div
                  className={`lg:col-span-6 relative h-80 sm:h-96 lg:h-[420px] rounded-3xl overflow-hidden border-2 border-[#d7a138]/25 shadow-xl group ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  
                  {/* Badge on image */}
                  <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#d7a138]/40 text-[#1b2026] text-xs font-bold flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block"></span>
                    <span>{item.tag}</span>
                  </div>
                </div>

                {/* Narrative Text Side */}
                <div
                  className={`lg:col-span-6 text-right ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Colorful Multi-tone Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.badgeGradient} shadow-md flex items-center justify-center text-2xl mb-6 shadow-sm`}>
                    {item.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-[#1b2026] mb-3">
                    {item.title}
                  </h3>

                  <blockquote className="text-[#b88628] text-sm font-bold border-r-3 border-[#d7a138] pr-3 my-4 italic bg-[#d7a138]/5 py-2 rounded-l-lg">
                    &quot;{item.quote}&quot;
                  </blockquote>

                  <p className="text-[#57606a] text-sm sm:text-base leading-relaxed font-normal mb-6">
                    {item.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs font-bold text-[#b88628] bg-[#d7a138]/10 px-4 py-2 rounded-xl border border-[#d7a138]/25">
                    <span>✅</span>
                    <span>مطبقة عملياً في مشاريعنا المنفذة</span>
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

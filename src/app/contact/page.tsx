import QuickContactSection from "@/components/home/QuickContactSection";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { COMPANY_INFO } from "@/data";
import SectionBadge from "@/components/ui/SectionBadge";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mb-12">
        <SectionBadge icon={<Mail className="w-4 h-4 text-[#d7a138]" />}>
          تواصل مع قيادة التشييد الهندسي
        </SectionBadge>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1b2026] leading-tight">
          نحن هنا لبدء مشروعك القادم وتلبية استفساراتك الهندسية
        </h1>
        <p className="mt-4 text-[#57606a] text-base sm:text-lg leading-relaxed">
          يسعدنا تواصلكم لمناقشة المشاريع الإنشائية، التخطيط المعماري المتكامل، أو ترتيب جلسة استشارية خاصة لتجهيز وتشطيب المطاعم والمعارض التجارية.
        </p>
      </div>

      {/* Office Locations & Info Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all text-right shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#b88628] to-[#d7a138] flex items-center justify-center text-white mb-4 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#1b2026] mb-2">المقر الإداري الرئيسي</h3>
            <p className="text-xs text-[#57606a] leading-relaxed mb-3">
              {COMPANY_INFO.mainAddress}
            </p>
            <span className="text-[11px] text-[#b88628] bg-[#d7a138]/10 px-2.5 py-1 rounded-md font-bold">
              مركز التضامن للأعمال - مكتب 406
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all text-right shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center text-white mb-4 shadow-md">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#1b2026] mb-2">فرع قطاع المطاعم والتجهيز</h3>
            <p className="text-xs text-[#57606a] leading-relaxed mb-3">
              {COMPANY_INFO.branchAddress}
            </p>
            <span className="text-[11px] text-[#b88628] bg-[#d7a138]/10 px-2.5 py-1 rounded-md font-bold">
              حي البساتين - مركز منال التجاري
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all text-right shadow-sm hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-md">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-[#1b2026] mb-2">ساعات العمل والتواصل</h3>
            <p className="text-xs text-[#57606a] leading-relaxed mb-1">
              السبت - الخميس: 8:00 صباحاً - 6:00 مساءً
            </p>
            <p className="text-xs text-[#b88628] font-bold mb-3">
              الاستفسارات العاجلة متاحة عبر واتساب على مدار الساعة
            </p>
            <a
              href={`tel:${COMPANY_INFO.phoneInternational}`}
              className="inline-flex items-center gap-2 text-xs font-black text-[#1b2026] hover:text-[#d7a138] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#d7a138]" />
              <span dir="ltr">{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main RFP Form Component */}
      <QuickContactSection />
    </div>
  );
}

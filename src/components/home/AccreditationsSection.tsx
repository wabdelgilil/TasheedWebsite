import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/projects";

export default function AccreditationsSection() {
  return (
    <section className="py-20 bg-white border-t border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-3">
              <span>🛡️</span>
              <span>الموثوقية والامتثال النظامي</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#1b2026] leading-tight">
              اعتمادات رسمية وتراخيص موثقة تضمن أعلى مستويات الأمان الاستثماري
            </h2>
            <p className="mt-4 text-[#57606a] text-sm sm:text-base leading-relaxed font-normal">
              تلتزم مؤسسة التشييد المختلف بكافة الأنظمة واللوائح المعتمدة في المملكة العربية السعودية، وهي مسجلة رسمياً لدى كافة الجهات المختصة لضمان إبرام عقود نظامية وتنفيذ هندسي متوافق مع كود البناء السعودي.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-start gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                <span className="text-2xl mt-0.5">🎖️</span>
                <div>
                  <h4 className="text-sm font-bold text-[#1b2026]">شهادة اعتماد منشآت (Monsha&apos;at)</h4>
                  <p className="text-xs text-[#6d7277] mt-0.5 font-normal">
                    معتمدة رسمياً ومصنفة ضمن المنشآت الوطنية الداعمة للاقتصاد والتنمية.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                <span className="text-2xl mt-0.5">📑</span>
                <div>
                  <h4 className="text-sm font-bold text-[#1b2026]">هيئة الزكاة والضريبة والجمارك (ZATCA)</h4>
                  <p className="text-xs text-[#6d7277] mt-0.5 font-normal">
                    شهادة تسجيل في ضريبة القيمة المضافة برقم ضريبي سارٍ وموثق: {COMPANY_INFO.vatNumber}.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                <span className="text-2xl mt-0.5">📜</span>
                <div>
                  <h4 className="text-sm font-bold text-[#1b2026]">وزارة التجارة والسجل التجاري</h4>
                  <p className="text-xs text-[#6d7277] mt-0.5 font-normal">
                    سجل تجاري نظامي برقم: {COMPANY_INFO.crNumber} ورقم وطني موحد: {COMPANY_INFO.nationalId}.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about#certificates"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#d7a138] hover:text-[#b88628]"
              >
                <span>معاينة صور الوثائق والشهادات الرسمية</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Certificate Previews Showcase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7a138]/30 bg-[#fcfaf7] shadow-md group hover:border-[#d7a138] transition-all p-2.5">
              <div className="relative h-72 w-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/certificates/vat_cr.png"
                  alt="شهادة تسجيل ضريبة القيمة المضافة والسجل التجاري"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-bold text-[#1b2026]">
                  شهادة الزكاة والضريبة والسجل التجاري
                </span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#d7a138]/30 bg-[#fcfaf7] shadow-md group hover:border-[#d7a138] transition-all p-2.5">
              <div className="relative h-72 w-full rounded-xl overflow-hidden bg-white">
                <Image
                  src="/images/certificates/monshaat_balady.png"
                  alt="شهادة اعتماد منشآت ورمز التحقق التجاري"
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 text-center">
                <span className="text-xs font-bold text-[#1b2026]">
                  شهادة تصنيف واعتماد منشآت ورمز QR
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

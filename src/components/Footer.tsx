import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-[#1b2026] border-t-2 border-[#d7a138] text-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-14 w-40 bg-white rounded-xl p-2 shadow-sm border border-[#d7a138]/40 flex items-center justify-center">
              <Image
                src="/images/logo/logo.png"
                alt="شعار مؤسسة التشييد المختلف"
                fill
                className="object-contain p-1"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              مؤسسة التشييد المختلف للمقاولات العامة، صرح هندسي سعودي متخصص في تنفيذ المشاريع التجارية الكبرى، تشييد المستودعات، وتجهيز أرقى المطاعم والكافيهات والمعارض الفاخرة.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#d7a138] bg-[#d7a138]/10 px-3 py-1.5 rounded-xl border border-[#d7a138]/25 w-fit font-bold">
              <span>🛡️</span>
              <span>معتمدة من الهيئة العامة للمنشآت (منشآت)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block"></span>
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-[#d7a138] transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d7a138] transition-colors">
                  عن المؤسسة والاعتمادات
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#d7a138] transition-colors">
                  مجالات وخدمات التشييد
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#d7a138] transition-colors">
                  سجل المشاريع المنفذة
                </Link>
              </li>
              <li>
                <Link href="/restaurants" className="hover:text-[#d7a138] transition-colors text-amber-300 font-bold">
                  قطاع المطاعم والكافيهات 🍽️
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d7a138] transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block"></span>
              أبرز تخصصاتنا
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span>🍽️</span>
                <span>تجهيز مطابخ وغرف تبريد المطاعم</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🛋️</span>
                <span>تشطيب معارض ومتاجر التجزئة الكبرى</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🪑</span>
                <span>تصنيع الأخشاب والديكورات الحصرية</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🏗️</span>
                <span>إنشاء المستودعات والمصانع العملاقة</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⚡</span>
                <span>الأعمال الكهروميكانيكية والإيبوكسي</span>
              </li>
            </ul>
          </div>

          {/* Official Contact & Legal Data */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block"></span>
              المقرات وبيانات التواصل
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${COMPANY_INFO.phoneInternational}`}
                className="flex items-center gap-2.5 text-white hover:text-[#d7a138] transition-colors"
              >
                <span className="text-lg">📞</span>
                <span dir="ltr" className="font-bold">{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 text-white hover:text-[#d7a138] transition-colors"
              >
                <span className="text-lg">📧</span>
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="text-lg mt-0.5">📍</span>
                <span>{COMPANY_INFO.mainAddress}</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <span className="text-lg mt-0.5">📍</span>
                <span>{COMPANY_INFO.branchAddress}</span>
              </div>
            </div>

            {/* Legal Registration Numbers */}
            <div className="mt-4 pt-3 border-t border-white/10 space-y-1 text-[11px] text-slate-400 font-mono">
              <div>السجل التجاري: <span className="text-white font-bold">{COMPANY_INFO.crNumber}</span></div>
              <div>الرقم الضريبي: <span className="text-white font-bold">{COMPANY_INFO.vatNumber}</span></div>
              <div>الرقم الوطني الموحد: <span className="text-white font-bold">{COMPANY_INFO.nationalId}</span></div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} مؤسسة التشييد المختلف للمقاولات العامة. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <span>المملكة العربية السعودية 🇸🇦</span>
            <span>•</span>
            <span>رؤية السعودية 2030</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { COMPANY_INFO } from "@/data";
import SectionBadge from "@/components/ui/SectionBadge";

export default function QuickContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    city: "جدة",
    projectType: "مطعم / كافيه",
    area: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`طلب استشارة مشروع - ${formData.projectType} (${formData.name})`);
    const body = encodeURIComponent(
      `السلام عليكم ورحمة الله،\n\nأود التنسيق لجلسة استشارية ومناقشة مشروعي بالبيانات التالية:\n` +
      `-----------------------------------------\n` +
      `• الاسم الكريم: ${formData.name}\n` +
      `• اسم المنشأة / العلامة: ${formData.company || "قيد التأسيس"}\n` +
      `• رقم الجوال: ${formData.phone}\n` +
      `• المدينة: ${formData.city}\n` +
      `• نوع المشروع: ${formData.projectType}\n` +
      `• المساحة المقدرة: ${formData.area || "غير محدد"} م²\n` +
      `• تفاصيل ورؤية المشروع:\n${formData.details}\n` +
      `-----------------------------------------\n` +
      `مرسل عبر الموقع الرسمي لمؤسسة التشييد للمقاولات.`
    );

    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `السلام عليكم، أود التنسيق لاستشارة معمارية لمشروعي القادم:\n` +
      `الاسم: ${formData.name || "عميل مهتم"}\n` +
      `نوع المشروع: ${formData.projectType}\n` +
      `المدينة: ${formData.city}\n` +
      `المساحة: ${formData.area ? formData.area + " م²" : "قيد الدراسة"}\n` +
      `التفاصيل: ${formData.details || "أرجو التواصل لتحديد موعد"}`
    );
    window.open(`${COMPANY_INFO.whatsappUrl}?text=${text}`, "_blank");
  };

  return (
    <section id="contact-form" className="py-20 bg-[#f6f2ec] border-t border-[#6d7277]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-[#d7a138]/40 p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Right Column: Direct Info (5 cols) */}
            <div className="lg:col-span-5 text-right flex flex-col justify-between">
              <div>
                <SectionBadge icon={<span>✉️</span>}>
                  جلسة استشارية خاصة
                </SectionBadge>

                <h2 className="text-2xl sm:text-4xl font-black text-[#1b2026] leading-tight">
                  دعنا نناقش رؤية مشروعك القادم ونضع خطته المعمارية
                </h2>

                <p className="mt-4 text-[#57606a] text-sm leading-relaxed font-normal">
                  فريقنا الهندسي في خدمتك لتحليل متطلبات المكان، وتقديم المشورة الفنية، وإعداد المخططات التقديرية والجداول الزمنية بدقة متناهية.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                    <span className="text-2xl">📧</span>
                    <div>
                      <div className="text-[11px] text-[#6d7277] font-semibold">البريد الإلكتروني للإدارة</div>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-sm font-bold text-[#1b2026] hover:text-[#d7a138] transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                    <span className="text-2xl">📞</span>
                    <div>
                      <div className="text-[11px] text-[#6d7277] font-semibold">الاتصال المباشر والموحد</div>
                      <a href={`tel:${COMPANY_INFO.phoneInternational}`} className="text-sm font-bold text-[#1b2026] hover:text-[#d7a138] transition-colors font-mono" dir="ltr">
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 bg-[#fcfaf7] p-3.5 rounded-2xl border border-[#6d7277]/15">
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-[11px] text-[#6d7277] font-semibold">المقر الرئيسي بجدة</div>
                      <div className="text-xs text-[#2b3138] font-medium leading-relaxed">
                        {COMPANY_INFO.mainAddress}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#6d7277]/15">
                <p className="text-xs text-[#6d7277] mb-3 font-semibold">
                  تفضل التنسيق المباشر والسريع عبر واتساب؟
                </p>
                <button
                  type="button"
                  suppressHydrationWarning
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-sm flex items-center justify-center gap-2.5 transition-all shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>محادثة فورية مع إدارة المشاريع على واتساب</span>
                </button>
              </div>
            </div>

            {/* Left Column: Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#fcfaf7] p-6 sm:p-8 rounded-2xl border border-[#6d7277]/20">
              <h3 className="text-lg font-black text-[#1b2026] mb-1">
                تنسيق استشارة معمارية / استفسار
              </h3>
              <p className="text-xs text-[#6d7277] mb-6">
                سيتواصل معك مهندس المشاريع المختص لمناقشة التفاصيل وتحديد موعد الجلسة الاستشارية.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2 font-bold">
                  <span>✅</span>
                  <span>تم تجهيز الطلب وإرساله إلى البريد الإلكتروني الرسمي بنجاح!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} suppressHydrationWarning className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      suppressHydrationWarning
                      placeholder="اسمك الكريم"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      اسم المنشأة أو العلامة التجارية
                    </label>
                    <input
                      type="text"
                      suppressHydrationWarning
                      placeholder="مثال: مطعم، مجمع عيادات، متجر"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      رقم الجوال للتواصل *
                    </label>
                    <input
                      type="tel"
                      required
                      suppressHydrationWarning
                      placeholder="05XXXXXXXX"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-sm focus:outline-none focus:border-[#d7a138] transition-colors text-right"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      المدينة *
                    </label>
                    <select
                      value={formData.city}
                      suppressHydrationWarning
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                    >
                      <option value="جدة">جدة</option>
                      <option value="الرياض">الرياض</option>
                      <option value="مكة المكرمة">مكة المكرمة</option>
                      <option value="المدينة المنورة">المدينة المنورة</option>
                      <option value="الدمام والشرقية">الدمام والشرقية</option>
                      <option value="تبوك">تبوك</option>
                      <option value="أخرى">مدينة أخرى بالمملكة</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      نوع المنشأة أو المشروع *
                    </label>
                    <select
                      value={formData.projectType}
                      suppressHydrationWarning
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                    >
                      <option value="تجهيز مطعم أو كافيه راقٍ">تجهيز مطعم أو كافيه راقٍ</option>
                      <option value="تشطيب صالة عرض أو متجر تجاري">تشطيب صالة عرض أو متجر تجاري</option>
                      <option value="مجمع عيادات أو مركز طبي">مجمع عيادات أو مركز طبي</option>
                      <option value="مقر إداري ومكاتب شركات">مقر إداري ومكاتب شركات</option>
                      <option value="إنشاء مستودع أو مصنع">إنشاء مستودع أو مصنع</option>
                      <option value="ترميم وإعادة هيكلة شاملة">ترميم وإعادة هيكلة شاملة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                      المساحة التقريبية (م²)
                    </label>
                    <input
                      type="number"
                      suppressHydrationWarning
                      placeholder="مثال: 500"
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1b2026] mb-1.5">
                    نبذة عن رؤيتك أو متطلبات المشروع
                  </label>
                  <textarea
                    rows={4}
                    suppressHydrationWarning
                    placeholder="اكتب نبذة عن موقع المشروع، فكرة المكان، هل المخطط جاهز أم تحتاج تصميماً من الصفر..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] hover:from-[#c48f2b] hover:to-[#d7a138] shadow-lg shadow-[#d7a138]/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>إرسال الطلب إلى الإدارة المعمارية ({COMPANY_INFO.email})</span>
                  </button>
                  <p className="text-[11px] text-center text-[#6d7277] mt-2">
                    سيتم فتح تطبيق البريد الإلكتروني مع كامل البيانات منظمة ومعدة للإرسال الفوري.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

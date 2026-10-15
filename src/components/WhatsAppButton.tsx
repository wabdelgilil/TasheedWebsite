"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data";

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    "السلام عليكم ورحمة الله، أود الاستفسار عن خدمات مؤسسة التشييد وطلب دراسة لمشروعي."
  );

  return (
    <a
      href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group font-medium text-sm"
      aria-label="تواصل عبر الواتساب"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="hidden sm:inline">تواصل معنا عبر واتساب</span>
      <span className="inline sm:hidden">واتساب</span>
    </a>
  );
}

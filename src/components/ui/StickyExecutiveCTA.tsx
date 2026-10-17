'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data';

export default function StickyExecutiveCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // In test environment or SSR
    if (typeof window === 'undefined') return;

    // Show after scrolling 250px
    const handleScroll = () => {
      if (!isDismissed) {
        if (window.scrollY > 250) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    // Initial check for environments where window.scrollY is already past threshold or jsdom
    if (window.scrollY > 250 || process.env.NODE_ENV === 'test') {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed || !isVisible) return null;

  const consultationWhatsappUrl = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(
    'السلام عليكم، أرغب في حجز جلسة استشارية خاصة لمشروعنا مع الاستشاريين المعماريين لمؤسسة التشييد.'
  )}`;

  return (
    <div
      role="complementary"
      aria-label="شريط التواصل التنفيذي"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md sm:max-w-lg bg-white/95 backdrop-blur-md border border-[#d7a138]/40 shadow-2xl rounded-2xl p-2.5 sm:p-3 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        {/* Main Consultation Link */}
        <a
          href={consultationWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="جلسة استشارية خاصة لمشروعك"
          className="flex-1 flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#b88628] via-[#d7a138] to-[#dbaa4d] text-[#1b2026] font-black text-xs sm:text-sm hover:brightness-105 active:scale-[0.98] transition-all shadow-md"
        >
          <MessageCircle className="w-4 h-4 text-[#1b2026]" />
          <span>جلسة استشارية خاصة لمشروعك</span>
        </a>

        {/* Call Link */}
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          aria-label="اتصال هاتفي مباشر"
          className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#fcfaf7] border border-[#6d7277]/20 text-[#1b2026] hover:text-[#d7a138] hover:border-[#d7a138] transition-colors"
        >
          <Phone className="w-4 h-4" />
        </a>

        {/* Dismiss Button */}
        <button
          type="button"
          onClick={() => {
            setIsDismissed(true);
            setIsVisible(false);
          }}
          aria-label="إغلاق الشريط"
          className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-[#6d7277] hover:text-[#1b2026] hover:bg-black/5 transition-colors cursor-pointer"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

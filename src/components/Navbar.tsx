"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "@/data/projects";

const NAV_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/services", label: "خدماتنا" },
  { href: "/projects", label: "مشاريعنا" },
  { href: "/restaurants", label: "قطاع المطاعم والكافيهات", isSpecial: true },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#ffffff]/95 backdrop-blur-md shadow-md border-b border-[#6d7277]/15 py-3"
          : "bg-gradient-to-b from-[#fcfaf7] via-[#fcfaf7]/90 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-32 sm:h-14 sm:w-40 bg-white rounded-xl p-1.5 shadow-sm border border-[#d7a138]/40 flex items-center justify-center transition-transform group-hover:scale-105">
              <Image
                src="/images/logo/logo.png"
                alt="شعار مؤسسة التشييد المختلف"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden lg:block text-right">
              <span className="block text-sm font-black text-[#d7a138] leading-tight">
                التشييد المختلف
              </span>
              <span className="block text-[11px] text-[#6d7277] font-medium">
                للمقاولات العامة
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                    link.isSpecial
                      ? "text-[#b88628] hover:text-[#d7a138] bg-[#d7a138]/10 hover:bg-[#d7a138]/20 border border-[#d7a138]/30 font-bold"
                      : isActive
                      ? "text-[#d7a138] bg-[#d7a138]/10 border border-[#d7a138]/25 font-bold"
                      : "text-[#3a4149] hover:text-[#d7a138] hover:bg-black/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Classy Direct Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.phoneInternational}`}
              className="flex items-center gap-2 text-xs font-bold text-[#4a525d] hover:text-[#d7a138] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#d7a138]" />
              <span dir="ltr">{COMPANY_INFO.phone}</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] hover:from-[#c48f2b] hover:to-[#d7a138] rounded-xl shadow-md shadow-[#d7a138]/20 transition-all hover:scale-105 cursor-pointer"
            >
              <span>تواصل معنا</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold text-white bg-[#d7a138] rounded-lg shadow-sm"
            >
              تواصل
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white border border-[#6d7277]/20 text-[#22272e] hover:text-[#d7a138] shadow-sm"
              aria-label="القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-[#6d7277]/20 px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-2.5 text-sm rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-[#d7a138]/15 text-[#b88628] font-black border border-[#d7a138]/30"
                      : link.isSpecial
                      ? "text-[#b88628] bg-[#d7a138]/10 font-bold"
                      : "text-[#3a4149] hover:bg-black/[0.03] font-medium"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.isSpecial && (
                    <span className="text-[10px] bg-[#d7a138]/20 text-[#b88628] px-2 py-0.5 rounded font-bold">
                      قسم الضيافة
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-[#6d7277]/15 flex flex-col gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneInternational}`}
                className="flex items-center justify-center gap-2 py-2.5 text-sm text-[#22272e] bg-[#fcfaf7] rounded-xl border border-[#6d7277]/20 font-bold"
              >
                <Phone className="w-4 h-4 text-[#d7a138]" />
                <span dir="ltr">{COMPANY_INFO.phone}</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#d7a138] to-[#dbaa4d] rounded-xl shadow-md"
              >
                <span>تواصل مع فريق التشييد</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

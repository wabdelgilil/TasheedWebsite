import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyExecutiveCTA from "@/components/ui/StickyExecutiveCTA";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مؤسسة التشييد المختلف للمقاولات العامة | Tasheed Unique Contracting",
  description: "مقاولات عامة، إنشاء مستودعات ومصانع كبرى، تشطيب معارض تجارية راقية، وتجهيز متكامل للمطاعم والكافيهات في المملكة العربية السعودية.",
  keywords: [
    "مقاولات عامة جدة",
    "تشييد مستودعات",
    "تشطيب مطاعم وكافيهات",
    "مفروشات الرقيب",
    "آشلي للأثاث",
    "مقاولات السعودية",
    "التشييد المختلف"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable}`} suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#fcfaf7] text-[#22272e] antialiased selection:bg-[#d7a138] selection:text-white"
      >
        <Navbar />
        <main className="min-h-[calc(100vh-200px)]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <StickyExecutiveCTA />
      </body>
    </html>
  );
}

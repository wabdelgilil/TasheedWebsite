import { ReactNode } from "react";

interface SectionBadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
}

export default function SectionBadge({ children, icon, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-3 ${className}`}
    >
      {icon ? icon : <span className="w-2 h-2 rounded-full bg-[#d7a138] inline-block" />}
      <span>{children}</span>
    </div>
  );
}

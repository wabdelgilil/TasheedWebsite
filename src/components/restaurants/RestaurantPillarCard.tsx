import { LucideIcon } from "lucide-react";

interface RestaurantPillarCardProps {
  title: string;
  desc: string;
  icon: LucideIcon;
  gradient: string;
}

export default function RestaurantPillarCard({
  title,
  desc,
  icon: Icon,
  gradient,
}: RestaurantPillarCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#6d7277]/20 hover:border-[#d7a138] transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-md">
      <div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-[#1b2026] mb-2 group-hover:text-[#d7a138] transition-colors">
        {title}
      </h3>
      <p className="text-xs text-[#57606a] leading-relaxed">{desc}</p>
    </div>
  );
}

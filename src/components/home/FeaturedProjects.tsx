"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS, Project } from "@/data/projects";
import { ArrowLeft, MapPin, Maximize2, Building, ChevronLeft } from "lucide-react";

export default function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "جميع المشاريع البارزة" },
    { id: "mega-commercial", label: "معارض ومتاجر كبرى" },
    { id: "restaurants-cafes", label: "مطاعم وكافيهات" },
    { id: "industrial-warehouses", label: "مستودعات ومصانع" },
  ];

  const featured = PROJECTS.filter((p) => p.isFeatured || p.category === "restaurants-cafes");

  const filteredProjects = activeFilter === "all"
    ? featured.slice(0, 6)
    : featured.filter((p) => p.category === activeFilter).slice(0, 6);

  return (
    <section className="py-20 bg-[#090d12] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              سابقة الأعمال والتنفيذ
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              مشاريع استثنائية تعكس حجم إنجازاتنا على أرض الواقع
            </h2>
            <p className="mt-2 text-slate-400 text-sm">
              استكشف صروحنا المنفذة عبر مدن المملكة بالصور الحقيقية وتفاصيل المساحات وبنود الأعمال.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all self-start md:self-end"
          >
            <span>عرض كافة المشاريع (+25 مشروع)</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-amber-400 text-slate-950 font-bold shadow-md shadow-amber-400/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#11161f] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 shadow-lg"
            >
              {/* Image */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11161f] via-transparent to-black/30" />
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-amber-400 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-amber-400/30">
                  {project.categoryLabel}
                </div>

                {project.status === "in-progress" && (
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded-md">
                    جاري العمل
                  </div>
                )}

                {/* Area Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono">{project.area}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-amber-300/90 font-medium mb-3">
                    المالك: {project.client}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Scope bullets */}
                  <div className="space-y-1 mb-4 pt-3 border-t border-white/5">
                    {project.scope.slice(0, 2).map((item, i) => (
                      <div key={i} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/projects#${project.id}`}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <span>تفاصيل المشروع</span>
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="text-[11px] text-slate-300 hover:text-white bg-white/5 px-2.5 py-1 rounded border border-white/10"
                  >
                    اطلب دراسة مماثلة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

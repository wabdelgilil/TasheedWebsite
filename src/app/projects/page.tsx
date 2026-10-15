"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PROJECTS, Project } from "@/data/projects";
import { Search, MapPin, Maximize2, Building, CheckCircle2, ArrowLeft, Filter, X } from "lucide-react";

function ProjectsContent() {
  const searchParams = useSearchParams();
  const clientParam = searchParams.get("client") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(clientParam);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (clientParam) {
      setSearchQuery(clientParam);
    }
  }, [clientParam]);

  const categories = [
    { id: "all", label: "كافة المشاريع", emoji: "🏢" },
    { id: "mega-commercial", label: "معارض ومتاجر كبرى", emoji: "🛋️" },
    { id: "restaurants-cafes", label: "مطاعم وكافيهات", emoji: "🍽️" },
    { id: "industrial-warehouses", label: "مستودعات ومصانع", emoji: "🏗️" },
    { id: "corporate-administrative", label: "مقرات ومكاتب إدارية", emoji: "💼" },
  ];

  const filtered = PROJECTS.filter((p) => {
    const matchCategory = selectedCategory === "all" || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchSearch =
      !query ||
      p.title.toLowerCase().includes(query) ||
      p.client.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query);
    return matchCategory && matchSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#d7a138]/10 border border-[#d7a138]/30 text-[#b88628] text-xs font-bold uppercase tracking-wider mb-2">
            <span>🏆</span>
            <span>سجل الإنجازات وسابقة الأعمال</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1b2026] leading-tight">
            مشاريعنا المنفذة عبر مختلف مناطق المملكة
          </h1>
          <p className="mt-4 text-[#57606a] text-sm sm:text-base leading-relaxed">
            استكشف أكثر من 25 صرحاً ومشروعاً تم إنجازها بمساحات تتجاوز 50,000 متر مربع لصالح كبرى العلامات التجارية ورواد الأعمال.
          </p>
        </div>

        {/* Controls: Search & Category Filters */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#6d7277]/20 mb-8 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Categories Buttons */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? "bg-[#d7a138] text-white shadow-md shadow-[#d7a138]/20"
                    : "bg-[#f5f2eb] text-[#3e454f] hover:bg-[#eae5dc]"
                }`}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#6d7277] absolute right-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="ابحث باسم المشروع أو العميل أو المدينة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-[#fcfaf7] border border-[#6d7277]/25 text-[#1b2026] placeholder-[#8c949e] text-xs sm:text-sm focus:outline-none focus:border-[#d7a138] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6d7277] hover:text-[#1b2026]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-[#57606a] mb-6 px-1">
          <div>
            <span>عرض <strong className="text-[#d7a138] font-bold">{filtered.length}</strong> مشروعاً</span>
            {searchQuery && (
              <span className="mr-3 bg-[#d7a138]/10 text-[#b88628] px-2.5 py-1 rounded-md font-medium">
                تصفية حسب: &quot;{searchQuery}&quot;
              </span>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#d7a138] font-bold hover:underline"
            >
              عرض كافة المشاريع
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              id={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#6d7277]/20 hover:border-[#d7a138] transition-all duration-300 flex flex-col group shadow-sm hover:shadow-lg"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                {/* Badge Top */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1b2026] text-xs font-bold px-3 py-1 rounded-lg border border-[#d7a138]/40 shadow-sm">
                  {project.categoryLabel}
                </div>

                {project.status === "in-progress" && (
                  <div className="absolute top-3 left-3 bg-[#d7a138] text-white text-xs font-black px-2.5 py-1 rounded-md shadow">
                    جاري العمل به الآن
                  </div>
                )}

                {/* Area Badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 text-xs text-white bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#d7a138]" />
                  <span className="font-mono">{project.area}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#6d7277] mb-2 font-medium">
                    <span className="text-sm">📍</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#1b2026] group-hover:text-[#d7a138] transition-colors mb-1">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#b88628] font-bold mb-3">
                    المالك: {project.client}
                  </p>

                  <p className="text-xs text-[#57606a] leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Scope of Work */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#6d7277]/10">
                    <span className="text-[11px] font-bold text-[#6d7277] block mb-1">
                      نطاق الأعمال المنفذة:
                    </span>
                    {project.scope.map((item, i) => (
                      <div key={i} className="text-xs text-[#3e454f] flex items-start gap-2">
                        <span className="text-[#d7a138] text-xs font-bold mt-0.5">✨</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom actions */}
                <div className="pt-4 border-t border-[#6d7277]/10 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-[#d7a138] hover:text-[#b88628] flex items-center gap-1.5 cursor-pointer py-1.5 px-3 rounded-lg hover:bg-[#d7a138]/10 transition-colors"
                  >
                    <span>استعراض صور المشروع</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="text-xs text-[#1b2026] bg-[#f5f2eb] hover:bg-[#d7a138] hover:text-white font-bold px-3 py-1.5 rounded-lg border border-[#6d7277]/20 transition-all"
                  >
                    ناقش فكرة مماثلة
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing Project Gallery */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
            <div className="bg-white rounded-3xl border border-[#d7a138]/40 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-right">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 left-6 p-2 rounded-full bg-[#f5f2eb] text-[#1b2026] hover:bg-[#d7a138] hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>

              <div className="text-xs text-[#d7a138] font-bold uppercase mb-1">
                {selectedProject.categoryLabel}
              </div>
              <h2 className="text-2xl font-black text-[#1b2026] mb-2">
                {selectedProject.title}
              </h2>
              <div className="flex flex-wrap gap-4 text-xs text-[#57606a] mb-6">
                <span>المالك: <strong className="text-[#1b2026]">{selectedProject.client}</strong></span>
                <span>الموقع: <strong className="text-[#1b2026]">{selectedProject.location}</strong></span>
                <span>المساحة: <strong className="text-[#d7a138]">{selectedProject.area}</strong></span>
              </div>

              {/* Gallery Photos */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-[#1b2026] mb-3">صور توثيقية للأعمال:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(selectedProject.gallery && selectedProject.gallery.length > 0
                    ? selectedProject.gallery
                    : [selectedProject.image]
                  ).map((imgUrl, idx) => (
                    <div key={idx} className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-[#6d7277]/15">
                      <Image
                        src={imgUrl}
                        alt={`${selectedProject.title} - صورة ${idx + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Scope */}
              <div className="bg-[#fcfaf7] p-4 rounded-2xl border border-[#6d7277]/15 mb-6">
                <h4 className="text-sm font-bold text-[#1b2026] mb-2">بنود التنفيذ:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3e454f]">
                  {selectedProject.scope.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#d7a138] font-bold">✨</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#6d7277]/15">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-xl bg-[#f5f2eb] text-[#1b2026] text-xs font-bold hover:bg-[#eae5dc] transition-colors cursor-pointer"
                >
                  إغلاق النافذة
                </button>
                <Link
                  href={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                  className="px-6 py-2.5 rounded-xl bg-[#d7a138] hover:bg-[#c48f2b] text-white text-xs font-bold transition-all shadow-md"
                >
                  تواصل معنا لمشروع مماثل
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center">جاري تحميل المشاريع...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

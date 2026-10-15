"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { PROJECTS } from "@/data";
import { Project } from "@/types";
import SectionBadge from "@/components/ui/SectionBadge";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectGalleryModal from "@/components/projects/ProjectGalleryModal";
import ProjectFilterBar, { CategoryOption } from "@/components/projects/ProjectFilterBar";

const CATEGORIES: CategoryOption[] = [
  { id: "all", label: "كافة المشاريع", emoji: "🏢" },
  { id: "mega-commercial", label: "معارض ومتاجر كبرى", emoji: "🛋️" },
  { id: "restaurants-cafes", label: "مطاعم وكافيهات", emoji: "🍽️" },
  { id: "industrial-warehouses", label: "مستودعات ومصانع", emoji: "🏗️" },
  { id: "corporate-administrative", label: "مقرات ومكاتب إدارية", emoji: "💼" },
];

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

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
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
  }, [selectedCategory, searchQuery]);

  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <SectionBadge icon={<span>🏆</span>}>
            سجل الإنجازات وسابقة الأعمال
          </SectionBadge>
          <h1 className="text-3xl sm:text-5xl font-black text-[#1b2026] leading-tight">
            مشاريعنا المنفذة عبر مختلف مناطق المملكة
          </h1>
          <p className="mt-4 text-[#57606a] text-sm sm:text-base leading-relaxed">
            استكشف أكثر من 25 صرحاً ومشروعاً تم إنجازها بمساحات تتجاوز 50,000 متر مربع لصالح كبرى العلامات التجارية ورواد الأعمال.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <ProjectFilterBar
          categories={CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery("")}
        />

        {/* Results Counter & Active Filter Badge */}
        <div className="flex items-center justify-between text-xs text-[#57606a] mb-6 px-1">
          <div>
            <span>عرض <strong className="text-[#d7a138] font-bold">{filteredProjects.length}</strong> مشروعاً</span>
            {searchQuery && (
              <span className="mr-3 bg-[#d7a138]/10 text-[#b88628] px-2.5 py-1 rounded-md font-medium">
                تصفية حسب: &quot;{searchQuery}&quot;
              </span>
            )}
          </div>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#d7a138] font-bold hover:underline cursor-pointer"
            >
              عرض كافة المشاريع
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenGallery={setSelectedProject}
            />
          ))}
        </div>

        {/* Modal for viewing Project Gallery */}
        <ProjectGalleryModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-40 text-center font-bold text-[#57606a]">جاري تحميل المشاريع...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}

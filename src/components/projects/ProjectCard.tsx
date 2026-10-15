import Image from "next/image";
import Link from "next/link";
import { Maximize2, ArrowLeft } from "lucide-react";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onOpenGallery: (project: Project) => void;
}

export default function ProjectCard({ project, onOpenGallery }: ProjectCardProps) {
  return (
    <div
      id={project.id}
      className="bg-white rounded-2xl overflow-hidden border border-[#6d7277]/20 hover:border-[#d7a138] transition-all duration-300 flex flex-col group shadow-sm hover:shadow-lg"
    >
      {/* Image Container */}
      <div className="relative h-64 w-full overflow-hidden bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#1b2026] text-xs font-bold px-3 py-1 rounded-lg border border-[#d7a138]/40 shadow-sm">
          {project.categoryLabel}
        </div>

        {/* In-progress status */}
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
                <span className="w-4 h-4 rounded-full bg-[#d7a138]/20 text-[#b88628] flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom actions */}
        <div className="pt-4 border-t border-[#6d7277]/10 flex items-center justify-between">
          <button
            onClick={() => onOpenGallery(project)}
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
  );
}

import Image from "next/image";
import Link from "next/link";
import { X, Check } from "lucide-react";
import { Project } from "@/types";

interface ProjectGalleryModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectGalleryModal({ project, onClose }: ProjectGalleryModalProps) {
  if (!project) return null;

  const images = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.image];

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in">
      <div className="bg-white rounded-3xl border border-[#d7a138]/40 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="إغلاق النافذة"
          className="absolute top-6 left-6 p-2 rounded-full bg-[#f5f2eb] text-[#1b2026] hover:bg-[#d7a138] hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs text-[#d7a138] font-bold uppercase mb-1">
          {project.categoryLabel}
        </div>
        <h2 className="text-2xl font-black text-[#1b2026] mb-2">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-4 text-xs text-[#57606a] mb-6">
          <span>المالك: <strong className="text-[#1b2026]">{project.client}</strong></span>
          <span>الموقع: <strong className="text-[#1b2026]">{project.location}</strong></span>
          <span>المساحة: <strong className="text-[#d7a138]">{project.area}</strong></span>
        </div>

        {/* Gallery Photos */}
        <div className="mb-6">
          <h4 className="text-sm font-bold text-[#1b2026] mb-3">صور توثيقية للأعمال:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((imgUrl, idx) => (
              <div
                key={idx}
                className="relative h-64 rounded-2xl overflow-hidden bg-slate-100 border border-[#6d7277]/15 group"
              >
                <Image
                  src={imgUrl}
                  alt={`${project.title} - صورة ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scope */}
        <div className="bg-[#fcfaf7] p-4 rounded-2xl border border-[#6d7277]/15 mb-6">
          <h4 className="text-sm font-bold text-[#1b2026] mb-2">بنود التنفيذ:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3e454f]">
            {project.scope.map((s, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#d7a138]/20 text-[#b88628] flex items-center justify-center text-[10px] shrink-0 font-bold">
                  ✓
                </span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-[#6d7277]/15">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#f5f2eb] text-[#1b2026] text-xs font-bold hover:bg-[#eae5dc] transition-colors cursor-pointer"
          >
            إغلاق النافذة
          </button>
          <Link
            href={`/contact?project=${encodeURIComponent(project.title)}`}
            className="px-6 py-2.5 rounded-xl bg-[#d7a138] hover:bg-[#c48f2b] text-white text-xs font-bold transition-all shadow-md"
          >
            تواصل معنا لمشروع مماثل
          </Link>
        </div>
      </div>
    </div>
  );
}

import { SERVICES } from "@/data/services";
import { Wrench } from "lucide-react";
import SectionBadge from "@/components/ui/SectionBadge";
import ServiceCard from "@/components/services/ServiceCard";
import TurnkeyFlowDiagram from "@/components/ui/TurnkeyFlowDiagram";

export default function ServicesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#fcfaf7] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mb-16">
        <SectionBadge icon={<Wrench className="w-4 h-4 text-[#d7a138]" />}>
          مجالات الاختصاص والتنفيذ الهندسي
        </SectionBadge>
        <h1 className="text-3xl sm:text-5xl font-black text-[#1b2026] leading-tight">
          خدمات هندسية متكاملة للمقاولات العامة والتشطيب والضيافة
        </h1>
        <p className="mt-4 text-[#57606a] text-base sm:text-lg leading-relaxed">
          نقدم حلولاً هندسية تغطي دورة حياة المشروع كاملة، من الدراسات الميدانية والتأسيس الإنشائي الثقيل، وحتى الديكورات المعمارية الدقيقة وتجهيز المرافق وفق أعلى المعايير.
        </p>
      </div>

      {/* Turnkey Execution Process Blueprint */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <TurnkeyFlowDiagram />
      </div>

      {/* Services List Detailed */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {SERVICES.map((srv, idx) => (
          <ServiceCard key={srv.id} service={srv} index={idx} />
        ))}
      </div>
    </div>
  );
}

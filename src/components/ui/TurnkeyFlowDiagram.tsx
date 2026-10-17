import React from 'react';
import { FileText, Hammer, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

interface Step {
  step: string;
  title: string;
  subtitle: string;
  details: string;
  badge: string;
  icon: React.ReactNode;
}

const STEPS: Step[] = [
  {
    step: '01',
    title: 'الدراسة الهندسية والتراخيص',
    subtitle: 'Permits & Feasibility',
    details: 'فحص الموقع، مراجعة اشتراطات بلدي والدفاع المدني، وإعداد حصر الكميات والمخططات التنفيذية.',
    badge: 'ضمان السلامة والكود',
    icon: <FileText className="w-5 h-5 text-amber-600" />,
  },
  {
    step: '02',
    title: 'التأسيس والإنشاء العظم',
    subtitle: 'Structural Foundation',
    details: 'أعمال الهياكل المعدنية، صب الميزانين، التقسيمات الجدارية، وحلول العزل المائي والحراري المعتمدة.',
    badge: 'صلابة ومتانة هندسية',
    icon: <Hammer className="w-5 h-5 text-amber-700" />,
  },
  {
    step: '03',
    title: 'الكهروميكانيك والتكييف',
    subtitle: 'MEP & Climate Control',
    details: 'تأسيس شبكات الـ HVAC المركزية، لوحات التوزيع الكهربائي، أنظمة الإطفاء، وغرف التبريد التجاري.',
    badge: 'تشغيل صامت واقتصادي',
    icon: <Cpu className="w-5 h-5 text-blue-600" />,
  },
  {
    step: '04',
    title: 'الحرفية الخشبية والتشطيب',
    subtitle: 'Joinery & Luxury Finishes',
    details: 'تصنيع وتفصيل البارات والكاونترات في ورشنا، تركيب الرخام والأرضيات الإيبوكسية والإضاءة الذكية.',
    badge: 'بصمة حصرية لا تُقلد',
    icon: <Sparkles className="w-5 h-5 text-[#d7a138]" />,
  },
  {
    step: '05',
    title: 'التشغيل والتسليم على المفتاح',
    subtitle: 'Commissioning & Handover',
    details: 'معايرة الأنظمة، إنهاء رخصة التشغيل، وتسليم الصرح المعماري جاهزاً فوراً للعمل واستقبال الزبائن.',
    badge: 'راحة بال تامة',
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
  },
];

export default function TurnkeyFlowDiagram() {
  return (
    <div className="relative rounded-3xl bg-white border-2 border-[#d7a138]/30 p-6 sm:p-10 shadow-xl overflow-hidden">
      {/* Background Graphic Blueprint Accent */}
      <div className="absolute inset-0 profile-dots-bg pointer-events-none opacity-20" />
      
      {/* Top Header */}
      <div className="text-right max-w-2xl mb-10 relative z-10">
        <span className="text-xs font-bold text-[#d7a138] uppercase tracking-wider block mb-1">
          رحلة العمل الممنهجة (Turnkey Execution Process)
        </span>
        <h3 className="text-xl sm:text-3xl font-black text-[#1b2026]">
          خمس مراحل هندسية متكاملة لضمان التسليم في الموعد وبأعلى جودة
        </h3>
      </div>

      {/* Steps Flow Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
        {STEPS.map((s, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-between bg-[#fcfaf7] border border-[#6d7277]/20 rounded-2xl p-5 hover:border-[#d7a138] hover:shadow-lg transition-all duration-300 group"
          >
            <div>
              {/* Header inside card: Step number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span
                  data-testid="flow-step-number"
                  className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#d7a138] to-[#b88628] text-white font-black text-xs flex items-center justify-center font-mono shadow-sm group-hover:scale-110 transition-transform"
                >
                  {s.step}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white border border-[#6d7277]/15 flex items-center justify-center shadow-xs">
                  {s.icon}
                </div>
              </div>

              {/* Title & Subtitle */}
              <h4 className="text-sm font-black text-[#1b2026] group-hover:text-[#d7a138] transition-colors leading-snug mb-1">
                {s.title}
              </h4>
              <p className="text-[11px] font-mono text-[#6d7277] mb-3" dir="ltr">
                {s.subtitle}
              </p>

              {/* Details */}
              <p className="text-xs text-[#57606a] leading-relaxed font-normal">
                {s.details}
              </p>
            </div>

            {/* Bottom Badge */}
            <div className="mt-4 pt-3 border-t border-[#6d7277]/10">
              <span className="inline-block text-[10px] font-bold text-[#b88628] bg-[#d7a138]/10 px-2 py-0.5 rounded-md">
                ✓ {s.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

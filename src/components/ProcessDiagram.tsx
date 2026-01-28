import { ArrowRight } from 'lucide-react';
import { FadeInSection } from './FadeInSection';

export function ProcessDiagram() {
  const phases = [
    {
      number: '01',
      title: 'Assess',
      description: 'Deep analysis of your enterprise landscape. Current state mapping. Gap identification.',
    },
    {
      number: '02',
      title: 'Architect',
      description: 'Blueprint precision-engineered solutions. Define technical specifications. Risk mitigation.',
    },
    {
      number: '03',
      title: 'Execute',
      description: 'Build with disciplined methodology. Rigorous quality gates. Continuous validation.',
    },
    {
      number: '04',
      title: 'Optimize',
      description: 'Performance tuning at scale. Ongoing refinement. Sustained excellence.',
    },
  ];

  return (
    <div className="relative">
      {/* Connection line */}
      <div className="hidden lg:block absolute top-[80px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
        {phases.map((phase, index) => (
          <FadeInSection key={index} delay={index * 0.15}>
            <div className="relative group">
              {/* Card */}
              <div className="bg-white border border-black/5 rounded-lg p-8 hover:border-black/15 transition-all duration-500 hover:shadow-lg h-full">
                {/* Number */}
                <div className="text-[64px] font-light text-black/8 leading-none mb-4 group-hover:text-black/12 transition-colors duration-500">
                  {phase.number}
                </div>
                
                {/* Title */}
                <h3 className="text-[24px] tracking-tight mb-3 group-hover:text-black/90 transition-colors">
                  {phase.title}
                </h3>
                
                {/* Description */}
                <p className="text-[14px] leading-relaxed text-black/60">
                  {phase.description}
                </p>
              </div>
              
              {/* Arrow connector (hidden on last item) */}
              {index < phases.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-[76px] z-10">
                  <div className="w-6 h-6 bg-white border border-black/10 rounded-full flex items-center justify-center group-hover:border-black/30 group-hover:scale-110 transition-all duration-500">
                    <ArrowRight className="w-3 h-3 text-black/40 group-hover:text-black/70 transition-colors" />
                  </div>
                </div>
              )}
            </div>
          </FadeInSection>
        ))}
      </div>
      
      {/* Subtle bottom gradient */}
      <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white/50 pointer-events-none" />
    </div>
  );
}

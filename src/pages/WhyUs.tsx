import { FadeInSection } from '../components/FadeInSection';
import { ClientLogos } from '../components/ClientLogos';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function WhyUs() {
  const principles = [
    {
      title: 'Architect-Led',
      description: 'Senior architects own every engagement—from discovery to deployment',
    },
    {
      title: 'Process-First',
      description: 'Business operations mapped before technology selection',
    },
    {
      title: 'Purpose-Built',
      description: 'Scalable systems designed for your team to operate and evolve',
    },
    {
      title: 'Measured Delivery',
      description: 'Defined milestones with transparent reporting at every phase',
    },
    {
      title: 'Activate-Aligned',
      description: 'SAP methodology with agile principles and proven accelerators',
    },
    {
      title: 'Globally Orchestrated',
      description: 'Onshore architects paired with offshore execution teams',
    },
  ];

  const differentiators = [
    { 
      title: 'SAP Discipline',
      descriptor: 'S/4HANA, BTP, and Fiori—architected with precision'
    },
    { 
      title: 'Manufacturing Depth',
      descriptor: 'Production planning, MES integration, shop floor control'
    },
    { 
      title: 'Revenue Clarity',
      descriptor: 'Pricing, rebates, and incentive compensation systems'
    },
    { 
      title: 'Data Continuity',
      descriptor: 'Master data governance and cross-system integrity'
    },
    { 
      title: 'AI-assisted, not AI-powered',
      descriptor: 'Intelligence where it serves—human judgment where it matters'
    },
    { 
      title: 'Process-centric methodology',
      descriptor: 'Business operations mapped before technology selection'
    },
    { 
      title: 'SAP Gold Partner',
      descriptor: 'Certified implementation partner with proven delivery'
    },
    { 
      title: 'Industry accelerators',
      descriptor: 'Pre-built frameworks for manufacturing and distribution'
    },
    { 
      title: 'Agile & waterfall hybrid',
      descriptor: 'Flexible delivery adapted to enterprise constraints'
    },
  ];

  const certifications = [
    { area: 'SAP S/4HANA', level: 'Certified Implementation Partner' },
    { area: 'SAP BTP', level: 'Certified Integration Specialist' },
    { area: 'SAP Vistex', level: 'Authorized Implementation Partner' },
    { area: 'Plex Systems', level: 'Premier Implementation Partner' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Experience matters.
              <br />
              Execution matters more.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              We architect SAP systems with the precision your enterprise demands. 
              Disciplined. Accountable. Built to endure.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <FadeInSection>
            <div className="mb-12 text-center">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-4">
                How we work
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                Six principles that define our delivery model and client partnerships.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {principles.map((principle, index) => (
                <FadeInSection key={index} delay={index * 0.05}>
                  <div className="group bg-white border border-black/5 px-6 py-8 hover:bg-black/[0.01] hover:border-black/10 transition-all cursor-pointer rounded-lg">
                    <div className="h-[160px] flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-black/20 mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-[17px] tracking-tight text-black/90 leading-snug">
                          {principle.title}
                        </h3>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-[13px] leading-relaxed text-black/50">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-12">
                <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-4">
                  What sets us apart
                </h2>
                <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                  We're not generalists. We're SAP-centric consultants with deep expertise 
                  in manufacturing, revenue operations, and enterprise data architecture.
                </p>
              </div>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {differentiators.map((item, index) => (
                <FadeInSection key={index} delay={index * 0.05}>
                  <div className="group bg-white border-r border-black/5 last:border-r-0 px-8 py-10 hover:bg-black/[0.01] transition-all cursor-pointer">
                    <div className="h-[140px] flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-black/20 mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-[16px] tracking-tight text-black/90 leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[13px] leading-relaxed text-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {item.descriptor}
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto mb-16">
            <FadeInSection>
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-16 text-center">
                Our approach
              </h2>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="relative w-full max-w-[500px] mx-auto aspect-square">
                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full border border-black/10 bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-[13px] tracking-[0.15em] uppercase text-black/30 mb-1">Process</div>
                    <div className="text-[15px] text-black/50">Four phases</div>
                  </div>
                </div>

                {/* Top - Alignment */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center w-[140px]">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-black/30 mb-2">01</div>
                  <div className="text-[18px] tracking-tight text-black/90 mb-1">Alignment</div>
                  <div className="text-[13px] text-black/50">Business Intent</div>
                </div>

                {/* Right - Architecture */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 text-center w-[140px]">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-black/30 mb-2">02</div>
                  <div className="text-[18px] tracking-tight text-black/90 mb-1">Architecture</div>
                  <div className="text-[13px] text-black/50">Systems & Governance</div>
                </div>

                {/* Bottom - Execution */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center w-[140px]">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-black/30 mb-2">03</div>
                  <div className="text-[18px] tracking-tight text-black/90 mb-1">Execution</div>
                  <div className="text-[13px] text-black/50">Disciplined Delivery</div>
                </div>

                {/* Left - Endurance */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 text-center w-[140px]">
                  <div className="text-[11px] tracking-[0.15em] uppercase text-black/30 mb-2">04</div>
                  <div className="text-[18px] tracking-tight text-black/90 mb-1">Endurance</div>
                  <div className="text-[13px] text-black/50">Refinement & Stability</div>
                </div>

                {/* Connecting lines - subtle */}
                <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r="160" fill="none" stroke="black" strokeWidth="0.5" opacity="0.1" />
                </svg>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.5}>
            <div className="pt-12 border-t border-black/5">
              <p className="text-[13px] tracking-wider uppercase text-black/40 mb-8 text-center">
                Trusted by global enterprises
              </p>
              <ClientLogos />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-4">
                  Certified expertise
                </h2>
                <p className="text-[17px] leading-relaxed text-black/60">
                  Platform partnerships and certifications that validate our technical depth.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="grid md:grid-cols-4 divide-x divide-black/5">
                  {certifications.map((cert, index) => (
                    <div key={index} className="px-6 py-8 text-center">
                      <div className="text-[14px] tracking-tight text-black/90 mb-2">
                        {cert.area}
                      </div>
                      <div className="text-[12px] text-black/40 leading-relaxed">
                        {cert.level}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FadeInSection>
            <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
              Work with architects who understand enterprise.
            </h2>
            <p className="text-[18px] leading-relaxed text-white/70 mb-10 max-w-2xl mx-auto">
              Let's discuss how we can deliver SAP systems with the precision your business requires.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md hover:bg-white/90 transition-colors text-[15px]"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
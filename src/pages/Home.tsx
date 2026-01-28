import { Link } from 'react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TechnologyLogos } from '../components/TechnologyLogos';
import { ClientLogos } from '../components/ClientLogos';
import { GradientMesh } from '../components/GradientMesh';
import { FadeInSection } from '../components/FadeInSection';
import { CounterAnimation } from '../components/CounterAnimation';

export function Home() {
  const capabilities = [
    {
      title: 'ERP & Core Systems',
      description: 'SAP S/4HANA modernization and stabilization. Purpose-built for scale.',
    },
    {
      title: 'Revenue & Commercial Systems',
      description: 'Order-to-cash optimization with SAP Vistex. Pricing clarity at enterprise scale.',
    },
    {
      title: 'Manufacturing & Operations',
      description: 'Plex ERP and shop-floor automation. Plant-to-enterprise integration done right.',
    },
    {
      title: 'Supply Chain & Logistics',
      description: 'End-to-end supply chain orchestration. SAP IBP, TM, and EWM configured for operational excellence.',
    },
  ];

  const outcomes = [
    'Architect-led delivery',
    'Process before tools',
    'No over-engineering',
    'Clear accountability',
    'SAP-certified consultants',
    'Global delivery capability',
  ];

  const stats = [
    { metric: '200+', label: 'SAP implementations delivered' },
    { metric: '15+', label: 'Years SAP-centric expertise' },
    { metric: '98%', label: 'On-time, on-budget delivery' },
    { metric: '50+', label: 'Enterprise clients globally' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden">
        <GradientMesh />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-[56px] md:text-[72px] lg:text-[84px] leading-[1.1] tracking-tight mb-6">
              SAP consulting.
              <br />
              Done with precision.
            </h1>
            <p className="text-[20px] md:text-[24px] text-black/60 mb-12 tracking-tight">
              Architected for scale. Delivered with discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-md hover:bg-black/90 hover:scale-[1.02] transition-all text-[15px] shadow-lg hover:shadow-xl"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center gap-2 bg-black/5 text-black px-8 py-4 rounded-md hover:bg-black/10 hover:scale-[1.02] transition-all text-[15px]"
              >
                View case studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="py-16 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-10">
              <h2 className="text-[14px] tracking-wider uppercase text-black/40 mb-2">
                Enterprise platforms we architect
              </h2>
            </div>
            <TechnologyLogos />
          </FadeInSection>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
                Trusted by enterprise leaders
              </h2>
              <p className="text-[16px] text-black/60">
                Global organizations that demand precision
              </p>
            </div>
            <ClientLogos />
          </FadeInSection>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                Refined execution for
                <br />
                enterprise outcomes
              </h2>
              <p className="text-[18px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                We architect SAP systems for CIOs and enterprise leaders who need measurable results. 
                No buzzwords. No over-promises. Just disciplined delivery and business-aligned outcomes.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/10 transition-all hover:shadow-lg hover:scale-[1.02] cursor-pointer group">
                  <h3 className="text-[20px] mb-3 tracking-tight group-hover:text-black/90 transition-colors">{capability.title}</h3>
                  <p className="text-[15px] leading-relaxed text-black/60">
                    {capability.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[15px] text-black/80 hover:text-black transition-colors group"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why Us Preview */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <FadeInSection>
              <div className="text-center mb-16">
                <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                  Experience matters.
                  <br />
                  Execution matters more.
                </h2>
                <p className="text-[18px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                  We deliver SAP implementations with the same precision you expect from 
                  your manufacturing floor. Structured. Measured. Accountable.
                </p>
              </div>
            </FadeInSection>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {outcomes.map((outcome, index) => (
                <FadeInSection key={index} delay={index * 0.08}>
                  <div className="flex items-start gap-3 bg-white rounded-lg p-6 border border-black/5 hover:border-black/10 hover:shadow-md transition-all cursor-pointer group">
                    <CheckCircle2 className="w-5 h-5 text-black/60 mt-0.5 flex-shrink-0 group-hover:text-black/80 transition-colors" />
                    <span className="text-[15px] text-black/80 group-hover:text-black transition-colors">{outcome}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>

            <FadeInSection delay={0.5}>
              <div className="text-center">
                <Link
                  to="/why-us"
                  className="inline-flex items-center gap-2 text-[15px] text-black/80 hover:text-black transition-colors"
                >
                  How we work
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                Real enterprises.
                <br />
                Measurable outcomes.
              </h2>
            </div>
          </FadeInSection>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-[40px] md:text-[48px] font-medium tracking-tight mb-2">
                    <CounterAnimation value={stat.metric} />
                  </div>
                  <div className="text-[14px] text-black/60">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <FadeInSection delay={0.1}>
              <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/15 transition-all group cursor-pointer">
                <div className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
                  Manufacturing
                </div>
                <h3 className="text-[22px] mb-3 tracking-tight">
                  Global Manufacturer — SAP + Plex Integration
                </h3>
                <p className="text-[15px] leading-relaxed text-black/60 mb-6">
                  Unified enterprise data across 12 plants. Real-time visibility from shop floor to finance.
                </p>
                <span className="inline-flex items-center gap-2 text-[14px] text-black/70 group-hover:text-black transition-colors">
                  View details
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/15 transition-all group cursor-pointer">
                <div className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
                  Revenue Operations
                </div>
                <h3 className="text-[22px] mb-3 tracking-tight">
                  Revenue Operations — SAP Vistex
                </h3>
                <p className="text-[15px] leading-relaxed text-black/60 mb-6">
                  Pricing governance and incentive management for $2B distribution network.
                </p>
                <span className="inline-flex items-center gap-2 text-[14px] text-black/70 group-hover:text-black transition-colors">
                  View details
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 text-[15px] text-black/80 hover:text-black transition-colors"
              >
                View all case studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <FadeInSection>
            <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
              Let's talk when it matters.
            </h2>
            <p className="text-[18px] leading-relaxed text-white/70 mb-10 max-w-2xl mx-auto">
              Enterprise SAP consulting for leaders who value precision over promises.
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
import { FadeInSection } from '../components/FadeInSection';
import { ClientLogos } from '../components/ClientLogos';
import { TechnologyLogos } from '../components/TechnologyLogos';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const capabilities = [
    {
      title: 'Core Enterprise Systems',
      positioning: 'Resilient ERP architecture for operational scale and clarity.',
      competencies: [
        'S/4HANA implementation & ECC migration',
        'Greenfield, Brownfield, Selective Data Transition',
        'Financial, materials, and production module configuration',
        'HANA optimization & performance engineering',
        'Post-go-live stabilization & continuous tuning',
      ],
    },
    {
      title: 'Revenue Operations',
      positioning: 'Order-to-cash precision for complex pricing structures.',
      competencies: [
        'Vistex pricing, rebate, and chargeback systems',
        'Deal management & channel incentive programs',
        'Revenue recognition & contract lifecycle management',
        'Automated order-to-cash workflows',
        'Commercial analytics & profitability reporting',
      ],
    },
    {
      title: 'Manufacturing Execution',
      positioning: 'Plant-floor data integrated with enterprise workflows.',
      competencies: [
        'Plex ERP for discrete and process manufacturing',
        'Production planning & quality management systems',
        'Shop-floor data collection & MES integration',
        'Plant-to-ERP connectivity (Plex-SAP, MES-ERP)',
        'Real-time production visibility & OEE analytics',
      ],
    },
    {
      title: 'Supply Chain Orchestration',
      positioning: 'Demand planning to last-mile execution at scale.',
      competencies: [
        'Integrated Business Planning (IBP)',
        'Transportation & warehouse management systems',
        'Demand sensing & network optimization',
        'Multi-modal logistics coordination',
        'Inventory accuracy & fulfillment precision',
      ],
    },
    {
      title: 'Customer Systems',
      positioning: 'CRM modernization and legacy platform integration.',
      competencies: [
        'Siebel modernization & API enablement',
        'SAP Customer Experience suite implementation',
        'CRM rationalization & platform migration',
        'Customer master data governance',
        'Service & sales process automation',
      ],
    },
    {
      title: 'Integration Architecture',
      positioning: 'API-first connectivity. Master data continuity assured.',
      competencies: [
        'SAP Business Technology Platform (BTP)',
        'Integration Suite & API management',
        'PI/PO & middleware architecture',
        'Master data governance frameworks',
        'ETL pipelines & data quality engineering',
      ],
    },
    {
      title: 'Intelligence & Automation',
      positioning: 'AI-assisted operations. Process-centric. Human-supervised.',
      competencies: [
        'SAP Joule & AI Business Services integration',
        'Intelligent RPA for transactional workflows',
        'Predictive analytics for maintenance and quality',
        'Demand forecasting & inventory optimization',
        'Conversational AI for SAP self-service',
      ],
    },
    {
      title: 'Consultant Augmentation',
      positioning: 'Platinum-level SAP talent embedded in your teams.',
      competencies: [
        'Solution architects & technical architects',
        'Functional consultants (FI/CO, SD, MM, PP, QM)',
        'ABAP, Fiori, BTP developers',
        'Integration specialists & data architects',
        'Program managers & delivery leadership',
      ],
    },
    {
      title: 'Application Management',
      positioning: 'Operational continuity. SLA-driven support. Proactive monitoring.',
      competencies: [
        'L1, L2, L3 production support',
        'Incident, problem, and change management',
        'System health monitoring & performance tracking',
        'Regulatory compliance & audit readiness',
        'Continuous optimization & enhancement delivery',
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              What we do.
              <br />
              And why it works.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              SAP-centric capabilities designed for enterprise leaders who need clarity, 
              accountability, and business-aligned outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Capability Constellation */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-4">
                How we work
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                Nine core competencies architected for precision and delivered with discipline.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <FadeInSection key={index} delay={index * 0.05}>
                  <div className="group bg-white border border-black/5 px-6 py-8 hover:bg-black/[0.01] hover:border-black/10 transition-all cursor-pointer rounded-lg">
                    <div className="h-[160px] flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] tracking-[0.15em] uppercase text-black/20 mb-4">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-[17px] tracking-tight text-black/90 leading-snug mb-3">
                          {capability.title}
                        </h3>
                        <p className="text-[13px] leading-relaxed text-black/50">
                          {capability.positioning}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-[11px] leading-relaxed text-black/40 space-y-1">
                          {capability.competencies.slice(0, 2).map((comp, i) => (
                            <div key={i}>— {comp}</div>
                          ))}
                          {capability.competencies.length > 2 && (
                            <div className="text-black/30">+ {capability.competencies.length - 2} more</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                Refined execution.
                <br />
                Enterprise-grade outcomes.
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 mb-8">
                Every system we architect is process-centric, data-driven, and built to scale. 
                We don't over-engineer. We deliver what works—measured, structured, and operationally sound.
              </p>
              <p className="text-[17px] leading-relaxed text-black/60">
                Whether you're modernizing SAP S/4HANA, integrating Plex for shop-floor automation, 
                or governing revenue operations with Vistex, we bring the same discipline: 
                clarity first, execution always.
              </p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <div className="mb-16">
              <p className="text-[13px] tracking-wider uppercase text-black/40 mb-8 text-center">
                Enterprise platforms we architect
              </p>
              <TechnologyLogos />
            </div>
          </FadeInSection>
          <FadeInSection delay={0.3}>
            <div className="pt-12 border-t border-black/10">
              <p className="text-[13px] tracking-wider uppercase text-black/40 mb-8 text-center">
                Trusted by global enterprises
              </p>
              <ClientLogos />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                Ready to architect your next SAP system?
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 mb-10">
                Let's discuss your requirements. We respond within one business day.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-md hover:bg-black/90 transition-colors text-[15px]"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}
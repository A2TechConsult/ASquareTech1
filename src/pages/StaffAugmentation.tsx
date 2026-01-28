import { FadeInSection } from '../components/FadeInSection';
import { Link } from 'react-router';
import { ArrowRight, Users, Award, Briefcase, Code, Wrench, CheckCircle2 } from 'lucide-react';

export function StaffAugmentation() {
  const expertiseAreas = [
    {
      icon: Code,
      title: 'SAP Technical Excellence',
      description: 'Platinum-level SAP architects and developers who deliver precision.',
      roles: [
        'SAP Solution Architects & Technical Architects',
        'ABAP, Fiori, UI5 developers',
        'SAP BTP, CAP, and RAP specialists',
        'SAP HANA database experts',
        'Custom development and enhancement delivery',
      ],
    },
    {
      icon: Briefcase,
      title: 'SAP Functional Expertise',
      description: 'Deep domain knowledge across all SAP modules and business processes.',
      roles: [
        'FI/CO (Finance & Controlling) consultants',
        'SD (Sales & Distribution) experts',
        'MM (Materials Management) specialists',
        'PP (Production Planning) and QM (Quality Management)',
        'SCM, IBP, TM, EWM functional leads',
      ],
    },
    {
      icon: Award,
      title: 'Vistex Pricing & Revenue',
      description: 'Certified Vistex experts for complex pricing and incentive programs.',
      roles: [
        'Vistex solution architects',
        'Pricing and rebate configuration specialists',
        'Chargeback and incentive management experts',
        'Vistex-SAP integration consultants',
        'Revenue operations optimization',
      ],
    },
    {
      icon: Wrench,
      title: 'Plex & Rockwell Automation',
      description: 'Manufacturing systems integration. Shop floor to enterprise.',
      roles: [
        'Plex ERP implementation consultants',
        'Rockwell Automation / FactoryTalk experts',
        'MES (Manufacturing Execution Systems) specialists',
        'Plant-floor data integration architects',
        'OEE analytics and real-time reporting',
      ],
    },
    {
      icon: Users,
      title: 'Project Execution & Delivery',
      description: 'Experienced program managers who architect delivery with precision.',
      roles: [
        'SAP Program Managers & PMO leads',
        'Agile delivery managers and Scrum Masters',
        'Change management and OCM specialists',
        'Solution architects and enterprise architects',
        'SAP Activate and hybrid methodology experts',
      ],
    },
    {
      icon: CheckCircle2,
      title: 'Testing, Implementation & Support',
      description: 'Quality assurance and operational continuity. Rigor built in.',
      roles: [
        'SAP test automation engineers (Tricentis, HP ALM)',
        'Functional and integration testing leads',
        'Cutover and go-live specialists',
        'Production support consultants (L2, L3)',
        'Hypercare and stabilization teams',
      ],
    },
  ];

  const engagementModels = [
    {
      title: 'Individual Consultant Placement',
      description: 'Embed platinum-level experts directly into your team for specific roles or skill gaps.',
    },
    {
      title: 'Project-Based Teams',
      description: 'Dedicated consulting pods for PoC delivery, implementations, or rapid enhancements.',
    },
    {
      title: 'Long-Term Augmentation',
      description: 'Extended engagements for ongoing program support, AMS, or continuous optimization.',
    },
    {
      title: 'Hybrid Onsite/Remote',
      description: 'Flexible delivery models with consultants working onsite, remote, or in hybrid mode.',
    },
  ];

  const whyUs = [
    'All consultants are platinum-certified with 10+ years of enterprise SAP experience',
    'Pre-vetted talent with client references and proven delivery track records',
    'Domain-specific expertise in manufacturing, distribution, and enterprise operations',
    'Rapid mobilization—consultants available within 2-4 weeks',
    'No vendor lock-in. Transparent billing. Clear accountability.',
    'Consultants integrate seamlessly with your existing teams and processes',
  ];

  const qualityCommitment = [
    {
      title: 'Rigorous Screening',
      description: 'Multi-stage technical interviews, client reference checks, and domain validation.',
    },
    {
      title: 'Cultural Fit',
      description: 'We assess communication skills, collaboration mindset, and client-centricity.',
    },
    {
      title: 'Continuous Feedback',
      description: 'Regular performance reviews and stakeholder check-ins throughout the engagement.',
    },
    {
      title: 'Knowledge Transfer',
      description: 'Structured documentation and KT to ensure continuity when consultants roll off.',
    },
  ];

  const capabilities = [
    'SAP S/4HANA, ECC, BTP',
    'Vistex Pricing & Rebates',
    'Plex & Rockwell Automation',
    'SAP Fiori, UI5, CAP',
    'ABAP, OData, CDS Views',
    'SAP Datasphere, BW/4HANA',
    'Integration Suite, PI/PO',
    'Testing & Quality Assurance',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6">
              <Users className="w-4 h-4 text-black/70" />
              <span className="text-[13px] tracking-wider uppercase text-black/60">
                Staff Augmentation
              </span>
            </div>
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Platinum expertise.
              <br />
              On demand.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              SAP-certified consultants, Vistex specialists, and Plex integration experts. 
              Embedded in your team. Delivering precision from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                Our consultant expertise
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                Platinum-level talent across SAP, Vistex, Plex, and enterprise integration platforms. 
                Architect-grade. Delivery-focused.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/15 transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg border border-black/5">
                      <area.icon className="w-6 h-6 text-black/70" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[22px] tracking-tight mb-2">{area.title}</h3>
                      <p className="text-[15px] leading-relaxed text-black/60">
                        {area.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {area.roles.map((role, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-black/70">
                        <span className="text-black/30 mt-1.5">—</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
                Flexible engagement models
              </h2>
              <p className="text-[16px] leading-relaxed text-black/60">
                Tailored to your project needs, timeline, and delivery preferences.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((model, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-black/5">
                  <h3 className="text-[20px] tracking-tight mb-3">{model.title}</h3>
                  <p className="text-[15px] leading-relaxed text-black/60">
                    {model.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-8 text-center">
                Why clients choose our consultants
              </h2>
              <div className="space-y-4">
                {whyUs.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 bg-black/[0.02] rounded-lg p-5 border border-black/5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-black/40 mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] leading-relaxed text-black/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                Our quality commitment
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                Every consultant is rigorously vetted, performance-tracked, and held to the highest 
                standards of delivery excellence.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {qualityCommitment.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 border border-black/5 text-center">
                  <h3 className="text-[18px] tracking-tight mb-3">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-black/60">
                    {item.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Tags */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-[28px] md:text-[36px] leading-[1.2] tracking-tight mb-4">
                Technical capabilities
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-black/[0.02] rounded-md border border-black/5 text-[14px] text-black/70"
                >
                  {capability}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                How it works
              </h2>
              <div className="space-y-8 text-left mt-12">
                {[
                  {
                    step: '1',
                    title: 'Define Requirements',
                    description: 'Share your skill gaps, project scope, and timeline. We listen.',
                  },
                  {
                    step: '2',
                    title: 'Consultant Matching',
                    description: 'We present 2-3 pre-vetted consultants with relevant experience and client references.',
                  },
                  {
                    step: '3',
                    title: 'Technical Interviews',
                    description: 'Your team interviews candidates to assess technical fit and cultural alignment.',
                  },
                  {
                    step: '4',
                    title: 'Rapid Onboarding',
                    description: 'Selected consultants onboard within 2-4 weeks and integrate seamlessly with your team.',
                  },
                ].map((item, index) => (
                  <FadeInSection key={index} delay={index * 0.1}>
                    <div className="flex items-start gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-[18px] font-medium">
                        {item.step}
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-[22px] tracking-tight mb-2 group-hover:text-black/80 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[16px] leading-relaxed text-black/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                Need SAP talent now?
              </h2>
              <p className="text-[17px] leading-relaxed text-white/70 mb-10">
                Let's discuss your skill gaps and timeline. We'll match you with platinum-level 
                consultants who can deliver from day one.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md hover:bg-white/90 transition-colors text-[15px]"
              >
                Request consultants
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

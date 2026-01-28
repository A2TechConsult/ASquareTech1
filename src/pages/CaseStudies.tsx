import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function CaseStudies() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Manufacturing', 'Revenue Operations', 'ERP', 'Integration'];

  const caseStudies = [
    {
      slug: 'global-manufacturing',
      category: 'Manufacturing',
      title: 'Global Manufacturer — SAP S/4HANA + Plex Integration',
      description:
        'Unified enterprise data across 12 manufacturing plants spanning North America and Asia. Real-time visibility from shop floor to finance with seamless S/4HANA and Plex MES integration. Implemented SAP PP, QM, and MM modules with bi-directional data flow.',
      outcomes: [
        '12 plants unified',
        'Real-time data flow',
        '40% faster reporting',
        '2,500+ users',
      ],
      tags: ['Manufacturing', 'Integration', 'ERP'],
    },
    {
      slug: 'vistex-pricing',
      category: 'Revenue Operations',
      title: 'Distribution Network — SAP Vistex Pricing & Rebates',
      description:
        'Pricing governance and incentive management for $2B distribution network. Complex rebate structures automated and auditable. Integrated with SAP SD for order-to-cash process. Chargeback processing, accrual management, and incentive settlement.',
      outcomes: [
        '$2B network governed',
        '99.8% pricing accuracy',
        'Automated rebate settlement',
        '60% faster invoice processing',
      ],
      tags: ['Revenue Operations', 'SAP Vistex'],
    },
    {
      slug: 's4hana-migration',
      category: 'ERP',
      title: 'Industrial Manufacturer — SAP ECC to S/4HANA Migration',
      description:
        'Greenfield S/4HANA implementation for multi-site industrial manufacturer. Zero downtime cutover with data continuity across FI/CO, MM, SD, PP, and QM modules. SAP HANA database migration and custom ABAP code remediation. Implemented SAP Fiori apps for user experience.',
      outcomes: [
        'Zero downtime cutover',
        'Full data continuity',
        'On-time delivery (14 months)',
        '1,200+ users trained',
      ],
      tags: ['Manufacturing', 'ERP', 'S/4HANA'],
    },
    {
      slug: 'crm-modernization',
      category: 'Integration',
      title: 'CRM Modernization — Siebel to SAP C/4HANA Integration',
      description:
        'Modernized legacy Siebel CRM with SAP C/4HANA Sales Cloud integration. Customer master data rationalization and order-to-cash streamlining. Implemented SAP BTP for middleware integration. Real-time customer data synchronization.',
      outcomes: [
        'Legacy modernized',
        'Customer data unified',
        '50% faster quote-to-order',
        'API-first architecture',
      ],
      tags: ['Integration', 'CRM', 'Revenue Operations'],
    },
    {
      slug: 'plex-integration',
      category: 'Manufacturing',
      title: 'Automotive Supplier — Plex MES + SAP Shop Floor Integration',
      description:
        'Plant-floor automation integrated with enterprise SAP S/4HANA. Quality tracking, inventory management, and production scheduling unified across 8 manufacturing sites. Real-time labor tracking, material consumption, and OEE analytics.',
      outcomes: [
        '8 plants automated',
        'Real-time quality tracking',
        '25% inventory reduction',
        '15% OEE improvement',
      ],
      tags: ['Manufacturing', 'Integration', 'Plex'],
    },
    {
      slug: 'order-to-cash',
      category: 'Revenue Operations',
      title: 'CPG Distributor — Order-to-Cash Transformation',
      description:
        'Order-to-cash optimization for complex multi-tier distribution network. Pricing, rebates, chargebacks, and invoicing streamlined across 50+ distribution centers. SAP SD, Vistex, and BTP integration for end-to-end automation.',
      outcomes: [
        '50+ locations',
        'Pricing clarity achieved',
        '99.5% invoice accuracy',
        '30% DSO reduction',
      ],
      tags: ['Revenue Operations', 'Integration'],
    },
    {
      slug: 'system-consolidation',
      category: 'Integration',
      title: 'Enterprise System Consolidation — Multi-ERP to S/4HANA',
      description:
        'Consolidated 5 disparate ERP systems (SAP ECC, Oracle, JDE) into unified SAP S/4HANA platform. Master data governance with SAP MDG. Complex data migration with SAP Migration Cockpit and LSMW. Post-merger integration for global manufacturing conglomerate.',
      outcomes: [
        '5 ERPs consolidated',
        'Master data governed',
        '10,000+ users migrated',
        'Zero data loss',
      ],
      tags: ['ERP', 'Integration', 'Manufacturing'],
    },
  ];

  const filteredStudies =
    selectedFilter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.tags.includes(selectedFilter));

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Real enterprises.
              <br />
              Measurable outcomes.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              SAP implementations delivered with precision. Each engagement measured 
              by business outcomes, not technical outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-black/5 sticky top-20 bg-white z-40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[13px] tracking-wider uppercase text-black/40 mr-2">
              Industry / Module / Region
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-md text-[14px] transition-colors ${
                  selectedFilter === filter
                    ? 'bg-black text-white'
                    : 'bg-black/5 text-black/70 hover:bg-black/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {filteredStudies.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[15px] text-black/50">No results yet</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredStudies.map((study, index) => (
                <Link
                  key={index}
                  to={`/case-studies/${study.slug}`}
                  className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/15 transition-all group cursor-pointer block"
                >
                  <div className="text-[13px] tracking-wider uppercase text-black/40 mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-[24px] mb-4 tracking-tight">{study.title}</h3>
                  <p className="text-[15px] leading-relaxed text-black/60 mb-6">
                    {study.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <span
                        key={outcomeIndex}
                        className="text-[13px] px-3 py-1.5 bg-white rounded-md border border-black/5 text-black/70"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-[14px] text-black/70 group-hover:text-black transition-colors">
                    View details
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
            Your enterprise. Your outcome.
          </h2>
          <p className="text-[17px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Every SAP system we architect is outcome-oriented and business-aligned. 
            Let's discuss what success looks like for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-md hover:bg-black/90 transition-colors text-[15px]"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
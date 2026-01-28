import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function SystemConsolidation() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-[14px] text-black/60 hover:text-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All case studies
          </Link>
          <div className="text-[13px] tracking-wider uppercase text-black/40 mb-6">
            Integration
          </div>
          <h1 className="text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
            Enterprise System Consolidation — Multi-ERP to S/4HANA
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Consolidated 5 disparate ERP systems (SAP ECC, Oracle, JDE) into unified SAP S/4HANA platform. 
            Master data governance and complex migration for global manufacturing conglomerate.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              ERP
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Integration
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Manufacturing
            </span>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="py-16 bg-black/[0.02]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-[13px] tracking-wider uppercase text-black/40 mb-8">
            Key Outcomes
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">5</div>
              <div className="text-[15px] text-black/60">ERPs consolidated to single platform</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">10,000+</div>
              <div className="text-[15px] text-black/60">Users migrated and trained</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Zero</div>
              <div className="text-[15px] text-black/60">Data loss during migration</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Governed</div>
              <div className="text-[15px] text-black/60">Master data centrally managed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-[28px] tracking-tight mb-6">The Challenge</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              A global industrial conglomerate with $6B in revenue operated five distinct ERP systems following 
              a decade of acquisitions — two SAP ECC instances, Oracle E-Business Suite, JD Edwards, and a 
              legacy AS/400 system. Each business unit maintained independent chart of accounts, material master 
              numbering, and customer databases. Consolidated financial reporting required manual reconciliation 
              across systems, taking 21 days to close the books.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Cross-business unit transactions were nearly impossible — inter-company sales, shared services 
              allocations, and transfer pricing required complex interfaces and offline spreadsheet reconciliation. 
              Supply chain teams lacked visibility into inventory across the enterprise, resulting in simultaneous 
              stock-outs and excess inventory. The IT organization supported five separate infrastructure 
              environments with duplicative licensing costs.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The CEO mandate: consolidate all ERP systems onto SAP S/4HANA within 24 months. Harmonize master 
              data, establish global business processes, and enable real-time consolidated reporting. Execute 
              without disrupting operations across 35 manufacturing plants and 18 countries. The complexity 
              was unprecedented — different industries, regulations, currencies, and business models all requiring 
              accommodation within a single platform.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 bg-black/[0.02]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-[28px] tracking-tight mb-6">Our Approach</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">SAP S/4HANA Global Template Design</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Designed global S/4HANA template with standardized FI/CO chart of accounts, procurement 
                processes, and manufacturing execution frameworks. Configured for multi-country requirements — 
                localization for 18 countries, multi-currency transactions, and statutory reporting. Established 
                modular design allowing business-unit-specific extensions while preserving core standardization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Master Data Governance Foundation</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented SAP Master Data Governance (MDG) for centralized control of customer, vendor, and 
                material masters. Rationalized 850,000 material records down to 420,000 through deduplication 
                and standardization. Established data stewardship organization with defined roles, approval 
                workflows, and quality metrics. Migrated chart of accounts with mapping from five legacy COAs 
                to unified global structure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Phased Migration Strategy</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed in five waves over 20 months — pilot with smallest business unit, then sequential 
                rollout by business unit complexity and interdependencies. Built migration factory with 
                dedicated tools, templates, and SWAT teams for data extraction, transformation, validation, 
                and load (ETL). Leveraged SAP Data Services, Migration Cockpit, and custom ABAP programs 
                for complex data objects.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Integration & Cutover Execution</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Managed transitional integration landscape — inter-company transactions between migrated 
                and non-migrated business units using SAP BTP middleware. Executed weekend cutovers with 
                production freeze minimized through pre-posting of transactional data. Comprehensive cutover 
                playbooks with 500+ tasks, defined owners, and automated status tracking. Post-cutover 
                hypercare with 24/7 support and defined escalation procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Change Management & Training</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed comprehensive change management program spanning organizational readiness, communications, 
                and training. Role-based training curriculum with simulation environment for hands-on practice. 
                Established global process owner network for ongoing governance and continuous improvement. 
                Executive steering committee with monthly reviews and issue escalation authority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-[13px] tracking-wider uppercase text-black/40 mb-6">
            Technologies Implemented
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP S/4HANA</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP MDG</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Data Services</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Migration Cockpit</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP Fiori</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Embedded Analytics</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">GRC Controls</div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-black/[0.02]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12">
          <h2 className="text-[28px] tracking-tight mb-6">Business Impact</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Financial close cycle compressed from 21 days to 7 days with automated consolidation and 
              elimination entries. Real-time P&L visibility replaced month-end surprises — executive team 
              gained unprecedented insight into business performance with embedded analytics dashboards. 
              Audit efficiency improved dramatically with unified data model and controls framework.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Supply chain optimization unlocked through enterprise-wide inventory visibility. Cross-business 
              unit material sharing reduced total inventory by 18% ($47M working capital improvement) while 
              simultaneously improving service levels. Transfer pricing and inter-company transactions automated 
              through standard SAP functionality, eliminating manual reconciliation spreadsheets.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              IT infrastructure costs reduced $8M annually through decommissioning of four legacy ERP platforms 
              and associated infrastructure. The unified S/4HANA platform positioned the organization for 
              enterprise-wide initiatives previously infeasible — including global shared services, advanced 
              planning optimization (IBP), and AI-driven procurement using SAP Ariba. The business now operates 
              as integrated enterprise rather than portfolio of independent companies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Complex consolidation. Executed with discipline.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Post-merger integration and multi-ERP consolidation requires precision planning, master data 
            governance, and phased execution. Let's discuss your system consolidation strategy.
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

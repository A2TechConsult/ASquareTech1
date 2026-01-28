import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function GlobalManufacturing() {
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
            Manufacturing
          </div>
          <h1 className="text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
            Global Manufacturer — SAP S/4HANA + Plex Integration
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Unified enterprise data across 12 manufacturing plants spanning North America and Asia. 
            Real-time visibility from shop floor to finance with seamless S/4HANA and Plex MES integration.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Manufacturing
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Integration
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              ERP
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
              <div className="text-[36px] tracking-tight mb-2">12</div>
              <div className="text-[15px] text-black/60">Plants unified across two continents</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">40%</div>
              <div className="text-[15px] text-black/60">Faster reporting cycle time</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">2,500+</div>
              <div className="text-[15px] text-black/60">Users onboarded and trained</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Real-time</div>
              <div className="text-[15px] text-black/60">Shop floor to finance data flow</div>
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
              A Fortune 500 industrial manufacturer operated 12 manufacturing facilities across North America 
              and Asia, each running disconnected Plex MES systems with manual data reconciliation to legacy 
              SAP ECC. Financial close took 14 days, production planning was reactive rather than predictive, 
              and quality incidents lacked traceability across the supply chain.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              The business required real-time visibility from shop floor operations to executive dashboards, 
              unified master data governance, and automated material consumption tracking for accurate costing. 
              Legacy integration middleware was fragile and required constant manual intervention.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The mandate: migrate to SAP S/4HANA while preserving Plex MES investments, establish bi-directional 
              data flow, and eliminate manual reconciliation — all without disrupting production across global operations.
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
              <h3 className="text-[18px] mb-3">SAP S/4HANA Foundation</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed greenfield SAP S/4HANA with PP, QM, MM, and FI/CO modules configured for 
                discrete manufacturing. Established SAP HANA as the single source of truth for financial 
                and operational data. Implemented SAP Fiori applications for intuitive user experience 
                across plant managers, production supervisors, and finance teams.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Plex MES Integration Architecture</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Built API-first integration layer using SAP BTP Integration Suite with real-time data 
                synchronization. Production orders, material movements, quality notifications, and labor 
                transactions flow bi-directionally between Plex and S/4HANA. Implemented idempotent message 
                processing with error handling and automated retry logic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Master Data Governance</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Rationalized material masters, BOMs, and routing data across all 12 plants using SAP MDG. 
                Established data stewardship model with defined ownership and approval workflows. Migrated 
                over 250,000 material masters with zero data loss and full audit trail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Phased Rollout Strategy</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed pilot at North American facility first, refined integration patterns, then rolled 
                out to remaining sites in three waves. Hypercare support with 24/7 coverage during each cutover. 
                Comprehensive training program with role-based learning paths for 2,500+ end users.
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
              <div className="text-[14px] text-black/80">Plex MES</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP MDG</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP PP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP QM</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP MM</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP Fiori</div>
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
              Financial close cycle reduced from 14 days to 5 days with automated shop floor data 
              integration. Production planning teams now operate with real-time material availability 
              and capacity visibility across all 12 plants, enabling cross-plant load balancing and 
              optimized inventory positioning.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Quality traceability achieved end-to-end — from raw material lot to finished goods shipment. 
              Recall scenarios that previously took weeks to investigate now resolve in hours with full 
              genealogy tracking through integrated S/4HANA and Plex systems.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The platform now serves as the foundation for predictive maintenance initiatives, advanced 
              planning and optimization (APO), and AI-driven demand forecasting — all leveraging the unified 
              data architecture established through this implementation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Ready to architect your SAP ecosystem?
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Every manufacturing environment is unique. Let's discuss how we can bring precision 
            and discipline to your S/4HANA and MES integration.
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

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function PlexIntegration() {
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
            Automotive Supplier — Plex MES + SAP Shop Floor Integration
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Plant-floor automation integrated with enterprise SAP S/4HANA. Quality tracking, inventory 
            management, and production scheduling unified across 8 manufacturing sites.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Manufacturing
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Integration
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Plex
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
              <div className="text-[36px] tracking-tight mb-2">8</div>
              <div className="text-[15px] text-black/60">Plants with automated shop floor</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">25%</div>
              <div className="text-[15px] text-black/60">Inventory reduction achieved</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">15%</div>
              <div className="text-[15px] text-black/60">OEE improvement delivered</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Real-time</div>
              <div className="text-[15px] text-black/60">Quality and production tracking</div>
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
              A Tier 1 automotive supplier operating 8 plants across North America faced production 
              visibility gaps and inventory accuracy issues. SAP ECC managed planning and financials, 
              but shop floor operations ran on paper-based travelers and spreadsheets. Quality defects 
              discovered during final inspection lacked traceability to specific production runs, 
              operators, or material lots.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Labor tracking was manual with time cards submitted weekly, making accurate job costing 
              impossible until month-end close. Inventory transactions posted to SAP in batches at end 
              of shift, creating temporary phantom inventory and inaccurate material availability for 
              production planning. OEE calculations existed only in plant manager spreadsheets with 
              inconsistent methodologies across sites.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              Customer requirements for serialized traceability, real-time production monitoring, and 
              statistical process control (SPC) drove the need for modern MES deployment. The business 
              selected Plex MES for shop floor execution while preserving SAP S/4HANA as enterprise ERP. 
              Seamless integration between Plex and SAP was non-negotiable to eliminate dual-entry and 
              ensure data consistency.
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
              <h3 className="text-[18px] mb-3">Plex MES Deployment</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented Plex Manufacturing Cloud across all 8 plants with modules for production 
                execution, quality management, inventory control, and equipment maintenance. Configured 
                barcode scanning for material movements, labor transactions, and quality inspections. 
                Established electronic work instructions with visual aids and revision control. Deployed 
                operator dashboards displaying real-time OEE, quality metrics, and production targets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">SAP S/4HANA Integration Architecture</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Built bi-directional integration using SAP BTP and Plex Cloud APIs. Production orders 
                released from SAP PP flow to Plex for shop floor execution. Material consumption, labor 
                confirmations, and quality results post back to SAP in real-time. Inventory movements 
                synchronized with SAP MM for accurate stock levels. Implemented queue-based messaging 
                with error handling and automated reconciliation reporting.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Quality & Traceability Framework</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Established serialized tracking with genealogy from raw material receipt through finished 
                goods shipment. SPC charts embedded in operator workstations with automatic out-of-spec 
                alerts. Non-conformance management with root cause analysis workflows and corrective action 
                tracking. Quality data synchronized with SAP QM for comprehensive analytics and customer 
                reporting requirements (PPAP, APQP).
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Labor & Costing Integration</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Real-time labor tracking with employee badge scanning at workstation login. Direct and 
                indirect labor hours captured by cost center and production order. Data flows to SAP for 
                accurate job costing and variance analysis. Eliminated manual time cards and month-end 
                accruals — finance teams gained real-time cost visibility for improved decision-making.
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
              <div className="text-[14px] text-black/80">Plex MES</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP S/4HANA</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
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
              <div className="text-[14px] text-black/80">Barcode Scanning</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SPC/OEE Analytics</div>
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
              Inventory accuracy improved from 87% to 99.4% through real-time transaction posting and 
              elimination of end-of-shift batches. This accuracy enabled production planners to confidently 
              reduce safety stock levels by 25% without risking line-down scenarios — freeing $3.2M in 
              working capital.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              OEE increased 15% through visibility-driven continuous improvement. Downtime tracking identified 
              equipment maintenance opportunities and changeover optimization. Quality defect rates dropped 
              18% through real-time SPC monitoring and faster corrective action response. Customer quality 
              complaints reduced by 40% year-over-year.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              Finance teams gained unprecedented cost visibility with real-time labor and material consumption 
              data flowing from Plex to SAP. Month-end close accelerated by 3 days through elimination of 
              manual accruals and reconciliation. The integrated platform positioned the organization for 
              Industry 4.0 initiatives including predictive maintenance, digital twin modeling, and AI-driven 
              yield optimization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Shop floor to top floor. Unified.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Whether you're implementing Plex, Parsec, or other MES platforms, seamless SAP integration 
            is critical for operational excellence. Let's discuss your manufacturing execution strategy.
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

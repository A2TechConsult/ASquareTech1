import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function OrderToCash() {
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
            Revenue Operations
          </div>
          <h1 className="text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
            CPG Distributor — Order-to-Cash Transformation
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Order-to-cash optimization for complex multi-tier distribution network. Pricing, rebates, 
            chargebacks, and invoicing streamlined across 50+ distribution centers.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Revenue Operations
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Integration
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
              <div className="text-[36px] tracking-tight mb-2">50+</div>
              <div className="text-[15px] text-black/60">Distribution centers unified</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">99.5%</div>
              <div className="text-[15px] text-black/60">Invoice accuracy achieved</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">30%</div>
              <div className="text-[15px] text-black/60">DSO reduction delivered</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Clarity</div>
              <div className="text-[15px] text-black/60">Pricing governance established</div>
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
              A national consumer goods distributor managing $3.5B in annual revenue operated 50+ distribution 
              centers with fragmented order-to-cash processes. Each DC ran independent SAP ECC instances with 
              inconsistent pricing configurations. Customer contract terms, promotional allowances, and rebate 
              agreements were managed locally, creating pricing discrepancies and invoice disputes.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              The complexity was compounded by three-tier distribution model — manufacturer to master distributor 
              to sub-distributor to end customer. Each tier had unique pricing rules, rebate structures, and 
              chargeback requirements. Finance teams spent weeks reconciling inter-company transactions and 
              accruing rebate liabilities with limited accuracy.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              Days sales outstanding (DSO) averaged 52 days due to invoice disputes and delayed chargeback 
              processing. Customer service handled 200+ pricing inquiries daily. The business required unified 
              order-to-cash platform with centralized pricing governance, automated rebate management, and 
              streamlined chargeback processing to support aggressive growth targets.
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
              <h3 className="text-[18px] mb-3">SAP S/4HANA Central Hub Deployment</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented centralized SAP S/4HANA hub with SD, FI/CO, and extended warehouse management 
                (EWM) for 50+ distribution centers. Standardized pricing procedures across all locations with 
                centralized condition master data. Established advanced available-to-promise (aATP) for 
                multi-location order promising and fulfillment optimization.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">SAP Vistex Pricing & Rebate Platform</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed Vistex PPR across all distribution tiers with sophisticated agreement structures 
                supporting volume rebates, growth incentives, promotional allowances, and buy-and-bill 
                chargebacks. Automated accrual calculations with real-time liability visibility. Contract 
                lifecycle management with workflow approvals and automated renewal processes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Chargeback Automation & EDI Integration</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Built end-to-end chargeback workflow integrated with manufacturer EDI systems (867 transactions). 
                Automated claim ingestion, matching against contract terms, and settlement processing. Implemented 
                machine learning model for claim validation and fraud detection. Reduced chargeback cycle time 
                from 21 days to 3 days while improving accuracy and audit compliance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Customer Portal & Self-Service</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Launched SAP Commerce Cloud-based customer portal for order entry, shipment tracking, invoice 
                access, and rebate statement visibility. Integrated with SAP SD for real-time product availability 
                and pricing. Enabled customers to submit chargeback claims and track status — reducing inbound 
                customer service calls by 35%.
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
              <div className="text-[14px] text-black/80">SAP Vistex</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP Commerce</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">EDI 867/810</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">aATP Engine</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Machine Learning</div>
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
              Invoice accuracy improved from 92% to 99.5%, eliminating the vast majority of customer disputes 
              and credit memo requests. Pricing inquiries to customer service dropped 65% through transparent 
              portal access to contract terms and real-time pricing. This freed customer service capacity for 
              strategic account management and consultative selling.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              DSO reduced from 52 days to 36 days through faster invoicing, reduced disputes, and accelerated 
              chargeback settlement. This improvement unlocked $18M in working capital for business reinvestment. 
              Rebate accrual accuracy increased to 99.2%, eliminating audit findings and improving financial 
              statement confidence.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The unified platform enabled rapid onboarding of new distribution centers through acquisition — 
              integration timeline compressed from 9 months to 6 weeks. Finance teams gained real-time revenue 
              visibility with embedded analytics dashboards showing order backlog, fulfillment performance, and 
              margin by customer segment. The architecture positioned the organization for AI-driven demand 
              forecasting, dynamic pricing optimization, and predictive credit risk management.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Revenue operations. Refined.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Whether you're optimizing pricing, streamlining rebates, or accelerating cash collection, 
            SAP order-to-cash excellence requires precision architecture and disciplined execution.
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

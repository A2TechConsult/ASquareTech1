import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function VistexPricing() {
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
            Distribution Network — SAP Vistex Pricing & Rebates
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Pricing governance and incentive management for $2B distribution network. Complex rebate 
            structures automated and auditable with integrated SAP SD order-to-cash processes.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Revenue Operations
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              SAP Vistex
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
              <div className="text-[36px] tracking-tight mb-2">$2B</div>
              <div className="text-[15px] text-black/60">Distribution network governed</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">99.8%</div>
              <div className="text-[15px] text-black/60">Pricing accuracy achieved</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">60%</div>
              <div className="text-[15px] text-black/60">Faster invoice processing</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Automated</div>
              <div className="text-[15px] text-black/60">Rebate settlement and accruals</div>
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
              A pharmaceutical distributor managing $2B in annual revenue faced pricing chaos across a 
              three-tier distribution model. Contract pricing, volume rebates, promotional allowances, 
              and chargebacks were managed in spreadsheets and disparate systems. Invoice disputes consumed 
              significant finance team bandwidth, and rebate accrual accuracy was questioned during every audit cycle.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              The complexity stemmed from multiple rebate agreement types — growth incentives, market share 
              bonuses, formulary compliance rebates, and buy-and-bill chargebacks — each with unique calculation 
              logic and settlement timelines. SAP SD pricing conditions alone could not handle the sophisticated 
              incentive structures required by manufacturer contracts.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The business required a governed pricing engine that could automate rebate calculations, provide 
              real-time accrual visibility, ensure audit compliance, and integrate seamlessly with SAP ECC 
              order-to-cash processes.
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
              <h3 className="text-[18px] mb-3">SAP Vistex Pricing & Rebate Management</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented SAP Vistex Pricing, Promotions, and Rebates (PPR) solution integrated with 
                SAP SD. Configured 12 distinct rebate agreement types with automated calculation engines 
                for volume-based, growth-based, and compliance-based incentives. Real-time pricing determination 
                at order entry with automated accrual postings to FI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Chargeback Processing Automation</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Built end-to-end chargeback workflow — from claim submission through validation, matching, 
                and settlement. Integration with EDI 867 transactions for automated claim ingestion. Implemented 
                tolerance-based auto-approval logic with exception routing for manual review. Reduced chargeback 
                processing time from 15 days to 48 hours.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Contract Lifecycle Management</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Established Vistex Contract Management module for centralized rebate agreement governance. 
                Workflow-driven contract creation, approval, and amendment processes. Automated contract 
                expiration alerts and renewal workflows. Full audit trail with version control for regulatory 
                compliance and dispute resolution.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Analytics & Reporting Foundation</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed SAP BusinessObjects dashboards for pricing analytics, rebate accrual visibility, and 
                settlement tracking. Finance teams gained real-time visibility into rebate liabilities by agreement, 
                customer, and time period. Sales operations equipped with contract utilization analytics to optimize 
                incentive program design.
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
              <div className="text-[14px] text-black/80">SAP Vistex</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP SD</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP FI/CO</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">EDI 867</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">BusinessObjects</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Workflow Engine</div>
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
              Pricing accuracy improved from 94% to 99.8%, eliminating invoice disputes and customer 
              dissatisfaction. Finance team bandwidth previously spent on manual rebate calculations 
              was redirected to strategic pricing analytics and program optimization. Audit findings 
              related to rebate accrual estimates dropped to zero.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Chargeback processing time compressed from 15 days to under 48 hours with automated claim 
              matching and settlement. This improved working capital management and strengthened manufacturer 
              relationships by accelerating payment cycles.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The platform enabled sophisticated incentive program design previously infeasible with manual 
              processes — including tiered growth bonuses, formulary adherence rebates, and market share 
              incentives. Sales teams now leverage pricing analytics to negotiate optimal manufacturer contracts, 
              directly improving gross margin by 2.3 percentage points.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Complex pricing. Simplified.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Whether you're managing distributor rebates, promotional pricing, or chargeback programs, 
            SAP Vistex delivers the governance and automation enterprise revenue teams require.
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

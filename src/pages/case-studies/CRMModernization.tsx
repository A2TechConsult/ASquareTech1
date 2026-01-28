import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function CRMModernization() {
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
            CRM Modernization — Siebel to SAP C/4HANA Integration
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Modernized legacy Siebel CRM with SAP C/4HANA Sales Cloud integration. Customer master 
            data rationalization and order-to-cash streamlining with real-time synchronization.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Integration
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              CRM
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Revenue Operations
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
              <div className="text-[36px] tracking-tight mb-2">50%</div>
              <div className="text-[15px] text-black/60">Faster quote-to-order cycle</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Unified</div>
              <div className="text-[15px] text-black/60">Customer master data across systems</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">Real-time</div>
              <div className="text-[15px] text-black/60">Customer data synchronization</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">API-first</div>
              <div className="text-[15px] text-black/60">Integration architecture established</div>
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
              A B2B manufacturer with $800M annual revenue operated Oracle Siebel CRM for sales force 
              automation while SAP ECC handled order management and fulfillment. Customer master data 
              existed in both systems with manual reconciliation required weekly. Quote-to-order handoff 
              involved re-keying data between Siebel and SAP, introducing errors and delays.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Sales teams lacked real-time visibility into inventory availability, pricing, and order 
              status. Customer service representatives toggled between three systems to answer basic 
              customer inquiries. The business recognized Siebel as unsustainable long-term but could 
              not afford wholesale CRM replacement given recent investments in custom Siebel configurations.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The strategy: modernize gradually by integrating Siebel with SAP C/4HANA Sales Cloud for 
              net-new opportunities while maintaining Siebel for legacy accounts during transition period. 
              Establish unified customer master with SAP as system of record. Enable real-time quote-to-order 
              flow without manual intervention.
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
              <h3 className="text-[18px] mb-3">SAP C/4HANA Sales Cloud Deployment</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented SAP Sales Cloud for opportunity management, account planning, and mobile sales 
                enablement. Configured product catalog synchronized with SAP ECC material masters. Established 
                pricing integration leveraging SAP condition types for real-time quote accuracy. Deployed 
                mobile app for field sales teams with offline capability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Customer Master Data Rationalization</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Analyzed 45,000 customer records across Siebel and SAP ECC to identify duplicates and 
                inconsistencies. Implemented SAP Master Data Governance (MDG) for customer master with 
                workflow-driven approval processes. Established SAP as golden source with real-time 
                synchronization to Siebel and C/4HANA. Achieved 98% match rate for customer reconciliation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">API-First Integration Architecture</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Built integration layer on SAP BTP Integration Suite connecting Siebel, C/4HANA, and SAP ECC. 
                RESTful APIs for quote-to-order conversion with automated data validation. Event-driven 
                architecture for real-time updates — order confirmations, shipment notifications, and invoice 
                generation flow automatically to sales teams. Idempotent message handling with retry logic.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Phased Migration Strategy</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Launched C/4HANA for new customer acquisition while maintaining Siebel for existing accounts. 
                Migrated strategic accounts from Siebel to C/4HANA in quarterly waves based on sales territory. 
                Dual-system support with integrated reporting spanning both CRM platforms. Decommissioned 
                Siebel after 18-month transition period with zero customer disruption.
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
              <div className="text-[14px] text-black/80">SAP C/4HANA</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP MDG</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Oracle Siebel</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP SD</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">RESTful APIs</div>
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
              Quote-to-order cycle time reduced from 5 days to 2.5 days through automated data flow and 
              elimination of manual re-keying. Order accuracy improved to 99.2% from 94%, significantly 
              reducing customer service inquiries related to incorrect shipments or pricing discrepancies.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              Sales teams gained real-time inventory visibility directly within C/4HANA mobile app, enabling 
              accurate delivery commitments during customer meetings. Customer master data reconciliation 
              eliminated — weekly data steward meetings no longer required. Single source of truth established 
              with SAP MDG reducing compliance risk.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The API-first integration architecture positioned the organization for future innovations 
              including e-commerce integration, customer self-service portals, and AI-driven sales insights. 
              Siebel decommissioning delivered $400K annual savings in licensing and maintenance costs while 
              modernizing user experience for 150-person sales organization.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Modernize legacy systems. Methodically.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Whether you're migrating from Siebel, Salesforce, or legacy CRM platforms, SAP C/4HANA 
            integration requires precision architecture and disciplined execution.
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

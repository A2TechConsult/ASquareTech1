import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function S4HANAMigration() {
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
            ERP Transformation
          </div>
          <h1 className="text-[44px] md:text-[56px] leading-[1.1] tracking-tight mb-6">
            Industrial Manufacturer — SAP ECC to S/4HANA Migration
          </h1>
          <p className="text-[18px] leading-relaxed text-black/60">
            Greenfield S/4HANA implementation for multi-site industrial manufacturer. Zero downtime 
            cutover with full data continuity across FI/CO, MM, SD, PP, and QM modules.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              Manufacturing
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              ERP
            </span>
            <span className="px-4 py-2 bg-black/5 rounded-md text-[14px] text-black/70">
              S/4HANA
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
              <div className="text-[36px] tracking-tight mb-2">Zero</div>
              <div className="text-[15px] text-black/60">Downtime cutover execution</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">14 months</div>
              <div className="text-[15px] text-black/60">On-time project delivery</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">1,200+</div>
              <div className="text-[15px] text-black/60">Users trained and onboarded</div>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <div className="text-[36px] tracking-tight mb-2">100%</div>
              <div className="text-[15px] text-black/60">Data continuity maintained</div>
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
              A $1.2B industrial equipment manufacturer operated SAP ECC 6.0 for 15 years with extensive 
              customization — over 450 custom ABAP programs, heavily modified standard transactions, and 
              complex integration with MES, WMS, and legacy CRM systems. SAP announced ECC mainstream 
              maintenance end dates, forcing the business to commit to S/4HANA migration.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              The challenge was not simply technical migration but business transformation. Legacy processes 
              embedded in custom code needed re-engineering to leverage S/4HANA's simplified data model and 
              embedded analytics. The business could not tolerate extended downtime during cutover — 24/7 
              manufacturing operations required near-zero production disruption.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              Additionally, the organization wanted to modernize user experience with SAP Fiori, establish 
              real-time reporting with embedded BW/4HANA, and position for future innovations including 
              predictive maintenance and advanced planning optimization.
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
              <h3 className="text-[18px] mb-3">Greenfield S/4HANA Design</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Elected greenfield implementation approach to leverage simplified data model and eliminate 
                technical debt. Conducted fit-gap analysis across all modules — FI/CO, MM, SD, PP, QM — to 
                identify where standard S/4HANA functionality could replace custom code. Re-engineered 47 
                business processes to align with SAP best practices while preserving competitive differentiators.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Custom Code Remediation</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Analyzed 450+ custom ABAP programs using SAP Readiness Check and Custom Code Migration app. 
                Retired 60% of custom programs by adopting S/4HANA standard functionality. Remediated remaining 
                code for SAP HANA database compatibility. Migrated user exits and BADIs to BRF+ and BAdI 
                framework for maintainability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Data Migration Strategy</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Leveraged SAP Migration Cockpit for master data and open documents. Built custom migration 
                programs using LSMW for complex data objects. Executed three full mock cutovers to validate 
                data quality, migration timing, and reconciliation procedures. Achieved 100% data accuracy 
                with zero financial discrepancies post-cutover.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">Zero Downtime Cutover</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Implemented phased cutover strategy with dual-run validation. Financial close executed in 
                parallel on ECC and S/4HANA for Month -1 to validate accuracy. Weekend cutover with 
                production freeze limited to 8 hours. Post-cutover hypercare team provided 24/7 support 
                for 30 days with defined escalation procedures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-black/5">
              <h3 className="text-[18px] mb-3">User Experience Modernization</h3>
              <p className="text-[15px] leading-relaxed text-black/70">
                Deployed 35 SAP Fiori applications tailored to role-based personas — plant managers, 
                production supervisors, procurement teams, and finance analysts. Implemented SAP Fiori 
                Launchpad with custom tile configurations. Comprehensive training program with simulation 
                environment for hands-on practice before go-live.
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
              <div className="text-[14px] text-black/80">SAP HANA</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP Fiori</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">SAP BTP</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Migration Cockpit</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">ABAP on HANA</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">BRF+</div>
            </div>
            <div className="text-center p-4 bg-black/[0.02] rounded-lg border border-black/5">
              <div className="text-[14px] text-black/80">Embedded Analytics</div>
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
              Cutover executed flawlessly with only 8 hours of production freeze. Manufacturing operations 
              resumed Monday morning with zero critical incidents. Financial close for Month 1 post-migration 
              completed on schedule with full reconciliation to legacy ECC baseline.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70 mb-4">
              System performance improved dramatically — month-end reporting cycles that previously took 
              14 hours now complete in 2 hours leveraging SAP HANA in-memory computing. Finance teams gained 
              real-time P&L visibility with embedded analytics, eliminating manual consolidation spreadsheets.
            </p>
            <p className="text-[16px] leading-relaxed text-black/70">
              The simplified data model and modern UX foundation enabled rapid deployment of subsequent 
              innovations — predictive maintenance using SAP Asset Intelligence Network, advanced planning 
              with Integrated Business Planning (IBP), and supplier collaboration through SAP Ariba integration. 
              The platform is now positioned for AI-driven insights and process automation previously infeasible 
              on legacy ECC architecture.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
            Your S/4HANA migration. Done right.
          </h2>
          <p className="text-[16px] leading-relaxed text-black/60 mb-10 max-w-2xl mx-auto">
            Whether greenfield or brownfield, your S/4HANA transformation requires precision planning 
            and disciplined execution. Let's discuss your migration strategy.
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

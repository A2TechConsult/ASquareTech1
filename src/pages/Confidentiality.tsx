export function Confidentiality() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Confidentiality
            </h1>
            <p className="text-[17px] leading-relaxed text-black/60">
              Data protection and confidentiality commitments
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Overview */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Our Commitment</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                ASquared Technologies understands the critical importance of confidentiality in enterprise 
                SAP consulting. We are committed to protecting the confidential information of our clients, 
                partners, and stakeholders.
              </p>
              <p className="text-[15px] leading-relaxed text-black/70">
                This page outlines our general approach to confidentiality. Specific engagements are 
                governed by executed Non-Disclosure Agreements (NDAs) and Master Services Agreements (MSAs).
              </p>
            </div>

            {/* Definition */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Confidential Information</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                Confidential Information includes, but is not limited to:
              </p>
              <ul className="space-y-2">
                {[
                  'Business strategies, plans, and financial information',
                  'Technical data, system architectures, and integration designs',
                  'SAP configurations, custom code, and proprietary workflows',
                  'Customer data, pricing structures, and commercial terms',
                  'Trade secrets, intellectual property, and know-how',
                  'Information marked or identified as confidential',
                  'Any information that would reasonably be considered confidential',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Obligations */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Our Confidentiality Obligations</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                We commit to:
              </p>
              <ul className="space-y-2">
                {[
                  'Maintain strict confidentiality of all client information',
                  'Use confidential information solely for the purpose of delivering services',
                  'Limit access to confidential information on a need-to-know basis',
                  'Implement appropriate technical and organizational security measures',
                  'Not disclose confidential information to third parties without consent',
                  'Return or destroy confidential information upon request or contract termination',
                  'Ensure all consultants and subcontractors are bound by confidentiality obligations',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Security Measures */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Security Measures</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                We employ industry-standard security measures to protect confidential information:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Technical Safeguards</h3>
                  <ul className="space-y-2">
                    {[
                      'Encrypted data transmission and storage',
                      'Multi-factor authentication and access controls',
                      'Regular security audits and vulnerability assessments',
                      'Secure development and deployment practices',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-[14px] text-black/70">
                        <span className="text-black/30 mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Organizational Safeguards</h3>
                  <ul className="space-y-2">
                    {[
                      'Background checks for all consulting personnel',
                      'Mandatory confidentiality training and awareness programs',
                      'Clear data classification and handling procedures',
                      'Incident response and breach notification protocols',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-[14px] text-black/70">
                        <span className="text-black/30 mt-1">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Exceptions */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Permitted Disclosures</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                Confidential information may be disclosed only when:
              </p>
              <ul className="space-y-2">
                {[
                  'Required by law, court order, or government authority',
                  'Information becomes publicly available through no fault of ours',
                  'Information was independently developed without use of confidential data',
                  'Written consent is provided by the disclosing party',
                  'Disclosure is necessary to enforce our legal rights',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Handling */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Data Handling Practices</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Storage and Retention</h3>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    Client data is stored on secure, encrypted systems with access restricted to authorized 
                    personnel. Data is retained only as long as necessary for service delivery or as required 
                    by contractual obligations and applicable law.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Data Disposal</h3>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    Upon contract completion or client request, confidential information is securely 
                    destroyed or returned, using certified data destruction methods for digital media 
                    and secure shredding for physical documents.
                  </p>
                </div>
              </div>
            </div>

            {/* Subcontractors */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Subcontractors and Third Parties</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                When we engage subcontractors or third-party service providers:
              </p>
              <ul className="space-y-2">
                {[
                  'We require written confidentiality agreements prior to engagement',
                  'Access to client data is granted only with explicit client approval',
                  'Subcontractors are subject to the same confidentiality standards',
                  'We maintain oversight and accountability for all third-party activities',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Breach Response */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Breach Response</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                In the event of a suspected or actual confidentiality breach, we will promptly investigate, 
                notify affected parties, and take corrective action in accordance with our incident response 
                procedures and applicable legal requirements.
              </p>
            </div>

            {/* Duration */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Duration of Obligations</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                Our confidentiality obligations survive the termination of any engagement and continue 
                indefinitely, or as specified in executed agreements.
              </p>
            </div>

            {/* Compliance */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Regulatory Compliance</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                We comply with applicable data protection regulations, including GDPR, CCPA, and 
                industry-specific requirements such as SOC 2, ISO 27001 standards where applicable.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-black/5">
              <h2 className="text-[28px] tracking-tight mb-4">Questions or Concerns</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                For confidentiality-related inquiries or to report a concern:
              </p>
              <div className="space-y-2 text-[15px] text-black/70">
                <p><span className="text-black/50">Email:</span> security@a2integrators.com</p>
                <p><span className="text-black/50">Address:</span> ASquared Technologies, San Francisco, CA</p>
              </div>
              <p className="text-[14px] text-black/50 mt-6">
                Note: This page provides general information. Specific confidentiality terms for 
                consulting engagements are governed by executed NDAs and service agreements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

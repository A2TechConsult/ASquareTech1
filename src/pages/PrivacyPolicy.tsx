export function PrivacyPolicy() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Privacy Policy
            </h1>
            <p className="text-[17px] leading-relaxed text-black/60">
              Last updated: January 16, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Introduction */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Introduction</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                ASquared Technologies ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website or engage our services.
              </p>
              <p className="text-[15px] leading-relaxed text-black/70">
                We process personal data in accordance with applicable data protection laws, including 
                GDPR and CCPA where applicable.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Personal Information</h3>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    We may collect personal information that you voluntarily provide when contacting us, 
                    including: name, email address, company name, phone number, and inquiry details.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Usage Data</h3>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    We automatically collect certain information about your device and how you interact 
                    with our website, including: IP address, browser type, pages visited, time spent, 
                    and referring URLs.
                  </p>
                </div>
                <div>
                  <h3 className="text-[18px] tracking-tight mb-2 text-black/90">Cookies and Tracking</h3>
                  <p className="text-[15px] leading-relaxed text-black/70">
                    We use cookies and similar tracking technologies to enhance user experience and 
                    analyze website performance. See our Cookie Policy for details.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">How We Use Your Information</h2>
              <ul className="space-y-2">
                {[
                  'To respond to your inquiries and provide requested information',
                  'To deliver and improve our consulting services',
                  'To send periodic updates about our services (with your consent)',
                  'To analyze website usage and optimize user experience',
                  'To comply with legal obligations and protect our rights',
                  'To prevent fraud and maintain security',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Data Sharing and Disclosure</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                We do not sell or rent your personal information. We may share your data only in the following circumstances:
              </p>
              <ul className="space-y-2">
                {[
                  'With service providers who assist in our operations (subject to confidentiality agreements)',
                  'When required by law or to respond to legal processes',
                  'To protect our rights, privacy, safety, or property',
                  'In connection with a merger, acquisition, or sale of assets (with notice)',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Data Security</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction. However, 
                no method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Your Rights</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="space-y-2">
                {[
                  'Access: Request a copy of your personal data',
                  'Correction: Request correction of inaccurate data',
                  'Deletion: Request deletion of your data',
                  'Portability: Request transfer of your data',
                  'Objection: Object to processing of your data',
                  'Withdrawal: Withdraw consent at any time',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed text-black/70 mt-4">
                To exercise these rights, contact us at <span className="text-black">privacy@a2integrators.com</span>
              </p>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Data Retention</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                We retain personal information only as long as necessary to fulfill the purposes outlined 
                in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </div>

            {/* International Transfers */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">International Data Transfers</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                Your information may be transferred to and processed in countries other than your country 
                of residence. We ensure appropriate safeguards are in place for such transfers.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Children's Privacy</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                Our services are not directed to individuals under 18. We do not knowingly collect 
                personal information from children.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Changes to This Policy</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                We may update this Privacy Policy periodically. Changes will be posted on this page 
                with an updated revision date. Continued use of our website constitutes acceptance 
                of any changes.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-black/5">
              <h2 className="text-[28px] tracking-tight mb-4">Contact Us</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                If you have questions about this Privacy Policy or our data practices, contact us:
              </p>
              <div className="space-y-2 text-[15px] text-black/70">
                <p><span className="text-black/50">Email:</span> privacy@a2integrators.com</p>
                <p><span className="text-black/50">Address:</span> ASquared Technologies, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

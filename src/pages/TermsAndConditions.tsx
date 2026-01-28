export function TermsAndConditions() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Terms & Conditions
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
            {/* Acceptance of Terms */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Acceptance of Terms</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                By accessing and using this website, you accept and agree to be bound by these Terms and 
                Conditions. If you do not agree to these terms, please do not use this website.
              </p>
            </div>

            {/* Use of Website */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Use of Website</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                This website is provided for informational purposes regarding our SAP consulting services. 
                You agree to use this website only for lawful purposes and in accordance with these terms.
              </p>
              <p className="text-[15px] leading-relaxed text-black/70 font-medium mb-2">You agree not to:</p>
              <ul className="space-y-2">
                {[
                  'Use the website in any way that violates applicable laws or regulations',
                  'Attempt to gain unauthorized access to any portion of the website',
                  'Interfere with or disrupt the website or servers',
                  'Transmit viruses, malware, or other harmful code',
                  'Copy, reproduce, or redistribute website content without permission',
                  'Impersonate ASquared Technologies or misrepresent your affiliation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Intellectual Property Rights</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                All content on this website, including text, graphics, logos, images, and software, 
                is the property of ASquared Technologies and is protected by intellectual property laws.
              </p>
              <p className="text-[15px] leading-relaxed text-black/70">
                SAP, S/4HANA, Vistex, Plex, Siebel, and other mentioned trademarks are the property 
                of their respective owners. All references are for informational purposes only.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Consulting Services</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                Information about our SAP consulting services on this website is for general informational 
                purposes. Actual services are subject to separate written agreements.
              </p>
              <p className="text-[15px] leading-relaxed text-black/70">
                Any engagement of our services will be governed by a formal Statement of Work (SOW) 
                or Master Services Agreement (MSA), which will supersede any information on this website.
              </p>
            </div>

            {/* Accuracy of Information */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Accuracy of Information</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                While we strive to ensure accuracy, we make no warranties regarding the completeness, 
                reliability, or accuracy of information on this website. Content may be updated without notice.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Third-Party Links</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                Our website may contain links to third-party websites. We are not responsible for the 
                content, privacy policies, or practices of third-party sites. Access third-party links 
                at your own risk.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Limitation of Liability</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                To the fullest extent permitted by law, ASquared Technologies shall not be liable for any:
              </p>
              <ul className="space-y-2">
                {[
                  'Indirect, incidental, special, or consequential damages',
                  'Loss of profits, revenue, data, or business opportunities',
                  'Damages arising from use or inability to use this website',
                  'Errors, omissions, or inaccuracies in website content',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-[15px] text-black/70">
                    <span className="text-black/30 mt-1.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Indemnification</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                You agree to indemnify and hold harmless ASquared Technologies from any claims, losses, 
                liabilities, and expenses arising from your use of this website or violation of these terms.
              </p>
            </div>

            {/* Confidentiality */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Confidentiality</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                Any information you submit through this website may be subject to our Privacy Policy. 
                For engagement-specific confidentiality terms, refer to executed NDAs or service agreements.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Governing Law</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                These Terms and Conditions are governed by the laws of the State of California, USA, 
                without regard to conflict of law provisions. Any disputes shall be resolved in the 
                courts of San Francisco County, California.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Severability</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                If any provision of these terms is found to be unenforceable, the remaining provisions 
                shall remain in full force and effect.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-[28px] tracking-tight mb-4">Changes to Terms</h2>
              <p className="text-[15px] leading-relaxed text-black/70">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be 
                effective immediately upon posting. Continued use of the website constitutes acceptance 
                of modified terms.
              </p>
            </div>

            {/* Contact */}
            <div className="pt-8 border-t border-black/5">
              <h2 className="text-[28px] tracking-tight mb-4">Contact Us</h2>
              <p className="text-[15px] leading-relaxed text-black/70 mb-4">
                For questions regarding these Terms and Conditions:
              </p>
              <div className="space-y-2 text-[15px] text-black/70">
                <p><span className="text-black/50">Email:</span> legal@a2integrators.com</p>
                <p><span className="text-black/50">Address:</span> ASquared Technologies, San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

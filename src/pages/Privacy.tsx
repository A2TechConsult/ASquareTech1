import { Shield, Lock, FileCheck, Search, Globe, Scale, Database, FileText, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { FadeInSection } from '../components/FadeInSection';

export function Privacy() {
  const quickNav = [
    {
      title: 'Security',
      description: 'How we protect your data with enterprise-grade safeguards',
      icon: Shield,
      href: '#security',
    },
    {
      title: 'Privacy',
      description: 'Our commitment to global data privacy compliance',
      icon: Lock,
      href: '#privacy',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
                Privacy & Security
              </h1>
              <p className="text-2xl font-light text-gray-600">
                We keep your data private, safe, and secure
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-6">
            {quickNav.map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <a
                  href={item.href}
                  className="group block p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-light tracking-tight text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base font-light text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY Section */}
      <section id="security" className="py-32 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="mb-16">
              <h2 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
                Security
              </h2>
              <p className="text-2xl font-light text-gray-900 mb-4">
                At ASquared Technologies, we are committed to keeping our customers' data secure
              </p>
              <p className="text-lg font-light text-gray-600 leading-relaxed">
                We employ rigorous security measures at the organizational, architectural, and operational 
                levels to ensure that your data, applications, and infrastructure remain safe.
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {/* Organizational Security */}
            <FadeInSection delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Organizational Security
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  All ASquared Technologies employees receive security, privacy, and compliance training on 
                  their first day of employment. Though the extent of involvement may vary by role, security 
                  is everybody's responsibility at ASquared Technologies. This commitment to security extends 
                  to our executives. The ASquared Technologies Security Council, a cross-functional group of 
                  executives spanning the enterprise, shapes our security programs, drives executive alignment 
                  across our organization, and ensures that security awareness and initiatives permeate 
                  throughout our organization.
                </p>
              </div>
            </FadeInSection>

            {/* Data Encryption */}
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Data Encryption
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  ASquared Technologies encrypts sensitive customer data before it's persisted in a database. 
                  We use the Advanced Encryption Standard (AES) algorithm with a key size of 256 bits. 
                  Transport Layer Security (TLS) protects user access via the internet, helping to secure 
                  network traffic from passive eavesdropping, active tampering, or message forgery.
                </p>
              </div>
            </FadeInSection>

            {/* Application Security */}
            <FadeInSection delay={0.3}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Application Security
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  ASquared Technologies has implemented an enterprise Secure Software Development Life Cycle (SDLC) 
                  to help ensure the continued security of ASquared Technologies applications. This program includes 
                  an in-depth security risk assessment and review of ASquared Technologies features, as well as both 
                  static and dynamic source code analyses, all of which are performed to help integrate enterprise 
                  security into the development lifecycle. The development process is further enhanced by application 
                  security training for developers and penetration testing of the application.
                </p>
              </div>
            </FadeInSection>

            {/* Vulnerability Assessments */}
            <FadeInSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Search className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Vulnerability Assessments
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-8">
                  ASquared Technologies contracts with third-party expert firms to conduct independent internal 
                  and external network, system, and application vulnerability assessments.
                </p>

                {/* Application */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  <h4 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                    Application
                  </h4>
                  <p className="text-base font-light text-gray-600 leading-relaxed mb-4">
                    We contract with a leading third-party security firm to perform an application-level 
                    security vulnerability assessment of our web application annually. The firm performs 
                    testing procedures to identify standard and advanced web application security vulnerabilities, 
                    for example:
                  </p>
                  <ul className="space-y-2 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Security weaknesses associated with Cross-site request forgery (CSRF)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Improper input handling (such as cross-site scripting, SQL injection, XML injection, and cross-site flashing)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Weak-session management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Data validation flaws and data model constraint inconsistencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Insufficient authentication or authorization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>HTTP response splitting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Misuse of SSL/TLS</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Use of unsafe HTTP methods</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Misuse of cryptography</span>
                    </li>
                  </ul>
                </div>

                {/* Network */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  <h4 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                    Network
                  </h4>
                  <p className="text-base font-light text-gray-600 leading-relaxed">
                    External vulnerability assessments scan all internet-facing assets (including: firewalls, 
                    routers, and web servers) for potential weaknesses that could allow unauthorized access to 
                    the network. An authenticated internal vulnerability network and system assessment is performed 
                    to identify potential weaknesses and inconsistencies with general system security policies.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* PRIVACY Section */}
      <section id="privacy" className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="mb-16">
              <h2 className="text-5xl font-light tracking-tight text-gray-900 mb-6">
                Privacy
              </h2>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {/* Global Data Privacy */}
            <FadeInSection delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Global Data Privacy
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  ASquared Technologies demonstrates compliance with international privacy regulations by maintaining 
                  a comprehensive global data protection program that contains technical and organizational safeguards 
                  designed to prevent unauthorized access to and use or disclosure of customer data.
                </p>
              </div>
            </FadeInSection>

            {/* GDPR */}
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Scale className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    General Data Protection Regulation (GDPR)
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  On May 25, 2018, the GDPR significantly changed the European data privacy landscape. The GDPR 
                  harmonized the patchwork of data protection laws in Europe. ASquared Technologies is confident 
                  that we can process our customers' personal data in alignment with the GDPR.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-4">
                  Some highlights of how ASquared Technologies's robust privacy and security practices support 
                  GDPR compliance include:
                </p>
                <ul className="space-y-3 text-lg font-light text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Recurring role-based employee training on security and privacy practices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Well-developed processes to capture Privacy Impact Assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Offering data transfer mechanisms to legalize transfers of personal data outside of the European Economic Area</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Maintaining records of processing activities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Privacy by Design and Privacy by Default is integrated deeply into all ASquared Technologies Services</span>
                  </li>
                </ul>
                <p className="text-lg font-light text-gray-600 leading-relaxed mt-6">
                  ASquared Technologies continues to monitor guidance that EU supervisory authorities issue to ensure 
                  that our compliance program remains up-to-date.
                </p>
              </div>
            </FadeInSection>

            {/* Data Processing Relationship */}
            <FadeInSection delay={0.3}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Database className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Data Processing Relationship
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  Our customers serve as the data controller while ASquared Technologies is the data processor. 
                  This means that you have full control of the data entered into services, as well as all setup 
                  and configurations.
                </p>
              </div>
            </FadeInSection>

            {/* Purpose for Data Processing */}
            <FadeInSection delay={0.4}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Purpose for Data Processing
                  </h3>
                </div>

                {/* Contractual Obligations */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  <h4 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                    For fulfillment of contractual obligations (Art. 6 para. 1b of the GDPR)
                  </h4>
                  <p className="text-base font-light text-gray-600 leading-relaxed">
                    Data is processed in order to provide and receive services in the context of carrying out our 
                    contracts with our clients and suppliers or to carry out pre-contractual measures that occur as 
                    part of a request. The purposes of data processing are primarily in compliance with the specific 
                    services provided or received. You can find more specific details about the purposes of data 
                    processing in the relevant contract documents and terms and conditions.
                  </p>
                </div>

                {/* Balancing Interests */}
                <div className="bg-gray-50 rounded-2xl p-8 space-y-4">
                  <h4 className="text-2xl font-light tracking-tight text-gray-900 mb-4">
                    In the context of balancing interests (Art. 6 para. 1f of the GDPR)
                  </h4>
                  <p className="text-base font-light text-gray-600 leading-relaxed mb-4">
                    Where required, we process your data beyond the actual fulfillment of the contract for the 
                    purposes of the legitimate interests pursued by us or a third party. Examples include:
                  </p>
                  <ul className="space-y-2 text-base font-light text-gray-600">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Reviewing and optimizing procedures for needs assessment for the purpose of direct customer discussions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Asserting legal claims and defense in legal disputes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Guarantee of our company's IT security and IT operation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Prevention and clarification of crimes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Measures for site security (e.g. access controls)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Measures for business management and further development of services and products</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Risk control</span>
                    </li>
                  </ul>
                  <p className="text-base font-light text-gray-600 leading-relaxed mt-4">
                    We also obtain personal data from publicly available sources.
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Data Transfer Mechanisms */}
            <FadeInSection delay={0.5}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Data Transfer Mechanisms
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  ASquared Technologies offers customers that operate inside of the European Union with GDPR compliant 
                  data transfer mechanisms. ASquared Technologies's Data Processing Agreement (DPA) includes the European 
                  Commission's Standard Contractual Clauses (SCC), which enable the transfer of personal data from the 
                  European Economic Area to the United States.
                </p>
              </div>
            </FadeInSection>

            {/* How Long Will Your Data Be Stored */}
            <FadeInSection delay={0.6}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    How Long Will Your Data Be Stored?
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  We will process and store your personal data for as long as it is necessary in order to fulfill our 
                  contractual and statutory obligations. It should be noted here that our business relationship is a 
                  long-term obligation, which is set up on the basis of periods of years.
                </p>
                <p className="text-lg font-light text-gray-600 leading-relaxed">
                  If the data is no longer required in order to fulfill contractual or statutory obligations, it is 
                  deleted, unless its further processing is required – for a limited time – for fulfilling obligations 
                  to preserve records according to commercial and tax law.
                </p>
              </div>
            </FadeInSection>

            {/* Data Subject Request */}
            <FadeInSection delay={0.7}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <FileCheck className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-light tracking-tight text-gray-900">
                    Data Subject Request
                  </h3>
                </div>
                <p className="text-lg font-light text-gray-600 leading-relaxed mb-6">
                  You can make a GDPR data request by filling out our request form.
                </p>
                <Link
                  to="/gdpr-request"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 rounded-full text-base font-light text-gray-900 hover:border-gray-400 hover:bg-gray-50 transition-all"
                >
                  Submit GDPR Request
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeInSection>
            <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-6">
              Questions about our privacy practices?
            </h2>
            <p className="text-lg font-light text-gray-600 mb-8">
              Our team is here to help. Reach out anytime.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 rounded-full text-base font-light text-gray-900 hover:border-gray-400 hover:bg-white transition-all"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

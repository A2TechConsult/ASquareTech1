import { FadeInSection } from '../components/FadeInSection';
import { Link } from 'react-router';
import { ArrowRight, Brain, Database, Sparkles, Cpu, Network, Zap } from 'lucide-react';

export function AICapabilities() {
  const capabilities = [
    {
      icon: Brain,
      title: 'AI-Powered Decision Intelligence',
      description: 'Architected AI systems that augment human decision-making with precision.',
      details: [
        'SAP Joule integration for conversational ERP workflows',
        'Predictive analytics for demand forecasting and inventory optimization',
        'AI-assisted procurement and supplier risk management',
        'Intelligent document processing and invoice automation',
      ],
    },
    {
      icon: Sparkles,
      title: 'Agentic AI & Autonomous Systems',
      description: 'Self-directed AI agents that execute complex business workflows with minimal supervision.',
      details: [
        'Agentic workflows for order-to-cash and procure-to-pay automation',
        'Multi-agent orchestration for supply chain optimization',
        'Autonomous exception handling and intelligent escalation',
        'Reinforcement learning for process improvement',
      ],
    },
    {
      icon: Database,
      title: 'RAG & Knowledge Systems',
      description: 'Retrieval-Augmented Generation for enterprise knowledge retrieval at scale.',
      details: [
        'Enterprise RAG systems for SAP documentation and SOPs',
        'Context-aware chatbots with SAP data integration',
        'Semantic search across unstructured enterprise data',
        'Vector databases for real-time knowledge retrieval',
      ],
    },
    {
      icon: Cpu,
      title: 'Salesforce Einstein & CRM AI',
      description: 'Customer intelligence and predictive engagement powered by Einstein AI.',
      details: [
        'Einstein GPT for personalized customer interactions',
        'Predictive lead scoring and opportunity forecasting',
        'Next-best-action recommendations for sales teams',
        'Sentiment analysis and customer churn prediction',
      ],
    },
    {
      icon: Network,
      title: 'Data Platforms & Infrastructure',
      description: 'Modern data architecture designed for AI workloads and enterprise scale.',
      details: [
        'Databricks lakehouse architecture and MLOps pipelines',
        'SAP Datasphere integration for unified analytics',
        'Data lake design and governance (Azure, AWS, Snowflake)',
        'Real-time streaming data pipelines and event processing',
      ],
    },
    {
      icon: Zap,
      title: 'Machine Learning Engineering',
      description: 'Production-grade ML systems built for reliability and performance.',
      details: [
        'Predictive maintenance using sensor data and time-series analysis',
        'Quality defect detection with computer vision',
        'Natural language processing for contract and policy analysis',
        'AutoML and model lifecycle management',
      ],
    },
  ];

  const platforms = [
    'SAP Joule',
    'Salesforce Einstein',
    'Databricks',
    'Azure OpenAI',
    'AWS Bedrock',
    'Snowflake',
    'SAP Datasphere',
    'LangChain',
  ];

  const deliveryApproach = [
    {
      title: 'Strategic Assessment',
      description: 'Identify high-value AI use cases aligned to business outcomes. No over-engineering.',
    },
    {
      title: 'Data Readiness',
      description: 'Assess data quality, governance, and infrastructure required for AI deployment.',
    },
    {
      title: 'Proof of Concept',
      description: 'Rapid PoC delivery to validate technical feasibility and business impact.',
    },
    {
      title: 'Production Deployment',
      description: 'Enterprise-grade implementation with monitoring, governance, and continuous improvement.',
    },
  ];

  const outcomes = [
    '40% reduction in manual data entry through intelligent automation',
    '30% improvement in demand forecast accuracy',
    '50% faster document processing with AI-powered extraction',
    '25% increase in customer engagement through predictive recommendations',
    'Real-time anomaly detection across financial and operational data',
    'Automated compliance monitoring and risk flagging',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-black/70" />
              <span className="text-[13px] tracking-wider uppercase text-black/60">
                AI & Intelligent Automation
              </span>
            </div>
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              AI that works.
              <br />
              Not hype.
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              Enterprise AI systems architected for clarity, governance, and measurable business outcomes. 
              Human-supervised. Process-centric. Operationally sound.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                Our AI capabilities
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                From agentic workflows to predictive analytics—AI systems designed to augment 
                human intelligence, not replace it.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="bg-black/[0.02] rounded-lg p-8 border border-black/5 hover:border-black/15 transition-all group">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg border border-black/5">
                      <capability.icon className="w-6 h-6 text-black/70" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[22px] tracking-tight mb-2">{capability.title}</h3>
                      <p className="text-[15px] leading-relaxed text-black/60">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2.5">
                    {capability.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-[14px] text-black/70">
                        <span className="text-black/30 mt-1.5">—</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
                Platforms we architect
              </h2>
              <p className="text-[16px] leading-relaxed text-black/60">
                Enterprise-grade AI and data platforms. Integrated. Governed. Scalable.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white rounded-md border border-black/5 text-[14px] text-black/70"
                >
                  {platform}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-[36px] md:text-[44px] leading-[1.2] tracking-tight mb-6">
                How we deliver AI projects
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 max-w-2xl mx-auto">
                A disciplined methodology. From strategy to production. No buzzwords. No over-engineering.
              </p>
            </div>
          </FadeInSection>

          <div className="max-w-4xl mx-auto">
            {deliveryApproach.map((phase, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="flex items-start gap-6 mb-12 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-[18px] font-medium">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-[24px] tracking-tight mb-2 group-hover:text-black/80 transition-colors">
                      {phase.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-black/60">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-8 text-center">
                Measurable outcomes
              </h2>
              <p className="text-[16px] leading-relaxed text-black/60 mb-10 text-center">
                AI systems we've architected deliver quantifiable business value:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white rounded-lg p-5 border border-black/5"
                  >
                    <Sparkles className="w-4 h-4 text-black/40 mt-1 flex-shrink-0" />
                    <span className="text-[15px] leading-relaxed text-black/70">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                Our AI philosophy
              </h2>
              <div className="space-y-6 text-[17px] leading-relaxed text-black/70">
                <p>
                  We don't chase AI trends. We architect systems that solve real business problems—with 
                  governance, transparency, and human oversight built in from day one.
                </p>
                <p>
                  Every AI implementation is grounded in process understanding, data quality, and measurable 
                  business outcomes. We avoid over-engineering. We deliver what works.
                </p>
                <p className="text-black/90 font-medium">
                  AI that's operationally sound. Human-supervised. Enterprise-grade.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-6">
                Ready to architect your AI strategy?
              </h2>
              <p className="text-[17px] leading-relaxed text-white/70 mb-10">
                Let's discuss your AI use cases and determine where intelligent automation can 
                deliver measurable business value.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-md hover:bg-white/90 transition-colors text-[15px]"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}

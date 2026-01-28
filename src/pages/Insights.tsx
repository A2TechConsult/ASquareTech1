import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export function Insights() {
  const insights = [
    {
      category: 'Architecture',
      date: 'January 2026',
      title: 'S/4HANA migration patterns for manufacturing enterprises',
      description:
        'Why manufacturing firms need process-centric migration strategies—and how to architect for data continuity across plant operations.',
      readTime: '8 min read',
    },
    {
      category: 'Revenue Operations',
      date: 'December 2025',
      title: 'Pricing governance at scale: SAP Vistex best practices',
      description:
        'How to structure rebate programs, incentive management, and pricing workflows for complex distribution networks.',
      readTime: '6 min read',
    },
    {
      category: 'Integration',
      date: 'November 2025',
      title: 'Plex to SAP integration: Shop floor to enterprise',
      description:
        'Architectural considerations for real-time manufacturing data integration. Quality tracking, inventory, and production scheduling unified.',
      readTime: '7 min read',
    },
    {
      category: 'Modernization',
      date: 'October 2025',
      title: 'Siebel CRM rationalization strategies',
      description:
        'How to modernize legacy Siebel systems without disrupting customer operations. Data continuity and integration patterns that work.',
      readTime: '9 min read',
    },
    {
      category: 'Strategy',
      date: 'September 2025',
      title: 'AI-assisted insights: When to automate decision-support',
      description:
        'How enterprise leaders can leverage AI for operational intelligence—without over-engineering or losing human oversight.',
      readTime: '6 min read',
    },
    {
      category: 'Operations',
      date: 'August 2025',
      title: 'Process before tools: Why methodology matters',
      description:
        'The discipline of mapping operations first, then selecting SAP modules. How process-centric delivery reduces risk and accelerates ROI.',
      readTime: '5 min read',
    },
  ];

  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      toast.success('Subscribed successfully!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 border-b border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-[48px] md:text-[64px] leading-[1.1] tracking-tight mb-6">
              Insights &<br />
              Perspectives
            </h1>
            <p className="text-[18px] md:text-[20px] leading-relaxed text-black/60">
              Thoughtful perspectives on SAP architecture, enterprise operations, 
              and the discipline of building systems that endure.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Insight */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-[13px] tracking-wider uppercase text-black/40 mb-3">
              Featured
            </div>
            <div className="bg-black/[0.02] rounded-lg p-10 border border-black/5">
              <div className="text-[13px] tracking-wider uppercase text-black/40 mb-2">
                {insights[0].category}
              </div>
              <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
                {insights[0].title}
              </h2>
              <p className="text-[17px] leading-relaxed text-black/60 mb-6">
                {insights[0].description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-[14px] text-black/50">
                  <span>{insights[0].date}</span>
                  <span>•</span>
                  <span>{insights[0].readTime}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-[14px] text-black/70 hover:text-black transition-colors">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Insights */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <h2 className="text-[28px] md:text-[36px] tracking-tight text-center">
              Recent insights
            </h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {insights.slice(1).map((insight, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-8 border border-black/5 hover:border-black/10 transition-all group cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="text-[13px] tracking-wider uppercase text-black/40 mb-2">
                      {insight.category}
                    </div>
                    <h3 className="text-[22px] md:text-[26px] leading-[1.3] tracking-tight mb-3">
                      {insight.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-black/60 mb-4">
                      {insight.description}
                    </p>
                    <div className="flex items-center gap-4 text-[13px] text-black/50">
                      <span>{insight.date}</span>
                      <span>•</span>
                      <span>{insight.readTime}</span>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 text-[14px] text-black/70 group-hover:text-black transition-colors whitespace-nowrap">
                    Read article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-black/[0.02]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[32px] md:text-[40px] leading-[1.2] tracking-tight mb-4">
              Stay informed
            </h2>
            <p className="text-[16px] leading-relaxed text-black/60 mb-8">
              Occasional insights on SAP architecture, enterprise operations, and the 
              discipline of building systems that scale. No hype. No buzzwords.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-md border border-black/10 bg-white text-[15px] focus:outline-none focus:ring-2 focus:ring-black/20"
              />
              <button
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-black/90 transition-colors text-[15px] whitespace-nowrap"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
            <p className="text-[13px] text-black/40 mt-4">
              Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { CostEstimatorSection } from '../components/home/CostEstimatorSection';
import { Check, HelpCircle, ChevronDown, ChevronUp, Sparkles, ArrowRight } from 'lucide-react';

export const PricingPage: React.FC = () => {
  const { setActivePage } = useDemo();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: 'Corporate Launchpad',
      badge: 'Fast-Moving Businesses',
      price: '$4,800 – $7,500',
      period: 'Fixed investment',
      desc: 'Ideal for growing companies seeking an authoritative, lightning-fast digital flagship to elevate brand positioning.',
      deliverables: [
        'Up to 8 Custom Responsive Pages',
        'Lighthouse 100/100 Core Web Vitals guarantee',
        'Headless CMS integration (Strapi/Sanity)',
        'Basic CRM lead capture & email routing',
        'Standard 30-Day Hypercare warranty',
        'Full IP and source code handoff',
      ],
      cta: 'Select Launchpad Tier',
      highlighted: false,
    },
    {
      name: 'Enterprise Platform',
      badge: 'Most Popular for High-Scale',
      price: '$9,500 – $18,000',
      period: 'Fixed investment',
      desc: 'Complete bespoke digital architecture featuring interactive calculators, automated RFQ workflows, and bi-directional CRM/ERP sync.',
      deliverables: [
        'Up to 20 Custom Tailored Pages & Modules',
        'Interactive Cost/ROI Calculators & Blueprints',
        'Bi-directional CRM & Database Integration',
        'Multi-lingual / Regional localization engine',
        'SOC-2 / GDPR compliant form pipelines',
        '90-Day Priority Engineering SLA',
        'Executive CMS training & documentation',
      ],
      cta: 'Select Enterprise Platform',
      highlighted: true,
    },
    {
      name: 'Dedicated Engineering Pod',
      badge: 'Continuous Systems Evolution',
      price: '$6,500 / month',
      period: 'Billed monthly, cancel anytime',
      desc: 'An embedded senior full-stack engineering & design squad providing continuous feature releases, A/B testing, and architecture updates.',
      deliverables: [
        'Dedicated Senior Full-Stack Engineer + Architect',
        'Unlimited feature iterations & integrations',
        'Quarterly Core Web Vitals & SEO audits',
        '1-hour emergency uptime incident response',
        'Direct Slack/Teams channel with tech lead',
        'Continuous automated CI/CD releases',
      ],
      cta: 'Engage Engineering Pod',
      highlighted: false,
    },
  ];

  const faqs = [
    {
      q: 'Do we own the full source code and intellectual property?',
      a: 'Yes, 100%. Upon project sign-off and final milestone settlement, complete repository access, deployment keys, and all intellectual property are irrevocably transferred to your organization.',
    },
    {
      q: 'How does GJ Nexora guarantee sub-second load times and 100/100 Lighthouse scores?',
      a: 'We avoid bloated page-builders (WordPress, Elementor, Webflow wrappers). Instead, we engineer your platform with zero-runtime utility CSS, edge serverless distribution, automated image webp/avif compression, and optimized script execution.',
    },
    {
      q: 'Can our marketing team edit text, publish blogs, and update case studies easily?',
      a: 'Yes. We pair every deployment with a modern, clean Headless CMS (such as Sanity, Strapi, or Contentful) configured with live previews, media management, and role-based permissions.',
    },
    {
      q: 'Can you integrate our existing HubSpot, Salesforce, or internal ERP?',
      a: 'Absolutely. We build resilient webhook and API middleware with retry queues and error-alerting to ensure zero customer inquiries are lost in transit.',
    },
  ];

  return (
    <div className="font-sans">
      
      {/* Interactive Estimator Component */}
      <CostEstimatorSection />

      {/* Commercial Tiers */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
              Predictable, Milestone-Based Engagement Models
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-3">
              Transparent project tiers designed for enterprise procurement clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  t.highlighted
                    ? 'bg-[#111827] text-white shadow-elevated ring-2 ring-[#2563EB] relative'
                    : 'bg-[#F7F8FA] text-gray-900 border border-gray-200 shadow-soft hover:shadow-elevated'
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#2563EB] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Recommended Model
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold">{t.name}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${t.highlighted ? 'bg-white/10 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                      {t.badge}
                    </span>
                  </div>

                  <div className="mt-4 mb-2">
                    <span className="text-2xl sm:text-3xl font-black tracking-tight">{t.price}</span>
                    <span className={`text-xs ml-1.5 ${t.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>{t.period}</span>
                  </div>

                  <p className={`text-xs sm:text-sm mt-3 mb-6 leading-relaxed ${t.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t.desc}
                  </p>

                  <div className={`pt-6 border-t ${t.highlighted ? 'border-gray-800' : 'border-gray-200'} space-y-3`}>
                    <div className={`text-[10px] font-bold uppercase tracking-wider ${t.highlighted ? 'text-gray-400' : 'text-gray-400'}`}>
                      What's Included
                    </div>
                    {t.deliverables.map((d, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${t.highlighted ? 'text-blue-400' : 'text-emerald-600'}`} />
                        <span className={t.highlighted ? 'text-gray-200' : 'text-gray-700'}>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActivePage('contact')}
                  className={`mt-8 w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${
                    t.highlighted
                      ? 'bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-soft'
                      : 'bg-[#111827] hover:bg-black text-white'
                  }`}
                >
                  <span>{t.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-2">
              Everything you need to know about our commercial, technical, and delivery protocols.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-gray-400 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-gray-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

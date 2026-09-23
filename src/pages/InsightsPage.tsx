import React from 'react';
import { useDemo } from '../context/DemoContext';
import { BookOpen, Clock, ArrowRight, Tag } from 'lucide-react';

export const InsightsPage: React.FC = () => {
  const { setActivePage } = useDemo();

  const articles = [
    {
      id: 'art-1',
      category: 'System Architecture',
      title: 'Why Enterprise Brands Are Abandoning Monolithic CMS in Favor of Edge Headless Systems',
      excerpt: 'An architectural deep-dive into how decoupling the presentation layer reduces TTFB by 78% and eliminates WordPress security surface vulnerabilities.',
      readTime: '6 min read',
      date: 'Sept 2026',
      author: 'G. Jayaruban'
    },
    {
      id: 'art-2',
      category: 'Core Web Vitals',
      title: 'The Real Financial Cost of 100ms Latency on Enterprise B2B Lead Conversion',
      excerpt: 'Analyzing telemetry data across 45 enterprise web deployments to demonstrate the direct correlation between INP/LCP scores and RFQ completion rates.',
      readTime: '8 min read',
      date: 'August 2026',
      author: 'N. V. Karthik'
    },
    {
      id: 'art-3',
      category: 'Security & Compliance',
      title: 'Architecting Zero-Trust Lead Capture Pipelines for SOC-2 and HIPAA Regulated Entities',
      excerpt: 'How client-side encryption and webhook quarantine queues prevent data leakage while maintaining seamless synchronization with Salesforce and HubSpot.',
      readTime: '5 min read',
      date: 'July 2026',
      author: 'A. D. Vance'
    }
  ];

  return (
    <div className="font-sans py-14 sm:py-20 bg-[#F7F8FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Research & Engineering Insights</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Engineering Insights & System Whitepapers
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed">
            Perspectives from our systems architects on web performance, distributed infrastructure, and digital commerce.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden p-6 sm:p-7 shadow-2xs hover:shadow-elevated hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 mb-3">
                  <span className="font-bold text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-100">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-400" />
                    {art.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] hover:text-[#2563EB] transition-colors leading-snug mt-2">
                  {art.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#667085] mt-3 leading-relaxed">
                  {art.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <span className="text-gray-400">By </span>
                  <span className="font-semibold text-gray-800">{art.author}</span>
                </div>
                <button
                  onClick={() => setActivePage('contact')}
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};

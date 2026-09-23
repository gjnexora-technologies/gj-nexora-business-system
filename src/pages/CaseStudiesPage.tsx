import React, { useState } from 'react';
import { useDemo } from '../context/DemoContext';
import { INDUSTRY_PRESETS } from '../data/industryPresets';
import { TrendingUp, ArrowRight, Filter, CheckCircle2 } from 'lucide-react';

export const CaseStudiesPage: React.FC = () => {
  const { setActivePage } = useDemo();
  const [filter, setFilter] = useState<string>('all');

  // Aggregate all case studies across presets
  const allCaseStudies = Object.values(INDUSTRY_PRESETS).flatMap((p) => 
    p.featuredCaseStudies.map((cs) => ({ ...cs, industry: p.name }))
  );

  const filtered = filter === 'all' 
    ? allCaseStudies 
    : allCaseStudies.filter(cs => cs.category.toLowerCase().includes(filter.toLowerCase()) || cs.industry.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="font-sans py-14 sm:py-20 bg-[#F7F8FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Client Success & System Deployments
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed">
            Detailed breakdowns of production websites and business portals deployed by GJ Nexora Technologies.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200">
          <span className="text-xs font-bold text-gray-500 flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5" />
            Filter Sector:
          </span>
          {[
            { id: 'all', label: 'All Deployments' },
            { id: 'saas', label: 'SaaS & Tech' },
            { id: 'advisory', label: 'Strategic Advisory' },
            { id: 'manufacturing', label: 'Industrial & CAD' },
            { id: 'biotech', label: 'Healthcare & Biotech' },
            { id: 'architecture', label: 'Architecture & Real Estate' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === item.id
                  ? 'bg-[#2563EB] text-white shadow-xs'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xs hover:shadow-elevated hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`h-40 bg-gradient-to-br ${cs.imageGradient} p-5 flex flex-col justify-between text-white`}>
                  <span className="px-2 py-0.5 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider self-start">
                    {cs.category}
                  </span>
                  <div>
                    <span className="text-xs font-medium text-white/80">{cs.client}</span>
                    <h3 className="text-base font-bold text-white leading-tight mt-0.5">{cs.title}</h3>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                    <div className="text-[10px] font-bold text-emerald-700 uppercase">Measurable Outcome</div>
                    <div className="text-sm font-black text-emerald-900 mt-0.5">{cs.roi}</div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0 flex items-center justify-between border-t border-gray-100 mt-4 text-xs">
                <span className="text-gray-400 text-[11px]">{cs.timeline}</span>
                <button
                  onClick={() => setActivePage('contact')}
                  className="font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1"
                >
                  <span>Request Brief</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

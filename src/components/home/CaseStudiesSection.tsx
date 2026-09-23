import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2, X } from 'lucide-react';

export const CaseStudiesSection: React.FC = () => {
  const { activePreset, setActivePage } = useDemo();
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<any | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
              Enterprise Results Engineered by GJ Nexora
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-3">
              Explore how our custom business systems deliver tangible operational speed and customer conversion across tier-1 organizations.
            </p>
          </div>

          <button
            onClick={() => setActivePage('case-studies')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2563EB] hover:text-[#1D4ED8] pb-1 border-b-2 border-blue-200 hover:border-blue-600 transition-all"
          >
            <span>View All Enterprise Case Studies</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activePreset.featuredCaseStudies.map((cs) => (
            <div
              key={cs.id}
              onClick={() => setSelectedCaseStudy(cs)}
              className="group cursor-pointer rounded-2xl border border-gray-200 overflow-hidden bg-white hover:border-blue-300 shadow-2xs hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              {/* Card Banner / Gradient Mockup */}
              <div className={`h-48 sm:h-56 bg-gradient-to-br ${cs.imageGradient} p-6 sm:p-8 flex flex-col justify-between text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold tracking-wide uppercase">
                    {cs.category}
                  </span>
                  <span className="text-xs font-semibold text-white/80">
                    {cs.timeline}
                  </span>
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-semibold text-white/70">Client: {cs.client}</div>
                  <div className="text-xl sm:text-2xl font-black text-white mt-1 group-hover:translate-x-1 transition-transform">
                    {cs.title}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                  {cs.summary}
                </p>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                      Verified Impact
                    </div>
                    <div className="text-sm sm:text-base font-black text-emerald-600 flex items-center gap-1.5 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                      <span>{cs.roi}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {cs.tags.slice(0, 2).map((tag: string, i: number) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-200 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div>
                <span className="text-xs font-bold text-blue-600">{selectedCaseStudy.category}</span>
                <h3 className="text-lg font-bold text-gray-900">{selectedCaseStudy.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedCaseStudy(null)}
                className="p-1 rounded-lg text-gray-400 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {selectedCaseStudy.summary}
            </p>

            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-between">
              <div>
                <div className="text-[10px] font-bold text-blue-600 uppercase">Impact Metric</div>
                <div className="text-base font-black text-blue-900">{selectedCaseStudy.roi}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-bold text-blue-600 uppercase">Turnaround</div>
                <div className="text-xs font-bold text-blue-900">{selectedCaseStudy.timeline}</div>
              </div>
            </div>

            <div className="pt-2">
              <div className="text-xs font-bold text-gray-700 mb-2">Technologies Used</div>
              <div className="flex flex-wrap gap-2">
                {selectedCaseStudy.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-2">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-200"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedCaseStudy(null);
                  setActivePage('contact');
                }}
                className="px-4 py-2 bg-[#2563EB] text-white rounded-lg text-xs font-semibold hover:bg-[#1D4ED8]"
              >
                Request Similar System
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

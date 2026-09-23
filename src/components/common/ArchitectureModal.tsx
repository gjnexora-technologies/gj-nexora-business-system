import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { GJNexoraLogo } from './GJNexoraLogo';
import { 
  X, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Server, 
  Globe2, 
  Code2, 
  Layers, 
  Gauge,
  Sparkles
} from 'lucide-react';

export const ArchitectureModal: React.FC = () => {
  const { isArchitectureModalOpen, setIsArchitectureModalOpen } = useDemo();

  if (!isArchitectureModalOpen) return null;

  const vitals = [
    { label: 'Lighthouse Performance', score: '100 / 100', color: 'text-emerald-600', sub: 'Optimal sub-second loading' },
    { label: 'Largest Contentful Paint (LCP)', score: '0.68s', color: 'text-emerald-600', sub: 'Threshold: < 2.5s (Pass)' },
    { label: 'Cumulative Layout Shift (CLS)', score: '0.00', color: 'text-emerald-600', sub: 'Zero layout jumping' },
    { label: 'Interaction to Next Paint (INP)', score: '12ms', color: 'text-emerald-600', sub: 'Ultra responsive touch/click' },
  ];

  const techSpecs = [
    { title: 'Modern Frontend Core', desc: 'React 18 + TypeScript + Vite with strict typing, zero-dependency bloat, and tree-shaken production bundles.' },
    { title: 'Responsive Utility CSS', desc: 'Tailwind CSS engine ensuring zero runtime CSS overhead, accessible color contrast, and fluid fluid typography.' },
    { title: 'SEO & Structured Data', desc: 'Schema.org JSON-LD, OpenGraph cards, canonical links, and dynamic sitemaps for top SERP indexation.' },
    { title: 'Edge CDN & Security', desc: 'Distributed edge caching, HTTP/3 protocol, Content Security Policies (CSP), and automated DDoS mitigation.' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl border border-gray-200 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100 bg-[#F9FAFB] rounded-t-2xl">
          <div className="flex items-center gap-3">
            <GJNexoraLogo size="sm" />
            <div className="border-l border-gray-300 pl-3">
              <h3 className="text-sm sm:text-base font-bold text-[#111827]">
                GJ NEXORA — System Architecture & Standards
              </h3>
              <p className="text-[11px] sm:text-xs text-[#667085]">
                Production specifications for enterprise corporate web platforms
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsArchitectureModalOpen(false)}
            className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Core Web Vitals Card */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Gauge className="w-4 h-4 text-[#2563EB]" />
              <h4 className="text-xs sm:text-sm font-bold text-[#111827] uppercase tracking-wider">
                Audited Core Web Vitals & Speed Performance
              </h4>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {vitals.map((v, i) => (
                <div key={i} className="p-3 bg-gray-50 border border-gray-200/80 rounded-xl text-center">
                  <div className={`text-base sm:text-lg font-black ${v.color}`}>{v.score}</div>
                  <div className="text-[11px] font-bold text-gray-800 mt-0.5 leading-tight">{v.label}</div>
                  <div className="text-[9px] text-gray-500 mt-0.5">{v.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Pillars */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers className="w-4 h-4 text-[#2563EB]" />
              <h4 className="text-xs sm:text-sm font-bold text-[#111827] uppercase tracking-wider">
                Enterprise Engineering Foundations
              </h4>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {techSpecs.map((spec, i) => (
                <div key={i} className="p-3.5 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#111827]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{spec.title}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1 leading-relaxed">
                    {spec.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SLA & Delivery Guarantees */}
          <div className="p-4 bg-gradient-to-r from-blue-50/70 to-indigo-50/70 border border-blue-100 rounded-xl">
            <div className="flex items-center gap-2 text-xs font-bold text-[#1E3A8A] mb-1.5">
              <Sparkles className="w-4 h-4 text-[#2563EB]" />
              <span>GJ Nexora Commercial Guarantees</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-[#1E3A8A]">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                99.99% Guaranteed Platform Uptime SLA
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Full IP Ownership & Clean Source Code
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                30-Day Post-Launch Hypercare Support
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                Quarterly Core Web Vitals Audits
              </li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-100 rounded-b-2xl text-xs">
          <div className="text-[11px] text-gray-500">
            Engineered by <span className="font-semibold text-gray-700">GJ Nexora Technologies</span>
          </div>
          <button
            onClick={() => setIsArchitectureModalOpen(false)}
            className="px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-semibold text-xs transition-colors shadow-sm"
          >
            Close Specifications
          </button>
        </div>

      </div>
    </div>
  );
};

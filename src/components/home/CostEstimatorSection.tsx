import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import confetti from 'canvas-confetti';
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  ShieldCheck, 
  Download, 
  ArrowRight,
  Zap
} from 'lucide-react';

export const CostEstimatorSection: React.FC = () => {
  const { setActivePage, setIsRfqModalOpen } = useDemo();

  // State
  const [pageCount, setPageCount] = useState<number>(8);
  const [cmsTier, setCmsTier] = useState<'static' | 'headless' | 'custom'>('headless');
  const [includeCrmSync, setIncludeCrmSync] = useState<boolean>(true);
  const [includeRfqEngine, setIncludeRfqEngine] = useState<boolean>(true);
  const [includeMultiLang, setIncludeMultiLang] = useState<boolean>(false);
  const [isExpedited, setIsExpedited] = useState<boolean>(false);
  const [slaTier, setSlaTier] = useState<'standard' | 'enterprise'>('enterprise');

  // Calculation Logic
  const calculateBudget = () => {
    let base = 3500; // Base architecture setup
    base += pageCount * 280;

    if (cmsTier === 'headless') base += 1800;
    if (cmsTier === 'custom') base += 3600;

    if (includeCrmSync) base += 1200;
    if (includeRfqEngine) base += 950;
    if (includeMultiLang) base += 850;

    if (slaTier === 'enterprise') base += 1500;
    if (isExpedited) base *= 1.25;

    const weeks = Math.max(3, Math.ceil((pageCount * 0.4) + (cmsTier === 'custom' ? 3 : 1.5) + (isExpedited ? -1.5 : 0)));

    return {
      min: Math.round(base * 0.95),
      max: Math.round(base * 1.1),
      weeks: Math.round(weeks),
    };
  };

  const estimate = calculateBudget();

  const handleDownloadScope = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 }
    });
    setActivePage('contact');
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-gray-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope & Investment Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Transparent Pricing Engineered for Enterprise ROI
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3">
            Configure your technical scope, integration requirements, and timeline to receive an instant architectural scope draft.
          </p>
        </div>

        {/* Estimator Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-soft space-y-6">
            
            {/* Slider: Number of Pages */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs sm:text-sm font-bold text-gray-800">
                  Number of Tailored Pages & Views
                </label>
                <span className="text-base font-black text-[#2563EB] bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                  {pageCount} Pages
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="30"
                step="1"
                value={pageCount}
                onChange={(e) => setPageCount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                <span>4 Pages (Compact)</span>
                <span>15 Pages (Standard Corporate)</span>
                <span>30+ Pages (Enterprise Platform)</span>
              </div>
            </div>

            {/* CMS Architecture Tier */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-gray-800 block mb-2">
                Content Management Architecture
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'static', label: 'Static & Fast', sub: 'Markdown / Git' },
                  { id: 'headless', label: 'Headless CMS', sub: 'Strapi / Sanity' },
                  { id: 'custom', label: 'Custom ERP/DB', sub: 'PostgreSQL Portal' },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setCmsTier(tier.id as any)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      cmsTier === tier.id
                        ? 'border-[#2563EB] bg-blue-50/50 ring-1 ring-[#2563EB] text-[#111827]'
                        : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <div className="text-xs font-bold">{tier.label}</div>
                    <div className="text-[10px] text-gray-500 mt-0.5">{tier.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Integrations */}
            <div>
              <label className="text-xs sm:text-sm font-bold text-gray-800 block mb-2">
                Mission-Critical Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                
                <label 
                  onClick={() => setIncludeCrmSync(!includeCrmSync)}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                    includeCrmSync ? 'border-blue-500 bg-blue-50/40 text-blue-900' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${includeCrmSync ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-gray-300'}`}>
                    {includeCrmSync && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-semibold">CRM Auto-Sync</span>
                </label>

                <label 
                  onClick={() => setIncludeRfqEngine(!includeRfqEngine)}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                    includeRfqEngine ? 'border-blue-500 bg-blue-50/40 text-blue-900' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${includeRfqEngine ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-gray-300'}`}>
                    {includeRfqEngine && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-semibold">Smart RFQ Engine</span>
                </label>

                <label 
                  onClick={() => setIncludeMultiLang(!includeMultiLang)}
                  className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer select-none transition-all ${
                    includeMultiLang ? 'border-blue-500 bg-blue-50/40 text-blue-900' : 'border-gray-200 text-gray-700'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${includeMultiLang ? 'bg-[#2563EB] border-[#2563EB] text-white' : 'border-gray-300'}`}>
                    {includeMultiLang && <Check className="w-3 h-3" />}
                  </div>
                  <span className="text-xs font-semibold">Multi-Language i18n</span>
                </label>

              </div>
            </div>

            {/* Delivery Timeline & Support SLA */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
              <div>
                <label className="text-xs font-bold text-gray-800 block mb-1.5">Delivery Velocity</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsExpedited(false)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      !isExpedited ? 'border-[#2563EB] bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    Standard Pace
                  </button>
                  <button
                    onClick={() => setIsExpedited(true)}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all flex items-center justify-center gap-1 ${
                      isExpedited ? 'border-amber-500 bg-amber-50 text-amber-800' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    <Zap className="w-3 h-3" />
                    Expedited Fast-Track
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800 block mb-1.5">Support SLA Tier</label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setSlaTier('standard')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      slaTier === 'standard' ? 'border-[#2563EB] bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    30-Day Launch Care
                  </button>
                  <button
                    onClick={() => setSlaTier('enterprise')}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold border transition-all ${
                      slaTier === 'enterprise' ? 'border-[#2563EB] bg-blue-50 text-blue-700' : 'border-gray-200 text-gray-600'
                    }`}
                  >
                    Enterprise 99.99% SLA
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Estimate Summary Output Card (5 Cols) */}
          <div className="lg:col-span-5 bg-[#111827] text-white rounded-2xl p-6 sm:p-8 shadow-elevated border border-gray-800 space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-gray-800">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                ESTIMATED ARCHITECTURE INVESTMENT
              </span>
              <span className="px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-400 text-[10px] font-bold">
                FIXED SCOPE
              </span>
            </div>

            {/* Estimated Price Range */}
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                ${estimate.min.toLocaleString()} – ${estimate.max.toLocaleString()}
              </div>
              <div className="text-xs text-gray-400 mt-1">
                One-time complete engineering investment. Zero recurring platform lock-in.
              </div>
            </div>

            {/* Details Box */}
            <div className="space-y-3 py-3 border-y border-gray-800/80 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  Estimated Turnaround:
                </span>
                <span className="font-bold text-white">{estimate.weeks} Weeks to Deployment</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Warranty & SLA:
                </span>
                <span className="font-bold text-emerald-400">
                  {slaTier === 'enterprise' ? '24/7 Dedicated Support' : '30-Day Hypercare'}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-400">Target Tech Stack:</span>
                <span className="font-bold text-gray-200">React 18 + Vite + Tailwind + Edge</span>
              </div>
            </div>

            {/* Included Guarantees */}
            <div className="space-y-1.5 text-[11px] text-gray-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>100/100 Core Web Vitals audited guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>100% clean repository source code & IP handoff</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-blue-400" />
                <span>Automated lead qualification webhook setup</span>
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleDownloadScope}
              className="w-full py-3.5 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-soft hover:shadow-glow transition-all"
            >
              <span>Download Scope Brief & Book Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

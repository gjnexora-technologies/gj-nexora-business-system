import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { LiveEditableText } from '../common/LiveEditableText';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  TrendingUp, 
  Shield, 
  Cpu,
  Play
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { activePreset, setActivePage, setIsArchitectureModalOpen, setIsRfqModalOpen } = useDemo();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-gray-200/80 bg-gradient-to-b from-white via-[#F7F8FA] to-white">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Copy & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Industry Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-xs font-semibold text-blue-700 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{activePreset.industryBadge}</span>
              <span className="text-blue-300">•</span>
              <span className="text-blue-600/80 font-normal">GJ Nexora High-Scale Architecture</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <LiveEditableText
                id={`hero-headline-${activePreset.id}`}
                as="h1"
                defaultText={activePreset.heroHeadline}
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight leading-[1.15]"
              />
              <LiveEditableText
                id={`hero-subtitle-${activePreset.id}`}
                as="p"
                defaultText={activePreset.heroSubtitle}
                className="text-sm sm:text-base lg:text-lg text-[#667085] leading-relaxed max-w-2xl font-normal"
              />
            </div>

            {/* Trust Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-xs font-medium text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lighthouse 100/100 Core</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>SOC-2 & GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full IP & Source Ownership</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={() => setActivePage('contact')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm rounded-xl shadow-soft hover:shadow-glow transition-all"
              >
                <span>{activePreset.primaryCTA}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('pricing')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#111827] font-semibold text-sm rounded-xl border border-gray-200 shadow-2xs hover:border-gray-300 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#2563EB]" />
                <span>Interactive Cost Estimator</span>
              </button>
            </div>

            {/* Client Proof Banner */}
            <div className="pt-6 border-t border-gray-200/60 flex items-center gap-4 text-xs text-gray-500">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-[10px] flex items-center justify-center">
                  MV
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-slate-700 to-gray-900 text-white font-bold text-[10px] flex items-center justify-center">
                  ER
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gradient-to-tr from-cyan-600 to-blue-500 text-white font-bold text-[10px] flex items-center justify-center">
                  SL
                </div>
              </div>
              <div>
                <div className="font-semibold text-gray-800">Trusted by Global Industry Leaders</div>
                <div className="text-[11px] text-gray-500">99.8% on-time milestone delivery across enterprise rollouts</div>
              </div>
            </div>

          </div>

          {/* Right: Live Interactive Telemetry Terminal (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-elevated p-5 sm:p-6 relative overflow-hidden">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-[11px] font-mono font-semibold text-gray-400 ml-2">
                    nexora.sys.telemetry
                  </span>
                </div>
                <button
                  onClick={() => setIsArchitectureModalOpen(true)}
                  className="text-[10px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                >
                  <Layers className="w-3 h-3" />
                  <span>View Specs</span>
                </button>
              </div>

              {/* Status Banner */}
              <div className="my-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-xl border border-blue-100 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                    System Architecture
                  </div>
                  <div className="text-xs font-bold text-gray-900 mt-0.5">
                    {activePreset.name}
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    LIVE
                  </span>
                </div>
              </div>

              {/* Telemetry Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {activePreset.stats.map((stat, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="text-lg sm:text-xl font-black text-[#111827] tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-semibold text-gray-700 mt-0.5 leading-tight">
                      {stat.label}
                    </div>
                    {stat.change && (
                      <div className="text-[10px] text-emerald-600 font-semibold mt-1">
                        {stat.change}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Live Diagnostic Feed */}
              <div className="p-3 bg-gray-900 rounded-xl text-[11px] font-mono text-gray-300 space-y-1.5">
                <div className="flex items-center justify-between text-gray-400 text-[10px]">
                  <span>HEALTH_CHECK</span>
                  <span className="text-emerald-400">STATUS: OPTIMAL</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">&gt;</span> Edge CDN Routing: <span className="text-emerald-300">Global Anycast (280 PoPs)</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">&gt;</span> First Contentful Paint: <span className="text-emerald-300">0.42s</span>
                </div>
                <div className="text-gray-300">
                  <span className="text-blue-400">&gt;</span> Security Layer: <span className="text-emerald-300">WAF Active • AES-256</span>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => setActivePage('services')}
                className="mt-4 w-full py-2 px-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>Inspect Technical Capabilities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

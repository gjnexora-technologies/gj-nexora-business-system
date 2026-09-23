import React from 'react';
import { useDemo } from '../context/DemoContext';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { 
  Check, 
  X, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Zap,
  Gauge
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const { setActivePage, setIsArchitectureModalOpen } = useDemo();

  const comparisonRows = [
    { feature: 'Core Web Vitals & Speed', agency: 'Often scores 50-70; bloated plugins', nexora: 'Audited 100/100 Core Web Vitals (<0.7s LCP)' },
    { feature: 'Code Architecture', agency: 'WordPress/Shopify template lock-in', nexora: 'Modern React/Vite/TypeScript clean code handoff' },
    { feature: 'Enterprise Security', agency: 'Vulnerable plugin updates; shared hosting', nexora: 'Zero-trust architecture, CSP headers, SOC-2 compliant' },
    { feature: 'Integrations & APIs', agency: 'Basic Zapier glue; brittle webhook sync', nexora: 'Bespoke bi-directional CRM/ERP connectors' },
    { feature: 'SLA & Guarantees', agency: 'Best-effort tickets; slow response', nexora: '99.99% availability SLA & 4-hour critical turnaround' },
    { feature: 'IP & Source Ownership', agency: 'Proprietary lock-in or licensing fees', nexora: '100% full intellectual property & repository ownership' },
  ];

  return (
    <div className="font-sans">
      
      {/* Page Header */}
      <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-[#F7F8FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Comprehensive System Capabilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Engineering Standards Built for Enterprise Scale
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed">
            We do not build ordinary websites. We engineer high-velocity commercial systems that unify brand authority, digital workflows, and revenue pipelines.
          </p>
        </div>
      </section>

      {/* Main Capabilities Grid */}
      <CapabilitiesSection />

      {/* Comparison Table: Traditional Agency vs GJ Nexora */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Traditional Agency Build vs. GJ Nexora High-Scale Architecture
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-2">
              See why leading technical teams choose our engineering-first methodology over conventional creative agencies.
            </p>
          </div>

          <div className="bg-[#F7F8FA] rounded-2xl border border-gray-200 overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-gray-100/80 border-b border-gray-200 text-gray-700 font-bold">
                    <th className="py-4 px-6">Architectural Capability</th>
                    <th className="py-4 px-6 text-gray-500">Traditional Agency Approach</th>
                    <th className="py-4 px-6 text-[#2563EB] bg-blue-50/70">GJ Nexora High-Performance System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="hover:bg-white transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900">{row.feature}</td>
                      <td className="py-4 px-6 text-gray-500 flex items-center gap-2">
                        <X className="w-4 h-4 text-red-500 shrink-0" />
                        <span>{row.agency}</span>
                      </td>
                      <td className="py-4 px-6 text-gray-900 font-medium bg-blue-50/30">
                        <div className="flex items-center gap-2 text-blue-950">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{row.nexora}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setIsArchitectureModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 hover:bg-black text-white rounded-xl text-xs font-semibold shadow-sm"
            >
              <Gauge className="w-3.5 h-3.5 text-blue-400" />
              <span>Inspect Audited Technical Specifications</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { LiveEditableText } from '../common/LiveEditableText';
import { 
  Globe, 
  Cpu, 
  Sparkles, 
  TrendingUp, 
  BookOpen, 
  Lock, 
  Users, 
  BarChart3, 
  Wrench, 
  Truck, 
  Activity, 
  ShieldCheck, 
  HeartPulse, 
  Microscope, 
  ShieldPlus, 
  Stethoscope, 
  Layers, 
  Compass, 
  Camera, 
  Leaf,
  Check,
  ArrowRight
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe, Cpu, Sparkles, TrendingUp, BookOpen, Lock, Users, BarChart3,
  Wrench, Truck, Activity, ShieldCheck, HeartPulse, Microscope, ShieldPlus,
  Stethoscope, Layers, Compass, Camera, Leaf
};

export const CapabilitiesSection: React.FC = () => {
  const { activePreset, setActivePage } = useDemo();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            Engineered Capabilities
          </div>
          <LiveEditableText
            id={`capabilities-title-${activePreset.id}`}
            as="h2"
            defaultText="Architected for Velocity, Conversion, and Operational Resilience"
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight"
          />
          <p className="text-sm sm:text-base text-[#667085] mt-3 leading-relaxed">
            Every web platform designed by GJ Nexora Technologies is treated as a core operational asset — engineered for speed, scalable micro-services, and client acquisition.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {activePreset.keyServices.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <div 
                key={service.id}
                className="group p-6 sm:p-8 bg-[#F7F8FA] hover:bg-white rounded-2xl border border-gray-200/90 hover:border-blue-300 shadow-2xs hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Metric Badge */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-[#2563EB]">
                      {service.metrics}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-5 pt-4 border-t border-gray-200/60">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                      Included Deliverables
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.deliverables.map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Link */}
                <div className="pt-6 mt-4 flex items-center justify-between border-t border-gray-200/40 text-xs font-semibold text-[#2563EB]">
                  <button 
                    onClick={() => setActivePage('services')}
                    className="inline-flex items-center gap-1 group-hover:gap-2 transition-all hover:underline"
                  >
                    <span>View Specifications & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-gray-400 font-mono text-[11px]">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-gray-900 to-[#111827] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold">
              Require bespoke integration with custom ERP, CRM, or legacy databases?
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl">
              Our engineering team builds custom REST/GraphQL adapters, real-time sync pipelines, and SSO authentication for existing enterprise tech stacks.
            </p>
          </div>
          <button
            onClick={() => setActivePage('contact')}
            className="shrink-0 px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-sm"
          >
            Speak with Lead Systems Architect
          </button>
        </div>

      </div>
    </section>
  );
};

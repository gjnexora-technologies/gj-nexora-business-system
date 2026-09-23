import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { GJNexoraLogo } from '../common/GJNexoraLogo';
import { 
  ShieldCheck, 
  ArrowUpRight, 
  Lock, 
  Globe, 
  Sparkles,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage, setActivePresetId, setIsArchitectureModalOpen } = useDemo();

  return (
    <footer className="bg-[#111827] text-white pt-16 pb-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800">
          
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/10 p-2.5 rounded-xl inline-block backdrop-blur-xs border border-white/10">
              <GJNexoraLogo variant="dark" size="md" />
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              GJ Nexora Technologies engineers high-performance enterprise web systems, custom business platforms, and mission-critical digital workflows.
            </p>
            
            <div className="flex items-center gap-3 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Production Systems Live</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>SOC-2 Type II Certified</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-gray-500" />
                <span>enterprise@gjnexora.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                <span>Global Technology & Engineering Practice</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              System Navigation
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => setActivePage('home')} className="hover:text-white transition-colors">
                  Overview & Flagship
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('services')} className="hover:text-white transition-colors">
                  Core Capabilities
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('case-studies')} className="hover:text-white transition-colors">
                  Enterprise Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('pricing')} className="hover:text-white transition-colors">
                  Scope & Budget Estimator
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">
                  Leadership & Engineering
                </button>
              </li>
              <li>
                <button onClick={() => setActivePage('contact')} className="hover:text-white transition-colors">
                  Interactive RFQ Portal
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Industry Blueprints */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Industry Blueprints
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button 
                  onClick={() => { setActivePresetId('enterprise-tech'); setActivePage('home'); }}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                >
                  <span>Enterprise Tech & AI</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePresetId('consulting'); setActivePage('home'); }}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                >
                  <span>Advisory & Capital Partners</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePresetId('industrial'); setActivePage('home'); }}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                >
                  <span>Industrial & Supply Chain</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePresetId('healthcare'); setActivePage('home'); }}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                >
                  <span>Healthcare & Life Sciences</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActivePresetId('architecture'); setActivePage('home'); }}
                  className="hover:text-blue-400 transition-colors flex items-center justify-between w-full"
                >
                  <span>Architecture & Real Estate</span>
                  <ArrowUpRight className="w-3 h-3 text-gray-600" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Architecture & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
              Standards & Specs
            </h4>
            <div className="p-3 bg-gray-900 rounded-xl border border-gray-800 space-y-2 text-xs text-gray-400">
              <div className="text-[11px] font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                Lighthouse 100/100 Core
              </div>
              <p className="text-[10px] text-gray-500 leading-relaxed">
                Audited sub-second LCP with strict Content Security Policies.
              </p>
              <button
                onClick={() => setIsArchitectureModalOpen(true)}
                className="w-full py-1 px-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded text-[10px] font-semibold border border-blue-500/30 transition-colors"
              >
                Inspect Technical Specs
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Watermark Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>© 2026 GJ Nexora Technologies. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-gray-400">GJ NEXORA BUSINESS SYSTEMS • DEMO SHOWCASE</span>
            <span>•</span>
            <button onClick={() => setIsArchitectureModalOpen(true)} className="hover:text-gray-300">
              Privacy & Compliance
            </button>
            <span>•</span>
            <button onClick={() => setActivePage('contact')} className="hover:text-gray-300">
              Security Operations
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

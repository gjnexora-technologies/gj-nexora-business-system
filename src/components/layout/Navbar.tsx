import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { GJNexoraLogo } from '../common/GJNexoraLogo';
import { PageId, IndustryPresetId } from '../../types';
import { INDUSTRY_PRESETS } from '../../data/industryPresets';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  Calculator, 
  Layers,
  ArrowRight
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [presetDropdownOpen, setPresetDropdownOpen] = useState(false);
  const { 
    activePage, 
    setActivePage, 
    activePresetId, 
    setActivePresetId, 
    activePreset,
    setIsRfqModalOpen,
    setIsArchitectureModalOpen
  } = useDemo();

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'services', label: 'Capabilities' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'pricing', label: 'Scope Estimator' },
    { id: 'about', label: 'About Us' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact & RFQ' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        
        {/* Left: Brand Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setActivePage('home')}
            className="flex items-center text-left focus:outline-none"
          >
            <GJNexoraLogo size="md" />
          </button>

          {/* Industry Preset Badge (Desktop dropdown) */}
          <div className="relative hidden xl:block">
            <button
              onClick={() => setPresetDropdownOpen(!presetDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-xs font-semibold text-gray-700 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>{activePreset.name.split('&')[0]}</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
            </button>

            {presetDropdownOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-elevated p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2.5 py-1">
                  Switch Business Preset
                </div>
                {Object.values(INDUSTRY_PRESETS).map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setActivePresetId(preset.id as IndustryPresetId);
                      setPresetDropdownOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                      activePresetId === preset.id
                        ? 'bg-blue-50 text-blue-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{preset.name}</span>
                    {activePresetId === preset.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors relative ${
                  isActive
                    ? 'text-[#2563EB] font-semibold bg-blue-50/60'
                    : 'text-[#475467] hover:text-[#111827] hover:bg-gray-50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#2563EB] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={() => setActivePage('pricing')}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#111827] hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Calculator className="w-3.5 h-3.5 text-gray-500" />
            <span>Estimator</span>
          </button>

          <button
            onClick={() => setActivePage('contact')}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm hover:shadow transition-all"
          >
            <span>Request Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setActivePage('contact')}
            className="px-3 py-1.5 bg-[#2563EB] text-white text-xs font-semibold rounded-lg"
          >
            Quote
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1">
            Navigation
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActivePage(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activePage === item.id
                  ? 'bg-blue-50 text-blue-700 font-semibold'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {item.label}
            </button>
          ))}

          <div className="pt-3 border-t border-gray-100">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-2 py-1">
              Active Industry Preset
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              {Object.values(INDUSTRY_PRESETS).map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => {
                    setActivePresetId(preset.id as IndustryPresetId);
                    setMobileMenuOpen(false);
                  }}
                  className={`p-2 rounded-lg text-xs text-left font-medium ${
                    activePresetId === preset.id
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {preset.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

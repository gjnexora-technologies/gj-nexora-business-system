import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Sparkles, ExternalLink, RotateCcw, Info, Check, Layers } from 'lucide-react';

export const GJNexoraWatermark: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const {
    activePreset,
    activeTheme,
    resetAllDemoData,
    setIsArchitectureModalOpen,
    setActivePage
  } = useDemo();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed bottom-2 right-2 sm:bottom-4 sm:right-4 z-50 select-none pointer-events-auto font-sans">
      {/* Popover Details on Click */}
      {isOpen && (
        <div className="mb-2.5 w-80 max-w-[calc(100vw-24px)] bg-white/95 backdrop-blur-md rounded-xl border border-[#E5E7EB] shadow-elevated p-4 text-xs animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-[#F1F5F9]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#111827] to-[#2563EB] flex items-center justify-center text-white font-bold text-xs">
                GJ
              </div>
              <div>
                <h4 className="font-bold text-[#111827] text-xs">GJ NEXORA TECHNOLOGIES</h4>
                <p className="text-[10px] text-[#667085]">Interactive Client Demonstration</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#667085] hover:text-[#111827] text-base leading-none px-1"
            >
              ×
            </button>
          </div>

          <div className="py-2.5 space-y-1.5 text-[11px] text-[#475467]">
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#667085]">Active Industry:</span>
              <span className="font-semibold text-[#111827]">{activePreset.name}</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#667085]">Design Theme:</span>
              <span className="font-semibold text-[#2563EB] capitalize">{activeTheme.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between items-center py-0.5">
              <span className="text-[#667085]">System State:</span>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-600">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                Live Demo Active
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[#F1F5F9] grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                setIsArchitectureModalOpen(true);
              }}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-gray-50 hover:bg-gray-100 border border-[#E5E7EB] rounded-lg text-[10px] font-semibold text-[#111827] transition-all"
            >
              <Layers className="w-3 h-3 text-[#2563EB]" />
              System Specs
            </button>
            <button
              onClick={() => {
                resetAllDemoData();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 py-1.5 px-2 bg-gray-50 hover:bg-red-50 hover:text-red-600 border border-[#E5E7EB] rounded-lg text-[10px] font-semibold text-[#667085] transition-all"
            >
              <RotateCcw className="w-3 h-3" />
              Reset Demo
            </button>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              setActivePage('contact');
            }}
            className="mt-2 w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg text-xs font-semibold shadow-sm transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Book Architecture Review
          </button>
        </div>
      )}

      {/* Persistent Floating Watermark Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        title="GJ Nexora Technologies Interactive Client Demonstration"
        className="group flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-full shadow-2xs hover:shadow-soft text-[10px] sm:text-[11px] font-medium text-[#667085] hover:text-[#111827] hover:border-[#CBD5E1] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse shrink-0" />
        <span className="tracking-wide font-semibold text-[#111827] group-hover:text-[#2563EB] transition-colors">
          GJ NEXORA
        </span>
        <span className="text-[#94A3B8]">•</span>
        <span className="tracking-wider text-[9px] font-bold text-[#2563EB] uppercase">
          DEMO PROJECT
        </span>
      </button>
    </div>
  );
};

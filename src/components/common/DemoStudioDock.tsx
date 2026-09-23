import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { IndustryPresetId, ColorTheme } from '../../types';
import { 
  SlidersHorizontal, 
  Palette, 
  Edit3, 
  Layers, 
  RotateCcw, 
  ChevronUp, 
  ChevronDown,
  Building2,
  Cpu,
  HeartPulse,
  Wrench,
  Compass
} from 'lucide-react';

export const DemoStudioDock: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const {
    activePresetId,
    setActivePresetId,
    activeTheme,
    setActiveTheme,
    isLiveEditMode,
    setIsLiveEditMode,
    setIsArchitectureModalOpen,
    resetAllDemoData,
  } = useDemo();

  const presets: { id: IndustryPresetId; label: string; icon: any }[] = [
    { id: 'enterprise-tech', label: 'Tech & AI', icon: Cpu },
    { id: 'consulting', label: 'Advisory', icon: Building2 },
    { id: 'industrial', label: 'Industrial', icon: Wrench },
    { id: 'healthcare', label: 'Health', icon: HeartPulse },
    { id: 'architecture', label: 'Architecture', icon: Compass },
  ];

  const themes: { id: ColorTheme; label: string; colorClass: string }[] = [
    { id: 'electric-blue', label: 'Electric Blue', colorClass: 'bg-blue-600' },
    { id: 'obsidian-gold', label: 'Obsidian Gold', colorClass: 'bg-amber-600' },
    { id: 'emerald', label: 'Emerald Tech', colorClass: 'bg-emerald-600' },
    { id: 'swiss-slate', label: 'Swiss Slate', colorClass: 'bg-slate-800' },
  ];

  return (
    <aside aria-label="Demo Studio Controls" className="fixed bottom-2 left-2 sm:bottom-4 sm:left-4 z-50 select-none font-sans">
      <div className="bg-white/95 backdrop-blur-md border border-[#E5E7EB] rounded-2xl shadow-elevated transition-all duration-300 overflow-hidden max-w-[calc(100vw-32px)]">
        
        {/* Toggle Bar */}
        <div className="flex items-center justify-between gap-3 px-3 py-2 border-b border-gray-100 bg-gray-50/70">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-xs font-bold text-[#111827] hover:text-[#2563EB] transition-colors"
          >
            <div className="w-5 h-5 rounded-md bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center">
              <SlidersHorizontal className="w-3 h-3" />
            </div>
            <span>Demo Studio Dock</span>
            <span className="text-[10px] font-medium text-gray-400">
              {isExpanded ? <ChevronDown className="w-3.5 h-3.5 inline" /> : <ChevronUp className="w-3.5 h-3.5 inline" />}
            </span>
          </button>

          {/* Quick Preset Icons on collapsed mode */}
          {!isExpanded && (
            <div className="flex items-center gap-1">
              {presets.map((p) => {
                const Icon = p.icon;
                const isSelected = activePresetId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePresetId(p.id)}
                    title={`Switch to ${p.label}`}
                    className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isSelected
                        ? 'bg-[#2563EB] text-white shadow-xs'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Expanded Controls Drawer */}
        {isExpanded && (
          <div className="p-3.5 space-y-3.5 text-xs w-72 sm:w-80">
            
            {/* 1. Industry Presets */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider">
                  Industry Presets
                </span>
                <span className="text-[10px] text-gray-400">Instant Reskin</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {presets.map((p) => {
                  const Icon = p.icon;
                  const isSelected = activePresetId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setActivePresetId(p.id)}
                      className={`flex items-center gap-2 p-2 rounded-xl text-left font-medium transition-all ${
                        isSelected
                          ? 'bg-[#2563EB] text-white shadow-sm ring-1 ring-[#2563EB]'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-100'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-white' : 'text-[#2563EB]'}`} />
                      <span className="truncate text-xs">{p.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Color Theme */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider flex items-center gap-1">
                  <Palette className="w-3 h-3 text-blue-500" />
                  Palette Theme
                </span>
                <span className="text-[10px] text-gray-400">Branding</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActiveTheme(t.id)}
                    className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border text-center transition-all ${
                      activeTheme === t.id
                        ? 'border-[#2563EB] bg-blue-50/50 shadow-xs ring-1 ring-[#2563EB]'
                        : 'border-gray-200 bg-white hover:bg-gray-50'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full ${t.colorClass} shadow-xs`} />
                    <span className="text-[9px] font-semibold text-gray-700 truncate w-full">
                      {t.label.split(' ')[0]}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Live Copy-Edit Toggle */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="font-semibold text-gray-800 text-xs block">Live Text Edit</span>
                <span className="text-[10px] text-gray-500 block">Click any title to edit copy</span>
              </div>
              <button
                onClick={() => setIsLiveEditMode(!isLiveEditMode)}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isLiveEditMode
                    ? 'bg-amber-500 text-white shadow-xs animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Edit3 className="w-3 h-3" />
                {isLiveEditMode ? 'Editing ON' : 'Turn ON'}
              </button>
            </div>

            {/* 4. Action Buttons */}
            <div className="pt-2 border-t border-gray-100 grid grid-cols-2 gap-2">
              <button
                onClick={() => setIsArchitectureModalOpen(true)}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 bg-gray-900 hover:bg-black text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <Layers className="w-3.5 h-3.5 text-blue-400" />
                Specs & SLA
              </button>
              <button
                onClick={resetAllDemoData}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-600 rounded-lg text-xs font-semibold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Demo
              </button>
            </div>

          </div>
        )}
      </div>
    </aside>
  );
};

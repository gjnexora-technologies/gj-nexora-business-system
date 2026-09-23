import React, { useState } from 'react';
import { useDemo } from '../../context/DemoContext';
import { Layers, Sparkles, X, SlidersHorizontal } from 'lucide-react';

export const DemoHeaderRibbon: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { activePreset, setIsArchitectureModalOpen, setIsRfqModalOpen } = useDemo();

  if (!isVisible) return null;

  return (
    <div className="bg-[#111827] text-white py-1.5 px-3 sm:px-6 text-[11px] font-medium border-b border-gray-800 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="font-semibold text-white tracking-tight">GJ NEXORA SHOWCASE:</span>
          <span className="text-gray-300 hidden sm:inline">Professional Company Website System Demonstration</span>
          <span className="text-gray-500 hidden md:inline">•</span>
          <span className="bg-blue-900/60 text-blue-300 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider hidden md:inline">
            {activePreset.industryBadge}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsArchitectureModalOpen(true)}
            className="flex items-center gap-1 text-gray-300 hover:text-white px-2 py-0.5 rounded hover:bg-gray-800 transition-colors"
          >
            <Layers className="w-3 h-3 text-blue-400" />
            <span className="hidden sm:inline">System Specs</span>
          </button>
          
          <button
            onClick={() => setIsRfqModalOpen(true)}
            className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-2.5 py-0.5 rounded text-[10px] font-semibold transition-colors shadow-sm"
          >
            <Sparkles className="w-3 h-3" />
            <span>Scope Estimator</span>
          </button>

          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-200 p-0.5 ml-1"
            title="Dismiss notice"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';
import { IndustryPresetId, ColorTheme, PageId, IndustryPreset } from '../types';
import { INDUSTRY_PRESETS } from '../data/industryPresets';

interface DemoContextType {
  activePresetId: IndustryPresetId;
  activePreset: IndustryPreset;
  setActivePresetId: (id: IndustryPresetId) => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  activeTheme: ColorTheme;
  setActiveTheme: (theme: ColorTheme) => void;
  isLiveEditMode: boolean;
  setIsLiveEditMode: (val: boolean) => void;
  customOverrides: Record<string, string>;
  setCustomOverride: (key: string, value: string) => void;
  resetAllDemoData: () => void;
  isArchitectureModalOpen: boolean;
  setIsArchitectureModalOpen: (open: boolean) => void;
  isRfqModalOpen: boolean;
  setIsRfqModalOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'gj_nexora_business_demo_state_v1';

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePresetId, setActivePresetIdState] = useState<IndustryPresetId>('enterprise-tech');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [activeTheme, setActiveThemeState] = useState<ColorTheme>('electric-blue');
  const [isLiveEditMode, setIsLiveEditMode] = useState<boolean>(false);
  const [customOverrides, setCustomOverrides] = useState<Record<string, string>>({});
  const [isArchitectureModalOpen, setIsArchitectureModalOpen] = useState<boolean>(false);
  const [isRfqModalOpen, setIsRfqModalOpen] = useState<boolean>(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.activePresetId && INDUSTRY_PRESETS[parsed.activePresetId]) {
          setActivePresetIdState(parsed.activePresetId);
        }
        if (parsed.activeTheme) {
          setActiveThemeState(parsed.activeTheme);
        }
        if (parsed.customOverrides) {
          setCustomOverrides(parsed.customOverrides);
        }
      }
    } catch (e) {
      console.warn('Failed to load demo state from localStorage', e);
    }
  }, []);

  // Sync to localStorage
  const saveState = (newPreset: IndustryPresetId, newTheme: ColorTheme, newOverrides: Record<string, string>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        activePresetId: newPreset,
        activeTheme: newTheme,
        customOverrides: newOverrides,
        timestamp: new Date().toISOString()
      }));
    } catch (e) {
      console.warn('Failed to save demo state', e);
    }
  };

  const setActivePresetId = (id: IndustryPresetId) => {
    setActivePresetIdState(id);
    saveState(id, activeTheme, customOverrides);
  };

  const setActiveTheme = (theme: ColorTheme) => {
    setActiveThemeState(theme);
    saveState(activePresetId, theme, customOverrides);
  };

  const setCustomOverride = (key: string, value: string) => {
    const updated = { ...customOverrides, [key]: value };
    setCustomOverrides(updated);
    saveState(activePresetId, activeTheme, updated);
  };

  const resetAllDemoData = () => {
    setActivePresetIdState('enterprise-tech');
    setActiveThemeState('electric-blue');
    setIsLiveEditMode(false);
    setCustomOverrides({});
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  };

  const activePreset = INDUSTRY_PRESETS[activePresetId] || INDUSTRY_PRESETS['enterprise-tech'];

  return (
    <DemoContext.Provider
      value={{
        activePresetId,
        activePreset,
        setActivePresetId,
        activePage,
        setActivePage,
        activeTheme,
        setActiveTheme,
        isLiveEditMode,
        setIsLiveEditMode,
        customOverrides,
        setCustomOverride,
        resetAllDemoData,
        isArchitectureModalOpen,
        setIsArchitectureModalOpen,
        isRfqModalOpen,
        setIsRfqModalOpen,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};

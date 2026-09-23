export type IndustryPresetId = 
  | 'enterprise-tech'
  | 'consulting'
  | 'industrial'
  | 'healthcare'
  | 'architecture';

export type ColorTheme = 'electric-blue' | 'obsidian-gold' | 'emerald' | 'swiss-slate';

export interface IndustryPreset {
  id: IndustryPresetId;
  name: string;
  tagline: string;
  industryBadge: string;
  description: string;
  heroHeadline: string;
  heroSubtitle: string;
  stats: { value: string; label: string; change?: string }[];
  primaryCTA: string;
  secondaryCTA: string;
  keyServices: {
    id: string;
    title: string;
    description: string;
    icon: string;
    metrics: string;
    deliverables: string[];
  }[];
  featuredCaseStudies: {
    id: string;
    client: string;
    category: string;
    title: string;
    summary: string;
    roi: string;
    tags: string[];
    timeline: string;
    imageGradient: string;
  }[];
  testimonials: {
    id: string;
    quote: string;
    author: string;
    title: string;
    company: string;
    metric: string;
  }[];
}

export type PageId = 'home' | 'services' | 'case-studies' | 'pricing' | 'about' | 'insights' | 'contact';

export interface ScopeEstimateConfig {
  pageCount: number;
  cmsType: 'headless' | 'integrated' | 'static';
  customInteractions: boolean;
  rfqWorkflow: boolean;
  multiLanguage: boolean;
  enterpriseSLA: boolean;
  timelineSpeed: 'standard' | 'expedited';
}

export interface ScopeEstimateResult {
  basePrice: number;
  estimatedWeeks: number;
  recommendedStack: string;
  includedFeatures: string[];
}

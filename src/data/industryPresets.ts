import { IndustryPreset } from '../types';

export const INDUSTRY_PRESETS: Record<string, IndustryPreset> = {
  'enterprise-tech': {
    id: 'enterprise-tech',
    name: 'Enterprise Tech & AI Systems',
    industryBadge: 'Enterprise Tech & SaaS',
    tagline: 'Architecting Intelligent Systems for Global Scale',
    description: 'Mission-critical digital architectures, micro-frontends, and automated business workflows engineered for high-growth tech innovators.',
    heroHeadline: 'Engineering High-Performance Digital Systems for the Modern Enterprise',
    heroSubtitle: 'We architect, engineer, and deploy resilient digital platforms that turn complex organizational operations into competitive market advantages.',
    primaryCTA: 'Request System Architecture',
    secondaryCTA: 'Explore Live Interactive Systems',
    stats: [
      { value: '99.99%', label: 'Platform Availability SLA', change: '+0.15% vs legacy' },
      { value: '3.4x', label: 'Inbound Qualified Pipeline', change: 'Avg across deployments' },
      { value: '< 0.7s', label: 'Global LCP Speed', change: 'Lighthouse 100/100' },
      { value: '45M+', label: 'Monthly Processed Events', change: 'Zero downtime' },
    ],
    keyServices: [
      {
        id: 'tech-1',
        title: 'Custom Enterprise Web Portals',
        description: 'Ultra-fast, accessible web systems built on modern edge architectures with sub-second response times and SOC-2 compliance standards.',
        icon: 'Globe',
        metrics: '99.98% uptime guaranteed',
        deliverables: ['Headless Architecture', 'Global Edge CDN', 'Enterprise RBAC Auth', 'Real-time Telemetry']
      },
      {
        id: 'tech-2',
        title: 'Automated CRM & ERP Integrations',
        description: 'Bi-directional real-time data sync bridging customer inquiries, payment gateways, and inventory systems into a single operational pane.',
        icon: 'Cpu',
        metrics: '10x workflow efficiency',
        deliverables: ['Custom REST/GraphQL APIs', 'Webhook Routing Engines', 'Event Bus Architecture', 'Legacy DB Migration']
      },
      {
        id: 'tech-3',
        title: 'AI Agents & Automation Workflows',
        description: 'Embedded contextual AI agents for automated lead qualification, instant RFQ drafting, and 24/7 intelligent tier-1 customer assistance.',
        icon: 'Sparkles',
        metrics: '68% faster lead response',
        deliverables: ['Agentic RAG Pipelines', 'Document Ingestion Engines', 'Multi-modal Chat Widgets', 'Audit Trails']
      },
      {
        id: 'tech-4',
        title: 'High-Converting Digital Flagships',
        description: 'Investor-grade, authoritative brand websites with interactive product demos, ROI calculators, and friction-free conversion paths.',
        icon: 'TrendingUp',
        metrics: '+185% demo conversion',
        deliverables: ['Interactive ROI Calculators', 'Dynamic Case Studies', 'Enterprise Lead Routing', 'A/B Test Infrastructure']
      }
    ],
    featuredCaseStudies: [
      {
        id: 'cs-1',
        client: 'OmniCloud Technologies',
        category: 'B2B SaaS Infrastructure',
        title: 'Unified Customer Portal & Multi-tenant Billing Platform',
        summary: 'Redesigned core enterprise web portal, reducing client onboarding drop-off from 42% to 6% with instant micro-service provisioning.',
        roi: '+240% Inbound Demo Requests',
        tags: ['Vite + React', 'PostgreSQL', 'Tailwind', 'Stripe Billing'],
        timeline: '8 Weeks to Production',
        imageGradient: 'from-blue-600 to-indigo-800'
      },
      {
        id: 'cs-2',
        client: 'AetherAI Analytics',
        category: 'Generative AI Platform',
        title: 'Interactive Web Experience & Model Performance Benchmarking Hub',
        summary: 'Delivered a web platform capable of rendering live LLM benchmarking charts with sub-100ms latency across 40 countries.',
        roi: '1.2M Unique Visitors in Month 1',
        tags: ['Edge Compute', 'WebSockets', 'Chart Engine', 'Lighthouse 100'],
        timeline: '6 Weeks to Launch',
        imageGradient: 'from-cyan-600 to-blue-700'
      }
    ],
    testimonials: [
      {
        id: 'test-1',
        quote: 'GJ Nexora completely reimagined how our clients interact with our platform. Their attention to performance, watermark demo precision, and architectural discipline is second to none.',
        author: 'Marcus Vance',
        title: 'Chief Technology Officer',
        company: 'OmniCloud Global Systems',
        metric: '4.8x ROI within 90 days'
      },
      {
        id: 'test-2',
        quote: 'The speed, precision, and engineering polish delivered by the GJ Nexora team gave us the credibility needed to close our $14M Series A round.',
        author: 'Elena Rostova',
        title: 'VP of Product Strategy',
        company: 'AetherAI Labs',
        metric: '+185% conversion lift'
      }
    ]
  },

  'consulting': {
    id: 'consulting',
    name: 'Strategic Advisory & Consulting',
    industryBadge: 'Management & Strategy Advisory',
    tagline: 'Authoritative Digital Presence for Strategic Leaders',
    description: 'Prestigious, high-touch digital flagship platforms designed for executive advisory firms, private equity groups, and legal partners.',
    heroHeadline: 'Strategic Digital Platforms for Visionary Advisory & Capital Partners',
    heroSubtitle: 'We craft discreet, prestigious digital web systems that establish uncontested market authority and capture high-value institutional mandates.',
    primaryCTA: 'Schedule Executive Consultation',
    secondaryCTA: 'Review Institutional Case Studies',
    stats: [
      { value: '$4.2B+', label: 'Client Mandates Advised', change: 'Track record' },
      { value: '92%', label: 'Institutional Lead Conversion', change: 'High intent traffic' },
      { value: '48h', label: 'Executive Briefing SLA', change: 'Secure client portal' },
      { value: '18+', label: 'Global Practice Jurisdictions', change: 'Cross-border' },
    ],
    keyServices: [
      {
        id: 'cons-1',
        title: 'Executive Thought Leadership Portals',
        description: 'Immersive research hubs featuring gated market reports, interactive economic data models, and audio/video executive briefings.',
        icon: 'BookOpen',
        metrics: 'Top 1% engagement time',
        deliverables: ['Whitepaper Gateways', 'Executive Podcasting Hub', 'C-Suite Newsletter Engine', 'PDF Generation API']
      },
      {
        id: 'cons-2',
        title: 'Confidential Client Data Rooms',
        description: 'Encrypted, multi-factor authenticated document portals for M&A due diligence, investor updates, and board materials.',
        icon: 'Lock',
        metrics: 'Military-grade encryption',
        deliverables: ['AES-256 Storage', 'Access Audit Logs', 'Granular Watermarking', 'Timed Access Links']
      },
      {
        id: 'cons-3',
        title: 'Practice Area Directory & Partner Match',
        description: 'Algorithmic matching system connecting institutional prospective clients directly with relevant practice leaders across the globe.',
        icon: 'Users',
        metrics: '94% match precision',
        deliverables: ['Partner Taxonomy Engine', 'Bio Knowledgebase', 'Meeting Synchronization', 'Conflict of Interest Routing']
      },
      {
        id: 'cons-4',
        title: 'Interactive Valuation & Assessment Tools',
        description: 'Bespoke diagnostic web calculators allowing prospective clients to benchmark their operational readiness and valuation metrics.',
        icon: 'BarChart3',
        metrics: '3.8x lead quality',
        deliverables: ['Diagnostic Quizzes', 'Dynamic Scorecards', 'Instant Executive Summaries', 'Automated CRM Handoff']
      }
    ],
    featuredCaseStudies: [
      {
        id: 'cs-3',
        client: 'Meridian Capital Advisory',
        category: 'Private Equity & M&A',
        title: 'Confidential Deal Room & Cross-Border Sovereign Wealth Portal',
        summary: 'Rebuilt institutional web presence and secure transaction gateway handling $850M+ in cross-border advisory transactions.',
        roi: '$850M Advisory Deal Volume Enabled',
        tags: ['Next.js', 'SOC-2 Compliance', 'Encrypted Vault', 'Dynamic Watermark'],
        timeline: '10 Weeks to Deployment',
        imageGradient: 'from-slate-800 to-zinc-900'
      }
    ],
    testimonials: [
      {
        id: 'test-3',
        quote: 'In institutional advisory, trust is everything. GJ Nexora built a digital platform that conveys the exact gravitas and confidentiality our sovereign partners demand.',
        author: 'Sir Arthur Sterling',
        title: 'Senior Managing Partner',
        company: 'Meridian Capital Partners',
        metric: '$1.4B Assets Under Advisory'
      }
    ]
  },

  'industrial': {
    id: 'industrial',
    name: 'Industrial & Smart Manufacturing',
    industryBadge: 'Advanced Engineering & Industry 4.0',
    tagline: 'Precision Digital Infrastructure for Heavy Engineering',
    description: 'Robust, CAD-integrated web platforms and supplier portals engineered for precision manufacturers, defense contractors, and robotics firms.',
    heroHeadline: 'Powering Digital Supply Chains and Global Manufacturing Systems',
    heroSubtitle: 'Transforming industrial capability into interactive digital experiences with custom product configurators, RFQ automation, and supplier portals.',
    primaryCTA: 'Request Engineering Spec Review',
    secondaryCTA: 'Browse Industrial Systems',
    stats: [
      { value: '14,000+', label: 'SKU Catalog Synchronized', change: 'ERP connected' },
      { value: '-65%', label: 'RFQ Turnaround Time', change: 'From 5 days to 4 hrs' },
      { value: '99.9%', label: 'Inventory Sync Accuracy', change: 'Real-time telemetry' },
      { value: '38', label: 'Manufacturing Hubs Connected', change: 'Global network' },
    ],
    keyServices: [
      {
        id: 'ind-1',
        title: 'Dynamic Industrial Product Configurators',
        description: '3D interactive web tools allowing engineering clients to customize tolerances, materials, and load specifications with instant CAD exports.',
        icon: 'Wrench',
        metrics: 'Instant STEP/DWG generation',
        deliverables: ['Parametric Web 3D', 'Real-time Pricing Matrix', 'Tolerance Checking Engine', 'Auto BOM Builder']
      },
      {
        id: 'ind-2',
        title: 'Automated Supplier & RFQ Portals',
        description: 'Frictionless quoting workflows where clients upload technical blueprints and receive algorithmic production estimates in hours.',
        icon: 'Truck',
        metrics: '65% faster quoting cycle',
        deliverables: ['Secure Blueprint Vault', 'Material Cost Indices', 'Multi-plant Routing', 'Supplier Dashboard']
      },
      {
        id: 'ind-3',
        title: 'IoT Telemetry & Factory Twin Dashboards',
        description: 'Secure customer-facing tracking portals showing real-time production status, batch QA certifications, and logistics tracking.',
        icon: 'Activity',
        metrics: 'Live sensor telemetry',
        deliverables: ['Real-time WebSocket Feeds', 'Batch QA Verification', 'Automated ASN Generation', 'Milestone SMS/Email']
      },
      {
        id: 'ind-4',
        title: 'Global Compliance & Material Spec Hubs',
        description: 'Comprehensive digital documentation repositories supporting ISO 9001, AS9100, and RoHS certifications with search-as-you-type indexing.',
        icon: 'ShieldCheck',
        metrics: '100% audit auditability',
        deliverables: ['Mill Test Report Gateways', 'Compliance Search Index', 'Multi-Language Specs', 'PDF Watermarking']
      }
    ],
    featuredCaseStudies: [
      {
        id: 'cs-4',
        client: 'Titanium Dynamics Corp',
        category: 'Aerospace & Defense Precision',
        title: 'Automated CNC Quoting Engine & AS9100 Spec Management Platform',
        summary: 'Replaced manual PDF quoting with a real-time parametric quoting portal, cutting quote turnaround from 96 hours to 45 minutes.',
        roi: '+310% Quoting Volume Handled',
        tags: ['WebGL', 'CAD Parser', 'FastAPI', 'Vite UI'],
        timeline: '12 Weeks to Full Rollout',
        imageGradient: 'from-amber-700 to-stone-900'
      }
    ],
    testimonials: [
      {
        id: 'test-4',
        quote: 'Our aerospace buyers need instant answers. GJ Nexora built an industrial portal that reduced our quotation cycle by 70% while improving technical accuracy.',
        author: 'Dieter Reinhardt',
        title: 'Chief Manufacturing Officer',
        company: 'Titanium Dynamics',
        metric: '-70% Lead Time'
      }
    ]
  },

  'healthcare': {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    industryBadge: 'Clinical Systems & Life Sciences',
    tagline: 'Compliant, Human-Centric Medical Systems',
    description: 'HIPAA/GDPR-compliant clinical portals, clinical trial matchmaking hubs, and medical device demonstration platforms.',
    heroHeadline: 'Pioneering Human-Centric Systems for Modern Healthcare & Biotech',
    heroSubtitle: 'Secure, accessible, and compliant digital infrastructures connecting patients, researchers, and clinicians with intuitive digital workflows.',
    primaryCTA: 'Explore Clinical Portals',
    secondaryCTA: 'View Compliance Standards',
    stats: [
      { value: '100%', label: 'HIPAA & GDPR Compliant', change: 'Verified security' },
      { value: '450k+', label: 'Active Patient Portal Users', change: 'Zero security breaches' },
      { value: '99.4%', label: 'Patient Interaction Rating', change: 'WCAG 2.1 AAA' },
      { value: '-40%', label: 'Clinical Intake Overhead', change: 'Automated triage' },
    ],
    keyServices: [
      {
        id: 'health-1',
        title: 'HIPAA-Compliant Patient Intake Portals',
        description: 'End-to-end encrypted medical intake forms with digital signature capture, photo ID verification, and instant EHR synchronization.',
        icon: 'HeartPulse',
        metrics: 'SOC-2 Type II Certified',
        deliverables: ['WCAG AAA Accessibility', 'EHR HL7/FHIR Sync', 'Zero-knowledge Encryption', 'Mobile First Triage']
      },
      {
        id: 'health-2',
        title: 'Clinical Trial Patient Matching Platforms',
        description: 'Interactive eligibility screening tools matching patients with recruiting clinical trials based on biomarker and geographic criteria.',
        icon: 'Microscope',
        metrics: '+42% patient enrollment',
        deliverables: ['Inclusion Logic Engine', 'Geospatial Trial Finder', 'Investigator Portal', 'Multi-site Coordinators']
      },
      {
        id: 'health-3',
        title: 'Medical Device Demonstration Showcases',
        description: 'Interactive 3D anatomical models and surgical workflow walkthroughs designed for key opinion leaders and hospital procurement committees.',
        icon: 'ShieldPlus',
        metrics: 'FDA compliance ready',
        deliverables: ['Anatomical 3D Renderers', 'KOL Resource Vault', 'Clinical Study Repositories', 'Procurement Kits']
      },
      {
        id: 'health-4',
        title: 'Physician Referral & Tele-consult Networks',
        description: 'Automated provider-to-provider consultation routing with secure DICOM imaging upload and real-time appointment confirmation.',
        icon: 'Stethoscope',
        metrics: 'Instant specialist routing',
        deliverables: ['Secure DICOM Viewer', 'Calendar Integration', 'SMS Automated Reminders', 'Automated Referral Letters']
      }
    ],
    featuredCaseStudies: [
      {
        id: 'cs-5',
        client: 'AuraGen Therapeutics',
        category: 'Precision Oncology Biotech',
        title: 'Global Clinical Trial Recruitment Engine & Genomic Eligibility Hub',
        summary: 'Accelerated Phase II clinical trial enrollment by 4.2x with an accessible patient pre-screening portal and coordinator dashboard.',
        roi: 'Trial Full Enrollment Reached 4 Months Ahead',
        tags: ['HIPAA Compliant', 'FHIR API', 'React', 'Tailwind'],
        timeline: '7 Weeks to Launch',
        imageGradient: 'from-emerald-700 to-teal-900'
      }
    ],
    testimonials: [
      {
        id: 'test-5',
        quote: 'In healthcare, precision and privacy are non-negotiable. GJ Nexora built a patient platform that is not only completely secure but genuinely empathetic and easy to use.',
        author: 'Dr. Sarah Lin, MD, PhD',
        title: 'Chief Medical Officer',
        company: 'AuraGen Clinical Research',
        metric: '4.2x Faster Enrollment'
      }
    ]
  },

  'architecture': {
    id: 'architecture',
    name: 'Architecture & Real Estate',
    industryBadge: 'Modern Architecture & Developments',
    tagline: 'Bespoke Spatial Portals for Visionary Developers',
    description: 'High-aesthetic, editorial digital experiences for international architectural practices, luxury commercial towers, and master developers.',
    heroHeadline: 'Sculpting Architectural Grandeur into Digital Experiences',
    heroSubtitle: 'We translate physical craftsmanship, structural form, and spatial storytelling into minimalist, award-winning digital experiences.',
    primaryCTA: 'View Architectural Folio',
    secondaryCTA: 'Inquire on Masterplan',
    stats: [
      { value: '$1.8B+', label: 'Real Estate Asset Value Showcase', change: 'Global projects' },
      { value: '3x', label: 'High-Net-Worth Lead Capture', change: 'Editorial design' },
      { value: '60 FPS', label: 'Silky Smooth Project Walkthroughs', change: 'GPU accelerated' },
      { value: '14', label: 'International Design Awards', change: 'Industry recognized' },
    ],
    keyServices: [
      {
        id: 'arch-1',
        title: 'Interactive Project Masterplan Showcases',
        description: 'High-resolution interactive floorplates, sun orientation visualizers, and spatial zoning maps for luxury commercial developments.',
        icon: 'Layers',
        metrics: 'Sub-second vector rendering',
        deliverables: ['Vector Interactive Floorplans', 'Unit Inventory Staging', 'Dynamic Amenities Map', 'Brochure PDF Customizer']
      },
      {
        id: 'arch-2',
        title: 'Luxury Residential Unit Selectors',
        description: 'Ultra-refined 3D unit configurators allowing ultra-high-net-worth buyers to tour penthouse layouts and select bespoke interior finishes.',
        icon: 'Compass',
        metrics: 'Exclusive concierge routing',
        deliverables: ['Penthouse Walkthroughs', 'Material Swatch Selector', 'Private Showing Booking', 'Currency & Metric Converters']
      },
      {
        id: 'arch-3',
        title: 'Architectural Monograph & Portfolio Feeds',
        description: 'Swiss editorial layout grids showcasing project photography, sketches, material palettes, and critical architectural essays.',
        icon: 'Camera',
        metrics: 'Curated gallery transitions',
        deliverables: ['High-DPI Zoomable Galleries', 'Project Monographs', 'Press Kit Download Center', 'Exhibition Archive']
      },
      {
        id: 'arch-4',
        title: 'Urban Impact & Sustainability Portfolios',
        description: 'Engaging sustainability dashboards detailing LEED Platinum metrics, embodied carbon reductions, and bioclimatic performance.',
        icon: 'Leaf',
        metrics: 'LEED / BREEAM certified data',
        deliverables: ['Embodied Carbon Visualizer', 'Solar Harvest Counters', 'Material Circularity Index', 'Public Hearing Docs']
      }
    ],
    featuredCaseStudies: [
      {
        id: 'cs-6',
        client: 'Atelier Kroll Architects',
        category: 'Luxury Commercial & Urban Masterplan',
        title: 'The Obsidian Tower — Digital Monograph & Interactive Sales Portal',
        summary: 'Crafted the digital identity and unit sales engine for a $450M commercial tower in Zurich, resulting in 82% pre-lease commitments.',
        roi: '82% Pre-Leased 6 Months Prior to Groundbreak',
        tags: ['Editorial Grid', 'Smooth Scroll', '3D Walkthrough', 'Multi-Currency'],
        timeline: '9 Weeks to Release',
        imageGradient: 'from-neutral-800 to-black'
      }
    ],
    testimonials: [
      {
        id: 'test-6',
        quote: 'GJ Nexora treats digital typography and spatial rhythm with the same reverence we apply to physical concrete and glass. An extraordinary partner.',
        author: 'Jonas Kroll, SIA',
        title: 'Principal Architect',
        company: 'Atelier Kroll Zurich',
        metric: 'Winner of Digital Craft 2026'
      }
    ]
  }
};

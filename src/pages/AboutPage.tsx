import React from 'react';
import { useDemo } from '../context/DemoContext';
import { GJNexoraLogo } from '../components/common/GJNexoraLogo';
import { 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  Target, 
  Award, 
  Users, 
  ArrowRight,
  Code,
  Globe2,
  CheckCircle2
} from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setActivePage, setIsArchitectureModalOpen } = useDemo();

  const principles = [
    {
      title: 'Performance Is a Commercial Imperative',
      desc: 'Sub-second page speeds directly impact search authority, client trust, and transaction rates. We never compromise with template bloat.',
      icon: Sparkles
    },
    {
      title: 'Complete Client IP Sovereignty',
      desc: 'You should never be locked into proprietary agency systems. We deliver clean, modern TypeScript repositories with 100% intellectual property ownership.',
      icon: ShieldCheck
    },
    {
      title: 'Systems Over Cosmetic Facades',
      desc: 'A business website must connect seamlessly to your CRM, ERP, and operations. We treat digital flagships as mission-critical systems.',
      icon: Code
    },
    {
      title: 'Direct Access to Senior Architects',
      desc: 'No account-manager telephone games. Our clients collaborate directly with seasoned systems engineers and product strategists.',
      icon: Target
    }
  ];

  const leadership = [
    {
      name: 'G. Jayaruban',
      title: 'Chief Executive & Principal Systems Architect',
      bio: 'Visionary technologist directing enterprise software architecture, high-concurrency systems, and digital commercial platforms.',
      avatarInitials: 'GJ'
    },
    {
      name: 'N. V. Karthik',
      title: 'Head of Engineering & Cloud Infrastructure',
      bio: 'Former infrastructure lead specializing in distributed edge computing, zero-trust security, and high-availability database pipelines.',
      avatarInitials: 'NK'
    },
    {
      name: 'A. D. Vance',
      title: 'Director of Product Design & Human Experience',
      bio: 'Swiss-design disciple focused on enterprise ergonomics, WCAG AAA accessibility, and high-conversion UX design.',
      avatarInitials: 'AV'
    }
  ];

  return (
    <div className="font-sans">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F7F8FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Company & Engineering Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Building Digital Excellence for the World's Most Ambitious Companies
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed">
            GJ Nexora Technologies was founded to bridge the gap between creative visual artistry and rigorous, mission-critical software engineering.
          </p>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Our Core Architectural Doctrines
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-2">
              Every decision we make is governed by four non-negotiable principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i} className="p-6 sm:p-8 bg-[#F7F8FA] rounded-2xl border border-gray-200 shadow-2xs hover:border-blue-300 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111827]">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight">
              Executive Leadership & Practice Heads
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-2">
              Engineers and practitioners with deep expertise in enterprise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((l, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-soft text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#111827] via-[#1E3A8A] to-[#2563EB] text-white text-xl font-black flex items-center justify-center shadow-md mb-4">
                  {l.avatarInitials}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#111827]">{l.name}</h3>
                <div className="text-xs font-semibold text-[#2563EB] mt-0.5 mb-3">{l.title}</div>
                <p className="text-xs text-[#667085] leading-relaxed">{l.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Global Engineering Network & Call to Action */}
      <section className="py-16 sm:py-20 bg-[#111827] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mx-auto border border-blue-500/30">
            <Globe2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
            Ready to Architect Your Enterprise Digital Flagship?
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Schedule a confidential 30-minute discovery session with our Lead Systems Architect to review your project objectives, timeline, and technical requirements.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setActivePage('contact')}
              className="px-6 py-3 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-soft transition-all"
            >
              Initiate Project Discovery
            </button>
            <button
              onClick={() => setIsArchitectureModalOpen(true)}
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold text-xs sm:text-sm rounded-xl transition-all"
            >
              Review Technical Standards
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

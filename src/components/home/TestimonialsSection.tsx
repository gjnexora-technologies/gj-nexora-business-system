import React from 'react';
import { useDemo } from '../../context/DemoContext';
import { Quote, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { activePreset } = useDemo();

  return (
    <section className="py-16 sm:py-24 bg-[#F7F8FA] border-b border-gray-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-2">
            Executive Endorsements
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#111827] tracking-tight">
            Trusted by CTOs, VPs, and Founding Principals
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-3">
            Read direct feedback from engineering and operational leaders who migrated to GJ Nexora digital platforms.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activePreset.testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars & Metric Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    {test.metric}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-blue-200 mb-2" />
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {test.author.split(' ').map((n: string) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-gray-900">{test.author}</div>
                  <div className="text-[11px] text-gray-500">{test.title} • {test.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise Logos Bar */}
        <div className="mt-16 pt-10 border-t border-gray-200/60 text-center">
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">
            Standards & Certifications Embedded in Every Deployment
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-xs font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SOC-2 TYPE II AUDITED</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>WCAG 2.1 AAA ACCESSIBILITY</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>ISO 27001 COMPLIANT INFRA</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              <span>LIGHTHOUSE 100/100 AUDIT</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

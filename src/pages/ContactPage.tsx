import React, { useState } from 'react';
import { useDemo } from '../context/DemoContext';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { activePreset } = useDemo();

  // Form State
  const [projectType, setProjectType] = useState('Corporate Flagship Website');
  const [budgetTier, setBudgetTier] = useState('$10,000 – $25,000');
  const [timeline, setTimeline] = useState('6 – 8 Weeks');
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Calendar State
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('02:30 PM EST');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleBooking = () => {
    setBookingConfirmed(true);
    confetti({
      particleCount: 70,
      spread: 50,
      origin: { y: 0.7 }
    });
  };

  return (
    <div className="font-sans py-14 sm:py-20 bg-[#F7F8FA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#2563EB] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive RFQ & Discovery Portal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Initiate System Architecture Discussion
          </h1>
          <p className="text-sm sm:text-base text-[#667085] mt-4 leading-relaxed">
            Connect with GJ Nexora's systems engineering team to review technical feasibility, timeline requirements, and commercial proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form: Multi-step RFQ (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-soft">
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#111827]">
                    1. Select System Scope & Architecture
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-3">
                    {[
                      'Corporate Flagship Website',
                      'B2B SaaS / Web Platform',
                      'Custom ERP / CRM Connector',
                      'Industrial / CAD Configurator',
                      'Healthcare / HIPAA Portal',
                      'Multi-tenant Client Hub',
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                          projectType === type
                            ? 'border-[#2563EB] bg-blue-50/60 text-[#2563EB] font-bold ring-1 ring-[#2563EB]'
                            : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <label className="text-xs font-bold text-gray-800 block mb-1.5">Target Budget</label>
                    <select
                      value={budgetTier}
                      onChange={(e) => setBudgetTier(e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>$5,000 – $10,000 (Launchpad)</option>
                      <option>$10,000 – $25,000 (Enterprise Platform)</option>
                      <option>$25,000+ (High-Scale Bespoke)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-800 block mb-1.5">Target Deployment</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>Under 4 Weeks (Expedited)</option>
                      <option>6 – 8 Weeks (Standard)</option>
                      <option>8 – 12 Weeks (Complex Multi-system)</option>
                    </select>
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <h3 className="text-base font-bold text-[#111827]">
                    2. Stakeholder Contact Details
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-semibold text-gray-600 block mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Marcus Vance"
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-gray-600 block mb-1">Work Email Address *</label>
                      <input
                        type="email"
                        required
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="marcus@company.com"
                        className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-gray-600 block mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="OmniCloud Global Systems"
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-gray-600 block mb-1">Project Brief / Core Objectives</label>
                    <textarea
                      rows={3}
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Briefly describe your requirements, existing stack, and conversion goals..."
                      className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-soft hover:shadow-glow transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Architectural RFQ</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Confidential NDA protected • Response within 4 business hours</span>
                </div>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-gray-900">
                  Architectural RFQ Successfully Transmitted
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-gray-900">{fullName || 'Partner'}</span>. Our Lead Systems Architect has received your brief for <span className="font-bold text-gray-900">{companyName || 'your organization'}</span>.
                </p>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl max-w-sm mx-auto text-xs text-left space-y-1">
                  <div><span className="text-gray-500">Scope:</span> <span className="font-bold">{projectType}</span></div>
                  <div><span className="text-gray-500">Budget Tier:</span> <span className="font-bold">{budgetTier}</span></div>
                  <div><span className="text-gray-500">Timeline:</span> <span className="font-bold">{timeline}</span></div>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] hover:underline pt-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Submit Another Brief
                </button>
              </div>
            )}

          </div>

          {/* Right Column: Discovery Call Booking Simulator (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Calendar Booking Card */}
            <div className="bg-[#111827] text-white rounded-2xl p-6 sm:p-7 shadow-elevated border border-gray-800">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">
                <Calendar className="w-4 h-4" />
                <span>Instant Discovery Scheduling</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold">
                Book a 30-Min Architecture Discovery Session
              </h3>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                Skip the back-and-forth email chains. Book directly into our systems engineering calendar.
              </p>

              {!bookingConfirmed ? (
                <div className="mt-5 space-y-4">
                  {/* Date Selector */}
                  <div>
                    <span className="text-[11px] font-semibold text-gray-300 block mb-1.5">Select Preferred Date</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['Today', 'Tomorrow', 'In 2 Days'].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDate(d)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all ${
                            selectedDate === d
                              ? 'bg-[#2563EB] border-[#2563EB] text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Selector */}
                  <div>
                    <span className="text-[11px] font-semibold text-gray-300 block mb-1.5">Select Time Window</span>
                    <div className="grid grid-cols-3 gap-2">
                      {['10:00 AM', '02:30 PM', '04:30 PM'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={`py-2 px-2.5 rounded-lg text-xs font-semibold border transition-all ${
                            selectedTime === t
                              ? 'bg-[#2563EB] border-[#2563EB] text-white'
                              : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-750'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleBooking}
                    className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Confirm Discovery Slot ({selectedDate} @ {selectedTime})</span>
                  </button>
                </div>
              ) : (
                <div className="mt-5 p-4 bg-emerald-950/60 border border-emerald-800/80 rounded-xl text-center space-y-2">
                  <div className="text-emerald-400 font-bold text-xs">Slot Confirmed on Google Meet</div>
                  <div className="text-white text-sm font-black">{selectedDate} @ {selectedTime}</div>
                  <p className="text-[11px] text-gray-400">Calendar invite sent. We look forward to meeting you.</p>
                </div>
              )}
            </div>

            {/* Direct Coordinates */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-2xs space-y-4 text-xs">
              <h4 className="font-bold text-[#111827] text-sm">Direct Practice Coordinates</h4>
              
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-gray-400 text-[10px]">Client Engagements</div>
                  <div className="font-semibold text-gray-900">enterprise@gjnexora.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-gray-400 text-[10px]">Enterprise WhatsApp / Hotline</div>
                  <div className="font-semibold text-gray-900">+91 98111 00001 / +1 (800) NEXORA</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-gray-400 text-[10px]">Headquarters</div>
                  <div className="font-semibold text-gray-900">GJ Nexora Technologies Center</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

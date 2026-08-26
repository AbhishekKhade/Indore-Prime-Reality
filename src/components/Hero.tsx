import React, { useState } from 'react';
import { Calendar, Download, Sparkles, CheckCircle2, ShieldCheck, Car, Building2, MapPin, ArrowRight, Play, Eye } from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

interface HeroProps {
  onOpenBookingModal: (config?: string) => void;
  onOpenBrochureModal: () => void;
  onOpenVirtualTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onOpenBrochureModal, onOpenVirtualTourModal }) => {
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickConfig, setQuickConfig] = useState('2 BHK Smart Luxury');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickName || !quickPhone) return;
    setQuickSubmitted(true);
    setTimeout(() => {
      onOpenBookingModal(quickConfig);
    }, 1200);
  };

  return (
    <section id="overview" className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-[#1a202c]">
      {/* Background with luxury architecture photo and subtle lighting overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=85"
          alt="Indore Prime Realty Luxury Towers"
          className="w-full h-full object-cover object-center scale-105 transform opacity-30 mix-blend-luminosity"
        />
        {/* Gradients to ensure pristine contrast and luxury ambiance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a202c] via-[#1a202c]/90 to-[#2d3748]/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a202c] via-transparent to-[#1a202c]/90"></div>
        
        {/* Subtle decorative gold light glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-[#c5a059]/20 text-[#e6ca8d] border border-[#c5a059]/40 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                Super Corridor & Bypass Junction, Indore
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs font-semibold bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                RERA Registered: {PROJECT_INFO.reraNumber}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.12]">
                Experience <span className="text-[#c5a059]">Unrivaled Luxury</span> in Indore’s Premier Enclave
              </h1>
              <p className="text-base sm:text-lg text-gray-300 font-light max-w-2xl leading-relaxed">
                Indore Prime Realty presents <strong className="text-white font-medium">{PROJECT_INFO.projectName}</strong> — bespoke 2 & 3 BHK air-conditioned smart residences. Surrounded by 75% lush open greens, 40+ resort-grade amenities, and seamless 2-minute metro connectivity.
              </p>
            </div>

            {/* Key Value Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-3 border-y border-gray-700/60 bg-slate-900/50 backdrop-blur-sm rounded-lg px-4">
              <div>
                <div className="text-xs text-gray-400 font-medium">Starting From</div>
                <div className="text-xl sm:text-2xl font-bold text-[#c5a059] font-serif">₹58.50 L*</div>
                <div className="text-[11px] text-gray-400">EMI ₹38.2k/mo*</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Configurations</div>
                <div className="text-xl sm:text-2xl font-bold text-white">2 & 3 BHK</div>
                <div className="text-[11px] text-emerald-400">Smart Luxury Suites</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Open Space</div>
                <div className="text-xl sm:text-2xl font-bold text-white">75% Green</div>
                <div className="text-[11px] text-gray-400">8.5 Acre Township</div>
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">Possession</div>
                <div className="text-xl sm:text-2xl font-bold text-white">Dec 2026</div>
                <div className="text-[11px] text-[#c5a059]">On-Time Guarantee</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                id="hero-primary-book-btn"
                onClick={() => onOpenBookingModal()}
                className="px-6 py-3.5 rounded font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Free Site Visit (Free AC Cab)</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                id="hero-brochure-btn"
                onClick={onOpenBrochureModal}
                className="px-5 py-3.5 rounded font-semibold text-xs sm:text-sm text-gray-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-gray-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#c5a059]" />
                <span>Download Brochure & Plans</span>
              </button>

              <button
                id="hero-virtual-tour-btn"
                onClick={onOpenVirtualTourModal}
                className="px-4 py-3.5 rounded text-xs sm:text-sm font-semibold text-[#c5a059] hover:text-white bg-[#c5a059]/10 hover:bg-[#c5a059]/20 border border-[#c5a059]/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
                title="View 360° Virtual Walkthrough"
              >
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">360° Tour</span>
              </button>
            </div>

            {/* Trust Bullet Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                0% Brokerage & Direct Builder Pricing
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                100% Vaastu Compliant Layouts
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a059]" />
                Pre-Approved by SBI & HDFC (8.40%*)
              </span>
              <span className="flex items-center gap-1.5">
                <Car className="w-3.5 h-3.5 text-emerald-400" />
                Complimentary Doorstep Cab for Site Visits
              </span>
            </div>

          </div>

          {/* Right Column: High-Converting Quick Lead Form Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#1a202c] p-6 sm:p-7 rounded-xl border border-gray-700 shadow-xl backdrop-blur-xl">
              
              {/* Highlight ribbon */}
              <div className="absolute -top-3 right-6 px-3 py-1 bg-[#c5a059] text-white text-[11px] font-bold uppercase tracking-wider rounded shadow-sm">
                Launch Offer: Free AC + Gold Coin*
              </div>

              <div className="space-y-2 mb-5 text-left">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    Site Visits Open Everyday (9 AM - 7 PM)
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                  Schedule Your VIP Site Visit
                </h3>
                <p className="text-xs text-gray-300">
                  Experience the sample flat walkthrough with complimentary doorstep chauffeur pickup anywhere in Indore.
                </p>
              </div>

              {quickSubmitted ? (
                <div className="py-8 text-center space-y-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Visit Request Received!</h4>
                  <p className="text-xs text-gray-300">
                    Our Senior Property Advisor is coordinating your preferred slot and chauffeur pickup. Opening details...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3.5 text-left">
                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Patidar"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Mobile Number (WhatsApp Enabled) *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-semibold">+91</span>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        maxLength={10}
                        placeholder="98930 12345"
                        value={quickPhone}
                        onChange={(e) => setQuickPhone(e.target.value.replace(/\D/g, ''))}
                        className="w-full pl-11 pr-3.5 py-2.5 rounded bg-slate-900 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 mb-1">
                      Interested In Configuration
                    </label>
                    <select
                      value={quickConfig}
                      onChange={(e) => setQuickConfig(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-slate-900 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    >
                      <option value="2 BHK Smart Luxury">2 BHK Smart Luxury (1,245 sq.ft - from ₹58.5 L*)</option>
                      <option value="3 BHK Grand Royale">3 BHK Grand Royale (1,785 sq.ft - from ₹84.9 L*)</option>
                      <option value="3.5 BHK Sky Penthouse">3.5 BHK Sky Penthouse (2,420 sq.ft - from ₹1.28 Cr*)</option>
                      <option value="Investment / Multiple Units">Investment / Bulk Units (High Rental Yield)</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="hero-quick-submit-btn"
                      className="w-full py-3 rounded font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-[#c5a059] hover:bg-[#b38f4d] shadow-sm transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      <Car className="w-4 h-4 text-white" />
                      <span>Book Free Visit with Cab</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    100% Privacy. No Spam Calls. Instant WhatsApp confirmation.
                  </p>
                </form>
              )}

              {/* Sample flat live badge */}
              <div className="mt-4 pt-3 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1 text-gray-300">
                  <Building2 className="w-3.5 h-3.5 text-[#c5a059]" />
                  Fully Furnished Sample Flat Ready
                </span>
                <span className="text-[#c5a059] font-semibold">Towers A & B</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

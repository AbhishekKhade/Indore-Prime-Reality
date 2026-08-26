import React from 'react';
import { Phone, Calendar, MessageSquareText, ShieldCheck, Sparkles, Gift, ArrowRight } from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

interface FinalCtaProps {
  onOpenBookingModal: () => void;
  onOpenBrochureModal: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenBookingModal, onOpenBrochureModal }) => {
  return (
    <section className="py-16 bg-[#1a202c] text-white relative overflow-hidden border-t border-gray-800">
      
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#c5a059]/10 via-transparent to-[#c5a059]/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900 rounded-xl p-8 sm:p-12 border border-gray-700 shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Offer Copy */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/20 border border-[#c5a059]/40">
                <Gift className="w-3.5 h-3.5 text-[#c5a059]" />
                Limited Launch Window
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
                Don’t Miss the Exclusive Pre-Launch Pricing at {PROJECT_INFO.projectName}
              </h2>

              <p className="text-sm sm:text-base text-gray-300">
                Residences on Super Corridor are appreciating at 14.5% year-on-year. Book your priority walkthrough today and lock inaugural pricing before the price revision.
              </p>

              {/* Perks list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                  <span>Inaugural Savings up to ₹3.5 Lakhs*</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                  <span>Free Chauffeur Cab for Site Visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                  <span>Modular Kitchen & AC Piping Inclusions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
                  <span>Guaranteed 8.40%* Bank Interest Rate</span>
                </div>
              </div>
            </div>

            {/* Right Col: Action Buttons */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <button
                id="final-cta-book-visit-btn"
                onClick={onOpenBookingModal}
                className="w-full py-4 rounded font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Free VIP Site Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`}
                  className="py-3 px-3 rounded font-semibold text-xs text-white bg-slate-800 hover:bg-slate-700 border border-gray-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call {PROJECT_INFO.contactNumber}</span>
                </a>

                <a
                  href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20please%20send%20brochure%20and%20pricing.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquareText className="w-4 h-4 text-white" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="text-center text-[11px] text-gray-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                RERA Registered: {PROJECT_INFO.reraNumber}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

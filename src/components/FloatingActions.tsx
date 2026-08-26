import React from 'react';
import { Phone, MessageSquareText, Calendar, Car } from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

interface FloatingActionsProps {
  onOpenBookingModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBookingModal }) => {
  return (
    <>
      {/* Desktop Floating WhatsApp & Quick Call Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-3">
        
        {/* Instant WhatsApp Widget */}
        <a
          href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20I%20would%20like%20to%20know%20more%20about%202%20and%203%20BHK%20apartments%20and%20book%20a%20site%20visit.`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="group relative flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping absolute -top-1 -right-1"></span>
          <MessageSquareText className="w-5 h-5 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
            WhatsApp Sales Desk
          </span>
        </a>

        {/* Quick Site Visit Trigger */}
        <button
          onClick={onOpenBookingModal}
          id="floating-book-visit-btn"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#c5a059] hover:bg-[#b38f4d] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 border border-white/20 cursor-pointer"
        >
          <Car className="w-4 h-4 text-white" />
          <span>Book Site Visit (Free Cab)</span>
        </button>
      </div>

      {/* Sticky Mobile Bottom Conversion Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#1a202c]/95 backdrop-blur-md border-t border-gray-800 px-3 py-2.5 flex items-center justify-between gap-2 shadow-2xl">
        
        {/* Call Sales */}
        <a
          href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`}
          id="mobile-bottom-call-btn"
          className="flex-1 py-2.5 rounded bg-slate-800 border border-gray-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20please%20send%20brochure%20and%20pricing.`}
          target="_blank"
          rel="noopener noreferrer"
          id="mobile-bottom-whatsapp-btn"
          className="flex-1 py-2.5 rounded bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <MessageSquareText className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        {/* Book Site Visit Primary CTA */}
        <button
          onClick={onOpenBookingModal}
          id="mobile-bottom-book-visit-btn"
          className="flex-[2] py-2.5 px-2 rounded bg-[#c5a059] hover:bg-[#b38f4d] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow active:scale-95 transition-transform cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Free Visit</span>
        </button>

      </div>
    </>
  );
};

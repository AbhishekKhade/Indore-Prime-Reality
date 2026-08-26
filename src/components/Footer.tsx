import React from 'react';
import { ShieldCheck, MapPin, Phone, Mail, Clock, ArrowUp, Building2, Heart } from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

interface FooterProps {
  onOpenBookingModal: (config?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal, onOpenBrochureModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a202c] text-gray-400 text-xs border-t border-gray-800 relative z-20">
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Address (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#c5a059] flex items-center justify-center text-white font-bold text-xl font-serif shadow-sm">
                IP
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-serif flex items-center gap-1.5">
                  INDORE PRIME <span className="text-[#c5a059] font-sans font-light text-xs tracking-widest uppercase">Realty</span>
                </span>
                <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                  {PROJECT_INFO.projectName} • Super Corridor, Indore
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed">
              Pioneering luxury residential developments in Indore. Built on transparency, Mivan concrete engineering, and high-yield appreciation locations.
            </p>

            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 space-y-1">
              <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>RERA Registered Project</span>
              </div>
              <div className="text-[11px] text-gray-300 font-mono">
                {PROJECT_INFO.reraNumber}
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#overview" className="hover:text-[#c5a059] transition-colors">Overview</a></li>
              <li><a href="#highlights" className="hover:text-[#c5a059] transition-colors">Project Highlights</a></li>
              <li><a href="#residences" className="hover:text-[#c5a059] transition-colors">2 & 3 BHK Plans</a></li>
              <li><a href="#amenities" className="hover:text-[#c5a059] transition-colors">40+ Amenities</a></li>
              <li><a href="#location" className="hover:text-[#c5a059] transition-colors">Location Advantages</a></li>
              <li><a href="#pricing" className="hover:text-[#c5a059] transition-colors">Pricing & EMI</a></li>
            </ul>
          </div>

          {/* Configurations & Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Residences & Booking
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onOpenBookingModal('2 BHK Smart Luxury')} className="hover:text-[#c5a059] transition-colors text-left cursor-pointer">
                  2 BHK Smart Luxury (1,245 sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBookingModal('3 BHK Grand Royale')} className="hover:text-[#c5a059] transition-colors text-left cursor-pointer">
                  3 BHK Grand Royale (1,785 sq.ft)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenBookingModal('3.5 BHK Sky Penthouse')} className="hover:text-[#c5a059] transition-colors text-left cursor-pointer">
                  3.5 BHK Sky Penthouse (2,420 sq.ft)
                </button>
              </li>
              <li>
                <button onClick={onOpenBrochureModal} className="text-[#c5a059] hover:underline transition-colors text-left cursor-pointer">
                  Download Official E-Brochure (PDF)
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#c5a059] transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          {/* Site Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Site Office & Experience Centre
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                <span>{PROJECT_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`} className="hover:text-white">
                  {PROJECT_INFO.contactNumber}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#c5a059] shrink-0" />
                <a href={`mailto:${PROJECT_INFO.email}`} className="hover:text-white">
                  {PROJECT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Open Everyday: 9:00 AM - 7:30 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory Fictional Concept Disclaimer (prominently featured) */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-[11px] text-gray-500 leading-relaxed space-y-3">
          <div className="p-4 rounded-lg bg-slate-900 border border-gray-800 text-gray-400">
            <strong className="text-gray-300">Important Showcase Disclaimer:</strong> {PROJECT_INFO.disclaimerNote} The trademarks, project names, and developer representations are curated strictly for lead-generation web application design and frontend software demonstration purposes.
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} Indore Prime Realty. All Rights Reserved. Masterplanned with luxury standards.
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-gray-400 hover:text-[#c5a059] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

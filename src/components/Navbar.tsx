import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, ShieldCheck, MapPin, MessageSquareText, Download } from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

interface NavbarProps {
  onOpenBookingModal: (config?: string) => void;
  onOpenBrochureModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onOpenBrochureModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Residences', href: '#residences' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Pricing & EMI', href: '#pricing' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro announcement bar */}
      <div className="bg-[#1a202c] text-gray-300 border-b border-gray-800 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[#c5a059] font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              {PROJECT_INFO.reraNumber}
            </span>
            <span className="text-gray-500">|</span>
            <span className="inline-flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
              Super Corridor & Bypass Junction, Indore
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-[#c5a059] font-semibold">
              ★ Limited Launch Privilege: Save up to ₹3.5 Lakhs* this month
            </span>
            <a 
              href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20I%20am%20interested%20in%202%20and%203%20BHK%20apartments.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquareText className="w-3.5 h-3.5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav 
        id="main-navigation"
        className={`transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#1a202c]/95 backdrop-blur-md border-b border-gray-800 py-3 shadow-sm' 
            : 'bg-gradient-to-b from-[#1a202c]/90 via-[#1a202c]/60 to-transparent py-4 md:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-[#1a202c] border border-[#c5a059]/40 flex items-center justify-center shadow-sm text-[#c5a059] font-bold text-xl font-serif">
              I
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white font-serif flex items-center gap-1.5">
                Indore Prime <span className="text-[#c5a059] font-sans font-light text-sm tracking-widest uppercase">Realty</span>
              </span>
              <p className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                The Imperial Crest • Luxury Residences
              </p>
            </div>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#c5a059] transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c5a059] transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`}
              id="nav-call-btn"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded text-xs font-semibold text-gray-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-gray-700 transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{PROJECT_INFO.contactNumber}</span>
            </a>

            <button
              id="nav-brochure-btn"
              onClick={onOpenBrochureModal}
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded text-xs font-bold uppercase tracking-wider text-[#c5a059] hover:text-white hover:bg-[#c5a059] border border-[#c5a059]/40 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              E-Brochure
            </button>

            <button
              id="nav-book-site-visit-btn"
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Free Site Visit</span>
            </button>
          </div>

          {/* Mobile menu toggle button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              id="mobile-book-visit-top-btn"
              onClick={() => onOpenBookingModal()}
              className="sm:hidden px-3 py-1.5 rounded text-[11px] font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d]"
            >
              Book Visit
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1a202c] border-b border-gray-800 px-5 py-6 mt-2 space-y-4 shadow-xl animate-in slide-in-from-top">
            <div className="p-3 bg-slate-900 rounded-lg border border-gray-800 text-xs flex justify-between items-center text-gray-300">
              <span className="flex items-center gap-1.5 text-[#c5a059] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                RERA: {PROJECT_INFO.reraNumber}
              </span>
              <span className="text-emerald-400 font-medium">Possession Dec 2026</span>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded text-sm font-medium text-gray-200 hover:bg-slate-800 hover:text-[#c5a059] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-800 flex flex-col gap-2.5">
              <button
                id="drawer-book-visit-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded text-sm font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Free Site Visit (Cab Included)
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  id="drawer-brochure-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBrochureModal();
                  }}
                  className="py-2.5 rounded text-xs font-semibold text-[#c5a059] border border-[#c5a059]/40 bg-slate-900 flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Brochure PDF
                </button>
                <a
                  href={`tel:${PROJECT_INFO.contactNumber.replace(/\s+/g, '')}`}
                  className="py-2.5 rounded text-xs font-semibold text-white bg-slate-800 border border-gray-700 flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                  Call Sales
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

import React from 'react';
import { 
  Building, 
  Trees, 
  Sparkles, 
  ShieldCheck, 
  Cpu, 
  Train, 
  Compass, 
  Award,
  CheckCircle,
  Clock
} from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

export const ProjectHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Trees,
      title: "75% Open Green Sanctuary",
      description: "8.5 acres of expansive development with Miyawaki forest, zen reflexology walkways, and manicured oxygen-rich lawns.",
      tag: "Nature First"
    },
    {
      icon: Building,
      title: "G+24 Iconic Towers",
      description: "Earthquake-resistant German Mivan Monolithic Concrete construction with triple-height designer entrance lobbies.",
      tag: "A+ Construction"
    },
    {
      icon: Sparkles,
      title: "25,000 sq.ft Club Imperia",
      description: "4-tier signature clubhouse boasting a rooftop infinity pool, private theatre, multi-cuisine cafe, and squash courts.",
      tag: "Resort Living"
    },
    {
      icon: Cpu,
      title: "Smart Home Automation",
      description: "Biometric keyless entry, smart video door phone, mobile-app lighting controls, and high-speed fiber-optic cabling.",
      tag: "Future Ready"
    },
    {
      icon: Train,
      title: "2-Min to Metro Station",
      description: "Unmatched location on Super Corridor 8-lane expressway, right opposite Upcoming Yellow Metro Line station.",
      tag: "Prime Location"
    },
    {
      icon: Compass,
      title: "100% Vaastu Compliant",
      description: "Scientifically crafted floor plans ensuring optimal natural light, cross-ventilation, and positive energetic alignment.",
      tag: "Harmony"
    },
    {
      icon: ShieldCheck,
      title: "3-Tier AI Surveillance",
      description: "24x7 security with CCTV facial recognition, RFID boom barriers for vehicles, and biometric access to all towers.",
      tag: "Total Safety"
    },
    {
      icon: Award,
      title: "MPRERA Certified & Escrow",
      description: "100% clear title land, zero encumbrance, and milestone-linked payment escrow ensuring on-time possession.",
      tag: "Verified Legal"
    }
  ];

  return (
    <section id="highlights" className="py-20 bg-[#f8f9fa] border-b border-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            Master-Planned Excellence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Crafted for Unmatched Grandeur & Lasting Value
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Every square foot at {PROJECT_INFO.projectName} reflects precision engineering, architectural elegance, and thoughtful amenities designed for generational prosperity.
          </p>
        </div>

        {/* 8 Grid Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#c5a059] hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded bg-gray-50 text-[#c5a059] group-hover:bg-[#1a202c] group-hover:text-[#c5a059] transition-colors flex items-center justify-center border border-gray-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded group-hover:text-[#c5a059] group-hover:bg-amber-50/50 transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-[#1a1a1a] font-serif group-hover:text-[#c5a059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#c5a059]">
                  <CheckCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
                  Premium Specification
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Metrics Ribbon */}
        <div className="mt-14 bg-[#1a202c] rounded-xl p-8 text-white shadow-sm border border-gray-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-700">
            <div className="p-2 space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c5a059] font-serif">8.5 Acres</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Lush Green Township</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-serif">G+24 Floors</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">4 High-Rise Towers</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#c5a059] font-serif">40+ Resort</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Lifestyle Amenities</div>
            </div>
            <div className="p-2 space-y-1 pt-4 md:pt-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-serif">Dec 2026</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">Committed Possession</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Building2, 
  CheckCircle2, 
  Scale, 
  Sparkles, 
  HeartHandshake,
  Clock
} from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: Building2,
      title: "German Mivan Monolithic Technology",
      description: "Cast-in-place concrete structure ensuring seismic resilience, maximum internal carpet efficiency, and 100% damp-proof crack-free walls.",
      metric: "A+ Construction Grade"
    },
    {
      icon: Scale,
      title: "100% Clear Title & RERA Escrow",
      description: "Direct legal title ownership with all municipal approvals and bank clearances in place. Dedicated escrow account guarantees on-time completion.",
      metric: "Zero Litigation Risk"
    },
    {
      icon: HeartHandshake,
      title: "12,000+ Happy Families Legacy",
      description: "Decades of proven leadership in Madhya Pradesh real estate, committed to transparent dealings, zero hidden costs, and customer delight.",
      metric: "98.4% On-Time Delivery"
    },
    {
      icon: Sparkles,
      title: "World-Class Tier-1 Brand Fittings",
      description: "Crafted with international fittings including Grohe & Kohler bathroom suites, Schneider modular switches, Saint-Gobain glass, and Otis elevators.",
      metric: "10-Year Structural Warranty"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <Award className="w-3.5 h-3.5 text-[#c5a059]" />
            The Indore Prime Realty Distinction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Why Hundreds of Discerning Buyers Choose Us
          </h2>
          <p className="text-base text-gray-600 font-normal">
            We don’t just construct apartments; we engineer enduring landmarks built on architectural integrity, uncompromising legal compliance, and customer trust.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-200 hover:border-[#c5a059] hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded bg-white text-[#c5a059] group-hover:bg-[#1a202c] group-hover:text-white transition-colors flex items-center justify-center border border-gray-200 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1a1a1a] font-serif group-hover:text-[#c5a059] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-200 flex items-center justify-between text-xs font-bold text-[#1a1a1a]">
                  <span className="text-[#c5a059]">{item.metric}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Construction Snapshot Banner */}
        <div className="mt-14 bg-[#1a202c] text-white rounded-xl p-8 border border-gray-700 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30">
                <Clock className="w-3.5 h-3.5" />
                Live Construction Milestone
              </div>
              <h3 className="text-2xl font-bold font-serif text-white">
                Superstructure Slab Work is 65% Completed on Schedule
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Witness real-time progress on site. All buyers receive monthly 4K drone videography and certified engineering logs.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <a
                href="#lead-form"
                className="px-5 py-3 rounded font-bold uppercase tracking-wider text-xs text-white bg-[#c5a059] hover:bg-[#b38f4d] text-center shadow-sm transition-colors"
              >
                Inspect Construction on Site
              </a>
              <div className="text-center text-[11px] text-gray-400">
                Complimentary chauffeur pickup provided
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  MapPin, 
  Train, 
  Briefcase, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  Clock, 
  Navigation, 
  Car,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { LOCATION_HIGHLIGHTS, PROJECT_INFO } from '../data/propertyData';

interface LocationProps {
  onOpenBookingModal: () => void;
}

export const LocationAdvantages: React.FC<LocationProps> = ({ onOpenBookingModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Transit & Metro', 'IT & Corporate Hubs', 'Healthcare', 'Schools & Colleges', 'Shopping & Lifestyle'];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Transit & Metro': return <Train className="w-4 h-4 text-[#c5a059]" />;
      case 'IT & Corporate Hubs': return <Briefcase className="w-4 h-4 text-[#c5a059]" />;
      case 'Healthcare': return <HeartPulse className="w-4 h-4 text-[#c5a059]" />;
      case 'Schools & Colleges': return <GraduationCap className="w-4 h-4 text-[#c5a059]" />;
      case 'Shopping & Lifestyle': return <ShoppingBag className="w-4 h-4 text-[#c5a059]" />;
      default: return <MapPin className="w-4 h-4 text-[#c5a059]" />;
    }
  };

  const filteredHighlights = selectedCategory === 'All'
    ? LOCATION_HIGHLIGHTS
    : LOCATION_HIGHLIGHTS.filter(h => h.category === selectedCategory);

  return (
    <section id="location" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <MapPin className="w-3.5 h-3.5 text-[#c5a059]" />
            Indore’s Fast-Growing Growth Corridor
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Strategic Location & Seamless Connectivity
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Positioned at the nexus of Super Corridor and Bypass Road, placing you minutes from top IT campuses, the international airport, metro stations, premier hospitals, and retail hubs.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                selectedCategory === cat
                  ? 'bg-[#1a202c] text-white shadow-sm border border-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              {cat !== 'All' && getCategoryIcon(cat)}
              <span>{cat}</span>
            </button>
          ))}
        </div>

        {/* 2-Column Layout: Location Map Hub & Distance Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Map Graphic & Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1a202c] rounded-xl p-6 sm:p-7 text-white border border-gray-700 shadow-xl relative overflow-hidden">
              
              {/* Decorative radial overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c5a059]/10 rounded-full blur-2xl"></div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/20 px-3 py-1 rounded border border-[#c5a059]/40">
                    📍 Prime GPS Coordinates
                  </span>
                  <span className="text-xs text-gray-400">Super Corridor Sector 1</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {PROJECT_INFO.projectName}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1 flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                    <span>{PROJECT_INFO.fullAddress}</span>
                  </p>
                </div>

                {/* Styled Map Graphic Simulation */}
                <div className="bg-slate-900 rounded-lg p-4 border border-gray-700 relative overflow-hidden space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-300 border-b border-gray-800 pb-2">
                    <span className="font-semibold text-white flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
                      Indore Corridor Landmark Radii
                    </span>
                    <span className="text-emerald-400">Direct 8-Lane Road</span>
                  </div>

                  {/* Visual Node Diagram */}
                  <div className="space-y-2.5 pt-1 text-xs">
                    <div className="flex items-center justify-between p-2 rounded bg-slate-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        <span className="font-medium text-gray-200">Indore Metro Station (Yellow Line)</span>
                      </div>
                      <span className="font-bold text-[#c5a059]">400 Mtrs • 2 Min</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-slate-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                        <span className="font-medium text-gray-200">TCS & Infosys Campus SEZ</span>
                      </div>
                      <span className="font-bold text-[#c5a059]">2.8 Km • 5 Mins</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-slate-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span className="font-medium text-gray-200">Devi Ahilya Bai Holkar Airport</span>
                      </div>
                      <span className="font-bold text-[#c5a059]">7.2 Km • 12 Mins</span>
                    </div>

                    <div className="flex items-center justify-between p-2 rounded bg-slate-800 border border-gray-700">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                        <span className="font-medium text-gray-200">Vijay Nagar / Brilliant Conv.</span>
                      </div>
                      <span className="font-bold text-[#c5a059]">8.5 Km • 14 Mins</span>
                    </div>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={onOpenBookingModal}
                      className="w-full py-2.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>Request Free Cab Pickup Route</span>
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-slate-900/80 rounded border border-gray-800 text-xs text-gray-300 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doorstep pickup cab will use the fastest route via Super Corridor expressway.</span>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Distance & Landmark Cards by Category */}
          <div className="lg:col-span-7 space-y-6">
            {filteredHighlights.map((group, idx) => (
              <div 
                key={idx}
                className="bg-[#f8f9fa] rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded bg-white text-[#c5a059] flex items-center justify-center border border-gray-200 shadow-sm">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1a1a1a] font-serif">
                      {group.category}
                    </h4>
                  </div>
                  <span className="text-xs font-semibold text-gray-500">
                    {group.items.length} Key Hubs
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3.5 rounded-lg bg-white border border-gray-200 hover:border-[#c5a059] transition-colors space-y-1 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <span className="font-semibold text-xs sm:text-sm text-[#1a1a1a]">
                          {item.name}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs pt-1">
                        <span className="text-gray-500 font-medium">{item.distance}</span>
                        <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                          <Clock className="w-3 h-3" />
                          {item.travelTime}
                        </span>
                      </div>

                      {item.highlight && (
                        <div className="text-[11px] text-[#c5a059] font-medium pt-0.5">
                          • {item.highlight}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

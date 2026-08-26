import React, { useState } from 'react';
import { 
  Sparkles, 
  Waves, 
  Building2, 
  Dumbbell, 
  Trophy, 
  Smile, 
  Laptop, 
  Trees, 
  ShieldCheck, 
  Zap, 
  CheckCircle,
  Calendar
} from 'lucide-react';
import { AMENITIES } from '../data/propertyData';

interface AmenitiesProps {
  onOpenBookingModal: () => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 40+ Amenities' },
    { id: 'wellness', label: 'Wellness & Spa' },
    { id: 'leisure', label: 'Club & Leisure' },
    { id: 'sports', label: 'Sports & Active' },
    { id: 'family', label: 'Kids & Family' },
    { id: 'security', label: 'Security & Eco' },
  ];

  const filteredAmenities = activeCategory === 'all' 
    ? AMENITIES 
    : AMENITIES.filter(a => a.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Waves': return <Waves className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'Dumbbell': return <Dumbbell className="w-5 h-5" />;
      case 'Trophy': return <Trophy className="w-5 h-5" />;
      case 'Smile': return <Smile className="w-5 h-5" />;
      case 'Laptop': return <Laptop className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="amenities" className="py-20 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            Resort-Style Living in Indore
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            40+ Curated World-Class Lifestyle Amenities
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Whether rejuvenating in the rooftop infinity pool, working from high-speed executive pods, or playing on professional courts — every day feels like a five-star vacation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#1a202c] text-white shadow-sm border border-gray-700'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Amenity Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#c5a059] hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {amenity.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider bg-[#c5a059] text-white shadow-sm">
                    {amenity.badge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white">
                  <div className="w-8 h-8 rounded bg-[#1a202c]/90 backdrop-blur-md text-[#c5a059] flex items-center justify-center border border-gray-700">
                    {getIcon(amenity.iconName)}
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white drop-shadow">
                    {amenity.title}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Operational by Dec 2026
                  </span>
                  <span className="capitalize font-semibold text-[#c5a059]">
                    {amenity.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold text-[#1a1a1a] font-serif">
              Want to experience Club Imperia & our Clubhouse Amenities in 3D?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Schedule a guided walkthrough with our hospitality manager. Doorstep cab assistance provided.
            </p>
          </div>
          <button
            id="amenities-book-visit-btn"
            onClick={onOpenBookingModal}
            className="px-6 py-3 rounded font-bold text-xs sm:text-sm uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm shrink-0 cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book Tour with Cab</span>
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Home, 
  Maximize2, 
  Compass, 
  BedDouble, 
  Bath, 
  Trees, 
  Check, 
  Download, 
  Calendar, 
  CreditCard,
  FileText,
  Eye,
  Layers
} from 'lucide-react';
import { APARTMENT_PLANS } from '../data/propertyData';
import { ApartmentPlan } from '../types';

interface ApartmentOptionsProps {
  onOpenBookingModal: (config?: string) => void;
  onOpenBrochureModal: () => void;
}

export const ApartmentOptions: React.FC<ApartmentOptionsProps> = ({ 
  onOpenBookingModal, 
  onOpenBrochureModal 
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(APARTMENT_PLANS[0].id);
  const [viewMode, setViewMode] = useState<'render' | 'floorplan'>('render');

  const currentPlan = APARTMENT_PLANS.find(p => p.id === selectedPlanId) || APARTMENT_PLANS[0];

  return (
    <section id="residences" className="py-20 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <Home className="w-3.5 h-3.5 text-[#c5a059]" />
            Signature Floor Plans & Layouts
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Thoughtfully Crafted 2 & 3 BHK Living Spaces
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Designed for boundless natural light, generous sit-out balconies, and expansive living spaces with zero square-foot wastage.
          </p>
        </div>

        {/* Configuration Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {APARTMENT_PLANS.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`px-5 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 flex items-center gap-2.5 cursor-pointer shadow-sm ${
                selectedPlanId === plan.id
                  ? 'bg-[#1a202c] text-white border border-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <BedDouble className={`w-4 h-4 ${selectedPlanId === plan.id ? 'text-[#c5a059]' : 'text-gray-500'}`} />
              <span>{plan.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded ${
                selectedPlanId === plan.id ? 'bg-[#c5a059] text-white font-bold' : 'bg-gray-200 text-gray-600'
              }`}>
                {plan.superArea}
              </span>
            </button>
          ))}
        </div>

        {/* Main Interactive Apartment Card */}
        <div className="bg-[#f8f9fa] rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Col: Visual Preview + View Switcher */}
            <div className="lg:col-span-7 relative p-6 sm:p-8 flex flex-col justify-between bg-[#1a202c] text-white">
              
              {/* Image View Controls */}
              <div className="flex items-center justify-between z-10 mb-4">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-gray-700 text-xs font-semibold text-[#c5a059] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5" />
                  {currentPlan.facing}
                </div>
                
                <div className="bg-slate-900/90 backdrop-blur-md p-1 rounded border border-gray-700 flex gap-1">
                  <button
                    onClick={() => setViewMode('render')}
                    className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      viewMode === 'render' 
                        ? 'bg-[#c5a059] text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3.5 h-3.5" />
                    3D Interior View
                  </button>
                  <button
                    onClick={() => setViewMode('floorplan')}
                    className={`px-3 py-1 rounded text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      viewMode === 'floorplan' 
                        ? 'bg-[#c5a059] text-white' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    2D Floor Plan
                  </button>
                </div>
              </div>

              {/* Display Image with Smooth Transition */}
              <div className="relative rounded-lg overflow-hidden aspect-[16/10] my-auto border border-gray-800 shadow-md bg-black">
                <img
                  src={viewMode === 'render' ? currentPlan.image : currentPlan.floorPlanImage}
                  alt={`${currentPlan.name} Layout`}
                  className="w-full h-full object-cover object-center transition-all duration-500 hover:scale-105"
                />
                
                {/* Visual watermark tag */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md text-[11px] text-gray-300 px-2.5 py-1 rounded border border-gray-700">
                  {viewMode === 'render' ? '✨ Experiential Show Flat Render' : '📐 Architectural Blueprint Schematic'}
                </div>
              </div>

              {/* Bottom Quick Spec Bar */}
              <div className="grid grid-cols-4 gap-2 pt-4 mt-4 border-t border-gray-800 text-center">
                <div className="p-2 bg-slate-900/80 rounded border border-gray-800">
                  <div className="text-[11px] text-gray-400">Bedrooms</div>
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                    <BedDouble className="w-3.5 h-3.5 text-[#c5a059]" />
                    {currentPlan.bedrooms} Beds
                  </div>
                </div>
                <div className="p-2 bg-slate-900/80 rounded border border-gray-800">
                  <div className="text-[11px] text-gray-400">Bathrooms</div>
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                    <Bath className="w-3.5 h-3.5 text-[#c5a059]" />
                    {currentPlan.bathrooms} Baths
                  </div>
                </div>
                <div className="p-2 bg-slate-900/80 rounded border border-gray-800">
                  <div className="text-[11px] text-gray-400">Balconies</div>
                  <div className="text-sm font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                    <Trees className="w-3.5 h-3.5 text-[#c5a059]" />
                    {currentPlan.balconies} Decks
                  </div>
                </div>
                <div className="p-2 bg-slate-900/80 rounded border border-gray-800">
                  <div className="text-[11px] text-gray-400">Carpet Area</div>
                  <div className="text-sm font-bold text-emerald-400 flex items-center justify-center gap-1 mt-0.5">
                    <Maximize2 className="w-3.5 h-3.5 text-emerald-400" />
                    {currentPlan.carpetArea}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Col: Details, Specifications, Pricing & CTAs */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-2.5 py-1 rounded border border-[#c5a059]/20">
                    {currentPlan.bhk} Premium Configuration
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    Sample Flat Ready
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] font-serif">
                  {currentPlan.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  {currentPlan.tagline}
                </p>

                {/* Price Matrix Banner */}
                <div className="mt-5 p-4 rounded-lg bg-white border border-gray-200 space-y-2 shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-gray-500">All-Inclusive Starting At</span>
                      <div className="text-2xl sm:text-3xl font-bold text-[#1a1a1a] font-serif">
                        {currentPlan.startingPrice}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-500">Base Rate</span>
                      <div className="text-xs font-bold text-[#c5a059]">{currentPlan.pricePerSqFt}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs">
                    <span className="text-gray-500">Starting EMI:</span>
                    <span className="font-bold text-[#1a1a1a]">{currentPlan.emiStarts} (Pre-Approved)</span>
                  </div>
                </div>

                {/* Key Architectural Inclusions */}
                <div className="mt-5 space-y-2.5">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-700">
                    Signature Inclusions:
                  </div>
                  {currentPlan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Best Suited For tag */}
                <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
                  <span className="font-semibold text-gray-800">Ideal For:</span>
                  <span>{currentPlan.idealFor}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-gray-200">
                <button
                  id={`book-visit-${currentPlan.id}-btn`}
                  onClick={() => onOpenBookingModal(currentPlan.name)}
                  className="w-full py-3 rounded font-bold uppercase tracking-wider text-xs sm:text-sm text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Free Sample Flat Visit ({currentPlan.bhk})</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    id={`download-plan-${currentPlan.id}-btn`}
                    onClick={onOpenBrochureModal}
                    className="py-2.5 rounded font-semibold text-xs text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Download className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>Download Plan PDF</span>
                  </button>

                  <a
                    href="#pricing"
                    className="py-2.5 rounded font-semibold text-xs text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 transition-all flex items-center justify-center gap-1.5 text-center shadow-sm"
                  >
                    <CreditCard className="w-3.5 h-3.5 text-[#c5a059]" />
                    <span>EMI Calculator</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, Play, MessageSquare, CheckCircle, Video } from 'lucide-react';
import { TESTIMONIALS } from '../data/propertyData';

interface TestimonialsProps {
  onOpenBookingModal: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenBookingModal }) => {
  const [selectedVideoModal, setSelectedVideoModal] = useState<string | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-[#f8f9fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/10 border border-[#c5a059]/30">
            <Star className="w-3.5 h-3.5 fill-[#c5a059] text-[#c5a059]" />
            Verified Buyer Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a1a1a] font-serif tracking-tight">
            Hear From Our Future Residents & Investors
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Real stories from IT executives, healthcare professionals, and entrepreneurs who have chosen The Imperial Crest as their dream home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-xl p-7 border border-gray-200 hover:border-[#c5a059] hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group shadow-sm"
            >
              {/* Quotation mark icon */}
              <div className="absolute top-6 right-6 text-gray-200 group-hover:text-gray-300 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c5a059] text-[#c5a059]" />
                  ))}
                  <span className="text-xs font-bold text-gray-700 ml-1.5">5.0 / 5.0</span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  "{t.review}"
                </p>

                {/* Unit Purchased Chip */}
                <div className="p-2.5 rounded bg-gray-50 border border-gray-200 text-xs font-medium text-[#1a1a1a] flex items-center justify-between">
                  <span>Unit: <strong>{t.unitPurchased}</strong></span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>

              {/* Author Profile */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#c5a059]"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#1a1a1a] font-serif">
                      {t.name}
                    </h4>
                    <p className="text-[11px] text-gray-500">
                      {t.designation}
                    </p>
                  </div>
                </div>

                {t.verified && (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Social Proof Strip */}
        <div className="mt-14 p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
              <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
              <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Buyer" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#1a1a1a]">Over 180+ Residences Already Reserved</div>
              <div className="text-xs text-gray-500">Join Indore’s most distinguished community of professionals and entrepreneurs.</div>
            </div>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm cursor-pointer whitespace-nowrap"
          >
            Join the Community
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { 
  Calendar, 
  Car, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  User, 
  Mail, 
  Building, 
  Download, 
  ArrowRight,
  BadgeCheck
} from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';
import { LeadFormData } from '../types';

export const LeadCaptureSection: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredConfiguration: '2 BHK Smart Luxury',
    visitDate: new Date(Date.now() + 86400000).toISOString().split('T')[0], // Default tomorrow
    visitTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
    needCabPickup: true,
    pickupAddress: '',
    budgetRange: '₹50L - ₹75L',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable lead capture processing
    setTimeout(() => {
      const randomRef = 'IPR-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      preferredConfiguration: '2 BHK Smart Luxury',
      visitDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      visitTimeSlot: 'Morning (10:00 AM - 1:00 PM)',
      needCabPickup: true,
      pickupAddress: '',
      budgetRange: '₹50L - ₹75L',
    });
  };

  return (
    <section id="lead-form" className="py-20 bg-[#1a202c] text-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded text-xs font-bold uppercase tracking-widest text-[#c5a059] bg-[#c5a059]/20 border border-[#c5a059]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
            VIP Site Visit Invitation
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight">
            Book Your Free Experiential Site Visit
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-light max-w-2xl mx-auto">
            Tour the fully furnished 2 & 3 BHK sample residences. Enjoy complimentary doorstep AC chauffeur pickup from anywhere in Indore.
          </p>
        </div>

        {/* Lead Capture Box */}
        <div className="bg-slate-900 rounded-xl border border-gray-700 shadow-xl p-6 sm:p-10 lg:p-12">
          
          {isSuccess ? (
            <div className="text-center py-10 space-y-6 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <BadgeCheck className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059] bg-[#c5a059]/10 px-3 py-1 rounded border border-[#c5a059]/30">
                  Booking Confirmed • Ref: #{bookingRef}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  Thank You, {formData.fullName}!
                </h3>
                <p className="text-sm text-gray-300">
                  Your VIP Site Visit has been successfully reserved for <strong>{formData.visitDate}</strong> during the <strong>{formData.visitTimeSlot}</strong> slot.
                </p>
              </div>

              <div className="bg-slate-800 rounded-lg p-5 border border-gray-700 text-left text-xs space-y-2.5">
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Selected Residence:</span>
                  <span className="font-semibold text-white">{formData.preferredConfiguration}</span>
                </div>
                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span className="text-gray-400">Chauffeur Cab Pickup:</span>
                  <span className="font-semibold text-emerald-400">
                    {formData.needCabPickup ? `Arranged for ${formData.pickupAddress || 'Your Address'}` : 'Self-Drive to Site'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Assigned Relationship Manager:</span>
                  <span className="font-semibold text-[#c5a059]">Mr. Ankit Verma (+91 731 498 0000)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <a
                  href={`https://wa.me/${PROJECT_INFO.whatsappNumber.replace('+', '')}?text=Hi%20Indore%20Prime%20Realty,%20my%20site%20visit%20booking%20ref%20is%20${bookingRef}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Open WhatsApp Confirmation</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded text-xs font-semibold text-gray-300 hover:text-white bg-slate-800 border border-gray-700 transition-colors"
                >
                  Book Another Visit / Edit
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#c5a059]" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Khurana"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-slate-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  />
                </div>

                {/* Mobile Phone */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
                    Mobile Number (WhatsApp Enabled) *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-3 text-xs text-gray-400 font-semibold">+91</span>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      placeholder="98930 12345"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full pl-12 pr-4 py-3 rounded bg-slate-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#c5a059]" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh.k@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-slate-800 border border-gray-700 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Configuration */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#c5a059]" />
                    Preferred Apartment *
                  </label>
                  <select
                    value={formData.preferredConfiguration}
                    onChange={(e) => setFormData({ ...formData, preferredConfiguration: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-slate-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  >
                    <option value="2 BHK Smart Luxury">2 BHK Smart Luxury (from ₹58.5 L*)</option>
                    <option value="3 BHK Grand Royale">3 BHK Grand Royale (from ₹84.9 L*)</option>
                    <option value="3.5 BHK Sky Penthouse">3.5 BHK Sky Penthouse (from ₹1.28 Cr*)</option>
                    <option value="Investment / Multiple Units">Investment / Bulk Units</option>
                  </select>
                </div>

                {/* Visit Date */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#c5a059]" />
                    Preferred Visit Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-slate-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  />
                </div>

                {/* Time Slot */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.visitTimeSlot}
                    onChange={(e) => setFormData({ ...formData, visitTimeSlot: e.target.value })}
                    className="w-full px-4 py-3 rounded bg-slate-800 border border-gray-700 text-white text-sm focus:outline-none focus:border-[#c5a059] focus:ring-1 focus:ring-[#c5a059]"
                  >
                    <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM - 1:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Free Cab Option Box */}
              <div className="p-4 sm:p-5 rounded-lg bg-slate-800 border border-gray-700 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Car className="w-5 h-5 text-emerald-400" />
                    <div>
                      <span className="text-sm font-bold text-white">
                        Complimentary AC Doorstep Chauffeur Pickup
                      </span>
                      <p className="text-[11px] text-gray-400">
                        Available anywhere within Indore city limits (Vijay Nagar, Palasia, Rau, Bypass, AB Road, etc.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs font-semibold">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="cabOption"
                        checked={formData.needCabPickup === true}
                        onChange={() => setFormData({ ...formData, needCabPickup: true })}
                        className="accent-[#c5a059]"
                      />
                      <span className="text-emerald-300">Yes, send cab</span>
                    </label>

                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input
                        type="radio"
                        name="cabOption"
                        checked={formData.needCabPickup === false}
                        onChange={() => setFormData({ ...formData, needCabPickup: false })}
                        className="accent-[#c5a059]"
                      />
                      <span className="text-gray-400">No, driving myself</span>
                    </label>
                  </div>
                </div>

                {formData.needCabPickup && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Enter your Indore Pickup Landmark / Society (e.g. Scheme 54, Vijay Nagar)"
                      value={formData.pickupAddress}
                      onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-slate-900 border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>
                )}
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="lead-form-submit-btn"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow-sm flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>{isSubmitting ? 'Confirming Your Slot...' : 'Confirm Free Site Visit & Lock Launch Price'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Security note */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Zero Spam Guarantee
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059]" />
                  Official Builder Sanctioned Direct Pricing
                </span>
                <span className="flex items-center gap-1">
                  <BadgeCheck className="w-4 h-4 text-[#c5a059]" />
                  MPRERA: {PROJECT_INFO.reraNumber}
                </span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};

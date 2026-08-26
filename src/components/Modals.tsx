import React, { useState } from 'react';
import { 
  X, 
  Calendar, 
  Car, 
  CheckCircle2, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  ShieldCheck, 
  User, 
  Sparkles, 
  Building, 
  Compass, 
  Eye,
  Layers,
  ArrowRight,
  Maximize2
} from 'lucide-react';
import { PROJECT_INFO } from '../data/propertyData';
import { saveLead } from '../lib/supabase';

// --- Site Visit Booking Modal ---
interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConfig?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ 
  isOpen, 
  onClose, 
  initialConfig = '2 BHK Smart Luxury' 
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [config, setConfig] = useState(initialConfig);
  const [visitDate, setVisitDate] = useState(new Date(Date.now() + 86400000).toISOString().split('T')[0]);
  const [timeSlot, setTimeSlot] = useState('Morning (10:00 AM - 1:00 PM)');
  const [cabPickup, setCabPickup] = useState(true);
  const [pickupLocation, setPickupLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await saveLead({
        full_name: name,
        phone: phone,
        email: email,
        property_type: config,
        budget: config.includes('3') ? '₹75L - ₹1 Cr' : '₹50L - ₹75L',
        buying_timeline: 'Immediately',
        contact_method: 'WhatsApp',
        visit_date: visitDate,
        time_slot: timeSlot,
        need_cab: cabPickup,
        pickup_address: pickupLocation,
        source: 'VIP Booking Modal',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#1a202c] border border-gray-700 rounded-xl p-6 sm:p-8 text-white shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold font-serif text-white">
              VIP Site Visit Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Thank you, <strong>{name}</strong>. Our concierge has reserved your slot on <strong>{visitDate} ({timeSlot})</strong>.
            </p>

            <div className="p-4 bg-slate-900 rounded-lg border border-gray-800 text-xs text-left space-y-1.5">
              <div><strong className="text-gray-400">Selected:</strong> {config}</div>
              <div><strong className="text-gray-400">Chauffeur Cab:</strong> {cabPickup ? `Enabled (${pickupLocation || 'Indore'})` : 'Self-Drive'}</div>
              <div><strong className="text-gray-400">Direct Desk:</strong> {PROJECT_INFO.contactNumber}</div>
            </div>

            <div className="pt-3">
              <button
                onClick={onClose}
                className="w-full py-3 rounded font-bold text-xs uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors cursor-pointer"
              >
                Close & Return to Page
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded text-[11px] font-bold text-[#c5a059] bg-[#c5a059]/20 border border-[#c5a059]/40">
                <Sparkles className="w-3 h-3 text-[#c5a059]" />
                Exclusive VIP Pass
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Book a Free Site Visit
              </h3>
              <p className="text-xs text-gray-400">
                Sample Flat ready on Super Corridor Indore. Complimentary AC cab pickup included.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Mobile (+91) *</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="98930 12345"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1">Configuration *</label>
                <select
                  value={config}
                  onChange={(e) => setConfig(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="2 BHK Smart Luxury">2 BHK Smart Luxury (from ₹58.5 L*)</option>
                  <option value="3 BHK Grand Royale">3 BHK Grand Royale (from ₹84.9 L*)</option>
                  <option value="3.5 BHK Sky Penthouse">3.5 BHK Sky Penthouse (from ₹1.28 Cr*)</option>
                  <option value="Multiple Units / Investment">Multiple Units / Investment</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Visit Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={visitDate}
                    onChange={(e) => setVisitDate(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1">Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-slate-800 border border-gray-700 text-white text-xs focus:outline-none focus:border-[#c5a059]"
                  >
                    <option value="Morning (10 AM - 1 PM)">10 AM - 1 PM</option>
                    <option value="Afternoon (1 PM - 4 PM)">1 PM - 4 PM</option>
                    <option value="Evening (4 PM - 7 PM)">4 PM - 7 PM</option>
                  </select>
                </div>
              </div>

              {/* Cab Toggle */}
              <div className="p-3 rounded-lg bg-slate-800 border border-gray-700 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <Car className="w-4 h-4" />
                    Free Doorstep Cab in Indore
                  </span>
                  <input
                    type="checkbox"
                    checked={cabPickup}
                    onChange={(e) => setCabPickup(e.target.checked)}
                    className="accent-[#c5a059] w-4 h-4"
                  />
                </div>
                {cabPickup && (
                  <input
                    type="text"
                    placeholder="Enter pickup society / landmark in Indore"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    className="w-full px-3 py-1.5 rounded bg-slate-900 border border-gray-700 text-white text-xs placeholder-gray-500"
                  />
                )}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] shadow transition-colors cursor-pointer"
              >
                Confirm Site Visit Booking
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

// --- Brochure Download Modal ---
interface BrochureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrochureModal: React.FC<BrochureModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  if (!isOpen) return null;

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await saveLead({
        full_name: name,
        phone: phone,
        email: email,
        property_type: 'Brochure Inquiry (2 & 3 BHK)',
        budget: '₹50L - ₹75L',
        buying_timeline: 'Immediately',
        contact_method: 'WhatsApp',
        source: 'Brochure Download Modal',
      });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
      setDownloaded(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#1a202c] border border-gray-700 rounded-xl p-6 sm:p-8 text-white shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 text-gray-400 hover:text-white cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-serif text-white">
              Brochure Ready for Download!
            </h3>
            <p className="text-xs text-gray-300">
              The 24-page Digital Floor Plan & Price Matrix catalog has been prepared for {name}.
            </p>

            <div className="p-4 bg-slate-900 rounded-lg border border-gray-800 text-xs space-y-1 text-gray-300">
              <div>📄 The_Imperial_Crest_Master_Brochure.pdf (14.2 MB)</div>
              <div>✨ Complete 2 & 3 BHK Layout Blueprints included</div>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href="#residences"
                onClick={onClose}
                className="w-full py-3 rounded font-bold text-xs uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Save Digital Brochure</span>
              </a>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs text-gray-400 hover:text-white cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleDownload} className="space-y-4 text-left">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-[#c5a059] bg-[#c5a059]/20 px-2.5 py-0.5 rounded border border-[#c5a059]/40">
                <Download className="w-3 h-3 text-[#c5a059]" />
                Official E-Brochure PDF
              </div>
              <h3 className="text-xl font-bold font-serif text-white">
                Download Project Plans & Cost Sheet
              </h3>
              <p className="text-xs text-gray-400">
                Get high-resolution floor plans, unit dimensions, and payment schedules instantly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikas Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Mobile Number (For WhatsApp Copy) *</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="98930 12345"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs"
                />
              </div>

              <div>
                <label className="block text-xs text-gray-300 mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="vikas@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded bg-slate-800 border border-gray-700 text-white text-xs"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#c5a059] hover:bg-[#b38f4d] transition-colors shadow cursor-pointer"
              >
                Instant Download Brochure (PDF)
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              100% Confidential. Instant Access.
            </p>
          </form>
        )}

      </div>
    </div>
  );
};

// --- Virtual Tour Modal ---
interface VirtualTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookVisit: () => void;
}

export const VirtualTourModal: React.FC<VirtualTourModalProps> = ({ isOpen, onClose, onBookVisit }) => {
  const [activeScene, setActiveScene] = useState<'living' | 'master' | 'clubhouse' | 'infinity-pool'>('living');

  if (!isOpen) return null;

  const scenes = [
    {
      id: 'living',
      name: 'Grand 24-ft Living Foyer',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      description: 'Italian marble flooring, 10.5 ft ceiling height, and floor-to-ceiling glass deck access.'
    },
    {
      id: 'master',
      name: 'Master Suite & Walk-in Wardrobe',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      description: 'Laminated wooden floor, sunrise deck, and ensuite with Grohe fittings.'
    },
    {
      id: 'clubhouse',
      name: 'Club Imperia Banquet Lounge',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      description: '25,000 sq.ft 4-tier luxury clubhouse with private theatre and cafe.'
    },
    {
      id: 'infinity-pool',
      name: 'Rooftop Sky Infinity Pool',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80',
      description: 'Olympic-length temperature controlled swimming pool overlooking Indore green corridor.'
    }
  ];

  const currentScene = scenes.find(s => s.id === activeScene) || scenes[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1a202c] border border-gray-700 rounded-xl p-5 sm:p-7 text-white shadow-2xl max-h-[92vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-700 pb-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c5a059]">
                360° Interactive Experiential Walkthrough
              </span>
              <h3 className="text-xl font-bold font-serif text-white">
                {currentScene.name}
              </h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {scenes.map(s => (
                <button
                  key={s.id}
                  onClick={() => setActiveScene(s.id as any)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-all cursor-pointer ${
                    activeScene === s.id
                      ? 'bg-[#c5a059] text-white font-bold'
                      : 'bg-slate-800 text-gray-300 hover:text-white'
                  }`}
                >
                  {s.name.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Panoramic viewport simulation */}
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-black border border-gray-700 shadow-inner">
            <img
              src={currentScene.image}
              alt={currentScene.name}
              className="w-full h-full object-cover transition-all duration-700"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
              <div className="bg-black/70 backdrop-blur-md px-3 py-2 rounded-lg border border-gray-700 max-w-md">
                <div className="font-bold text-[#c5a059]">{currentScene.name}</div>
                <div className="text-gray-300 text-[11px]">{currentScene.description}</div>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gray-700 text-gray-300">
                <Eye className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>Simulated 3D Model</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="text-xs text-gray-400">
              Want to touch, feel, and inspect the real finishes in person?
            </div>
            
            <button
              onClick={() => {
                onClose();
                onBookVisit();
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded font-bold uppercase tracking-wider text-xs text-white bg-[#c5a059] hover:bg-[#b38f4d] shadow flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book In-Person Sample Flat Visit (Free Cab)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

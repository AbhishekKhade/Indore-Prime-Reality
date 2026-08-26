import { ApartmentPlan, Amenity, LocationHighlight, Testimonial, FaqItem } from '../types';

export const PROJECT_INFO = {
  name: "Indore Prime Realty",
  projectName: "The Imperial Crest",
  tagline: "Indore's Epitome of Ultra-Luxury Living",
  reraNumber: "MPRERA-REG-P-IND-2024-8742",
  locationShort: "Super Corridor & Bypass Junction, Indore, MP",
  fullAddress: "The Imperial Crest, Plot 14-B, Near Metro Station 3, Super Corridor, Indore, Madhya Pradesh 452005",
  contactNumber: "+91 731 498 0000",
  tollFree: "1800 890 4455",
  whatsappNumber: "+919893012345",
  email: "sales@indoreprimerealty.com",
  possessionDate: "December 2026",
  constructionStatus: "Superstructure 65% Completed",
  totalTowers: "4 Iconic High-Rise Towers (G+24 Floors)",
  totalAcres: "8.5 Acres with 75% Open Landscaped Greens",
  totalUnits: "320 Bespoke Residences",
  architect: "Hafeez Contractor Associates & Belt Collins Landscape",
  startingPrice: "₹58 Lakhs*",
  disclaimerNote: "Indore Prime Realty & The Imperial Crest is a fictional concept project created for demonstration and portfolio showcasing purposes. All imagery, mock specifications, and pricing represent a prototype presentation."
};

export const APARTMENT_PLANS: ApartmentPlan[] = [
  {
    id: "2bhk-luxury",
    name: "2 BHK Smart Luxury",
    tagline: "Intelligently designed for young professionals & modern families",
    bhk: "2 BHK",
    superArea: "1,245 sq.ft",
    carpetArea: "895 sq.ft",
    facing: "East & North-East (100% Vaastu Compliant)",
    startingPrice: "₹58.50 Lakhs*",
    pricePerSqFt: "₹4,698 / sq.ft",
    emiStarts: "₹38,200/month*",
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80",
    features: [
      "Master Suite with Italian finish ensuite & wooden deck balcony",
      "Modular Kitchen with piped gas provision & utility dry yard",
      "Triple aspect cross-ventilation with 10.5 ft floor-to-ceiling height",
      "Home automation ready: Smart lock, touch switches & Alexa lighting",
      "Dedicated covered basement car parking with EV point"
    ],
    idealFor: "IT Professionals, Young Couples & Smart Investors"
  },
  {
    id: "3bhk-grand",
    name: "3 BHK Grand Royale",
    tagline: "Spacious family sanctuary with panoramic green views",
    bhk: "3 BHK",
    superArea: "1,785 sq.ft",
    carpetArea: "1,290 sq.ft",
    facing: "East & South-East (Park & Pool Facing)",
    startingPrice: "₹84.90 Lakhs*",
    pricePerSqFt: "₹4,750 / sq.ft",
    emiStarts: "₹55,400/month*",
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Grand 24-foot living-dining room opening to 120 sq.ft sunrise terrace",
      "Opulent Master Bedroom with walk-in wardrobe zone & soaking tub bath",
      "Guest bedroom convertible into acoustic work-from-home executive pod",
      "Designer Italian marble flooring in foyer, living & dining arenas",
      "Separate servant / powder room with independent entry"
    ],
    idealFor: "Growing Families, Doctors, Executives & Upgraders"
  },
  {
    id: "3bhk-penthouse",
    name: "3.5 BHK Sky Penthouse",
    tagline: "Exclusive top-floor residences with private sky terrace & jacuzzi pool",
    bhk: "3.5 BHK + Terrace",
    superArea: "2,420 sq.ft",
    carpetArea: "1,780 sq.ft",
    facing: "Panoramic 270° Skyline View",
    startingPrice: "₹1.28 Crore*",
    pricePerSqFt: "₹5,280 / sq.ft",
    emiStarts: "₹83,600/month*",
    bedrooms: 3,
    bathrooms: 4,
    balconies: 4,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    floorPlanImage: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80",
    features: [
      "Exclusive private terrace garden with pergola & personal sky lounge",
      "Private elevator access with biometric keyless foyer entry",
      "German Grohe / Kohler luxury sanitary fittings & VRV central AC units",
      "Dedicated pooja room + utility quarter + 2 reserved basement parks",
      "Unobstructed views of Indore city skyline and lush green corridors"
    ],
    idealFor: "HNIs, Industrialists, Senior Executives & Luxury Enthusiasts"
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: "infinity-pool",
    title: "Skyline Infinity Pool",
    category: "wellness",
    description: "Olympic-length temperature-controlled infinity pool with wooden sun loungers and kids' aqua splash deck.",
    iconName: "Waves",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80",
    badge: "Rooftop"
  },
  {
    id: "club-imperia",
    title: "25,000 sq.ft Club Imperia",
    category: "leisure",
    description: "4-tier luxury clubhouse with private screening theatre, banquet ballroom, cigar lounge, and cafe.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    badge: "Signature"
  },
  {
    id: "fitness-gym",
    title: "High-Tech Gym & Yoga Deck",
    category: "wellness",
    description: "Equipped with LifeFitness machinery, dedicated CrossFit station, spinning studio, and open-air Zen yoga lawn.",
    iconName: "Dumbbell",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "sports-arena",
    title: "Multi-Sport Court Arena",
    category: "sports",
    description: "Floodlit synthetic tennis court, wooden squash court, badminton stadium, and box cricket turf.",
    iconName: "Trophy",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kids-play",
    title: "Toddler & Kids Adventure Park",
    category: "family",
    description: "Rubberized anti-skid sensory playground, rock climbing wall, skating rink, and treehouse pavilion.",
    iconName: "Smile",
    image: "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "coworking-lounge",
    title: "Executive Business Lounge",
    category: "leisure",
    description: "Work-from-home luxury with fiber-optic WiFi, private Zoom meeting pods, conference room & printing station.",
    iconName: "Laptop",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "zen-gardens",
    title: "Miyawaki Forest & Zen Walkways",
    category: "wellness",
    description: "Botanical butterfly garden, senior citizen reflexology walking paths, aromatic herb lawns, and tranquil water fountains.",
    iconName: "Trees",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "smart-security",
    title: "3-Tier AI Smart Security",
    category: "security",
    description: "24x7 CCTV with facial recognition, RFID automated boom barriers, biometric lifts, and boom-barrier visitor management.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    badge: "24x7 Active"
  },
  {
    id: "ev-charging",
    title: "EV Superchargers & Green Power",
    category: "security",
    description: "Dedicated electric vehicle charging bays, rooftop solar grid for common areas, and 100% DG power backup.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80"
  }
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    category: "Transit & Metro",
    icon: "Train",
    items: [
      { name: "Upcoming Metro Station Line 3", distance: "400 Metres", travelTime: "2 Mins Walk", highlight: "Direct Yellow Line access" },
      { name: "Super Corridor 8-Lane Expressway", distance: "0.2 Km", travelTime: "Direct Access", highlight: "Zero-traffic corridor" },
      { name: "Devi Ahilya Bai Holkar Int'l Airport", distance: "7.2 Km", travelTime: "12 Mins Drive", highlight: "Fly hassle-free" },
      { name: "Indore Central Railway Junction", distance: "11.5 Km", travelTime: "20 Mins Drive", highlight: "Express connectivity" },
      { name: "Ujjain Mahakal Highway / Expressway", distance: "2.5 Km", travelTime: "5 Mins Drive", highlight: "Smooth spiritual trips" }
    ]
  },
  {
    category: "IT & Corporate Hubs",
    icon: "Briefcase",
    items: [
      { name: "TCS Indore Campus & SEZ", distance: "2.8 Km", travelTime: "5 Mins Drive", highlight: "Over 10,000+ tech employees" },
      { name: "Infosys Development Centre", distance: "3.1 Km", travelTime: "6 Mins Drive", highlight: "State-of-the-art campus" },
      { name: "Crystal IT Park (Bhawarkua)", distance: "12 Km", travelTime: "18 Mins Drive", highlight: "Tech ecosystem" },
      { name: "Brilliant Convention Centre (Vijay Nagar)", distance: "8.5 Km", travelTime: "14 Mins Drive", highlight: "Premier business hub" }
    ]
  },
  {
    category: "Healthcare",
    icon: "HeartPulse",
    items: [
      { name: "Medanta Super Speciality Hospital", distance: "6.5 Km", travelTime: "10 Mins Drive", highlight: "Multi-speciality care" },
      { name: "Bombay Hospital Indore", distance: "8.0 Km", travelTime: "12 Mins Drive", highlight: "NABH accredited" },
      { name: "Sri Aurobindo Medical College & Hospital", distance: "4.2 Km", travelTime: "8 Mins Drive", highlight: "24x7 emergency" },
      { name: "Choithram Netralaya & Hospital", distance: "9.5 Km", travelTime: "15 Mins Drive", highlight: "Pioneering medicine" }
    ]
  },
  {
    category: "Schools & Colleges",
    icon: "GraduationCap",
    items: [
      { name: "Delhi Public School (DPS Indore)", distance: "4.5 Km", travelTime: "8 Mins Drive", highlight: "Top rated CBSE school" },
      { name: "The Emerald Heights International School", distance: "6.8 Km", travelTime: "11 Mins Drive", highlight: "India #1 Day-cum-boarding" },
      { name: "Symbiosis University of Applied Sciences", distance: "3.5 Km", travelTime: "6 Mins Drive", highlight: "Premier higher education" },
      { name: "NMIMS Indore & IIM Indore", distance: "5.5 - 14 Km", travelTime: "9 - 22 Mins Drive", highlight: "National league institutions" }
    ]
  },
  {
    category: "Shopping & Lifestyle",
    icon: "ShoppingBag",
    items: [
      { name: "Phoenix Citadel Mall (Largest in MP)", distance: "9.2 Km", travelTime: "14 Mins Drive", highlight: "300+ luxury retail brands" },
      { name: "C21 Mall & Malhar Mega Mall", distance: "8.8 Km", travelTime: "13 Mins Drive", highlight: "Multiplex & entertainment" },
      { name: "Chappan Dukan & Sarafa Bazar", distance: "10.5 Km", travelTime: "18 Mins Drive", highlight: "Iconic Indore food heritage" }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Rajeshwar & Sunita Sharma",
    designation: "Senior Cardiologist, Medanta Indore",
    companyOrProfession: "Healthcare Professionals",
    unitPurchased: "3 BHK Grand Royale (Tower B, 16th Floor)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "As a doctor, peace of mind and quality of construction were paramount. The Imperial Crest stood out with 75% open greens, high ceilings, and sheer proximity to both Medanta and Super Corridor. The sales experience with Indore Prime Realty was 100% transparent with zero hidden fees.",
    verified: true,
    videoDuration: "1:45 min"
  },
  {
    id: "2",
    name: "Vikramaditya Verma",
    designation: "Principal Tech Lead, TCS Indore",
    companyOrProfession: "IT & Tech Professional",
    unitPurchased: "2 BHK Smart Luxury (Tower A)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "Relocating from Pune to Indore was one of my best career decisions. I wanted a smart home close to the TCS campus with modern co-working amenities. Indore Prime Realty provided a smooth site visit with complimentary cab pickup and effortless SBI loan processing!",
    verified: true,
    videoDuration: "2:10 min"
  },
  {
    id: "3",
    name: "Ananya & Rohit Agrawal",
    designation: "Co-Founders, CleanAgro Industries",
    companyOrProfession: "Business Owners & Investors",
    unitPurchased: "3.5 BHK Sky Penthouse",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "We inspected more than 8 projects across AB Road and Bypass before finalizing here. The Mivan construction quality, double-glazed soundproof glass, and rooftop infinity pool are on par with luxury developments in Mumbai and Bengaluru.",
    verified: true
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "Is Indore Prime Realty’s project RERA registered?",
    answer: "Yes, The Imperial Crest is fully approved and registered under Madhya Pradesh Real Estate Regulatory Authority with Registration No: MPRERA-REG-P-IND-2024-8742. All legal documents, land titles, and sanction drawings are available for your verification at our site office."
  },
  {
    id: "faq-2",
    category: "Site Visit",
    question: "How does the Free Site Visit with Doorstep Cab Pickup work?",
    answer: "We provide an exclusive chauffeured air-conditioned cab that picks you and your family up from anywhere within Indore municipal limits, takes you through our experiential sample flat walkthrough, and safely drops you back. You can book directly via our online form or call +91 731 498 0000."
  },
  {
    id: "faq-3",
    category: "Possession & Legal",
    question: "What is the committed possession date and construction progress?",
    answer: "The project possession is strictly scheduled for December 2026. Currently, the structural slab work for Towers A & B is 65% complete. We provide quarterly photographic and video construction updates to all booked buyers along with RERA escrow protection."
  },
  {
    id: "faq-4",
    category: "Pricing & Loans",
    question: "Which banks have pre-approved home loans for this project?",
    answer: "The project has guaranteed pre-approval from all leading nationalized and private financial institutions including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Bank of Baroda, and Kotak Mahindra Bank, offering attractive interest rates starting from 8.40%* p.a."
  },
  {
    id: "faq-5",
    category: "Pricing & Loans",
    question: "What are the flexible payment plans available?",
    answer: "We offer three buyer-friendly schemes: 1) Construction Linked Payment (CLP), 2) 10:90 Subvention / Developer Linked Scheme, and 3) Special Down Payment Plan with an upfront 5% discount on the base sales price."
  },
  {
    id: "faq-6",
    category: "General",
    question: "Are the apartments 100% Vaastu compliant?",
    answer: "Yes, every layout has been meticulously designed following classical Vaastu Shastra principles. Main apartment entrances are positioned in the auspicious East / North-East zones, kitchens are placed in the South-East (Agni), and master bedrooms are situated in the South-West."
  },
  {
    id: "faq-7",
    category: "Possession & Legal",
    question: "What are the expected monthly maintenance charges?",
    answer: "Maintenance charges are estimated at a highly competitive ₹2.50 to ₹2.80 per sq.ft per month, which includes 24x7 security, power backup, clubhouse maintenance, pool sanitation, landscape grooming, and high-speed elevator AMC."
  },
  {
    id: "faq-8",
    category: "General",
    question: "Can I customize internal finishes or room configurations?",
    answer: "Yes! Buyers booking during the ongoing construction phase can consult our in-house interior architects for customized flooring options, pooja room partitions, modular kitchen finishes, and smart automation upgrades."
  }
];

export const BANKING_PARTNERS = [
  { name: "State Bank of India", logo: "SBI", rate: "8.40%*" },
  { name: "HDFC Bank", logo: "HDFC", rate: "8.45%*" },
  { name: "ICICI Bank", logo: "ICICI", rate: "8.50%*" },
  { name: "Axis Bank", logo: "AXIS", rate: "8.55%*" },
  { name: "Bank of Baroda", logo: "BOB", rate: "8.40%*" },
  { name: "Kotak Mahindra Bank", logo: "KOTAK", rate: "8.60%*" }
];

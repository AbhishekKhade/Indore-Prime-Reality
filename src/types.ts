export interface ApartmentPlan {
  id: string;
  name: string;
  tagline: string;
  bhk: string;
  superArea: string;
  carpetArea: string;
  facing: string;
  startingPrice: string;
  pricePerSqFt: string;
  emiStarts: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  image: string;
  floorPlanImage: string;
  features: string[];
  idealFor: string;
}

export interface Amenity {
  id: string;
  title: string;
  category: 'all' | 'wellness' | 'leisure' | 'sports' | 'family' | 'security';
  description: string;
  iconName: string;
  image: string;
  badge?: string;
}

export interface LocationHighlight {
  category: 'Transit & Metro' | 'IT & Corporate Hubs' | 'Healthcare' | 'Schools & Colleges' | 'Shopping & Lifestyle';
  icon: string;
  items: {
    name: string;
    distance: string;
    travelTime: string;
    highlight?: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  companyOrProfession: string;
  unitPurchased: string;
  avatar: string;
  rating: number;
  review: string;
  verified: boolean;
  videoDuration?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Pricing & Loans' | 'Site Visit' | 'Possession & Legal';
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredConfiguration: string;
  propertyType: string;
  budget: string;
  buyingTimeline: string;
  contactMethod: string;
  visitDate: string;
  visitTimeSlot: string;
  needCabPickup: boolean;
  pickupAddress: string;
  sourceOfLead?: string;
}

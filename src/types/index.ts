export type TourismPillarId = 'cultural' | 'wildlife' | 'spiritual' | 'agritourism' | 'adventure';

export interface TourismPillar {
  id: TourismPillarId;
  title: string;
  tagline: string;
  summary: string;
  keyPoints: string[];
  iconName: string;
  badgeColor: string;
  accentBg: string;
}

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  destination: string;
  description: string;
  morning?: string;
  afternoon?: string;
  evening?: string;
  mealsIncluded: string;
  accommodationType: string;
  highlights: string[];
}

export interface Itinerary {
  id: string;
  title: string;
  tagline: string;
  pillar: TourismPillarId;
  pillarLabel: string;
  durationDays: number;
  durationNights: number;
  startLocation: string;
  endLocation: string;
  countries: string[];
  difficulty: 'Easy' | 'Moderate' | 'Active' | 'Challenging';
  groupSize: string;
  idealFor: string;
  overview: string;
  keyHighlights: string[];
  dayByDay: ItineraryDay[];
  included: string[];
  excluded: string[];
  packingAdvice: string[];
  featured?: boolean;
}

export interface CharityFocusArea {
  id: number;
  title: string;
  description: string;
  bullets: string[];
}

export interface CustomSafariRequest {
  fullName: string;
  email: string;
  phone: string;
  countryOfResidence: string;
  pillars: TourismPillarId[];
  preferredDestinations: string[];
  durationDays: number;
  adultsCount: number;
  childrenCount: number;
  estimatedTravelMonth: string;
  estimatedYear: string;
  budgetPreference: 'Budget / Camping' | 'Comfort Mid-Range' | 'Luxury & Boutique' | 'Tailor-Made Custom';
  disabilityAccessibilityNeeds?: string;
  specialRequests?: string;
}

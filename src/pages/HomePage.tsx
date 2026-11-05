import React, { useState } from 'react';
import { 
  Compass, Sparkles, MapPin, Calendar, Users, ArrowRight, Heart, 
  ShieldCheck, Check, Search, Download, ChevronRight, Tent, Car, 
  UtensilsCrossed, Building2, Truck, Plane, Leaf, Award, Globe 
} from 'lucide-react';
import { COMPANY_DETAILS, TOURISM_PILLARS, WHY_CHOOSE_US, GEOGRAPHIC_REGIONS } from '../data/companyData';
import { ALL_ITINERARIES, FEATURED_ITINERARIES } from '../data/itinerariesData';
import { SAFARI_IMAGES } from '../data/imageAssets';
import { Itinerary, TourismPillarId } from '../types';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary?: Itinerary) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedPillarFilter, setSelectedPillarFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeHeroTab, setActiveHeroTab] = useState<'gorilla' | 'sipi' | 'savannah'>('gorilla');

  const heroImages = {
    gorilla: {
      url: SAFARI_IMAGES.gorillaHero,
      title: 'Bwindi Impenetrable Mountain Gorillas',
      tagline: 'Misty Afro-montane rainforest habitat of over half the world’s surviving gentle giants',
      destination: 'Bwindi Impenetrable National Park, Southwestern Uganda',
      tourId: 'bwindi-gorilla-trekking-4day',
      tourLabel: 'View 4-Day Bwindi Gorilla Tour'
    },
    sipi: {
      url: SAFARI_IMAGES.sipiFalls,
      title: 'Mount Elgon & Sipi Falls Waterfalls',
      tagline: 'Three thunderous cascades and lush Arabica coffee terraces at our home base in Mbale',
      destination: 'Mbale & Kapchorwa, Eastern Uganda',
      tourId: 'mount-elgon-sipi-falls-5day',
      tourLabel: 'View 5-Day Mount Elgon & Sipi Explorer'
    },
    savannah: {
      url: SAFARI_IMAGES.savannahWildlife,
      title: 'Queen Elizabeth & Murchison Big Game',
      tagline: 'Elephants, lions, giraffes, and Kazinga Channel boat safaris across golden plains',
      destination: 'Queen Elizabeth & Murchison Falls National Parks',
      tourId: 'wild-africa-living-cultures',
      tourLabel: 'View 10-Day Wild Africa Itinerary'
    }
  };

  const currentHero = heroImages[activeHeroTab];

  const filteredItineraries = ALL_ITINERARIES.filter((it) => {
    const matchesPillar = selectedPillarFilter === 'all' || it.pillar === selectedPillarFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      it.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      it.countries.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section with High-Fidelity Safari Photography */}
      <section className="relative bg-[#1C1917] text-white overflow-hidden">
        {/* Full-bleed background hero photograph with measured contrast scrim */}
        <div className="absolute inset-0">
          <img
            src={currentHero.url}
            alt={currentHero.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-all duration-700 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 7 Columns: Brand Proposition & CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-xs">
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mbale, Eastern Uganda · Base of Mount Elgon · Connecting Africa</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block">
                  JAMAINUS SAFARIS · Explore The Adventure
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                  Discover the <span className="text-emerald-400 italic">Soul of Africa</span>.
                </h1>
              </div>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl">
                Africa is more than a safari destination. It is a continent of ancient civilizations, vibrant communities, remarkable biodiversity, sacred places, and living histories. Jamainus Safaris brings you authentic adventures across <strong>Uganda, Rwanda, Kenya, Tanzania & Zanzibar</strong>.
              </p>

              {/* Action Buttons styled with the flyer's palette */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {/* Book a Trip - circular/rounded blue badge from flyer */}
                <button
                  onClick={() => onNavigate('/custom-safari')}
                  className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-95 transition-all rounded-full shadow-lg shadow-blue-900/40 flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-2 h-2 rounded-full bg-blue-200 animate-ping" />
                  <span>BOOK A TRIP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/itineraries')}
                  className="px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#166534] hover:bg-[#14532d] active:scale-95 transition-all rounded-md shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Safaris</span>
                </button>

                <a
                  href={COMPANY_DETAILS.officialPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-emerald-300 hover:text-emerald-200 border border-emerald-800/80 hover:border-emerald-700 rounded-md flex items-center gap-2 transition-colors backdrop-blur-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Company Profile PDF</span>
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center gap-5 text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Certified Uganda Operator (MTWA & UTB)</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>East Africa Multi-Country Routes</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Jamainus Charity Foundation</span>
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Featured Destination Card */}
            <div className="lg:col-span-5">
              <div className="bg-stone-900/90 backdrop-blur-md rounded-2xl border border-stone-700 p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold">
                    Featured Destination
                  </span>
                  <div className="flex items-center gap-1 bg-stone-800/90 p-1 rounded-md text-xs">
                    <button
                      onClick={() => setActiveHeroTab('gorilla')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'gorilla'
                          ? 'bg-[#166534] text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Gorillas
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('sipi')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'sipi'
                          ? 'bg-[#166534] text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Sipi Falls
                    </button>
                    <button
                      onClick={() => setActiveHeroTab('savannah')}
                      className={`px-2 py-1 rounded transition-colors cursor-pointer ${
                        activeHeroTab === 'savannah'
                          ? 'bg-[#166534] text-white font-semibold'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Savannah
                    </button>
                  </div>
                </div>

                {/* Destination Preview Image */}
                <div className="h-48 sm:h-56 rounded-xl overflow-hidden relative border border-stone-800">
                  <img
                    src={currentHero.url}
                    alt={currentHero.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                    <div className="text-white text-xs space-y-0.5">
                      <span className="font-semibold block">{currentHero.title}</span>
                      <span className="text-stone-300 text-[11px] block">{currentHero.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {currentHero.tagline}
                  </p>
                  <button
                    onClick={() => onNavigate(`/itinerary/${currentHero.tourId}`)}
                    className="w-full py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>{currentHero.tourLabel}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Search & Quick Filter Bar */}
      <section className="-mt-10 max-w-5xl mx-auto px-4 sm:px-8 relative z-20">
        <div className="bg-[#FAF8F5] p-5 sm:p-6 rounded-xl shadow-xl border border-stone-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            <div className="md:col-span-5 relative">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Search Journeys & Destinations
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Gorilla, Rwanda, Serengeti, Mara, Sipi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#166534] text-stone-800"
                />
              </div>
            </div>

            <div className="md:col-span-4">
              <label className="block text-xs font-semibold uppercase tracking-wider text-stone-600 mb-1">
                Filter by Tourism Pillar
              </label>
              <select
                value={selectedPillarFilter}
                onChange={(e) => setSelectedPillarFilter(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#166534] text-stone-800"
              >
                <option value="all">All Tourism Pillars</option>
                <option value="cultural">Cultural Tourism</option>
                <option value="wildlife">Wildlife & Nature Tourism</option>
                <option value="spiritual">Religious & Spiritual</option>
                <option value="agritourism">Agritourism & Coffee</option>
              </select>
            </div>

            <div className="md:col-span-3 flex items-end">
              <button
                onClick={() => onNavigate('/itineraries')}
                className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#166534] hover:bg-[#14532d] rounded-md transition-colors text-center cursor-pointer shadow-xs"
              >
                View ({filteredItineraries.length}) Tours
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Official Accreditations & Certifications Strip from Flyer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-xl border border-stone-200 p-6 shadow-xs">
          <div className="text-center mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#166534]">
              Regulatory Compliance & Professional Affiliations
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900 mt-0.5">
              Fully Registered & Certified With
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {COMPANY_DETAILS.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 hover:border-[#166534] hover:shadow-xs transition-all flex flex-col items-center text-center justify-between space-y-2 group"
              >
                <div className="w-full h-14 flex items-center justify-center p-1 bg-white rounded border border-stone-100">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} (${cert.acronym})`}
                    referrerPolicy="no-referrer"
                    className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <span className="font-bold text-xs text-[#166534] block">{cert.acronym}</span>
                  <span className="text-[11px] text-stone-600 line-clamp-2 leading-tight block mt-0.5">
                    {cert.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Services Offered (10 Services from Flyer) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <div className="inline-block px-3 py-1 rounded bg-[#166534] text-white text-xs font-bold uppercase tracking-wider mb-2">
              Services Offered
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Complete East African Safari Operations
            </h2>
            <p className="text-sm text-stone-600 mt-1 max-w-2xl">
              From authorized forest camping and custom 4x4 tourist vans to expert naturalist guides, tourist security, and airport concierge.
            </p>
          </div>

          <button
            onClick={() => onNavigate('/custom-safari')}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-full shadow-md self-start sm:self-auto cursor-pointer"
          >
            BOOK A TRIP
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_DETAILS.servicesOffered.map((service, idx) => {
            const icons: Record<string, React.ReactNode> = {
              Tent: <Tent className="w-5 h-5 text-[#166534]" />,
              Car: <Car className="w-5 h-5 text-[#166534]" />,
              Compass: <Compass className="w-5 h-5 text-[#166534]" />,
              UtensilsCrossed: <UtensilsCrossed className="w-5 h-5 text-[#166534]" />,
              Building2: <Building2 className="w-5 h-5 text-[#166534]" />,
              Users: <Users className="w-5 h-5 text-[#166534]" />,
              Truck: <Truck className="w-5 h-5 text-[#166534]" />,
              ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#166534]" />,
              Plane: <Plane className="w-5 h-5 text-[#166534]" />,
              Leaf: <Leaf className="w-5 h-5 text-[#166534]" />,
            };

            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-5 border border-stone-200 shadow-xs hover:border-[#166534] hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center group-hover:bg-[#166534] group-hover:text-white transition-colors">
                    {icons[service.icon] || <Check className="w-5 h-5 text-[#166534]" />}
                  </div>

                  <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#166534] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center text-[11px] font-semibold text-[#166534]">
                  <span>Available Across East Africa</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Ecotourism Statement Banner directly from Flyer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#0f3d1f] via-[#166534] to-[#14532d] rounded-2xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-4xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/60 text-emerald-200 text-xs font-semibold">
              <Leaf className="w-4 h-4 text-emerald-300" />
              <span>Jamainus Safaris Ecotourism Philosophy</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
              Travel That Protects Biodiversity & Empowers Communities
            </h3>

            <blockquote className="text-base sm:text-lg text-emerald-50 leading-relaxed font-serif italic border-l-4 border-emerald-400 pl-4 py-1">
              "{COMPANY_DETAILS.ecotourismStatement}"
            </blockquote>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-emerald-200">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Zero Single-Use Plastics On Safari</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Community Village Revenue Sharing</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Disability Accessible Safari Vehicles</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Official Flyer Asset & Base Details Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-stone-900 text-white rounded-2xl overflow-hidden border border-stone-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 p-6 sm:p-8 space-y-5">
            <div className="inline-block px-3 py-1 rounded-full bg-[#166534] text-emerald-200 text-xs font-bold uppercase tracking-wider">
              Official Jamainus Safaris Field Guide
            </div>

            <h2 className="font-serif text-3xl font-bold text-white">
              Explore The Adventure
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Covering mountains, waterfalls, wildlife, long treks, and cultural expeditions across <strong>Uganda, Kenya, Tanzania, Zanzibar, Rwanda, Burundi, Egypt, DR Congo, and South Africa</strong>.
            </p>

            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2 text-xs">
              <div className="text-emerald-400 font-semibold uppercase tracking-wider">
                Direct Booking Hotline & WhatsApp:
              </div>
              <div className="font-mono text-sm text-white font-bold">
                0779448916 / 0785254899 / 0706987025
              </div>
              <div className="text-stone-400 text-[11px] pt-1">
                P.O. Box 530, Mbale, Eastern Region, Uganda
              </div>
              <div className="text-stone-400 text-[11px]">
                Official Emails: jjamainus@gmail.com · jamainus784@yahoo.com
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/custom-safari')}
                className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
              >
                BOOK A TRIP NOW
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-all cursor-pointer"
              >
                Contact Mbale Base
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 p-4 sm:p-6 bg-stone-950/50 flex items-center justify-center">
            <div className="rounded-xl overflow-hidden border border-stone-700 shadow-2xl max-h-[380px] w-full bg-stone-900 relative group">
              <img
                src={SAFARI_IMAGES.officialFlyer}
                alt="Jamainus Safaris Official Services Flyer"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] text-stone-300">
                Official Jamainus Safaris Field Flyer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* East African Multi-Country Destinations Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
            East African Itineraries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Rwanda, Tanzania, Kenya & Uganda Safaris
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            In addition to our flagship Uganda itineraries, explore our dedicated safaris in Rwanda, Kenya, and Tanzania Northern Circuit & Zanzibar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card: Rwanda */}
          <div
            onClick={() => onNavigate('/itinerary/rwanda-gorillas-golden-monkeys-5day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-emerald-900 relative overflow-hidden">
                <img
                  src={SAFARI_IMAGES.gorillaHero}
                  alt="Rwanda Gorillas & Golden Monkeys"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#166534] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                  Rwanda Safari
                </div>
                <div className="absolute bottom-2 right-3 text-white text-xs font-mono font-bold bg-black/60 px-2 py-0.5 rounded">
                  5 Days / 4 Nights
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#166534] transition-colors">
                  Rwanda Gorillas & Golden Monkeys
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Volcanoes National Park gorilla tracking, endangered golden monkeys, Iby'iwacu Cultural Village, and Lake Kivu boat cruise.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <span className="text-xs font-semibold text-[#166534] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Rwanda Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card: Kenya */}
          <div
            onClick={() => onNavigate('/itinerary/kenya-maasai-mara-amboseli-6day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-amber-900 relative overflow-hidden">
                <img
                  src={SAFARI_IMAGES.savannahWildlife}
                  alt="Kenya Maasai Mara & Amboseli"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1d4ed8] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                  Kenya Safari
                </div>
                <div className="absolute bottom-2 right-3 text-white text-xs font-mono font-bold bg-black/60 px-2 py-0.5 rounded">
                  6 Days / 5 Nights
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#1d4ed8] transition-colors">
                  Classic Kenya: Mara & Amboseli
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Maasai Mara big cats & Great Migration, authentic Maasai warrior manyatta visit, and Amboseli elephant herds under Mount Kilimanjaro.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <span className="text-xs font-semibold text-[#1d4ed8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Kenya Itinerary</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card: Tanzania Northern Circuit */}
          <div
            onClick={() => onNavigate('/itinerary/tanzania-serengeti-ngorongoro-7day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-stone-900 relative overflow-hidden">
                <img
                  src={SAFARI_IMAGES.savannahWildlife}
                  alt="Tanzania Serengeti & Ngorongoro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#166534] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                  Tanzania Safari
                </div>
                <div className="absolute bottom-2 right-3 text-white text-xs font-mono font-bold bg-black/60 px-2 py-0.5 rounded">
                  7 Days / 6 Nights
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#166534] transition-colors">
                  Tanzania Northern Circuit
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Tarangire baobabs & elephants, Ngorongoro Crater caldera Big 5 descent, and endless plains of the Central Serengeti.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <span className="text-xs font-semibold text-[#166534] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Tanzania Circuit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card: Tanzania & Zanzibar Beach */}
          <div
            onClick={() => onNavigate('/itinerary/tanzania-serengeti-zanzibar-9day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="h-44 bg-cyan-900 relative overflow-hidden">
                <img
                  src={SAFARI_IMAGES.sipiFalls}
                  alt="Tanzania Serengeti & Zanzibar"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#1d4ed8] text-white text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow">
                  Bush to Beach
                </div>
                <div className="absolute bottom-2 right-3 text-white text-xs font-mono font-bold bg-black/60 px-2 py-0.5 rounded">
                  9 Days / 8 Nights
                </div>
              </div>
              <div className="p-4 space-y-1.5">
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#1d4ed8] transition-colors">
                  Tanzania Bush to Beach & Zanzibar
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Tarangire & Serengeti wildlife bush flight to Zanzibar, Stone Town UNESCO walk, organic spice tour, and Swahili dhow cruise.
                </p>
              </div>
            </div>
            <div className="p-4 pt-0">
              <span className="text-xs font-semibold text-[#1d4ed8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>View Bush to Beach</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: The Four Dimensions of Africa Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Breathtaking Africa
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Landscapes, Wildlife & Living Culture
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            From the cascading volcanic slopes of Mount Elgon to the savannas of Queen Elizabeth and ancient pilgrimage shrines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Sipi Falls (Eastern Uganda Base) */}
          <div
            onClick={() => onNavigate('/itinerary/mount-elgon-sipi-falls-5day')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.sipiFalls}
                alt="Sipi Falls and Mount Elgon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Eastern Uganda
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Mount Elgon & Sipi Falls
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  The home base of Jamainus Safaris in Mbale. Three thunderous waterfalls plunging into coffee-terraced valleys.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>Explore Home Circuit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Wildlife Savannah */}
          <div
            onClick={() => onNavigate('/itinerary/wild-africa-living-cultures')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.savannahWildlife}
                alt="Uganda Wildlife Savannah"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Savannah Wilderness
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Big Five Savannah Safaris
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Elephants, tree-climbing lions, giraffes, and Kazinga Channel boat cruises in Queen Elizabeth and Murchison Falls.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Wildlife Itineraries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Arabica Coffee Agritourism */}
          <div
            onClick={() => onNavigate('/itinerary/coffee-tea-agricultural-trail')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.coffeeHarvest}
                alt="Arabica Coffee Agritourism Harvest"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Agritourism
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Coffee, Tea & Food Heritage
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Hand-picking volcanic Mount Elgon Arabica cherries, clay pot roasting over open fire, and tea plucking with co-ops.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Agritourism Trails</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 4: Faith & Spiritual Heritage */}
          <div
            onClick={() => onNavigate('/itinerary/africa-faith-heritage-trail')}
            className="group cursor-pointer rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-md transition-all flex flex-col"
          >
            <div className="h-52 relative overflow-hidden bg-stone-100">
              <img
                src={SAFARI_IMAGES.namugongoShrine}
                alt="Uganda Martyrs Sacred Shrine"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-semibold uppercase px-2 py-0.5 rounded">
                Spiritual Heritage
              </div>
            </div>
            <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  Africa Faith & Heritage Trail
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  Namugongo Martyrs Basilica, Old Kampala National Mosque, historic cathedrals, and sacred hill sanctuaries.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-800 pt-2 flex items-center gap-1">
                <span>View Pilgrimage Trails</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Four Pillars of Jamainus Safaris */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Our Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            The Four Pillars of Tourism
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Together, these four complementary pillars offer a broader perspective on African travel—one that connects people with places, communities, heritage, and nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TOURISM_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl p-6 border border-stone-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-stone-400 font-semibold">
                    0{idx + 1}
                  </span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded border ${pillar.badgeColor}`}>
                    {pillar.title}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-medium text-amber-800 italic">
                  "{pillar.tagline}"
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {pillar.summary}
                </p>

                <ul className="space-y-1.5 pt-2 border-t border-stone-100 text-xs text-stone-600">
                  {pillar.keyPoints.slice(0, 3).map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5">
                      <span className="text-amber-700 shrink-0 font-bold">·</span>
                      <span className="line-clamp-2">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => onNavigate('/pillars')}
                  className="text-xs font-semibold text-amber-800 hover:text-amber-950 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                >
                  <span>Explore Experiences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Signature Journeys (from Company Profile Section 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-5">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
              Curated Expeditions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              Signature Experience Concepts
            </h2>
            <p className="text-sm text-stone-600 mt-1">
              Distinctive journeys bringing together our four pillars across Uganda and East Africa.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/itineraries')}
            className="text-xs font-semibold uppercase tracking-wider text-[#166534] hover:text-[#0f3d1f] flex items-center gap-1.5 self-start md:self-auto cursor-pointer"
          >
            <span>View All ({ALL_ITINERARIES.length}) Itineraries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_ITINERARIES.slice(0, 6).map((itinerary) => (
            <div
              key={itinerary.id}
              className="bg-white rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-br from-stone-900 to-stone-800 text-white relative">
                <div className="flex items-center justify-between text-xs text-stone-300 mb-3">
                  <span className="font-mono text-emerald-400 font-semibold">
                    {itinerary.durationDays} Days / {itinerary.durationNights} Nights
                  </span>
                  <span className="text-stone-300">
                    {itinerary.countries.join(', ')}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-white leading-snug">
                  {itinerary.title}
                </h3>

                <p className="text-xs text-emerald-200/90 italic mt-1 line-clamp-1">
                  {itinerary.tagline}
                </p>

                <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center gap-3 text-xs text-stone-300">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-emerald-400" />
                    <span className="truncate max-w-[140px]">{itinerary.startLocation}</span>
                  </span>
                  <span>·</span>
                  <span>{itinerary.difficulty}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3 mb-4">
                    {itinerary.overview}
                  </p>

                  <div className="space-y-1.5 border-t border-stone-100 pt-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-500 block">
                      Tour Highlights
                    </span>
                    {itinerary.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="text-xs text-stone-700 flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#166534] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onNavigate(`/itinerary/${itinerary.id}`)}
                    className="text-xs font-semibold text-stone-800 hover:text-[#166534] transition-colors cursor-pointer"
                  >
                    View Day-by-Day Plan
                  </button>
                  <button
                    onClick={() => onOpenInquiry(itinerary)}
                    className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#166534] hover:bg-[#14532d] rounded-md transition-colors cursor-pointer"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Geographic Vision - From East Africa to the Continent */}
      <section className="bg-stone-100 py-16 px-4 sm:px-8 border-y border-stone-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
              Continental Horizons
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
              Our Geographic Vision
            </h2>
            <p className="text-base text-stone-600 leading-relaxed">
              JAMAINUS SAFARIS is based in Uganda, with an ambition to grow into a tourism brand connecting travellers with destinations across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GEOGRAPHIC_REGIONS.map((region, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-xl border bg-white shadow-xs ${
                  idx === 0
                    ? 'border-emerald-500 ring-1 ring-emerald-500/30'
                    : 'border-stone-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    {region.name}
                  </h3>
                  {idx === 0 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-[#166534]">
                      Primary Base
                    </span>
                  )}
                </div>

                <div className="text-xs font-semibold text-[#166534] mb-3">
                  {region.role}
                </div>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {region.summary}
                </p>

                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-500">
                  <strong className="text-stone-700">Target Destinations:</strong>{' '}
                  {region.countries.join(', ')}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('/destinations')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#166534] hover:text-[#0f3d1f]"
            >
              <span>Explore Detailed Regional Circuits & Destinations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Jamainus Safaris? (Section 11) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
            Our Differentiators
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Why Choose Jamainus Safaris?
          </h2>
          <p className="text-base text-stone-600 leading-relaxed">
            Every journey tells a story. We prioritize authentic human encounters, cultural custodians, and responsible travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2.5"
            >
              <div className="text-[#166534] text-xs font-mono font-bold">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Jamainus Charity Foundation LTD Spotlight (Section 9) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-8 sm:p-12 relative overflow-hidden border border-stone-800">
          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/50 text-rose-300 text-xs font-medium">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>The Charity Arm of JAMAINUS SAFARIS</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              JAMAINUS CHARITY FOUNDATION LTD
            </h2>

            <p className="text-emerald-400 font-serif italic text-lg">
              Slogan: "A Chance to Make a Difference."
            </p>

            <p className="text-sm text-stone-300 leading-relaxed">
              We believe communities should not be left behind as tourism creates new opportunities. The Foundation focuses on <strong>disability inclusion</strong>, support for vulnerable people (orphans, widows, elders), education and skills development, and nature conservation through ecotourism.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/charity')}
                className="px-5 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Explore Charity Programs & Focus Areas
              </button>
              <button
                onClick={() => onNavigate('/about')}
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Our Responsible Tourism Charter
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Safari Tailor-Made CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
          Ready to Craft Your African Journey?
        </h2>
        <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Tell us about your interests, dream destinations, travel dates, and any accessibility or disability requirements. Our local safari experts in Mbale will design a custom proposal tailored to you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => onNavigate('/custom-safari')}
            className="px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-full shadow-lg shadow-blue-900/30 transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>BOOK A TRIP / PLAN CUSTOM SAFARI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('/contact')}
            className="px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-stone-800 bg-white border border-stone-300 hover:bg-stone-50 rounded-full transition-all"
          >
            Contact Mbale Office Directly
          </button>
        </div>
      </section>
    </div>
  );
};

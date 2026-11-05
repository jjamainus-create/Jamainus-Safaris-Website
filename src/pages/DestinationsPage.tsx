import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { GEOGRAPHIC_REGIONS, COMPANY_DETAILS } from '../data/companyData';
import { ALL_ITINERARIES } from '../data/itinerariesData';
import { MapPin, Compass, ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary?: any) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [selectedCircuit, setSelectedCircuit] = useState<'east' | 'west' | 'north' | 'regional'>('east');

  const circuits = [
    {
      id: 'east',
      title: 'Eastern Uganda (The Jamainus Home Base)',
      tagline: 'Foothills of Mount Elgon, Sipi Waterfalls & River Nile',
      highlights: [
        'Mbale City – The regional headquarters and vibrant cultural capital of Bugisu',
        'Mount Elgon National Park – World’s largest intact volcanic caldera and bamboo zones',
        'Sipi Falls – 3 magnificent tiered waterfalls plunging into Karamoja view basins',
        'Kapchorwa Arabica coffee farming cooperatives and hands-on cupping trails',
        'Jinja Adventure Circuit – Historic Source of the River Nile and grade-5 rapids',
        'Tororo Rock – Dramatic volcanic plug visible across eastern plains'
      ],
      tours: ['mount-elgon-sipi-falls-5day', 'coffee-tea-agricultural-trail', 'african-rural-life-experience']
    },
    {
      id: 'west',
      title: 'Southwestern Uganda & Primate Corridors',
      tagline: 'Ancient Afro-Montane Forests, Mountain Gorillas & Rift Lakes',
      highlights: [
        'Bwindi Impenetrable National Park – UNESCO sanctuary for mountain gorillas',
        'Kibale Forest National Park – Africa’s primate capital with 13 primate species',
        'Queen Elizabeth National Park – Tree-climbing lions of Ishasha & Kazinga channel',
        'Lake Bunyonyi – Serene island-studded waters and traditional dugout canoeing',
        'Rwenzori Mountains of the Moon – Glacial peaks and endemic giant lobelias'
      ],
      tours: ['bwindi-gorilla-trekking-4day', 'soul-of-africa-journey', 'forest-herbs-heritage-experience']
    },
    {
      id: 'north',
      title: 'Northern Uganda & Karamoja Wild Frontiers',
      tagline: 'Untamed Savannah, Roaring Waterfalls & Indigenous Manyattas',
      highlights: [
        'Murchison Falls National Park – The Nile forcefully roaring through a 7-meter gorge',
        'Kidepo Valley National Park – Africa’s true lost wilderness with cheetahs and ostriches',
        'Ziwa Rhino Sanctuary – The only place to track wild white rhinos on foot in Uganda',
        'Moroto & Kotido – Authentic Karamojong pastoralist warrior cultural encounters',
        'Acholi and Tepeth ancestral heritage communities'
      ],
      tours: ['murchison-falls-4day', 'wild-africa-living-cultures']
    },
    {
      id: 'regional',
      title: 'Trans-Border East Africa Circuit (Rwanda, Kenya, Tanzania & Zanzibar)',
      tagline: 'Uganda, Rwanda, Kenya and Tanzania Seamless Connections',
      highlights: [
        'Rwanda: Volcanoes National Park mountain gorillas & golden monkeys',
        'Kenya: Maasai Mara Big Cats, wildebeest migration & Amboseli Kilimanjaro herds',
        'Tanzania: Serengeti endless plains & Ngorongoro Caldera Big 5 descent',
        'Zanzibar: Stone Town UNESCO spice heritage and turquoise Swahili beaches',
        'Burundi & DR Congo: Trans-boundary rift lakes and Virunga extensions'
      ],
      tours: [
        'rwanda-gorillas-golden-monkeys-5day', 
        'kenya-maasai-mara-amboseli-6day', 
        'tanzania-serengeti-ngorongoro-7day', 
        'tanzania-serengeti-zanzibar-9day', 
        'east-african-discovery-trail'
      ]
    }
  ];

  const activeCircuit = circuits.find((c) => c.id === selectedCircuit)!;

  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Geographic Vision & Destinations' }]} onNavigate={onNavigate} />

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            From East Africa to the Continent
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Our Geographic Vision
          </h1>
          <p className="text-base text-stone-700 leading-relaxed">
            JAMAINUS SAFARIS is based in Mbale, Eastern Uganda, with an ambition to develop partnerships and experiences across the wider African continent. Explore our operational circuits below.
          </p>
        </div>
      </div>

      {/* Interactive Circuit Explorer for East Africa */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            East African Operational Circuits
          </h2>
          <span className="text-xs text-stone-500 hidden sm:inline">
            Select a region to view highlights
          </span>
        </div>

        {/* Circuit Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {circuits.map((circ) => (
            <button
              key={circ.id}
              onClick={() => setSelectedCircuit(circ.id as any)}
              className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                selectedCircuit === circ.id
                  ? 'bg-[#166534] text-white border-[#166534] shadow-xs'
                  : 'bg-white text-stone-800 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <span className={`text-[11px] block uppercase font-mono ${selectedCircuit === circ.id ? 'text-emerald-200' : 'text-stone-400'}`}>
                {circ.id === 'east' ? 'Headquarters Region' : 'Circuit'}
              </span>
              <span className="font-serif font-bold text-sm sm:text-base block mt-0.5">
                {circ.title}
              </span>
            </button>
          ))}
        </div>

        {/* Active Circuit Box */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="space-y-1">
            <span className="text-xs text-amber-800 uppercase font-semibold tracking-wider">
              Destination Circuit Detail
            </span>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              {activeCircuit.title}
            </h3>
            <p className="text-sm text-stone-600 italic">
              {activeCircuit.tagline}
            </p>
          </div>

          <div className="space-y-3 pt-3 border-t border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800">
              Key Highlights & Landmarks
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {activeCircuit.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Circuit Tours */}
          <div className="pt-4 border-t border-stone-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-800 mb-3">
              Featured Tours in this Circuit
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeCircuit.tours.map((tId) => {
                const tour = ALL_ITINERARIES.find((it) => it.id === tId);
                if (!tour) return null;
                return (
                  <div
                    key={tour.id}
                    className="p-4 rounded-lg bg-stone-50 border border-stone-200 flex flex-col justify-between space-y-2"
                  >
                    <div>
                      <span className="text-[11px] font-mono text-stone-500">
                        {tour.durationDays} Days · {tour.pillarLabel}
                      </span>
                      <h5 className="font-serif text-sm font-bold text-stone-900">
                        {tour.title}
                      </h5>
                    </div>
                    <button
                      onClick={() => onNavigate(`/itinerary/${tour.id}`)}
                      className="text-xs font-semibold text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Explore Itinerary</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Continental Strategic Vision (Section 5) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 pt-8">
        <div className="border-b border-stone-200 pb-3">
          <h2 className="font-serif text-2xl font-bold text-stone-900">
            Wider Continental Ambitions
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Our strategic direction and long-term partnerships across the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GEOGRAPHIC_REGIONS.map((region, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-stone-400">Region 0{idx + 1}</span>
                <Globe2 className="w-4 h-4 text-amber-700" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                {region.name}
              </h3>
              <p className="text-xs font-semibold text-amber-800">
                {region.role}
              </p>
              <p className="text-xs text-stone-600 leading-relaxed">
                {region.summary}
              </p>
              <div className="pt-2 text-[11px] text-stone-500 border-t border-stone-100">
                <strong className="text-stone-700">Target Markets:</strong> {region.countries.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* Operational Note from PDF */}
        <div className="p-4 rounded-xl bg-stone-100 border border-stone-300 text-xs text-stone-700 leading-relaxed">
          <strong>Important Operational Notice:</strong> These regions represent our strategic direction and potential areas for future partnerships. The inclusion of a country or region in this profile does not mean every destination or itinerary is currently available for open booking. Specific trips will depend on operational readiness, local partners, permits, costs, transport, safety considerations, and confirmed availability.
        </div>
      </div>
    </div>
  );
};

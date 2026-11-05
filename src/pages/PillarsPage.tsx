import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TOURISM_PILLARS } from '../data/companyData';
import { ALL_ITINERARIES } from '../data/itinerariesData';
import { TourismPillarId, Itinerary } from '../types';
import { Landmark, Compass, Sparkles, Wheat, Check, ArrowRight } from 'lucide-react';

interface PillarsPageProps {
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary?: Itinerary) => void;
}

export const PillarsPage: React.FC<PillarsPageProps> = ({ onNavigate, onOpenInquiry }) => {
  const [activePillarId, setActivePillarId] = useState<TourismPillarId>('cultural');

  const activePillar = TOURISM_PILLARS.find((p) => p.id === activePillarId) || TOURISM_PILLARS[0];

  const pillarItineraries = ALL_ITINERARIES.filter(
    (it) => it.pillar === activePillarId
  );

  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Four Pillars of Tourism' }]} onNavigate={onNavigate} />

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Brand Philosophy
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            The Four Pillars of Tourism
          </h1>
          <p className="text-base text-stone-700 leading-relaxed">
            JAMAINUS SAFARIS is built around four complementary pillars. Together, they offer a broader perspective on African travel—one that connects people with places, communities, heritage, and nature. Every journey should offer more than a destination; it should create understanding, appreciation, and lasting memories.
          </p>
        </div>
      </div>

      {/* Interactive Pillar Selector Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-stone-100 p-2 rounded-xl border border-stone-200">
          {TOURISM_PILLARS.map((p, idx) => {
            const isSelected = p.id === activePillarId;
            return (
              <button
                key={p.id}
                onClick={() => setActivePillarId(p.id)}
                className={`p-4 rounded-lg text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white shadow-xs border border-stone-300 ring-1 ring-amber-800/20'
                    : 'hover:bg-stone-200/60 text-stone-700'
                }`}
              >
                <span className="text-xs font-mono text-stone-400 block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <span className="font-serif text-base sm:text-lg font-bold text-stone-900 block leading-snug">
                  {p.title}
                </span>
                <span className="text-xs text-amber-800 italic line-clamp-1 mt-0.5">
                  {p.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pillar Comprehensive Deep-Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded border mb-2 ${activePillar.badgeColor}`}>
                {activePillar.title}
              </span>
              <h2 className="font-serif text-3xl font-bold text-stone-900">
                {activePillar.tagline}
              </h2>
            </div>
            <button
              onClick={() => onNavigate('/custom-safari')}
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md self-start md:self-auto transition-colors cursor-pointer"
            >
              Custom {activePillar.title} Safari
            </button>
          </div>

          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Pillar Overview
            </h3>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              {activePillar.summary}
            </p>
          </div>

          {/* Potential Experiences (From Company Profile) */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Potential Experiences & Field Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {activePillar.keyPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-stone-50 border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-800"
                >
                  <Check className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ethical & Protocol Standards (Verbatim from Company Profile) */}
          <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 space-y-2">
            <h4 className="font-bold uppercase tracking-wider text-amber-900">
              Responsible Conduct & Consent Commitment
            </h4>
            {activePillarId === 'cultural' && (
              <p className="leading-relaxed">
                "We recognize that some traditions and knowledge are sacred, private, or restricted. Experiences involving cultural custodians and traditional knowledge take place only with appropriate consent and respect for community protocols. Our aim is not to turn cultures into spectacles, but to help visitors appreciate the people, histories, and traditions that give each destination its identity."
              </p>
            )}
            {activePillarId === 'wildlife' && (
              <p className="leading-relaxed">
                "We recognize the importance of protecting habitats and respecting wildlife. Activities are arranged in accordance with applicable conservation rules, protected-area requirements, permits, and the guidance of qualified local operators. Where traditional plant knowledge is part of an experience, it is shared with consent and without unsupported medical claims."
              </p>
            )}
            {activePillarId === 'spiritual' && (
              <p className="leading-relaxed">
                "We respect the beliefs and practices of the communities we visit. All experiences are arranged with consideration for religious protocols, appropriate dress, photography restrictions, worship schedules, and access permissions. Our aim is to encourage understanding and respectful engagement with Africa’s spiritual diversity."
              </p>
            )}
            {activePillarId === 'agritourism' && (
              <p className="leading-relaxed">
                "Agritourism creates opportunities for visitors to appreciate the work behind the food and agricultural products they enjoy. It can also create additional income opportunities for participating farmers and rural enterprises when experiences are properly organized."
              </p>
            )}
          </div>

          {/* Linked Itineraries */}
          {pillarItineraries.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-stone-200">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Itineraries Featuring {activePillar.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pillarItineraries.map((it) => (
                  <div
                    key={it.id}
                    className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <div className="text-[11px] font-mono text-stone-500 mb-1">
                        {it.durationDays} Days / {it.durationNights} Nights
                      </div>
                      <h4 className="font-serif text-base font-bold text-stone-900">
                        {it.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                        {it.overview}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between gap-2 border-t border-stone-200 text-xs">
                      <button
                        onClick={() => onNavigate(`/itinerary/${it.id}`)}
                        className="font-semibold text-amber-800 hover:underline cursor-pointer"
                      >
                        View Full Schedule
                      </button>
                      <button
                        onClick={() => onOpenInquiry(it)}
                        className="px-2.5 py-1 bg-amber-800 text-white rounded text-[11px] font-semibold uppercase tracking-wider"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

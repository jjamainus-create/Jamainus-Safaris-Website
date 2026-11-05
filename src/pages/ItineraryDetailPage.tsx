import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ALL_ITINERARIES } from '../data/itinerariesData';
import { COMPANY_DETAILS } from '../data/companyData';
import { SAFARI_IMAGES } from '../data/imageAssets';
import { Itinerary, ItineraryDay } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Compass,
  CheckCircle2,
  XCircle,
  Printer,
  Share2,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';

interface ItineraryDetailPageProps {
  itineraryId: string;
  onNavigate: (path: string) => void;
  onOpenInquiry: (itinerary: Itinerary) => void;
}

export const ItineraryDetailPage: React.FC<ItineraryDetailPageProps> = ({
  itineraryId,
  onNavigate,
  onOpenInquiry
}) => {
  const itinerary = ALL_ITINERARIES.find((it) => it.id === itineraryId);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [allExpanded, setAllExpanded] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    if (itinerary) {
      document.title = `${itinerary.title} (${itinerary.durationDays} Days) | Jamainus Safaris`;
    }
  }, [itinerary]);

  if (!itinerary) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          Safari Itinerary Not Found
        </h2>
        <p className="text-sm text-stone-600">
          The requested safari journey could not be located in the catalogue.
        </p>
        <button
          onClick={() => onNavigate('/itineraries')}
          className="px-5 py-2.5 bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md"
        >
          Return to All Itineraries
        </button>
      </div>
    );
  }

  const handleToggleDay = (dayNum: number) => {
    setExpandedDay(expandedDay === dayNum ? null : dayNum);
  };

  const handleToggleExpandAll = () => {
    setAllExpanded(!allExpanded);
    setExpandedDay(null);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const whatsappMessage = `Hello Jamainus Safaris! I am interested in booking or inquiring about: *${itinerary.title}* (${itinerary.durationDays} Days / ${itinerary.durationNights} Nights). Please share current rates, availability, and customizations.`;

  const relatedItineraries = ALL_ITINERARIES.filter(
    (it) => it.id !== itinerary.id && (it.pillar === itinerary.pillar || it.durationDays === itinerary.durationDays)
  ).slice(0, 3);

  return (
    <div className="space-y-12 pb-20 print-page">
      <Breadcrumbs
        items={[
          { label: 'Safaris & Itineraries', path: '/itineraries' },
          { label: itinerary.title }
        ]}
        onNavigate={onNavigate}
      />

      {/* Safari Hero Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-6 sm:p-10 border border-stone-800 relative overflow-hidden">
          <div className="relative z-10 space-y-5 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300">
              <span className="px-2.5 py-1 rounded bg-amber-900/60 border border-amber-700/60 text-amber-300 font-semibold uppercase tracking-wider">
                {itinerary.pillarLabel}
              </span>
              <span>·</span>
              <span className="font-mono text-amber-400 font-bold">
                {itinerary.durationDays} Days / {itinerary.durationNights} Nights
              </span>
              <span>·</span>
              <span>{itinerary.countries.join(' & ')}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {itinerary.title}
            </h1>

            <p className="text-base sm:text-lg text-amber-200/90 italic font-serif">
              "{itinerary.tagline}"
            </p>

            {/* Quick Fact Grid */}
            <div className="pt-4 border-t border-stone-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-stone-400 block mb-0.5">Start / Finish</span>
                <span className="font-medium text-white">{itinerary.startLocation}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Pace / Difficulty</span>
                <span className="font-medium text-white">{itinerary.difficulty}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Group Type</span>
                <span className="font-medium text-white">{itinerary.groupSize}</span>
              </div>
              <div>
                <span className="text-stone-400 block mb-0.5">Focus Pillar</span>
                <span className="font-medium text-amber-400">{itinerary.pillarLabel}</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-4 flex flex-wrap items-center gap-3 no-print">
              <button
                onClick={() => onOpenInquiry(itinerary)}
                className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-md cursor-pointer flex items-center gap-1.5"
              >
                <span>BOOK THIS SAFARI</span>
              </button>
              <a
                href={`https://wa.me/256779448916?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>
              <button
                onClick={handlePrint}
                className="px-3.5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Print or save as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Print Brief</span>
              </button>
              <button
                onClick={handleShare}
                className="px-3.5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Copy itinerary URL"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Copied URL!' : 'Share'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main 8-Column Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Featured Photo Banner */}
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs h-64 sm:h-80 relative bg-stone-900">
              <img
                src={
                  itinerary.id.includes('gorilla')
                    ? SAFARI_IMAGES.gorillaHero
                    : itinerary.id.includes('elgon') || itinerary.id.includes('sipi')
                    ? SAFARI_IMAGES.sipiFalls
                    : itinerary.id.includes('coffee') || itinerary.pillar === 'agritourism'
                    ? SAFARI_IMAGES.coffeeHarvest
                    : itinerary.id.includes('faith') || itinerary.pillar === 'spiritual'
                    ? SAFARI_IMAGES.namugongoShrine
                    : SAFARI_IMAGES.savannahWildlife
                }
                alt={itinerary.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs text-white/90 font-medium tracking-wide">
                  {itinerary.pillarLabel} Expedition · Authentic East Africa
                </span>
              </div>
            </div>

            {/* Overview */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Itinerary Overview
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                {itinerary.overview}
              </p>
              <div className="pt-2 text-xs text-stone-500">
                <strong>Ideal For:</strong> {itinerary.idealFor}
              </div>
            </section>

            {/* Key Highlights */}
            <section className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <h2 className="font-serif text-2xl font-bold text-stone-900">
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {itinerary.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Comprehensive Schedule */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-stone-900">
                    Detailed Day-by-Day Schedule
                  </h2>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Total {itinerary.durationDays} days of curated activities, lodging, and cultural connections.
                  </p>
                </div>
                <button
                  onClick={handleToggleExpandAll}
                  className="no-print text-xs text-amber-800 font-semibold hover:underline cursor-pointer"
                >
                  {allExpanded ? 'Collapse Days' : 'Expand All Days'}
                </button>
              </div>

              <div className="space-y-4">
                {itinerary.dayByDay.map((day) => {
                  const isOpen = allExpanded || expandedDay === day.dayNumber;
                  return (
                    <div
                      key={day.dayNumber}
                      className="bg-white rounded-xl border border-stone-200 shadow-xs overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => handleToggleDay(day.dayNumber)}
                        className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-mono font-bold">
                              Day {day.dayNumber}
                            </span>
                            <span className="text-xs text-stone-500 font-medium">
                              {day.destination}
                            </span>
                          </div>
                          <h3 className="font-serif text-lg font-bold text-stone-900 pt-1">
                            {day.title}
                          </h3>
                        </div>
                        <div className="p-1 text-stone-400 no-print">
                          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-6 sm:px-6 pt-2 border-t border-stone-100 space-y-4 text-xs text-stone-700">
                          <p className="text-stone-800 text-sm leading-relaxed">
                            {day.description}
                          </p>

                          {/* Activity Times Breakdown */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-stone-50 p-3.5 rounded-lg border border-stone-100">
                            {day.morning && (
                              <div>
                                <span className="font-bold text-stone-900 block mb-1">Morning</span>
                                <span className="text-stone-600 leading-normal">{day.morning}</span>
                              </div>
                            )}
                            {day.afternoon && (
                              <div>
                                <span className="font-bold text-stone-900 block mb-1">Afternoon</span>
                                <span className="text-stone-600 leading-normal">{day.afternoon}</span>
                              </div>
                            )}
                            {day.evening && (
                              <div>
                                <span className="font-bold text-stone-900 block mb-1">Evening</span>
                                <span className="text-stone-600 leading-normal">{day.evening}</span>
                              </div>
                            )}
                          </div>

                          {/* Day Logistics */}
                          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-stone-600 border-t border-stone-100">
                            <div>
                              <strong className="text-stone-800">Meals Included:</strong> {day.mealsIncluded}
                            </div>
                            <div>
                              <strong className="text-stone-800">Accommodation:</strong> {day.accommodationType}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-emerald-800 font-serif font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                  <h3>What's Included</h3>
                </div>
                <ul className="space-y-2 text-xs text-stone-700">
                  {itinerary.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-stone-800 font-serif font-bold text-lg">
                  <XCircle className="w-5 h-5 text-stone-400" />
                  <h3>What's Excluded</h3>
                </div>
                <ul className="space-y-2 text-xs text-stone-600">
                  {itinerary.excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-stone-400 font-bold shrink-0">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Packing Advice */}
            <section className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-3">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Recommended Packing & Preparations
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                {itinerary.packingAdvice.map((tip, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold shrink-0">✓</span>
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sticky Sidebar 4-Column Booking Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-white p-6 rounded-xl border border-stone-200 shadow-md space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold block">
                  Reserve or Customize
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-1">
                  Plan This Safari
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  Tailored to your travel group, dates, and pace by Jamainus Safaris in Mbale.
                </p>
              </div>

              <div className="p-3.5 bg-stone-50 rounded-lg space-y-2 text-xs text-stone-700 border border-stone-100">
                <div className="flex justify-between">
                  <span className="text-stone-500">Duration:</span>
                  <span className="font-bold">{itinerary.durationDays} Days / {itinerary.durationNights} Nights</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Countries:</span>
                  <span className="font-bold">{itinerary.countries.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Starting From:</span>
                  <span className="font-bold">{itinerary.startLocation}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Inclusions:</span>
                  <span className="font-bold text-emerald-700">Full Board & 4x4 Cruiser</span>
                </div>
              </div>

              <div className="space-y-2.5">
                <button
                  onClick={() => onOpenInquiry(itinerary)}
                  className="w-full py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all text-center cursor-pointer"
                >
                  BOOK THIS SAFARI
                </button>
                <a
                  href={`https://wa.me/256779448916?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors flex items-center justify-center gap-2 text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Safari Desk</span>
                </a>
              </div>

              {/* Company Trust Markers */}
              <div className="pt-4 border-t border-stone-200 space-y-2 text-xs text-stone-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>100% Tailor-Made & Flexible</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Disability & Accessibility Adapted</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Headquartered in Mbale, Uganda</span>
                </div>
              </div>

              {/* Phone contact */}
              <div className="pt-3 border-t border-stone-100 text-xs text-stone-500">
                <span>Call Our Guides: </span>
                <a
                  href={`tel:${COMPANY_DETAILS.telephones[0].raw}`}
                  className="font-mono text-amber-800 font-bold hover:underline"
                >
                  {COMPANY_DETAILS.telephones[0].display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Itineraries */}
      {relatedItineraries.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 no-print border-t border-stone-200">
          <h3 className="font-serif text-2xl font-bold text-stone-900 mb-6">
            Explore Complementary Expeditions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItineraries.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate(`/itinerary/${rel.id}`)}
                className="bg-white p-5 rounded-xl border border-stone-200 shadow-xs hover:shadow-md transition-all cursor-pointer space-y-3 group"
              >
                <div className="flex justify-between text-xs text-stone-500 font-mono">
                  <span>{rel.durationDays} Days</span>
                  <span className="text-amber-800 font-semibold">{rel.pillarLabel}</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {rel.overview}
                </p>
                <div className="text-xs font-semibold text-amber-800 flex items-center gap-1">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

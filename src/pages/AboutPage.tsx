import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS, RESPONSIBLE_PRINCIPLES, WHY_CHOOSE_US } from '../data/companyData';
import { SAFARI_IMAGES } from '../data/imageAssets';
import { Download, ShieldCheck, Heart, MapPin, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const servicesList = [
    'Tailor-made travel itineraries',
    'Wildlife safaris and nature excursions',
    'Cultural and heritage tours',
    'Birdwatching and specialist nature trips',
    'Religious and spiritual heritage travel',
    'Farm visits and agritourism experiences',
    'Community-based tourism activities',
    'Transport arrangements and tourist 4x4 vehicles',
    'Airport transfers and regional transfers',
    'Accommodation reservations across lodges & hotels',
    'Guided excursions and group tours',
    'Hiking, camping, and outdoor activities where permitted',
    'Regional and multi-country travel planning through suitable partners',
    'Educational and cultural-exchange visits'
  ];

  const targetAudiences = [
    'International visitors exploring Africa for the first time or returning',
    'Domestic and regional East African travellers',
    'Wildlife and birdwatching enthusiasts seeking endemic species',
    'Cultural and heritage travellers wanting authentic human encounters',
    'Religious and pilgrimage groups visiting sacred shrines',
    'Nature and ecotourism enthusiasts focused on habitat conservation',
    'Agricultural and food-tourism visitors, coffee roasters, and agronomists',
    'Families, couples, and independent solo travellers',
    'Schools, universities, and educational study groups',
    'Cultural-exchange and community learning delegations',
    'Travel agencies and tour operators seeking reliable local ground handling in Uganda',
    'Visitors interested in responsible, community-conscious travel'
  ];

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs items={[{ label: 'About Us' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Who We Are
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Discover the Soul of Africa
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif italic text-amber-900">
            Based in Uganda. Connecting Africa. Every Journey Tells a Story.
          </p>
        </div>
      </div>

      {/* Story & Vision / Mission Bento */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              1. Who We Are
            </h2>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              <strong>JAMAINUS SAFARIS</strong> is a tourism and travel brand based in Mbale, Eastern Uganda, with a vision of connecting travellers to the diverse cultures, natural landscapes, wildlife, spiritual traditions, agricultural heritage, and living histories of Africa.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              We believe Africa is more than a safari destination. It is a continent of ancient civilizations, vibrant communities, remarkable biodiversity, indigenous knowledge, sacred places, traditional farming systems, and stories passed from one generation to the next.
            </p>
            <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
              Our goal is to create meaningful travel experiences that allow visitors to discover these dimensions of Africa while encouraging responsible tourism, community participation, environmental conservation, and cultural preservation. Our journey begins in East Africa, with a long-term ambition to develop partnerships and experiences across the wider African continent.
            </p>

            {/* Sipi Falls / Mount Elgon Base Photo */}
            <div className="pt-2">
              <div className="rounded-xl overflow-hidden border border-stone-200 h-64 sm:h-80 relative shadow-xs">
                <img
                  src={SAFARI_IMAGES.sipiFalls}
                  alt="Sipi Falls and Mount Elgon - The home base of Jamainus Safaris in Mbale, Eastern Uganda"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <div className="text-white text-xs space-y-0.5">
                    <span className="font-semibold block">Mount Elgon Caldera & Sipi Falls</span>
                    <span className="text-stone-300 block">Mbale, Eastern Uganda · The Founding Foothills of Jamainus Safaris</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-stone-200">
            {/* Vision */}
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-800 font-bold">
                Section 2
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Vision
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                To become a recognized African tourism brand connecting the world with the continent’s cultural diversity, natural heritage, spiritual traditions, agricultural wealth, and indigenous knowledge.
              </p>
            </div>

            {/* Mission */}
            <div className="p-6 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
              <span className="text-xs uppercase font-mono tracking-wider text-amber-800 font-bold">
                Section 3
              </span>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Our Mission
              </h3>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                To develop meaningful and memorable travel experiences across East Africa and, through responsible growth and reliable partnerships, the wider African continent. We aim to connect visitors with Africa’s people, wildlife, landscapes, cultures, faith traditions, and agricultural heritage while promoting community participation, environmental responsibility, disability inclusion, and the preservation of local history.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Official 10 Services Offered from Flyer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-3">
          <div className="inline-block px-3 py-1 rounded bg-[#166534] text-white text-xs font-bold uppercase tracking-wider mb-2">
            Services Offered
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            7. Full Tourism and Travel Services
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            As authorized on our official operational charter, JAMAINUS SAFARIS provides or coordinates the following ten specialized safari and travel services:
          </p>
        </div>

        {/* 10 Services from Flyer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {COMPANY_DETAILS.servicesOffered.map((service, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs hover:border-[#166534] transition-all space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="text-[10px] font-mono font-bold text-[#166534] uppercase tracking-wider mb-1">
                  Service 0{idx + 1}
                </div>
                <h4 className="font-serif text-base font-bold text-stone-900">
                  {service.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="pt-2 border-t border-stone-100 flex items-center text-[10px] font-semibold text-[#166534]">
                <span>East Africa Ground Handling</span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Certifications & Regulators */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-emerald-200/60 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#166534] block">
                Regulatory & Association Recognition
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
                Fully Registered & Certified With
              </h3>
            </div>
            <p className="text-xs text-stone-600 max-w-md">
              Jamainus Safaris operates in strict compliance with Ugandan tourism legislation, statutory wildlife conservation guidelines, and professional code of ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COMPANY_DETAILS.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-emerald-200/80 shadow-xs hover:shadow-md hover:border-[#166534] transition-all flex flex-col items-center text-center justify-between group"
              >
                {/* Logo Container */}
                <div className="w-full h-20 bg-stone-50/80 rounded-lg p-2.5 flex items-center justify-center mb-3 border border-stone-100 group-hover:bg-white transition-colors">
                  <img
                    src={cert.logo}
                    alt={`${cert.name} (${cert.acronym})`}
                    referrerPolicy="no-referrer"
                    className="max-h-16 max-w-full object-contain filter drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1.5 w-full">
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100/80 text-[#166534] font-bold text-xs font-mono">
                    {cert.acronym}
                  </div>
                  <h4 className="font-semibold text-xs text-stone-900 leading-tight">
                    {cert.name}
                  </h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                <div className="w-full pt-3 mt-3 border-t border-stone-100 flex items-center justify-center gap-1 text-[10px] font-semibold text-[#166534]">
                  <span>Verified Member</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecotourism Statement */}
        <div className="bg-[#166534] text-white p-6 sm:p-8 rounded-xl space-y-3 shadow-md">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
            Ecotourism Philosophy
          </span>
          <blockquote className="text-base sm:text-lg italic font-serif leading-relaxed">
            "{COMPANY_DETAILS.ecotourismStatement}"
          </blockquote>
          <p className="text-xs text-emerald-200">
            — Official Jamainus Safaris Operational Declaration
          </p>
        </div>
      </div>

      {/* Official Field Flyer Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Official Marketing & Field Operations
            </span>
            <h2 className="font-serif text-3xl font-bold">
              Explore The Adventure With Jamainus Safaris
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Serving travellers across <strong>Uganda, Kenya, Tanzania, Zanzibar, Rwanda, Burundi, Egypt, DR Congo, and South Africa</strong>. Featuring licensed tourist drivers, top-tier safari vehicles, camping chiefs, tourist security, and airport drop & pick up.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigate('/custom-safari')}
                className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md cursor-pointer"
              >
                BOOK A TRIP
              </button>
              <button
                onClick={() => onNavigate('/contact')}
                className="px-5 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider rounded-md cursor-pointer"
              >
                Contact Mbale Office
              </button>
            </div>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <img
              src={SAFARI_IMAGES.officialFlyer}
              alt="Jamainus Safaris Official Field Flyer"
              referrerPolicy="no-referrer"
              className="rounded-xl border border-stone-700 shadow-2xl max-h-72 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Responsible & Inclusive Tourism Charter (Section 8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
            Guiding Principles
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            8. Responsible and Inclusive Tourism
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            We believe tourism should create value for visitors and host communities while respecting the environment and cultural heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESPONSIBLE_PRINCIPLES.map((principle, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#166534]">
                  Principle 0{idx + 1}
                </span>
                <ShieldCheck className="w-4 h-4 text-[#166534]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-stone-900">
                {principle.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {principle.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Target Audiences (Section 10) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-[#166534] font-bold">
            Traveller Profiles
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            10. Who We Aim to Serve
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {targetAudiences.map((aud, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 flex items-start gap-2.5 text-xs text-stone-700"
            >
              <span className="text-[#166534] font-bold shrink-0">·</span>
              <span className="leading-relaxed">{aud}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Commitment (Section 12) & PDF Download Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-8 sm:p-10 border border-stone-800 space-y-6">
          <div className="space-y-3 max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-medium">
              Section 12
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Our Commitment
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              JAMAINUS SAFARIS is committed to building a tourism brand that celebrates Africa’s diversity and encourages travellers to experience the continent with curiosity, respect, and a sense of responsibility.
            </p>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Our ambition is continental, but our growth must be practical, responsible, and built on trust. We want every journey to help travellers discover something meaningful about Africa—and leave them with a deeper appreciation of the people, places, and stories they encounter.
            </p>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-stone-400">
              Download the official Jamainus Safaris Company Profile document (Draft 2).
            </div>
            <a
              href={COMPANY_DETAILS.officialPdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-[#166534] hover:bg-[#14532d] text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Company Profile (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

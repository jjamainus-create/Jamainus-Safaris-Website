import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS, CHARITY_FOCUS_AREAS } from '../data/companyData';
import { Heart, ShieldCheck, CheckCircle2, Send, MessageCircle, ArrowRight } from 'lucide-react';

interface CharityPageProps {
  onNavigate: (path: string) => void;
}

export const CharityPage: React.FC<CharityPageProps> = ({ onNavigate }) => {
  const [partnerName, setPartnerName] = useState('');
  const [partnerEmail, setPartnerEmail] = useState('');
  const [interestArea, setInterestArea] = useState('Disability Inclusion and Empowerment');
  const [partnerMessage, setPartnerMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!partnerName || !partnerEmail) return;
    setSentSuccess(true);
  };

  return (
    <div className="space-y-16 pb-20">
      <Breadcrumbs items={[{ label: 'Jamainus Charity Foundation' }]} onNavigate={onNavigate} />

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#1C1917] rounded-2xl text-white p-8 sm:p-12 border border-stone-800 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/60 border border-rose-800/60 text-rose-300 text-xs font-medium">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>The Charity Arm of JAMAINUS SAFARIS</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            JAMAINUS CHARITY FOUNDATION LTD
          </h1>

          <p className="font-serif italic text-amber-400 text-xl">
            Slogan: "A Chance to Make a Difference."
          </p>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
            The Foundation has its own NGO identity and responsibilities while supporting the broader Jamainus vision of connecting tourism with community well-being, inclusion, environmental responsibility, and cultural preservation.
          </p>
          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
            While JAMAINUS SAFARIS focuses on tourism and travel experiences, JAMAINUS CHARITY FOUNDATION LTD represents the charitable and community-development dimension of that wider vision. Its purpose is to help create opportunities for vulnerable people, promote the inclusion and empowerment of persons with disabilities, support community development, protect nature, and encourage the preservation of local history and cultural heritage.
          </p>
        </div>
      </div>

      {/* Our 7 Intended Areas of Focus (Verbatim Section 9) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="border-b border-stone-200 pb-3">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Section 9
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Our 7 Intended Areas of Focus
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Guided by the belief that communities should not be left behind as tourism and development create new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHARITY_FOCUS_AREAS.map((focus) => (
            <div
              key={focus.id}
              className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-800">
                    Focus 0{focus.id}
                  </span>
                  <Heart className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                  {focus.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {focus.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-700">
                {focus.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-1.5">
                    <span className="text-amber-700 font-bold shrink-0">·</span>
                    <span className="leading-tight">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connecting Tourism with Community Impact (Section 10 from Profile) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-stone-50 rounded-2xl border border-stone-200 p-8 sm:p-10 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            Connecting Tourism with Community Impact
          </h2>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <p>
              JAMAINUS SAFARIS and JAMAINUS CHARITY FOUNDATION LTD share a broader vision: tourism can create opportunities to appreciate Africa while encouraging respect for its people, nature, and heritage.
            </p>
            <p>
              Where appropriate, tourism activities connect visitors with community enterprises, cultural custodians, local farmers, conservation initiatives, and inclusive experiences.
            </p>
            <p>
              The Foundation also pursues community and conservation initiatives independently of individual tourism bookings.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-medium leading-relaxed">
              <strong>Our Transparent Contribution Principle:</strong> Any financial contribution from a safari or tour to the Foundation is clearly defined and communicated. We do not imply that every booking automatically funds charitable work unless a formal contribution arrangement is in place.
            </div>
          </div>
        </div>
      </div>

      {/* Partnership & Support Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Partner with the Foundation
            </h3>
            <p className="text-xs text-stone-600 max-w-lg mx-auto">
              If you are a traveller, organization, educational institution, or NGO seeking to collaborate on disability inclusion, community livelihoods, or conservation in Uganda:
            </p>
          </div>

          {sentSuccess ? (
            <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
              <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
              <h4 className="font-serif text-lg font-bold text-stone-900">
                Message Received with Gratitude
              </h4>
              <p className="text-xs text-stone-600">
                Thank you, <strong>{partnerName}</strong>. Our foundation coordinators in Mbale will review your message and contact you via {partnerEmail}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Name / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={partnerName}
                    onChange={(e) => setPartnerName(e.target.value)}
                    placeholder="e.g. Hope Travel Fellowship"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={partnerEmail}
                    onChange={(e) => setPartnerEmail(e.target.value)}
                    placeholder="contact@organization.org"
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Primary Area of Interest
                </label>
                <select
                  value={interestArea}
                  onChange={(e) => setInterestArea(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                >
                  {CHARITY_FOCUS_AREAS.map((f) => (
                    <option key={f.id} value={f.title}>
                      {f.title}
                    </option>
                  ))}
                  <option value="General Sponsorship">General Educational Sponsorship</option>
                  <option value="Volunteer / Research">Volunteer / Research Collaboration</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  How Would You Like to Collaborate?
                </label>
                <textarea
                  rows={3}
                  value={partnerMessage}
                  onChange={(e) => setPartnerMessage(e.target.value)}
                  placeholder="Tell us about your proposed initiative, study group, or support..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                >
                  Send Foundation Inquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

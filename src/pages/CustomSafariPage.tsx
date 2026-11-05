import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS, TOURISM_PILLARS } from '../data/companyData';
import { TourismPillarId } from '../types';
import { Check, Send, MessageCircle, Compass, Users, Calendar, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CustomSafariPageProps {
  onNavigate: (path: string) => void;
}

export const CustomSafariPage: React.FC<CustomSafariPageProps> = ({ onNavigate }) => {
  const [selectedPillars, setSelectedPillars] = useState<TourismPillarId[]>(['cultural', 'wildlife']);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Eastern Uganda (Mbale & Mount Elgon)',
    'Southwestern Uganda (Bwindi Gorillas)'
  ]);
  const [daysCount, setDaysCount] = useState<number>(7);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [travelMonth, setTravelMonth] = useState<string>('July');
  const [travelYear, setTravelYear] = useState<string>('2026');
  const [budgetTier, setBudgetTier] = useState<string>('Comfort Mid-Range');
  const [accessibility, setAccessibility] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  const regionOptions = [
    'Eastern Uganda (Mbale, Mount Elgon & Sipi Falls)',
    'Southwestern Uganda (Bwindi Gorillas & Lake Bunyonyi)',
    'Western Uganda (Queen Elizabeth & Kibale Primates)',
    'Northern Uganda (Murchison Falls & Kidepo Valley)',
    'Jinja Source of the River Nile & Adventure',
    'Rwanda (Kigali & Volcanoes National Park)',
    'Kenya (Maasai Mara & Great Rift Valley)',
    'Tanzania (Serengeti & Ngorongoro Crater)',
    'Zanzibar (Stone Town & Spice Coast Beaches)',
    'Burundi & DR Congo Trans-boundary Circuits'
  ];

  const handleTogglePillar = (id: TourismPillarId) => {
    if (selectedPillars.includes(id)) {
      if (selectedPillars.length > 1) {
        setSelectedPillars(selectedPillars.filter(p => p !== id));
      }
    } else {
      setSelectedPillars([...selectedPillars, id]);
    }
  };

  const handleToggleRegion = (reg: string) => {
    if (selectedRegions.includes(reg)) {
      if (selectedRegions.length > 1) {
        setSelectedRegions(selectedRegions.filter(r => r !== reg));
      }
    } else {
      setSelectedRegions([...selectedRegions, reg]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setSubmitted(true);
  };

  const whatsappMessage = `Hello Jamainus Safaris! I created a Custom Safari Request:
- Name: ${fullName || 'Guest'} (${country || 'International'})
- Duration: ${daysCount} Days, ${adults} Adults, ${children} Children
- Timing: ${travelMonth} ${travelYear}
- Style: ${budgetTier}
- Pillars: ${selectedPillars.join(', ')}
- Regions: ${selectedRegions.join('; ')}
${accessibility ? `- Accessibility Notes: ${accessibility}` : ''}
Please propose an itinerary and quotation.`;

  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Tailor-Made Safari Planner' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Section 7 & 10
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Tailor-Made Safari Planner
          </h1>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            "Our approach is to understand each traveller’s interests, expectations, budget, accessibility requirements, and available travel time before proposing an itinerary." Complete the planner below to receive a bespoke itinerary curated by our local team in Mbale.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {submitted ? (
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-stone-200 shadow-md text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-stone-900">
              Custom Safari Proposal Underway!
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
              Thank you, <strong>{fullName}</strong>. Your custom {daysCount}-day safari request has been logged. Our senior travel designers at the Mbale head office will craft a detailed day-by-day plan and pricing proposal sent to <strong>{email}</strong> within 24 hours.
            </p>

            <div className="p-5 bg-stone-50 rounded-xl text-left text-xs text-stone-700 space-y-2 max-w-lg mx-auto border border-stone-200">
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Target Period:</span>
                <span className="font-bold">{travelMonth} {travelYear}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Party Size:</span>
                <span className="font-bold">{adults} Adults {children > 0 ? `, ${children} Children` : ''}</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-1.5">
                <span className="text-stone-500">Accommodation Tier:</span>
                <span className="font-bold">{budgetTier}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Pillars:</span>
                <span className="font-bold capitalize">{selectedPillars.join(', ')}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/256785254899?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send via WhatsApp for Immediate Quote</span>
              </a>
              <button
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                Create Another Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Step 1: Choose Tourism Pillars */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                  Step 01
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                  Select Your Desired Tourism Pillars
                </h3>
                <p className="text-xs text-stone-500">
                  Choose which dimensions of Africa you wish to weave into your itinerary.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {TOURISM_PILLARS.map((p) => {
                  const isChecked = selectedPillars.includes(p.id);
                  return (
                    <button
                      type="button"
                      key={p.id}
                      onClick={() => handleTogglePillar(p.id)}
                      className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-amber-50/70 border-amber-800 text-stone-900 ring-1 ring-amber-800/20'
                          : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${isChecked ? 'bg-amber-800 border-amber-800 text-white' : 'border-stone-300 bg-white'}`}>
                        {isChecked && <Check className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <span className="font-serif font-bold text-sm block">
                          {p.title}
                        </span>
                        <span className="text-xs text-stone-500 line-clamp-1">
                          {p.tagline}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Choose Preferred Regions */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                  Step 02
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                  Select Target Regions & Destinations
                </h3>
                <p className="text-xs text-stone-500">
                  Pick one or multiple destinations across East Africa.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {regionOptions.map((reg) => {
                  const isChecked = selectedRegions.includes(reg);
                  return (
                    <button
                      type="button"
                      key={reg}
                      onClick={() => handleToggleRegion(reg)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer flex items-center gap-3 text-xs ${
                        isChecked
                          ? 'bg-amber-50/70 border-amber-800 text-stone-900 font-semibold'
                          : 'bg-white border-stone-200 hover:bg-stone-50 text-stone-700'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${isChecked ? 'bg-amber-800 border-amber-800 text-white' : 'border-stone-300 bg-white'}`}>
                        {isChecked && <Check className="w-3 h-3" />}
                      </div>
                      <span className="truncate">{reg}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Trip Details & Timing */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                  Step 03
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                  Trip Logistics & Group Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Trip Duration (Days)
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={30}
                    value={daysCount}
                    onChange={(e) => setDaysCount(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Adults (12+ yrs)
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={50}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Children (&lt;12 yrs)
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={20}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value))}
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Style
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  >
                    <option value="Comfort Mid-Range">Comfort Mid-Range</option>
                    <option value="Luxury & Boutique">Luxury & Boutique</option>
                    <option value="Budget / Eco-Camps">Budget / Eco-Camps</option>
                    <option value="Tailor-Made Mixed">Tailor-Made Mixed</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Travel Month
                  </label>
                  <select
                    value={travelMonth}
                    onChange={(e) => setTravelMonth(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  >
                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Target Travel Year
                  </label>
                  <select
                    value={travelYear}
                    onChange={(e) => setTravelYear(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  >
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Step 4: Accessibility & Disability Adaptations */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                  Step 04
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                  Disability Inclusion & Specific Requirements
                </h3>
                <p className="text-xs text-stone-500">
                  In line with our responsible tourism principles, please note any physical, mobility, dietary, or health considerations.
                </p>
              </div>

              <div>
                <input
                  type="text"
                  value={accessibility}
                  onChange={(e) => setAccessibility(e.target.value)}
                  placeholder="e.g. Wheelchair accessible transport, step-free lodge access, gluten-free dining, slow walking pace..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Additional Dreams or Specific Sights
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Tell us if you want to climb Mount Elgon, attend a specific cultural dance, or extend to Zanzibar..."
                  className="w-full px-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>
            </div>

            {/* Step 5: Contact Details */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800 uppercase">
                  Step 05
                </span>
                <h3 className="font-serif text-xl font-bold text-stone-900 mt-0.5">
                  Your Contact Details
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. David & Mary Miller"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@example.com"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 234 567 8900"
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g. United Kingdom, Germany, Kenya..."
                    className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 inline mr-1" />
                  No commitment required. 100% custom quotation within 24 hours.
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>BOOK A TRIP / REQUEST PROPOSAL</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

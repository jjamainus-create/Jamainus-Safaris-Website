import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Mail, Phone, Calendar, Users, MapPin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';
import { Itinerary } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItinerary?: Itinerary | null;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  selectedItinerary
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2');
  const [budgetTier, setBudgetTier] = useState('Comfort Mid-Range');
  const [accessibilityNeeds, setAccessibilityNeeds] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name and a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const itineraryTitle = selectedItinerary
    ? selectedItinerary.title
    : 'Custom East Africa Safari';

  const whatsappText = `Hello Jamainus Safaris! I am inquiring about: *${itineraryTitle}* (${selectedItinerary ? `${selectedItinerary.durationDays} Days` : 'Tailor-Made'}). My Name: ${fullName || '[Name]'}, Travelers: ${travelers}, Target Date: ${travelDate || '[Date]'}. Please provide availability and rate details.`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FAF8F5] w-full max-w-xl rounded-xl shadow-2xl border border-stone-200 overflow-hidden my-8">
        {/* Modal Header */}
        <div className="bg-[#1C1917] text-white p-5 flex items-start justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium block">
              Jamainus Safaris & Travel Inquiry
            </span>
            <h3 className="font-serif text-lg sm:text-xl font-bold mt-1 text-white">
              {itineraryTitle}
            </h3>
            {selectedItinerary && (
              <p className="text-xs text-stone-300 mt-1">
                {selectedItinerary.durationDays} Days / {selectedItinerary.durationNights} Nights · {selectedItinerary.pillarLabel}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-bold text-stone-900">
                Inquiry Received with Thanks!
              </h4>
              <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our safari planning team in Mbale has received your request for <em>{itineraryTitle}</em>. We will review availability and prepare your customized proposal within 24 hours.
              </p>

              <div className="p-4 bg-stone-100 rounded-lg text-left text-xs text-stone-700 space-y-1 max-w-md mx-auto">
                <div><strong>Inquiry Reference:</strong> JAM-SAF-{Math.floor(100000 + Math.random() * 900000)}</div>
                <div><strong>Confirmation Email:</strong> {email}</div>
                <div><strong>Travelers:</strong> {travelers} Guests · {budgetTier}</div>
                {accessibilityNeeds && <div><strong>Accessibility Notes:</strong> {accessibilityNeeds}</div>}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/256785254899?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Instantly via WhatsApp</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Quick WhatsApp Banner */}
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-3 text-xs text-emerald-900">
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Need an immediate quote or chat with our Mbale team?</span>
                </div>
                <a
                  href={`https://wa.me/256779448916?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded text-[11px] font-semibold whitespace-nowrap shrink-0 transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-rose-50 text-rose-700 border border-rose-200 rounded text-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@example.com"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 555 0192"
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Country of Residence
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="United States, UK, Uganda..."
                    className="w-full px-3 py-2 text-sm bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Target Travel Date
                  </label>
                  <input
                    type="month"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  >
                    <option value="1">Solo Traveler</option>
                    <option value="2">2 Guests (Couple/Friends)</option>
                    <option value="3-4">3 - 4 Guests (Small Group)</option>
                    <option value="5-8">5 - 8 Guests (Family/Group)</option>
                    <option value="9+">9+ Group Expedition</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Lodge Style
                  </label>
                  <select
                    value={budgetTier}
                    onChange={(e) => setBudgetTier(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                  >
                    <option value="Comfort Mid-Range">Comfort Mid-Range</option>
                    <option value="Luxury & Boutique">Luxury & Boutique</option>
                    <option value="Budget / Eco-Camps">Budget / Eco-Camps</option>
                  </select>
                </div>
              </div>

              {/* Disability & Special Accessibility note (from Jamainus principles) */}
              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Disability / Accessibility / Dietary Needs (Optional)
                </label>
                <input
                  type="text"
                  value={accessibilityNeeds}
                  onChange={(e) => setAccessibilityNeeds(e.target.value)}
                  placeholder="e.g. Ground-floor lodge rooms, wheelchair assist, vegetarian, etc."
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
                <span className="text-[11px] text-stone-500 mt-0.5 block">
                  As part of our commitment to disability inclusion, we adapt vehicles, routes, and accommodation.
                </span>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Any specific sights you wish to add, extensions to Kenya or Rwanda, or questions for our guides..."
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-3 border-t border-stone-200">
                <span className="text-xs text-stone-500">
                  Direct Response within 24 Hours
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-95 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>BOOK A TRIP / SUBMIT INQUIRY</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

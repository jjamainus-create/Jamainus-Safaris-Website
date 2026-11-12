import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS, BRANCH_OFFICES } from '../data/companyData';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, ShieldCheck, Building2, Sparkles, Compass, ArrowRight } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Travel Enquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const whatsappLink = `https://wa.me/256785254899?text=${encodeURIComponent("Hello Jamainus Safaris, I would like to get in touch regarding a safari enquiry or partnership.")}`;

  return (
    <div className="space-y-12 pb-20">
      <Breadcrumbs items={[{ label: 'Contact Us' }]} onNavigate={onNavigate} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-semibold">
            Section 13 · Head Office in Mbale
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">
            Contact Jamainus Safaris
          </h1>
          <p className="text-base text-stone-700 leading-relaxed font-serif italic text-amber-900">
            "Discover the Soul of Africa. Explore the Adventure. Experience the Culture. Travel with Purpose."
          </p>
          <p className="text-sm text-stone-600 leading-relaxed">
            For travel enquiries, customized itineraries, partnership opportunities, and further information about our tourism vision, please reach out to our team in Mbale, Eastern Uganda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1C1917] rounded-2xl text-white p-6 sm:p-8 border border-stone-800 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-medium block">
                  Official Head Office
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Mbale, Eastern Uganda
                </h3>
                <p className="text-xs text-stone-300 mt-1">
                  At the scenic base of Mount Elgon volcano.
                </p>
              </div>

              {/* Physical & Postal */}
              <div className="space-y-4 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Head Office:</strong>
                    <span>Mbale, Eastern Uganda</span>
                    <br />
                    <span>Postal Address: P.O. Box 530, Mbale, Uganda</span>
                  </div>
                </div>

                {/* Telephones */}
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Telephone Numbers:</strong>
                    <div className="space-y-1 mt-1 font-mono tabular-nums">
                      {COMPANY_DETAILS.telephones.map((tel, idx) => (
                        <div key={idx}>
                          <a
                            href={`tel:${tel.raw}`}
                            className="hover:text-amber-400 transition-colors"
                          >
                            {tel.display} {tel.isPrimary ? '(Primary & WhatsApp)' : ''}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Official Emails:</strong>
                    <div className="space-y-1 mt-1">
                      {COMPANY_DETAILS.emails.map((email, idx) => (
                        <div key={idx}>
                          <a
                            href={`mailto:${email}`}
                            className="hover:text-amber-400 transition-colors"
                          >
                            {email}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Hours & Operations:</strong>
                    <span>Monday – Saturday: 8:00 AM – 6:30 PM (EAT)</span>
                    <br />
                    <span className="text-stone-400">24/7 On-Safari Emergency Support for Guests</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-wider rounded-md flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            {/* Jamainus Charity Foundation Liaison Note */}
            <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 space-y-1.5">
              <span className="font-bold block uppercase tracking-wider text-amber-900">
                Jamainus Charity Foundation LTD
              </span>
              <p className="leading-relaxed">
                For community partnership proposals, NGO inquiries, or disability inclusion support, please state "Charity Inquiry" in your message.
              </p>
            </div>
          </div>

          {/* Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-6">
              <div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs text-stone-600 mt-1">
                  We reply within 24 business hours to all enquiries and customized itinerary requests.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-stone-900">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. Your message regarding <em>"{subject}"</em> has been forwarded to our team in Mbale. We will write to <strong>{email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage('');
                    }}
                    className="px-5 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 rounded text-xs font-semibold uppercase tracking-wider"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
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
                        placeholder="john@example.com"
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+256 700 000000"
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-stone-700 mb-1">
                        Subject of Inquiry
                      </label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                      >
                        <option value="Travel Enquiry">Safari Itinerary & Pricing Enquiry</option>
                        <option value="Tailor-Made Tour">Custom Tailor-Made Itinerary</option>
                        <option value="Kisoro Office Enquiry">Kisoro Office & Gorilla Permits Enquiry (Opening Soon)</option>
                        <option value="Kibale Office Enquiry">Kibale Office & Chimpanzee Tracking Enquiry (Opening Soon)</option>
                        <option value="Sempaya Office Enquiry">Sempaya Hot Springs & Semuliki Enquiry (Opening Soon)</option>
                        <option value="Moroto Office Enquiry">Moroto & Karamoja Cultural Expeditions (Opening Soon)</option>
                        <option value="Rwanda Office Enquiry">Rwanda Regional Office & Primate Safaris (Opening Soon)</option>
                        <option value="Tanzania Office Enquiry">Tanzania Regional Office & Serengeti/Zanzibar (Opening Soon)</option>
                        <option value="Charity & Partnership">Jamainus Charity Foundation Partnership</option>
                        <option value="Agritourism & Coffee">Mount Elgon Coffee Tour Specifics</option>
                        <option value="Ground Handling & B2B">Tour Operator / Travel Agent Partnership</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please let us know your requirements, travel dates, destinations of interest, or questions..."
                      className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-700"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-4">
                    <span className="text-xs text-stone-500">
                      Based in Mbale, Eastern Uganda
                    </span>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message / Book A Trip</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Regional Expansion: Upcoming Offices (Opening Soon) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8 pt-4">
        <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-emerald-300 animate-pulse" />
                <span>Strategic Expansion · East Africa Footprint</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Upcoming Regional Offices (Opening Soon)
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                To better serve travellers with rapid on-the-ground support, local safari directors, and direct community liaisons, Jamainus Safaris is opening six specialized regional and international branch offices across Uganda, Rwanda, and Tanzania.
              </p>
            </div>

            <div className="text-xs text-stone-400 bg-stone-800/80 p-3 rounded-xl border border-stone-700 max-w-xs shrink-0">
              <div className="font-semibold text-emerald-400 mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                <span>Interim Field Coordination</span>
              </div>
              <span>All upcoming locations are currently serviced directly by our central Mbale dispatch fleet. Hotline: </span>
              <strong className="text-white font-mono">+256 785 254899</strong>
            </div>
          </div>

          {/* Grid of the 6 Upcoming Offices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BRANCH_OFFICES.filter((o) => o.status === 'Opening Soon').map((office) => (
              <div
                key={office.id}
                className="bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-emerald-500/60 transition-all p-6 flex flex-col justify-between space-y-4 shadow-lg hover:shadow-emerald-950/40 group"
              >
                <div className="space-y-3">
                  {/* Top Bar with Location Pin & Opening Soon Pill */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/40">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                      {office.status}
                    </span>
                    <span className="text-[11px] font-mono uppercase text-stone-400 tracking-wider">
                      {office.country}
                    </span>
                  </div>

                  {/* Office Name & Location */}
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {office.location}
                    </h3>
                    <div className="text-xs text-emerald-400 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      <span>{office.region}</span>
                    </div>
                  </div>

                  {/* Landmark */}
                  {office.landmark && (
                    <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-800/80 text-[11px] text-stone-300">
                      <strong className="text-emerald-400 font-semibold block text-[10px] uppercase tracking-wider">
                        Regional Landmark Hub
                      </strong>
                      <span>{office.landmark}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {office.description}
                  </p>

                  {/* Key Specializations */}
                  <div className="space-y-1.5 pt-2 border-t border-stone-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      Core Operations & Specializations:
                    </span>
                    <ul className="space-y-1 text-xs text-stone-300">
                      {office.specializations.slice(0, 3).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                          <span className="text-[11px] leading-snug">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Circuits Badges */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block mb-1.5">
                      Key Circuits Supported:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {office.keyCircuits.map((circ, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-stone-800/90 text-[10px] text-stone-300 border border-stone-700 font-mono"
                        >
                          {circ}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
                  <span className="text-[10px] text-stone-400 truncate">
                    {office.contactNote}
                  </span>
                  <button
                    onClick={() => {
                      setSubject(`${office.location} Office Enquiry`);
                      window.scrollTo({ top: 300, behavior: 'smooth' });
                    }}
                    className="px-3 py-1.5 bg-[#166534] hover:bg-[#15803d] text-white rounded text-[11px] font-semibold uppercase tracking-wider shrink-0 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Mbale Head Office Reminder Card */}
          <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#166534] text-white flex items-center justify-center shrink-0 font-bold">
                HQ
              </div>
              <div>
                <strong className="text-white block text-sm font-serif">
                  Principal Head Office: Mbale, Eastern Uganda
                </strong>
                <span className="text-stone-400">
                  P.O. Box 530, Mbale · Operating all primary fleets, agritourism & charity governance.
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg font-semibold uppercase tracking-wider text-[11px] transition-colors"
              >
                Direct WhatsApp Hotline
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


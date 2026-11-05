import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_DETAILS } from '../data/companyData';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

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
    </div>
  );
};

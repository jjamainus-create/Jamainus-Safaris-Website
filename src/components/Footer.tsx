import React from 'react';
import { Mail, Phone, MapPin, Download, Heart, ArrowUpRight, Compass, ShieldCheck, Award } from 'lucide-react';
import { COMPANY_DETAILS, TOURISM_PILLARS } from '../data/companyData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#0f172a]/95 text-[#FAF8F5] pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Brand & Foundation (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#166534] text-white flex items-center justify-center font-serif font-bold text-xl shadow-sm">
                <Compass className="w-5 h-5 text-emerald-300" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  JAMAINUS SAFARIS
                </span>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                  Explore The Adventure
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pr-2">
              Licensed East African tour operator headquartered in Mbale, Eastern Uganda at the foot of Mount Elgon. Connecting travellers to Uganda, Rwanda, Kenya, Tanzania, and Zanzibar.
            </p>

            {/* Certifications Row with Logos */}
            <div className="pt-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                Certified & Registered With:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {COMPANY_DETAILS.certifications.map((c, i) => (
                  <div
                    key={i}
                    title={`${c.name} (${c.acronym})`}
                    className="flex items-center gap-1.5 px-2 py-1 rounded bg-stone-900 border border-stone-800 hover:border-emerald-500/50 transition-colors"
                  >
                    <div className="w-5 h-5 bg-white rounded flex items-center justify-center p-0.5 shrink-0">
                      <img
                        src={c.logo}
                        alt={c.acronym}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-stone-300">{c.acronym}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Charity Arm Badge */}
            <div className="p-3.5 rounded-lg bg-stone-900/90 border border-stone-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <Heart className="w-4 h-4 text-rose-400 shrink-0" />
                <span>JAMAINUS CHARITY FOUNDATION LTD</span>
              </div>
              <p className="text-xs text-stone-400 leading-normal">
                Slogan: <em>A Chance to Make a Difference</em>. Focusing on disability inclusion, community welfare, and habitat conservation.
              </p>
              <button
                onClick={() => onNavigate('/charity')}
                className="text-xs font-medium text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Learn about our charity mission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Services Offered from Flyer (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Services Offered
            </h4>
            <ul className="space-y-1.5 text-xs text-stone-300">
              {COMPANY_DETAILS.servicesOffered.map((s, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">·</span>
                  <span>{s.title}</span>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('/custom-safari')}
                  className="px-3.5 py-1.5 bg-[#1d4ed8] hover:bg-[#1e40af] text-white text-xs font-bold uppercase tracking-wider rounded-full flex items-center gap-1 shadow-sm cursor-pointer"
                >
                  <span>BOOK A TRIP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Destinations & Pillars (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Safaris & Circuits
            </h4>
            <ul className="space-y-2 text-xs text-stone-300">
              <li>
                <button onClick={() => onNavigate('/itineraries')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  Uganda Mountain Gorillas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/itineraries')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  Rwanda Primate Safaris
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/itineraries')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  Kenya Maasai Mara & Amboseli
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/itineraries')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  Tanzania Serengeti & Zanzibar
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/pillars')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  4 Tourism Pillars
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/destinations')} className="hover:text-emerald-300 transition-colors text-left cursor-pointer">
                  All 9 African Countries
                </button>
              </li>
              <li className="pt-2">
                <a
                  href={COMPANY_DETAILS.officialPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-emerald-300 hover:text-emerald-200 transition-colors"
                >
                  <Download className="w-3 h-3 text-emerald-400" />
                  <span>Company Profile PDF</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Head Office & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Head Office (Mbale)
            </h4>
            <div className="space-y-2.5 text-xs text-stone-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_DETAILS.headOffice}
                  <br />
                  <span className="text-stone-400">{COMPANY_DETAILS.postalAddress}</span>
                </span>
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-mono text-stone-400">Phone & WhatsApp Hotline:</div>
                {COMPANY_DETAILS.telephones.map((tel, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <a
                      href={`tel:${tel.raw}`}
                      className="hover:text-white transition-colors font-mono tabular-nums text-xs"
                    >
                      {tel.display}
                    </a>
                  </div>
                ))}
              </div>

              <div className="space-y-1 pt-1">
                <div className="text-[11px] font-mono text-stone-400">Official Emails:</div>
                {COMPANY_DETAILS.emails.map((email, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-white transition-colors text-xs truncate max-w-[200px]"
                    >
                      {email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>
              &copy; {new Date().getFullYear()} Jamainus Safaris & Jamainus Charity Foundation Ltd. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-3 text-emerald-400 font-medium">
            <span>Explore the Adventure</span>
            <span>·</span>
            <span>Experience the Culture</span>
            <span>·</span>
            <span>Travel with Purpose</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

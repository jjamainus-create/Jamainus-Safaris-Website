import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, MessageCircle, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/companyData';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenInquiry?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navButtons = [
    { label: 'Home', path: '/' },
    { label: 'Safaris & Itineraries', path: '/itineraries' },
    { label: 'Four Pillars', path: '/pillars' },
    { label: 'Destinations', path: '/destinations' },
    { label: 'About Us', path: '/about' },
    { label: 'Charity Foundation', path: '/charity' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  const primaryPhone = COMPANY_DETAILS.telephones[0];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200 shadow-xs">
      {/* Top Utility Contact Bar */}
      <div className="bg-[#1C1917] text-[#FAF8F5] text-xs py-2 px-4 sm:px-8 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6 flex-wrap">
            <span className="flex items-center gap-1.5 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>Mbale, Eastern Uganda · Base of Mt. Elgon</span>
            </span>
            <a
              href={`mailto:${COMPANY_DETAILS.emails[0]}`}
              className="hidden sm:flex items-center gap-1.5 text-stone-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{COMPANY_DETAILS.emails[0]}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${primaryPhone.raw}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-amber-400 transition-colors font-mono tabular-nums"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{primaryPhone.display}</span>
            </a>
            <span className="text-stone-700 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/256785254899?text=${encodeURIComponent("Hello Jamainus Safaris, I would like to inquire about a safari itinerary.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation Bar with Menu Buttons Across */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Wordmark */}
        <button
          onClick={() => handleLinkClick('/')}
          className="text-left group cursor-pointer focus:outline-none shrink-0"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#166534] text-white flex items-center justify-center font-serif font-bold text-lg shadow-sm">
              <Compass className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#166534] transition-colors block leading-tight">
                JAMAINUS SAFARIS
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#166534] font-semibold block">
                Explore The Adventure · Discover Africa
              </span>
            </div>
          </div>
        </button>

        {/* Menu Buttons Across the Header (Desktop / Tablet) */}
        <nav className="hidden xl:flex items-center gap-1.5">
          {navButtons.map((btn) => {
            const isActive =
              btn.path === '/'
                ? currentPath === '/'
                : currentPath.startsWith(btn.path);
            return (
              <button
                key={btn.path}
                onClick={() => handleLinkClick(btn.path)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#166534] text-white shadow-xs font-semibold'
                    : 'bg-stone-100/90 hover:bg-stone-200/90 text-stone-700 hover:text-stone-900 border border-stone-200/70'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </nav>

        {/* Primary Action Button - Styled after the flyer's prominent blue "BOOK A TRIP" badge */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleLinkClick('/custom-safari')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#1e40af] active:scale-95 transition-all rounded-full shadow-md whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-blue-200 animate-pulse" />
            <span>BOOK A TRIP</span>
          </button>
        </div>

        {/* Mobile / Tablet Menu Button Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <button
            onClick={() => handleLinkClick('/custom-safari')}
            className="sm:hidden px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white bg-[#1d4ed8] rounded-full"
          >
            BOOK A TRIP
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-stone-700 hover:text-stone-900 rounded-md hover:bg-stone-100 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Secondary Horizontal Menu Buttons Strip for Medium Screens (lg / md) */}
      <div className="hidden lg:flex xl:hidden px-4 sm:px-8 py-2 bg-stone-100/90 border-t border-stone-200 overflow-x-auto scrollbar-none gap-1.5 justify-center">
        {navButtons.map((btn) => {
          const isActive =
            btn.path === '/'
              ? currentPath === '/'
              : currentPath.startsWith(btn.path);
          return (
            <button
              key={btn.path}
              onClick={() => handleLinkClick(btn.path)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#166534] text-white shadow-xs font-semibold'
                  : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-200'
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF8F5] border-b border-stone-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 mb-1">
              Menu Navigation
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {navButtons.map((btn) => {
                const isActive =
                  btn.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(btn.path);
                return (
                  <button
                    key={btn.path}
                    onClick={() => handleLinkClick(btn.path)}
                    className={`text-left px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-[#166534] text-white font-semibold'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>
            <div className="pt-3 mt-2 border-t border-stone-200 flex flex-col gap-2.5">
              <button
                onClick={() => handleLinkClick('/custom-safari')}
                className="w-full py-2.5 text-center text-sm font-bold uppercase tracking-wider text-white bg-[#1d4ed8] hover:bg-[#1e40af] rounded-full shadow-md"
              >
                BOOK A TRIP / Plan Safari
              </button>
              <div className="pt-2 text-xs text-stone-500 space-y-1">
                <p>Mbale, Eastern Uganda · P.O. Box 530</p>
                <p className="font-mono">{primaryPhone.display}</p>
                <p>{COMPANY_DETAILS.emails[0]}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

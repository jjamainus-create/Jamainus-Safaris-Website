import React from 'react';
import { COMPANY_DETAILS } from '../data/companyData';

export const SocialIcon: React.FC<{ id: string; className?: string }> = ({
  id,
  className = 'w-4 h-4',
}) => {
  if (id === 'linkedin') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }

  if (id === 'youtube') {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-hidden="true"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    );
  }

  // Instagram icon
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
    </svg>
  );
};

interface SocialLinksProps {
  variant?: 'header' | 'footer' | 'cards';
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ variant = 'footer' }) => {
  if (variant === 'header') {
    return (
      <div className="hidden md:flex items-center gap-2">
        {COMPANY_DETAILS.socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className="text-stone-400 hover:text-amber-400 transition-colors p-0.5"
          >
            <SocialIcon id={social.id} className="w-3.5 h-3.5" />
          </a>
        ))}
      </div>
    );
  }

  if (variant === 'cards') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {COMPANY_DETAILS.socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg bg-stone-800/80 hover:bg-stone-800 border border-stone-700/80 hover:border-amber-500/60 text-stone-200 hover:text-white transition-all group"
          >
            <span className="w-7 h-7 rounded-md bg-stone-900 border border-stone-700 flex items-center justify-center text-amber-400 group-hover:text-emerald-400 transition-colors shrink-0">
              <SocialIcon id={social.id} className="w-3.5 h-3.5" />
            </span>
            <div className="min-w-0">
              <span className="text-xs font-semibold block leading-tight">{social.name}</span>
              <span className="text-[10px] text-stone-400 block truncate">{social.handle || 'Official Profile'}</span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {COMPANY_DETAILS.socialLinks.map((social) => (
        <a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          title={social.label}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-900 border border-stone-800 hover:border-emerald-500/60 text-stone-300 hover:text-emerald-300 transition-colors text-[11px] font-medium"
        >
          <SocialIcon id={social.id} className="w-3.5 h-3.5 text-emerald-400" />
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

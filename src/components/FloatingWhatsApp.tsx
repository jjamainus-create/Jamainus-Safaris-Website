import React, { useState } from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '256785254899',
  defaultMessage = 'Hello Jamainus Safaris, I would like to inquire about a safari itinerary.'
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 no-print">
      {/* Floating Prompt Tooltip / Pill on Hover */}
      <div
        className={`hidden sm:flex items-center gap-2 bg-stone-900/95 text-white text-xs px-3.5 py-2 rounded-full shadow-xl border border-stone-700/80 backdrop-blur-md transition-all duration-300 transform ${
          isHovered
            ? 'opacity-100 translate-x-0 scale-100'
            : 'opacity-0 translate-x-2 scale-95 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-white">Chat on WhatsApp</span>
          <span className="text-[11px] font-mono text-stone-300 tabular-nums">+256 785 254899</span>
        </div>
      </div>

      {/* Floating Button with Official WhatsApp Icon */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-[#25D366]/40 hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat on WhatsApp with Jamainus Safaris at +256 785 254899"
      >
        {/* Soft pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping group-hover:opacity-50" />

        {/* Online Indicator Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-300 border-2 border-white rounded-full z-10" />

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.68C7.02 10.88 7.9 12.04 8.02 12.2C8.14 12.36 9.74 14.83 12.19 15.89C12.78 16.14 13.23 16.3 13.59 16.41C14.18 16.6 14.71 16.57 15.14 16.51C15.61 16.44 16.6 15.91 16.81 15.32C17.02 14.73 17.02 14.22 16.96 14.12C16.9 14.02 16.74 13.96 16.5 13.84C16.26 13.72 15.06 13.13 14.84 13.05C14.62 12.97 14.45 12.93 14.29 13.17C14.13 13.41 13.66 13.96 13.51 14.12C13.37 14.28 13.23 14.3 12.99 14.18C12.75 14.06 11.97 13.81 11.04 12.98C10.32 12.33 9.83 11.53 9.69 11.29C9.55 11.05 9.67 10.92 9.79 10.8C9.9 10.69 10.03 10.51 10.15 10.37C10.27 10.23 10.31 10.13 10.39 9.97C10.47 9.81 10.43 9.67 10.37 9.55C10.31 9.43 9.83 8.25 9.63 7.77C9.44 7.29 9.24 7.36 9.09 7.35C8.95 7.34 8.79 7.33 8.53 7.33Z" />
        </svg>
      </a>
    </div>
  );
};

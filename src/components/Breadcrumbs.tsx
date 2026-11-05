import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center gap-1.5 text-xs text-stone-500 flex-wrap">
        <li>
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center gap-1 hover:text-amber-800 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <React.Fragment key={idx}>
              <li aria-hidden="true" className="text-stone-300">
                <ChevronRight className="w-3 h-3" />
              </li>
              <li>
                {!isLast && item.path ? (
                  <button
                    onClick={() => onNavigate(item.path!)}
                    className="hover:text-amber-800 transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <span className="text-stone-900 font-medium">{item.label}</span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

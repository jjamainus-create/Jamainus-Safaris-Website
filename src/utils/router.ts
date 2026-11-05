import { useState, useEffect, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/itineraries'
  | '/pillars'
  | '/destinations'
  | '/about'
  | '/charity'
  | '/custom-safari'
  | '/contact'
  | string;

export function useRouter() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((path: string, options?: { replace?: boolean; scroll?: boolean }) => {
    if (typeof window === 'undefined') return;

    if (options?.replace) {
      window.history.replaceState({}, '', path);
    } else {
      window.history.pushState({}, '', path);
    }

    setCurrentPath(path);

    if (options?.scroll !== false) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  return { currentPath, navigate };
}

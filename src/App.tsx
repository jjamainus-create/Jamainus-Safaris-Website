import React, { useState, useEffect } from 'react';
import { useRouter } from './utils/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { HomePage } from './pages/HomePage';
import { ItinerariesPage } from './pages/ItinerariesPage';
import { ItineraryDetailPage } from './pages/ItineraryDetailPage';
import { PillarsPage } from './pages/PillarsPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { AboutPage } from './pages/AboutPage';
import { CharityPage } from './pages/CharityPage';
import { CustomSafariPage } from './pages/CustomSafariPage';
import { ContactPage } from './pages/ContactPage';
import { Itinerary } from './types';

import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const { currentPath, navigate } = useRouter();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

  // Update page title based on path
  useEffect(() => {
    if (currentPath === '/') {
      document.title = 'Jamainus Safaris - Discover the Soul of Africa | Mbale Uganda';
    } else if (currentPath === '/itineraries') {
      document.title = 'Safaris & Itineraries | Jamainus Safaris';
    } else if (currentPath === '/pillars') {
      document.title = 'Our Four Pillars of Tourism | Jamainus Safaris';
    } else if (currentPath === '/destinations') {
      document.title = 'Geographic Vision & East Africa Circuits | Jamainus Safaris';
    } else if (currentPath === '/about') {
      document.title = 'About Us, Vision & Responsible Tourism | Jamainus Safaris';
    } else if (currentPath === '/charity') {
      document.title = 'Jamainus Charity Foundation Ltd | A Chance to Make a Difference';
    } else if (currentPath === '/custom-safari') {
      document.title = 'Tailor-Made Safari Planner | Jamainus Safaris';
    } else if (currentPath === '/contact') {
      document.title = 'Contact Us | Jamainus Safaris Mbale Uganda';
    }
  }, [currentPath]);

  const handleOpenInquiry = (itinerary?: Itinerary) => {
    setSelectedItinerary(itinerary || null);
    setIsInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);
  };

  // Render webpage matching current URL path
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    if (currentPath === '/itineraries') {
      return (
        <ItinerariesPage
          onNavigate={navigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    if (currentPath.startsWith('/itinerary/')) {
      const id = currentPath.replace('/itinerary/', '');
      return (
        <ItineraryDetailPage
          itineraryId={id}
          onNavigate={navigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    if (currentPath === '/pillars') {
      return (
        <PillarsPage
          onNavigate={navigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    if (currentPath === '/destinations') {
      return (
        <DestinationsPage
          onNavigate={navigate}
          onOpenInquiry={handleOpenInquiry}
        />
      );
    }

    if (currentPath === '/about') {
      return (
        <AboutPage
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/charity') {
      return (
        <CharityPage
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/custom-safari') {
      return (
        <CustomSafariPage
          onNavigate={navigate}
        />
      );
    }

    if (currentPath === '/contact') {
      return (
        <ContactPage
          onNavigate={navigate}
        />
      );
    }

    // Default Fallback
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center space-y-4">
        <h2 className="font-serif text-3xl font-bold text-stone-900">
          Page Not Found (404)
        </h2>
        <p className="text-sm text-stone-600">
          The requested page <code>{currentPath}</code> does not exist.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-5 py-2.5 bg-amber-800 text-white rounded-md text-xs font-semibold uppercase tracking-wider cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-amber-800 selection:text-white">
      {/* Top Bar & Main Navigation */}
      <Header
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Main Page Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp phoneNumber="256785254899" />

      {/* Global Safari Booking & Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={handleCloseInquiry}
        selectedItinerary={selectedItinerary}
      />
    </div>
  );
}

import React, { useCallback, useEffect, useState } from 'react';
import { DemoProvider, useDemo } from './context/DemoContext';
import { LoadingScreen } from './components/common/LoadingScreen';
import { DemoHeaderRibbon } from './components/common/DemoHeaderRibbon';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { GJNexoraWatermark } from './components/common/GJNexoraWatermark';
import { DemoStudioDock } from './components/common/DemoStudioDock';
import { ArchitectureModal } from './components/common/ArchitectureModal';

import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { activePage } = useDemo();

  // Scroll to top on page transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage />;
      case 'services':
        return <ServicesPage />;
      case 'case-studies':
        return <CaseStudiesPage />;
      case 'pricing':
        return <PricingPage />;
      case 'about':
        return <AboutPage />;
      case 'insights':
        return <InsightsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#111827] selection:bg-blue-100 selection:text-blue-900 font-sans relative">
      {/* Top Demo Showcase Banner */}
      <DemoHeaderRibbon />

      {/* Main Responsive Navbar */}
      <Navbar />

      {/* Dynamic Active Page View */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Corporate Enterprise Footer */}
      <Footer />

      {/* Floating Demo Control Studio (Bottom-Left) */}
      <DemoStudioDock />

      {/* Architecture & Specifications Modal */}
      <ArchitectureModal />

      {/* PERSISTENT FLOATING WATERMARK (Bottom-Right, Every Page & Viewport) */}
      <GJNexoraWatermark />
    </div>
  );
};

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = useCallback(() => setIsLoading(false), []);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <DemoProvider>
      <AppContent />
    </DemoProvider>
  );
};

export default App;

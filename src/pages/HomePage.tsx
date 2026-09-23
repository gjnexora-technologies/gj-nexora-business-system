import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CapabilitiesSection } from '../components/home/CapabilitiesSection';
import { CostEstimatorSection } from '../components/home/CostEstimatorSection';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <CapabilitiesSection />
      <CostEstimatorSection />
      <CaseStudiesSection />
      <TestimonialsSection />
    </div>
  );
};

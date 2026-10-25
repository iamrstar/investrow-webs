'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AMCPartners from '@/components/AMCPartners';
import ServicesSection from '@/components/ServicesSection';
import CalculatorSection from '@/components/CalculatorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import AIChatAdvisor from '@/components/AIChatAdvisor';
import ExitIntentModal from '@/components/ExitIntentModal';
import ConsultModal from '@/components/ConsultModal';
import StickyMobileBar from '@/components/StickyMobileBar';

export default function Home() {
  const [consultModalOpen, setConsultModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Mutual Funds');

  const handleOpenConsultModal = (service = 'Mutual Funds') => {
    setSelectedService(service);
    setConsultModalOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Header */}
      <Header onOpenConsultModal={handleOpenConsultModal} />

      {/* Hero Section with Quick Lead Capture */}
      <HeroSection onLeadSubmitted={() => {}} />

      {/* AMC & Insurer Partners Marquee */}
      <AMCPartners />

      {/* Services Showcase */}
      <ServicesSection onSelectService={handleOpenConsultModal} />

      {/* Interactive Goal & SIP Calculator */}
      <CalculatorSection onLeadSubmitted={() => {}} onOpenConsultModal={handleOpenConsultModal} />

      {/* Real Investor Testimonials & Human Stories */}
      <TestimonialsSection onOpenConsultModal={handleOpenConsultModal} />

      {/* Authority & FAQs */}
      <FAQSection />

      {/* Comprehensive Footer */}
      <Footer />

      {/* Groq AI Wealth Advisor Floating Widget */}
      <AIChatAdvisor onLeadSubmitted={() => {}} />

      {/* Exit Intent Offer Pop-Up */}
      <ExitIntentModal onLeadSubmitted={() => {}} />

      {/* Consultation Request Modal */}
      <ConsultModal 
        isOpen={consultModalOpen}
        initialService={selectedService}
        onClose={() => setConsultModalOpen(false)}
        onLeadSubmitted={() => {}}
      />

      {/* Sticky Mobile Actions Bar */}
      <StickyMobileBar onOpenCallbackModal={() => handleOpenConsultModal('Mobile Callback')} />
    </main>
  );
}

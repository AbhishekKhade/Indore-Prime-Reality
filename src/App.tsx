import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectHighlights } from './components/ProjectHighlights';
import { ApartmentOptions } from './components/ApartmentOptions';
import { Amenities } from './components/Amenities';
import { LocationAdvantages } from './components/LocationAdvantages';
import { PricingAndEmi } from './components/PricingAndEmi';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { LeadCaptureSection } from './components/LeadCaptureSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal, BrochureModal, VirtualTourModal } from './components/Modals';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState('2 BHK Smart Luxury');
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [virtualTourModalOpen, setVirtualTourModalOpen] = useState(false);

  const handleOpenBookingModal = (config?: string) => {
    if (config) {
      setSelectedConfig(config);
    }
    setBookingModalOpen(true);
  };

  const handleOpenBrochureModal = () => {
    setBrochureModalOpen(true);
  };

  const handleOpenVirtualTourModal = () => {
    setVirtualTourModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1a1a1a] flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#1a202c] pb-14 md:pb-0">
      
      {/* Top Navigation */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal} 
        onOpenBrochureModal={handleOpenBrochureModal} 
      />

      {/* Main Landing Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenBookingModal={handleOpenBookingModal}
          onOpenBrochureModal={handleOpenBrochureModal}
          onOpenVirtualTourModal={handleOpenVirtualTourModal}
        />

        {/* 2. Project Highlights */}
        <ProjectHighlights />

        {/* 3. Apartment Options (2 & 3 BHK) */}
        <ApartmentOptions 
          onOpenBookingModal={handleOpenBookingModal}
          onOpenBrochureModal={handleOpenBrochureModal}
        />

        {/* 4. Amenities */}
        <Amenities 
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 5. Location Advantages */}
        <LocationAdvantages 
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 6. Pricing & Interactive EMI Calculator */}
        <PricingAndEmi 
          onOpenBookingModal={handleOpenBookingModal}
          onOpenBrochureModal={handleOpenBrochureModal}
        />

        {/* 7. Why Choose Us */}
        <WhyChooseUs />

        {/* 8. Testimonials */}
        <Testimonials 
          onOpenBookingModal={() => handleOpenBookingModal()}
        />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Dedicated Lead Capture & Free Site Visit Scheduler */}
        <LeadCaptureSection />

        {/* 11. Final CTA */}
        <FinalCta 
          onOpenBookingModal={() => handleOpenBookingModal()}
          onOpenBrochureModal={handleOpenBrochureModal}
        />
      </main>

      {/* 12. Footer */}
      <Footer 
        onOpenBookingModal={() => handleOpenBookingModal()}
        onOpenBrochureModal={handleOpenBrochureModal}
      />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingActions 
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Interactive Modals */}
      <BookingModal 
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialConfig={selectedConfig}
      />

      <BrochureModal 
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
      />

      <VirtualTourModal 
        isOpen={virtualTourModalOpen}
        onClose={() => setVirtualTourModalOpen(false)}
        onBookVisit={() => handleOpenBookingModal()}
      />

    </div>
  );
}

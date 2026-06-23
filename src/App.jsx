import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import TransformationSection from './components/TransformationSection';
import ProcessSection from './components/ProcessSection';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import About from './components/About';
import IndustriesSection from './components/IndustriesSection';
import AIShowcase from './components/AIShowcase';
import Portfolio from './components/Portfolio';

import SocialProof from './components/SocialProof';
import WhyChooseUs from './components/WhyChooseUs';
import FounderMessage from './components/FounderMessage';
import Testimonials from './components/Testimonials';
import Packages from './components/Packages';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

function MainLayout() {
  return (
    <div className="relative min-h-screen bg-brandBg font-outfit text-brandText selection:bg-brandPrimary selection:text-black antialiased">
      {/* Global Cinematic Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Floating Actions Stack */}
      <FloatingActions />

      {/* Page Sections Flow */}
      <main>
        <Hero />
        <TrustSection />
        <TransformationSection />
        <ProcessSection />
        <Problem />
        <Solution />
        <Services />
        <About />
        <IndustriesSection />
        <AIShowcase />
        <Portfolio />
        
        <SocialProof />
        <WhyChooseUs />
        <FounderMessage />
        <Testimonials />
        <Packages />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

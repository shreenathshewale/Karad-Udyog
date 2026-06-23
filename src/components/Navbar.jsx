import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll listener — stable empty dep array, no conditional sizing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Body overflow lock when mobile menu opens / closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Packages', href: '#packages' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-4 bg-black/60 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 group">
          <span className="font-outfit text-xl font-extrabold tracking-wider text-brandText transition-colors duration-300">
            KARAD UDYOG
          </span>
          <span className="text-brandPrimary text-xl font-black select-none animate-pulse">•</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-outfit text-xs font-semibold uppercase tracking-widest text-brandMuted hover:text-brandPrimary transition-colors duration-300 relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brandPrimary transition-all duration-300 ease-out group-hover:w-1/2" />
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-6 py-3 rounded-full bg-brandSurface border border-white/10 hover:border-brandPrimary/50 text-brandText font-devanagari text-xs font-bold transition-all duration-500 ease-out shadow-gold-glow hover:shadow-gold-glow-hover"
          >
            <span>स्ट्रॅटेजी कॉल बुक करा →</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-brandText focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ======================================================= */}
      {/* MOBILE FULL-SCREEN SIDEBAR                             */}
      {/* ======================================================= */}
      <div
        className={`fixed inset-0 top-0 left-0 h-screen w-screen z-[9999] transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#050505' }}
        aria-modal="true"
        role="dialog"
      >
        {/* Close button — always visible, highest z-index */}
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-brandPrimary hover:scale-110 transition-all duration-300 z-[10001]"
          aria-label="Close Menu"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Menu content */}
        <div className="relative flex flex-col items-center justify-center h-full space-y-6 text-center px-8">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-1 group mb-4"
          >
            <span className="font-outfit text-2xl font-extrabold tracking-wider text-white">
              KARAD UDYOG
            </span>
            <span className="text-brandPrimary text-2xl font-black select-none animate-pulse">•</span>
          </a>

          {/* Navigation Links */}
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-outfit text-xl font-bold text-white hover:text-brandPrimary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}

          <hr className="w-3/4 border-t border-white/20 my-2" />

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/karadudyog/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brandPrimary transition-colors duration-300 hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61590273634085"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-brandPrimary transition-colors duration-300 hover:scale-110 transform"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/919577773167"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#25D366] transition-colors duration-300 hover:scale-110 transform"
              aria-label="WhatsApp"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>

          <hr className="w-3/4 border-t border-white/20 my-2" />

          {/* CTA Button */}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brandSurface border border-white/10 hover:border-brandPrimary/50 text-white font-devanagari text-xs font-bold transition-all duration-500 shadow-gold-glow hover:shadow-gold-glow-hover"
          >
            <span>स्ट्रॅटेजी कॉल बुक करा →</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

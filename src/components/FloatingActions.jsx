import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-actions fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end pointer-events-none transition-all duration-300">
      
      {/* Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-auto relative group"
          >
            <button
              onClick={scrollToTop}
              className="w-[56px] h-[56px] md:w-16 md:h-16 rounded-full bg-[#111111] border border-brandPrimary/20 text-brandPrimary hover:border-brandPrimary flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,212,0,0.3)] cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            {/* Tooltip to the left */}
            <span className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-[#111111] border border-white/10 text-brandPrimary text-xs font-mono rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl z-20">
              Scroll To Top
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Button */}
      <div className="pointer-events-auto relative group">
        <a
          href="tel:+919577773167"
          className="w-[56px] h-[56px] md:w-16 md:h-16 rounded-full bg-[#FFD400] text-[#050505] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,212,0,0.4)] cursor-pointer shadow-lg"
          aria-label="Call Us"
        >
          <Phone className="w-5 h-5 md:w-6 md:h-6 stroke-[2.5]" />
        </a>
        {/* Tooltip to the left */}
        <span className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-[#111111] border border-white/10 text-brandPrimary text-xs font-mono rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl z-20">
          Call Now
        </span>
      </div>

      {/* WhatsApp Button */}
      <div className="pointer-events-auto relative group">
        <a
          href="https://wa.me/919577773167"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[56px] h-[56px] md:w-16 md:h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] cursor-pointer shadow-lg"
          aria-label="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 md:w-7 md:h-7">
            <path d="M12.01 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.4 1.26 4.84L2 22l5.3-1.39C8.7 21.4 10.3 22 12.01 22c5.52 0 10-4.48 10-10S17.53 2 12.01 2zm6.2 13.92c-.25.7-1.47 1.35-2.02 1.44-.48.08-1.1.15-3.2-.72-2.68-1.12-4.41-3.85-4.54-4.03-.13-.18-1.08-1.44-1.08-2.75 0-1.31.68-1.96.93-2.22.25-.26.54-.33.72-.33h.52c.17 0 .39-.01.6.5.21.52.72 1.76.78 1.89.06.13.1.28.01.46-.09.18-.13.28-.27.44-.14.16-.3.36-.43.48-.15.14-.3.29-.13.58.17.29.76 1.25 1.63 2.03.87.78 1.61 1.02 1.9 1.17.29.15.46.12.63-.07.17-.19.74-.86.94-1.16.2-.3.4-.25.67-.15s1.72.81 2.02.96c.3.15.5.22.58.35.08.13.08.75-.17 1.45z"/>
          </svg>
        </a>
        {/* Tooltip to the left */}
        <span className="absolute right-16 md:right-20 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-[#111111] border border-white/10 text-brandPrimary text-xs font-mono rounded pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl z-20">
          Chat on WhatsApp
        </span>
      </div>

    </div>
  );
}

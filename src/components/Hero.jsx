import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowRight, Sparkles, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const [quoteIdx, setQuoteIdx] = useState(0);

  const quotes = [
    'मोठे ब्रँड जन्मतः मोठे नसतात, ते घडवले जातात.',
    'व्यवसायाची ओळख नावाने नाही, ब्रँडने निर्माण होते.',
    'सातत्य, गुणवत्ता आणि विश्वास यांच्यावरच मोठा व्यवसाय उभा राहतो.',
    'डिजिटल जगात दिसत नसाल, तर ग्राहकांसाठी तुम्ही अस्तित्वातच नाही.',
    'ज्या व्यवसायाची कथा असते, त्याच व्यवसायाचा ब्रँड बनतो.',
    'ग्राहक आधी विश्वास विकत घेतो, नंतर उत्पादन.',
    'यशस्वी व्यवसाय जाहिरातींनी नाही, तर मजबूत ब्रँडिंगने घडतो.',
    'आजची डिजिटल उपस्थिती म्हणजे उद्याची बाजारपेठ.',
  ];

  // Run once on mount — stable empty dep array
  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIdx((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const spotlightVariants = {
    animate: {
      x: [0, 60, -40, 20, 0],
      y: [0, -30, 40, -20, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      id="home"
      className="relative bg-brandBg py-12 md:py-16 lg:py-20 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background Spotlight */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          variants={spotlightVariants}
          animate="animate"
          className="absolute top-[25%] left-[25%] -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-brandPrimary/6 blur-[80px] md:blur-[120px] mix-blend-screen"
        />
        <div className="absolute bottom-[15%] right-[15%] w-[250px] h-[250px] rounded-full bg-white/2 blur-[100px]" />
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto w-full z-10 text-left">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl flex flex-col items-start"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brandSurface border border-white/5 shadow-gold-glow mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
            <span className="font-outfit text-[10px] font-semibold uppercase tracking-wider text-brandText/80">
              Maharashtra's Premium Digital Growth Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-devanagari text-4xl md:text-5xl lg:text-6xl font-black text-brandText leading-[1.25] mb-5 tracking-tight"
          >
            स्थानिक व्यवसायांना डिजिटल जगात{' '}
            <span className="text-brandPrimary text-glow-gold relative inline-block">
              मोठा ब्रँड
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-brandPrimary/30 rounded-full" />
            </span>{' '}
            बनवण्याचे आमचे ध्येय आहे.
          </motion.h1>

          {/* Rotating Quotes */}
          <motion.div
            variants={itemVariants}
            className="h-12 mb-5 flex items-center relative w-full overflow-hidden border-l-2 border-brandPrimary/40 pl-4 py-0.5"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={quoteIdx}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-2 text-left"
              >
                <Quote className="w-3.5 h-3.5 text-brandPrimary shrink-0 mt-0.5" />
                <p className="font-devanagari text-xs md:text-sm font-bold text-brandPrimary italic">
                  {quotes[quoteIdx]}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-outfit text-sm md:text-base text-brandMuted max-w-2xl mb-8 leading-relaxed"
          >
            We focus on honest work, professional branding, creative content and long-term business growth.
            We transform local enterprises into commanding market leaders.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919577773167?text=Hello%20Karad%20Udyog,%20I%20want%20to%20grow%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-[24px] bg-[#25D366] text-white font-outfit text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md border border-[#25D366]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Now</span>
            </a>

            {/* Call */}
            <a
              href="tel:+919577773167"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-[24px] bg-[#FFD400] text-black font-outfit text-xs font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md border border-[#FFD400]"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>

            {/* Free Quote */}
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-[24px] bg-brandSurface border border-white/10 hover:border-brandPrimary/40 text-brandText font-outfit text-xs font-semibold transition-all duration-300 shadow-gold-glow"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-brandMuted" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

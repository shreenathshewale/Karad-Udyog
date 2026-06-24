import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, PlayCircle } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    quote: "Karad Udyog मुळे आमच्या व्यवसायाची सोशल मीडियावर चांगली ओळख निर्माण झाली. पोस्टर्स आणि रील्समुळे ग्राहकांचा प्रतिसाद वाढला.",
    name: "Vikas Atakare",
    business: "Snacks Center"
  },
  {
    id: 2,
    quote: "Professional डिझाईन आणि उत्कृष्ट Branding मुळे आमच्या ज्वेलरी व्यवसायाला वेगळी ओळख मिळाली. सेवा खूपच समाधानकारक आहे.",
    name: "Santosh Belvankar",
    business: "Jewellery Shop"
  },
  {
    id: 3,
    quote: "Creative पोस्टर्स आणि नियमित सोशल मीडिया कंटेंटमुळे आमच्या दुकानाची Reach वाढली. उत्तम काम.",
    name: "Akshay Devrukhkar",
    business: "Electronic Shop"
  },
  {
    id: 4,
    quote: "आमच्या व्यवसायासाठी तयार केलेले डिझाईन्स आणि मार्केटिंग आयडिया खूप प्रभावी ठरल्या. वेळेत आणि दर्जेदार सेवा मिळाली.",
    name: "Akram Sheikh",
    business: "Plastic Bag Business"
  },
  {
    id: 5,
    quote: "Karad Udyog ने आमच्या सेवांना डिजिटल माध्यमातून ग्राहकांपर्यंत पोहोचवण्यास मदत केली. Professional Approach आवडला.",
    name: "Sandesh Chaudhari",
    business: "Solar Panel Installation"
  },
  {
    id: 6,
    quote: "Social Media Branding आणि Creative Content मुळे व्यवसायाची विश्वासार्हता वाढली. उत्कृष्ट अनुभव.",
    name: "Akhtar Attar",
    business: "Solar Panel Sales & Installation"
  },
  {
    id: 7,
    quote: "रील्स आणि पोस्टर्समुळे आमच्या सेवांबद्दल अधिक लोकांपर्यंत माहिती पोहोचली. उत्तम सपोर्ट.",
    name: "Samrat Waghmare",
    business: "AC Installation & Repairing"
  },
  {
    id: 8,
    quote: "Premium Branding आणि Professional Designs मुळे आमच्या ब्रँडची प्रतिमा अधिक मजबूत झाली.",
    name: "Abhiraj Chinderkar",
    business: "Jewellers Shop"
  },
  {
    id: 9,
    quote: "आकर्षक सोशल मीडिया कंटेंट आणि चांगल्या मार्केटिंगमुळे आमच्या ट्रॅव्हल व्यवसायाला फायदा झाला. नक्कीच शिफारस करेन.",
    name: "Ayan Fakir",
    business: "Travel Agency"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  
  const pauseTimeoutRef = useRef(null);
  const totalSlides = reviewsData.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle auto-play logic cleanly
  useEffect(() => {
    if (isHovered || isPaused) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, isPaused, totalSlides]);

  // Handle user interaction pause
  const handleInteraction = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    
    // Resume auto-play after 5 seconds of inactivity
    pauseTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  };

  const handleNext = () => {
    handleInteraction();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    handleInteraction();
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleDotClick = (idx) => {
    handleInteraction();
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < itemsPerView; i++) {
      visible.push(reviewsData[(currentIndex + i) % totalSlides]);
    }
    return visible;
  };

  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -30) {
      handleNext();
    } else if (swipe > 30) {
      handlePrev();
    }
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <section id="testimonials" className="relative bg-[#050505] py-20 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Background Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-[#FFD400]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-3 px-5 py-2.5 rounded-full bg-[#111111] border border-white/5 mb-6 shadow-[0_0_15px_rgba(255,212,0,0.05)]">
            <span className="font-outfit text-xs font-bold uppercase tracking-widest text-[#FFD400]">
              ⭐ CLIENT SUCCESS STORIES
            </span>
            <div className="hidden md:block w-px h-3 bg-white/20"></div>
            <div className="flex items-center gap-1.5 text-white/50">
              <PlayCircle className={`w-3.5 h-3.5 ${(isHovered || isPaused) ? 'text-white/30' : 'text-[#FFD400] animate-pulse'}`} />
              <span className={`font-outfit text-[10px] font-semibold uppercase tracking-widest transition-colors ${(isHovered || isPaused) ? 'text-white/30' : 'text-[#FFD400]/80'}`}>
                Auto Playing Reviews
              </span>
            </div>
          </div>

          <h2 className="font-devanagari text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            आमच्या ग्राहकांचे अनुभव
          </h2>
          <p className="font-outfit text-base md:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-8">
            कराड आणि महाराष्ट्रातील विविध व्यवसायांनी Karad Udyog सोबत काम करून मिळवलेले खरे अनुभव.
          </p>
          <div className="inline-block relative">
            <Quote className="absolute -top-4 -left-6 w-8 h-8 text-[#FFD400]/20 rotate-180" />
            <p className="font-devanagari text-xl md:text-2xl text-[#FFD400] font-medium italic relative z-10 px-4">
              "ग्राहकांचा विश्वास हीच आमची सर्वात मोठी कमाई आहे."
            </p>
            <Quote className="absolute -bottom-4 -right-6 w-8 h-8 text-[#FFD400]/20" />
          </div>
        </motion.div>
      </div>

      <div 
        className="max-w-7xl mx-auto relative z-10"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleInteraction}
      >
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 lg:-left-12 z-20 hidden md:flex items-center justify-center">
          <button 
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:text-[#FFD400] hover:border-[#FFD400]/50 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(255,212,0,0.3)] hover:-translate-x-1"
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 lg:-right-12 z-20 hidden md:flex items-center justify-center">
          <button 
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-white hover:text-[#FFD400] hover:border-[#FFD400]/50 transition-all shadow-lg hover:shadow-[0_0_15px_rgba(255,212,0,0.3)] hover:translate-x-1"
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden py-8 px-2 md:px-4">
          <motion.div 
            className="flex gap-6 min-h-[320px] relative"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="popLayout" initial={false} custom={direction}>
              {getVisibleReviews().map((review) => {
                const nameParts = review.name.trim().split(' ');
                const initial1 = nameParts.length > 0 ? nameParts[0].charAt(0) : '';
                const initial2 = nameParts.length > 1 ? nameParts[1].charAt(0) : '';
                const initials = (initial1 + initial2).toUpperCase();

                return (
                  <motion.div
                    layout
                    key={review.id}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 30 : -30, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction > 0 ? -30 : 30, scale: 0.98, transition: { duration: 0.8, ease: "easeInOut" } }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] flex-none"
                  >
                    <div className="relative flex flex-col justify-between h-full p-8 rounded-[24px] bg-[#111111] border border-[#FFD400]/10 hover:border-[#FFD400]/40 transition-all duration-500 group overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-grab active:cursor-grabbing">
                      
                      {/* Quote Watermark */}
                      <Quote className="absolute top-6 right-6 w-20 h-20 text-white/5 group-hover:text-[#FFD400]/10 transition-colors duration-500 transform rotate-12" />

                      <div className="relative z-10">
                        {/* Stars */}
                        <div className="flex items-center gap-1.5 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#FFD400] text-[#FFD400] drop-shadow-[0_0_8px_rgba(255,212,0,0.5)]" />
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p className="font-devanagari text-[17px] md:text-lg leading-relaxed text-white/90 mb-8 italic min-h-[120px]">
                          "{review.quote}"
                        </p>
                      </div>

                      {/* Client Info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                        <div className="w-14 h-14 rounded-full bg-[#1A1A1A] border-2 border-[#FFD400]/20 flex items-center justify-center text-[#FFD400] font-outfit font-black text-xl shrink-0 group-hover:bg-[#FFD400] group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(255,212,0,0.1)] group-hover:shadow-[0_0_20px_rgba(255,212,0,0.4)]">
                          {initials}
                        </div>
                        <div className="flex flex-col text-left">
                          <h4 className="font-devanagari text-lg font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300">
                            {review.name}
                          </h4>
                          <p className="font-outfit text-xs text-white/50 font-medium uppercase tracking-wider mt-1">
                            {review.business}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 md:gap-3 mt-6">
          {reviewsData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleDotClick(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentIndex 
                  ? 'w-10 h-2.5 bg-[#FFD400] shadow-[0_0_10px_rgba(255,212,0,0.6)]' 
                  : 'w-2.5 h-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

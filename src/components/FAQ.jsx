import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'What is the difference between Karad Udyog and a local poster designer?',
      a: 'A graphic designer creates separate graphics based on instructions. Karad Udyog builds complete brand ecosystems. We conduct strategy workshops, write scripts, code websites, run paid advertising campaigns, and setup automated lead captures. We focus on business growth outcomes, not just graphics.',
    },
    {
      q: 'How long does a complete premium website and branding project take?',
      a: 'A typical project spans 4 to 6 weeks. This includes initial brand strategy and moodboarding (Week 1-2), copywriting and web development (Week 3-4), search optimization and review adjustments (Week 5), and final deployment (Week 6). We maintain close contact throughout the cycle.',
    },
    {
      q: 'Do you create advertisements and video scripts in Marathi?',
      a: 'Yes, this is our core advantage. We specialize in regional Marathi copywriting and audio production. We build campaigns that connect emotionally with the local culture and dialect, translating directly into higher sales conversions.',
    },
    {
      q: 'How much ad budget do I need for Google and Meta campaigns?',
      a: 'We recommend starting with an ad budget of ₹15,000 to ₹30,000 per month for local campaigns. We continuously optimize your campaigns, tracking cost-per-lead (CPL) to ensure your advertising spend produces direct returns.',
    },
    {
      q: 'Can we hire you for simple, one-off social media posters?',
      a: 'We prioritize comprehensive growth systems because single posters do not grow businesses. However, we do offer brand-asset packages (our Basic & Business Boost packages) that provide a bundle of templates, branding guides, and assets to set up your identity.',
    },
  ];

  return (
    <section id="faq" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      
      {/* Background Spotlight */}
      <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] rounded-full bg-brandPrimary/2 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary"></span>
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            Common Inquiries
          </span>
        </div>

        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          नेहमी विचारले जाणारे प्रश्न
        </h2>
        <p className="font-outfit text-base text-brandMuted mt-4 max-w-xl mx-auto leading-relaxed">
          Clear answers about our design system, timelines, regional marketing focus, and growth investments.
        </p>
      </div>

      {/* Accordion Stack */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="rounded-[24px] bg-brandSurface border border-white/5 overflow-hidden transition-colors duration-300 hover:border-brandPrimary/10"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex gap-4 items-center">
                  <HelpCircle className="w-5 h-5 text-brandPrimary shrink-0" />
                  <span className="font-outfit text-sm md:text-base font-bold text-brandText">
                    {faq.q}
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brandMuted shrink-0">
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 pl-16 text-left border-t border-white/5 pt-4">
                      <p className="font-outfit text-xs md:text-sm text-brandMuted leading-relaxed max-w-2xl">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

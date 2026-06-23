import React from 'react';
import { motion } from 'framer-motion';

export default function Solution() {
  const steps = [
    {
      num: '01',
      title: 'Premium Brand Identity',
      subtitle: 'Branding',
      desc: 'Crafting a unique premium logo, select typography, and custom color architecture that commands visual authority and stands out from generic styles.',
    },
    {
      num: '02',
      title: 'High-Impact Content Creation',
      subtitle: 'Content Creation',
      desc: 'Producing custom editorial assets, festival content, promo videos, and script-driven visual media that capture immediate buyer interest.',
    },
    {
      num: '03',
      title: 'Organic Social Media Acceleration',
      subtitle: 'Social Media Growth',
      desc: 'Building high-reach channels, viral Instagram Reels, and professional platforms optimized to grow organic traffic and build authority.',
    },
    {
      num: '04',
      title: 'Conversion-Engineered Website',
      subtitle: 'Website Development',
      desc: 'Designing premium digital flagships with clean typography, fast loading times, and direct layouts engineered to convert traffic into calls.',
    },
    {
      num: '05',
      title: 'Targeted High-ROI Paid Advertising',
      subtitle: 'Paid Advertising',
      desc: 'Deploying laser-targeted Meta and Google Search Campaigns to funnel warm, high-intent prospects straight into your sales pipeline.',
    },
    {
      num: '06',
      title: 'Automated Lead Generation Pipelines',
      subtitle: 'Lead Generation',
      desc: 'Setting up structured capture funnels, automated greeting systems, and quick-reply sequences that convert page visitors into paying clients.',
    },
    {
      num: '07',
      title: 'Predictable Business Growth',
      subtitle: 'Business Growth',
      desc: 'Fusing branding and marketing into a self-sustaining system, giving your business a reliable growth engine and commanding authority.',
    },
  ];

  return (
    <section id="solution" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brandPrimary/3 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary"></span>
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            The Blueprint
          </span>
        </div>

        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight">
          करड उद्योग ग्रोथ सिस्टीम
        </h2>
        <p className="font-outfit text-base text-brandMuted mt-4 max-w-xl mx-auto leading-relaxed">
          A systematic, battle-tested framework engineered to transform unknown local businesses into recognizable market brands.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="max-w-3xl mx-auto relative">
        {/* Continuous timeline line */}
        <div className="absolute left-4 md:left-1/2 top-2 bottom-2 w-[1px] bg-white/10 -translate-x-1/2 z-0" />

        {/* Floating active glow line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
          className="absolute left-4 md:left-1/2 top-2 w-[1px] bg-brandPrimary -translate-x-1/2 z-0 shadow-[0_0_10px_#FFD400]"
        />

        {/* Steps */}
        <div className="flex flex-col gap-16 md:gap-24 relative z-10">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={step.num}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full relative ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 top-2 md:top-auto -translate-x-1/2 w-8 h-8 rounded-full bg-brandBg border-2 border-white/20 hover:border-brandPrimary flex items-center justify-center transition-colors duration-500 group shadow-md hover:shadow-brandPrimary/30">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="w-2.5 h-2.5 rounded-full bg-brandPrimary"
                  />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-[42%] pl-12 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="p-6 md:p-8 rounded-[24px] bg-brandSurface border border-white/5 shadow-gold-glow hover:border-brandPrimary/20 transition-all duration-500 text-left"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-outfit text-xs font-bold text-brandPrimary bg-brandPrimary/10 border border-brandPrimary/20 px-2 py-0.5 rounded">
                        {step.num}
                      </span>
                      <span className="font-outfit text-xs font-bold text-brandMuted uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>

                    <h3 className="font-outfit text-lg md:text-xl font-bold text-brandText mb-2">
                      {step.title}
                    </h3>
                    <p className="font-outfit text-sm text-brandMuted leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>
                </div>

                {/* Empty block to preserve layout on desktop */}
                <div className="hidden md:block w-[42%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

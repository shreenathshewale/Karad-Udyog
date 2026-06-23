import React from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed,
  Hotel,
  Briefcase,
  Gem,
  Home,
  GraduationCap,
  Plane,
  Activity,
  Sun,
  ShoppingBag
} from 'lucide-react';

export default function IndustriesSection() {
  const industries = [
    { name: 'Restaurants', icon: UtensilsCrossed, desc: 'Attracting local food lovers with premium menu presentation and viral Reels.' },
    { name: 'Hotels', icon: Hotel, desc: 'Filling seasonal room bookings with corporate, high-converting landing pages.' },
    { name: 'CA Firms', icon: Briefcase, desc: 'Building professional digital authority to capture premium corporate clients.' },
    { name: 'Jewellers', icon: Gem, desc: 'Highlighting heritage and metal purity with cinematic video campaigns.' },
    { name: 'Real Estate', icon: Home, desc: 'Generating qualified residential and commercial plot booking calls.' },
    { name: 'Education Institutes', icon: GraduationCap, desc: 'Increasing academic admissions with targeted local inquiry pages.' },
    { name: 'Travel Agencies', icon: Plane, desc: 'Scaling vacation bookings with scenic, high-reach vertical video assets.' },
    { name: 'Hospitals', icon: Activity, desc: 'Building local patient trust and ranking on Google Local Search Map listings.' },
    { name: 'Solar Businesses', icon: Sun, desc: 'Acquiring high-intent clean energy inquiries via Meta lead forms.' },
    { name: 'Retail Shops', icon: ShoppingBag, desc: 'Dominating regional searches to drive footfall to your physical store.' },
  ];

  return (
    <section id="industries" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[20%] right-[10%] w-[450px] h-[300px] bg-brandPrimary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-start text-left mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-pulse"></span>
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            Target Markets
          </span>
        </div>
        <h2 className="font-outfit text-3xl md:text-5xl font-extrabold text-brandText leading-tight">
          Industries We Help Grow
        </h2>
        <p className="font-outfit text-sm md:text-base text-brandMuted mt-3 max-w-xl leading-relaxed">
          We build custom marketing systems tailored specifically to the buying habits of your target industry.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {industries.map((ind, idx) => {
          const IconComponent = ind.icon;
          return (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="p-6 rounded-[24px] bg-brandSurface border border-white/5 hover:border-brandPrimary/10 shadow-gold-glow hover:shadow-gold-glow-hover transition-all duration-500 text-left flex flex-col justify-between min-h-[180px]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brandMuted mb-6">
                <IconComponent className="w-5 h-5 text-brandPrimary" />
              </div>

              <div>
                <h3 className="font-outfit text-base font-bold text-brandText mb-1.5">
                  {ind.name}
                </h3>
                <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Film, Users, ShieldCheck, TrendingUp, Clock } from 'lucide-react';

export default function TrustSection() {
  const trustCards = [
    {
      value: '500+',
      label: 'Premium Designs',
      desc: 'Bespoke posters, flyers, and branding kits crafted without cheap templates.',
      icon: Palette,
    },
    {
      value: '100+',
      label: 'Creative Reels',
      desc: 'Script-driven viral reels engineered for maximum organic reach.',
      icon: Film,
    },
    {
      value: '50+',
      label: 'Businesses Served',
      desc: 'Partnered with regional companies to scale their digital presence.',
      icon: Users,
    },
    {
      value: '100%',
      label: 'Support Commitment',
      desc: 'Direct channels ensuring consistent post-launch help and advice.',
      icon: ShieldCheck,
    },
    {
      value: '₹10L+',
      label: 'Google & Meta Ads Managed',
      desc: 'Successfully managing and optimizing advertising campaigns across Google Ads and Meta Ads to generate leads, increase visibility, and drive measurable business growth.',
      icon: TrendingUp,
    },
    {
      value: '24 Hours',
      label: 'Average Response Time',
      desc: 'Fast, prompt updates to respect your business timelines.',
      icon: Clock,
    },
  ];

  return (
    <section id="trust" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background radial spotlight */}
      <div className="absolute top-[20%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-brandPrimary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-start text-left mb-16">
        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          विश्वास का महत्त्वाचा आहे?
        </h2>
        <p className="font-outfit text-sm md:text-base text-brandPrimary uppercase tracking-widest font-bold mt-2">
          Why businesses choose Karad Udyog
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trustCards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="p-8 rounded-[24px] bg-brandSurface border border-white/5 hover:border-brandPrimary/10 shadow-gold-glow hover:shadow-gold-glow-hover transition-all duration-500 text-left flex flex-col justify-between min-h-[200px]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-outfit text-3xl md:text-4xl font-black text-brandPrimary text-glow-gold tracking-tight">
                  {card.value}
                </span>
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brandMuted">
                  <IconComponent className="w-5 h-5 text-brandPrimary" />
                </div>
              </div>

              <div>
                <h3 className="font-outfit text-base font-bold text-brandText mb-1">
                  {card.label}
                </h3>
                <p className="font-outfit text-xs text-brandMuted leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

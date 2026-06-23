import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative bg-brandBg py-16 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brandPrimary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left Side: Founder Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 flex justify-center lg:justify-start"
        >
          <div className="relative group w-full max-w-[420px]">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brandPrimary/40 to-transparent rounded-[26px] blur opacity-60 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-[24px] overflow-hidden border border-brandPrimary/20 bg-brandSurface shadow-2xl">
              <img
                src="/founder-photo.jpg"
                alt="Uday Belvankar - Founder Karad Udyog"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ aspectRatio: '3/4' }}
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 rounded border border-brandPrimary/30 bg-brandPrimary/10 backdrop-blur-md font-mono text-[10px] text-brandPrimary uppercase tracking-widest mb-2">
                  Founder
                </span>
                <h3 className="font-outfit text-2xl font-black text-white">Uday Belvankar</h3>
                <p className="font-outfit text-xs text-white/70 tracking-widest uppercase">Chief Brand Architect</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-7/12 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
              <span className="font-outfit text-xs font-semibold uppercase tracking-widest text-brandPrimary">
                Founder Story
              </span>
            </div>

            <h2 className="font-outfit text-3xl md:text-5xl font-black text-brandText leading-[1.2] mb-6">
              Meet The Person Behind <br />
              <span className="text-brandPrimary text-glow-gold">Karad Udyog</span>
            </h2>

            <p className="font-outfit text-base text-brandMuted leading-relaxed mb-8 max-w-2xl">
              Karad Udyog was started with a simple mission — helping local businesses build a strong digital presence through branding, reels, websites, Google Ads, Meta Ads, and creative marketing.
            </p>

            <blockquote className="relative p-6 md:p-8 rounded-[20px] bg-[#111] border border-white/5 mb-10 overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-brandPrimary" />
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-brandPrimary/10 blur-2xl group-hover:bg-brandPrimary/20 transition-all duration-500" />
              
              <p className="relative z-10 font-devanagari text-xl md:text-2xl font-bold text-brandText leading-relaxed">
                "मोठा ब्रँड बनण्यासाठी मोठे बजेट नाही, <br className="hidden md:block" />
                <span className="text-brandPrimary">योग्य दिशा आणि सातत्य</span> आवश्यक असते."
              </p>
            </blockquote>

            {/* Premium Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full">
              {[
                'Branding Solutions',
                'Reel Production',
                'Google Ads',
                'Meta Ads',
                'Website Development',
                'Business Growth'
              ].map((stat, i) => (
                <motion.div
                  key={stat}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-3 group cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-brandPrimary/10 flex items-center justify-center border border-brandPrimary/30 group-hover:bg-brandPrimary/20 transition-colors duration-300 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brandPrimary" />
                  </div>
                  <span className="font-outfit text-sm font-semibold text-brandText/90 tracking-wide group-hover:text-brandPrimary transition-colors duration-300">
                    {stat}
                  </span>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

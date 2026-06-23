import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, MessageSquare, Sparkles } from 'lucide-react';

export default function SocialProof() {
  return (
    <section id="social-proof" className="relative bg-brandBg py-24 md:py-28 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[350px] rounded-full bg-brandPrimary/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[450px] h-[300px] rounded-full bg-brandPrimary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* ========================================================================= */}
        {/* HEADER                                                                    */}
        {/* ========================================================================= */}
        <div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brandPrimary animate-pulse" />
            <span className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-widest block">
              Verified Performance
            </span>
          </div>
          <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-normal text-glow-gold">
            आमची खरी डिजिटल कामगिरी
          </h2>
          <p className="font-outfit text-sm md:text-base text-brandPrimary uppercase tracking-widest font-bold mt-2">
            Real Results. Real Reach. Real Business Growth.
          </p>
          <p className="font-devanagari text-sm md:text-base text-brandMuted mt-4 leading-relaxed max-w-xl">
            आम्ही दाखवतो तेच सांगतो. प्रत्येक आकडा हा आमच्या वास्तविक कामगिरीवर आधारित आहे.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BENTO GRID OF METRICS & SPOTLIGHT                                        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20 items-stretch">
          
          {/* Card 1: Hero Card (Reach Generated) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-brandPrimary/30 bg-gradient-to-br from-brandSurface to-neutral-900 md:col-span-2 relative overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[0_0_40px_-10px_rgba(255,212,0,0.15)] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-brandPrimary/5 blur-[80px] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">🚀</span>
              <span className="font-outfit text-2xl font-mono text-brandPrimary tracking-wider uppercase font-bold bg-brandPrimary/10 border border-brandPrimary/20 px-3 py-1 rounded">
                Verified
              </span>
            </div>

            <div>
              <span className="font-outfit text-4xl md:text-5xl font-black text-brandPrimary text-glow-gold tracking-tight block mb-2">
                5 Lakh+
              </span>
              <h3 className="font-outfit text-base font-bold text-brandText mb-2">Reach Generated</h3>
              <p className="font-outfit text-xs text-brandMuted leading-relaxed">
                Our content and campaigns have generated more than 5 lakh reach across Instagram and digital platforms.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Business Reels */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl">🎬</span>
              <span className="font-outfit text-3xl font-black text-brandPrimary text-glow-gold">100+</span>
            </div>
            <div>
              <h3 className="font-outfit text-base font-bold text-brandText mb-1">Business Reels</h3>
              <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                Professional reels created for local businesses, branding campaigns and promotional content.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Instagram Posts */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl">📸</span>
              <span className="font-outfit text-3xl font-black text-brandPrimary text-glow-gold">191+</span>
            </div>
            <div>
              <h3 className="font-outfit text-base font-bold text-brandText mb-1">Instagram Posts</h3>
              <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                Consistent content creation helping build visibility and awareness.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Instagram Community */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl">👥</span>
              <span className="font-outfit text-3xl font-black text-brandPrimary text-glow-gold">874+</span>
            </div>
            <div>
              <h3 className="font-outfit text-base font-bold text-brandText mb-1">Instagram Community</h3>
              <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                Growing community of entrepreneurs, business owners and local audiences.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Google Ads Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl">📈</span>
              <span className="font-outfit text-base font-black text-brandPrimary tracking-wider uppercase">Google Ads</span>
            </div>
            <div>
              <h3 className="font-outfit text-base font-bold text-brandText mb-1">Campaign Strategy</h3>
              <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                Campaign strategy, optimization and performance marketing experience.
              </p>
            </div>
          </motion.div>

          {/* Card 6: Meta Ads Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex flex-col justify-between min-h-[220px] group hover:-translate-y-1 transition-all duration-350"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl">🎯</span>
              <span className="font-outfit text-base font-black text-brandPrimary tracking-wider uppercase">Meta Ads</span>
            </div>
            <div>
              <h3 className="font-outfit text-base font-bold text-brandText mb-1">Targeted Advertising</h3>
              <p className="font-outfit text-[11px] text-brandMuted leading-relaxed">
                Facebook and Instagram advertising focused on business growth and lead generation.
              </p>
            </div>
          </motion.div>

          {/* INSTAGRAM SPOTLIGHT CARD (Spans 2 columns) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 rounded-[28px] bg-brandSurface border border-brandPrimary/30 bg-gradient-to-tr from-brandSurface via-[#111111] to-neutral-900 md:col-span-2 relative overflow-hidden flex flex-col sm:flex-row justify-between items-center gap-8 shadow-[0_0_30px_rgba(255,212,0,0.05)] group hover:-translate-y-1 transition-all duration-350 text-left"
          >
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brandPrimary/5 blur-[70px] pointer-events-none" />
            
            {/* Profile Brief Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#FFD400] to-neutral-700 p-0.5 shadow shrink-0">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-black">
                  <span className="font-outfit text-sm font-extrabold text-brandPrimary">KU</span>
                </div>
              </div>
              <div>
                <h4 className="font-outfit text-base font-bold text-brandText">@karadudyog</h4>
                <div className="flex gap-4 text-[10px] font-mono text-brandMuted mt-1">
                  <span>191+ Posts</span>
                  <span>874+ Followers</span>
                  <span>5L+ Reach</span>
                  <span>100+ Reels</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://instagram.com/karadudyog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-outfit text-xs font-bold hover:scale-[1.03] transition-transform duration-300 shadow-md cursor-pointer"
            >
              <Instagram className="w-4 h-4 shrink-0" />
              <span>Follow on Instagram</span>
            </a>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* MARATHI MOTIVATIONAL QUOTE                                               */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto text-center mb-20 border-t border-white/5 pt-16">
          <blockquote className="font-devanagari text-2xl md:text-3xl font-black text-brandPrimary text-glow-gold leading-relaxed mb-4">
            "जो दिसतो तोच विकतो."
          </blockquote>
          <p className="font-devanagari text-sm text-brandMuted leading-relaxed max-w-sm mx-auto">
            आजच्या डिजिटल जगात दृश्यमानता म्हणजेच संधी.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* FINAL CTA                                                                */}
        {/* ========================================================================= */}
        <div className="max-w-4xl mx-auto rounded-[32px] bg-brandSurface border border-[#FFD400]/20 p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brandPrimary/5 blur-[60px] pointer-events-none" />
          
          <h3 className="font-devanagari text-2xl md:text-3xl font-black text-brandText leading-normal mb-8 text-glow-gold max-w-2xl mx-auto">
            तुमच्या व्यवसायालाही अशीच डिजिटल ओळख हवी आहे का?
          </h3>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            {/* Follow Instagram */}
            <a
              href="https://instagram.com/karadudyog"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-[18px] bg-brandBg border border-white/10 hover:border-brandPrimary/40 text-brandText font-outfit font-semibold transition-all duration-300 shadow-gold-glow hover:shadow-gold-glow-hover cursor-pointer"
            >
              <Instagram className="w-4 h-4 text-brandPrimary" />
              <span>Follow @karadudyog</span>
            </a>

            {/* Chat WhatsApp */}
            <a
              href="https://wa.me/919577773167"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-[18px] bg-[#25D366] text-white font-outfit font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#25D366] cursor-pointer shadow-lg"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-white" />
              <span>Chat On WhatsApp</span>
            </a>

            {/* Get Free Consultation */}
            <a
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-[18px] bg-brandPrimary text-black font-outfit font-bold hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-brandPrimary cursor-pointer shadow-lg shadow-brandPrimary/10"
            >
              <Sparkles className="w-4 h-4 shrink-0 text-black" />
              <span>Book Free Consultation</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

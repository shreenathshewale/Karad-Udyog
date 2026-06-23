import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Sparkles } from 'lucide-react';

export default function FounderMessage() {
  return (
    <section className="relative bg-brandBg py-20 md:py-24 border-t border-white/5 overflow-hidden flex items-center justify-center">
      {/* Background soft spotlight radial gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full bg-brandPrimary/3 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Large Decorative Quote Background */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[180px] text-brandPrimary pointer-events-none select-none"
        >
          “
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
            <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-widest block">
              Founder Statement
            </span>
          </div>

          <h2 className="font-devanagari text-2xl md:text-3xl font-extrabold text-brandText mb-8 tracking-wide">
            उद्योजकांसाठी एक संदेश
          </h2>

          {/* Quote Text */}
          <blockquote className="font-devanagari text-xl md:text-2xl lg:text-3xl font-black text-brandText leading-normal md:leading-relaxed max-w-3xl mb-8 text-glow-gold">
            "महाराष्ट्रातील प्रत्येक छोट्या-मोठ्या व्यवसायाला डिजिटल जगात स्वतःची ओळख निर्माण करून देणे हेच आमचे ध्येय आहे."
          </blockquote>

          {/* Author */}
          <cite className="not-italic flex flex-col items-center">
            <span className="font-outfit text-sm font-bold text-brandPrimary tracking-wider uppercase">
              Uday Belvankar
            </span>
            <span className="font-outfit text-[10px] text-brandMuted uppercase tracking-widest mt-1">
              Founder & Chief Brand Architect, Karad Udyog
            </span>
          </cite>
        </motion.div>
      </div>
    </section>
  );
}

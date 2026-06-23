import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, Instagram, Sparkles, ArrowRight } from 'lucide-react';

const ctaButtons = [
  {
    id: 'whatsapp',
    emoji: '📱',
    label: 'WhatsApp Now',
    sub: 'Instant Reply',
    href: 'https://wa.me/919577773167?text=Hello%20Karad%20Udyog,%20I%20want%20to%20grow%20my%20business.',
    icon: MessageSquare,
    bg: '#25D366',
    border: '#25D366',
    textColor: 'white',
    glow: 'rgba(37,211,102,0.25)',
  },
  {
    id: 'call',
    emoji: '📞',
    label: 'Call Now',
    sub: '+91 95777 73167',
    href: 'tel:+919577773167',
    icon: Phone,
    bg: '#FFD400',
    border: '#FFD400',
    textColor: '#050505',
    glow: 'rgba(255,212,0,0.25)',
  },
  {
    id: 'instagram',
    emoji: '📸',
    label: 'Follow Instagram',
    sub: '@karadudyog',
    href: 'https://www.instagram.com/karadudyog/',
    icon: Instagram,
    bg: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)',
    border: 'transparent',
    textColor: 'white',
    glow: 'rgba(220,39,67,0.2)',
    isGradient: true,
  },
];

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative bg-brandBg py-12 md:py-16 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-brandPrimary/6 blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden border border-brandPrimary/20 text-center"
          style={{ background: 'linear-gradient(135deg, #111111 0%, #0d0d0d 60%, #111111 100%)' }}
        >
          {/* Corner glows */}
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-brandPrimary/10 blur-[70px] pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-brandPrimary/6 blur-[70px] pointer-events-none" />

          {/* Top accent line */}
          <div className="h-[2px] w-full" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,212,0,0.6), transparent)'
          }} />

          <div className="relative z-10 px-8 md:px-16 py-12 md:py-16 flex flex-col items-center gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brandPrimary/10 border border-brandPrimary/25"
            >
              <Sparkles className="w-3.5 h-3.5 text-brandPrimary" />
              <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-[0.2em]">
                विनामूल्य सल्लामसलत / Free Consultation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="space-y-3 max-w-2xl"
            >
              <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-[1.25] text-glow-gold">
                तुमच्या व्यवसायाच्या वाढीसाठी{' '}
                <span className="text-brandPrimary">तयार आहात?</span>
              </h2>
              <p className="font-devanagari text-sm md:text-base text-brandMuted leading-relaxed">
                आजच कराड उद्योगसोबत संपर्क साधा आणि तुमच्या व्यवसायासाठी योग्य डिजिटल रणनीती जाणून घ्या.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.22 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
            >
              {ctaButtons.map((btn) => {
                const Icon = btn.icon;
                return (
                  <a
                    key={btn.id}
                    href={btn.href}
                    target={btn.id !== 'call' ? '_blank' : undefined}
                    rel={btn.id !== 'call' ? 'noopener noreferrer' : undefined}
                    className="group relative w-full sm:w-auto flex flex-col items-center justify-center gap-1 px-8 py-4 rounded-2xl font-outfit font-bold transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] overflow-hidden min-w-[180px]"
                    style={{
                      background: btn.isGradient ? btn.bg : btn.bg,
                      border: `1px solid ${btn.border}`,
                      color: btn.textColor,
                      boxShadow: `0 0 0 0 ${btn.glow}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = `0 8px 30px -4px ${btn.glow}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = `0 0 0 0 ${btn.glow}`;
                    }}
                  >
                    {/* Shine sweep on hover */}
                    <span className="absolute inset-0 bg-white/0 group-hover:bg-white/8 transition-all duration-300 rounded-2xl pointer-events-none" />

                    <span className="flex items-center gap-2 text-sm relative z-10">
                      <Icon className="w-4 h-4" />
                      {btn.emoji} {btn.label}
                    </span>
                    <span
                      className="text-[10px] font-semibold relative z-10 opacity-75"
                      style={{ color: btn.textColor }}
                    >
                      {btn.sub}
                    </span>
                  </a>
                );
              })}
            </motion.div>

            {/* Trust footer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-5 pt-4 border-t border-white/5 w-full"
            >
              {[
                '✓ Free Consultation',
                '✓ No Obligation',
                '✓ Response in 30 Min',
                '✓ Custom Strategy',
              ].map((t) => (
                <span key={t} className="font-outfit text-[11px] text-brandMuted font-semibold">
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <div className="h-[1px] w-full" style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,212,0,0.3), transparent)'
          }} />
        </motion.div>
      </div>
    </section>
  );
}

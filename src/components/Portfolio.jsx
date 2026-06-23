import React from 'react';
import { motion } from 'framer-motion';
import {
  Instagram,
  MessageSquare,
  Phone,
  ExternalLink,
  MapPin,
  Check,
} from 'lucide-react';

/* ── Animation helpers ─────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  },
});

/* ── Data ───────────────────────────────────────────── */
const stats = [
  { emoji: '🎬', value: '100+', label: 'Business Reels Created' },
  { emoji: '📈', value: '5 Lakh+', label: 'Instagram Reach' },
  { emoji: '🎯', value: 'Google & Meta', label: 'Ads Campaign Management' },
  { emoji: '🌐', value: 'Premium', label: 'Websites — Growth Focused' },
];

const features = [
  '✓ Creative Reels',
  '✓ Premium Posters',
  '✓ Google Ads',
  '✓ Meta Ads',
  '✓ Website Development',
  '✓ Business Branding',
  '✓ Lead Generation',
  '✓ Local Business Growth',
  '✓ AI Videos',
  '✓ Festival Posts',
  '✓ Logo Design',
  '✓ Social Media Management',
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative bg-brandBg py-12 md:py-16 lg:py-20 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full bg-brandPrimary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] rounded-full bg-brandPrimary/4 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* HEADER                                                 */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-pulse" />
            <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-[0.2em]">
              Real Work • Real Results
            </span>
          </div>

          <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-[1.2] mb-3">
            आमचे काम{' '}
            <span className="text-brandPrimary text-glow-gold">स्वतः बोलते.</span>
          </h2>

          <p className="font-devanagari text-sm md:text-base text-brandMuted leading-relaxed">
            पोस्टर्स, रील्स, जाहिराती, वेबसाईट्स आणि डिजिटल ब्रँडिंगच्या माध्यमातून
            आम्ही स्थानिक व्यवसायांना ऑनलाइन ओळख निर्माण करून देतो.
          </p>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* SECTION 1 — Instagram Portfolio Hero                   */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[24px] border border-white/8 overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#111111 0%,#0d0d0d 100%)' }}
        >
          {/* IG gradient top bar */}
          <div
            className="h-1 w-full"
            style={{ background: 'linear-gradient(90deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}
          />

          <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

            {/* Avatar + handle */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Gradient ring avatar */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2.5px] shrink-0"
                style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}
              >
                <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                  <span className="font-outfit text-lg md:text-xl font-extrabold text-brandPrimary">KU</span>
                </div>
              </div>

              <div>
                <p className="font-outfit text-base font-extrabold text-white flex items-center gap-1.5">
                  @karadudyog
                  <span className="inline-flex w-4 h-4 rounded-full bg-blue-500 items-center justify-center text-white text-[8px] font-black">✓</span>
                </p>
                <p className="font-outfit text-xs text-brandMuted mt-0.5">Karad Udyog</p>
                <p className="font-outfit text-[10px] text-brandPrimary font-semibold">Digital Marketing Agency</p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 md:gap-10 border-t border-b md:border-t-0 md:border-b-0 md:border-l md:border-r border-white/8 py-4 md:py-0 md:px-8">
              {[
                { val: '191+', label: 'Posts' },
                { val: '874+', label: 'Followers' },
                { val: '5L+', label: 'Reach' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <span className="font-outfit text-xl font-black text-brandPrimary text-glow-gold block">{s.val}</span>
                  <span className="font-outfit text-[10px] text-brandMuted uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="flex-1 space-y-1.5">
              <p className="font-devanagari text-xs text-brandText font-semibold">
                🚀 कराडमधील व्यवसायांसाठी डिजिटल प्रमोशन
              </p>
              <p className="font-outfit text-xs text-brandMuted">🎬 Reels | Posters | Branding</p>
              <div className="flex items-center gap-1 text-brandMuted">
                <MapPin className="w-3 h-3 text-brandPrimary" />
                <span className="font-outfit text-xs">Karad, Maharashtra</span>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-2.5 shrink-0 w-full md:w-auto">
              <a
                href="https://www.instagram.com/karadudyog/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-outfit text-xs font-bold hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Instagram Portfolio
              </a>
              <a
                href="https://www.instagram.com/karadudyog/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/6 border border-white/10 hover:border-brandPrimary/40 text-white font-outfit text-xs font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 whitespace-nowrap"
              >
                <Instagram className="w-3.5 h-3.5 text-brandPrimary" />
                Follow @karadudyog
              </a>
            </div>
          </div>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* SECTION 2 — 4 Compact Achievement Stats                */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s, idx) => (
            <motion.div
              key={s.label}
              variants={fadeUp(idx * 0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-[18px] bg-brandSurface border border-white/6 hover:border-brandPrimary/25 p-5 flex flex-col gap-2 transition-all duration-400 hover:shadow-gold-glow relative overflow-hidden"
            >
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-brandPrimary transition-all duration-500 ease-out" />

              <span className="text-2xl">{s.emoji}</span>
              <span className="font-outfit text-xl md:text-2xl font-black text-brandPrimary text-glow-gold leading-tight">
                {s.value}
              </span>
              <span className="font-outfit text-[11px] text-brandMuted leading-snug">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* SECTION 3 — Scrolling Services Marquee                 */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-[20px] bg-brandSurface border border-white/6 py-5 overflow-hidden relative"
        >
          {/* Left/right fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-brandSurface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-brandSurface to-transparent z-10 pointer-events-none" />

          <div className="flex gap-0 overflow-hidden">
            {/* Duplicate the list twice for seamless infinite loop */}
            {[0, 1].map((copy) => (
              <div
                key={copy}
                className="flex items-center gap-6 shrink-0 animate-marquee pr-6"
                aria-hidden={copy === 1}
              >
                {features.map((f, i) => (
                  <div
                    key={`${copy}-${i}`}
                    className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-full bg-brandBg border border-white/6 hover:border-brandPrimary/30 hover:bg-brandPrimary/5 transition-all duration-300 cursor-default group"
                  >
                    <Check className="w-3 h-3 text-brandPrimary shrink-0" />
                    <span className="font-outfit text-xs font-semibold text-brandMuted group-hover:text-brandText transition-colors duration-300 whitespace-nowrap">
                      {f.replace('✓ ', '')}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* SECTION 4 — Marathi Quote Banner                       */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[24px] overflow-hidden border border-brandPrimary/12 py-12 md:py-16 px-8 md:px-16 text-center"
          style={{ background: 'linear-gradient(135deg,#0d0d0d 0%,#111 50%,#0a0a0a 100%)' }}
        >
          {/* Spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-brandPrimary/10 blur-[70px] pointer-events-none" />

          {/* Decorative quotes */}
          <span className="absolute top-2 left-4 font-serif text-[100px] text-brandPrimary/6 leading-none pointer-events-none select-none">"</span>
          <span className="absolute bottom-0 right-4 font-serif text-[100px] text-brandPrimary/6 leading-none pointer-events-none select-none rotate-180">"</span>

          <blockquote className="relative z-10 font-devanagari text-xl md:text-3xl font-black text-brandText leading-[1.7] text-glow-gold">
            <span className="text-brandPrimary">"मोठी स्वप्ने पाहणारे व्यवसाय</span><br />
            योग्य डिजिटल रणनीतीनेच<br />
            <span className="text-brandPrimary">मोठे ब्रँड बनतात."</span>
          </blockquote>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px w-10 bg-brandPrimary/30" />
            <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-[0.2em]">
              Karad Udyog — Digital Philosophy
            </span>
            <div className="h-px w-10 bg-brandPrimary/30" />
          </div>
        </motion.div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/* SECTION 5 — Final Instagram CTA                        */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <motion.div
          variants={fadeUp(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-[24px] border border-brandPrimary/20 overflow-hidden"
          style={{ background: 'linear-gradient(135deg,#111111 0%,#0d0d0d 100%)' }}
        >
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-brandPrimary/10 blur-[60px] pointer-events-none" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">

            {/* Text */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brandPrimary/10 border border-brandPrimary/20 mb-3">
                <Instagram className="w-3 h-3 text-brandPrimary" />
                <span className="font-outfit text-[10px] font-bold text-brandPrimary uppercase tracking-widest">
                  Instagram
                </span>
              </div>
              <p className="font-devanagari text-base md:text-lg font-bold text-brandText leading-relaxed max-w-xl">
                दररोज नवीन रील्स, पोस्टर्स आणि व्यवसाय वाढीच्या कल्पना पाहण्यासाठी आमचे इंस्टाग्राम पेज फॉलो करा.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
              <a
                href="https://www.instagram.com/karadudyog/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-outfit text-xs font-bold hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg,#f09433,#dc2743,#bc1888)' }}
              >
                <Instagram className="w-4 h-4" />
                📸 Follow Instagram
              </a>

              <a
                href="https://wa.me/919577773167?text=Hello%20Karad%20Udyog,%20I%20want%20to%20grow%20my%20business."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-outfit text-xs font-bold hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 border border-[#25D366] whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                💬 WhatsApp
              </a>

              <a
                href="tel:+919577773167"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-brandPrimary text-black font-outfit text-xs font-bold hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200 border border-brandPrimary whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                📞 Call Now
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

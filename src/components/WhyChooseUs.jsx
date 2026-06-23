import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, HeartHandshake, Eye, Users, SearchCheck, MessageSquare, BarChart3 } from 'lucide-react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: 'Premium Brand Focus',
      desc: 'We refuse cheap template graphics. We construct bespoke, high-end visual styles that communicate enterprise authority.',
      icon: Award,
    },
    {
      title: 'Creative Excellence',
      desc: 'From cinematography to typography, we maintain strict editorial quality across every single flyer, video, or site.',
      icon: Eye,
    },
    {
      title: 'Fast Delivery',
      desc: 'We build workflows that respect your business timelines, providing rapid assets without compromising output.',
      icon: Zap,
    },
    {
      title: 'Expert Creative Team',
      desc: 'Our directors and developers specialize in premium design trends (Stripe/Apple style) and advanced SEO systems.',
      icon: Users,
    },
    {
      title: 'Marathi Market Expertise',
      desc: 'We understand the nuances of the local culture and language, writing copy that resonates with regional consumers.',
      icon: MessageSquare,
    },
    {
      title: 'End-to-End Support',
      desc: 'We don\'t just deploy and disappear. We continuously optimize campaigns, update code, and monitor conversion metrics.',
      icon: HeartHandshake,
    },
    {
      title: 'Lead Generation Focus',
      desc: 'Beautiful designs are useless without inquiries. We build systems engineered to capture direct calls and sales leads.',
      icon: SearchCheck,
    },
    {
      title: 'Data-Driven Optimization',
      desc: 'We track conversion rates, click CTRs, and cost per acquisition to refine campaigns and maximize your business ROI.',
      icon: BarChart3,
    },
  ];

  return (
    <section id="why-choose-us" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-0 right-[20%] w-[400px] h-[400px] rounded-full bg-brandPrimary/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary"></span>
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            Our DNA
          </span>
        </div>

        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          प्रीमियम ब्रँड्स आम्हाला का निवडतात?
        </h2>
        <p className="font-outfit text-base text-brandMuted mt-4 max-w-xl mx-auto leading-relaxed">
          We don't offer generic templates or simple social posts. We build high-value systems designed for business scaling.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="p-8 rounded-[24px] bg-brandSurface border border-white/5 hover:border-brandPrimary/10 shadow-gold-glow hover:shadow-gold-glow-hover transition-all duration-500 text-left flex flex-col justify-between min-h-[220px]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brandMuted mb-6">
                {IconComponent && <IconComponent className="w-5 h-5 text-brandPrimary" />}
              </div>

              <div>
                <h3 className="font-outfit text-base font-bold text-brandText mb-2">
                  {card.title}
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

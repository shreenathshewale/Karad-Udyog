import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  Share2,
  Layers,
  Search,
  Globe,
  Award,
  Film,
  Palette,
  MapPin,
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      num: '01',
      title: 'Branding',
      outcome: 'Become Recognizable In Your Market',
      desc: 'Complete brand strategy, custom wordmarks, visual identity kits, typography guides, and premium asset libraries that position your company as a market leader.',
      icon: Award,
      span: 'lg:col-span-8',
      link: '#portfolio',
    },
    {
      num: '02',
      title: 'Website Development',
      outcome: 'Build Trust & Generate Leads',
      desc: 'Bespoke corporate websites and landing pages styled with modern typography, extreme performance, and responsive conversions.',
      icon: Globe,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '03',
      title: 'AI Video Creation',
      outcome: 'Increase Engagement & Recall',
      desc: 'Cinematic AI promotional videos, custom avatars, festival announcements, and high-fidelity video rendering built to capture viewer interest within seconds.',
      icon: Video,
      span: 'lg:col-span-4',
      link: '#ai-showcase',
    },
    {
      num: '04',
      title: 'Meta Ads',
      outcome: 'Reach Customers Ready To Buy',
      desc: 'Strategic lead acquisition and retargeting ads on Instagram and Facebook designed to generate high volume buyer interest with optimal client acquisition cost.',
      icon: Layers,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '05',
      title: 'Social Media Marketing',
      outcome: 'Build Constant Brand Authority',
      desc: 'End-to-end management, grid curation, professional typography guidelines, and content systems that convert followers into premium clients.',
      icon: Share2,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '06',
      title: 'Reels Creation',
      outcome: 'Gain Massive Organic Reach',
      desc: 'Writing, editing, and directing highly engaging short reels, incorporating typography animation and high-retention editing styles.',
      icon: Film,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '07',
      title: 'Lead Generation',
      outcome: 'Automated Sales Pipeline Scaling',
      desc: 'Connecting CRM software, interactive greeting pages, calendar booking software, and custom sales scripts to streamline prospect conversations.',
      icon: TrendingUp,
      span: 'lg:col-span-8',
      link: '#packages',
    },
    {
      num: '08',
      title: 'Google Ads',
      outcome: 'Capture High-Intent Buyers',
      desc: 'Precision PPC campaigns targeting Google Search keywords, intercepting high-intent buyers exactly when they are looking to hire a business.',
      icon: Search,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '09',
      title: 'Poster Design',
      outcome: 'Capture Immediate Visual Attention',
      desc: 'Premium advertising posters, banners, and digital creatives that maintain a strict, luxury visual aesthetic instead of basic template styles.',
      icon: Palette,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
    {
      num: '10',
      title: 'Google Business Optimization',
      outcome: 'Dominate Local Search Results',
      desc: 'Optimizing and structuring your Google Business Profile to rank in local 3-packs, capturing regional phone calls and walk-ins instantly.',
      icon: MapPin,
      span: 'lg:col-span-4',
      link: '#portfolio',
    },
  ];

  return (
    <section id="services" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Ambience Spotlight */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-brandPrimary/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-start text-left mb-16 md:mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary"></span>
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            Core Outcomes
          </span>
        </div>

        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight max-w-2xl">
          व्यवसायाला दिशा देणाऱ्या सेवा
        </h2>
        <p className="font-outfit text-base text-brandMuted mt-4 max-w-xl leading-relaxed">
          We do not sell graphic design hours. We build custom marketing systems and brand experiences that turn your business into a recognizable leader.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[280px] md:auto-rows-[300px]">
        {services.map((svc, idx) => {
          const IconComponent = svc.icon;
          return (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className={`group relative rounded-[24px] bg-brandSurface border border-white/5 p-8 flex flex-col justify-between overflow-hidden shadow-gold-glow hover:border-brandPrimary/20 shadow-gold-glow-hover transition-all duration-500 ${svc.span}`}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brandPrimary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-brandPrimary/5 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Top: Icon + Number */}
              <div className="flex justify-between items-center z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-brandPrimary/30 group-hover:bg-brandPrimary/5 flex items-center justify-center text-brandMuted group-hover:text-brandPrimary transition-all duration-500">
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </div>
                <span className="font-mono text-sm font-bold text-brandMuted/30 group-hover:text-brandPrimary/30 transition-colors duration-500">
                  {svc.num}
                </span>
              </div>

              {/* Bottom: Copy */}
              <div className="text-left z-10">
                {/* Service Name */}
                <h3 className="font-outfit text-lg font-bold text-brandText mb-1">
                  {svc.title}
                </h3>
                {/* Outcome Highlight */}
                <span className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-wider block mb-2">
                  {svc.outcome}
                </span>
                <p className="font-outfit text-xs text-brandMuted leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
                  {svc.desc}
                </p>

                <a
                  href={svc.link}
                  className="inline-flex items-center gap-1 font-outfit text-xs font-bold text-brandMuted group-hover:text-brandPrimary mt-4 transition-colors duration-300 animate-pulse"
                >
                  <span>Explore Work</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

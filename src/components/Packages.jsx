import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, MessageSquare } from 'lucide-react';

/* ─── Helper ──────────────────────────────────────────────────── */
const generateWhatsAppLink = (packageName) => {
  const message =
`--------------------------------
Hello Karad Udyog,

I am interested in the ${packageName} Package.

👤 Name:

🏢 Business Name:

📱 Mobile Number:

💰 Expected Monthly Budget:

Please send me package details and pricing.
--------------------------------`;
  return `https://wa.me/919577773167?text=${encodeURIComponent(message)}`;
};

/* ─── Data ────────────────────────────────────────────────────── */
const plans = [
  {
    name: 'Basic',
    tagline: 'Brand Foundation',
    stage: 'Ideal for new local startups looking to establish basic legitimacy.',
    outcome: 'Establish fundamental local trust and branding assets.',
    deliverables: [
      'Premium Logo & Typography Guidelines',
      'Google Business Profile Setup & Mapping',
      'Editorial Visual Poster (3 templates)',
      'Standard 1-Page Responsive Landing Page',
      'Basic Social Media Set-up Support',
    ],
    support: 'Standard Email & Chat Support',
    isHighlighted: false,
  },
  {
    name: 'Business Boost',
    tagline: 'Local Scale Engine',
    stage: 'Best for physical retail stores seeking local search dominance.',
    outcome: 'Capture local purchase intent and rank on search results.',
    deliverables: [
      'Basic Package deliverables included',
      'Google Maps 3-Pack Optimization Audit',
      'High-Impact Instagram Reels (4 videos)',
      'Local Meta Lead Generation Ads Setup',
      'Creative Advertising Copy & Graphics',
    ],
    support: 'Direct WhatsApp Priority Support',
    isHighlighted: false,
  },
  {
    name: 'Growth',
    tagline: 'Authority Accelerator',
    stage: 'Best for established firms wanting to build real brand authority.',
    outcome: 'Increase organic page reach and capture inbound leads.',
    deliverables: [
      'Business Boost deliverables included',
      'Full Brand Identity Kit & Colors',
      'Premium Multi-page Business Website',
      'Viral Reels Production (8 videos)',
      'Advanced Meta Lead Generation Funnels',
    ],
    support: 'Dedicated Weekly Strategist Calls',
    isHighlighted: false,
  },
  {
    name: 'Pro',
    tagline: 'Market Dominator',
    stage: 'Designed for companies scaling marketing spend for high growth.',
    outcome: 'Scale lead acquisition and build market authority.',
    deliverables: [
      'Growth Package deliverables included',
      'Google Ads & Meta Ads Setup',
      'High-fidelity AI Promo Video (1 film)',
      'Lead Funnel CRM System Integration',
      'Monthly ROI and Analytics Reporting',
    ],
    support: 'Direct 1-on-1 Founder Support Access',
    isHighlighted: false,
  },
  {
    name: 'Premium',
    tagline: 'Enterprise Flagship',
    stage: 'The complete digital growth engine for companies demanding market leadership.',
    outcome: 'Total brand dominance and automated customer pipeline.',
    deliverables: [
      'Pro Package deliverables included',
      'Full Custom Website with client database',
      'Premium AI Video Production (3 films)',
      'Complete Monthly Social Grid management',
      'Strategic Lead Capture Funnel Setup',
      'Quarterly Growth Audits & Consulting',
    ],
    support: '24/7 Priority Emergency Channel',
    isHighlighted: true,
  },
];

/* ─── Package Card ────────────────────────────────────────────── */
function PackageCard({ plan, delay, spanClass = '' }) {
  const isPremium = plan.isHighlighted;

  const handleRequest = () => {
    window.open(generateWhatsAppLink(plan.name), '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`p-8 rounded-[24px] flex flex-col justify-between text-left transition-all duration-500 relative overflow-hidden ${spanClass} ${
        isPremium
          ? 'bg-brandBg border-2 border-brandPrimary/80 shadow-[0_0_50px_-5px_rgba(255,212,0,0.15)]'
          : 'bg-brandSurface border border-white/5 shadow-gold-glow hover:border-white/10'
      }`}
    >
      {/* Premium badge & glow */}
      {isPremium && (
        <>
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brandPrimary/5 blur-[50px] pointer-events-none" />
          <div className="absolute top-4 right-6 inline-flex items-center gap-1.5 bg-brandPrimary/10 border border-brandPrimary/30 text-brandPrimary font-mono text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-full">
            <Sparkles className="w-3 h-3 animate-pulse" />
            <span>RECOMMENDED FLAGSHIP</span>
          </div>
        </>
      )}

      {/* Card body */}
      <div>
        <span className="font-outfit text-xs font-bold text-brandPrimary uppercase tracking-widest block mb-1">
          {plan.tagline}
        </span>
        <h3 className="font-outfit text-xl font-extrabold text-brandText mb-4">
          {plan.name} Package
        </h3>
        <p className="font-outfit text-xs text-brandMuted leading-relaxed mb-6 border-b border-white/5 pb-4 min-h-[50px]">
          {plan.stage}
        </p>

        <div className="mb-6">
          <span className="text-[10px] font-mono text-brandPrimary uppercase tracking-widest font-bold block mb-1">
            Expected Growth Outcome:
          </span>
          <span className="font-outfit text-sm font-semibold text-brandText">{plan.outcome}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono text-brandMuted/50 uppercase tracking-widest font-bold block mb-1">
            Included Deliverables:
          </span>
          {plan.deliverables.map((item, i) => (
            <div key={i} className="flex gap-2.5 items-start">
              <Check className="w-4 h-4 text-brandPrimary shrink-0 mt-0.5" />
              <span className="font-outfit text-xs text-brandMuted leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/5 pt-6 mt-8">
        <div className="flex justify-between items-center text-[10px] font-mono text-brandMuted mb-4">
          <span>SUPPORT TIER:</span>
          <span className="text-brandText font-bold uppercase text-right max-w-[55%]">{plan.support}</span>
        </div>

        <button
          onClick={handleRequest}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-outfit text-xs font-bold transition-all duration-300 border cursor-pointer ${
            isPremium
              ? 'bg-brandPrimary hover:bg-brandPrimary/90 text-black border-brandPrimary shadow-lg shadow-brandPrimary/10 hover:scale-[1.02]'
              : 'bg-white/5 hover:bg-[#25D366]/10 hover:border-[#25D366]/40 hover:text-[#25D366] text-brandText border-white/10'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5" />
          Request Proposal on WhatsApp
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Main Component ──────────────────────────────────────────── */
export default function Packages() {
  return (
    <section
      id="packages"
      className="relative bg-brandBg py-12 md:py-16 lg:py-20 px-6 md:px-12 border-t border-white/5 overflow-hidden"
    >
      {/* Background spotlight */}
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full bg-brandPrimary/3 blur-[120px] pointer-events-none" />

      {/* Section header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary" />
          <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-brandPrimary">
            Investments
          </span>
        </div>
        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          व्यवसाय वाढीची पॅकेजेस
        </h2>
        <p className="font-outfit text-base text-brandMuted mt-4 max-w-xl mx-auto leading-relaxed">
          We don't offer cheap monthly services. We build custom marketing systems that turn your business into a leader.
        </p>
        {/* WhatsApp note */}
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20">
          <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
          <span className="font-outfit text-xs text-[#25D366] font-semibold">
            Click any package to instantly enquire on WhatsApp
          </span>
        </div>
      </div>

      {/* Row 1: Basic, Business Boost, Growth */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-8">
        {plans.slice(0, 3).map((plan, idx) => (
          <PackageCard key={plan.name} plan={plan} delay={idx * 0.1} />
        ))}
      </div>

      {/* Row 2: Pro + Premium (centred 2-col) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {plans.slice(3).map((plan, idx) => (
          <PackageCard key={plan.name} plan={plan} delay={(idx + 3) * 0.1} />
        ))}
      </div>
    </section>
  );
}

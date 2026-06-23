import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ShieldAlert, Sparkles } from 'lucide-react';

export default function TransformationSection() {
  const beforePoints = [
    { text: 'No Branding', desc: 'Inconsistent colors, mismatched fonts, and generic template styling that goes unnoticed.' },
    { text: 'No Website', desc: 'No central digital flagship to capture customer trust or search traffic.' },
    { text: 'Low Reach', desc: 'Relying entirely on word-of-mouth recommendations, capping audience growth.' },
    { text: 'Few Enquiries', desc: 'Frustrated by slow inquiries and constant price haggling over WhatsApp.' },
  ];

  const afterPoints = [
    { text: 'Premium Branding', desc: 'A custom logo, bespoke color systems, and strict design guidelines commanding authority.' },
    { text: 'Professional Website', desc: 'A high-performance digital hub with fast page speeds built to convert visitors.' },
    { text: 'Strong Online Presence', desc: 'Ranking in search engines and generating regular organic traffic.' },
    { text: 'More Leads', desc: 'Predictable, automated lead pipelines bringing high-value inbound calls.' },
  ];

  return (
    <section id="transformation" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-[30%] right-[20%] w-[500px] h-[300px] bg-brandPrimary/3 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          स्थानिक व्यवसाय ते ओळखला जाणारा ब्रँड
        </h2>
        <p className="font-outfit text-sm md:text-base text-brandMuted mt-3 max-w-xl mx-auto leading-relaxed">
          The ultimate transformation journey. We help you move away from unbranded local competition to command absolute market leadership.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Before: Unbranded */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="p-8 rounded-[24px] bg-brandSurface/40 border border-red-500/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-red-400 uppercase tracking-wider">
                Unbranded Local Shop
              </h3>
            </div>

            <div className="flex flex-col gap-6 text-left">
              {beforePoints.map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-outfit text-sm font-bold text-brandText">{item.text}</h4>
                    <p className="font-outfit text-xs text-brandMuted mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 mt-8 text-left text-xs text-brandMuted font-mono">
            STATUS: HIGH CHURN / PRICE SENSITIVE
          </div>
        </motion.div>

        {/* After: Recognized Brand */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
          className="p-8 rounded-[24px] bg-brandSurface border-2 border-brandPrimary/20 flex flex-col justify-between shadow-[0_0_40px_-10px_rgba(255,212,0,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-brandPrimary/5 blur-[50px] pointer-events-none" />
          
          <div>
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-10 h-10 rounded-lg bg-brandPrimary/10 border border-brandPrimary/35 flex items-center justify-center text-brandPrimary">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-brandPrimary uppercase tracking-wider">
                Recognized Premium Brand
              </h3>
            </div>

            <div className="flex flex-col gap-6 text-left relative z-10">
              {afterPoints.map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brandPrimary/15 flex items-center justify-center text-brandPrimary shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-outfit text-sm font-bold text-brandText">{item.text}</h4>
                    <p className="font-outfit text-xs text-brandMuted mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-6 mt-8 text-left text-xs text-brandPrimary font-mono relative z-10">
            STATUS: PREMIUM TIER / AUTOMATED LEADS
          </div>
        </motion.div>

      </div>
    </section>
  );
}

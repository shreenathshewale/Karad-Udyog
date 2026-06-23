import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, FileImage, TrendingDown, Target, HelpCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Problem() {
  const [activeTab, setActiveTab] = useState('before');

  const problems = [
    {
      title: 'No Real Branding',
      desc: 'Relying on random colors, mismatched fonts, and generic templates that look like everyone else.',
      icon: ShieldAlert,
    },
    {
      title: 'Inconsistent Content',
      desc: 'Posting occasionally without a cohesive narrative, which confuses customers and hurts brand authority.',
      icon: FileImage,
    },
    {
      title: 'No Digital Flagship (Website)',
      desc: 'Lacking a central, high-performance website that captures intent and converts organic visitors.',
      icon: TrendingDown,
    },
    {
      title: 'Weak Local Presence',
      desc: 'Being invisible on search engines, letting competitors win all high-intent regional traffic.',
      icon: Target,
    },
    {
      title: 'No Automated Leads',
      desc: 'Depending on word-of-mouth rather than a predictable, automated customer acquisition engine.',
      icon: HelpCircle,
    },
  ];

  return (
    <section id="problem" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Editorial list */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brandSurface border border-white/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-outfit text-xs font-semibold uppercase tracking-wider text-red-400">
              Reality Check
            </span>
          </div>

          <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight mb-8">
            बहुतेक व्यवसाय ऑनलाइन <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400 font-black">
              का अयशस्वी होतात?
            </span>
          </h2>

          <p className="font-outfit text-sm md:text-base text-brandMuted mb-12 max-w-lg leading-relaxed">
            Many local business owners run great companies but remain completely unknown online. Standard advertising fails because buyers only purchase from recognized brands.
          </p>

          {/* Problem Accordions */}
          <div className="flex flex-col gap-6 w-full">
            {problems.map((prob, idx) => {
              const IconComponent = prob.icon;
              return (
                <motion.div
                  key={prob.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="flex gap-4 p-5 rounded-[24px] bg-brandSurface/40 border border-white/5 hover:border-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="font-outfit text-base font-bold text-brandText mb-1">{prob.title}</h3>
                    <p className="font-outfit text-sm text-brandMuted leading-relaxed text-left">{prob.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Before vs After Frame */}
        <div className="lg:col-span-6 lg:sticky lg:top-32 w-full flex flex-col items-center">
          
          {/* Tab Selector */}
          <div className="flex p-1 rounded-full bg-brandSurface border border-white/5 mb-8 w-fit">
            <button
              onClick={() => setActiveTab('before')}
              className={`px-6 py-2.5 rounded-full font-devanagari text-xs font-bold uppercase tracking-wider transition-all duration-500 cursor-pointer ${
                activeTab === 'before'
                  ? 'bg-red-950/40 text-red-400 border border-red-500/20'
                  : 'text-brandMuted hover:text-brandText'
              }`}
            >
              ब्रँडिंगपूर्वीची स्थिती
            </button>
            <button
              onClick={() => setActiveTab('after')}
              className={`px-6 py-2.5 rounded-full font-devanagari text-xs font-bold uppercase tracking-wider transition-all duration-500 cursor-pointer ${
                activeTab === 'after'
                  ? 'bg-brandPrimary/10 text-brandPrimary border border-brandPrimary/20'
                  : 'text-brandMuted hover:text-brandText'
              }`}
            >
              प्रीमियम मेकओव्हरनंतर
            </button>
          </div>

          {/* Graphic Container */}
          <div className="relative w-full aspect-[4/5] max-w-[420px] rounded-[24px] bg-brandSurface/60 border border-white/5 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
            <div className={`absolute top-0 right-0 w-[200px] h-[200px] rounded-full blur-[80px] transition-all duration-1000 ${
              activeTab === 'before' ? 'bg-red-500/5' : 'bg-brandPrimary/10'
            }`} />

            <AnimatePresence mode="wait">
              {activeTab === 'before' ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest bg-red-500/10 px-2 py-0.5 border border-red-500/20 rounded">
                      Unbranded Status
                    </span>
                    <span className="text-[10px] font-mono text-brandMuted/40">ID: #0828</span>
                  </div>

                  <div className="my-8 flex flex-col gap-4 text-left">
                    <div className="w-20 h-8 bg-white/5 border border-dashed border-white/10 rounded flex items-center justify-center">
                      <span className="text-[10px] text-brandMuted font-mono">No Logo</span>
                    </div>
                    <div className="h-6 w-full bg-white/5 rounded" />
                    <div className="h-16 w-3/4 bg-white/5 rounded" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-10 bg-white/5 rounded" />
                      <div className="h-10 bg-white/5 rounded" />
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 text-left flex gap-3 items-center">
                    <TrendingDown className="w-5 h-5 text-red-400 shrink-0" />
                    <p className="font-outfit text-xs text-brandMuted">
                      No actual brand exists. Customers compare prices on WhatsApp and buy from cheaper competitors.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col justify-between"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono text-brandPrimary uppercase tracking-widest bg-brandPrimary/10 px-2 py-0.5 border border-brandPrimary/20 rounded">
                      Premium Authority
                    </span>
                    <span className="text-[10px] font-mono text-brandPrimary/70">GROWTH_SYSTEM_ENABLED</span>
                  </div>

                  <div className="my-8 flex flex-col gap-4 text-left">
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-black tracking-widest text-brandText font-outfit uppercase">
                        MAHARAJA LABS
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brandPrimary animate-pulse"></span>
                    </div>
                    <div className="h-8 w-full bg-brandPrimary/10 border border-brandPrimary/20 rounded flex items-center px-3">
                      <Sparkles className="w-3.5 h-3.5 text-brandPrimary mr-2" />
                      <span className="font-outfit text-[10px] text-brandPrimary font-bold uppercase tracking-wider">
                        Command Authority, Charge Premium
                      </span>
                    </div>
                    <div className="h-16 w-full bg-brandSurface border border-white/10 rounded-xl flex items-center p-3 gap-3">
                      <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-brandPrimary" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono text-brandMuted">Conversion Rate</span>
                        <span className="text-sm font-bold text-brandText">+240% Growth</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/5 pt-4 text-left flex gap-3 items-center">
                    <Sparkles className="w-5 h-5 text-brandPrimary shrink-0" />
                    <p className="font-outfit text-xs text-brandText">
                      Instantly builds trust. Customers understand the value, ignore competitor pricing, and happily pay premium.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}

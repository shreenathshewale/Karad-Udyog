import React from 'react';
import { motion } from 'framer-motion';

export default function ProcessSection() {
  const steps = [
    {
      step: 'Step 01',
      title: 'Brand Audit',
      desc: 'Analyzing your current visual presence, messaging style, and local competitors to identify key growth gaps.',
    },
    {
      step: 'Step 02',
      title: 'Strategy Planning',
      desc: 'Formulating a custom positioning map to elevate your company, select visual guides, and outline campaign metrics.',
    },
    {
      step: 'Step 03',
      title: 'Content Creation',
      desc: 'Designing premium visual assets, script voiceovers, editorial graphics, and cinematic video promos.',
    },
    {
      step: 'Step 04',
      title: 'Advertising',
      desc: 'Launching targeted local lead generation ads across Meta platforms and high-intent Google Search terms.',
    },
    {
      step: 'Step 05',
      title: 'Lead Generation',
      desc: 'Deploying direct capture forms and WhatsApp integrations to capture warm incoming prospects instantly.',
    },
    {
      step: 'Step 06',
      title: 'Business Growth',
      desc: 'Refining campaigns weekly based on response metrics, giving your company a reliable scaling engine.',
    },
  ];

  return (
    <section id="process" className="relative bg-brandBg py-20 md:py-24 px-6 md:px-12 border-t border-white/5 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[300px] rounded-full bg-brandPrimary/2 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-devanagari text-3xl md:text-5xl font-black text-brandText leading-tight text-glow-gold">
          तुमचा व्यवसाय वाढवण्याचा आमचा रोडमॅप
        </h2>
        <p className="font-outfit text-sm md:text-base text-brandPrimary uppercase tracking-widest font-bold mt-2">
          Our step-by-step branding roadmap
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Horizontal Connector Line for Desktop */}
        <div className="absolute top-[39px] left-8 right-8 h-[1px] bg-white/10 hidden lg:block z-0" />

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className="flex flex-col items-start text-left"
            >
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-[24px] bg-brandSurface border border-white/5 hover:border-brandPrimary/20 flex items-center justify-center font-outfit text-sm font-bold text-brandPrimary text-glow-gold mb-6 shadow-md hover:shadow-brandPrimary/10 transition-all duration-300">
                {step.step.split(' ')[1]}
              </div>

              <div>
                <span className="text-[10px] font-mono text-brandPrimary uppercase tracking-widest block mb-1">
                  {step.step}
                </span>
                <h3 className="font-outfit text-base font-bold text-brandText mb-2">
                  {step.title}
                </h3>
                <p className="font-outfit text-xs text-brandMuted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { MessageSquare, ArrowRight, ShieldCheck, TrendingUp, Users } from 'lucide-react'
import { company } from '@/data/company'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#F8FAFC] via-white to-white pt-36 pb-20 md:pt-44 md:pb-28 lg:pt-48 lg:pb-32 border-b border-[#E2E8F0] overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Clear Agency Positioning */}
          <div className="lg:col-span-7 space-y-8">
            <AnimatedReveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB]">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span className="text-[11px] font-sans font-bold tracking-wider uppercase">
                  Karad’s Premier Digital Agency
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#0F172A]">
                DIGITAL MARKETING THAT WORKS FOR{' '}
                <span className="text-[#2563EB]">LOCAL BUSINESS.</span>
              </h1>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <p className="font-sans text-base sm:text-xl text-[#334155] font-medium leading-relaxed max-w-2xl">
                Karad Udyog helps local businesses build visibility, acquire qualified customers, and dominate search through performance marketing, reels, advertising, custom Next.js websites, and search engine optimization.
              </p>
            </AnimatedReveal>

            {/* 3 Strategic CTAs */}
            <AnimatedReveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact" variant="primary" size="lg">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  Explore Our Services
                </Button>
                <a
                  href={company.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20BA57] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-md shadow-sm transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </AnimatedReveal>

            {/* Trust Micro Indicators */}
            <AnimatedReveal delay={0.4}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#E2E8F0] max-w-xl">
                <div className="space-y-1">
                  <span className="block font-sans text-lg font-black text-[#0F172A]">
                    1.5k+
                  </span>
                  <span className="block text-[11px] font-sans font-bold text-[#64748B] uppercase tracking-wide">
                    Local Instagram Reach
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block font-sans text-lg font-black text-[#0F172A]">
                    16
                  </span>
                  <span className="block text-[11px] font-sans font-bold text-[#64748B] uppercase tracking-wide">
                    Digital Services
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="block font-sans text-lg font-black text-[#0F172A]">
                    Karad & Satara
                  </span>
                  <span className="block text-[11px] font-sans font-bold text-[#64748B] uppercase tracking-wide">
                    Market Expertise
                  </span>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: High-Impact Visual Agency Feature Card */}
          <div className="lg:col-span-5">
            <AnimatedReveal delay={0.2}>
              <div className="relative rounded-2xl bg-[#0F172A] p-6 sm:p-8 text-white shadow-2xl border border-[#1E293B] overflow-hidden">
                {/* Visual Graphic Representation */}
                <div className="relative aspect-[4/3] w-full rounded-lg bg-[#1E293B] overflow-hidden mb-6 border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                    alt="Digital Marketing Campaign Management in Karad"
                    className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#0F172A] px-3.5 py-2 rounded-md shadow-lg flex items-center gap-2 border border-slate-200">
                    <TrendingUp className="w-4 h-4 text-[#2563EB]" />
                    <span className="text-xs font-bold font-sans">Top Search & Ad Performance</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-[#2563EB]">
                      KARAD UDYOG ADVANTAGE
                    </span>
                    <span className="text-xs font-mono text-white/50">Banavadi Studio</span>
                  </div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    Full-Funnel Local Customer Acquisition
                  </h3>
                  <p className="text-xs font-sans text-slate-300 leading-relaxed">
                    From high-intent Google search ads and local map pack rankings to viral Instagram reels and custom Next.js web applications — we build complete digital growth pipelines.
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { Flame, Radio, Video, Megaphone, ArrowUpRight } from 'lucide-react'

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function WhatWeDoSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#0F172A] text-white border-b border-[#1E293B] overflow-hidden relative">
      {/* Background Accent Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Local Instagram Reach Content */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedReveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/30 text-[#E1306C]">
                <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
                <span className="text-[11px] font-sans font-bold tracking-wider uppercase">
                  LOCAL INSTAGRAM MARKETING ECOSYSTEM
                </span>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                YOUR BUSINESS.{' '}
                <span className="text-[#2563EB]">OUR LOCAL REACH.</span>
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
                {company.instagramAdvantage.subtext}
              </p>
            </AnimatedReveal>

            {/* 4 Advantage Pillars */}
            <AnimatedReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-[#1E293B] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#2563EB]">
                    <Video className="w-5 h-5" />
                    <h3 className="font-sans text-sm font-bold text-white">Local Reels Production</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    High-engagement short-form video reels shot and edited specifically to capture local customer attention in Karad.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E293B] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#2563EB]">
                    <Megaphone className="w-5 h-5" />
                    <h3 className="font-sans text-sm font-bold text-white">Business Promotions</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    Direct promotional features and store showcases broadcasted to active local buyers across Satara district.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E293B] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#2563EB]">
                    <Radio className="w-5 h-5" />
                    <h3 className="font-sans text-sm font-bold text-white">Geo-Targeted Advertising</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    Hyper-local ad placement ensuring your brand is seen by audiences living and shopping near your location.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#1E293B] border border-white/10 space-y-2">
                  <div className="flex items-center gap-2.5 text-[#2563EB]">
                    <Flame className="w-5 h-5" />
                    <h3 className="font-sans text-sm font-bold text-white">Direct Local Audience</h3>
                  </div>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    Tap into our active follower base of local consumers, shop owners, and enterprise decision-makers.
                  </p>
                </div>
              </div>
            </AnimatedReveal>

            {/* Dual Action CTAs */}
            <AnimatedReveal delay={0.25}>
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={company.instagramAdvantage.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#E1306C] hover:bg-[#D6245C] text-white font-sans text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all duration-300"
                >
                  <InstagramIcon className="w-4 h-4" />
                  <span>Follow @karadudyog</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <Button href="/contact" variant="primary" size="lg">
                  Promote Your Business Now
                </Button>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Visual Instagram Media Card Showcase */}
          <div className="lg:col-span-5">
            <AnimatedReveal delay={0.2}>
              <div className="relative rounded-2xl bg-[#1E293B] p-6 text-white border border-white/10 shadow-2xl space-y-6">
                {/* Follower Metric Highlight Card */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-[#0F172A] border border-white/10">
                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#E1306C] block mb-1">
                      LOCAL INSTAGRAM REACH
                    </span>
                    <div className="text-3xl font-black font-sans text-white">
                      {company.instagramAdvantage.followerCount}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-slate-400 block">
                      AUDIENCE FOCUS
                    </span>
                    <span className="text-xs font-bold text-[#2563EB]">
                      Karad & Satara
                    </span>
                  </div>
                </div>

                {/* Visual Reels/Grid Showcase */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-slate-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop"
                      alt="Karad Local Business Instagram Reel Promotion"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-[10px] font-bold text-white uppercase tracking-wider">
                      Local Reel Showcase
                    </div>
                  </div>

                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 bg-slate-900 group">
                    <img
                      src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=600&auto=format&fit=crop"
                      alt="Local Advertising Campaign in Karad"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-[10px] font-bold text-white uppercase tracking-wider">
                      Business Promotion
                    </div>
                  </div>
                </div>

                <div className="text-center pt-1">
                  <span className="text-xs text-slate-400 font-medium">
                    Combine your digital services with our active local channel reach.
                  </span>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import type { Metadata } from 'next'
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Digital Agency in Karad, Satara | Karad Udyog',
  description:
    'Learn about Karad Udyog — founded by Uday Belwandkar in Banavadi, Karad. Discover our digital marketing agency methodology, local Instagram audience advantage (~1,500 followers), and web development standards across Maharashtra.',
}

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-36 pb-24 text-[#0F172A]">
      <Container>
        {/* Full-width Hero Header */}
        <AnimatedReveal>
          <div className="space-y-6 mb-16 max-w-4xl">
            <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block">
              ABOUT KARAD UDYOG
            </span>
            <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-black leading-[1.08] tracking-tight text-[#0F172A]">
              DIGITAL SOLUTIONS ROOTED IN KARAD. ENGINEERED FOR GROWTH.
            </h1>
            <p className="font-sans text-base sm:text-xl text-[#334155] font-medium leading-relaxed">
              We engineer custom web applications, architect search engine dominance, and execute performance marketing campaigns for ambitious enterprises across Western Maharashtra.
            </p>
          </div>
        </AnimatedReveal>

        {/* Founder Spotlight Card */}
        <div className="mb-24 p-8 sm:p-12 rounded-2xl bg-[#0F172A] text-white shadow-2xl border border-[#1E293B]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                <img
                  src={company.founder.image}
                  alt={`${company.founder.name} - ${company.founder.role}`}
                  className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-1">
                    FOUNDER & LEAD STRATEGIST
                  </span>
                  <h3 className="font-sans text-2xl font-black text-white">
                    {company.founder.name}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {company.founder.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Founder Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 text-[#2563EB]">
                <Award className="w-4 h-4" />
                <span className="text-[11px] font-sans font-bold tracking-wider uppercase">
                  FOUNDER&apos;S VISION
                </span>
              </div>

              <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white leading-snug">
                &ldquo;Local businesses in Karad deserve digital marketing execution of the highest standard.&rdquo;
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
                {company.founder.bio}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-white/10 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Banavadi Studio Operations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Direct Strategic Accountability</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="border-t border-[#E2E8F0] pt-16 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB]">
                OUR BUSINESS STORY
              </span>
            </div>
            <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed">
              <p>
                Karad Udyog was founded by Uday Belwandkar with a clear commercial purpose: merchants, clinics, manufacturers, and educational hubs in regional markets like Karad, Satara, Sangli, and Kolhapur need direct, results-focused digital marketing pipelines.
              </p>
              <p>
                We build full-funnel acquisition systems — combining search engine dominance, high-ROAS paid ads, viral local reels, and custom Next.js web application engineering.
              </p>
              <p>
                Additionally, Karad Udyog operates a dedicated local social media marketing ecosystem with **~1,500 local Instagram followers** (`@karadudyog`), providing our clients with direct local promotional reach across Satara district.
              </p>
            </div>
          </div>
        </div>

        {/* Core Principles Section */}
        <div className="border-t border-[#E2E8F0] pt-16 mb-24">
          <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block mb-10">
            OUR CORE OPERATING PRINCIPLES
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedReveal delay={0.1}>
              <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 shadow-sm">
                <span className="font-mono text-2xl font-black text-[#2563EB]">01</span>
                <h3 className="font-sans text-xl font-bold text-[#0F172A]">High-Contrast Readability & Clarity</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                  We present information with absolute visual clarity. No low-contrast text or vague marketing buzzwords — every client communication is transparent.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 shadow-sm">
                <span className="font-mono text-2xl font-black text-[#2563EB]">02</span>
                <h3 className="font-sans text-xl font-bold text-[#0F172A]">Data-Driven Revenue Focus</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                  We measure success in phone inquiries, footfall visits, search rank placement, and return on ad spend — never in superficial vanity metrics.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 shadow-sm">
                <span className="font-mono text-2xl font-black text-[#2563EB]">03</span>
                <h3 className="font-sans text-xl font-bold text-[#0F172A]">Local Understanding & Social Reach</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                  Headquartered in Banavadi, Karad, we combine deep regional buyer knowledge with our active local Instagram audience to accelerate client visibility.
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25}>
              <div className="p-8 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-3 shadow-sm">
                <span className="font-mono text-2xl font-black text-[#2563EB]">04</span>
                <h3 className="font-sans text-xl font-bold text-[#0F172A]">Bespoke Engineering Standards</h3>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed">
                  We build custom Next.js and React codebases built for sub-second mobile page loads, security, and organic search ranking.
                </p>
              </div>
            </AnimatedReveal>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="border-t border-[#E2E8F0] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 p-8 rounded-2xl bg-[#0F172A] text-white">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-sans text-2xl sm:text-4xl font-extrabold text-white">
              Ready to elevate your business presence in Karad?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              Schedule a strategy discussion with Uday Belwandkar and our lead strategists.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </Container>
    </main>
  )
}

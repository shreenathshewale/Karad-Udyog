import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { User, Award, CheckCircle2 } from 'lucide-react'

export function EditorialIntro() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Photo & Badge */}
          <div className="lg:col-span-5">
            <AnimatedReveal>
              <div className="relative rounded-2xl bg-white p-4 shadow-xl border border-[#E2E8F0]">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#0F172A]">
                  <img
                    src={company.founder.image}
                    alt={`${company.founder.name} - ${company.founder.role}`}
                    className="w-full h-full object-cover object-center grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-[#2563EB]">
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
            </AnimatedReveal>
          </div>

          {/* Right Column: Business Story & Founder Message */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatedReveal>
              <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
                ABOUT KARAD UDYOG
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] leading-[1.15]">
                BUILDING DIGITAL STRENGTH FOR KARAD’S COMMERCIAL ENTERPRISES.
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.1}>
              <p className="text-base sm:text-lg text-[#334155] font-medium leading-relaxed">
                {company.description}
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] space-y-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB]">
                    <Award className="w-4 h-4" />
                  </div>
                  <span className="font-sans font-bold text-sm text-[#0F172A]">
                    Founder&apos;s Commitment — Uday Belwandkar
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed pl-11">
                  &ldquo;{company.founder.bio}&rdquo;
                </p>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Banavadi, Karad Headquartered</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Direct Founder-Led Strategy</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>Multi-Channel Growth Funnels</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#0F172A]">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span>100% Transparent ROI Reporting</span>
                </div>
              </div>
            </AnimatedReveal>

            <AnimatedReveal delay={0.25} className="pt-4">
              <Button href="/about" variant="primary" size="default">
                Read Full Business Story
              </Button>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

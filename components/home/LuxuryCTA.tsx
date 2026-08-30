import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'
import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react'

export function LuxuryCTA() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F172A] text-white relative border-b border-[#1E293B]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-8 space-y-6">
            <AnimatedReveal>
              <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block mb-2">
                FREE DIGITAL CONSULTATION
              </span>
              <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                LET&apos;S GROW YOUR BUSINESS ONLINE.
              </h2>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15}>
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-2xl">
                Ready to dominate search engine results, launch high-converting paid ad campaigns, or deploy a custom Next.js web application for your business in Karad?
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href="/contact" variant="primary" size="lg">
                  Book Initial Strategy Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0F172A] hover:bg-slate-100 font-sans text-xs font-bold uppercase tracking-wider rounded-md transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Call {company.contact.phoneFormatted}</span>
                </a>
              </div>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-4 space-y-6 p-6 sm:p-8 rounded-2xl bg-[#1E293B] border border-white/10 shadow-xl">
            <AnimatedReveal delay={0.25}>
              <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-4">
                DIRECT STUDIO CONTACT
              </span>

              <div className="space-y-4 font-sans text-xs">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Direct Phone Line</span>
                    <a href={`tel:${company.contact.phone}`} className="text-white font-bold hover:text-[#2563EB] transition-colors">
                      {company.contact.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Studio Email</span>
                    <a href={`mailto:${company.contact.email}`} className="text-white font-bold hover:text-[#2563EB] transition-colors">
                      {company.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#2563EB] mt-0.5 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Headquarters</span>
                    <p className="text-white font-bold">
                      Banavadi, Karad, Satara, Maharashtra 415124
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { company } from '@/data/company'
import { ContactForm } from './ContactForm'
import { MapPin, Phone, Mail } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Karad Udyog Agency in Banavadi, Karad',
  description:
    'Start a conversation with Karad Udyog. Phone: +91 95777 73167. Email: karadudyog@gmail.com. Studio located in Banavadi, Karad, Satara, Maharashtra.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] pt-36 pb-24 text-[#121212]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-32">
          {/* Left Column: Chandelier Headline & Direct Info */}
          <div className="lg:col-span-6 space-y-8">
            <AnimatedReveal>
              <SectionLabel text="Start a Conversation" className="mb-4" />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
                LET&apos;S TALK ABOUT YOUR NEXT MOVE.
              </h1>
              <p className="text-base sm:text-lg text-[#686257] font-sans leading-relaxed pt-2">
                Whether you require a complete digital strategy, search engine dominance, a custom Next.js website, or high-ROAS paid ads, our team is ready.
              </p>
            </AnimatedReveal>

            <AnimatedReveal delay={0.15} className="space-y-6 pt-4 border-t border-[#EAE4D8]">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[#C5A059] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-[#121212]">Phone Line</h3>
                  <a
                    href={`tel:${company.contact.phone}`}
                    className="text-sm font-sans text-[#686257] hover:text-[#C5A059] transition-colors"
                  >
                    {company.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#C5A059] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-[#121212]">Direct Email</h3>
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-sm font-sans text-[#686257] hover:text-[#C5A059] transition-colors"
                  >
                    {company.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#C5A059] mt-1 shrink-0" />
                <div>
                  <h3 className="font-serif text-xl text-[#121212]">Studio Location</h3>
                  <p className="text-sm font-sans text-[#686257] leading-relaxed">
                    {company.contact.fullAddress}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          </div>

          {/* Right Column: Chandelier Luxury Contact Form */}
          <div className="lg:col-span-6">
            <AnimatedReveal delay={0.2}>
              <div className="bg-[#F6F3EC] p-8 sm:p-12 border border-[#EAE4D8]">
                <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C5A059] block mb-6">
                  PROJECT INQUIRY FORM
                </span>
                <ContactForm />
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </Container>

      {/* Location Banner */}
      <section className="border-t border-[#222222] bg-[#0E0E0E] text-white pt-24 pb-32">
        <Container>
          <AnimatedReveal>
            <SectionLabel text="Physical Presence" className="mb-8 text-[#C5A059]" />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="font-serif text-4xl sm:text-6xl lg:text-8xl leading-none tracking-tight">
                BANAVADI,<br />
                KARAD,<br />
                MAHARASHTRA
              </h2>
              <div className="space-y-2 max-w-xs text-xs font-sans text-white/60">
                <p className="text-white font-semibold text-sm">Karad Udyog Studio</p>
                <p>{company.contact.fullAddress}</p>
                <p className="text-[#C5A059] pt-1">Serving Karad, Satara, Sangli, Kolhapur & Global Clients</p>
              </div>
            </div>
          </AnimatedReveal>
        </Container>
      </section>
    </main>
  )
}

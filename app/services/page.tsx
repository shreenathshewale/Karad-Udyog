import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { services } from '@/data/services'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Marketing & Web Services Index | Karad Udyog',
  description:
    'Explore the 15 specialized digital services offered by Karad Udyog in Karad, Satara: SEO, Google Ads, Meta Ads, custom Next.js web development, branding, graphic design, and video editing.',
}

export default function ServicesPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
      <Container>
        <AnimatedReveal>
          <div className="space-y-6 mb-20 max-w-4xl">
            <SectionLabel text="Service Capabilities Index" />
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
              15 SPECIALIZED DIGITAL CAPABILITIES.
            </h1>
            <p className="font-sans text-base sm:text-xl text-[#686257] leading-relaxed">
              We provide an integrated suite of marketing, development, and creative solutions engineered specifically for high-growth enterprises in Karad and across Maharashtra.
            </p>
          </div>
        </AnimatedReveal>

        {/* Master Chandelier Editorial Service Index */}
        <div className="border-t border-[#EAE4D8] divide-y divide-[#EAE4D8] mb-24">
          {services.map((service, index) => (
            <AnimatedReveal key={service.slug} delay={index * 0.04}>
              <Link
                href={`/services/${service.slug}`}
                className="group block py-8 sm:py-10 transition-colors hover:bg-[#F6F3EC]"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline px-4">
                  <div className="md:col-span-2 font-mono text-xs text-[#C5A059] font-bold">
                    {service.number}
                  </div>

                  <div className="md:col-span-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#121212] group-hover:text-[#C5A059] transition-colors">
                      {service.title}
                    </h2>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#686257] block mt-1">
                      Category: {service.category}
                    </span>
                  </div>

                  <div className="md:col-span-5 font-sans text-xs sm:text-sm text-[#686257] leading-relaxed">
                    {service.shortDescription}
                  </div>

                  <div className="md:col-span-1 flex justify-end">
                    <div className="p-3 border border-[#EAE4D8] group-hover:border-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all text-[#121212]">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-[#EAE4D8] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">
              Need a customized service package?
            </h2>
            <p className="text-xs text-[#686257] font-sans">
              We tailor multi-channel marketing and development retainers to your budget.
            </p>
          </div>

          <Button href="/contact" variant="primary" size="lg">
            Discuss Your Project
          </Button>
        </div>
      </Container>
    </main>
  )
}

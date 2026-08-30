import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { getLocationBySlug, locations } from '@/data/locations'
import { services } from '@/data/services'
import { company } from '@/data/company'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocationBySlug(slug)
  if (!loc) return { title: 'Location Not Found' }
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: {
      canonical: `/locations/${loc.slug}`,
    },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = getLocationBySlug(slug)

  if (!loc) {
    notFound()
  }

  const jsonLdLocal = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${company.name} - ${loc.cityName}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: loc.cityName,
      addressRegion: company.contact.state,
      addressCountry: company.contact.country,
    },
    telephone: company.contact.phoneFormatted,
    url: `${company.meta.url}/locations/${loc.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocal) }}
      />

      <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
        <Container>
          <AnimatedReveal>
            <Link
              href="/"
              className="inline-flex items-center space-x-2 text-[#686257] hover:text-[#C5A059] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="space-y-6 mb-20 max-w-4xl">
              <SectionLabel text={`Regional Focus • ${loc.cityName}, ${loc.regionName}`} />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
                {loc.headline.toUpperCase()}
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#686257] leading-relaxed">
                {loc.introText}
              </p>
            </div>
          </AnimatedReveal>

          {/* Local Market Context */}
          <div className="border-t border-[#EAE4D8] pt-16 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 space-y-4">
                <SectionLabel text="Market Dynamics" />
                <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">
                  DIGITAL GROWTH IN {loc.cityName.toUpperCase()}
                </h2>
              </div>
              <div className="lg:col-span-7 font-sans text-base text-[#686257] leading-relaxed space-y-4">
                <p>{loc.localMarketContext}</p>
                <p>
                  By deploying targeted Local SEO, high-converting Meta & Google Ads, and custom Next.js web applications, we help businesses in {loc.cityName} capture buyer search intent before competitors.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Services for this Location */}
          <div className="border-t border-[#EAE4D8] pt-16 mb-24">
            <SectionLabel text="Targeted Services" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] mb-12">
              POPULAR DIGITAL SOLUTIONS IN {loc.cityName.toUpperCase()}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <div key={service.slug} className="p-8 bg-[#F6F3EC] border border-[#EAE4D8] space-y-4 group">
                  <span className="font-mono text-xs text-[#C5A059] font-bold">{service.number}</span>
                  <h3 className="font-serif text-2xl text-[#121212] group-hover:text-[#C5A059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-sans text-[#686257] leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold tracking-widest uppercase text-[#C5A059] hover:text-[#121212] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-[#EAE4D8] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">
                Ready to dominate digital search in {loc.cityName}?
              </h2>
              <p className="text-xs text-[#686257] font-sans">
                Schedule a consultation with our regional marketing team.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Start Your Strategy
            </Button>
          </div>
        </Container>
      </main>
    </>
  )
}

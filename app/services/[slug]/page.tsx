import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import { company } from '@/data/company'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    return { title: 'Service Not Found' }
  }
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.targetKeywords,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const jsonLdService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.category,
    provider: {
      '@type': 'LocalBusiness',
      name: company.name,
      address: company.contact.fullAddress,
    },
    description: service.description,
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
        <Container>
          {/* Breadcrumb Navigation */}
          <AnimatedReveal>
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-[#686257] hover:text-[#C5A059] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>

            {/* Service Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
              <div className="lg:col-span-8 space-y-6">
                <SectionLabel text={`Service ${service.number} • ${service.category}`} />
                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
                  {service.title}
                </h1>
                <p className="font-serif italic text-xl sm:text-2xl text-[#C5A059]">
                  {service.heroTagline}
                </p>
                <p className="font-sans text-base sm:text-lg text-[#686257] leading-relaxed max-w-2xl pt-2">
                  {service.description}
                </p>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Request {service.title} Proposal
                  </Button>
                  <Button href={`tel:${company.contact.phone}`} variant="outline" size="lg">
                    Call +91 95777 73167
                  </Button>
                </div>
              </div>

              {/* Sidebar Snapshot Box */}
              <div className="lg:col-span-4 bg-[#F6F3EC] p-8 border border-[#EAE4D8] space-y-6">
                <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#C5A059] block">
                  SERVICE OVERVIEW
                </span>

                <div className="space-y-4 font-sans text-xs border-y border-[#EAE4D8] py-4">
                  <div className="flex justify-between">
                    <span className="text-[#686257]">Category:</span>
                    <span className="font-semibold text-[#121212]">{service.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686257]">Primary Location:</span>
                    <span className="font-semibold text-[#121212]">Karad, Satara, Maharashtra</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#686257]">Delivery Model:</span>
                    <span className="font-semibold text-[#121212]">Dedicated Strategy & Execution</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase text-[#686257] block mb-2">
                    Target Keywords
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.targetKeywords.map((kw) => (
                      <span key={kw} className="text-[10px] font-sans bg-white px-2.5 py-1 text-[#686257] border border-[#EAE4D8]">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Capabilities Grid */}
          <div className="border-t border-[#EAE4D8] pt-20 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-5 space-y-4">
                <SectionLabel text="What We Deliver" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#121212]">
                  TECHNICAL CAPABILITIES
                </h2>
                <p className="text-sm text-[#686257] font-sans leading-relaxed">
                  Our execution in {service.title.toLowerCase()} is comprehensive and rigorous, eliminating single points of failure.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="p-6 bg-[#F6F3EC] border border-[#EAE4D8] space-y-2">
                      <span className="text-xs font-mono text-[#C5A059] font-bold">
                        0{i + 1}
                      </span>
                      <h3 className="font-sans font-semibold text-sm text-[#121212]">
                        {cap}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Business Benefits */}
          <div className="border-t border-[#EAE4D8] pt-20 mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-6 space-y-6">
                <SectionLabel text="Commercial Impact" />
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#121212]">
                  WHY THIS MATTERS FOR YOUR BUSINESS
                </h2>

                <div className="space-y-4 pt-2">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#121212] font-sans">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 bg-[#0E0E0E] text-white p-8 sm:p-12 space-y-6 border border-[#222222]">
                <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C5A059]">
                  EXECUTIVE SUMMARY
                </span>
                <p className="font-serif text-2xl text-white/90 leading-snug">
                  &ldquo;High-craft execution in {service.title} directly correlates with higher local market share and customer lifetime value.&rdquo;
                </p>
                <p className="text-xs font-sans text-white/60">
                  Ready to optimize your presence in Karad and Maharashtra? Contact our lead specialists today.
                </p>
                <Button href="/contact" variant="secondary" size="default">
                  Schedule Strategy Call
                </Button>
              </div>
            </div>
          </div>

          {/* Process Methodology */}
          <div className="border-t border-[#EAE4D8] pt-20 mb-24">
            <SectionLabel text="Execution Plan" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] mb-12">
              HOW WE EXECUTE YOUR {service.title.toUpperCase()}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.process.map((step) => (
                <div key={step.step} className="p-8 bg-[#F6F3EC] border border-[#EAE4D8] space-y-3">
                  <span className="font-serif text-3xl text-[#C5A059]">{step.step}</span>
                  <h3 className="font-sans font-semibold text-base text-[#121212]">{step.title}</h3>
                  <p className="text-xs text-[#686257] font-sans leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs Section */}
          <div className="border-t border-[#EAE4D8] pt-20 mb-24">
            <SectionLabel text="Frequently Asked Questions" className="mb-6" />
            <h2 className="font-serif text-3xl sm:text-4xl text-[#121212] mb-12">
              QUESTIONS ABOUT {service.title.toUpperCase()}
            </h2>

            <div className="space-y-6 max-w-4xl">
              {service.faqs.map((faq, i) => (
                <div key={i} className="p-6 bg-white border border-[#EAE4D8] space-y-2">
                  <h3 className="font-serif text-xl text-[#121212]">{faq.question}</h3>
                  <p className="text-xs sm:text-sm font-sans text-[#686257] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-[#EAE4D8] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">
                Ready to deploy {service.title.toLowerCase()}?
              </h2>
              <p className="text-xs text-[#686257] font-sans">
                Contact Karad Udyog for a transparent strategy proposal.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </Container>
      </main>
    </>
  )
}

import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faqs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Karad Udyog Agency',
  description:
    'Got questions about digital marketing, web development, SEO, or paid ads in Karad? Read our detailed agency FAQ guide.',
}

export default function FAQPage() {
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
        <Container>
          <AnimatedReveal>
            <div className="space-y-6 mb-20 max-w-4xl">
              <SectionLabel text="Agency FAQs" />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
                FREQUENTLY ASKED QUESTIONS.
              </h1>
              <p className="font-sans text-base sm:text-xl text-[#686257] leading-relaxed">
                Clear answers regarding our digital services, pricing structures, execution methodology, and regional focus across Maharashtra.
              </p>
            </div>
          </AnimatedReveal>

          {/* FAQs Accordion / List */}
          <div className="max-w-4xl space-y-6 border-t border-[#EAE4D8] pt-12 mb-24">
            {faqs.map((faq, i) => (
              <AnimatedReveal key={i} delay={i * 0.05}>
                <div className="p-8 bg-[#F6F3EC] border border-[#EAE4D8] space-y-3">
                  <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#C5A059]">
                    {faq.category} • FAQ 0{i + 1}
                  </span>
                  <h3 className="font-serif text-2xl text-[#121212]">{faq.question}</h3>
                  <p className="text-sm font-sans text-[#686257] leading-relaxed pt-1">
                    {faq.answer}
                  </p>
                </div>
              </AnimatedReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-[#EAE4D8] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121212]">
                Have a specific question not answered here?
              </h2>
              <p className="text-xs text-[#686257] font-sans">
                Contact our specialists directly via phone or email.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="lg">
              Contact Strategy Team
            </Button>
          </div>
        </Container>
      </main>
    </>
  )
}

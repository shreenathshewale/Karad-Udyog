import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { company } from '@/data/company'

export function ContactCTA() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-surface border-t border-border">
      <Container>
        <div className="max-w-3xl">
          <AnimatedReveal>
            <p className="text-xs font-sans font-medium uppercase tracking-[0.2em] text-muted mb-6">
              Get in touch
            </p>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              Have a project in mind?
              <br />
              <span className="text-accent">Let&apos;s talk about it.</span>
            </h2>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-10 max-w-xl">
              Whether you need a complete digital strategy or help with a
              specific project, we are happy to listen. No commitment, no
              pitch deck — just a conversation.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Button href="/contact" size="lg">
                Start a conversation
              </Button>
              <div className="flex flex-col gap-1">
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {company.contact.email}
                </a>
                <a
                  href={`tel:+91${company.contact.phone}`}
                  className="text-sm text-muted hover:text-fg transition-colors"
                >
                  {company.contact.phoneFormatted}
                </a>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </Container>
    </section>
  )
}

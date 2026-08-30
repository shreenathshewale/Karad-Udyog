import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

const steps = [
  {
    number: '01',
    title: 'Listen',
    description:
      'We start by understanding your business — your goals, your customers, your challenges. No assumptions, no templates. Every engagement begins with a conversation.',
  },
  {
    number: '02',
    title: 'Build',
    description:
      'We develop a strategy and create the work — whether that is a campaign, a website, a brand identity, or a content system. Practical, focused, and built for your specific situation.',
  },
  {
    number: '03',
    title: 'Grow',
    description:
      'We measure, refine, and scale what works. Digital marketing is not a one-time project — it is an ongoing process of learning and improving.',
  },
]

export function Process() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <AnimatedReveal>
              <SectionLabel text="How we work" />
              <h2 className="mt-6 font-serif text-3xl md:text-4xl leading-[1.2]">
                A straightforward process.
              </h2>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, i) => (
                <AnimatedReveal key={step.number} delay={i * 0.1}>
                  <div className="py-8 md:py-10 border-t border-border group">
                    <div className="flex gap-6 md:gap-10">
                      <span className="text-xs text-accent font-sans font-medium tabular-nums mt-1">
                        {step.number}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-serif text-2xl md:text-3xl mb-4">
                          {step.title}
                        </h3>
                        <p className="text-base text-muted leading-relaxed max-w-lg">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedReveal>
              ))}
              <div className="border-t border-border" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

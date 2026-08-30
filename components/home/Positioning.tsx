import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'

export function Positioning() {
  return (
    <section className="py-20 md:py-28 lg:py-32">
      <Container>
        <AnimatedReveal>
          <SectionLabel text="What we do" />
        </AnimatedReveal>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7">
            <AnimatedReveal delay={0.1}>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.3] text-fg">
                Karad Udyog is a digital marketing agency that helps businesses
                communicate clearly, reach the right people, and grow through
                well-made digital work.
              </p>
            </AnimatedReveal>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <AnimatedReveal delay={0.2}>
              <p className="text-base text-muted leading-relaxed">
                We combine marketing strategy, creative design, and technical
                execution — bringing the full spectrum of digital services under
                one roof. From search engine optimization to social media, from
                branding to video production.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.25}>
              <p className="text-base text-muted leading-relaxed mt-4">
                Based in Karad, we work with businesses locally and across
                Maharashtra — bringing a personal, involved approach that larger
                agencies often cannot.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

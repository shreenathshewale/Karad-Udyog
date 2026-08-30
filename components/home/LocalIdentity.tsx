import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'

export function LocalIdentity() {
  return (
    <section className="py-20 md:py-28 lg:py-36 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large typographic statement */}
          <div className="lg:col-span-7">
            <AnimatedReveal>
              <p className="font-serif text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] tracking-tight">
                Based in{' '}
                <span className="text-accent">Karad</span>.
                <br />
                Working with businesses
                <br className="hidden md:block" /> wherever they are going.
              </p>
            </AnimatedReveal>
          </div>

          {/* Right: Context */}
          <div className="lg:col-span-5 lg:pt-4">
            <AnimatedReveal delay={0.15}>
              <div className="space-y-6">
                <p className="text-base text-muted leading-relaxed">
                  Karad is where we work. It is our home, and it shapes how
                  we think about business — personally, practically, with a
                  real understanding of what local businesses need.
                </p>
                <p className="text-base text-muted leading-relaxed">
                  But digital work is not limited by geography. The strategies,
                  designs, and campaigns we build serve businesses across Satara
                  district, across Maharashtra, and beyond.
                </p>

                {/* Location detail */}
                <div className="pt-6 border-t border-border space-y-3">
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-muted uppercase tracking-widest shrink-0 mt-0.5">
                      Location
                    </span>
                    <span className="text-sm text-fg">
                      Banavadi, Karad, Maharashtra
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-xs text-muted uppercase tracking-widest shrink-0 mt-0.5">
                      Region
                    </span>
                    <span className="text-sm text-fg">
                      Satara District, Western Maharashtra
                    </span>
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

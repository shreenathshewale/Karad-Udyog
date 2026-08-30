'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { services } from '@/data/services'
import { ArrowUpRight } from 'lucide-react'

export function CapabilitiesIndex() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-dark text-white">
      <Container>
        <AnimatedReveal>
          <SectionLabel text="Capabilities" className="!text-dark-muted" />
          <h2 className="mt-6 font-serif text-3xl md:text-4xl lg:text-5xl text-white/90 max-w-2xl">
            Everything your business needs to grow digitally.
          </h2>
        </AnimatedReveal>

        <div className="mt-14 md:mt-20">
          {services.map((service, i) => (
            <AnimatedReveal key={service.slug} delay={i * 0.03}>
              <Link
                href={`/services/${service.slug}`}
                className="group block"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(i)}
                onBlur={() => setHoveredIndex(null)}
              >
                <div
                  className={`flex items-start md:items-center justify-between gap-4 py-5 md:py-6 border-t border-white/10 transition-all duration-300 ${
                    hoveredIndex !== null && hoveredIndex !== i
                      ? 'opacity-30'
                      : 'opacity-100'
                  }`}
                >
                  <div className="flex items-start md:items-center gap-4 md:gap-8 flex-1 min-w-0">
                    <span className="text-xs text-dark-muted font-sans tabular-nums shrink-0 mt-1 md:mt-0">
                      {service.number}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-white group-hover:text-accent transition-colors duration-300 truncate">
                      {service.title}
                    </h3>
                  </div>

                  <div className="hidden md:block flex-1 max-w-sm">
                    <p
                      className={`text-sm text-white/40 leading-relaxed transition-all duration-300 ${
                        hoveredIndex === i
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-2'
                      }`}
                    >
                      {service.shortDescription}
                    </p>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 shrink-0 text-white/30 transition-all duration-300 ${
                      hoveredIndex === i
                        ? 'text-accent rotate-0'
                        : 'rotate-45'
                    }`}
                  />
                </div>
              </Link>
            </AnimatedReveal>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/10" />
        </div>
      </Container>
    </section>
  )
}

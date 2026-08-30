import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'

export function CountersSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0F172A] text-white border-b border-[#1E293B]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {company.stats.map((stat, index) => (
            <AnimatedReveal key={stat.label} delay={index * 0.08}>
              <div className="space-y-2 border-l-4 border-[#2563EB] pl-6 sm:pl-8">
                <div className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
                  {stat.value}
                  <span className="text-[#2563EB] font-bold text-2xl sm:text-3xl ml-1">{stat.suffix}</span>
                </div>
                <div className="text-[11px] font-sans font-bold tracking-wider uppercase text-slate-400">
                  {stat.label}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

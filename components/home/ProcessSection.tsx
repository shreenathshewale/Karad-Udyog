import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { Container } from '@/components/ui/Container'

const processSteps = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Audit & Objective Alignment',
    description:
      'We conduct a deep strategic audit of your market position, target audience, local search footprint in Karad, and core commercial targets.',
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Architecture & System Blueprint',
    description:
      'Designing custom buyer journeys, technical keyword maps, ad copy frameworks, and web interface specifications tailored to your brand.',
  },
  {
    number: '03',
    title: 'CREATE',
    subtitle: 'Bespoke Design & Code',
    description:
      'Engineering custom Next.js web applications, high-converting ad graphics, and brand assets with precision typography and fast load speed.',
  },
  {
    number: '04',
    title: 'LAUNCH',
    subtitle: 'Deployment & Media Execution',
    description:
      'Deploying technical SEO infrastructure, publishing map listings, launching paid ad campaigns, and configuring conversion tracking.',
  },
  {
    number: '05',
    title: 'OPTIMIZE',
    subtitle: 'Analytics & Continuous Scaling',
    description:
      'Daily monitoring of campaign ROAS, user click paths, and search positions — refining bids and scaling what generates net profit.',
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-[#F8FAFC] border-b border-[#E2E8F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block mb-3">
              HOW WE WORK
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
              OUR 5-STEP METHODOLOGY
            </h2>
          </div>
          <p className="text-sm font-sans font-medium text-[#475569] max-w-xs leading-relaxed">
            A structured execution framework designed to eliminate guesswork and deliver repeatable business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
          {processSteps.map((step, index) => (
            <AnimatedReveal key={step.number} delay={index * 0.08}>
              <div className="space-y-4 p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-sm hover:border-[#2563EB] transition-all duration-300 group h-full flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="font-mono text-3xl font-black text-[#2563EB] block">
                    {step.number}
                  </span>

                  <h3 className="font-sans text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>

                  <span className="text-[10px] font-sans font-bold tracking-wider uppercase text-[#64748B] block">
                    {step.subtitle}
                  </span>

                  <p className="text-xs text-[#475569] font-medium leading-relaxed pt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { articles } from '@/data/insights'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Journal & Insights | Karad Udyog Agency',
  description:
    'Read perspectives on digital strategy, local SEO, Next.js engineering, and paid performance ads from the Karad Udyog editorial team.',
}

export default function InsightsPage() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
      <Container>
        <AnimatedReveal>
          <div className="space-y-6 mb-20 max-w-4xl">
            <SectionLabel text="Journal & Insights" />
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
              PERSPECTIVES ON DIGITAL.
            </h1>
            <p className="font-sans text-base sm:text-xl text-[#686257] leading-relaxed">
              Analyses, strategic breakdowns, and technical insights on digital marketing, local search optimization, and web engineering.
            </p>
          </div>
        </AnimatedReveal>

        {/* Featured Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-24 border-t border-[#EAE4D8] pt-12">
          {articles.map((article, i) => (
            <AnimatedReveal key={article.slug} delay={i * 0.1}>
              <Link href={`/insights/${article.slug}`} className="group block space-y-4">
                <div className="relative aspect-[16/10] w-full bg-[#161616] overflow-hidden border border-[#EAE4D8]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="space-y-2 font-sans">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                    <span>{article.category}</span>
                    <span className="text-[#686257]">{article.readTime}</span>
                  </div>

                  <h2 className="font-serif text-2xl text-[#121212] group-hover:text-[#C5A059] transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-[#686257] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-[#121212] group-hover:text-[#C5A059] transition-colors uppercase tracking-wider">
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </main>
  )
}

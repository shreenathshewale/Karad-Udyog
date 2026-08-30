import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Button } from '@/components/ui/Button'
import { getArticleBySlug, articles } from '@/data/insights'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: 'Article Not Found' }
  return {
    title: `${article.title} | Karad Udyog Journal`,
    description: article.excerpt,
    alternates: {
      canonical: `/insights/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    image: article.image,
    datePublished: article.publishedAt,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />

      <main className="bg-[#FDFBF7] min-h-screen pt-36 pb-24 text-[#121212]">
        <Container>
          <AnimatedReveal>
            <Link
              href="/insights"
              className="inline-flex items-center space-x-2 text-[#686257] hover:text-[#C5A059] transition-colors mb-12 text-xs uppercase tracking-[0.2em] font-sans"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Journal</span>
            </Link>

            <div className="space-y-6 mb-16 max-w-4xl">
              <SectionLabel text={`${article.category} • ${article.publishedAt}`} />
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#121212]">
                {article.title}
              </h1>
              <div className="flex items-center gap-4 text-xs font-sans text-[#686257] pt-2">
                <span>By {article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
            </div>
          </AnimatedReveal>

          {/* Featured Image */}
          <AnimatedReveal delay={0.1}>
            <div className="relative aspect-[21/9] w-full bg-[#161616] overflow-hidden mb-16 border border-[#EAE4D8]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedReveal>

          {/* Article Body */}
          <AnimatedReveal delay={0.15}>
            <div className="max-w-3xl mx-auto space-y-6 font-sans text-base sm:text-lg text-[#121212] leading-relaxed border-t border-[#EAE4D8] pt-12 mb-24">
              {article.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </AnimatedReveal>

          {/* CTA */}
          <div className="max-w-3xl mx-auto border-t border-[#EAE4D8] pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl text-[#121212]">
                Ready to implement these growth strategies?
              </h2>
              <p className="text-xs text-[#686257] font-sans">
                Contact Karad Udyog for custom strategy execution.
              </p>
            </div>

            <Button href="/contact" variant="primary" size="default">
              Start Your Strategy
            </Button>
          </div>
        </Container>
      </main>
    </>
  )
}

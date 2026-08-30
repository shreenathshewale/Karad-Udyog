'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const heroSlides = [
  {
    id: '01',
    category: 'DIGITAL CRAFT & STRATEGY',
    title: 'DIGITAL CRAFT.\nBUSINESS IMPACT.',
    subtitle: 'High-end performance marketing, custom Next.js web design, and SEO engineered for ambitious enterprises in Karad & Maharashtra.',
    ctaText: 'Explore Capabilities',
    ctaLink: '/services',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '02',
    category: 'BESPOKE WEB ENGINEERING',
    title: 'BESPOKE CODE.\nULTRA FAST PERFORMANCE.',
    subtitle: 'Custom Next.js & React web applications designed with luxury editorial aesthetics and instant mobile page speeds.',
    ctaText: 'View Web Work',
    ctaLink: '/services/website-development',
    bgImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '03',
    category: 'SEARCH DOMINANCE & LOCAL SEO',
    title: 'COMMAND GOOGLE.\nCAPTURE LOCAL INTENT.',
    subtitle: 'Top-tier Search Engine Optimization and Google Business Profile management that drives direct customer inquiries.',
    ctaText: 'Discover SEO',
    ctaLink: '/services/seo',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '04',
    category: 'META & GOOGLE ADS VELOCITY',
    title: 'STOP THE SCROLL.\nGENERATE DEMAND.',
    subtitle: 'Data-driven paid advertising campaigns on Facebook, Instagram, and Google Search built for maximum return on ad spend.',
    ctaText: 'View Ads Strategy',
    ctaLink: '/services/meta-ads',
    bgImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative w-full h-[92vh] min-h-[640px] max-h-[960px] bg-[#0E0E0E] text-white overflow-hidden">
      {/* Background Image Slide with Smooth Cinematic Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
      </AnimatePresence>

      {/* Dark Luxury Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/60 to-transparent pointer-events-none" />

      {/* Main Content */}
      <Container className="relative h-full flex flex-col justify-between pt-36 pb-16">
        {/* Top Slide Meta */}
        <div className="flex items-center justify-between text-xs font-sans">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#C5A059]" />
            <span className="text-[#C5A059] font-semibold tracking-[0.25em] uppercase text-[10px]">
              {slide.category}
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-white/50 text-[11px] tracking-widest font-mono">
            <span>0{currentSlide + 1}</span>
            <span className="text-white/20">/</span>
            <span>0{heroSlides.length}</span>
          </div>
        </div>

        {/* Center Hero Text */}
        <div className="max-w-4xl my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-white whitespace-pre-line">
                {slide.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-white/70 font-sans max-w-2xl leading-relaxed">
                {slide.subtitle}
              </p>

              <div className="pt-4 flex items-center gap-5">
                <Button href={slide.ctaLink} variant="secondary" size="lg">
                  {slide.ctaText}
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-black">
                  Start a Project
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Bar Controls & Indicators */}
        <div className="flex items-end justify-between border-t border-white/10 pt-6">
          <div className="flex items-center gap-3">
            {heroSlides.map((s, index) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-500 h-1 rounded-none ${
                  currentSlide === index ? 'w-10 bg-[#C5A059]' : 'w-4 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${s.id}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors text-white"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] transition-colors text-white"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

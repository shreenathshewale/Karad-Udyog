'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { testimonials } from '@/data/testimonials'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

export function EditorialTestimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index] || testimonials[0]

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E2E8F0]">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/10 text-[#2563EB]">
            <Quote className="w-4 h-4" />
            <span className="text-[11px] font-sans font-bold tracking-wider uppercase">
              CLIENT TESTIMONIALS & PROOF
            </span>
          </div>

          <div className="min-h-[200px] flex items-center justify-center p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <blockquote className="font-sans font-bold text-xl sm:text-3xl text-[#0F172A] leading-[1.3] tracking-tight">
                  &ldquo;{current.quote}&rdquo;
                </blockquote>

                <div className="space-y-1 font-sans">
                  <div className="text-sm font-extrabold text-[#0F172A] uppercase tracking-wider">
                    {current.clientName}
                  </div>
                  <div className="text-xs font-semibold text-[#64748B]">
                    {current.company} • {current.location}
                  </div>
                  <div className="text-[11px] uppercase tracking-widest font-bold text-[#2563EB] pt-1">
                    {current.serviceUsed}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-md border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all text-[#0F172A]"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-md border border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all text-[#0F172A]"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}

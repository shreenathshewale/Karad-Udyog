'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { AnimatedReveal } from '@/components/ui/AnimatedReveal'
import { services } from '@/data/services'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export function EditorialServices() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-white text-[#0F172A] border-b border-[#E2E8F0]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-[11px] font-sans font-extrabold tracking-[0.2em] uppercase text-[#2563EB] block mb-3">
              WHAT WE DO
            </span>
            <h2 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight">
              OUR CORE DIGITAL SERVICES
            </h2>
          </div>
          <p className="text-sm font-sans font-medium text-[#475569] max-w-md leading-relaxed">
            Integrated digital marketing, custom web application engineering, and brand communication systems engineered for business growth in Karad and Maharashtra.
          </p>
        </div>

        {/* 16 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <AnimatedReveal key={service.slug} delay={index * 0.04}>
              <div className="group relative rounded-xl bg-[#F8FAFC] hover:bg-[#0F172A] p-7 sm:p-8 border border-[#E2E8F0] hover:border-[#0F172A] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between h-full">
                <div className="space-y-4">
                  {/* Card Header: Number & Category */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#2563EB] group-hover:text-[#60A5FA]">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#64748B] group-hover:text-slate-300 bg-white group-hover:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 group-hover:border-slate-700">
                      {service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-sans text-xl font-bold text-[#0F172A] group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#475569] group-hover:text-slate-300 font-medium leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Top Capabilities Micro List */}
                  <div className="pt-2 space-y-1.5 border-t border-slate-200 group-hover:border-slate-800">
                    {service.capabilities.slice(0, 2).map((cap) => (
                      <div key={cap} className="flex items-center gap-2 text-[11px] font-medium text-[#334155] group-hover:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-200 group-hover:border-slate-800">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] group-hover:text-white transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

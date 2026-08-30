'use client'

import { useState, useEffect } from 'react'
import { Phone, ArrowUp } from 'lucide-react'
import { company } from '@/data/company'

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const whatsappMessage = encodeURIComponent(
    'Hello Karad Udyog, I would like to know more about your digital marketing services.'
  )
  const whatsappUrl = `https://wa.me/919577773167?text=${whatsappMessage}`

  return (
    <aside aria-label="Quick contact and scroll controls" className="fixed z-40 inset-x-0 bottom-0 pointer-events-none pb-[env(safe-area-inset-bottom,0px)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex items-center justify-between pointer-events-none">
        
        {/* Floating Call Button (Bottom-Left) */}
        <div className="pointer-events-auto group relative">
          <a
            href={`tel:${company.contact.phone}`}
            aria-label="Call Karad Udyog"
            className="flex items-center gap-2.5 px-4 py-3 sm:p-3.5 rounded-full bg-[#0F172A] text-white border border-slate-700 shadow-xl hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Phone className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
            <span className="hidden sm:inline font-sans text-xs font-bold tracking-wider uppercase pr-1">
              Call Us
            </span>
          </a>
          
          {/* Desktop Tooltip */}
          <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block pointer-events-none">
            <div className="bg-[#0F172A] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-md shadow-lg border border-slate-700 whitespace-nowrap">
              Call +91 95777 73167
            </div>
          </div>
        </div>

        {/* Floating Back to Top Button (Bottom-Center) */}
        <div className={`pointer-events-auto transition-all duration-300 transform ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 sm:p-3.5 rounded-full bg-white text-[#0F172A] border border-[#E2E8F0] shadow-lg hover:bg-[#0F172A] hover:text-white hover:border-[#0F172A] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center group"
          >
            <ArrowUp className="w-4 h-4 text-[#0F172A] group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Floating WhatsApp Button (Bottom-Right) */}
        <div className="pointer-events-auto group relative">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Karad Udyog on WhatsApp"
            className="flex items-center gap-2.5 px-4 py-3 sm:p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba5a] transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5 text-white" />
            <span className="hidden sm:inline font-sans text-xs font-bold tracking-wider uppercase pr-1">
              WhatsApp
            </span>
          </a>

          {/* Desktop Tooltip */}
          <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block pointer-events-none">
            <div className="bg-[#0F172A] text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded-md shadow-lg border border-slate-700 whitespace-nowrap">
              WhatsApp Us
            </div>
          </div>
        </div>

      </div>
    </aside>
  )
}

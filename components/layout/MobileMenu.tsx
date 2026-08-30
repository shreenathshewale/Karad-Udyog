'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { label: string; href: string }[]
}

export function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!isOpen}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-lg"
        onClick={onClose}
      />

      {/* Navigation Layer */}
      <nav
        className={`relative h-full flex flex-col justify-between px-8 py-24 transition-all duration-300 ${
          isOpen ? 'translate-y-0' : 'translate-y-4'
        }`}
        aria-label="Mobile navigation"
      >
        <div className="space-y-6">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#2563EB] block mb-6">
            NAVIGATION MENU
          </span>
          <ul className="space-y-4">
            {links.map((link, i) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block font-sans text-3xl font-extrabold text-white hover:text-[#2563EB] transition-colors duration-200"
                  style={{
                    transitionDelay: isOpen ? `${i * 30 + 50}ms` : '0ms',
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full text-center block py-4 bg-[#2563EB] text-white font-sans text-xs font-bold uppercase tracking-[0.2em] rounded-md shadow-md"
          >
            Start a Conversation
          </Link>

          <div className="space-y-1 pt-2 text-white/70 text-xs">
            <a
              href="tel:+919577773167"
              className="block font-medium hover:text-[#2563EB] transition-colors"
            >
              +91 95777 73167
            </a>
            <a
              href="mailto:karadudyog@gmail.com"
              className="block font-medium hover:text-[#2563EB] transition-colors"
            >
              karadudyog@gmail.com
            </a>
            <p className="text-[11px] text-white/50 pt-1">
              Banavadi, Karad — Satara District, Maharashtra
            </p>
          </div>
        </div>
      </nav>
    </div>
  )
}

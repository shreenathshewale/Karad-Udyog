'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Insights', href: '/insights' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] shadow-sm py-3'
            : 'bg-white/80 backdrop-blur-sm py-5 lg:py-6 border-b border-transparent'
        }`}
      >
        <Container>
          <nav
            className="flex items-center justify-between"
            aria-label="Main navigation"
          >
            {/* Karad Udyog Agency Brand */}
            <Link
              href="/"
              className="relative z-10 flex flex-col group"
            >
              <span className="font-sans font-extrabold text-2xl lg:text-3xl tracking-tight text-[#0F172A] group-hover:text-[#2563EB] transition-colors duration-300">
                KARAD UDYOG
              </span>
              <span className="text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-[#2563EB] -mt-1">
                Digital Agency
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative text-[12px] font-sans font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
                      isActive
                        ? 'text-[#2563EB]'
                        : 'text-[#334155] hover:text-[#2563EB]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-[#2563EB] rounded-full" />
                    )}
                  </Link>
                )
              })}
            </div>

            {/* Desktop CTA Action */}
            <div className="hidden lg:flex items-center gap-4">
              <Button href="/contact" variant="primary" size="default">
                Start a Conversation
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="relative z-10 lg:hidden p-2 -mr-2 text-[#0F172A]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`block w-full h-[2px] bg-[#0F172A] transition-all duration-300 origin-center ${
                    mobileOpen ? 'rotate-45 translate-y-[9px]' : ''
                  }`}
                />
                <span
                  className={`block w-full h-[2px] bg-[#0F172A] transition-all duration-300 ${
                    mobileOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-full h-[2px] bg-[#0F172A] transition-all duration-300 origin-center ${
                    mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''
                  }`}
                />
              </div>
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Overlay Navigation */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} links={navLinks} />
    </>
  )
}

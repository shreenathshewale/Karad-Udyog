import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { company } from '@/data/company'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/about' },
  { label: 'Journal', href: '/insights' },
  { label: 'FAQs', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white border-t border-[#1E293B]" role="contentinfo">
      {/* Large Agency closing statement */}
      <Container className="pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-5xl">
          <span className="text-[11px] font-sans font-bold tracking-[0.25em] uppercase text-[#2563EB] block mb-4">
            KARAD UDYOG DIGITAL SOLUTIONS
          </span>
          <p className="font-sans text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight text-white">
            BUILT FOR BUSINESS.{' '}
            <span className="text-[#2563EB]">ENGINEERED FOR DIGITAL.</span>
          </p>
        </div>
      </Container>

      <Container>
        <div className="border-t border-white/10 pt-14 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-2 space-y-4">
              <span className="font-sans text-2xl font-black tracking-tight text-white block">
                KARAD UDYOG
              </span>
              <p className="text-xs font-sans text-slate-300 leading-relaxed max-w-sm font-medium">
                {company.description}
              </p>
              <div className="pt-2 flex flex-col space-y-1.5 text-xs text-slate-400 font-medium">
                <span>Banavadi, Karad, Satara District 415124</span>
                <span>Maharashtra, India</span>
                <a href={`tel:${company.contact.phone}`} className="text-[#2563EB] font-bold hover:underline pt-1">
                  {company.contact.phoneFormatted}
                </a>
                <a href={`mailto:${company.contact.email}`} className="text-slate-300 hover:text-white">
                  {company.contact.email}
                </a>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-5">
                NAVIGATION
              </span>
              <ul className="space-y-2.5">
                {mainNav.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs font-sans font-medium text-slate-300 hover:text-[#2563EB] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Featured Services */}
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-5">
                SERVICES
              </span>
              <ul className="space-y-2.5">
                {services.slice(0, 8).map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-sans font-medium text-slate-300 hover:text-[#2563EB] transition-colors duration-200"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Regional Locations SEO */}
            <div>
              <span className="text-[11px] font-sans font-bold tracking-[0.2em] uppercase text-[#2563EB] block mb-5">
                LOCATIONS
              </span>
              <ul className="space-y-2.5">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="text-xs font-sans font-medium text-slate-300 hover:text-[#2563EB] transition-colors duration-200"
                    >
                      Digital Agency {loc.cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <Container>
        <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-sans text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Karad Udyog. Founded by Uday Belwandkar. All rights reserved.</p>
          <p className="tracking-wider uppercase text-[10px]">
            Banavadi, Karad • Satara District • Maharashtra
          </p>
        </div>
      </Container>
    </footer>
  )
}

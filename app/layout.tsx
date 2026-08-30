import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingActions } from '@/components/layout/FloatingActions'
import { company } from '@/data/company'

export const metadata: Metadata = {
  title: {
    default: company.meta.title,
    template: `%s | Karad Udyog`,
  },
  description: company.meta.description,
  metadataBase: new URL(company.meta.url),
  openGraph: {
    title: company.meta.title,
    description: company.meta.description,
    url: company.meta.url,
    siteName: 'Karad Udyog',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: company.meta.title,
    description: company.meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    legalName: company.legalName,
    url: company.meta.url,
    logo: `${company.meta.url}/logo.png`,
    description: company.description,
    telephone: company.contact.phoneFormatted,
    email: company.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.contact.address,
      addressLocality: company.contact.city,
      addressRegion: company.contact.state,
      postalCode: company.contact.postalCode,
      addressCountry: company.contact.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.contact.geo.latitude,
      longitude: company.contact.geo.longitude,
    },
    openingHours: company.contact.openingHours,
    priceRange: '₹₹₹',
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#0F172A] overflow-x-hidden selection:bg-[#2563EB] selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  )
}

import { Hero } from '@/components/home/Hero'
import { EditorialIntro } from '@/components/home/EditorialIntro'
import { WhatWeDoSection } from '@/components/home/WhatWeDoSection'
import { EditorialServices } from '@/components/home/EditorialServices'
import { ProcessSection } from '@/components/home/ProcessSection'
import { CountersSection } from '@/components/home/CountersSection'
import { EditorialTestimonials } from '@/components/home/EditorialTestimonials'
import { LuxuryCTA } from '@/components/home/LuxuryCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialIntro />
      <WhatWeDoSection />
      <EditorialServices />
      <ProcessSection />
      <CountersSection />
      <EditorialTestimonials />
      <LuxuryCTA />
    </>
  )
}

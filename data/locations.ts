export interface LocationInfo {
  slug: string
  cityName: string
  regionName: string
  headline: string
  metaTitle: string
  metaDescription: string
  introText: string
  localMarketContext: string
  featuredServices: string[]
}

export const locations: LocationInfo[] = [
  {
    slug: 'karad',
    cityName: 'Karad',
    regionName: 'Satara District',
    headline: 'Digital Marketing & Web Agency in Karad',
    metaTitle: 'Digital Marketing Agency in Karad | Web Design Studio | Karad Udyog',
    metaDescription:
      'Premier digital marketing agency in Karad. Banavadi-based team delivering local SEO, Google Ads, Meta Ads, custom web design & branding for Karad businesses.',
    introText:
      'Karad Udyog is headquartered in Banavadi, Karad. We provide local merchants, retail stores, healthcare practices, and educational institutions in Karad with high-impact digital marketing, custom web engineering, and brand design.',
    localMarketContext:
      'As Karad grows into a key commercial and educational hub of Western Maharashtra, local businesses face increasing digital competition. Our localized SEO and targeted paid ad campaigns help Karad brands capture market demand.',
    featuredServices: ['Digital Marketing', 'Local SEO & Google Maps', 'Website Development', 'Google Ads', 'Branding'],
  },
  {
    slug: 'satara',
    cityName: 'Satara',
    regionName: 'Satara District Headquarters',
    headline: 'Digital Solutions & Marketing Partner in Satara',
    metaTitle: 'Digital Marketing Agency in Satara | SEO & Web Design | Karad Udyog',
    metaDescription:
      'Top digital marketing & web development agency serving Satara. Expert SEO, PPC ads, social media marketing, and custom Next.js websites.',
    introText:
      'Serving enterprise clients and businesses across Satara city and district. We craft bespoke digital marketing strategies and web experiences designed to accelerate commercial growth.',
    localMarketContext:
      'Businesses in Satara require sophisticated online visibility to reach consumers across the district. We engineer custom web applications and performance ad campaigns tailored to Satara’s buyer profile.',
    featuredServices: ['SEO', 'Meta Ads', 'Social Media Marketing', 'Web Design', 'Video Editing'],
  },
  {
    slug: 'sangli',
    cityName: 'Sangli',
    regionName: 'Sangli District',
    headline: 'Digital Marketing & Custom Web Engineering for Sangli',
    metaTitle: 'Digital Marketing Company in Sangli | Custom Web Design | Karad Udyog',
    metaDescription:
      'Results-driven digital marketing company serving Sangli. High-converting Google Ads, SEO campaigns, brand identity, and Next.js web applications.',
    introText:
      'Expanding business horizons in Sangli. Karad Udyog brings luxury editorial web design, search engine optimization, and direct lead acquisition to Sangli enterprises.',
    localMarketContext:
      'Sangli’s industrial and agricultural trading sector demands modern digital sales pipelines. We help Sangli companies build authoritative web portals and targeted customer acquisition funnels.',
    featuredServices: ['Digital Marketing', 'Website Development', 'Google Ads', 'Local SEO', 'WhatsApp Marketing'],
  },
  {
    slug: 'kolhapur',
    cityName: 'Kolhapur',
    regionName: 'Kolhapur District',
    headline: 'Premium Digital Agency Services for Kolhapur Brands',
    metaTitle: 'Digital Marketing Agency serving Kolhapur | Web Studio | Karad Udyog',
    metaDescription:
      'High-end digital agency serving Kolhapur. Bespoke web design, performance marketing, Meta Ads, and brand identity development.',
    introText:
      'Delivering bespoke creative and digital solutions to ambitious businesses in Kolhapur. We blend luxury editorial aesthetics with data-driven performance marketing.',
    localMarketContext:
      'Kolhapur is a thriving hub for manufacturing, retail, and hospitality. Our digital strategies give Kolhapur brands a distinct competitive edge across digital touchpoints.',
    featuredServices: ['Branding & Identity', 'Web Design & UI/UX', 'Meta Ads', 'SEO', 'Content Marketing'],
  },
]

export function getLocationBySlug(slug: string): LocationInfo | undefined {
  return locations.find((l) => l.slug === slug)
}

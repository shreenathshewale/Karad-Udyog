export interface Testimonial {
  id: string
  quote: string
  clientName: string
  company: string
  location: string
  serviceUsed: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Karad Udyog transformed our online presence completely. Their strategic approach to local SEO and web development brought a steady stream of new customers to our doorstep in Karad.',
    clientName: 'Sujay Deshmukh',
    company: 'Deshmukh Enterprises',
    location: 'Karad, Maharashtra',
    serviceUsed: 'Local SEO & Web Development',
  },
  {
    id: 't2',
    quote:
      'The luxury visual language and editorial precision they brought to our brand identity set us apart instantly. They are true craftsmen in digital communication.',
    clientName: 'Priya Kulkarni',
    company: 'Kulkarni Studio',
    location: 'Satara',
    serviceUsed: 'Branding & Web Design',
  },
  {
    id: 't3',
    quote:
      'Our Google Ads and Meta campaigns generated clear ROI within the first month. Karad Udyog focuses strictly on real revenue numbers, not empty vanity metrics.',
    clientName: 'Vikram Patel',
    company: 'Patel Solutions',
    location: 'Karad',
    serviceUsed: 'Google Ads & Meta Ads',
  },
]

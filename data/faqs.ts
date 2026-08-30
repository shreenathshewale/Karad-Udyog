export interface FAQItem {
  question: string
  answer: string
  category: 'General' | 'Services' | 'Pricing' | 'Process'
}

export const faqs: FAQItem[] = [
  {
    category: 'General',
    question: 'Where is Karad Udyog located?',
    answer:
      'Karad Udyog is based in Banavadi, Karad, Satara District, Maharashtra. We serve businesses locally in Karad and across Satara, Sangli, Kolhapur, Pune, and globally.',
  },
  {
    category: 'General',
    question: 'What services does Karad Udyog offer?',
    answer:
      'We offer 15 core digital services: Digital Marketing, Search Engine Optimization (SEO), Local SEO & Google Maps, Google Ads (PPC), Meta Ads (Facebook & Instagram), Social Media Marketing, Custom Website Development (Next.js/React), Web Design (UI/UX), Brand Strategy & Identity, Logo Design, Graphic Design, Video Editing & Reels, Content Marketing, WhatsApp Marketing, and Google Business Profile Optimization.',
  },
  {
    category: 'Services',
    question: 'How do you approach digital marketing for local businesses?',
    answer:
      'We do not use generic AI templates. We craft tailored acquisition systems based on deep local search intent, high-converting ad copy, bespoke web development, and measurable return on investment (ROI).',
  },
  {
    category: 'Services',
    question: 'Can you help our business rank #1 on Google in Karad and Satara?',
    answer:
      'While no agency can guarantee #1 rankings due to Google search algorithm dynamics, we build technical SEO, schema markup, and geo-targeted authority foundations that consistently place our clients at the top of local search and Google 3-Pack Map results.',
  },
  {
    category: 'Pricing',
    question: 'How much do your digital marketing and web design services cost?',
    answer:
      'We customize scopes according to your specific business requirements and growth goals. Contact our team at +91 95777 73167 or karadudyog@gmail.com for a transparent proposal.',
  },
  {
    category: 'Process',
    question: 'What is the step-by-step process when working with Karad Udyog?',
    answer:
      'Our process follows 5 refined steps: 01 Discover (Audit & Objectives), 02 Strategize (Architecture & Plan), 03 Create (Design & Code), 04 Launch (Deployment & Campaign Execution), and 05 Optimize (Analytics & ROAS Scaling).',
  },
]

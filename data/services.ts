export interface Service {
  number: string
  title: string
  slug: string
  category: 'Marketing' | 'Development' | 'Design' | 'Creative'
  shortDescription: string
  description: string
  heroTagline: string
  metaTitle: string
  metaDescription: string
  targetKeywords: string[]
  capabilities: string[]
  benefits: string[]
  process: { step: string; title: string; description: string }[]
  faqs: { question: string; answer: string }[]
}

export const services: Service[] = [
  {
    number: '01',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    category: 'Marketing',
    shortDescription:
      'Multi-channel strategic marketing systems engineered to acquire qualified leads and accelerate revenue.',
    description:
      'We architect and execute performance-driven digital marketing campaigns across channels. By integrating paid acquisition, organic search, conversion rate optimization, and analytics, we ensure every rupee invested delivers measurable commercial impact.',
    heroTagline: 'STRATEGIC CAMPAIGNS. MEASURABLE GROWTH.',
    metaTitle: 'Digital Marketing Agency in Karad | Performance Marketing | Karad Udyog',
    metaDescription:
      'Leading digital marketing agency in Karad, Satara. We build data-driven marketing campaigns, paid ad systems, and lead generation funnels for growing businesses.',
    targetKeywords: [
      'Digital Marketing Agency in Karad',
      'Digital Marketing Company in Karad',
      'Digital Marketing Services in Satara',
      'Performance Marketing Agency Maharashtra',
    ],
    capabilities: [
      'Omnichannel Campaign Strategy',
      'Audience Segmentation & Persona Mapping',
      'Conversion Funnel Engineering',
      'Multi-Touch Attribution & Analytics',
      'Lead Generation & Nurturing Workflows',
      'Return on Ad Spend (ROAS) Optimization',
    ],
    benefits: [
      'Predictable flow of qualified business leads',
      'Complete transparency on acquisition metrics',
      'Maximized return on marketing investments',
      'Strong competitive positioning in local & regional markets',
    ],
    process: [
      { step: '01', title: 'Market Audit', description: 'Comprehensive audit of your brand, competitors, target audience, and current digital footprint.' },
      { step: '02', title: 'Funnel Architecture', description: 'Designing tailored customer acquisition journeys across search, social, and direct channels.' },
      { step: '03', title: 'Execution & Scale', description: 'Deploying high-converting ad copy, landing pages, and automated workflows with daily monitoring.' },
    ],
    faqs: [
      { question: 'What makes Karad Udyog different from traditional marketing agencies?', answer: 'We combine high-end creative craftsmanship with rigorous analytics. We do not focus on vanity likes; we optimize for real customer acquisition and ROI.' },
      { question: 'How long before we see results from digital marketing?', answer: 'Paid campaigns (Google Ads/Meta Ads) generate traffic and leads within 48–72 hours, while organic SEO builds durable long-term authority over 3–6 months.' },
    ],
  },
  {
    number: '02',
    title: 'Search Engine Optimization',
    slug: 'seo',
    category: 'Marketing',
    shortDescription:
      'Command competitive search rankings on Google with advanced technical and content SEO.',
    description:
      'Our SEO engineering elevates your business to the top of Google search results. We combine deep technical site optimization, high-intent keyword targeting, editorial content creation, and authoritative link acquisition to dominate search engine results pages.',
    heroTagline: 'DOMINATE SEARCH. CAPTURE INTENT.',
    metaTitle: 'SEO Services in Karad | Search Engine Optimization Agency | Karad Udyog',
    metaDescription:
      'Top SEO agency in Karad, Satara. Technical SEO, keyword strategy, on-page optimization, and authoritative backlink building to rank #1 on Google.',
    targetKeywords: [
      'SEO Agency in Karad',
      'SEO Services in Karad',
      'SEO Company in Satara',
      'Search Engine Optimization Karad',
    ],
    capabilities: [
      'Technical SEO Audit & Schema Markup',
      'High-Intent Keyword Architecture',
      'On-Page HTML & Content Optimization',
      'Competitor Search Footprint Analysis',
      'White-Hat Backlink & Authority Building',
      'Core Web Vitals & Speed Optimization',
    ],
    benefits: [
      'Consistent organic traffic without recurring ad spend',
      'High-intent prospects looking specifically for your services',
      'Long-term search domain authority and brand credibility',
    ],
    process: [
      { step: '01', title: 'Technical Audit', description: 'Rigorous analysis of crawl errors, page speed, site structure, and search indexing.' },
      { step: '02', title: 'Keyword Mapping', description: 'Identifying high-commercial-intent search queries used by customers in your target region.' },
      { step: '03', title: 'Optimization & Authority', description: 'Optimizing technical infrastructure, publishing high-value content, and building quality authority.' },
    ],
    faqs: [
      { question: 'How does SEO help my business in Karad?', answer: 'When potential customers search for services in Karad or Maharashtra on Google, strong SEO ensures your business appears at the top before competitors.' },
      { question: 'Do you provide monthly SEO tracking reports?', answer: 'Yes, we provide detailed monthly reports tracking keyword positions, organic impression growth, traffic quality, and conversion events.' },
    ],
  },
  {
    number: '03',
    title: 'Local SEO & Google Maps',
    slug: 'local-seo',
    category: 'Marketing',
    shortDescription:
      'Dominant local map pack visibility for customers searching near Banavadi, Karad & Satara.',
    description:
      'Capture local footfall and local phone inquiries. We optimize your local map listings, geo-targeted search content, and customer review profiles to ensure your business appears in the Google 3-Pack whenever local buyers search.',
    heroTagline: 'LOCAL VISIBILITY. DIRECT FOOTFALL.',
    metaTitle: 'Local SEO Services in Karad | Google Map Ranking | Karad Udyog',
    metaDescription:
      'Specialized Local SEO agency in Karad. Rank in Google 3-Pack, optimize Google Business Profile, and capture local customer calls and visits across Satara.',
    targetKeywords: [
      'Local SEO Services in Karad',
      'Google Map Ranking Karad',
      'Local SEO Company Satara',
      'Google Business Profile Optimization Karad',
    ],
    capabilities: [
      'Google 3-Pack Map Ranking Strategy',
      'Geo-Targeted Keyword Optimization',
      'Local Citation & NAP Synchronization',
      'Customer Review Acquisition Management',
      'Local Micro-Site & Location Page Architecture',
      'Google Maps Call Tracking & Analytics',
    ],
    benefits: [
      'Direct phone calls and store visits from local customers',
      'Dominant presence in regional Google search results',
      'Enhanced trust through structured local reviews and map pins',
    ],
    process: [
      { step: '01', title: 'NAP Synchronization', description: 'Auditing Name, Address, and Phone consistency across all digital directories.' },
      { step: '02', title: 'Geo-Optimization', description: 'Optimizing site structure and map listings for Karad, Satara, and neighboring markets.' },
      { step: '03', title: 'Review Growth', description: 'Establishing systematic review acquisition to boost local algorithm trust factors.' },
    ],
    faqs: [
      { question: 'Why is Local SEO crucial for Karad businesses?', answer: 'Over 80% of local service inquiries happen on mobile Google searches with local intent. Local SEO puts your business directly in front of nearby buyers.' },
      { question: 'Can you help if my address is in Banavadi or outskirts of Karad?', answer: 'Absolutely. We structure geographic service area signals so Google displays your business across all target surrounding localities.' },
    ],
  },
  {
    number: '04',
    title: 'Google Ads (PPC)',
    slug: 'google-ads',
    category: 'Marketing',
    shortDescription:
      'High-converting Google Search, Display & YouTube campaigns focused on maximum ROI.',
    description:
      'Instant search engine placement for your highest-value services. We structure hyper-targeted Google Search, Performance Max, Display, and Video campaigns engineered to capture immediate customer demand with zero wasted budget.',
    heroTagline: 'INSTANT REVENUE. PRECISION TARGETING.',
    metaTitle: 'Google Ads Agency in Karad | PPC Campaign Management | Karad Udyog',
    metaDescription:
      'Premier Google Ads agency in Karad. Expert Google Search, Display & Performance Max PPC campaigns delivering high-ROI leads for businesses in Maharashtra.',
    targetKeywords: [
      'Google Ads Agency in Karad',
      'PPC Company in Karad',
      'Google Advertising Services Satara',
      'Pay Per Click Ads Karad',
    ],
    capabilities: [
      'Google Search Ad Campaign Setup',
      'Performance Max & Shopping Campaigns',
      'Negative Keyword Budget Protection',
      'High-Converting Ad Copy Writing',
      'Custom Landing Page Optimization',
      'Real-Time Conversion Tracking Setup',
    ],
    benefits: [
      'Immediate top-of-page search exposure within hours',
      'Complete budget control with strict CPA targets',
      'High conversion rates from customers with immediate purchase intent',
    ],
    process: [
      { step: '01', title: 'Keyword Intent Analysis', description: 'Isolating high-converting commercial keywords while filtering out costly negative terms.' },
      { step: '02', title: 'Ad & Page Creation', description: 'Writing compelling ad copy and designing high-converting landing pages.' },
      { step: '03', title: 'Daily Bid Management', description: 'Monitoring quality scores, adjusting bids, and scaling top-performing ad groups.' },
    ],
    faqs: [
      { question: 'How much should I spend on Google Ads?', answer: 'We tailor budgets based on your industry competition and revenue targets, starting with modest test budgets to prove ROAS before scaling.' },
      { question: 'How do you prevent money waste on irrelevant clicks?', answer: 'We implement extensive negative keyword lists and strict match types to ensure your ads only trigger for qualified buyer queries.' },
    ],
  },
  {
    number: '05',
    title: 'Meta Ads (Facebook & Instagram)',
    slug: 'meta-ads',
    category: 'Marketing',
    shortDescription:
      'Captivating visual social ad campaigns across Facebook and Instagram to generate active buyers.',
    description:
      'Turn social media scrolling into revenue. We create scroll-stopping visual creatives, video ads, and retargeting funnels on Meta platforms to capture market attention, generate inquiries, and scale direct sales.',
    heroTagline: 'STOP THE SCROLL. GENERATE DEMAND.',
    metaTitle: 'Meta Ads Agency in Karad | Facebook & Instagram Ads | Karad Udyog',
    metaDescription:
      'Leading Meta Ads agency in Karad. High-converting Facebook & Instagram ad campaigns, custom audience targeting, and retargeting funnels for business growth.',
    targetKeywords: [
      'Meta Ads Agency in Karad',
      'Facebook Ads Agency Karad',
      'Instagram Ads Agency Satara',
      'Social Media Advertising Karad',
    ],
    capabilities: [
      'Facebook & Instagram Campaign Strategy',
      'Custom & Lookalike Audience Modeling',
      'High-Converting Video & Image Ad Creatives',
      'Lead Form & Instant Experience Ads',
      'Meta Pixel & Conversions API Tracking',
      'Dynamic Retargeting Funnels',
    ],
    benefits: [
      'Massive reach across targeted demographics in Maharashtra',
      'Highly visual presentation of your products and services',
      'Retargeting to convert interested visitors into paying clients',
    ],
    process: [
      { step: '01', title: 'Audience Profiling', description: 'Defining ideal customer demographics, interests, behaviors, and geo-locations.' },
      { step: '02', title: 'Creative Production', description: 'Crafting high-impact graphic design and short-form video ad creatives.' },
      { step: '03', title: 'A/B Testing & Scaling', description: 'Testing multiple creatives and hooks, reallocating budget to top performers.' },
    ],
    faqs: [
      { question: 'Are Facebook and Instagram ads effective for B2B or local services?', answer: 'Yes. With precise demographic, location, and interest targeting combined with lead generation forms, Meta Ads are highly effective for all business types.' },
      { question: 'Do you create the ad graphics and videos for us?', answer: 'Yes, our in-house creative team produces all graphic artwork, copywriting, and video edits required for the campaigns.' },
    ],
  },
  {
    number: '06',
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    category: 'Marketing',
    shortDescription:
      'Consistent, brand-building social presence across Instagram, Facebook, and LinkedIn.',
    description:
      'Build a strong, respected brand presence. We manage end-to-end social media channels with tailored content calendars, high-grade visual graphics, video reels, and active audience engagement.',
    heroTagline: 'ELEGANT PRESENCE. ENGAGED AUDIENCE.',
    metaTitle: 'Social Media Marketing Agency in Karad | Social Management | Karad Udyog',
    metaDescription:
      'Professional social media marketing agency in Karad, Satara. Full management of Instagram, Facebook & LinkedIn content, strategy, graphics, and growth.',
    targetKeywords: [
      'Social Media Marketing Agency in Karad',
      'Social Media Management Karad',
      'Instagram Marketing Agency Satara',
      'Social Media Content Creator Karad',
    ],
    capabilities: [
      'Strategic Social Content Calendars',
      'Custom Graphic & Video Reel Production',
      'Brand Tone & Copywriting Voice',
      'Community Management & Engagement',
      'Influencer & Local Brand Collaborations',
      'Monthly Impression & Growth Analytics',
    ],
    benefits: [
      'Polished, professional brand image that inspires customer trust',
      'Consistent publication without taking up your internal staff time',
      'Growing organic community of loyal customers and brand advocates',
    ],
    process: [
      { step: '01', title: 'Brand Tone Guide', description: 'Defining visual style, typography rules, color palettes, and messaging tone.' },
      { step: '02', title: 'Content Batching', description: 'Creating monthly content calendars, graphic posts, carousels, and video reels in advance.' },
      { step: '03', title: 'Scheduling & Growth', description: 'Automated publishing, proactive comment management, and strategic hashtag positioning.' },
    ],
    faqs: [
      { question: 'Which social media platforms should my business focus on?', answer: 'We analyze your customer demographic to recommend the optimal mix — typically Instagram and Facebook for consumer brands, LinkedIn for B2B.' },
      { question: 'Can we review the posts before they go live?', answer: 'Yes, we provide full monthly content calendars for your review and approval prior to scheduling.' },
    ],
  },
  {
    number: '07',
    title: 'Website Development',
    slug: 'website-development',
    category: 'Development',
    shortDescription:
      'Fast, modern, custom-engineered Next.js websites built for high conversion and speed.',
    description:
      'We design and engineer high-performance web applications and corporate websites. Built using modern frameworks like Next.js and React, our sites load instantly, render flawlessly on mobile, and are engineered for optimal SEO.',
    heroTagline: 'BESPOKE CODE. UNMATCHED SPEED.',
    metaTitle: 'Website Development Company in Karad | Custom Web Design | Karad Udyog',
    metaDescription:
      'Top web development company in Karad, Satara. Custom Next.js & React website design, e-commerce, fast performance, and mobile responsive solutions.',
    targetKeywords: [
      'Website Development Company in Karad',
      'Web Development Company in Karad',
      'Web Design Company Satara',
      'Next.js Web Developer Karad',
    ],
    capabilities: [
      'Custom Next.js & React Web Applications',
      'Mobile-First Responsive Architecture',
      'Ultra-Fast Load Speeds & Core Web Vitals',
      'E-Commerce & Payment Gateway Integration',
      'Headless CMS & Content Management Integration',
      'Technical SEO & Structured Data Built-In',
    ],
    benefits: [
      'Instant page loads that keep bounce rates minimal',
      'Custom designs tailored strictly to your brand identity',
      'Future-proof codebase with high security and reliability',
    ],
    process: [
      { step: '01', title: 'Architecture & UX', description: 'Mapping page wireframes, user journeys, content structure, and technical requirements.' },
      { step: '02', title: 'Custom Engineering', description: 'Building custom React components, responsive layouts, and smooth animations.' },
      { step: '03', title: 'Testing & Launch', description: 'Rigorous cross-browser testing, SEO audit, security checks, and production deployment.' },
    ],
    faqs: [
      { question: 'Why choose custom Next.js development over generic templates?', answer: 'Custom Next.js builds deliver unmatched loading speed, superior Google SEO rankings, enterprise-grade security, and complete design freedom.' },
      { question: 'Will my website work properly on mobile devices?', answer: 'Yes, all our websites are engineered mobile-first to ensure perfect presentation across smartphones, tablets, and desktops.' },
    ],
  },
  {
    number: '08',
    title: 'Web Design & UI/UX',
    slug: 'web-design',
    category: 'Development',
    shortDescription:
      'Luxury editorial user interface design that elevates brand perception and guides visitors.',
    description:
      'Visual web experiences that command respect. We craft editorial layout grids, exquisite typography hierarchies, and intuitive user interfaces that communicate prestige while driving user action.',
    heroTagline: 'LUXURY AESTHETICS. SEAMLESS UX.',
    metaTitle: 'Web Design Agency in Karad | UI/UX Studio | Karad Udyog',
    metaDescription:
      'Bespoke web design and UI/UX studio in Karad, Satara. We design luxury editorial website interfaces that captivate audiences and increase conversions.',
    targetKeywords: [
      'Web Design Agency in Karad',
      'Web Design Services in Karad',
      'UI UX Designer Satara',
      'Luxury Web Design Studio Maharashtra',
    ],
    capabilities: [
      'High-End Editorial Web Interface Design',
      'User Experience (UX) Journey Mapping',
      'Interactive Design Prototypes',
      'Typography & Micro-Interaction Systems',
      'Mobile App UI/UX Interface Design',
      'Design System Specification & Tokens',
    ],
    benefits: [
      'Immediate luxury brand perception that justifies premium pricing',
      'Clear visual hierarchy that naturally guides user decision-making',
      'Unique visual identity that sets you far apart from local competitors',
    ],
    process: [
      { step: '01', title: 'Visual Research', description: 'Analyzing mood boards, luxury typography, editorial grids, and visual benchmarks.' },
      { step: '02', title: 'Figma UI Prototyping', description: 'Designing interactive desktop and mobile screen layouts for client review.' },
      { step: '03', title: 'Design Handoff', description: 'Creating complete design systems and component specifications for seamless engineering.' },
    ],
    faqs: [
      { question: 'Can you redesign an existing website that looks outdated?', answer: 'Yes, we specialize in complete visual overhauls, transforming dated corporate sites into sleek, modern digital experiences.' },
      { question: 'Do you involve clients during the design process?', answer: 'Yes, we present initial design concepts and iterate closely based on your feedback before final code development.' },
    ],
  },
  {
    number: '09',
    title: 'Brand Strategy & Identity',
    slug: 'branding',
    category: 'Design',
    shortDescription:
      'Cohesive visual systems and strategic positioning that turn businesses into iconic brands.',
    description:
      'A great brand is not just a logo — it is a complete visual language. We develop brand strategies, distinctive mark assets, color systems, and comprehensive brand guidelines that define your presence.',
    heroTagline: 'DISTINCTIVE POSITIONING. ENDURING VALUE.',
    metaTitle: 'Branding Agency in Karad | Brand Identity Studio | Karad Udyog',
    metaDescription:
      'Leading branding agency in Karad, Satara. Strategic brand positioning, visual identity design, logo suites, and corporate brand guidelines.',
    targetKeywords: [
      'Branding Agency in Karad',
      'Brand Identity Design Karad',
      'Branding Studio Satara',
      'Corporate Branding Maharashtra',
    ],
    capabilities: [
      'Strategic Brand Positioning & Messaging',
      'Complete Visual Identity Systems',
      'Brand Color Palette & Typography Rules',
      'Corporate Stationery & Package Design',
      'Comprehensive Brand Style Guidelines',
      'Brand Refresh & Rebranding Strategy',
    ],
    benefits: [
      'Strong emotional connection and loyalty with your target audience',
      'Higher perceived value allowing premium pricing for your offerings',
      'Consistency across all print, digital, and offline brand touchpoints',
    ],
    process: [
      { step: '01', title: 'Discovery & Positioning', description: 'Uncovering your core business value, target buyer psychology, and brand thesis.' },
      { step: '02', title: 'Identity Exploration', description: 'Creating distinct visual design directions including marks, typography, and palettes.' },
      { step: '03', title: 'Guideline Delivery', description: 'Packaging comprehensive brand books and digital asset suites for implementation.' },
    ],
    faqs: [
      { question: 'What does a complete brand identity package include?', answer: 'It includes core logo variants, color codes, typography hierarchy, usage guidelines, stationery design, and digital asset templates.' },
      { question: 'How long does a branding project take?', answer: 'A comprehensive branding project typically takes 3 to 5 weeks from initial discovery to final asset delivery.' },
    ],
  },
  {
    number: '10',
    title: 'Logo Design & Typography',
    slug: 'logo-design',
    category: 'Design',
    shortDescription:
      'Timeless bespoke mark designs and custom typographic signatures that define your brand.',
    description:
      'Your logo is your primary mark of authenticity. We design minimalist, luxurious vector marks and bespoke wordmarks that capture the essence of your business in a single visual symbol.',
    heroTagline: 'BESPOKE MARKS. TIMELESS IDENTITY.',
    metaTitle: 'Logo Design Company in Karad | Bespoke Mark Design | Karad Udyog',
    metaDescription:
      'Professional logo design company in Karad. Custom vector mark design, monogram design, wordmarks, and vector asset packages for businesses.',
    targetKeywords: [
      'Logo Design Company in Karad',
      'Logo Designer Karad',
      'Logo Design Services Satara',
      'Bespoke Mark Design Maharashtra',
    ],
    capabilities: [
      'Custom Vector Mark & Icon Design',
      'Bespoke Wordmarks & Monograms',
      'Vector Asset Suites (SVG, EPS, PNG, PDF)',
      'Dark & Light Mode Logo Variations',
      'Social Media Profile Avatar Sets',
      'Favicon & App Icon Specifications',
    ],
    benefits: [
      'Memorable, professional mark that makes a lasting first impression',
      'Scalable vector formats that look sharp on business cards or billboards',
      'Full legal copyright ownership of your custom mark',
    ],
    process: [
      { step: '01', title: 'Concept Sketches', description: 'Exploring multiple hand-drawn conceptual angles and geometric mark ideas.' },
      { step: '02', title: 'Vector Refinement', description: 'Precision vector grid alignment, optical balance, and font pairing.' },
      { step: '03', title: 'Export Package', description: 'Delivering full print and digital vector formats in all required color variations.' },
    ],
    faqs: [
      { question: 'Will I get editable vector files for printing?', answer: 'Yes, we provide master vector files (.AI, .SVG, .EPS) suitable for all print and digital applications.' },
      { question: 'How many logo concepts do you present?', answer: 'We present 3 to 4 distinctly unique design directions for your selection and refinement.' },
    ],
  },
  {
    number: '11',
    title: 'Graphic Design',
    slug: 'graphic-design',
    category: 'Creative',
    shortDescription:
      'High-impact marketing collateral, print designs, banners, and digital graphics.',
    description:
      'Clean, editorial visual design for every channel. From marketing brochures and outdoor banners to digital graphics, presentations, and product packaging, we ensure every piece reflects high craft.',
    heroTagline: 'EDITORIAL PRECISION. SHARP CREATIVE.',
    metaTitle: 'Graphic Design Services in Karad | Creative Design | Karad Udyog',
    metaDescription:
      'Expert graphic design services in Karad, Satara. Marketing collateral, brochures, banners, social media artwork, and packaging design.',
    targetKeywords: [
      'Graphic Design Services in Karad',
      'Graphic Designer in Karad',
      'Creative Design Agency Satara',
      'Brochure & Banner Design Karad',
    ],
    capabilities: [
      'Marketing Collateral & Brochure Design',
      'Print & Outdoor Advertising Banners',
      'Social Media Display Creatives',
      'Corporate Pitch Deck & Presentation Design',
      'Product Packaging & Label Design',
      'Infographics & Visual Data Systems',
    ],
    benefits: [
      'Professional visual collateral that elevates sales presentations',
      'High-resolution print artwork delivered ready for production',
      'Fast turnaround times for ongoing promotional creative needs',
    ],
    process: [
      { step: '01', title: 'Creative Brief', description: 'Understanding dimensions, target audience, messaging priority, and print specs.' },
      { step: '02', title: 'Drafting & Layout', description: 'Applying grid alignment, typographic hierarchy, and visual balance.' },
      { step: '03', title: 'Pre-Press Prep', description: 'Delivering print-ready CMYK PDFs with bleed marks and digital RGB exports.' },
    ],
    faqs: [
      { question: 'Do you handle print production as well as design?', answer: 'We provide print-ready press files and can coordinate directly with local printers in Karad to ensure quality.' },
      { question: 'Can you design monthly graphics for our promotional events?', answer: 'Yes, we offer retainer packages for ongoing monthly design support.' },
    ],
  },
  {
    number: '12',
    title: 'Video Editing & Reels',
    slug: 'video-editing',
    category: 'Creative',
    shortDescription:
      'Dynamic short-form video editing, Reels, YouTube content, and commercial post-production.',
    description:
      'Video is the dominant medium on modern web and social platforms. We edit raw footage into engaging Instagram Reels, YouTube videos, product demos, and promotional ads with captions and motion graphics.',
    heroTagline: 'CINEMATIC CUTS. ENGAGING EDITS.',
    metaTitle: 'Video Editing Services in Karad | Reels Production | Karad Udyog',
    metaDescription:
      'Professional video editing services in Karad. Instagram Reels, YouTube editing, motion graphics, corporate video post-production, and ad edits.',
    targetKeywords: [
      'Video Editing Services in Karad',
      'Video Editor in Karad',
      'Instagram Reels Production Satara',
      'YouTube Video Editing Maharashtra',
    ],
    capabilities: [
      'Instagram Reels & YouTube Shorts Production',
      'Corporate & Promotional Video Editing',
      'Motion Graphics & Lower-Third Animations',
      'Captions & Subtitle Styling Integration',
      'Color Grading & Audio Enhancement',
      'Multi-Format Social Media Export',
    ],
    benefits: [
      'Significantly higher reach and engagement on Instagram & YouTube',
      'Professional polished video quality that builds brand authority',
      'Optimized video formats ready for instant multi-platform posting',
    ],
    process: [
      { step: '01', title: 'Footage Ingestion', description: 'Reviewing raw clips, selecting strong hooks, and structuring the narrative cut.' },
      { step: '02', title: 'Pacing & Graphics', description: 'Cutting to music beat, adding captions, sound effects, and motion graphics.' },
      { step: '03', title: 'Color & Export', description: 'Applying color correction and exporting targeted aspect ratios (9:16, 16:9, 1:1).' },
    ],
    faqs: [
      { question: 'What footage do I need to provide for video editing?', answer: 'You can send raw phone or camera video clips via Google Drive/WhatsApp, and our team will handle editing, sound, and graphics.' },
      { question: 'How quickly can you deliver edited Reels?', answer: 'Standard turnaround for short-form Reels is 24 to 48 hours.' },
    ],
  },
  {
    number: '13',
    title: 'Content Marketing & Writing',
    slug: 'content-marketing',
    category: 'Creative',
    shortDescription:
      'High-authority editorial copywriting, blog strategy, and brand narrative systems.',
    description:
      'Content that establishes industry authority. We write compelling web copy, SEO articles, brand stories, and email newsletters that educate your audience and turn casual readers into loyal buyers.',
    heroTagline: 'AUTHORITATIVE COPY. PERSUASIVE STORIES.',
    metaTitle: 'Content Marketing Agency in Karad | Copywriting | Karad Udyog',
    metaDescription:
      'Leading content marketing agency in Karad. Expert SEO copywriting, blog writing, website copy, and strategic brand narrative creation.',
    targetKeywords: [
      'Content Marketing Agency in Karad',
      'Copywriter in Karad',
      'Content Writing Services Satara',
      'SEO Blog Writer Maharashtra',
    ],
    capabilities: [
      'Website & Landing Page Copywriting',
      'SEO-Optimized Article & Blog Writing',
      'Brand Storytelling & Mission Statements',
      'Email Newsletter & Nurture Sequence Copy',
      'Social Media Post Copywriting',
      'Case Study & Whitepaper Writing',
    ],
    benefits: [
      'Clear, persuasive messaging that directly addresses customer objections',
      'Stronger search engine rankings through authoritative content',
      'Consistent brand voice across all marketing channels',
    ],
    process: [
      { step: '01', title: 'Message Architecture', description: 'Mapping core customer pain points, value propositions, and call-to-action hooks.' },
      { step: '02', title: 'Drafting', description: 'Writing research-backed, engaging copy tailored to search intent and human readers.' },
      { step: '03', title: 'Polish & Review', description: 'Refining typography rhythm, readability metrics, and final client approval.' },
    ],
    faqs: [
      { question: 'Is the content written specifically for our business?', answer: 'Yes, all copy is 100% custom-crafted based on thorough research of your industry and target customers.' },
      { question: 'Will the blog posts help our Google rankings?', answer: 'Yes, all articles are structured with proper SEO headings, keyword placement, and search intent alignment.' },
    ],
  },
  {
    number: '14',
    title: 'WhatsApp Marketing',
    slug: 'whatsapp-marketing',
    category: 'Marketing',
    shortDescription:
      'Direct broadcast campaigns, automated customer support, and catalog messaging on WhatsApp.',
    description:
      'Connect directly with customers on the channel they check most. We design targeted WhatsApp broadcast campaigns, automated catalog showcases, and customer engagement sequences with high open rates.',
    heroTagline: 'DIRECT REACH. HIGH CONVERSION.',
    metaTitle: 'WhatsApp Marketing Agency in Karad | Direct Messaging | Karad Udyog',
    metaDescription:
      'Specialized WhatsApp marketing agency in Karad. Broadcast campaigns, WhatsApp Business API automation, product catalogs, and lead response tools.',
    targetKeywords: [
      'WhatsApp Marketing Agency in Karad',
      'WhatsApp Business Automation Karad',
      'WhatsApp Promotion Satara',
      'Direct Messaging Campaign Maharashtra',
    ],
    capabilities: [
      'WhatsApp Business API Setup & Verification',
      'Targeted Audience Broadcast Campaigns',
      'Automated Greeting & FAQ Bot Sequences',
      'Interactive Product Catalog Integration',
      'Opt-In Contact List Growth Systems',
      'Delivery & Click Analytics Reporting',
    ],
    benefits: [
      '90%+ message open rates within minutes of dispatch',
      'Direct line of communication with local customers in Karad',
      'Automated responses to frequent inquiries even outside business hours',
    ],
    process: [
      { step: '01', title: 'Account Setup', description: 'Configuring WhatsApp Business profile, catalog items, and automated responses.' },
      { step: '02', title: 'Campaign Creation', description: 'Designing broadcast graphics, promotional copy, and call-to-action buttons.' },
      { step: '03', title: 'Dispatch & Track', description: 'Executing compliant list broadcasts and analyzing response metrics.' },
    ],
    faqs: [
      { question: 'Is WhatsApp marketing spam-compliant?', answer: 'Yes, we follow strict opt-in guidelines and official WhatsApp Business practices to protect your number reputation.' },
      { question: 'Can customers place orders through WhatsApp?', answer: 'Yes, we can link your product catalog directly to WhatsApp so clients can inquire and order seamlessly.' },
    ],
  },
  {
    number: '15',
    title: 'Google Business Profile',
    slug: 'google-business-profile',
    category: 'Marketing',
    shortDescription:
      'Complete optimization and management of your Google Business Profile for local dominance.',
    description:
      'Your Google Business Profile is often your most valuable digital storefront. We optimize category listings, services, geotagged photos, posts, and review responses to rank your profile at the top of local searches.',
    heroTagline: 'TOP GOOGLE PROFILE. MAXIMUM CALLS.',
    metaTitle: 'Google Business Profile Optimization Karad | GMB Agency | Karad Udyog',
    metaDescription:
      'Expert Google Business Profile management in Karad. Higher map rankings, profile optimization, post updates, and review management for local businesses.',
    targetKeywords: [
      'Google Business Profile Optimization Karad',
      'GMB Optimization Agency Satara',
      'Google My Business Management Karad',
      'Local Listing Optimization Maharashtra',
    ],
    capabilities: [
      'Full Profile Audit & Category Alignment',
      'Geotagged Photo & Video Upload Management',
      'Service & Product Catalog Listing Integration',
      'Weekly Promotional Updates & GMB Posts',
      'Strategic Review Response & Reputation Management',
      'Profile Suspensions & Verification Support',
    ],
    benefits: [
      'Immediate increase in direct phone calls and direction requests',
      'Dominant presence on Google Maps when clients search near Karad',
      'Professional profile management without taking up your internal time',
    ],
    process: [
      { step: '01', title: 'Profile Claim & Audit', description: 'Verifying ownership and auditing category alignment, business hours, and NAP.' },
      { step: '02', title: 'Full Optimization', description: 'Adding high-res geotagged photography, complete service lists, and business bio.' },
      { step: '03', title: 'Active Management', description: 'Publishing weekly posts, monitoring Q&A, and maintaining active profile updates.' },
    ],
    faqs: [
      { question: 'How quickly does Google Business Profile optimization show results?', answer: 'Initial ranking improvements often occur within 2 to 4 weeks of full optimization and photo additions.' },
      { question: 'Can you help recover a suspended Google profile?', answer: 'Yes, we assist in correcting policy non-compliance issues and submitting reinstatement appeals to Google.' },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

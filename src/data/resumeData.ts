import { ExperienceItem, EducationItem, SkillCategory } from '@/types';

export const experiencesData: ExperienceItem[] = [
  {
    role: 'Communications Lead',
    organization: 'South Saharan Social Development Organisation (SSDO)',
    period: '2022 - Present',
    location: 'Nigeria',
    description: 'Leading strategic communications, brand stewardship, donor reporting, and multimedia storytelling across all regional civic and development interventions.',
    achievements: [
      'Spearheaded communications for the Sister Guardian Initiative across 38+ rural communities, resulting in a 400% increase in national media visibility.',
      'Authored and designed high-level donor reports, policy briefs, and annual publications for international partners including Ford Foundation and Open Society.',
      'Managed all digital properties, growing online community engagement by 320% and establishing a standardized multimedia production pipeline.',
      'Trained and mentored 50+ grassroots female advocates in mobile storytelling and human rights documentation.'
    ]
  },
  {
    role: 'Content & Brand Manager',
    organization: 'Moneywise Doctor (UK)',
    period: '2021 - Present',
    location: 'Remote / London, UK',
    description: 'Directing global content strategy, SEO architecture, brand positioning, and educational product launches for a UK fintech/healthtech advisory platform.',
    achievements: [
      'Grew organic search traffic by 280% through deep-funnel SEO articles and financial wellness guides tailored to NHS physicians.',
      'Engineered a weekly email newsletter series maintaining an industry-leading average open rate of 42.8% across 15,000+ active subscribers.',
      'Supervised digital product launches, webinar series, and podcast post-production generating over 4,500 qualified registrations.',
      'Refined the brand identity guidelines, visual assets, and cross-channel social media tone of voice.'
    ]
  },
  {
    role: 'Communications Consultant',
    organization: 'Various Non-profits & International Organisations',
    period: '2018 - Present',
    location: 'Nigeria & International',
    description: 'Providing bespoke advisory services on advocacy campaign development, brand rebranding, media training, and crisis communications.',
    achievements: [
      'Designed and executed digital advocacy campaigns for civic governance and health sector reform coalitions reaching 2.5M+ digital impressions.',
      'Consulted for luxury hospitality brands including Sunches Villa Hotel, increasing direct booking conversions by 65% through visual rebranding.',
      'Authored high-impact op-eds and media statements featured in top national dailies and international development portals.',
      'Delivered interactive communication masterclasses for over 200 non-profit professionals and civil society leaders.'
    ]
  },
  {
    role: 'Social Media & Publicity Manager',
    organization: 'DIGC Garki',
    period: '2015 - Present',
    location: 'Abuja, Nigeria',
    description: 'Managing multi-channel digital publicity, weekly live broadcast communications, and large-scale event media operations.',
    achievements: [
      'Coordinated weekly live streaming operations reaching an active global online audience of over 25,000 concurrent viewers.',
      'Built and led a dynamic 20-person media volunteer team covering photography, video editing, social live-tweeting, and graphics.',
      'Produced over 300 video highlight packages, testimonial reels, and event documentaries with consistently high viral engagement.'
    ]
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'Master of Laws (LL.M)',
    institution: 'Faculty of Law, Prestigious University',
    year: 'Postgraduate Degree',
    details: 'Advanced specialization in International Law, Governance, Human Rights, and Regulatory Frameworks. Applied legal intellect to public policy communications.'
  },
  {
    degree: 'Barrister-at-Law (B.L)',
    institution: 'Nigerian Law School',
    year: 'Professional Bar Certification',
    details: 'Admitted to the Nigerian Bar as a Solicitor and Advocate of the Supreme Court of Nigeria. Trained in high-stakes advocacy, legal drafting, and institutional negotiation.'
  },
  {
    degree: 'Bachelor of Laws (LL.B)',
    institution: 'Faculty of Law',
    year: 'Undergraduate Degree',
    details: 'Graduated with honors. Key focus on Jurisprudence, Constitutional Law, Media & Communication Law, and Public Advocacy.'
  }
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: 'Strategic & Development Communications',
    skills: [
      { name: 'Strategic Communications Blueprinting', level: 95 },
      { name: 'Advocacy & Public Policy Framing', level: 92 },
      { name: 'Donor Reporting & Knowledge Products', level: 90 },
      { name: 'Stakeholder & Community Engagement', level: 94 },
      { name: 'Crisis & Reputation Management', level: 88 }
    ]
  },
  {
    category: 'Digital, SEO & Content Management',
    skills: [
      { name: 'Content Strategy & Editorial Calendars', level: 96 },
      { name: 'Search Engine Optimization (SEO)', level: 88 },
      { name: 'Email Marketing & Newsletter Architecture', level: 92 },
      { name: 'Social Media Growth & Community Management', level: 95 },
      { name: 'Analytics, Data Tracking & KPIs', level: 86 }
    ]
  },
  {
    category: 'Brand & Multimedia Production',
    skills: [
      { name: 'Brand Identity & Visual Direction', level: 90 },
      { name: 'Documentary & Field Photography', level: 92 },
      { name: 'Video Directing, Scripting & Editing', level: 88 },
      { name: 'Graphic Design & Presentation Decks', level: 89 },
      { name: 'Copywriting & Thought Leadership Op-Eds', level: 96 }
    ]
  }
];

export const toolsAndPlatforms = [
  { name: 'Google Analytics', category: 'Analytics', icon: 'BarChart3' },
  { name: 'Meta Business Suite', category: 'Social & Ads', icon: 'Share2' },
  { name: 'WordPress & Webflow', category: 'CMS & Web', icon: 'Globe' },
  { name: 'Canva Pro', category: 'Design', icon: 'Palette' },
  { name: 'Adobe Premiere & Lightroom', category: 'Creative Suite', icon: 'Film' },
  { name: 'Mailchimp & Substack', category: 'Email / Newsletter', icon: 'Mail' },
  { name: 'Notion & Asana', category: 'Project Management', icon: 'Layers' },
  { name: 'Buffer & Hootsuite', category: 'Social Automation', icon: 'Zap' },
  { name: 'Figma', category: 'UI / Wireframing', icon: 'Layout' },
  { name: 'Microsoft 365 / Google Workspace', category: 'Productivity', icon: 'FileText' }
];

export const clientLogos = [
  { name: 'South Saharan Social Development Organisation (SSDO)', tag: 'Development NGO' },
  { name: 'Moneywise Doctor UK', tag: 'Fintech & Healthcare' },
  { name: 'Sunches Villa Hotel', tag: 'Luxury Hospitality' },
  { name: 'DIGC Garki', tag: 'Faith-based & Media' },
  { name: 'Civic Governance Network', tag: 'Policy & Advocacy' },
  { name: 'Health Reform Coalition', tag: 'Public Health' }
];

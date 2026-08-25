import { ExperienceItem, EducationItem, SkillCategory } from "@/types";

export const experiencesData: ExperienceItem[] = [
  {
    role: "CONTENT & BRAND MANAGER (Remote)",
    organization:
      "Moneywise Doctor | Holistic Dimension Ltd, UK 2025 – Present",
    period: "2025 - Present",
    location: "Remote / London, UK",
    description:
      "Lead content and digital brand communications tailored to a UK medical audience, developing relevant financial and professional content that reflects the interests, context and needs of a specialised audience.",
    achievements: [
      "Develop editorial content and digital communications aligned with the brand’s voice, audience and objectives.",
      "Translate financial and professional topics into clear, accessible articles and social content for a specialised UK medical audience.",
      "Manage audience engagement across digital platforms, maintaining a responsive and consistent brand presence.",
      "Support content planning and editorial direction across social and web platforms.",
      "Apply SEO and content optimisation principles to website content to improve discoverability and audience reach.",
      "Monitor content and audience performance to inform future communication and content decisions.",
    ],
  },
  {
    role: "Communications Lead",
    organization: "South Saharan Social Development Organisation (SSDO)",
    period: "2024 - Present",
    location: "Nigeria",
    description:
      "Leading strategic communications across the organisation’s civic and development programmes, covering campaigns, digital communications, donor reporting, brand management, and multimedia storytelling.",
    achievements: [
      "Lead communications for the Cost of Justice Project, coordinating contributions from 100+ writers across Nigeria and Kenya and 30+ visual artists, and supporting the project’s launch in collaboration with UN Women.",
      "Lead communications for the Sister Guardian Initiative across 34+ rural communities in Enugu State and 22 communities across Nigeria, with communications efforts contributing to a 350% increase in reported media visibility.",
      "Develop donor reports, policy briefs, newsletters, and other communications materials for government agencies, international partners, and donor organisations.",
      " Manage the organisation’s digital communication channels and assets, strengthening audience engagement and establishing a consistent multimedia production workflow.",
      "Train and mentor 50+ community-based women advocates in storytelling, documentation, and communicating human rights issues.",
      "Train partner-organisation communications teams on communications planning, content development, and effective digital communication",
    ],
  },

  {
    role: "Social Media & Publicity Manager",
    organization: "DIGC Garki",
    period: "2022 - Present",
    location: "Enugu, Nigeria",
    description:
      "Lead communications and publicity for a faith-based organisation, including outreaches, special programmes and major activities.",
    achievements: [
      "Develop communication plans and promotional content across social media and other digital channels.",
      "Produce and coordinate visual content, including photography, short-form videos and service coverage.",
      "Manage social media content and audience engagement to strengthen visibility and participation.",
      "Support the organisation’s brand presence through consistent messaging, visual communication and digital content.",
    ],
  },

  {
    role: "Communications Consultant",
    organization: "Various Non-profits & International Organisations",
    period: "2018 - Present",
    location: "Nigeria & International",
    description:
      "Providing bespoke advisory services on advocacy campaign development, brand rebranding, media training, and crisis communications.",
    achievements: [
      "Designed and executed digital advocacy campaigns for civic governance and health sector reform coalitions reaching 2.5M+ digital impressions.",
      "Consulted for luxury hospitality brands including Sunches Villa Hotel, increasing direct booking conversions by 65% through visual rebranding.",
      "Authored high-impact op-eds and media statements featured in top national dailies and international development portals.",
      "Delivered interactive communication masterclasses for over 200 non-profit professionals and civil society leaders.",
    ],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Master of Laws (LL.M)",
    institution: "Faculty of Law, Prestigious University",
    year: "Postgraduate Degree",
    details:
      "Advanced specialization in International Law, Governance, Human Rights, and Regulatory Frameworks. Applied legal intellect to public policy communications.",
  },
  {
    degree: "Barrister-at-Law (B.L)",
    institution: "Nigerian Law School",
    year: "Professional Bar Certification",
    details:
      "Admitted to the Nigerian Bar as a Solicitor and Advocate of the Supreme Court of Nigeria. Trained in high-stakes advocacy, legal drafting, and institutional negotiation.",
  },
  {
    degree: "Bachelor of Laws (LL.B)",
    institution: "Faculty of Law",
    year: "Undergraduate Degree",
    details:
      "Graduated with honors. Key focus on Jurisprudence, Constitutional Law, Media & Communication Law, and Public Advocacy.",
  },
];

export const skillCategoriesData: SkillCategory[] = [
  {
    category: "Strategic & Development Communications",
    skills: [
      { name: "Strategic Communications Blueprinting", level: 95 },
      { name: "Advocacy & Public Policy Framing", level: 92 },
      { name: "Donor Reporting & Knowledge Products", level: 90 },
      { name: "Stakeholder & Community Engagement", level: 94 },
      { name: "Crisis & Reputation Management", level: 88 },
    ],
  },
  {
    category: "Digital, SEO & Content Management",
    skills: [
      { name: "Content Strategy & Editorial Calendars", level: 96 },
      { name: "Search Engine Optimization (SEO)", level: 88 },
      { name: "Email Marketing & Newsletter Architecture", level: 92 },
      { name: "Social Media Growth & Community Management", level: 95 },
      { name: "Analytics, Data Tracking & KPIs", level: 86 },
    ],
  },
  {
    category: "Brand & Multimedia Production",
    skills: [
      { name: "Brand Identity & Visual Direction", level: 90 },
      { name: "Documentary & Field Photography", level: 92 },
      { name: "Video Directing, Scripting & Editing", level: 88 },
      { name: "Graphic Design & Presentation Decks", level: 89 },
      { name: "Copywriting & Thought Leadership Op-Eds", level: 96 },
    ],
  },
];

export const toolsAndPlatforms = [
  { name: "Canva", category: "Design", icon: "Palette" },
  { name: "Adobe Lightroom", category: "Photo Editing", icon: "Image" },
  { name: "WordPress", category: "Web Publishing", icon: "Globe" },
  { name: "Elementor", category: "Web Design", icon: "PanelsTopLeft" },
  { name: "Meta Business Suite", category: "Social Media", icon: "Share2" },
  { name: "Mailchimp", category: "Email Marketing", icon: "Mail" },
  {
    name: "Microsoft Office Suite",
    category: "Productivity",
    icon: "FileSpreadsheet",
  },
  { name: "Microsoft Teams", category: "Collaboration", icon: "Users" },
  { name: "Zoom", category: "Meetings", icon: "Video" },
  { name: "Google Workspace", category: "Collaboration", icon: "Cloud" },
];

export const clientLogos = [
  { name: "Moneywise Doctor UK", tag: "Medical Finance" },
  {
    name: "South Saharan Social Development Organisation ",
    tag: "Non Profit",
  },
  { name: "Sunches Villa Hotel", tag: "Luxury Hospitality" },
  { name: "Life Mind Navigation Psychiatry, USA ", tag: "Mental Health" },
  { name: "DIGC Garriki", tag: "Faith Based" },
  { name: "Somto Eden Evolution", tag: "Academic & Researcy" },
];

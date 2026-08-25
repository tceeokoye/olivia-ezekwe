import { Project, Testimonial } from '@/types';

export const projectsData: Project[] = [
  {
    id: 'sister-guardian-initiative',
    title: 'Sister Guardian Initiative',
    category: 'Communications',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2023 - Present',
    role: 'Communications Lead',
    summary: 'A women-led advocacy and safety initiative promoting gender equality and human rights across rural and peri-urban communities.',
    challenge: 'Limited visibility, low community awareness, and weak documentation of impact and success stories across conflict-affected rural communities.',
    solution: 'Designed and deployed an integrated multimedia advocacy campaign blending grassroots community town halls, radio docudramas, field photojournalism, and digital donor engagement.',
    deliverables: [
      'Strategic Communications Blueprint & Narrative Framework',
      'Impact Documentary Video & 25+ Community Story Vignettes',
      'Policy Briefs & Grassroots Advocacy Toolkit',
      'National & Regional Press Releases with 90%+ Media Pickup',
      'Digital Campaign & Donor Engagement Reports'
    ],
    metrics: [
      { label: 'Communities Reached', value: '38+' },
      { label: 'Village Associations', value: '25' },
      { label: 'Community Champions Trained', value: '50+' },
      { label: 'Registered Users Sensitized', value: '756+' }
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Development Comms', 'Advocacy', 'Storytelling', 'Gender Equality', 'Donor Reporting']
  },
  {
    id: 'local-government-accountability-index',
    title: 'Local Government Accountability Index',
    category: 'Reports',
    client: 'Civil Society & Governance Network',
    year: '2023',
    role: 'Lead Communications & Knowledge Strategist',
    summary: 'A data-driven public governance benchmarking report assessing local government transparency, fiscal discipline, and citizen engagement.',
    challenge: 'Translating complex governance and budget statistics into accessible, engaging infographics and policy briefings for citizens and stakeholders.',
    solution: 'Engineered an interactive digital publication with simplified executive scorecards, interactive infographics, and high-impact media releases.',
    deliverables: [
      '68-Page National Accountability Scorecard Report',
      'Interactive Web Summary Dashboard & Infographics',
      'National Policy Dialogue Launch Communications',
      'Op-Ed Series Published in National Dailies'
    ],
    metrics: [
      { label: 'LGAs Assessed', value: '17' },
      { label: 'Media Mentions', value: '45+' },
      { label: 'Downloads & Reads', value: '12,000+' },
      { label: 'Policy Roundtables', value: '6' }
    ],
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Governance', 'Policy Comms', 'Reports', 'Infographics', 'Public Sector']
  },
  {
    id: 'my-phc-campaign',
    title: 'My PHC Campaign',
    category: 'Digital',
    client: 'Health Reform Advocacy Coalition',
    year: '2022 - 2023',
    role: 'Digital Campaign Strategist & Multimedia Producer',
    summary: 'Citizen-led primary healthcare revitalization campaign mobilizing community feedback on rural clinic infrastructure and maternal health services.',
    challenge: 'Underreported state of grassroots health centers and low citizen mobilization to demand local government healthcare budget releases.',
    solution: 'Spearheaded the #MyPHC digital mobilization campaign featuring frontline nurse spotlights, interactive geo-tagged clinic audits, and short-form video testimonies.',
    deliverables: [
      'Digital Campaign Architecture & Social Media Playbook',
      'Video Vignettes & Healthcare Worker Photo Essays',
      'Community Audit Mobile Feedback Strategy',
      'Multi-stakeholder Stakeholder Briefing Kit'
    ],
    metrics: [
      { label: 'Online Impressions', value: '1.4M+' },
      { label: 'PHC Audits Logged', value: '120+' },
      { label: 'Stakeholder Petitions', value: '3,800+' },
      { label: 'Government Pledges Secured', value: '8 LGAs' }
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Health Communications', 'Digital Campaign', 'Video Series', 'Advocacy']
  },
  {
    id: 'moneywise-doctor',
    title: 'Moneywise Doctor (UK)',
    category: 'Branding',
    client: 'Moneywise Doctor UK',
    year: '2021 - Present',
    role: 'Content & Brand Strategist',
    summary: 'Comprehensive brand identity and content strategy for a UK-based financial literacy and career advisory platform tailored to healthcare professionals.',
    challenge: 'High competition in fintech/personal finance and the need to build deep clinical credibility with NHS doctors and overseas medical practitioners.',
    solution: 'Developed an authoritative, humanized brand voice, SEO-optimized educational content ecosystem, weekly newsletter engine, and premium digital masterclasses.',
    deliverables: [
      'Complete Brand Narrative & Style Guide',
      'SEO Content Strategy & 50+ High-Ranking Long-form Guides',
      'High-Converting Email Newsletter Architecture (42% Open Rate)',
      'Digital Course Landing Pages & Social Strategy'
    ],
    metrics: [
      { label: 'Organic Traffic Growth', value: '+280%' },
      { label: 'Subscribers Added', value: '15,000+' },
      { label: 'Avg. Email Open Rate', value: '42.8%' },
      { label: 'Webinar Registrants', value: '4,500+' }
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    tags: ['Content Strategy', 'SEO', 'Brand Management', 'Fintech', 'UK Healthcare']
  },
  {
    id: 'sunches-villa-hotel',
    title: 'Sunches Villa Hotel',
    category: 'Branding',
    client: 'Sunches Luxury Hospitality',
    year: '2022',
    role: 'Brand & Digital Marketing Consultant',
    summary: 'End-to-end luxury hospitality brand elevation, lifestyle photography direction, and digital guest acquisition system.',
    challenge: 'Rebranding an upscale boutique hotel in a competitive metropolitan hospitality market to capture premium corporate and leisure travelers.',
    solution: 'Designed an elegant visual identity, bespoke guest experience collateral, high-definition architectural photo shoots, and targeted social media marketing.',
    deliverables: [
      'Brand Identity System & Hospitality Collateral',
      'Architectural & Lifestyle Photography Suite',
      'Social Media Editorial Calendar & Influencer Strategy',
      'Website Visual Direction & Booking Conversion Optimization'
    ],
    metrics: [
      { label: 'Direct Bookings Increase', value: '+65%' },
      { label: 'Instagram Engagement', value: '+340%' },
      { label: 'High-Res Asset Library', value: '250+ Photos' },
      { label: 'Occupancy Rate Boost', value: '88% Peak' }
    ],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Brand Management', 'Hospitality', 'Photography Direction', 'Digital Marketing']
  },
  {
    id: 'dunamis-garki-media',
    title: 'Dunamis Garki Media & Communications',
    category: 'Videography',
    client: 'DIGC Garki',
    year: '2019 - Present',
    role: 'Social Media & Publicity Manager',
    summary: 'Multi-camera broadcast production, weekly digital engagement, live streaming coordination, and community storytelling reaching tens of thousands.',
    challenge: 'Managing high-frequency weekly live broadcasts, large-scale events coverage, and rapidly growing multi-channel digital audiences with seamless fidelity.',
    solution: 'Structured a 15-person volunteer media team workflow, standardized broadcast graphic packages, created engaging short-form recap reels, and scaled YouTube/Facebook streaming.',
    deliverables: [
      'Weekly Multi-Camera Live Broadcast Direction',
      'Event Highlights, Testimonial Reels & Mini-Documentaries',
      'Multi-Platform Social Media Strategy & Live Tweet Campaigns',
      'Media Volunteer Training & Standard Operating Procedures'
    ],
    metrics: [
      { label: 'Weekly Live Viewers', value: '25,000+' },
      { label: 'Social Following Growth', value: '+450%' },
      { label: 'Video Pieces Produced', value: '300+' },
      { label: 'Media Team Trained', value: '40+ Members' }
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    tags: ['Event Comms', 'Videography', 'Live Broadcast', 'Social Media', 'Community']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Olivia is gifted, and I truly enjoyed working with her. Her legal background gives her an advantage because she can see an idea or communication from different angles, and she knows how to translate it in interesting ways. I look forward to working with her again.',
    author: 'Mary E.A.',
    role: 'HR Executive',
    organization: ''
  },
  {
    id: '2',
    quote: 'Olivia is a really good writer. One of the best I know actually. She has a way of turning an idea (no matter how abstract or how mundane), into something magical.',
    author: 'John-Martins, O. (Esq).',
    role: 'Creative Director',
    organization: 'Shatili'
  },
  {
    id: '3',
    quote: 'She has a really good eye for detail. She pays attention to the little things that others may overlook and has a way of turning ordinary moments into stories through her visual work.',
    author: 'Daniel N.',
    role: 'Cinematographer',
    organization: ''
  }
];

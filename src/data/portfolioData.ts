import { Project, Testimonial } from '@/types';

const GITHUB_MEDIA_DOCS_BASE =
  'https://media.githubusercontent.com/media/tceeokoye/olivia-ezekwe/main/public/portfolio/documentry-videos%26pictures';
const docVideo = (filename: string) =>
  `${GITHUB_MEDIA_DOCS_BASE}/${encodeURIComponent(filename)}`;

export const projectsData: Project[] = [
  // =================================================================
  // CAMPAIGNS
  // =================================================================
  {
    id: '16days-campaign-messaging',
    title: '16 Days of Activism Campaign Messaging',
    category: 'Campaigns',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2023 - 2024',
    role: 'Lead Communications Strategist & Copywriter',
    summary: 'Digital campaign advocacy messaging for the global 16 Days of Activism against Gender-Based Violence (GBV).',
    challenge: 'Addressing silence around domestic violence in rural and peri-urban communities, while breaking down complex legal protections and emergency hotlines into relatable, shareable digital messages.',
    solution: 'Engineered an accessible multi-channel visual narrative combining educational infographics, survivor empowerment quotes, and clear reporting directory graphics distributed across social channels.',
    deliverables: [
      '11-Piece Multi-Slide Social Advocacy Carousel Suite',
      'Community Action & Survivor Support Directory Framing',
      'Targeted Hashtag Mobilization & Influencer Briefing Notes',
      'Post-Campaign Reach & Engagement Impact Report'
    ],
    metrics: [
      { label: 'Advocacy Visuals', value: '11 Pieces' },
      { label: 'Estimated Reach', value: '450K+' },
      { label: 'Community Partners', value: '18+' },
      { label: 'Help Inquiries Generated', value: '120+' }
    ],
    coverImage: '/portfolio/16days-campaign-messaging/a.jpg',
    image: '/portfolio/16days-campaign-messaging/a.jpg',
    fileType: 'gallery',
    images: [
      '/portfolio/16days-campaign-messaging/a.jpg',
      '/portfolio/16days-campaign-messaging/b.jpg',
      '/portfolio/16days-campaign-messaging/c.jpg',
      '/portfolio/16days-campaign-messaging/d.jpg',
      '/portfolio/16days-campaign-messaging/e.jpg',
      '/portfolio/16days-campaign-messaging/f.jpg',
      '/portfolio/16days-campaign-messaging/g.jpg',
      '/portfolio/16days-campaign-messaging/g (1).jpg',
      '/portfolio/16days-campaign-messaging/h.jpg',
      '/portfolio/16days-campaign-messaging/i.jpg',
      '/portfolio/16days-campaign-messaging/k.jpg'
    ],
    featured: true,
    tags: ['16 Days of Activism', 'Gender Justice', 'Advocacy Messaging', 'Social Media', 'Community Mobilization']
  },
  {
    id: 'my-phc-campaign-messaging',
    title: 'My PHC Campaign Messaging',
    category: 'Campaigns',
    client: 'Health Reform Advocacy Coalition / SSDO',
    year: '2023',
    role: 'Digital Campaign Strategist & Copywriter',
    summary: 'Citizen-led primary healthcare mobilization campaign featuring educational flyers, clinic condition audits, and maternal healthcare advocacy.',
    challenge: 'Widespread public disengagement from rural primary healthcare center (PHC) monitoring and low awareness of basic healthcare entitlements.',
    solution: 'Designed 9 crisp, visual public health education assets highlighting clinic functionality, maternal health rights, and citizen reporting avenues to spur local government budget accountability.',
    deliverables: [
      '9-Piece Public Health Awareness & Audit Infographic Series',
      'Grassroots Community Action Callouts',
      'Multi-stakeholder Stakeholder Briefing Deck'
    ],
    metrics: [
      { label: 'Advocacy Visuals', value: '9 Visuals' },
      { label: 'PHC Audits Logged', value: '120+' },
      { label: 'Citizen Engagements', value: '50K+' },
      { label: 'LGA Health Pledges', value: '8 LGAs' }
    ],
    coverImage: '/portfolio/My-PHC-Campaign-Messaging/1.jpg',
    image: '/portfolio/My-PHC-Campaign-Messaging/1.jpg',
    fileType: 'gallery',
    images: [
      '/portfolio/My-PHC-Campaign-Messaging/1.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/2.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/3.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/4.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/5.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/6.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/7.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/8.jpg',
      '/portfolio/My-PHC-Campaign-Messaging/9.jpg'
    ],
    featured: true,
    tags: ['Primary Healthcare', 'Health Advocacy', 'Citizen Accountability', 'Digital Flyers', 'Public Health']
  },
  {
    id: 'pvc-campaign-messaging-ssdo',
    title: 'Continuous Voter Registration (PVC) Campaign',
    category: 'Campaigns',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2022 - 2023',
    role: 'Lead Campaign Strategist & Content Creator',
    summary: 'Civic mobilization digital campaign urging citizens to register, verify and collect their Permanent Voter Cards',
    challenge: 'Overcoming voter apathy, misinformation regarding registration deadlines, polling unit transfers, and last-minute INEC center bottlenecks.',
    solution: 'Created an extensive, bite-sized 35-graphic civic education series tackling every registration stage—from online pre-registration and data corrections to physical biometric capture.',
    deliverables: [
      '35-Piece Voter Education & Action Graphic Campaign Suite',
      'Step-by-Step Online Pre-Registration Guides',
      'Deadline Countdown & Polling Unit Relocation Bulletins',
      'Targeted Youth & First-Time Voter Messaging Framework'
    ],
    metrics: [
      { label: 'Flyer Assets', value: '35 Graphics' },
      { label: 'Digital Reach', value: '1.2M+' },
      { label: 'Queries Resolved', value: '10K+' },
      { label: 'Youth Reached', value: '250K+' }
    ],
    coverImage: '/portfolio/PVC-Campaign-Messging-(SSDO)/2027 Is Coming Faster Than You Think.png',
    image: '/portfolio/PVC-Campaign-Messging-(SSDO)/2027 Is Coming Faster Than You Think.png',
    fileType: 'gallery',
    images: [
      '/portfolio/PVC-Campaign-Messging-(SSDO)/2027 Is Coming Faster Than You Think.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Already Registered_ Review Your Details.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Avoid Last-Minute Frustration.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Back In Nigeria_ Time To Register.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Better Governance Starts With Participation.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Busy Schedule_ Register Anyway.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Democracy Works Better When Citizens Participate.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Don_t Register Alone.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Don_t Sit Out 2027.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Every Eligible Nigerian Counts.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Final Phase Is  LIVE.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/How to Pre-Register Online in 5 Simple Steps.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/How To Register in 3 Easy Steps.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/July 10, 2026 Is Closer Than You Think.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Locate Your Nearest Registration Centre.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Lost Your PVC_ Replace It Fast.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Millions Are Already Registering.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Missed Phase 1 or 2_  This Is For You.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Moved To Another State or City_.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/One Person,  One Registration.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Only few Days Left to Register.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Presidential Election_  Months Away.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/PVC Registration Is FREE.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Register. Collect. Vote..png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Registration Is Not Enough.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Start From Your Phone.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/What Happens at the INEC Office_ Here_s What to Expect.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Women_s Voices Matter Too.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Wrong Name or Date of Birth_.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Young Nigerians Must Be Counted.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Your Polling Unit Should Match Where You Live.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Your PVC Is Ready. Go Get It.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Your PVC Is Your Voice.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/Your PVC Will Not Deliver Itself.png',
      '/portfolio/PVC-Campaign-Messging-(SSDO)/You_re 18_ You_re Eligible to Vote.png'
    ],
    featured: true,
    tags: ['Voter Education', 'Civic Action', 'Democratic Governance', 'Youth Mobilization', 'PVC Campaign']
  },
  {
    id: 'maternal-mental-health-ppd-campaign',
    title: 'Postpartum Depression & Maternal Mental Health Campaign',
    category: 'Campaigns',
    client: 'Maternal Mental Health & Wellness Initiative',
    year: '2024 - 2025',
    role: 'Lead Communications Strategist & Visual Designer',
    summary: 'Mental health and emotional wellbeing campaign designed to guide mental well being, de-stigmatize postpartum depression (PPD), and connect new mothers with healing resources.',
    challenge: 'Addressing pervasive cultural silence, guilt, and stigma around postpartum mood disorders, while equipping families with clear diagnostic signs and accessible support channels.',
    solution: 'Designed an empathetic, visually compelling 15-part educational carousel suite integrating clinical symptom identification, self-regulation worksheets, affirmations, and actionable helpline guides.',
    deliverables: [
      '15-Piece Multi-Slide Mental Health & PPD Advocacy Suite',
      'Postpartum Depression (PPD) Warning Signs & Helpline Directory',
      'Self-Regulation & Emotional Learning Worksheets',
      'Empowerment Quotes & Healing Affirmations Series'
    ],
    metrics: [
      { label: 'Advocacy Assets', value: '15 Visuals' },
      { label: 'Digital Reach', value: '320K+' },
      { label: 'Support Inquiries', value: '95+' },
      { label: 'Worksheet Saves', value: '1,400+' }
    ],
    coverImage: '/portfolio/campain2/1.png',
    image: '/portfolio/campain2/1.png',
    fileType: 'gallery',
    images: [
      '/portfolio/campain2/1.png',
      '/portfolio/campain2/2.png',
      '/portfolio/campain2/3.png',
      '/portfolio/campain2/4.png',
      '/portfolio/campain2/5.png',
      '/portfolio/campain2/6.png',
      '/portfolio/campain2/7.png',
      '/portfolio/campain2/8.png',
      '/portfolio/campain2/9.png',
      '/portfolio/campain2/10.png',
      '/portfolio/campain2/PPD.png',
      '/portfolio/campain2/PPD HELP.png',
      '/portfolio/campain2/Quote - Healing.png',
      '/portfolio/campain2/Self-Regulation Emotional Learning Worksheet in Yellow White illustrative Style (1).png',
      '/portfolio/campain2/You Matter.png'
    ],
    featured: true,
    tags: ['Maternal Mental Health', 'Postpartum Depression', 'Advocacy Messaging', 'Emotional Wellbeing', 'Community Health']
  },

  // =================================================================
  // CREATIVE NON-FICTIONS
  // =================================================================
  {
    id: 'fours-creative-non-fiction',
    title: 'FOURS',
    category: 'Creative Non-Fictions',
    year: '2024',
    role: 'Author & Essayist',
    summary: 'An introspective creative non-fiction essay exploring transitions, numeric serendipity, memory, and personal milestones through lyrical prose.',
    fileUrl: '/portfolio/CREATIVE NON-FICTIONS/FOURS.pdf',
    fileType: 'pdf',
    fileSize: '95 KB',
    coverImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Exploration of personal milestones, nostalgia, and temporal transitions',
      'Lyrical sentence architecture and evocative descriptive imagery',
      'Deep emotional vulnerability reflecting on human connection'
    ],
    featured: true,
    tags: ['Creative Non-Fiction', 'Personal Essay', 'Reflective Prose', 'Literary Memoir']
  },
  {
    id: 'love-is-blind-creative-non-fiction',
    title: 'LOVE IS BLIND',
    category: 'Creative Non-Fictions',
    year: '2024',
    role: 'Author & Essayist',
    summary: 'A candid, observant creative non-fiction narrative interrogating romantic expectations, emotional vulnerability, and societal perceptions.',
    fileUrl: '/portfolio/CREATIVE NON-FICTIONS/LOVE IS BLIND.pdf',
    fileType: 'pdf',
    fileSize: '125 KB',
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Nuanced reflections on emotional authenticity versus romanticized ideals',
      'Intimate conversational tone and engaging storytelling cadence',
      'Rich character dynamics and cultural observations'
    ],
    featured: true,
    tags: ['Creative Non-Fiction', 'Narrative Essay', 'Relationships', 'Storytelling']
  },
  {
    id: 'say-cheese-creative-non-fiction',
    title: 'SAY CHEESE',
    category: 'Creative Non-Fictions',
    year: '2024',
    role: 'Author & Essayist',
    summary: 'A witty, perceptive essay examining the rituals of photography, performed joy behind lenses, and the memories we choose to preserve.',
    fileUrl: '/portfolio/CREATIVE NON-FICTIONS/SAY CHEESE.pdf',
    fileType: 'pdf',
    fileSize: '74 KB',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Interplay between the photographic medium and lived human emotion',
      'Humorous yet tender deconstruction of outward smiles vs internal realities',
      'Vivid sensory snapshots and reflective commentary'
    ],
    featured: false,
    tags: ['Creative Non-Fiction', 'Personal Essay', 'Visual Metaphor', 'Humour & Observation']
  },
  {
    id: 'the-story-that-followed-me',
    title: 'THE STORY THAT FOLLOWED ME',
    category: 'Creative Non-Fictions',
    year: '2024',
    role: 'Author & Visual Storyteller',
    summary: 'A visual slide narrative and personal memoir exploring transformative journeys, lingering encounters, and the enduring tales that shape us.',
    fileUrl: '/portfolio/CREATIVE NON-FICTIONS/THE STORY THAT FOLLOWED ME.pptx',
    fileType: 'pptx',
    fileSize: '18.6 MB',
    coverImage: 'https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Multi-slide visual storytelling journey combining photography and prose',
      'Reflections on travel, place-making, and formative experiences',
      'A blend of literary memoir and presentation-style visual design'
    ],
    featured: true,
    tags: ['Visual Story', 'Memoir Presentation', 'Storytelling', 'Creative Narrative']
  },

  // =================================================================
  // EDITORIAL
  // =================================================================
  {
    id: 'impact-stories-organisational-achievements',
    title: 'Impact Stories & Organisational Achievements (2025 - 2026)',
    category: 'Editorial',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2025 - 2026',
    role: 'Lead Editorial Strategist & Compiler',
    summary: 'A comprehensive organizational editorial publication synthesizing multi-sectoral field achievements, personal beneficiary testimonies, and programmatic milestones.',
    fileUrl: '/portfolio/EDITORIAL/Impact Stories & Organisational achievements (2025 - 2026).pdf',
    fileType: 'pdf',
    fileSize: '300 KB',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'In-depth beneficiary transformation profiles and human interest chronicles',
      'Quantitative scorecards covering health, governance, and empowerment sectors',
      'Executive-ready editorial layout structured for partners and institutional donors'
    ],
    featured: true,
    tags: ['Impact Stories', 'Annual Editorial', 'Beneficiary Case Studies', 'NGO Reporting']
  },
  {
    id: 'sgi-compendium',
    title: 'Sister Guardian Initiative (SGI) Compendium',
    category: 'Editorial',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2023 - 2024',
    role: 'Lead Editor & Publication Specialist',
    summary: 'The definitive institutional compendium documenting the Sister Guardian Initiative’s decade-long legacy in defending women’s rights, community conflict mediation, and rural paralegal systems.',
    fileUrl: '/portfolio/EDITORIAL/SGI Compendium.pdf',
    fileType: 'pdf',
    fileSize: '74.7 MB',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Exhaustive documentation of community-led dispute mediation frameworks',
      'Grassroots paralegal training models and survivor protection pathways',
      'Strategic policy recommendations for state-level gender justice scaling'
    ],
    featured: true,
    tags: ['SGI Compendium', 'Human Rights Publication', 'Institutional Knowledge', 'Field Documentation']
  },
  {
    id: 'ssdo-progress-report-2026',
    title: 'SSDO Progress Report (January–July 2026)',
    category: 'Editorial',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2026',
    role: 'Communications Lead & Editor',
    summary: 'An executive mid-year progress review synthesizing operational deliverables, project timelines, community reach numbers, and strategic foresight across flagship programs.',
    fileUrl: '/portfolio/EDITORIAL/SSDO Progress Report January–July 2026.pdf',
    fileType: 'pdf',
    fileSize: '46.2 MB',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Semi-annual programmatic scorecard tracking project deliverables across 5 states',
      'Operational efficiency analyses and stakeholder engagement summaries',
      'Strategic roadmap and risk mitigation frameworks for the second half of the year'
    ],
    featured: true,
    tags: ['Progress Report', 'Institutional Editorial', 'Executive Scorecard', 'Donor Knowledge Product']
  },

  // =================================================================
  // PRESS
  // =================================================================
  {
    id: 'efcc-press-statement',
    title: 'EFCC Press Statement',
    category: 'Press',
    client: 'Civil Society Governance Coalition',
    year: '2023',
    role: 'Media Relations & Communications Strategist',
    summary: 'Official press dispatch articulating anti-corruption collaboration, governance compliance, and institutional integrity across civil society programs.',
    fileUrl: '/portfolio/PRESS/EFCC PRESS STATEMENT copy.pdf',
    fileType: 'pdf',
    fileSize: '79 KB',
    coverImage: 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Clear, unambiguous institutional framing of anti-graft partnerships',
      'Media-ready quotes and actionable calls to regulatory bodies',
      'Broadcast and print wire distribution format for immediate pickup'
    ],
    featured: false,
    tags: ['Press Statement', 'Governance', 'Media Relations', 'Anti-Corruption']
  },
  {
    id: 'japanese-embassy-visit-press',
    title: 'Japanese Embassy Visit - Press Briefing',
    category: 'Press',
    client: 'SSDO / Embassy of Japan in Nigeria',
    year: '2023',
    role: 'Communications Lead & Press Officer',
    summary: 'High-level diplomatic press briefing detailing the Japanese Embassy delegation’s official working visit, bilateral development grants, and grassroots facility inspections.',
    fileUrl: '/portfolio/PRESS/Japanese Embassy Visit - Press (Updated) copy.pdf',
    fileType: 'pdf',
    fileSize: '719 KB',
    coverImage: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Diplomatic talking points and bilateral milestones coverage',
      'Inspection reports of Japanese grant-funded community infrastructure',
      'High pickup across national television and major national daily papers'
    ],
    featured: true,
    tags: ['Diplomatic Press', 'Bilateral Relations', 'International Development', 'Official Dispatch']
  },
  {
    id: 'cost-of-justice-launch-press',
    title: 'Press Release: Cost of Justice Launch',
    category: 'Press',
    client: 'Access to Justice Network',
    year: '2023',
    role: 'Lead Communications & PR Strategist',
    summary: 'Media launch release announcing the landmark "Cost of Justice" research report, spotlighting economic hurdles indigent citizens face in seeking legal redress.',
    fileUrl: '/portfolio/PRESS/PRESS - Cost of Justice Launch.pdf',
    fileType: 'pdf',
    fileSize: '658 KB',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Executive summary of survey data on court filing fees and indigent barriers',
      'Policy recommendations for judiciary stakeholders and legal aid councils',
      'Press conference question guide and media talking points kit'
    ],
    featured: true,
    tags: ['Press Release', 'Access to Justice', 'Legal Advocacy', 'Media Launch']
  },
  {
    id: 'press-briefing-report-sister-guardians',
    title: 'Press Briefing Report: Sister Guardian Initiative',
    category: 'Press',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2023',
    role: 'Lead Media Liaison',
    summary: 'Media briefing pack and data dossier equipping journalists with verified statistics on domestic violence reduction and rural paralegal dispute resolutions.',
    fileUrl: '/portfolio/PRESS/PRESS BRIEFING REPORT (Sister Guardians).pdf',
    fileType: 'pdf',
    fileSize: '56 KB',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Verified field statistics and dispute resolution percentages',
      'Curated community case studies prepared for print and radio features',
      'Direct Q&A backgrounder for beat reporters covering human rights'
    ],
    featured: false,
    tags: ['Press Briefing', 'Media Pack', 'Gender Justice', 'Journalist Briefing']
  },
  {
    id: 'unheard-voices-abor-isiala-press',
    title: 'The Unheard Voices of Abor Isiala and Ihenyi Communities, Isi-Uzo LGA',
    category: 'Press',
    client: 'Humanitarian & Peacebuilding Advocacy Network',
    year: '2023',
    role: 'Investigative Communications Officer',
    summary: 'Urgent human interest press release and investigative advocacy dispatch amplifying displaced community testimonies and government aid appeals.',
    fileUrl: '/portfolio/PRESS/The Unheard Voices of Abor Isiala and Ihenyi (Eha-Amufu) Communities, Isi-Uzo Local Government Area, Enugu State.pdf',
    fileType: 'pdf',
    fileSize: '138 KB',
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Firsthand testimonies from displaced agrarian families in conflict zones',
      'Urgent humanitarian relief and emergency security intervention demands',
      'Fact-checked field reporting with verified eyewitness accounts'
    ],
    featured: true,
    tags: ['Investigative Press', 'Humanitarian Dispatch', 'Community Voices', 'Advocacy Release']
  },
  {
    id: 'wee-policy-validation-report-media',
    title: 'WEE Policy Validation Report (For Media)',
    category: 'Press',
    client: 'Women’s Economic Empowerment Policy Coalition',
    year: '2023',
    role: 'Policy Communications Officer',
    summary: 'Official media summary and policy validation bulletin covering the Women’s Economic Empowerment stakeholder summit and state-level policy roadmap adoption.',
    fileUrl: '/portfolio/PRESS/WEE POLICY VALIDATION REPORT (FOR MEDIA).pdf',
    fileType: 'pdf',
    fileSize: '284 KB',
    coverImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Executive summary of validated policy pillars for female entrepreneurs',
      'Multi-sector stakeholder resolutions and legislative timeline',
      'Actionable recommendations for financial institutions and vocational centers'
    ],
    featured: false,
    tags: ['Policy Press Release', 'Women Economic Empowerment', 'Policy Advocacy', 'Media Report']
  },

  // =================================================================
  // WRITING SAMPLES
  // =================================================================
  {
    id: 'comparative-labour-protection-laws',
    title: 'Comparative Analysis of the Labour Protection Laws of Senegal, Ghana and Nigeria',
    category: 'Writing Samples',
    year: '2023',
    role: 'Legal Researcher & Author',
    summary: 'An in-depth comparative legal study analyzing statutory employee protections, dispute resolution mechanisms, and collective bargaining rights across West Africa.',
    fileUrl: '/portfolio/WRITTEN WORKS/COMPARATIVE ANALYSIS OF THE LABOUR PROTECTION LAWS OF SENEGAL, GHANA AND NIGERIA (AutoRecovered).pdf',
    fileType: 'pdf',
    fileSize: '398 KB',
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Cross-jurisdictional statutory comparison of 3 West African legal frameworks',
      'Evaluation of ILO convention domestication and workplace safety mandates',
      'Actionable recommendations for regional labour law harmonization'
    ],
    featured: true,
    tags: ['Comparative Labour Law', 'Legal Analysis', 'ECOWAS Jurisprudence', 'Academic Writing']
  },
  {
    id: 'patentable-invention-patent-grant',
    title: 'Justification for Patentable Invention: The Patent Grant',
    category: 'Writing Samples',
    year: '2023',
    role: 'Legal Scholar & Author',
    summary: 'A scholarly jurisprudence analysis interrogating utilitarian and natural rights justifications for patent monopolies, novelty requirements, and inventive steps.',
    fileUrl: '/portfolio/WRITTEN WORKS/JUSTIFICATION FOR  PATENTABLE INVENTION - THE PATENT GRANT.pdf',
    fileType: 'pdf',
    fileSize: '385 KB',
    coverImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Deconstruction of economic rationales underlying patent exclusivity',
      'Statutory thresholds for novelty, non-obviousness, and industrial application',
      'Critical review of seminal international patent infringement jurisprudence'
    ],
    featured: true,
    tags: ['Intellectual Property', 'Patent Law', 'Jurisprudence', 'Legal Theory']
  },
  {
    id: 'summary-report-content-creation-workshop',
    title: 'Summary Report of the Capacity Building Workshop on Content Creation & Messaging',
    category: 'Writing Samples',
    client: 'Development Communications Forum',
    year: '2023',
    role: 'Lead Facilitator & Lead Author',
    summary: 'A professional workshop report and pedagogical manual outlining key content creation modules, digital narrative techniques, and message crafting frameworks.',
    fileUrl: '/portfolio/WRITTEN WORKS/SUMMARY REPORT OF THE CAPACITY BUILDING WORKSHOP ON CONTENT CREATION AND MESSAGING.pdf',
    fileType: 'pdf',
    fileSize: '111 KB',
    coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Curriculum breakdown across storytelling, audience profiling, and mobile media',
      'Participant assessment outcomes and practical messaging exercise rubrics',
      'Standardized communications handbook for grassroots advocacy teams'
    ],
    featured: false,
    tags: ['Workshop Report', 'Capacity Building', 'Content Strategy', 'Communications Manual']
  },
  {
    id: 'womens-rights-as-human-rights',
    title: 'Women’s Rights as an Aspect of Human Rights',
    category: 'Writing Samples',
    year: '2023',
    role: 'Legal Researcher & Human Rights Author',
    summary: 'A comprehensive human rights paper examining the constitutional entrenchment of women’s rights, CEDAW compliance, and cultural barriers in modern legal systems.',
    fileUrl: '/portfolio/WRITTEN WORKS/WOMEN’S RIGHTS AS AN ASPECT OF HUMAN RIGHTS.pdf',
    fileType: 'pdf',
    fileSize: '334 KB',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    highlights: [
      'Analysis of international conventions (CEDAW, Maputo Protocol) vs municipal laws',
      'Socio-cultural and customary law hurdles to fundamental rights enforcement',
      'Strategic judicial and legislative pathways for strengthening gender protections'
    ],
    featured: true,
    tags: ['Human Rights Law', 'Constitutional Law', 'CEDAW', 'Gender Jurisprudence']
  },

  // =================================================================
  // DOCUMENTARIES & VISUAL STORYTELLING
  // =================================================================
  {
    id: 'sister-guardian-initiative-documentary',
    title: 'Sister Guardian Initiative: Building Women’s Agency for Advocacy and Leadership',
    category: 'Documentaries & Visual Storytelling',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2024',
    role: 'Lead Producer, Director & Story Editor',
    duration: 'Documentary Feature',
    summary: 'An in-depth documentary chronicling the transformative grassroots movement of female community leaders organizing against domestic violence, mediating rural disputes, and establishing community paralegal safety networks across southeastern Nigeria.',
    challenge: 'Unpacking entrenched patriarchal customs and community resistance to female legal intervention in domestic disputes.',
    solution: 'Followed grassroots Sister Guardians on the frontline of conflict mediation, documenting real survivor protection interventions and community dialogues.',
    deliverables: [
      'Feature-Length Impact Documentary',
      'Community Sensitization Screenings Kit',
      'Grassroots Advocacy Policy Brief'
    ],
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Sister Guardian Initiative_ Building Women’s Agency for Advocacy and Leadership.mp4'),
    fileUrl: docVideo('Sister Guardian Initiative_ Building Women’s Agency for Advocacy and Leadership.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Sister Guardian', 'Women Leadership', 'Gender Justice', 'Grassroots Advocacy', 'Documentary']
  },
  {
    id: 'cost-of-justice-anthology-launch-video',
    title: 'The Cost of Justice Anthology Launch: Stories, Art & Justice Reform in Nigeria',
    category: 'Documentaries & Visual Storytelling',
    client: 'Access to Justice Network / SSDO',
    year: '2023 - 2024',
    role: 'Executive Producer & Documentary Editor',
    duration: 'Event Documentary',
    summary: 'Visual narrative and launch documentary capturing the premier of the "Cost of Justice" Anthology, uniting legal luminaries, human rights activists, and creative artists advocating for judicial reform.',
    challenge: 'Conveying technical legal reform metrics into an emotionally resonant, culturally vibrant multimedia celebration.',
    solution: 'Blended keynote address excerpts, spoken-word poetry, artistic readings, and audience interactions into a dynamic documentary record.',
    deliverables: [
      'Official Launch Documentary & Highlight Reel',
      'Media Wire Dispatches & Broadcast Sizzle Reel',
      'Stakeholder & Donor Distribution Package'
    ],
    coverImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('The Cost of Justice Anthology Launch _ Stories, Art & Justice Reform in Nigeria.mp4'),
    fileUrl: docVideo('The Cost of Justice Anthology Launch _ Stories, Art & Justice Reform in Nigeria.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Cost of Justice', 'Legal Reform', 'Human Rights', 'Anthology Launch', 'Documentary']
  },
  {
    id: 'raped-her-journey-to-healing',
    title: 'Raped! Her Journey to Healing',
    category: 'Documentaries & Visual Storytelling',
    client: 'GBV Survivor Support & Advocacy Network',
    year: '2024',
    role: 'Director, Producer & Sensitive Content Storyteller',
    duration: 'Survivor Documentary',
    summary: 'A deeply compassionate, survivor-centered documentary capturing the journey of emotional rehabilitation, trauma therapy, and community support systems helping victims of sexual violence rebuild their lives.',
    challenge: 'Tackling sensitive personal trauma while preserving survivor dignity, confidentiality, and psychological safety on camera.',
    solution: 'Utilized trauma-informed filmmaking protocols, thoughtful visual framing, and empowering narratives centering survivor resilience over victimization.',
    deliverables: [
      'Trauma-Informed Survivor Healing Documentary',
      'Therapeutic & Psychosocial Support Resource Guide',
      'Institutional Sensitization Screening Asset'
    ],
    coverImage: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Raped! Her Journey to Healing.mp4'),
    fileUrl: docVideo('Raped! Her Journey to Healing.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['GBV Recovery', 'Survivor Story', 'Human Rights', 'Mental Health', 'Advocacy Film']
  },
  {
    id: 'silenced-by-tradition-exploited-by-culture',
    title: 'Silenced by Tradition, Exploited by Culture',
    category: 'Documentaries & Visual Storytelling',
    client: 'Human Rights & Cultural Reform Coalition',
    year: '2024',
    role: 'Investigative Documentary Producer & Director',
    duration: 'Investigative Short',
    summary: 'An investigative short documentary examining customary cultural practices that disinherit women, isolate widows, and entrench gender oppression in traditional settings.',
    challenge: 'Exposing harmful customary inheritance practices without alienating traditional custodians and community elders needed for reform.',
    solution: 'Balanced investigative survivor interviews with dialogues featuring progressive traditional rulers committed to customary legal reform.',
    deliverables: [
      'Investigative Advocacy Short Film',
      'Community Dialogues Discussion Guide',
      'Traditional Rulers Reform Communiqué'
    ],
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Silenced by Tradition. Exploited by Culture..mp4'),
    fileUrl: docVideo('Silenced by Tradition. Exploited by Culture..mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Cultural Reform', 'Widow Rights', 'Customary Law', 'Investigative Documentary']
  },
  {
    id: 'iwd-2025-empowering-girls-affa-amozolla',
    title: 'IWD: Empowering Girls at Affa-Amozolla – Rights, Equality & Ending GBV',
    category: 'Documentaries & Visual Storytelling',
    client: 'International Women’s Day Community Action',
    year: '2025',
    role: 'Field Producer & Cinematographer',
    duration: 'Outreach Documentary',
    summary: 'Field documentary capturing school-based outreach, rights literacy workshops, and mentorship sessions for adolescent girls in rural Affa-Amozolla community.',
    challenge: 'Engaging adolescent students with complex legal concepts around bodily autonomy and gender rights in an accessible, memorable format.',
    solution: 'Designed an energetic workshop format captured with vibrant mobile cinematography, student reflections, and interactive group discussions.',
    deliverables: [
      'School Outreach Action Documentary',
      'Adolescent Girl Rights Handbook',
      'IWD 2025 Impact Video Reel'
    ],
    coverImage: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('IWD 2025_ Empowering Girls at Affa-Amozolla _ Rights, Equality & Ending GBV.mp4'),
    fileUrl: docVideo('IWD 2025_ Empowering Girls at Affa-Amozolla _ Rights, Equality & Ending GBV.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['IWD', 'Girl Child Education', 'GBV Prevention', 'Rural Outreach', 'Community Film']
  },
  {
    id: 'iwd-2025-raising-awareness-gbv-enugu',
    title: 'IWD: Raising Awareness on GBV in Affa-Amozolla, Enugu',
    category: 'Documentaries & Visual Storytelling',
    client: 'Enugu State Gender Justice Coalition',
    year: '2025',
    role: 'Lead Storyteller & Video Editor',
    duration: 'Advocacy Film',
    summary: 'Community mobilization and sensitization documentary recording town-hall dialogues, elder deliberations, and grassroots campaigns combating sexual and gender-based violence.',
    challenge: 'Capturing sprawling outdoor community dialogues and multi-generational town halls with high visual and acoustic clarity.',
    solution: 'Directed multi-camera field coverage spotlighting local women leaders addressing community leaders directly on GBV accountability.',
    deliverables: [
      'Community Mobilization Documentary',
      'Town Hall Deliberations Summary Reel',
      'Grassroots Gender Justice Toolkit'
    ],
    coverImage: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('IWD 2025_ Raising Awareness on GBV in Affa-Amozolla, Enugu.mp4'),
    fileUrl: docVideo('IWD 2025_ Raising Awareness on GBV in Affa-Amozolla, Enugu.mp4'),
    fileType: 'video',
    featured: false,
    tags: ['Community Sensitization', 'Enugu State', 'GBV Awareness', 'Grassroots Dialogue']
  },
  {
    id: 'from-germany-to-enugu-learning-exchange',
    title: 'From Germany to Enugu: Learning, Exchange and Social Impact',
    category: 'Documentaries & Visual Storytelling',
    client: 'International Exchange & Development Fellowship',
    year: '2024',
    role: 'Producer & Post-Production Director',
    duration: 'Exchange Documentary',
    summary: 'A cross-cultural exchange documentary spotlighting international development fellows collaborating with local changemakers in Enugu to drive sustainable community initiatives.',
    challenge: 'Synthesizing diverse cross-cultural perspectives, language nuances, and varied project interventions into a cohesive global development narrative.',
    solution: 'Structured a thematic narrative focusing on peer-to-peer knowledge transfer, mutual learning, and long-term community empowerment.',
    deliverables: [
      'International Exchange Documentary Film',
      'Bilateral Fellowship Case Study',
      'Social Impact Showcase Reel'
    ],
    coverImage: 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('From Germany to Enugu_ Learning, Exchange and Social Impact.mp4'),
    fileUrl: docVideo('From Germany to Enugu_ Learning, Exchange and Social Impact.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Cross-Cultural Exchange', 'International Development', 'Social Impact', 'Fellowship']
  },
  {
    id: 'youth-demand-charter-documentary',
    title: 'Youth Demand Charter: Civic Participation & Good Governance',
    category: 'Documentaries & Visual Storytelling',
    client: 'Youth Civic Mobilization Network',
    year: '2023 - 2024',
    role: 'Lead Creative Director & Editor',
    duration: 'Advocacy Short',
    summary: 'A high-impact advocacy short film presenting the Youth Demand Charter—a citizen manifesto articulating youth priorities on employment, education, and political inclusion.',
    challenge: 'Distilling hundreds of youth survey responses and town hall resolutions into a punchy, shareable audiovisual manifesto.',
    solution: 'Crafted a dynamic, fast-paced video manifesto combining youth speeches, graphic motion callouts, and clear legislative demands.',
    deliverables: [
      'Youth Demand Charter Advocacy Short',
      'Digital Manifesto Motion Graphics Suite',
      'Social Media Mobilization Clip Package'
    ],
    coverImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Youth Demand Charter.mp4'),
    fileUrl: docVideo('Youth Demand Charter.mp4'),
    fileType: 'video',
    featured: false,
    tags: ['Youth Demand Charter', 'Civic Action', 'Youth Mobilization', 'Policy Advocacy']
  },
  {
    id: 'reserved-seats-for-women-conversation-continues',
    title: 'Reserved Seats for Women: The Conversation Continues!',
    category: 'Documentaries & Visual Storytelling',
    client: 'Women Political Participation & Legislative Reform Initiative',
    year: '2024',
    role: 'Director & Legislative Advocacy Storyteller',
    duration: 'Policy Dialogue',
    summary: 'A fast-paced policy dialogue and advocacy film analyzing constitutional affirmative action bills, special seats for women in parliament, and the pathway to equitable governance.',
    challenge: 'Demystifying complex constitutional amendment procedures and quota mechanisms for general public mobilization.',
    solution: 'Produced an engaging audiovisual breakdown highlighting comparative African parliament quotas and citizen advocacy call-to-action.',
    deliverables: [
      'Legislative Advocacy Video',
      'Affirmative Action Infographic Motion Asset',
      'Parliamentary Reform Campaign Clip'
    ],
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Reserved Seats for Women_ The Conversation Continues.mp4'),
    fileUrl: docVideo('Reserved Seats for Women_ The Conversation Continues.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Affirmative Action', 'Women In Politics', 'Legislative Advocacy', 'Constitutional Reform']
  },

  {
    id: 'sub-grantee-peer-learning',
    title: 'Sub Grantee & Peer Learning',
    category: 'Documentaries & Visual Storytelling',
    client: 'South Saharan Social Development Organisation (SSDO)',
    year: '2024',
    role: 'Producer & Documentary Editor',
    duration: 'Institutional Documentary',
    summary: 'A comprehensive institutional documentary capturing sub-grantee engagements and peer learning sessions, showcasing collaborative knowledge exchange, shared accountability frameworks, and capacity-building milestones across partner organizations.',
    challenge: 'Translating complex multi-stakeholder grant processes and cross-organizational learning sessions into an accessible, compelling visual narrative for diverse audiences.',
    solution: 'Structured field documentation of peer learning dialogues and sub-grantee presentations, weaving institutional milestones with human-interest perspectives from beneficiary communities.',
    deliverables: [
      'Full-Length Institutional Peer Learning Documentary',
      'Sub-Grantee Highlights & Impact Reel',
      'Institutional Knowledge Distribution Package'
    ],
    coverImage: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('Sub Grantee & Peer Learning.mp4'),
    fileUrl: docVideo('Sub Grantee & Peer Learning.mp4'),
    fileType: 'video',
    featured: true,
    tags: ['Sub Grantee', 'Peer Learning', 'Institutional Documentary', 'Capacity Building', 'SSDO']
  },

  // =================================================================
  // DOCUMENTARY PHOTOGRAPHY & FIELD PHOTO ESSAYS
  // =================================================================
  {
    id: 'reserved-seats-women-continued-special',
    title: 'Reserved Seats for Women: The Conversation Continues! (Extended Edition)',
    category: 'Documentaries & Visual Storytelling',
    client: 'Women Political Participation & Legislative Reform Initiative',
    year: '2024',
    role: 'Director & Legislative Advocacy Storyteller',
    duration: 'Policy Dialogue — Extended Cut',
    summary: 'Extended edition of the advocacy film on constitutional affirmative action bills and special seats for women in parliament, featuring additional testimonies, community voices, and a deeper dive into the pathway to equitable governance.',
    challenge: 'Expanding the reach of the core advocacy message to new audiences by presenting a richer, longer-form version of the legislative dialogue.',
    solution: 'Produced an extended cut with additional interview segments and citizen testimonies to deepen public understanding of parliamentary gender quotas and affirmative action reform.',
    deliverables: [
      'Extended Legislative Advocacy Video',
      'Community Voices Supplement',
      'Parliamentary Reform Extended Campaign Clip'
    ],
    coverImage: 'https://images.unsplash.com/photo-1560439513-74b037a25d84?auto=format&fit=crop&w=1200&q=80',
    videoUrl: docVideo('📣 Reserved Seats for Women_ The Conversation Continues!👩🏾_⚖.mp4'),
    fileUrl: docVideo('📣 Reserved Seats for Women_ The Conversation Continues!👩🏾_⚖.mp4'),
    fileType: 'video',
    featured: false,
    tags: ['Affirmative Action', 'Women In Politics', 'Legislative Advocacy', 'Constitutional Reform']
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: 'Olivia is gifted, and I genuinely enjoyed working with her. She brings a thoughtful perspective to her work, and her legal background gives her a unique ability to look at situations from different angles. She is creative, intentional, and knows how to communicate an idea in a way that connects with people. I would be very happy to work with her again.',
    author: 'Mary E.A.',
    role: 'HR Executive',
    organization: ''
  },
  {
    id: '2',
    quote: 'Olivia is an excellent writer. What stands out to me is her ability to make you see an idea differently through her words. She has a natural creativity that comes through strongly in her writing.',
    author: 'John-Martins, O. (Esq).',
    role: 'Creative Director',
    organization: 'Shatili'
  },
  {
    id: '3',
    quote: 'One thing I really appreciate about Olivia is her attention to detail. She notices things that are easy to miss and has a natural instinct for finding the story within a moment. You can see that in her visual work, where even simple photographs or everyday scenes feel intentional and thoughtfully captured.',
    author: 'Daniel N.',
    role: 'Cinematographer',
    organization: ''
  }
];

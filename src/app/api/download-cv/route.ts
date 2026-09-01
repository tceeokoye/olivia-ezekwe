import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const cvContent = `================================================================================
OLIVIA EZEKWE
Communications Strategist | Brand Lead | Visual Storyteller & Legal Professional
Email: ezekweolivia@gmail.com | Phone/WhatsApp: +2348067103176
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
Communications professional working across writing, storytelling, strategic communications,
digital content, and visual media. Experienced in turning ideas, complex information, and
real experiences into clear, engaging stories and content that connect with audiences.
Background in law (LL.M, B.L, LL.B), bringing deep analytical, research, and policy framing
skills to communications strategy across development, advocacy, and purpose-driven brands.

CORE COMPETENCIES
--------------------------------------------------------------------------------
- Strategic Communications & Campaign Planning
- Content Strategy, Editorial Writing & Storytelling
- Photography, Videography & Documentary Media
- Digital Communications & Social Media Management
- Brand Identity & Narrative Positioning
- Reports, Policy Briefs & Knowledge Publications
- SEO & Digital Ecosystem Management
- Public Advocacy & Stakeholder Engagement

PROFESSIONAL EXPERIENCE
--------------------------------------------------------------------------------
CONTENT & BRAND MANAGER (Remote)
Moneywise Doctor | Holistic Dimension Ltd, UK (2025 – Present)
- Lead content and digital brand communications tailored to a UK medical audience.
- Develop editorial content aligned with brand voice, audience interests, and objectives.
- Manage audience engagement across platforms, maintaining a responsive brand presence.
- Apply SEO and content optimization principles to website content to improve reach.
- Monitor content and audience analytics to inform strategic communication decisions.

COMMUNICATIONS LEAD
South Saharan Social Development Organisation (SSDO) (2024 – Present)
- Lead strategic communications across civic and development programmes including campaigns,
  digital communications, donor reporting, brand management, and multimedia storytelling.
- Led communications for the Cost of Justice Project in collaboration with UN Women.
- Led communications for the Sister Guardian Initiative across 34+ rural communities,
  contributing to a 350% increase in reported media visibility.
- Developed donor reports, policy briefs, and newsletters for government agencies and donors.
- Trained 50+ community-based advocates in storytelling and documenting human rights issues.

SOCIAL MEDIA & PUBLICITY MANAGER
DIGC Garki (2022 – Present)
- Lead communications, publicity, and digital engagement for special programmes and events.
- Produced and coordinated photography, short-form video content, and service coverage.
- Managed social media community engagement to strengthen visibility and participation.

COMMUNICATIONS CONSULTANT
Various Non-profits & Purpose-driven Brands (2018 – Present)
- Provided advisory on advocacy campaigns, brand rebranding, and media training.
- Designed digital advocacy campaigns reaching over 2.5M+ impressions.
- Consulted for hospitality, health, and academic brands on communications and visual media.

EDUCATION & QUALIFICATIONS
--------------------------------------------------------------------------------
- Master of Laws (LL.M) | Postgraduate Law Degree
- Barrister-at-Law (B.L) | Nigerian Law School, Admitted to the Nigerian Bar
- Bachelor of Laws (LL.B) | Faculty of Law, Honors

TOOLS & PLATFORMS
--------------------------------------------------------------------------------
Canva, Adobe Lightroom, WordPress, Elementor, Meta Business Suite, Mailchimp,
Microsoft Office Suite, Microsoft Teams, Zoom, Google Workspace.

================================================================================
`;

  return new NextResponse(cvContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Olivia_Ezekwe_CV.txt"',
    },
  });
}

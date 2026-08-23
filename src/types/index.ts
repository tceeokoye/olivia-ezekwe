export interface Project {
  id: string;
  title: string;
  category: 'Communications' | 'Digital' | 'Branding' | 'Photography' | 'Videography' | 'Reports';
  client: string;
  year: string;
  role: string;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  image: string;
  featured?: boolean;
  tags: string[];
}

export interface WritingItem {
  id: string;
  title: string;
  category: 'Articles & Blogs' | 'Reports & Publications' | 'Success Stories' | 'Press Releases & News' | 'Newsletters';
  publication: string;
  date: string;
  readTime: string;
  excerpt: string;
  link?: string;
  featured?: boolean;
  highlights: string[];
}

export interface PhotoItem {
  id: string;
  title: string;
  category: 'Community & Development' | 'Events & Conferences' | 'Training & Workshops' | 'Advocacy & Campaigns' | 'Portraits' | 'Documentary Photography';
  location: string;
  year: string;
  image: string;
  caption: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Documentaries' | 'Interviews' | 'Campaign Videos' | 'Event Highlights' | 'Reels / Short-form Videos';
  duration: string;
  client: string;
  role: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  summary: string;
  description: string;
  deliverables: string[];
  whoItIsFor: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar?: string;
}

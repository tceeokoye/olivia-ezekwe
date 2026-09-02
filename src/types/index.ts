export type PortfolioCategory =
  | 'Campaigns'
  | 'Creative Non-Fictions'
  | 'Editorial'
  | 'Press'
  | 'Writing Samples'
  | 'Documentaries & Visual Storytelling';

export interface Project {
  id: string;
  title: string;
  category: PortfolioCategory | 'Communications' | 'Digital' | 'Branding' | 'Photography' | 'Videography' | 'Reports';
  client?: string;
  year?: string;
  role?: string;
  summary: string;
  challenge?: string;
  solution?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string }[];
  image?: string;
  coverImage?: string;
  videoUrl?: string;
  duration?: string;
  fileUrl?: string;
  fileType?: 'pdf' | 'pptx' | 'gallery' | 'article' | 'video';
  fileSize?: string;
  images?: string[];
  highlights?: string[];
  featured?: boolean;
  tags: string[];
}

export interface WritingItem {
  id: string;
  title: string;
  category: string;
  publication: string;
  date: string;
  readTime: string;
  excerpt: string;
  link?: string;
  fileUrl?: string;
  featured?: boolean;
  highlights: string[];
}

export interface PhotoItem {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  caption: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: string;
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
  portfolioCategory: PortfolioCategory;
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

export interface Project {
  id: string;
  slug: string;
  title: string;
  customer?: string;
  environment?: string;
  category: string;
  role?: string;
  duration: string;
  location?: string;
  summary: string;
  responsibilities?: string[];
  technologies: string[];
  skills?: string[];
  status: string;
  architecture?: string;
  availability?: string;
  featured: boolean;
  futureCaseStudy: boolean;
  associatedWith?: string;
  diagrams?: string[];
  content?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  employmentType: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  projects: string[];
}

export interface TechnologyExperience {
  projectId?: string;
  experienceId?: string;
  summary: string;
}

export interface Technology {
  id: string;
  name: string;
  slug?: string;
  category: string;
  vendor?: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  description: string;
  featured?: boolean;
  icon?: string;
  color?: string;
  
  overview?: string;
  keyConcepts?: string[];
  useCases?: string[];
  bestPractices?: string[];
  architectureDiagram?: string;
  experience?: TechnologyExperience[];
  tags?: string[];

  relatedProjects?: string[];
  relatedExperience?: string[];
  relatedArticles?: string[];
  relatedCertifications?: string[];
  relatedTechnologies?: string[];
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  level?: string;
  description?: string;
  date: string;
  expirationDate?: string;
  credentialId?: string;
  url?: string;
  certificateUrl?: string;
  badge?: string;
  featured?: boolean;
  category?: string;
}

export interface Article {
  id: string;
  url: string;
  title: string;
  summary: string;
  category?: string;
  date: string;
  readingTime?: string;
  tags?: string[];
  coverImage?: string;
  featured?: boolean;
  platform?: string;
}

export interface Architecture {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  environment: "Production" | "Lab";
  diagrams: string[];
  lessonsLearned: string[];
  bestPractices: string[];
}

export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface Contact {
  email: string;
  github: string;
  linkedin: string;
  location: string;
  resume: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "ghost";
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  statistics: Statistic[];
  actions: HeroAction[];
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface FooterContent {
  brandStatement: string;
  quote: string;
  copyright: string;
  navigation: NavigationItem[];
  technologies: string[];
}

export interface About {
  title: string;
  bio: string[];
  philosophy: string;
  corePrinciples: string[];
  imageUrl?: string;
}

export interface ResumeCTA {
  title: string;
  description: string;
  buttonText: string;
  url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  location: string;
  socials: SocialLink[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  resumeUrl: string;
  avatarUrl?: string;
  socials: { github?: string; linkedin?: string; twitter?: string };
}

export interface About {
  paragraphs: string[];
  stats: { label: string; value: string }[];
  skills: { category: string; items: string[] }[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  highlights: string[];
}

export interface Internship {
  company: string;
  role: string;
  period: string;
  location?: string;
  points: string[];
  stack?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
}

export interface PortfolioData {
  profile: Profile;
  about: About;
  education: Education[];
  internships: Internship[];
  certifications: Certification[];
  projects: Project[];
}

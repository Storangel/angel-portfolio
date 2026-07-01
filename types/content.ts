export interface SiteConfig {
  name: string;
  title: string;
  motto: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  location: string;
  cvPath: string;
  locale: string;
}

export type HeroCredibilityIcon =
  | "experience"
  | "industrial"
  | "erp"
  | "automation";

export interface HeroCredibilityItem {
  label: string;
  icon: HeroCredibilityIcon;
}

export interface HeroFocusArea {
  label: string;
}

export interface HeroProfileCard {
  initials: string;
  name: string;
  title: string;
  roles: string[];
  focusAreas: HeroFocusArea[];
}

export interface HeroCta {
  label: string;
  href: string;
  download?: boolean;
}

export interface HeroContent {
  overline: string;
  headline: string;
  lead: string;
  credibility: HeroCredibilityItem[];
  profileCard: HeroProfileCard;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export interface HomepageFocusArea {
  title: string;
  description: string;
}

export interface HomepageSection {
  overline?: string;
  title: string;
  description?: string;
}

export interface HomepageExperienceSnapshot {
  company: string;
  role: string;
  period: string;
  summary: string;
  cvHref: string;
  projectsHref: string;
}

export interface HomepageCta {
  headline: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
}

export interface HomepageProjectPreview {
  id: string;
  name: string;
  description: string;
  technology: string;
  slug: string;
}

export type ProjectCategory =
  | "digital-transformation"
  | "automation"
  | "web-application"
  | "infrastructure";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  client: string;
  sector: string;
  period: string;
  engagement: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  approach: string;
  approachPoints: string[];
  solution: string;
  solutionPoints: string[];
  impact: string;
  impactItems: string[];
  technologyStack: string[];
  roles: string[];
  futureVision: string;
  mediaPlaceholders: string[];
  featured: boolean;
  category: ProjectCategory;
  images: ProjectImage[];
  technologyIds: string[];
  experienceId?: string;
}

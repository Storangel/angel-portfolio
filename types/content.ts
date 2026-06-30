export interface SiteConfig {
  name: string;
  title: string;
  motto: string;
  email: string;
  linkedIn: string;
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

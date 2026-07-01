import type { HeroContent, SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Angel Yepez",
  title: "IT Manager · Software Engineer · Digital Transformation",
  motto: "Building technology that businesses actually use.",
  email: "yepezangel86@gmail.com",
  phone: "+34 601 311 208",
  linkedIn: "https://www.linkedin.com/in/angel-yepez/",
  github: "https://github.com/Storangel",
  location: "Valencia, Spain",
  cvPath: "/cv",
  locale: "en",
};

export const heroContent: HeroContent = {
  overline: "IT Manager · Software Engineer · Digital Transformation",
  headline: "Building technology that businesses actually use.",
  lead: "IT leader and software engineer driving digital transformation in industrial environments — internal software, ERP integration, process automation, and IT infrastructure that teams adopt and rely on.",
  credibility: [
    { label: "IT leadership", icon: "experience" },
    { label: "Industrial operations", icon: "industrial" },
    { label: "ERP integration", icon: "erp" },
    { label: "Process automation", icon: "automation" },
  ],
  profileCard: {
    initials: "AY",
    name: siteConfig.name,
    title: siteConfig.title,
    roles: [
      "IT Manager",
      "Software Engineer",
      "Digital Transformation",
    ],
    focusAreas: [
      { label: "Internal Software" },
      { label: "ERP Integration" },
      { label: "Process Automation" },
    ],
  },
  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "Download CV",
    href: siteConfig.cvPath,
  },
};

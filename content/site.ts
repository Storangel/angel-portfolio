import type { HeroContent, SiteConfig } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Angel Yepez",
  title: "IT Manager & Digital Transformation Specialist",
  motto: "Building technology that businesses actually use.",
  email: "hello@angelyepez.com",
  linkedIn: "https://www.linkedin.com/in/angelyepez",
  cvPath: "/cv/angel-yepez-cv.pdf",
  locale: "en",
};

export const heroContent: HeroContent = {
  overline: "IT Manager · Digital Transformation · Software Development",
  headline: "Transforming business challenges into digital solutions.",
  lead: "IT Manager and Software Developer focused on digital transformation, process automation and practical AI solutions for real business operations.",
  credibility: [
    { label: "13+ years of experience", icon: "experience" },
    { label: "Industrial IT", icon: "industrial" },
    { label: "ERP integration", icon: "erp" },
    { label: "Business automation", icon: "automation" },
  ],
  profileCard: {
    initials: "AY",
    name: siteConfig.name,
    title: siteConfig.title,
    roles: [
      "IT Manager",
      "Digital Transformation",
      "Software Development",
    ],
    focusAreas: [
      { label: "Process Automation" },
      { label: "ERP Integration" },
      { label: "Web Applications" },
    ],
  },
  primaryCta: {
    label: "View Projects",
    href: "/projects",
  },
  secondaryCta: {
    label: "Download CV",
    href: siteConfig.cvPath,
    download: true,
  },
};

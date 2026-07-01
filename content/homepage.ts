import { resumeExperience } from "@/content/cv/resume";
import { siteConfig } from "@/content/site";
import type {
  HomepageCta,
  HomepageExperienceSnapshot,
  HomepageFocusArea,
  HomepageSection,
} from "@/types/content";

export const professionalFocusSection: HomepageSection & {
  areas: HomepageFocusArea[];
} = {
  overline: "How I Work",
  title: "Professional Focus",
  description:
    "Technology leadership grounded in industrial operations — from strategy and architecture to hands-on delivery.",
  areas: [
    {
      title: "Digital Transformation",
      description:
        "Modernising how teams work by replacing manual processes with reliable digital workflows.",
    },
    {
      title: "Internal Software Development",
      description:
        "Building applications aligned with real operational needs — not generic off-the-shelf tools.",
    },
    {
      title: "ERP & Business Systems",
      description:
        "Connecting software with ERP and business systems so data flows without duplication.",
    },
    {
      title: "Automation & AI",
      description:
        "Applying automation and practical AI where they remove friction in daily operations.",
    },
  ],
};

const martinezRole = resumeExperience.find(
  (entry) => entry.id === "martinez-forklift",
);

export const experienceSnapshotSection: HomepageSection & {
  snapshot: HomepageExperienceSnapshot;
} = {
  overline: "Current Role",
  title: "Experience Snapshot",
  snapshot: {
    company: martinezRole?.company ?? "Martínez Forklift S.L.",
    role:
      martinezRole?.role ??
      "IT Manager · Digital Transformation · Software Development",
    period: martinezRole?.period ?? "October 2017 — Present",
    summary:
      martinezRole?.lead ??
      "Leading digital transformation across software development, ERP integration, IT infrastructure, and business process automation.",
    cvHref: siteConfig.cvPath,
    projectsHref: "/projects",
  },
};

export const homepageCtaSection: HomepageCta = {
  headline: "Let's build technology that businesses actually use.",
  primaryCta: {
    label: "Download CV",
    href: siteConfig.cvPath,
  },
  secondaryCta: {
    label: "Contact",
    href: `mailto:${siteConfig.email}`,
  },
};

export const homepageProjectsSection: HomepageSection = {
  overline: "Selected Work",
  title: "Selected Projects",
  description:
    "A concise overview of recent work. Full case studies are on the Projects page.",
};

import type { PageSeo } from "@/types/seo";

export const defaultSeo = {
  title: "Angel Yepez — IT Manager & Digital Transformation Specialist",
  description:
    "Technology leader helping companies evolve through software, automation, and digital transformation. IT Manager, Software Developer, and Business Process Automation Expert.",
  keywords: [
    "IT Manager",
    "Digital Transformation",
    "Software Development",
    "Business Automation",
    "Technology Leadership",
    "Angel Yepez",
  ],
} as const;

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: "/",
  },
  projects: {
    title: "Projects — Angel Yepez",
    description:
      "Portfolio of business solutions: digital transformation, automation, and software development for industrial and operational environments.",
    path: "/projects",
  },
};

import { heroContent, siteConfig } from "@/content/site";
import { primaryNavigation } from "@/content/navigation";
import { projects } from "@/content/projects";
import { featuredProjectsSection } from "@/content/featured-projects";
import {
  experienceSnapshotSection,
  homepageCtaSection,
  homepageProjectsSection,
  professionalFocusSection,
} from "@/content/homepage";
import type { HeroContent, HomepageProjectPreview, Project, SiteConfig } from "@/types/content";
import type { NavItem } from "@/types/navigation";

export function getProfessionalFocusSection() {
  return professionalFocusSection;
}

export function getExperienceSnapshotSection() {
  return experienceSnapshotSection;
}

export function getHomepageCtaSection() {
  return homepageCtaSection;
}

export function getHomepageProjectsSection() {
  return homepageProjectsSection;
}

export function getHomepageProjects(): HomepageProjectPreview[] {
  return getProjects().map((project) => ({
    id: project.id,
    name: project.name,
    description: project.summary,
    technology: project.technologyStack.join(" · "),
    slug: project.slug,
  }));
}

export function getFeaturedProjectsSection() {
  return featuredProjectsSection;
}

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getNavigation(): NavItem[] {
  return primaryNavigation;
}

export function getHeroContent(): HeroContent {
  return heroContent;
}

export function getProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

import {
  resumeCompetencies,
  resumeCompactProjects,
  resumeEducation,
  resumeExperience,
  resumeLanguages,
  resumeReferencesNote,
  resumeSummary,
  resumeTechnicalSkills,
  resumeTitle,
} from "@/content/cv/resume";
import { SITE_URL } from "@/lib/constants";
import { getFeaturedProjects, getSiteConfig } from "@/lib/content";
import type { Resume, ResumeProject } from "@/types/resume";

function mapRolesToKeywords(roles: string[]): string[] {
  const keywords: string[] = [];
  const has = (pattern: RegExp) =>
    roles.some((role) => pattern.test(role.toLowerCase()));

  if (has(/business analysis/)) keywords.push("Business Analysis");
  if (has(/software architecture/)) keywords.push("Software Architecture");
  if (has(/erp integration/)) keywords.push("ERP Integration");
  if (has(/\bux\b/)) keywords.push("UX");
  if (has(/backend/)) keywords.push("Backend");
  if (has(/frontend/)) keywords.push("Frontend");
  if (has(/deployment/)) keywords.push("Deployment");
  if (has(/training/)) keywords.push("Training");

  return keywords;
}

function mapProjectToResume(
  project: ReturnType<typeof getFeaturedProjects>[number],
): ResumeProject {
  return {
    name: project.name,
    client: project.client,
    sector: project.sector,
    period: project.period,
    summary: project.summary,
    challenge: project.challenge,
    solution: project.solution,
    impactItems: project.impactItems,
    technologyStack: project.technologyStack,
    roles: mapRolesToKeywords(project.roles),
    futureVision: project.futureVision,
  };
}

/**
 * Single source of truth for the printable CV.
 * Merges site identity, featured projects, and CV-specific content.
 */
export function getResume(): Resume {
  const site = getSiteConfig();
  const featuredProjects = getFeaturedProjects();

  return {
    name: site.name,
    title: resumeTitle,
    email: site.email,
    phone: site.phone,
    linkedIn: site.linkedIn,
    github: site.github,
    location: site.location,
    website: SITE_URL,
    summary: resumeSummary,
    experience: resumeExperience,
    education: resumeEducation,
    technicalSkills: resumeTechnicalSkills,
    featuredProjects: featuredProjects.map(mapProjectToResume),
    compactProjects: resumeCompactProjects,
    competencies: resumeCompetencies,
    languages: resumeLanguages,
    referencesNote: resumeReferencesNote,
  };
}

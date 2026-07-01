import type {
  ResumeCompactProject,
  ResumeEducation,
  ResumeExperience,
  ResumeLanguage,
  ResumeSkillGroup,
} from "@/types/resume";

export const resumeTitle =
  "IT Manager\nSoftware Engineer\nDigital Transformation";

export const resumeSummary =
  "IT leader and software engineer with a track record of digital transformation in industrial operations. Delivers internal software, ERP integration, and business process automation aligned with how teams actually work. Owns IT infrastructure and leads cross-functional technology initiatives across management, administration, and field service.";

export const resumeExperience: ResumeExperience[] = [
  {
    id: "martinez-forklift",
    role: "IT Manager · Digital Transformation · Software Development",
    company: "Martínez Forklift S.L.",
    period: "October 2017 — Present",
    location: "Spain",
    lead: "Leading the company's digital transformation strategy across software development, ERP integration, IT infrastructure and business process automation.",
    highlights: [
      "Lead digital transformation initiatives across operations, administration, and technical service.",
      "Design and develop internal business applications aligned with real operational workflows.",
      "Deliver ERP integration and process automation projects, including GESCAR.",
      "Manage IT infrastructure and support the practical adoption of AI in daily operations.",
      "Coordinate technology initiatives between management, administration, and field teams.",
    ],
  },
  {
    id: "prior-roles",
    role: "Software Development · IT Consulting",
    company: "Freelance & Contract Engagements",
    period: "2012 — 2017",
    highlights: [
      "Built web applications and internal tools for industrial and SME clients.",
      "Delivered ERP integrations, reporting systems, and workflow digitisation projects.",
      "Supported clients with technology decisions and business process improvement.",
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    id: "unefa",
    degree: "Systems Engineer",
    institution:
      "Universidad Nacional Experimental Politécnica de la Fuerza Armada (UNEFA)",
    period: "Graduated 2012",
  },
];

export const resumeTechnicalSkills: ResumeSkillGroup[] = [
  {
    category: "Frontend",
    skills: ["TypeScript", "Next.js", "React"],
  },
  {
    category: "Backend",
    skills: ["Node.js"],
  },
  {
    category: "Infrastructure",
    skills: ["Windows Server", "SQL Server", "Linux", "Docker"],
  },
  {
    category: "Business Systems",
    skills: ["ERP", "GESCAR"],
  },
  {
    category: "Automation",
    skills: ["Automation", "AI"],
  },
];

export const resumeCompetencies: string[] = [
  "Digital Transformation",
  "Software Architecture",
  "Leadership",
  "ERP Integration",
  "Product Thinking",
  "Business Analysis",
  "Industrial IT",
  "Automation",
  "AI Adoption",
];

export const resumeLanguages: ResumeLanguage[] = [
  { language: "Spanish", level: "Native" },
  {
    language: "English",
    level: "Basic professional reading",
  },
];

export const resumeReferencesNote = "References available upon request.";

export const resumeCompactProjects: ResumeCompactProject[] = [
  {
    name: "Carliex Core",
    purpose: "Internal platform for core business workflows and operational data.",
    technologies: "Next.js · TypeScript · SQL Server",
    relevance: "Centralised processes and improved visibility across business functions.",
  },
  {
    name: "ONYX Digital",
    purpose: "Digital platform for vehicle detailing operations and customer presence.",
    technologies: "Next.js · TypeScript · React",
    relevance: "Structured service coordination and professional digital presence.",
  },
  {
    name: "YPZ OS",
    purpose: "Personal operating environment for projects, workflows, and business information.",
    technologies: "Next.js · TypeScript · React",
    relevance: "Centralised management of professional work and daily operations.",
  },
];

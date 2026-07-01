export interface ResumeExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  location?: string;
  lead?: string;
  highlights: string[];
}

export interface ResumeEducation {
  id: string;
  degree: string;
  institution: string;
  period: string;
}

export interface ResumeSkillGroup {
  category: string;
  skills: string[];
}

export interface ResumeCompactProject {
  name: string;
  purpose: string;
  technologies: string;
  relevance: string;
}

export interface ResumeProject {
  name: string;
  client: string;
  sector: string;
  period: string;
  summary: string;
  challenge: string;
  solution: string;
  impactItems: string[];
  technologyStack: string[];
  roles: string[];
  futureVision: string;
}

export interface ResumeLanguage {
  language: string;
  level: string;
}

export interface Resume {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
  github: string;
  location: string;
  website?: string;
  summary: string;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  technicalSkills: ResumeSkillGroup[];
  featuredProjects: ResumeProject[];
  compactProjects: ResumeCompactProject[];
  competencies: string[];
  languages: ResumeLanguage[];
  referencesNote: string;
}

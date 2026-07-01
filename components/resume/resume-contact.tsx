import { ResumeSection } from "@/components/resume/resume-section";
import type { Resume, ResumeLanguage } from "@/types/resume";

interface ResumeLanguagesProps {
  languages: ResumeLanguage[];
  variant?: "default" | "sidebar";
}

export function ResumeLanguages({
  languages,
  variant = "default",
}: ResumeLanguagesProps) {
  return (
    <ResumeSection
      title="Languages"
      variant={variant === "sidebar" ? "sidebar" : "default"}
    >
      <ul className="resume-language-list">
        {languages.map((entry) => (
          <li key={entry.language} className="resume-language-item">
            <span className="resume-language-name">{entry.language}</span>
            <span className="resume-language-level">{entry.level}</span>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}

interface ResumeContactProps {
  resume: Pick<
    Resume,
    "location" | "phone" | "email" | "linkedIn" | "github" | "website"
  >;
  variant?: "default" | "sidebar";
}

export function ResumeContact({
  resume,
  variant = "default",
}: ResumeContactProps) {
  return (
    <ResumeSection
      title="Contact"
      variant={variant === "sidebar" ? "sidebar" : "default"}
      className="resume-contact-section"
    >
      <ul className="resume-profile-lines">
        <li>{resume.location}</li>
        <li>{resume.phone}</li>
        <li>{resume.email}</li>
        <li>{resume.linkedIn}</li>
        <li>{resume.github}</li>
        {resume.website ? <li>{resume.website}</li> : null}
      </ul>
    </ResumeSection>
  );
}

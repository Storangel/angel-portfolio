import type { Resume } from "@/types/resume";

interface ResumeHeaderProps {
  resume: Pick<Resume, "name" | "title" | "summary">;
}

export function ResumeHeader({ resume }: ResumeHeaderProps) {
  return (
    <header className="resume-identity">
      <h1 className="resume-name">{resume.name}</h1>
      <p className="resume-title">{resume.title}</p>
      <p className="resume-summary">{resume.summary}</p>
    </header>
  );
}

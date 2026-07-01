import type { Resume } from "@/types/resume";

interface ResumeIdentityProps {
  resume: Pick<Resume, "name" | "title">;
}

export function ResumeIdentity({ resume }: ResumeIdentityProps) {
  return (
    <header className="cv2-identity">
      <h1 className="cv2-name">{resume.name}</h1>
      <p className="cv2-title">{resume.title}</p>
    </header>
  );
}

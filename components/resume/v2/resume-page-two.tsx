import { ResumeProjectGrid } from "@/components/resume/v2/resume-project-grid";
import { ResumeProjectHero } from "@/components/resume/v2/resume-project-hero";
import { ResumePage } from "@/components/resume/resume-page";
import type { ResumeCompactProject, ResumeProject } from "@/types/resume";

interface ResumePageTwoProps {
  featuredProject: ResumeProject | undefined;
  compactProjects: ResumeCompactProject[];
}

export function ResumePageTwo({
  featuredProject,
  compactProjects,
}: ResumePageTwoProps) {
  if (!featuredProject) {
    return null;
  }

  return (
    <ResumePage pageNumber={2}>
      <div className="cv2-p2">
        <h1 className="cv2-p2-title">Selected Projects</h1>
        <ResumeProjectHero project={featuredProject} />
        <ResumeProjectGrid projects={compactProjects} />
      </div>
    </ResumePage>
  );
}

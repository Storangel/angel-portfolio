import { ResumePageOne } from "@/components/resume/v2/resume-page-one";
import { ResumePageTwo } from "@/components/resume/v2/resume-page-two";
import type { Resume } from "@/types/resume";

interface ResumeDocumentV2Props {
  resume: Resume;
}

export function ResumeDocumentV2({ resume }: ResumeDocumentV2Props) {
  return (
    <div className="cv2-document">
      <ResumePageOne resume={resume} />
      <ResumePageTwo
        featuredProject={resume.featuredProjects[0]}
        compactProjects={resume.compactProjects}
      />
    </div>
  );
}

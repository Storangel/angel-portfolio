import { ResumeDocumentV2 } from "@/components/resume/v2/resume-document-v2";
import { getResume } from "@/lib/resume";
import type { Resume } from "@/types/resume";

interface ResumeDocumentProps {
  resume?: Resume;
}

export function ResumeDocument({ resume: resumeProp }: ResumeDocumentProps) {
  const resume = resumeProp ?? getResume();

  return <ResumeDocumentV2 resume={resume} />;
}

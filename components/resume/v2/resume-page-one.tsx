import { ResumeContactBlock } from "@/components/resume/v2/resume-contact-block";
import { ResumeEducationV2 } from "@/components/resume/v2/resume-education-v2";
import { ResumeExecutiveSummary } from "@/components/resume/v2/resume-executive-summary";
import { ResumeExperienceV2 } from "@/components/resume/v2/resume-experience-v2";
import { ResumeIdentity } from "@/components/resume/v2/resume-identity";
import { ResumeRail } from "@/components/resume/v2/resume-rail";
import { ResumePage } from "@/components/resume/resume-page";
import type { Resume } from "@/types/resume";

interface ResumePageOneProps {
  resume: Resume;
}

export function ResumePageOne({ resume }: ResumePageOneProps) {
  return (
    <ResumePage pageNumber={1}>
      <div className="cv2-p1">
        <div className="cv2-p1-layout">
          <div className="cv2-p1-main">
            <ResumeIdentity
              resume={{
                name: resume.name,
                title: resume.title,
              }}
            />
            <ResumeExecutiveSummary summary={resume.summary} />
            <ResumeExperienceV2 experience={resume.experience} />
            <ResumeEducationV2 education={resume.education} />
          </div>
          <ResumeRail
            skillGroups={resume.technicalSkills}
            languages={resume.languages}
            competencies={resume.competencies}
          />
        </div>
        <ResumeContactBlock
          resume={{
            location: resume.location,
            phone: resume.phone,
            email: resume.email,
            linkedIn: resume.linkedIn,
            github: resume.github,
            website: resume.website,
          }}
        />
      </div>
    </ResumePage>
  );
}

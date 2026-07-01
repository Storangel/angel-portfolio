import { ResumeSection } from "@/components/resume/resume-section";
import type { ResumeEducation } from "@/types/resume";

interface ResumeEducationListProps {
  education: ResumeEducation[];
}

export function ResumeEducationList({ education }: ResumeEducationListProps) {
  return (
    <ResumeSection title="Education" variant="supporting">
      <ul className="resume-education-list">
        {education.map((entry) => (
          <li key={entry.id} className="resume-education-item">
            <div className="resume-education-head">
              <div>
                <p className="resume-education-degree">{entry.degree}</p>
                <p className="resume-education-school">{entry.institution}</p>
              </div>
              <p className="resume-education-period">{entry.period}</p>
            </div>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}

import { ResumeSection } from "@/components/resume/resume-section";
import type { ResumeExperience } from "@/types/resume";

interface ResumeExperienceListProps {
  experience: ResumeExperience[];
}

export function ResumeExperienceList({ experience }: ResumeExperienceListProps) {
  return (
    <ResumeSection title="Professional Experience" variant="hero">
      <ul className="resume-experience-list">
        {experience.map((entry) => (
          <li key={entry.id} className="resume-experience-item">
            <div className="resume-experience-head">
              <div className="resume-experience-ident">
                <p className="resume-company">{entry.company}</p>
                <p className="resume-role">{entry.role}</p>
                {entry.location ? (
                  <p className="resume-location">{entry.location}</p>
                ) : null}
              </div>
              <p className="resume-period">{entry.period}</p>
            </div>
            <ul className="resume-highlights">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </ResumeSection>
  );
}

import type { ResumeEducation } from "@/types/resume";

interface ResumeEducationV2Props {
  education: ResumeEducation[];
}

export function ResumeEducationV2({ education }: ResumeEducationV2Props) {
  return (
    <section className="cv2-education">
      <h2 className="cv2-section-minor">Education</h2>
      <ul className="cv2-education-list">
        {education.map((entry) => (
          <li key={entry.id} className="cv2-education-item">
            <span className="cv2-education-degree">{entry.degree}</span>
            <span className="cv2-education-sep"> · </span>
            <span className="cv2-education-school">{entry.institution}</span>
            <span className="cv2-education-sep"> · </span>
            <span className="cv2-education-period">{entry.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

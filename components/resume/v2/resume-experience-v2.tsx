import type { ResumeExperience } from "@/types/resume";

interface ResumeExperienceV2Props {
  experience: ResumeExperience[];
}

export function ResumeExperienceV2({ experience }: ResumeExperienceV2Props) {
  return (
    <section className="cv2-experience">
      <h2 className="cv2-section-major">Professional Experience</h2>
      <ul className="cv2-experience-list">
        {experience.map((entry, index) => (
          <li
            key={entry.id}
            className={
              index === 0
                ? "cv2-experience-item cv2-experience-item--primary"
                : "cv2-experience-item cv2-experience-item--secondary"
            }
          >
            <div className="cv2-experience-head">
              <div>
                <p className="cv2-company">{entry.company}</p>
                <p className="cv2-role">{entry.role}</p>
                {entry.location ? (
                  <p className="cv2-location">{entry.location}</p>
                ) : null}
                {entry.lead ? (
                  <p className="cv2-experience-lead">{entry.lead}</p>
                ) : null}
              </div>
              <p className="cv2-period">{entry.period}</p>
            </div>
            <ul className="cv2-highlights">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}

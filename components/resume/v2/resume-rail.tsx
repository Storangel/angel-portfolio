import type { ResumeLanguage, ResumeSkillGroup } from "@/types/resume";

interface ResumeRailProps {
  skillGroups: ResumeSkillGroup[];
  languages: ResumeLanguage[];
  competencies: string[];
}

function RailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="cv2-rail-section">
      <h2 className="cv2-rail-label">{title}</h2>
      {children}
    </section>
  );
}

export function ResumeRail({
  skillGroups,
  languages,
  competencies,
}: ResumeRailProps) {
  return (
    <aside className="cv2-rail">
      <RailSection title="Tech Stack">
        <ul className="cv2-stack-list">
          {skillGroups.map((group) => (
            <li key={group.category} className="cv2-stack-group">
              <span className="cv2-stack-category">{group.category}</span>
              <span className="cv2-stack-items">
                {group.skills.join(" · ")}
              </span>
            </li>
          ))}
        </ul>
      </RailSection>

      <RailSection title="Languages">
        <ul className="cv2-rail-lines">
          {languages.map((entry) => (
            <li key={entry.language}>
              <span className="cv2-lang-name">{entry.language}</span>
              <span className="cv2-lang-level"> — {entry.level}</span>
            </li>
          ))}
        </ul>
      </RailSection>

      <RailSection title="Core Competencies">
        <ul className="cv2-competency-list">
          {competencies.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </RailSection>
    </aside>
  );
}

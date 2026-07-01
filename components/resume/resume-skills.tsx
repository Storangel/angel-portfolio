import { ResumeSection } from "@/components/resume/resume-section";
import type { ResumeSkillGroup } from "@/types/resume";

interface ResumeSkillsProps {
  skillGroups: ResumeSkillGroup[];
  variant?: "default" | "sidebar";
}

export function ResumeSkills({
  skillGroups,
  variant = "default",
}: ResumeSkillsProps) {
  return (
    <ResumeSection
      title="Technical Stack"
      variant={variant === "sidebar" ? "sidebar" : "default"}
    >
      <div className="resume-stack-cloud">
        {skillGroups.map((group) => (
          <div key={group.category} className="resume-chip-row">
            {group.skills.map((skill) => (
              <span key={skill} className="resume-chip">
                {skill}
              </span>
            ))}
          </div>
        ))}
      </div>
    </ResumeSection>
  );
}

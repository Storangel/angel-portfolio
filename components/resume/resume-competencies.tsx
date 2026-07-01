import { ResumeSection } from "@/components/resume/resume-section";

interface ResumeCompetenciesProps {
  competencies: string[];
  variant?: "default" | "sidebar";
}

export function ResumeCompetencies({
  competencies,
  variant = "default",
}: ResumeCompetenciesProps) {
  const midpoint = Math.ceil(competencies.length / 2);
  const leftColumn = competencies.slice(0, midpoint);
  const rightColumn = competencies.slice(midpoint);

  return (
    <ResumeSection
      title="Core Competencies"
      variant={variant === "sidebar" ? "sidebar" : "default"}
    >
      <div className="resume-competency-columns">
        <ul className="resume-competency-column">
          {leftColumn.map((competency) => (
            <li key={competency}>{competency}</li>
          ))}
        </ul>
        <ul className="resume-competency-column">
          {rightColumn.map((competency) => (
            <li key={competency}>{competency}</li>
          ))}
        </ul>
      </div>
    </ResumeSection>
  );
}

import type { ResumeCompactProject } from "@/types/resume";

interface ResumeProjectGridProps {
  projects: ResumeCompactProject[];
}

export function ResumeProjectGrid({ projects }: ResumeProjectGridProps) {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="cv2-project-grid">
      <h2 className="cv2-section-minor">Other Selected Projects</h2>
      <ul className="cv2-project-grid-list">
        {projects.map((project) => (
          <li key={project.name} className="cv2-project-card">
            <p className="cv2-project-card-name">{project.name}</p>
            <p className="cv2-project-card-purpose">{project.purpose}</p>
            <p className="cv2-project-card-tech">{project.technologies}</p>
            <p className="cv2-project-card-relevance">{project.relevance}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

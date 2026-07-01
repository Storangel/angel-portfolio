import type { ResumeProject } from "@/types/resume";

interface ResumeProjectHeroProps {
  project: ResumeProject;
}

export function ResumeProjectHero({ project }: ResumeProjectHeroProps) {
  return (
    <article className="cv2-project-hero">
      <header className="cv2-project-hero-head">
        <h2 className="cv2-project-name">{project.name}</h2>
        <p className="cv2-project-meta">
          {project.client} · {project.sector} · {project.period}
        </p>
        <p className="cv2-project-lead">{project.summary}</p>
      </header>

      <div className="cv2-project-narrative">
        <div className="cv2-project-narrative-col">
          <h3 className="cv2-project-label">Challenge</h3>
          <p className="cv2-project-body">{project.challenge}</p>
        </div>
        <div className="cv2-project-narrative-col">
          <h3 className="cv2-project-label">Solution</h3>
          <p className="cv2-project-body">{project.solution}</p>
        </div>
      </div>

      <div className="cv2-project-impact">
        <h3 className="cv2-project-impact-title">Business Impact</h3>
        <ul className="cv2-project-impact-list">
          {project.impactItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="cv2-project-footer">
        <div className="cv2-project-footer-col">
          <h3 className="cv2-project-label">My Role</h3>
          <p className="cv2-project-footer-text">{project.roles.join(" · ")}</p>
        </div>
        <div className="cv2-project-footer-col">
          <h3 className="cv2-project-label">Technology</h3>
          <p className="cv2-project-footer-text">
            {project.technologyStack.join(" · ")}
          </p>
        </div>
      </div>
    </article>
  );
}

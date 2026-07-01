import type { ResumeCompactProject, ResumeProject } from "@/types/resume";

interface ResumeProjectsProps {
  projects: ResumeProject[];
  compactProjects: ResumeCompactProject[];
}

export function ResumeProjects({
  projects,
  compactProjects,
}: ResumeProjectsProps) {
  const flagship = projects[0];

  if (!flagship) {
    return null;
  }

  return (
    <div className="resume-case-studies">
      <article className="resume-case-study">
        <header className="resume-case-hero">
          <p className="resume-case-eyebrow">Featured Project</p>
          <h2 className="resume-case-title">{flagship.name}</h2>
          <p className="resume-case-meta">
            {flagship.client} · {flagship.sector} · {flagship.period}
          </p>
          <p className="resume-case-lead">{flagship.summary}</p>
        </header>

        <div className="resume-case-narrative">
          <div className="resume-case-narrative-col">
            <h3 className="resume-case-label">Challenge</h3>
            <p className="resume-case-body">{flagship.challenge}</p>
          </div>
          <div className="resume-case-narrative-col">
            <h3 className="resume-case-label">Solution</h3>
            <p className="resume-case-body">{flagship.solution}</p>
          </div>
        </div>

        <div className="resume-case-impact">
          <h3 className="resume-case-impact-title">Business Impact</h3>
          <ul className="resume-case-impact-list">
            {flagship.impactItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-case-footer">
          <div className="resume-case-footer-col">
            <h3 className="resume-case-label-muted">Technology</h3>
            <div className="resume-case-tech-chips">
              {flagship.technologyStack.map((tech) => (
                <span key={tech} className="resume-case-tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="resume-case-footer-col resume-case-footer-col-wide">
            <h3 className="resume-case-label-muted">Role</h3>
            <p className="resume-case-footer-text">
              {flagship.roles.join(" · ")}
            </p>
            <h3 className="resume-case-label-muted resume-case-label-spaced">
              Future Vision
            </h3>
            <p className="resume-case-footer-text resume-case-vision">
              {flagship.futureVision}
            </p>
          </div>
        </div>
      </article>

      {compactProjects.length > 0 ? (
        <section className="resume-compact-projects">
          <h3 className="resume-compact-projects-title">Selected Projects</h3>
          <ul className="resume-compact-projects-list">
            {compactProjects.map((project) => (
              <li key={project.name} className="resume-compact-project">
                <p className="resume-compact-project-name">{project.name}</p>
                <p className="resume-compact-project-purpose">{project.purpose}</p>
                <p className="resume-compact-project-tech">{project.technologies}</p>
                <p className="resume-compact-project-relevance">
                  {project.relevance}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

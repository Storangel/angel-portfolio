import { CaseStudySection } from "@/components/content/case-study-blocks";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface PortfolioProjectCaseStudyProps {
  project: Project;
  headingLevel?: "h1" | "h2" | "h3";
  className?: string;
}

export function PortfolioProjectCaseStudy({
  project,
  headingLevel = "h2",
  className,
}: PortfolioProjectCaseStudyProps) {
  const Heading = headingLevel;

  return (
    <article
      aria-labelledby={`portfolio-project-${project.slug}`}
      className={cn("max-w-4xl", className)}
    >
      <header className="mb-8 space-y-3 lg:mb-10">
        <Heading
          id={`portfolio-project-${project.slug}`}
          className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl"
        >
          {project.name}
        </Heading>
        {project.client ? (
          <p className="text-base font-medium text-foreground">
            {project.client}
          </p>
        ) : null}
        <p className="text-sm text-muted-foreground">
          {project.sector} · {project.period}
        </p>
        <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </header>

      <div className="flex flex-col gap-8 lg:gap-10">
        <CaseStudySection title="Problem">
          <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {project.challenge}
          </p>
        </CaseStudySection>

        <div className="h-px bg-border" aria-hidden="true" />

        <CaseStudySection title="Solution">
          <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
            {project.solution}
          </p>
        </CaseStudySection>

        <div className="h-px bg-border" aria-hidden="true" />

        <CaseStudySection title="Business Impact">
          <div className="rounded-lg bg-foreground p-6 md:p-8">
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.impactItems.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-background"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Technology" titleClassName="opacity-70">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.technologyStack.join(" · ")}
          </p>
        </CaseStudySection>
      </div>
    </article>
  );
}

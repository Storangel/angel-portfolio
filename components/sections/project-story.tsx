import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  CaseStudyList,
  CaseStudySection,
} from "@/components/content/case-study-blocks";
import { ProjectMedia } from "@/components/content/project-media";
import { TagList } from "@/components/content/tag-list";
import { Button } from "@/components/ui/button";
import { getFeaturedProjectsSection } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface ProjectStoryProps {
  project: Project;
  headingLevel?: "h1" | "h2";
  showFeaturedLabel?: boolean;
  showExploreCta?: boolean;
  className?: string;
}

export function ProjectStory({
  project,
  headingLevel = "h2",
  showFeaturedLabel = false,
  showExploreCta = false,
  className,
}: ProjectStoryProps) {
  const section = getFeaturedProjectsSection();
  const Heading = headingLevel;

  return (
    <article
      aria-labelledby={`project-story-${project.slug}`}
      className={cn(
        "grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(260px,38%)] lg:items-start lg:gap-20",
        className,
      )}
    >
      <div className="flex flex-col gap-12 lg:gap-14">
        <header className="space-y-5">
          {showFeaturedLabel ? (
            <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground">
              Featured Project
            </p>
          ) : null}

          <div className="space-y-3">
            <Heading
              id={`project-story-${project.slug}`}
              className="text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground md:text-4xl"
            >
              {project.name}
            </Heading>
            <p className="text-base font-medium text-foreground">
              {project.client}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span>{project.sector}</span>
            <span className="hidden text-border sm:inline" aria-hidden="true">
              ·
            </span>
            <span>{project.engagement}</span>
            <span className="hidden text-border sm:inline" aria-hidden="true">
              ·
            </span>
            <span>{project.period}</span>
          </div>

          <p className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </header>

        <ProjectMedia project={project} className="lg:hidden" />

        <div className="flex flex-col gap-12 lg:gap-14">
          <CaseStudySection title="The Challenge">
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              {project.challenge}
            </p>
            <CaseStudyList items={project.challengePoints} className="pt-2" />
          </CaseStudySection>

          <div className="h-px bg-border" aria-hidden="true" />

          <CaseStudySection title="My Approach">
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              {project.approach}
            </p>
            <CaseStudyList items={project.approachPoints} className="pt-2" />
          </CaseStudySection>

          <div className="h-px bg-border" aria-hidden="true" />

          <CaseStudySection title="The Solution">
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              {project.solution}
            </p>
            <CaseStudyList items={project.solutionPoints} className="pt-2" />
          </CaseStudySection>

          <div className="h-px bg-border" aria-hidden="true" />

          <CaseStudySection title="Results">
            <div className="space-y-5 rounded-lg border border-border bg-background p-6 md:p-8">
              <p className="text-base font-medium leading-relaxed text-foreground">
                {project.impact}
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {project.impactItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-foreground"
                  >
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CaseStudySection>

          <CaseStudySection title="Technology" titleClassName="opacity-70">
            <div className="opacity-75">
              <TagList tags={project.technologyStack} />
            </div>
          </CaseStudySection>

          <CaseStudySection title="My Role">
            <CaseStudyList items={project.roles} />
          </CaseStudySection>

          <div className="h-px bg-border" aria-hidden="true" />

          <CaseStudySection title="Future Vision">
            <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground">
              {project.futureVision}
            </p>
          </CaseStudySection>

          {showExploreCta ? (
            <div>
              <Button asChild size="lg">
                <Link href={`/projects/${project.slug}`}>
                  {section.exploreCaseStudyLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
        <ProjectMedia project={project} />
      </div>
    </article>
  );
}

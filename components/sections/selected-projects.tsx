import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectPreviewCard } from "@/components/cards/project-preview-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import {
  getHomepageProjects,
  getHomepageProjectsSection,
} from "@/lib/content";

export function SelectedProjects() {
  const projects = getHomepageProjects();
  const section = getHomepageProjectsSection();

  if (projects.length === 0) {
    return null;
  }

  return (
    <Section className="border-t border-border bg-surface/50 py-24 md:py-32 lg:py-36">
      <Container className="space-y-12 md:space-y-16">
        <FadeIn>
          <header className="flex max-w-3xl flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-8">
            <div className="space-y-3">
              {section.overline ? (
                <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground">
                  {section.overline}
                </p>
              ) : null}
              <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[1.875rem]">
                {section.title}
              </h2>
              {section.description ? (
                <p className="max-w-[65ch] leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              ) : null}
            </div>
            <Button asChild variant="secondary" className="shrink-0">
              <Link href="/projects">View all projects</Link>
            </Button>
          </header>
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index > 0 ? 0.04 * index : 0}>
              <li className="h-full">
                <ProjectPreviewCard project={project} />
              </li>
            </FadeIn>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

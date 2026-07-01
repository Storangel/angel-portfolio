import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { ProjectStory } from "@/components/sections/project-story";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/content";

interface ProjectCaseStudyProps {
  project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <Section className="py-16 md:py-20 lg:py-24">
      <Container>
        <Button asChild variant="ghost" size="sm" className="mb-10 -ml-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Projects
          </Link>
        </Button>

        <ProjectStory project={project} headingLevel="h1" />
      </Container>
    </Section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHeader } from "@/components/sections/page-header";
import { PortfolioProjectCaseStudy } from "@/components/sections/portfolio-project-case-study";
import { pageSeo } from "@/content/seo";
import { getProjects } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(pageSeo.projects);

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <>
      <Section className="pb-12 pt-16 md:pb-16 md:pt-20">
        <PageHeader
          title="Projects"
          description="Business solutions delivered through software, automation, and digital transformation. Each project starts with an operational problem — not a technology choice."
        />
      </Section>

      <Section className="border-t border-border bg-surface/50 py-16 md:py-24 lg:py-28">
        <Container className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={project.slug}
              className={
                index > 0 ? "scroll-mt-24 border-t border-border pt-24 md:pt-32" : "scroll-mt-24"
              }
            >
              <PortfolioProjectCaseStudy project={project} />
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}

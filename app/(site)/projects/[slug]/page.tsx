import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PortfolioProjectCaseStudy } from "@/components/sections/portfolio-project-case-study";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, getProjectSlugs } from "@/lib/content";
import { buildPageMetadata } from "@/lib/metadata";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return buildPageMetadata({
    title: `${project.name} — Angel Yepez`,
    description: project.summary,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section className="py-16 md:py-20 lg:py-24">
      <Container>
        <Button asChild variant="ghost" size="sm" className="mb-10 -ml-2">
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Projects
          </Link>
        </Button>

        <PortfolioProjectCaseStudy project={project} headingLevel="h1" />
      </Container>
    </Section>
  );
}

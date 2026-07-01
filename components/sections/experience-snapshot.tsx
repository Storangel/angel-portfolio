import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { getExperienceSnapshotSection } from "@/lib/content";

export function ExperienceSnapshot() {
  const section = getExperienceSnapshotSection();
  const { snapshot } = section;

  return (
    <Section className="border-t border-border bg-surface/50 py-24 md:py-32 lg:py-36">
      <Container>
        <FadeIn className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,34%)] lg:items-end lg:gap-16">
          <div className="space-y-6">
            {section.overline ? (
              <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground">
                {section.overline}
              </p>
            ) : null}
            <h2 className="text-3xl font-semibold tracking-[-0.01em] text-foreground md:text-[1.875rem]">
              {section.title}
            </h2>

            <div className="space-y-3 border-l border-border pl-6">
              <p className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                {snapshot.company}
              </p>
              <p className="text-base font-medium text-foreground">
                {snapshot.role}
              </p>
              <p className="text-sm text-muted-foreground">{snapshot.period}</p>
            </div>

            <p className="max-w-[58ch] text-base leading-relaxed text-muted-foreground">
              {snapshot.summary}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button asChild size="lg">
              <Link href={snapshot.cvHref}>Download CV</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={snapshot.projectsHref}>
                View Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

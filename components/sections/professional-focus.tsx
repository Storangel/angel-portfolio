import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { getProfessionalFocusSection } from "@/lib/content";

export function ProfessionalFocus() {
  const section = getProfessionalFocusSection();

  return (
    <Section className="border-t border-border py-24 md:py-32 lg:py-36">
      <Container>
        <FadeIn className="space-y-12 md:space-y-16">
          <header className="max-w-3xl space-y-3">
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
          </header>

          <ul className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {section.areas.map((area) => (
              <li key={area.title} className="space-y-3">
                <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
                  {area.title}
                </h3>
                <p className="max-w-[42ch] text-base leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>
      </Container>
    </Section>
  );
}

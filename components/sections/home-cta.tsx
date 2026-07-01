import Link from "next/link";
import { Download, Mail } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { getHomepageCtaSection } from "@/lib/content";

export function HomeCta() {
  const cta = getHomepageCtaSection();

  return (
    <Section
      id="contact"
      className="border-t border-border py-24 md:py-32 lg:py-36"
    >
      <Container>
        <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.02em] text-foreground md:text-4xl">
            {cta.headline}
          </h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg">
              <Link href={cta.primaryCta.href}>
                <Download className="h-4 w-4" aria-hidden="true" />
                {cta.primaryCta.label}
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={cta.secondaryCta.href}>
                <Mail className="h-4 w-4" aria-hidden="true" />
                {cta.secondaryCta.label}
              </Link>
            </Button>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}

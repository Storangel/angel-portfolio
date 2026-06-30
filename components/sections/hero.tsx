import Link from "next/link";
import {
  Building2,
  Clock3,
  Download,
  Link2,
  Workflow,
} from "lucide-react";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { HeroProfileCard } from "@/components/sections/hero-profile-card";
import { FadeIn } from "@/components/motion/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getHeroContent } from "@/lib/content";
import type { HeroCredibilityIcon } from "@/types/content";

const credibilityIcons: Record<
  HeroCredibilityIcon,
  React.ComponentType<{ className?: string }>
> = {
  experience: Clock3,
  industrial: Building2,
  erp: Link2,
  automation: Workflow,
};

export function Hero() {
  const hero = getHeroContent();

  return (
    <Section className="flex min-h-[calc(100svh-4rem)] items-center pb-20 pt-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 xl:grid-cols-[1fr_420px]">
          <FadeIn className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="outline"
                className="px-3 py-1 text-xs font-medium tracking-normal"
              >
                {hero.overline}
              </Badge>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                {hero.headline}
              </h1>

              <p className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
                {hero.lead}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                </Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link
                  href={hero.secondaryCta.href}
                  {...(hero.secondaryCta.download ? { download: true } : {})}
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <ul className="flex flex-col gap-3 border-t border-border pt-8 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
              {hero.credibility.map((item) => {
                const Icon = credibilityIcons[item.icon];

                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-foreground/70"
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </li>
                );
              })}
            </ul>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full lg:justify-self-end">
            <HeroProfileCard profile={hero.profileCard} />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}

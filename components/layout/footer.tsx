import Link from "next/link";
import { Download } from "lucide-react";
import { Container } from "@/components/layout/container";
import { NavLinks } from "@/components/layout/nav-links";
import { Button } from "@/components/ui/button";
import { getNavigation, getSiteConfig } from "@/lib/content";

export function Footer() {
  const navigation = getNavigation();
  const site = getSiteConfig();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div className="max-w-sm space-y-3">
              <p className="text-sm font-semibold text-foreground">{site.name}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {site.motto}
              </p>
            </div>

            <nav aria-label="Footer navigation">
              <NavLinks
                items={navigation}
                orientation="vertical"
                className="md:grid md:grid-cols-2 md:gap-x-8"
              />
            </nav>
          </div>

          <div className="flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {site.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </Link>
              <Button asChild variant="ghost" size="sm">
                <Link href={site.cvPath} download>
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

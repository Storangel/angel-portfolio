import Link from "next/link";
import { Download } from "lucide-react";
import { Container } from "@/components/layout/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { NavLinks } from "@/components/layout/nav-links";
import { Button } from "@/components/ui/button";
import { getNavigation, getSiteConfig } from "@/lib/content";

export function Header() {
  const navigation = getNavigation();
  const site = getSiteConfig();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <Container>
        <div className="flex h-16 items-center gap-6 lg:gap-8">
          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="text-sm font-semibold tracking-tight text-foreground transition-opacity duration-150 hover:opacity-80"
            >
              {site.name}
            </Link>
          </div>

          <nav
            aria-label="Main navigation"
            className="hidden flex-1 justify-center xl:flex"
          >
            <NavLinks items={navigation} />
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href={site.cvPath}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </Link>
            </Button>
            <Button
              asChild
              size="icon"
              className="sm:hidden"
              aria-label="Download CV"
            >
              <Link href={site.cvPath}>
                <Download className="h-4 w-4" />
              </Link>
            </Button>
            <MobileNav
              items={navigation}
              cvPath={site.cvPath}
              siteName={site.name}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}

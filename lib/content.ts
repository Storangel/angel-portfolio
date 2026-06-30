import { heroContent, siteConfig } from "@/content/site";
import { primaryNavigation } from "@/content/navigation";
import type { HeroContent, SiteConfig } from "@/types/content";
import type { NavItem } from "@/types/navigation";

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getNavigation(): NavItem[] {
  return primaryNavigation;
}

export function getHeroContent(): HeroContent {
  return heroContent;
}

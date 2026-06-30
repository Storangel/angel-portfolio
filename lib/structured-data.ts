import { siteConfig } from "@/content/site";
import { SITE_URL } from "@/lib/constants";

export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: SITE_URL,
    email: siteConfig.email,
    sameAs: [siteConfig.linkedIn],
    knowsAbout: [
      "Digital Transformation",
      "Software Development",
      "Business Process Automation",
      "IT Management",
      "Technology Consulting",
    ],
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — Portfolio`,
    url: SITE_URL,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
  };
}

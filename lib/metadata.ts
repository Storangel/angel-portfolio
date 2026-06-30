import type { Metadata } from "next";
import { defaultSeo } from "@/content/seo";
import { SITE_URL } from "@/lib/constants";
import type { PageSeo } from "@/types/seo";

export function buildPageMetadata(
  page?: PageSeo,
  overrides?: Partial<Metadata>,
): Metadata {
  const title = page?.title ?? defaultSeo.title;
  const description = page?.description ?? defaultSeo.description;
  const path = page?.path ?? "/";
  const url = new URL(path, SITE_URL).toString();

  return {
    title,
    description,
    keywords: [...defaultSeo.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "Angel Yepez",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...overrides,
  };
}

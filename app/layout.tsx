import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { getPersonJsonLd, getWebSiteJsonLd } from "@/lib/structured-data";
import { buildPageMetadata } from "@/lib/metadata";
import { SITE_URL } from "@/lib/constants";
import { pageSeo } from "@/content/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata(pageSeo.home),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonJsonLd();
  const webSiteJsonLd = getWebSiteJsonLd();

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webSiteJsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}

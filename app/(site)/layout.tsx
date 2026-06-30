import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}

import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section>
      <Container variant="narrow" className="text-center">
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.05em] text-muted-foreground">
            404
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Page not found
          </h1>
          <p className="text-muted-foreground">
            The page you are looking for does not exist or has been moved.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

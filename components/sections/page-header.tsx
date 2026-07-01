import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, description, className }: PageHeaderProps) {
  return (
    <Container variant="narrow" className={cn("space-y-4", className)}>
      <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.02em] text-foreground md:text-[2.25rem]">
        {title}
      </h1>
      {description ? (
        <p className="max-w-[65ch] text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Container>
  );
}

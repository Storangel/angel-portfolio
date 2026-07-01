import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function CaseStudySection({
  title,
  children,
  className,
  titleClassName,
}: CaseStudySectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      <h3
        className={cn(
          "text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground",
          titleClassName,
        )}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

interface CaseStudyListProps {
  items: string[];
  variant?: "bullet" | "check";
  className?: string;
}

export function CaseStudyList({
  items,
  variant = "bullet",
  className,
}: CaseStudyListProps) {
  return (
    <ul className={cn("space-y-2.5", className)}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
        >
          {variant === "check" ? (
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-success"
              aria-hidden="true"
            />
          ) : (
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
              aria-hidden="true"
            />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

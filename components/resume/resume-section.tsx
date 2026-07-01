import { cn } from "@/lib/utils";

interface ResumeSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "hero" | "sidebar" | "supporting";
}

export function ResumeSection({
  title,
  children,
  className,
  variant = "default",
}: ResumeSectionProps) {
  return (
    <section
      className={cn(
        "resume-section",
        variant === "hero" && "resume-section-hero",
        variant === "sidebar" && "resume-section-sidebar",
        variant === "supporting" && "resume-section-supporting",
        className,
      )}
    >
      <h2
        className={cn(
          "resume-section-title",
          variant === "hero" && "resume-section-title-hero",
          variant === "sidebar" && "resume-section-title-sidebar",
          variant === "supporting" && "resume-section-title-supporting",
        )}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

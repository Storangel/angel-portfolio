import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Project, ProjectImage } from "@/types/content";

interface ProjectMediaProps {
  project: Project;
  className?: string;
}

function ScreenshotSlot({ label }: { label: string }) {
  return (
    <div className="relative flex aspect-[16/10] flex-col overflow-hidden rounded-md border border-border bg-background">
      <div
        className="relative flex flex-1 items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <span className="relative font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
          Preview
        </span>
      </div>
      <div className="border-t border-border bg-muted/50 px-3 py-2">
        <p className="text-xs font-medium text-foreground">{label}</p>
      </div>
    </div>
  );
}

function ProjectMediaImage({ image }: { image: ProjectImage }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover object-top"
      sizes="(max-width: 1024px) 100vw, 480px"
    />
  );
}

export function ProjectMedia({ project, className }: ProjectMediaProps) {
  const image = project.images[0];

  if (image) {
    return (
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted",
          className,
        )}
      >
        <ProjectMediaImage image={image} />
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {project.mediaPlaceholders.map((label) => (
        <ScreenshotSlot key={label} label={label} />
      ))}
    </div>
  );
}

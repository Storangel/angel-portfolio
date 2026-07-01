import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TagList } from "@/components/content/tag-list";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function ProjectCardPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative flex aspect-video items-center justify-center overflow-hidden rounded-t-lg border-b border-border bg-muted"
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <span className="relative text-2xl font-semibold tracking-tight text-muted-foreground">
        {initials}
      </span>
    </div>
  );
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const heroImage = project.images[0];

  return (
    <Card
      className={cn(
        "group overflow-hidden transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_2px_4px_-2px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {heroImage ? (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ) : (
        <ProjectCardPlaceholder name={project.name} />
      )}

      <CardHeader className="space-y-4 pb-0">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.05em] text-muted-foreground">
            {project.client}
          </p>
          <h3 className="text-xl font-semibold leading-snug text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-foreground/80"
            >
              {project.name}
            </Link>
          </h3>
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
        </div>
        <TagList tags={project.technologyStack} />
      </CardHeader>

      <CardContent className="pt-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
        >
          View Project
          <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </CardContent>
    </Card>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { HomepageProjectPreview } from "@/types/content";

interface ProjectPreviewCardProps {
  project: HomepageProjectPreview;
  className?: string;
}

export function ProjectPreviewCard({
  project,
  className,
}: ProjectPreviewCardProps) {
  return (
    <Card
      className={cn(
        "group flex h-full flex-col transition-all duration-200 hover:border-neutral-300 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_2px_4px_-2px_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <CardHeader className="flex-1 space-y-3 pb-0">
        <h3 className="text-lg font-semibold leading-snug text-foreground">
          {project.name}
        </h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <p className="text-sm text-muted-foreground">{project.technology}</p>
      </CardHeader>

      <CardContent className="pt-4">
        <Button asChild variant="secondary" size="sm">
          <Link href={`/projects#${project.slug}`}>
            View Project
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { HeroProfileCard } from "@/types/content";

interface HeroProfileCardProps {
  profile: HeroProfileCard;
  className?: string;
}

export function HeroProfileCard({ profile, className }: HeroProfileCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-surface p-6 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_2px_4px_-2px_rgba(0,0,0,0.05)] md:p-8",
        className,
      )}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-border bg-background text-lg font-semibold tracking-tight text-foreground">
              {profile.initials}
            </div>
            <div className="min-w-0 space-y-1">
              <p className="truncate text-base font-semibold text-foreground">
                {profile.name}
              </p>
              <p className="text-sm leading-snug text-muted-foreground">
                {profile.title}
              </p>
            </div>
          </div>

          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end sm:gap-1">
            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              Profile
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              Available
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {profile.roles.map((role) => (
            <Badge key={role} variant="outline" size="sm">
              {role}
            </Badge>
          ))}
        </div>

        <div className="space-y-3 border-t border-border pt-5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            Current Focus
          </p>
          <ul className="space-y-2.5">
            {profile.focusAreas.map((area) => (
              <li
                key={area.label}
                className="flex items-center justify-between gap-3 rounded-md border border-border/60 bg-background/80 px-3 py-2.5"
              >
                <span className="text-sm text-foreground">{area.label}</span>
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 border-t border-border pt-4 font-mono text-[10px] text-muted-foreground">
          <span className="text-secondary">~/portfolio</span>
          <span className="text-border">|</span>
          <span>business-first engineering</span>
        </div>
      </div>
    </div>
  );
}

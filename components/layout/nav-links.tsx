"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";

interface NavLinksProps {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
  orientation?: "horizontal" | "vertical";
}

export function NavLinks({
  items,
  className,
  onNavigate,
  orientation = "horizontal",
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul
      className={cn(
        "flex gap-1",
        orientation === "horizontal"
          ? "flex-row items-center"
          : "flex-col",
        className,
      )}
    >
      {items.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md px-2.5 py-2 text-sm font-medium transition-colors duration-150 xl:px-3",
                isActive
                  ? "text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

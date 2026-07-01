"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavLinks } from "@/components/layout/nav-links";
import type { NavItem } from "@/types/navigation";

interface MobileNavProps {
  items: NavItem[];
  cvPath: string;
  siteName: string;
}

export function MobileNav({ items, cvPath, siteName }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="xl:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby={undefined}>
        <SheetHeader>
          <SheetTitle>{siteName}</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-6">
          <NavLinks
            items={items}
            orientation="vertical"
            onNavigate={() => setOpen(false)}
          />
          <Button asChild className="w-full">
            <Link href={cvPath} onClick={() => setOpen(false)}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

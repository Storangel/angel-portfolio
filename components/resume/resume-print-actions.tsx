"use client";

import { Printer } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function ResumePrintActions() {
  return (
    <div className="resume-print-actions print:hidden">
      <button
        type="button"
        className={cn(buttonVariants(), "[&_svg]:pointer-events-auto")}
        onClick={() => window.print()}
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print / Save as PDF
      </button>
    </div>
  );
}

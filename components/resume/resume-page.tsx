import { cn } from "@/lib/utils";

interface ResumePageProps {
  children: React.ReactNode;
  pageNumber: 1 | 2;
  className?: string;
}

export function ResumePage({ children, pageNumber, className }: ResumePageProps) {
  return (
    <div
      className={cn("resume-page", className)}
      data-page={pageNumber}
      aria-label={`Resume page ${pageNumber}`}
    >
      {children}
    </div>
  );
}

import type { Metadata } from "next";
import { ResumeDocument } from "@/components/resume/resume-document";
import { ResumePrintActions } from "@/components/resume/resume-print-actions";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "CV — Angel Yepez",
  description:
    "Professional curriculum vitae of Angel Yepez — IT Manager, Digital Transformation Specialist, and Full Stack Developer.",
  path: "/cv",
});

export default function ResumePage() {
  return (
    <>
      <ResumePrintActions />
      <ResumeDocument />
    </>
  );
}

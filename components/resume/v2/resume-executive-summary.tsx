interface ResumeExecutiveSummaryProps {
  summary: string;
}

export function ResumeExecutiveSummary({ summary }: ResumeExecutiveSummaryProps) {
  return (
    <section className="cv2-executive-summary" aria-label="Executive Summary">
      <p className="cv2-executive-summary-text">{summary}</p>
    </section>
  );
}

import type { Resume } from "@/types/resume";

interface ResumeContactBlockProps {
  resume: Pick<
    Resume,
    "location" | "phone" | "email" | "linkedIn" | "github" | "website"
  >;
}

function displayUrl(url: string): string {
  return url
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

export function ResumeContactBlock({ resume }: ResumeContactBlockProps) {
  const items = [
    { label: "Location", value: resume.location },
    { label: "Phone", value: resume.phone },
    { label: "Email", value: resume.email },
    { label: "Website", value: resume.website ? displayUrl(resume.website) : null },
    { label: "LinkedIn", value: displayUrl(resume.linkedIn) },
    { label: "GitHub", value: displayUrl(resume.github) },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value));

  return (
    <section className="cv2-contact-block" aria-label="Contact">
      <h2 className="cv2-contact-block-title">Contact</h2>
      <dl className="cv2-contact-grid">
        {items.map((item) => (
          <div key={item.label} className="cv2-contact-item">
            <dt className="cv2-contact-label">{item.label}</dt>
            <dd className="cv2-contact-value">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

import "./resume-v2.css";

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="resume-viewport">
      {children}
    </div>
  );
}

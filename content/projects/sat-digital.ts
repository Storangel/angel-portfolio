import type { Project } from "@/types/content";

export const satDigital: Project = {
  id: "sat-digital",
  slug: "sat-digital",
  name: "SAT Digital",
  client: "Martínez Forklift",
  sector: "Industrial Sector",
  period: "2025 — Present",
  engagement: "IT Manager · Product Owner · Full Stack Developer",
  summary:
    "Designed and developed SAT Digital, an internal platform that digitized the complete technical service workflow through direct integration with the company's ERP system.",
  challenge:
    "The technical service team at Martínez Forklift relied on paper work orders to manage repairs, maintenance, and customer visits. Information moved slowly between the field, the office, and the ERP — creating friction for technicians, administrators, and customers alike.",
  challengePoints: [
    "Paper work orders with no real-time visibility",
    "Difficult tracking of service status and history",
    "Duplicated data entry across systems",
    "Disconnected information between field and office",
    "Slow communication with customers and internal teams",
  ],
  approach:
    "Before writing code, the priority was to understand how work actually happened — in the workshop, in administration, and inside the ERP. The solution had to fit the process, not force the process to fit the software.",
  approachPoints: [
    "Understanding how technicians complete work in the field",
    "Understanding administrative and approval workflows",
    "Mapping GESCAR ERP data flows and integration points",
    "Designing the digital process before building the application",
  ],
  solution:
    "SAT Digital is a web platform that manages the full technical service lifecycle — from work order creation to customer delivery — with direct integration to GESCAR ERP.",
  solutionPoints: [
    "Digital work orders",
    "Digital signatures",
    "Photo capture in the field",
    "Automatic PDF generation",
    "GESCAR ERP integration",
    "Responsive interface for technicians and office staff",
    "Role-based access control",
    "Automatic status communication",
  ],
  impact:
    "The technical service department now operates on a single digital workflow. Paper has been removed from daily operations and information reaches the right people without manual handoffs.",
  impactItems: [
    "Paperless workflow",
    "Better traceability",
    "Faster information flow",
    "Centralized documentation",
    "Improved customer experience",
  ],
  technologyStack: [
    "Next.js",
    "TypeScript",
    "SQL Server",
    "Node.js",
    "GitHub",
  ],
  roles: [
    "Business analysis",
    "Process design",
    "UX",
    "Software architecture",
    "Backend development",
    "Frontend development",
    "ERP integration",
    "Deployment",
    "Continuous improvement",
    "User training",
  ],
  futureVision:
    "SAT Digital is an evolving platform. New modules and workflows are being added as the organization identifies further opportunities for automation — always driven by operational needs, not technology for its own sake.",
  mediaPlaceholders: ["Dashboard", "Digital Work Order", "PDF Report"],
  featured: true,
  category: "digital-transformation",
  images: [],
  technologyIds: [
    "nextjs",
    "typescript",
    "sql-server",
    "nodejs",
    "github",
  ],
};

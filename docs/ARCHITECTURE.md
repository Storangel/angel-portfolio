# Angel Portfolio — Technical Architecture

**Status:** Approved  
**Version:** 1.0  
**Last updated:** June 2025  

**Companion documents:** `PROJECT_VISION.md` · `BRAND.md` · `DESIGN_SYSTEM.md` · `CONTENT_STRATEGY.md`

---

## Overview

This document defines the complete technical architecture for Angel Portfolio before implementation begins. Every structural, rendering, and organizational decision described here is derived from the approved product vision, brand identity, design system, and content strategy.

### Architectural Goals

| Goal | Architectural Expression |
|---|---|
| **Trust and professionalism** | Fast, accessible, semantically correct pages with minimal client-side JavaScript |
| **Demonstrate, don't claim** | Content-driven architecture where projects and experience are first-class data entities |
| **Performance ≥ 95 Lighthouse** | Server Components by default, static generation where possible, optimized assets |
| **Scalability** | Flat routing, typed content layer, composable components — ready for blog, i18n, and analytics |
| **Maintainability** | Clear separation of concerns, strong TypeScript typing, no duplicated logic |

### Core Technology Decisions

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 16 (App Router) | Server rendering, file-based routing, built-in SEO and image optimization |
| Language | TypeScript (strict) | Type safety across content models, components, and utilities |
| Styling | Tailwind CSS v4 | Utility-first styling aligned with design tokens |
| UI Primitives | shadcn/ui (Radix UI) | Accessible, composable components — matches design system requirements |
| Animation | Framer Motion | Purposeful motion per `DESIGN_SYSTEM.md`; client-only, tree-shaken |
| Icons | Lucide React | Consistent iconography, lightweight, tree-shakeable |
| Deployment | Vercel | Edge delivery, preview deployments, GitHub integration |
| Version Control | GitHub | Source of truth, CI/CD trigger |

---

## Folder Structure

The project uses a **hybrid organization**: feature-oriented route groups for pages, layer-oriented directories for shared infrastructure. This balances scalability (new pages are self-contained) with reuse (shared UI and logic are centralized).

```text
angel-portfolio/
├── app/                          # Next.js App Router — routes and layouts only
│   ├── (site)/                   # Route group: public portfolio pages
│   │   ├── layout.tsx            # Site shell: header, footer, main wrapper
│   │   ├── page.tsx              # Home
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # Project listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Project detail (case study)
│   │   ├── skills/
│   │   │   └── page.tsx
│   │   ├── technologies/
│   │   │   └── page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/                      # Route handlers (V2+)
│   │   └── contact/
│   │       └── route.ts          # Contact form submission
│   ├── layout.tsx                # Root layout: html, fonts, metadata defaults
│   ├── globals.css               # Tailwind imports, CSS custom properties (design tokens)
│   ├── sitemap.ts                # Dynamic sitemap generation
│   ├── robots.ts                 # Robots.txt configuration
│   ├── not-found.tsx             # Custom 404 page
│   └── opengraph-image.tsx       # Default OG image (V2: per-page variants)
│
├── components/                   # React components — organized by responsibility
│   ├── ui/                       # shadcn/ui primitives (Button, Input, Card, etc.)
│   ├── layout/                   # Structural components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── navigation.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   └── skip-link.tsx
│   ├── sections/                 # Page-level content sections (composed on pages)
│   │   ├── hero.tsx
│   │   ├── featured-projects.tsx
│   │   ├── professional-snapshot.tsx
│   │   ├── cta-banner.tsx
│   │   └── page-header.tsx
│   ├── cards/                    # Card variants per DESIGN_SYSTEM.md
│   │   ├── project-card.tsx
│   │   ├── experience-card.tsx
│   │   ├── timeline-card.tsx
│   │   ├── technology-card.tsx
│   │   └── skill-card.tsx
│   ├── content/                  # Content presentation components
│   │   ├── prose.tsx             # Typography wrapper for long-form text
│   │   ├── badge.tsx
│   │   ├── tag-list.tsx
│   │   ├── stat.tsx
│   │   └── external-link.tsx
│   ├── forms/                    # Interactive form components (client)
│   │   └── contact-form.tsx
│   └── motion/                   # Animation wrappers (client)
│       ├── fade-in.tsx
│       ├── stagger-children.tsx
│       └── page-transition.tsx
│
├── content/                      # Static content source — no React, pure data
│   ├── site.ts                   # Global site config (name, motto, social links)
│   ├── navigation.ts             # Navigation items and structure
│   ├── about.ts                  # About page content
│   ├── experience.ts             # Experience entries
│   ├── projects/                 # One file per project
│   │   ├── index.ts              # Re-exports all projects, featured flags
│   │   └── [project-slug].ts
│   ├── skills.ts                 # Skills grouped by domain
│   ├── technologies.ts           # Technologies grouped by category
│   └── seo.ts                    # Default and per-page SEO metadata
│
├── lib/                          # Shared logic — no UI
│   ├── utils.ts                  # cn() helper, general utilities
│   ├── content.ts                # Content access functions (getProjects, getExperience, etc.)
│   ├── metadata.ts               # Metadata builder utilities
│   ├── structured-data.ts        # JSON-LD schema generators
│   └── constants.ts              # App-wide constants (breakpoints, limits)
│
├── types/                        # TypeScript type definitions
│   ├── content.ts                # Project, Experience, Skill, Technology interfaces
│   ├── navigation.ts             # NavItem, NavGroup types
│   └── seo.ts                    # Metadata, StructuredData types
│
├── hooks/                        # Custom React hooks (client-only)
│   ├── use-reduced-motion.ts
│   └── use-media-query.ts
│
├── providers/                    # React context providers (client)
│   └── theme-provider.tsx        # Dark mode (V2)
│
├── public/                       # Static assets served as-is
│   ├── cv/                       # Downloadable CV (PDF)
│   ├── images/
│   │   ├── projects/             # Project screenshots
│   │   ├── about/                # Profile photo
│   │   └── og/                   # Open Graph images
│   ├── icons/                    # Favicon, apple-touch-icon
│   └── fonts/                    # Self-hosted fonts (if not using next/font)
│
├── docs/                         # Project documentation (this file and companions)
│
└── [config files]                # next.config.ts, tsconfig.json, tailwind, eslint
```

### Folder Rules

1. **`app/` contains routes and layouts only.** No business logic, no inline content strings, no complex UI composition. Pages import sections and content functions.
2. **`components/` is organized by responsibility**, not by page. Page-specific compositions live in `components/sections/` and are reused across routes where applicable.
3. **`content/` is the single source of truth** for all site copy and structured data. Content files are TypeScript modules with typed exports — not hardcoded in components.
4. **`lib/` contains pure functions** with no React dependencies. Content access, metadata builders, and schema generators live here.
5. **`types/` defines shared interfaces** consumed by content files, lib functions, and components.
6. **No `utils/` duplication.** One `lib/utils.ts` for the `cn()` helper and shared utilities. Feature-specific logic stays in its domain (`lib/content.ts`, `lib/metadata.ts`).

---

## App Router Strategy

Angel Portfolio uses the **Next.js App Router** with a server-first rendering model. This aligns with performance goals (minimal JavaScript, fast LCP) and SEO requirements (fully rendered HTML on first response).

### Rendering Model

| Route | Rendering Strategy | Rationale |
|---|---|---|
| `/` (Home) | Static (SSG) | Content changes infrequently; maximum performance |
| `/about` | Static (SSG) | Stable content |
| `/experience` | Static (SSG) | Stable content |
| `/projects` | Static (SSG) | Listing generated at build time |
| `/projects/[slug]` | Static (SSG) via `generateStaticParams` | All project slugs pre-rendered |
| `/skills` | Static (SSG) | Stable content |
| `/technologies` | Static (SSG) | Stable content |
| `/contact` | Static shell + client form | Page is static; form is client-interactive |
| `/api/contact` | Server Route Handler | Form submission endpoint (V2) |
| `/blog` (future) | Static (SSG) + MDX | Pre-rendered articles at build time |
| `/blog/[slug]` (future) | Static (SSG) via `generateStaticParams` | One page per article |

**Default:** Server Components for every page and layout. Client Components (`"use client"`) are used only where browser interactivity is required.

### Server vs Client Component Boundaries

| Server Components (default) | Client Components (explicit) |
|---|---|
| All `page.tsx` and `layout.tsx` files | Contact form |
| Section components (hero, cards, timelines) | Mobile navigation (toggle state) |
| Card components | Theme toggle (V2) |
| Content presentation (prose, badges, tags) | Framer Motion wrappers |
| Header and footer shells | `useReducedMotion` consumers |
| SEO metadata exports | Any component using `useState`, `useEffect`, or event handlers |

### Route Group: `(site)`

All public portfolio pages live inside the `(site)` route group. This group:

- Applies the shared site layout (header, footer, main content area) without affecting the URL path.
- Keeps the root `app/layout.tsx` minimal — responsible only for `<html>`, fonts, global metadata, and providers.
- Allows future route groups (e.g., `(blog)`) to have alternative layouts without restructuring.

### URL Structure

Flat, shallow URLs per `PROJECT_VISION.md` information architecture principles:

```text
/                     → Home
/about                → About
/experience           → Experience
/projects             → Projects listing
/projects/[slug]      → Project case study
/skills               → Skills
/technologies         → Technologies
/contact              → Contact
/cv                   → CV download redirect (or direct /public/cv/ link)
/blog                 → Blog listing (V3)
/blog/[slug]          → Article detail (V3)
```

No nested hierarchies beyond `/projects/[slug]` and `/blog/[slug]`. Every core page is reachable in one click from navigation.

### Error and Edge Routes

| File | Purpose |
|---|---|
| `app/not-found.tsx` | Custom 404 — branded, links back to Home and Projects |
| `app/sitemap.ts` | XML sitemap generated from content layer |
| `app/robots.ts` | Crawler directives |
| `app/opengraph-image.tsx` | Default social sharing image |

---

## Component Hierarchy

Components follow a strict **four-tier hierarchy**. Higher tiers compose lower tiers. No tier skips levels.

```text
Tier 1 — UI Primitives (components/ui/)
  Button, Input, Textarea, Card, Badge, Separator, Sheet, etc.
  Source: shadcn/ui. Styled with design tokens. No business logic.

Tier 2 — Layout & Structure (components/layout/)
  Container, Section, Header, Footer, Navigation, SkipLink
  Define page skeleton. No content-specific logic.

Tier 3 — Domain Components (components/cards/, components/content/, components/forms/)
  ProjectCard, ExperienceCard, TimelineCard, TechnologyCard, Prose, ContactForm
  Know about content types. Compose Tier 1 + Tier 2. Mostly Server Components.

Tier 4 — Page Sections (components/sections/)
  Hero, FeaturedProjects, ProfessionalSnapshot, CTABanner, PageHeader
  Compose Tier 3 components into page-level sections. Used exclusively in page.tsx files.

Pages (app/(site)/**/page.tsx)
  Import Tier 4 sections and content from lib/content. No direct Tier 1 usage unless justified.
```

### Component Design Rules

1. **One component, one responsibility.** A `ProjectCard` renders a project summary. It does not fetch data, manage state, or handle routing logic beyond a link.
2. **Props are typed explicitly.** Every component receives typed props from `types/content.ts`. No `any`.
3. **No prop drilling beyond two levels.** If data must travel deeper, the page fetches and passes to sections; sections pass to cards.
4. **Composition over configuration.** Prefer composable children over boolean prop flags (`<Card><CardImage /><CardContent /></Card>` pattern).
5. **Client boundary is minimal.** Push `"use client"` to the lowest possible component (e.g., `motion/fade-in.tsx`, not entire sections).

### Component Naming Conventions

| Pattern | Example | Usage |
|---|---|---|
| `kebab-case.tsx` | `project-card.tsx` | File names |
| `PascalCase` | `ProjectCard` | Component export names |
| `use-kebab-case.ts` | `use-reduced-motion.ts` | Hook file names |
| Prefix by domain | `ExperienceCard`, `TechnologyCard` | Card variants |
| No page prefix | `Hero`, not `HomeHero` | Sections reusable across pages |

---

## Layout Hierarchy

Layouts nest from outermost to innermost. Each layout adds structure without duplicating concerns.

```text
app/layout.tsx                          # ROOT LAYOUT
├── <html lang="en">
├── Font loading (Inter, JetBrains Mono via next/font)
├── Global metadata defaults
├── ThemeProvider (V2 — wraps children)
├── <body>
│   └── app/(site)/layout.tsx           # SITE LAYOUT
│       ├── <SkipLink />
│       ├── <Header />
│       │   ├── Logo / Name
│       │   ├── <Navigation />          # Desktop nav
│       │   ├── <MobileNav />           # Client: hamburger + overlay
│       │   ├── CV Download link
│       │   └── ThemeToggle (V2)
│       ├── <main id="main-content">
│       │   └── {children}              # Page content
│       └── <Footer />
│           ├── Navigation (duplicate links)
│           ├── Social links (LinkedIn)
│           ├── Copyright
│           └── CV Download link
```

### Layout Responsibilities

| Layout | Owns | Does Not Own |
|---|---|---|
| **Root (`app/layout.tsx`)** | HTML shell, fonts, global CSS, default metadata, providers | Navigation, footer, page content |
| **Site (`app/(site)/layout.tsx`)** | Header, footer, main landmark, skip link | Page-specific content, hero sections |
| **Page (`page.tsx`)** | Section composition, page-level metadata export | Global chrome, navigation state |

### Page Structure Template

Every page follows the consistent structure defined in `PROJECT_VISION.md`: **hero → content → call-to-action**.

```text
<Page>
  <PageHeader />           # H1, optional lead paragraph — every page
  <Section>                # Primary content area
    {page-specific content}
  </Section>
  <CTABanner />            # Optional: "View Projects" / "Get in Touch"
</Page>
```

The Home page is the exception — it uses a custom `Hero` section instead of `PageHeader`, followed by `FeaturedProjects`, `ProfessionalSnapshot`, and `CTABanner`.

### Container Strategy

All content is wrapped in a `Container` component that enforces `DESIGN_SYSTEM.md` constraints:

| Variant | Max Width | Usage |
|---|---|---|
| `default` | 1120px | Most pages and grids |
| `narrow` | 720px | About prose, Contact form |
| `full` | 100% | Hero backgrounds only |

Horizontal padding is applied at the Container level (16px mobile, 24px tablet, 32px desktop) — never on individual sections.

---

## Navigation Flow

Navigation is persistent, predictable, and accessible. It reflects the flat information architecture.

### Primary Navigation

| Label | Route | Priority |
|---|---|---|
| Home | `/` | — |
| About | `/about` | — |
| Experience | `/experience` | — |
| Projects | `/projects` | High — primary content destination |
| Skills | `/skills` | — |
| Technologies | `/technologies` | — |
| Contact | `/contact` | — |

CV Download appears as a **secondary action** in the header (button or link) — not as a primary nav item. This reflects `CONTENT_STRATEGY.md`: CV is a resource, not the centerpiece.

### Navigation Behavior

| Viewport | Pattern |
|---|---|
| **Desktop (≥ 1024px)** | Horizontal top bar. All links visible. Active state on current route. |
| **Tablet (768–1023px)** | Horizontal bar with compressed spacing. All links visible. |
| **Mobile (< 768px)** | Hamburger icon → full-screen or slide-in overlay. Escape closes. Focus trapped while open. |

### Cross-Linking Strategy

Internal links connect related content per `CONTENT_STRATEGY.md` and `PROJECT_VISION.md`:

| From | Links To | Mechanism |
|---|---|---|
| Home | Featured projects, Experience, Contact | Section CTAs and card links |
| Experience entry | Related projects | `projectSlugs` field on experience data |
| Project detail | Related technologies, experience | `technologyIds` and `experienceId` on project data |
| Technology card | Projects using that technology | Filter link or project references |
| Skills | Related technologies and projects | Category cross-references |
| Footer | All primary pages | Duplicate navigation for convenience |

Every cross-link is a standard `<a>` / Next.js `<Link>` — no JavaScript-required navigation.

### User Flow Diagram

```text
                        ┌─────────┐
                        │  Home   │
                        └────┬────┘
              ┌──────────────┼──────────────┐
              ▼              ▼              ▼
        ┌──────────┐  ┌────────────┐  ┌──────────┐
        │ Projects │  │ Experience │  │  About   │
        └────┬─────┘  └─────┬──────┘  └──────────┘
             │              │
             ▼              ▼
      ┌─────────────┐  ┌──────────────┐
      │Project/[slug]│  │Related Project│
      └──────┬──────┘  └──────────────┘
             │
    ┌────────┼────────┐
    ▼        ▼        ▼
┌────────┐ ┌──────┐ ┌─────────┐
│Technologies│ │Skills│ │ Contact │
└────────┘ └──────┘ └─────────┘
```

**Rule:** Any destination page is reachable within **three clicks** from any other page, per `PROJECT_VISION.md`.

---

## Reusable UI Library

The UI layer is built on **shadcn/ui** — copy-paste components styled with Tailwind CSS and built on Radix UI primitives. This approach provides full ownership of component code (no opaque dependency) while ensuring accessibility compliance.

### shadcn/ui Components (V1)

Installed incrementally — only components that are actually used:

| Component | Usage |
|---|---|
| `Button` | CTAs, form submission, CV download |
| `Card` | Base for Project, Experience, Technology cards |
| `Badge` | Technology tags, skill labels, category markers |
| `Input` | Contact form fields |
| `Textarea` | Contact form message field |
| `Label` | Form field labels |
| `Separator` | Section dividers |
| `Sheet` | Mobile navigation overlay |
| `Sonner` (toast) | Form submission feedback (V2) |

### Design Token Integration

shadcn/ui components are configured to use CSS custom properties mapped to `DESIGN_SYSTEM.md` tokens:

| CSS Variable | Design Token |
|---|---|
| `--background` | Background (`#FFFFFF` / `#09090B`) |
| `--foreground` | Text Primary |
| `--primary` | Primary (`#18181B` / `#FAFAFA`) |
| `--secondary` | Secondary (`#2563EB` / `#3B82F6`) |
| `--muted` | Surface |
| `--muted-foreground` | Text Secondary |
| `--border` | Border |
| `--ring` | Focus ring (Secondary) |
| `--radius` | `radius-md` (8px) |

Tokens are defined in `app/globals.css` and consumed by Tailwind utility classes. Light and dark mode values are defined as separate CSS variable sets.

### Custom Component Extensions

Domain-specific components in `components/cards/` and `components/content/` extend shadcn/ui primitives with portfolio-specific structure. They do not modify the base `components/ui/` files — they compose them.

### Utility: `cn()`

The `cn()` function (`lib/utils.ts`) merges Tailwind classes using `clsx` + `tailwind-merge`. Used in every component for conditional class composition.

---

## Data Organization

All site content is managed through a **typed content layer** — TypeScript modules in `content/` that export structured data. This approach provides type safety, version control, and zero external dependencies for V1.

### Content Architecture

```text
content/                    ← Source of truth (TypeScript files)
    ↓ imported by
lib/content.ts              ← Access functions (getProjects, getProjectBySlug, etc.)
    ↓ consumed by
app/**/page.tsx             ← Pages call access functions at build/render time
components/**               ← Receive typed props, never import content/ directly
```

Components never import from `content/` directly. They receive data as props from pages or sections. Access functions in `lib/content.ts` are the only gateway to content data.

### Core Type Definitions (`types/content.ts`)

| Type | Key Fields |
|---|---|
| `SiteConfig` | name, motto, email, linkedIn, cvPath, locale |
| `NavItem` | label, href, external? |
| `Experience` | id, role, company, period, location, context, initiatives[], technologies[], projectSlugs[] |
| `Project` | id, slug, name, summary, problem, solution, technologyStack[], impact, contribution, futureEvolution?, images[], featured, category, technologyIds[], experienceId? |
| `Skill` | id, name, category (leadership \| development \| transformation), description? |
| `Technology` | id, name, category, icon?, projectSlugs[] |
| `AboutContent` | purpose, approach, identity, photo? |
| `PageMetadata` | title, description, ogImage?, canonical? |

### Content Access Functions (`lib/content.ts`)

| Function | Returns | Usage |
|---|---|---|
| `getSiteConfig()` | `SiteConfig` | Global site data |
| `getNavigation()` | `NavItem[]` | Header and footer nav |
| `getAbout()` | `AboutContent` | About page |
| `getExperience()` | `Experience[]` | Experience page (sorted by date, most recent first) |
| `getExperienceById(id)` | `Experience \| undefined` | Cross-references |
| `getProjects()` | `Project[]` | Projects listing |
| `getFeaturedProjects()` | `Project[]` | Home page featured section |
| `getProjectBySlug(slug)` | `Project \| undefined` | Project detail page |
| `getProjectsByCategory(category)` | `Project[]` | Filtered listing |
| `getSkills()` | `Skill[]` | Skills page (grouped by category) |
| `getTechnologies()` | `Technology[]` | Technologies page (grouped by category) |
| `getTechnologiesByProject(slug)` | `Technology[]` | Project detail cross-reference |
| `getProjectsByTechnology(id)` | `Project[]` | Technology cross-reference |

### Content Validation Rules

1. Every `Project` must include all four storytelling fields: `problem`, `solution`, `technologyStack`, `impact`.
2. Every `Technology` must reference at least one project via `projectSlugs`.
3. `slug` values are kebab-case, unique, and stable (changing slugs breaks URLs).
4. `featured` projects are limited to 2–3 for the Home page.
5. Dates use ISO 8601 format (`2024-01`, `2024-01-15`) for consistent sorting.

### Future Content Evolution

| Version | Content Strategy |
|---|---|
| **V1** | TypeScript files in `content/` — simple, typed, version-controlled |
| **V2** | Same structure, potentially split large files; CV generation from content data |
| **V3** | MDX files in `content/blog/` for articles; existing TS content layer unchanged |
| **Future** | Headless CMS evaluation (Sanity, Contentlayer) if content volume justifies it |

The access function pattern (`lib/content.ts`) ensures that migrating content storage does not affect components or pages — only the lib layer changes.

---

## Content Organization

Content structure mirrors the storytelling framework from `CONTENT_STRATEGY.md` and the page architecture from `PROJECT_VISION.md`.

### Page-to-Content Mapping

| Page | Content Source | Primary Component |
|---|---|---|
| Home | `site.ts`, `projects/index.ts` | `Hero`, `FeaturedProjects`, `ProfessionalSnapshot`, `CTABanner` |
| About | `about.ts` | `Prose`, `PageHeader` |
| Experience | `experience.ts` | `TimelineCard`, `ExperienceCard` |
| Projects | `projects/index.ts` | `ProjectCard` (grid) |
| Project detail | `projects/[slug].ts` | `Prose`, `ProjectCard` (expanded), `TagList` |
| Skills | `skills.ts` | `SkillCard` (grouped by category) |
| Technologies | `technologies.ts` | `TechnologyCard` (grouped by category) |
| Contact | `site.ts` | `ContactForm` |

### Project Content Model (Case Study)

Each project file follows the `CONTENT_STRATEGY.md` requirements:

```text
Project
├── Identity        → name, slug, summary, category, featured flag
├── Storytelling    → problem, solution, technologyStack, impact
├── Attribution     → contribution, futureEvolution (optional)
├── Relationships → technologyIds[], experienceId?, relatedProjectSlugs[]
└── Media           → images[] (path, alt, ratio)
```

### Experience Content Model

```text
Experience
├── Identity        → role, company, period, location
├── Context         → business context paragraph
├── Initiatives     → array of { problem, action, outcome }
├── Capabilities    → leadership, technology adoption, process improvement
├── Relationships → projectSlugs[], technologies[]
└── Metadata        → current (boolean), order (number)
```

### Skills Organization

Skills are grouped by business domain per `BRAND.md` positioning — not by tool type:

| Category | Examples |
|---|---|
| `leadership` | Team management, IT strategy, stakeholder communication |
| `development` | Full-stack development, API design, system architecture |
| `transformation` | Digital transformation, process automation, change management |

### Technologies Organization

Technologies are grouped by purpose per `CONTENT_STRATEGY.md`:

| Category | Purpose |
|---|---|
| `software-development` | Application building |
| `cloud` | Infrastructure and deployment |
| `infrastructure` | Systems and operations |
| `automation` | Process automation |
| `artificial-intelligence` | Intelligent systems |
| `business-tools` | Enterprise integration |

---

## Animation Strategy

Animation is governed entirely by `DESIGN_SYSTEM.md` motion guidelines. The architecture ensures animations are isolated, performant, and respectful of user preferences.

### Architecture

```text
components/motion/           ← Client Components ("use client")
├── fade-in.tsx              ← Opacity 0→1, optional y translate
├── stagger-children.tsx     ← Parent wrapper with staggered child reveals
└── page-transition.tsx      ← Route-level fade-in (V2)

hooks/
└── use-reduced-motion.ts    ← Reads prefers-reduced-motion media query
```

### Integration Rules

1. **Motion components wrap content — they do not contain content.** `<FadeIn><ProjectCard /></FadeIn>`, never animation logic inside card components.
2. **Server Components stay server-side.** Pages and sections render as Server Components. Motion wrappers are Client Components that accept `children: React.ReactNode`.
3. **`useReducedMotion` disables all animation.** When `prefers-reduced-motion: reduce` is active, motion components render children immediately with no transition.
4. **Framer Motion is tree-shaken.** Only `motion`, `AnimatePresence`, and required utilities are imported. No barrel imports from `framer-motion`.
5. **CSS transitions handle micro-interactions.** Button hover, card border shift, and link color changes use CSS `transition` — not Framer Motion. Reserve Framer Motion for scroll reveals and page transitions.

### Animation Scope per Page

| Page | Animations Allowed |
|---|---|
| Home | Hero fade-in, featured projects stagger reveal |
| About | Section fade-in on scroll |
| Experience | Timeline entries stagger on scroll |
| Projects | Card grid stagger on scroll |
| Project detail | Content fade-in (single, no stagger) |
| Skills / Technologies | Card grid stagger on scroll |
| Contact | None (form-focused, instant) |

### Performance Constraints

- Animate only `transform` and `opacity` — never `width`, `height`, `margin`, or `padding`.
- Maximum 3 animated elements visible simultaneously.
- No animation on mobile page transitions (instant navigation).
- Total animation JavaScript bundle target: < 15KB gzipped for Framer Motion.

---

## SEO Implementation

SEO is implemented at the architecture level — not added after launch. Every page ships with complete metadata, structured data, and semantic markup.

### Metadata Strategy

Next.js `Metadata` API is used via exported `metadata` objects or `generateMetadata` functions on each page.

```text
lib/metadata.ts
├── buildPageMetadata(page, overrides?)    → Metadata object
├── buildProjectMetadata(project)          → Project-specific metadata
└── buildArticleMetadata(article)          → Blog metadata (V3)

content/seo.ts
├── defaultMetadata                        → Site-wide defaults
└── pageMetadata                           → Per-page title and description templates
```

### Per-Page Metadata

| Page | Title | Description Source |
|---|---|---|
| Home | `Angel Yepez — IT Manager & Digital Transformation Specialist` | `content/seo.ts` |
| About | `About Angel Yepez — Technology Leader & Business Strategist` | `content/seo.ts` |
| Experience | `Experience — Angel Yepez` | Dynamic: role count + years |
| Projects | `Projects — Angel Yepez` | Dynamic: project count |
| Project detail | `[Project Name] — Angel Yepez` | `project.summary` |
| Skills | `Skills — Angel Yepez` | `content/seo.ts` |
| Technologies | `Technologies — Angel Yepez` | `content/seo.ts` |
| Contact | `Contact — Angel Yepez` | `content/seo.ts` |

### Structured Data (JSON-LD)

Generated by `lib/structured-data.ts` and injected via `<script type="application/ld+json">` in layouts or pages.

| Schema | Page | Fields |
|---|---|---|
| `Person` | Home, About | name, jobTitle, url, sameAs (LinkedIn), knowsAbout |
| `ProfessionalService` | Home | name, description, provider (Person), areaServed |
| `WebSite` | Home | name, url, author (Person) |
| `BreadcrumbList` | All pages except Home | Navigation path |
| `Article` | Blog posts (V3) | headline, author, datePublished, image |

### Open Graph & Social Sharing

| Asset | Strategy |
|---|---|
| Default OG image | `app/opengraph-image.tsx` — generated at build time (V1) |
| Per-page OG images | `app/(site)/projects/[slug]/opengraph-image.tsx` (V2) |
| Twitter card | `summary_large_image` via metadata `twitter` field |
| Canonical URLs | Absolute URLs via `metadataBase` in root layout |

### Technical SEO Files

| File | Purpose |
|---|---|
| `app/sitemap.ts` | Dynamic XML sitemap from content access functions |
| `app/robots.ts` | Allow all crawlers, reference sitemap URL |
| Semantic HTML | `<main>`, `<nav>`, `<article>`, `<section>`, heading hierarchy |
| `lang="en"` on `<html>` | Language declaration |

### SEO Rules

1. One `<h1>` per page — enforced by `PageHeader` and `Hero` components.
2. All images have descriptive `alt` text from content data.
3. Internal links use descriptive anchor text — not "click here" or "read more" alone.
4. No keyword stuffing — per `CONTENT_STRATEGY.md`, keywords emerge naturally from authentic content.
5. `metadataBase` is set in root layout to ensure absolute URLs in OG tags.

---

## Performance Strategy

Performance is a non-functional requirement, not an optimization pass. Architectural decisions enforce it from the start.

### Rendering & Delivery

| Technique | Implementation |
|---|---|
| **Static Generation (SSG)** | All V1 pages pre-rendered at build time |
| **Server Components** | Default for all pages, layouts, sections, and cards |
| **Minimal client JavaScript** | Only forms, navigation toggle, motion wrappers, and theme toggle (V2) ship to the client |
| **Edge delivery** | Vercel CDN serves static assets and pre-rendered pages globally |
| **No client-side data fetching** | All content resolved at build time via `lib/content.ts` |

### Asset Optimization

| Asset Type | Strategy |
|---|---|
| **Images** | `next/image` with AVIF/WebP, responsive `sizes`, lazy loading below fold |
| **Fonts** | `next/font` (Inter, JetBrains Mono), `display: swap`, Latin subset only |
| **Icons** | Lucide React with tree-shaking — import individual icons, not the full library |
| **CSS** | Tailwind CSS v4 with purging — only used utilities are included |
| **JavaScript** | Route-based code splitting (automatic via App Router) |

### Performance Budgets

| Metric | Target | Enforcement |
|---|---|---|
| Lighthouse Performance | ≥ 95 | SSG, minimal JS, optimized images |
| Lighthouse Accessibility | ≥ 95 | Semantic HTML, ARIA, contrast tokens |
| Lighthouse Best Practices | ≥ 95 | HTTPS, no console errors, modern image formats |
| Lighthouse SEO | ≥ 95 | Metadata, sitemap, structured data, semantic HTML |
| LCP | < 2.5s | Static HTML, priority font loading, hero image optimization |
| INP | < 200ms | Minimal client JS, no long tasks |
| CLS | < 0.1 | Explicit image dimensions, no layout-shifting animations |
| Total JS (first load) | < 100KB gzipped | Server Components, tree-shaking, no unnecessary client boundaries |
| Total CSS | < 30KB gzipped | Tailwind purging |

### Monitoring (V2)

| Tool | Purpose |
|---|---|
| Vercel Analytics | Core Web Vitals monitoring in production |
| Vercel Speed Insights | Real-user performance data |
| Lighthouse CI | Automated performance checks on PR (GitHub Action) |

Performance regressions are **blockers** — they must be resolved before merge, per `PROJECT_VISION.md` development rules.

---

## Future Scalability

The architecture is designed for V1 launch while reserving clear extension points for roadmap features.

### Version 2 — Enhancement

| Feature | Architectural Addition |
|---|---|
| Dark mode | `providers/theme-provider.tsx`, CSS variable dual sets in `globals.css`, `ThemeToggle` in header |
| Contact form API | `app/api/contact/route.ts` with Resend or Formspree integration |
| Analytics | Vercel Analytics script in root layout, environment-gated |
| Enhanced OG images | Per-route `opengraph-image.tsx` files |
| Refined animations | Additional motion components, page transitions |
| Dynamic CV export | `lib/cv-generator.ts` — generates PDF from content layer data |

**Impact on V1 architecture:** Additive only. No restructuring required.

### Version 3 — Content Platform (Blog)

| Feature | Architectural Addition |
|---|---|
| MDX blog | `content/blog/` directory with `.mdx` files |
| Blog routes | `app/(site)/blog/page.tsx`, `app/(site)/blog/[slug]/page.tsx` |
| MDX components | `components/mdx/` — custom components for embedded content |
| Article types | `types/content.ts` extended with `Article` interface |
| RSS feed | `app/feed.xml/route.ts` generated from blog content |
| Article structured data | `Article` JSON-LD schema in `lib/structured-data.ts` |
| Search | Client-side filter or `fuse.js` for article search (V3.1) |

**Content layer evolution:**

```text
V1:  content/*.ts                    → lib/content.ts → pages
V3:  content/*.ts + content/blog/*.mdx → lib/content.ts + lib/blog.ts → pages
```

The `lib/content.ts` gateway pattern ensures blog addition does not affect existing pages.

### Future Improvements

| Feature | Architectural Approach |
|---|---|
| **i18n (EN/ES)** | Next.js internationalization with `app/[locale]/` route segment or `next-intl` library. Content files split by locale: `content/en/`, `content/es/`. |
| **PWA** | `next-pwa` or manual service worker. Offline CV access. Web manifest in `public/`. |
| **Newsletter** | Third-party integration (Buttondown, Resend audience). Component in blog layout only. |
| **Testimonials** | New `content/testimonials.ts`, `TestimonialCard` component, section on Home or About. |
| **Headless CMS** | Replace `content/*.ts` with CMS SDK in `lib/content.ts` only. Components and pages unchanged. |
| **A/B testing** | Vercel Flags or middleware-based variant routing. Feature-flagged at layout level. |

### Scalability Principles

1. **Extend, don't rewrite.** New features add directories and files — they do not restructure existing ones.
2. **Content layer is the migration boundary.** Changing content storage (TS → MDX → CMS) requires changes only in `content/` and `lib/`.
3. **Components are content-agnostic.** They receive typed props — they do not know or care where data originates.
4. **Routes stay flat.** New sections (blog, testimonials) get top-level routes, not deep nesting.
5. **Documentation leads code.** New architectural decisions are recorded in this document before implementation.

---

## Development Workflow

### Branch Strategy

| Branch | Purpose |
|---|---|
| `main` | Production — auto-deploys to Vercel |
| `develop` | Integration branch for features |
| `feature/*` | Individual feature branches |

### Commit Convention

Conventional Commits format per `PROJECT_VISION.md`:

```text
feat: add project detail page
fix: correct experience timeline ordering
docs: update architecture for blog routes
style: align card padding with design tokens
refactor: extract content access functions
perf: optimize project images with AVIF
```

### Pre-Merge Checklist

- [ ] TypeScript compiles with no errors (`strict` mode)
- [ ] ESLint passes with no warnings
- [ ] All pages render correctly (desktop, tablet, mobile)
- [ ] Accessibility: keyboard navigation, focus states, heading hierarchy
- [ ] SEO: metadata, structured data, sitemap inclusion for new routes
- [ ] Performance: no new client components without justification
- [ ] Design System: colors, spacing, typography, and radius use defined tokens
- [ ] Content Strategy: storytelling framework followed for new content
- [ ] No `any` types introduced

### Environment Variables

| Variable | Purpose | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata and sitemap | V1 |
| `CONTACT_FORM_API_KEY` | Email service API key (Resend/Formspree) | V2 |
| `NEXT_PUBLIC_ANALYTICS_ID` | Analytics tracking ID | V2 |

Secrets are never committed. `.env.local` is gitignored. Vercel environment variables are configured per deployment environment.

---

## Architecture Decision Records

Key decisions and their rationale for future reference.

| Decision | Choice | Rationale |
|---|---|---|
| Content storage (V1) | TypeScript files | Type safety, zero dependencies, version controlled, sufficient for portfolio scale |
| Rendering strategy | SSG for all pages | Maximum performance, SEO-friendly, content changes trigger rebuild |
| UI library | shadcn/ui | Accessible, ownable, composable, Tailwind-native — matches design system |
| Component organization | By responsibility (ui/layout/cards/sections) | Scales with feature additions without page-coupled components |
| Font | Inter (per DESIGN_SYSTEM.md) | Professional, screen-optimized, variable font support via next/font |
| Animation library | Framer Motion (client-only) | Industry standard, declarative, tree-shakeable, respects reduced motion |
| Route structure | Flat with `(site)` group | Shallow navigation per PROJECT_VISION.md, clean URL paths |
| Dark mode timing | V2 | V1 focuses on polished light mode; architecture reserves theme provider |
| Blog timing | V3 | MDX infrastructure added when content volume justifies it |
| CMS | Deferred | TypeScript content layer is sufficient for V1–V2; CMS evaluated at V3+ if needed |

---

*This document is the authoritative technical reference for Angel Portfolio. All implementation decisions must align with this architecture and its companion documents. Deviations require updating this document first.*

*Document version: 1.0 · Last updated: June 2025 · Status: Approved for implementation*

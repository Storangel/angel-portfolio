# AI Development Rules

**Status:** Approved  
**Version:** 1.0  
**Last updated:** June 2025  

These rules govern all AI-assisted development on Angel Portfolio. They are non-negotiable. Every implementation decision must comply with this document and the approved documentation in `docs/`.

---

## Documentation Priority

**Always read the `docs/` folder before implementing anything.**

When context is needed, consult documents in this exact priority order. Higher-priority documents override lower-priority ones in case of conflict.

| Priority | Document | Governs |
|---|---|---|
| 1 | `PROJECT_VISION.md` | Product goals, scope, roadmap, non-functional requirements |
| 2 | `BRAND.md` | Identity, voice, positioning, content philosophy |
| 3 | `DESIGN_SYSTEM.md` | Colors, typography, spacing, components, motion, accessibility |
| 4 | `CONTENT_STRATEGY.md` | Writing style, storytelling framework, page content rules |
| 5 | `ARCHITECTURE.md` | Folder structure, routing, data layer, SEO, performance |

### Before Writing Code

1. Identify which page, component, or feature is being implemented.
2. Read the relevant sections from each document in priority order.
3. Confirm the implementation aligns with architecture, design tokens, content rules, and brand voice.
4. If a requirement is missing from the docs, propose an update to the relevant document before coding around it.

### When Docs Conflict

Resolve in favor of the higher-priority document. If the conflict is genuine (not a documentation error), stop and ask for clarification rather than guessing.

---

## Core Rules

### 1. Never Violate the Design System

Every visual decision must use tokens and patterns defined in `DESIGN_SYSTEM.md`.

| Requirement | Source |
|---|---|
| Colors | Color System tokens only — no arbitrary hex values |
| Typography | Inter, defined heading scale, body sizes, line heights |
| Spacing | 8px base unit — `space-*` tokens only |
| Border radius | `radius-sm`, `radius-md`, `radius-lg`, `radius-xl` |
| Shadows | Small, Medium, Large — no heavy shadows |
| Motion | Framer Motion durations ≤ 500ms; respect `prefers-reduced-motion` |
| Components | Button, Card, and icon rules as specified |

If a design need is not covered by the Design System, update `DESIGN_SYSTEM.md` first — do not invent one-off styles in code.

---

### 2. Never Duplicate Components

Build once, compose everywhere.

- Before creating a component, search `components/` for an existing one that can be extended or composed.
- Extract shared logic at the first sign of repetition — utilities, hooks, or base components.
- Page-specific layouts belong in `components/sections/`, not inline in `page.tsx`.
- Card variants (`ProjectCard`, `ExperienceCard`, etc.) share base patterns — do not create parallel implementations.

**Test:** If two files contain substantially similar JSX or styling, one of them should be refactored into a reusable component.

---

### 3. Always Use TypeScript

Strict typing is mandatory across the entire codebase.

- Enable and respect `strict` mode in `tsconfig.json`.
- No `any`. Use `unknown` with type guards when type is genuinely uncertain.
- Define shared types in `types/` — content models, navigation, SEO, component props.
- Content files in `content/` export typed data conforming to `types/content.ts`.
- Component props must have explicit interfaces — no implicit `props` spreading without types.

---

### 4. Always Create Reusable Components

Components must be composable, typed, and domain-appropriate per `ARCHITECTURE.md` hierarchy.

| Tier | Location | Responsibility |
|---|---|---|
| UI Primitives | `components/ui/` | shadcn/ui base — no business logic |
| Layout | `components/layout/` | Container, Section, Header, Footer, Navigation |
| Domain | `components/cards/`, `components/content/` | ProjectCard, Prose, Badge — typed props |
| Sections | `components/sections/` | Page-level compositions — Hero, FeaturedProjects |

Pages import sections. Sections import domain components. Domain components import UI primitives. Never skip tiers without justification.

---

### 5. Always Optimize for Accessibility

Accessibility is designed in, not patched in after launch. Target: **WCAG 2.1 Level AA**.

- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<button>`, `<a>`.
- One `<h1>` per page. Sequential heading hierarchy — no skipped levels.
- All images have descriptive `alt` text from content data.
- Icon-only buttons have `aria-label`.
- Form inputs are associated with `<label>` elements.
- Focus states: `2px solid` Secondary color, 2px offset — never `outline: none` without replacement.
- Skip-to-content link as first focusable element.
- Keyboard navigation: all interactive elements reachable via Tab; Escape closes overlays.
- Respect `prefers-reduced-motion` — disable scroll and page animations when active.
- Minimum touch targets: 44 × 44px on mobile.

---

### 6. Always Optimize for SEO

Every page ships with complete metadata and semantic markup.

- Export `metadata` or `generateMetadata` on every route.
- Unique `<title>` and meta description per page — patterns defined in `CONTENT_STRATEGY.md`.
- JSON-LD structured data via `lib/structured-data.ts` (Person, ProfessionalService, BreadcrumbList).
- New routes must be added to `app/sitemap.ts`.
- Internal links use descriptive anchor text.
- `lang="en"` on `<html>`. `metadataBase` set for absolute OG URLs.
- Heading structure carries content hierarchy — not styled `<div>` elements.

---

### 7. Always Prefer Server Components

Server Components are the default. Client Components are the exception.

**Use Server Components for:**
- All `page.tsx` and `layout.tsx` files
- Sections, cards, and content presentation
- Data fetching via `lib/content.ts` at build/render time

**Use Client Components (`"use client"`) only for:**
- Forms with client-side validation or submission state
- Mobile navigation toggle
- Framer Motion wrappers
- Theme toggle (V2)
- Hooks requiring `useState`, `useEffect`, or browser APIs

Push the client boundary to the lowest possible component. Never mark an entire page or section as client when only a child needs interactivity.

---

### 8. Always Explain Architectural Decisions

When implementing non-obvious choices, document the reasoning.

- **In code:** Brief comments only for non-obvious business logic or technical constraints — not for self-explanatory code.
- **In PRs/commits:** Explain *why* when the decision is not obvious from the diff.
- **In docs:** Update `ARCHITECTURE.md` when introducing new patterns, folders, or dependencies.

Decisions that require explanation include: new dependencies, new client component boundaries, deviations from folder structure, and new content models.

---

### 9. Never Introduce Dependencies Without Justification

Every new package must earn its place.

Before adding a dependency, verify:

1. The need cannot be met with existing stack (Next.js, React, Tailwind, shadcn/ui, Framer Motion, Lucide).
2. The package is actively maintained, widely adopted, and tree-shakeable where applicable.
3. The bundle size impact is acceptable per `ARCHITECTURE.md` performance budgets.
4. The justification is documented in the commit message or `ARCHITECTURE.md` decision records.

**Approved stack (V1):** Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide React, clsx, tailwind-merge.

**Deferred until justified:** CMS, analytics, email SDK, i18n library, testing framework (add when first tests are written).

---

### 10. Keep Commits Atomic

Each commit represents one logical change.

- Use [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `perf:`.
- One feature, one fix, or one refactor per commit — not mixed.
- Do not commit unrelated changes together (e.g., a new page + unrelated dependency update).
- Commit messages explain *why* when the change is not self-evident.

```text
feat: add project detail page with case study layout
fix: correct timeline ordering on experience page
docs: document blog route architecture for V3
perf: convert project thumbnails to AVIF via next/image
```

---

### 11. Code Should Feel Like a Premium SaaS Product

The implementation quality bar is not "portfolio site" — it is **production-grade SaaS**.

| Quality Signal | Implementation |
|---|---|
| **Polished** | Consistent spacing, no visual misalignment, no rough edges |
| **Fast** | Static generation, minimal JS, optimized assets — Lighthouse ≥ 95 |
| **Calm** | No visual noise, no aggressive motion, no clutter |
| **Intentional** | Every element has a purpose; nothing feels accidental |
| **Trustworthy** | Accessible, semantic, professional copy, no broken states |
| **Maintainable** | Clear structure, typed, documented, no hacks |

Reference quality bar: Vercel, Linear, Stripe — not generic portfolio templates.

---

## Implementation Checklist

Before marking any task complete, verify:

- [ ] Relevant `docs/` files were read before implementation
- [ ] Design System tokens used — no arbitrary styles
- [ ] No duplicated components or logic
- [ ] TypeScript strict — no `any`
- [ ] Server Component by default — client boundary justified
- [ ] Accessibility: semantic HTML, focus states, alt text, keyboard nav
- [ ] SEO: metadata, heading hierarchy, sitemap if new route
- [ ] Content follows storytelling framework (problem → solution → technology → impact)
- [ ] Copy follows `CONTENT_STRATEGY.md` — no buzzwords, no generic AI text
- [ ] Performance: no unnecessary client JS, images optimized
- [ ] No new dependencies without justification
- [ ] Code reads as premium, intentional, and maintainable

---

## Prohibited Actions

| Action | Why |
|---|---|
| Hardcoding content in components | Content lives in `content/` — use `lib/content.ts` |
| Inline styles or arbitrary colors | Violates Design System |
| `any` type | Violates TypeScript rule |
| Client Component pages | Violates Server-first architecture |
| Decorative icons or animations | Violates Brand and Design System |
| Marketing copy or buzzwords | Violates Content Strategy and Brand |
| Skipping docs and improvising | Violates documentation priority |
| Copy-pasting components with modifications | Creates duplication — extract and compose |
| Adding packages for one-line utilities | Bundle cost without justification |
| Committing secrets or `.env` values | Security violation |

---

## Quick Reference

```text
Read docs first     → PROJECT_VISION → BRAND → DESIGN_SYSTEM → CONTENT_STRATEGY → ARCHITECTURE
Build               → Server Component → compose from components/ui → layout → cards → sections
Style               → Design System tokens only
Content             → content/*.ts → lib/content.ts → props
Animate             → components/motion/ only, ≤ 500ms, reduced-motion safe
Ship                → metadata + a11y + types + atomic commit
```

---

*This document is the operational contract for all AI-assisted development on Angel Portfolio. When in doubt, read the docs, follow the rules, and ask before deviating.*

*Companion documents: `PROJECT_VISION.md` · `BRAND.md` · `DESIGN_SYSTEM.md` · `CONTENT_STRATEGY.md` · `ARCHITECTURE.md`*

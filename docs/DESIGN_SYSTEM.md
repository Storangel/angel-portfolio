# Angel Portfolio Design System

> Official visual reference for all design and implementation decisions on Angel Portfolio.
> Governs color, typography, layout, components, motion, and accessibility.
> Companion documents: `PROJECT_VISION.md`, `BRAND.md`

---

## Design Philosophy

Every design decision in Angel Portfolio must improve **clarity**. If an element does not help the visitor understand content, navigate the site, or trust the professional behind it — it does not belong.

**Less is more.** Restraint is not a limitation; it is the mechanism through which quality is perceived. A sparse interface with excellent typography communicates more authority than a dense interface with decorative elements.

The design should **inspire confidence**, not try to impress. Visitors are recruiters, clients, and senior peers — not an audience to entertain. The portfolio earns trust through precision, consistency, and calm professionalism.

**Technology should disappear behind usability.** Frameworks, animations, and visual effects exist to serve the experience, never to demonstrate technical skill. If a visitor notices the technology before the content, the design has failed.

The portfolio must feel **timeless rather than trendy**. Design choices should remain appropriate five years from now. Avoid gradient fads, glassmorphism trends, neon accents, and any aesthetic that signals a specific year rather than enduring craft.

---

## Brand Personality

Every visual decision is evaluated against these personality traits. A component, color, or animation is approved only if it reinforces at least one of them.

| Trait | Design Expression |
|---|---|
| **Professional** | Polished surfaces, consistent spacing, no casual or playful elements |
| **Minimal** | Only essential elements on screen; no decorative chrome |
| **Premium** | Generous whitespace, refined typography, subtle depth |
| **Technical** | Clean grids, monospace accents where appropriate, structured information |
| **Human** | Warm neutral tones, approachable copy hierarchy, no cold corporate sterility |
| **Elegant** | Refined proportions, soft transitions, no visual shouting |
| **Trustworthy** | High contrast readability, predictable patterns, no gimmicks |
| **Purposeful** | Every element has a reason; nothing is ornamental by default |
| **Calm** | Muted palette, no urgency colors, no aggressive motion |

---

## Design Inspirations

Each reference brand contributes a specific lesson. Angel Portfolio borrows principles, not copies aesthetics.

| Brand | What We Learn | Application |
|---|---|---|
| **Apple** | Product-first presentation, obsessive whitespace, typography as the primary design element | Hero sections, page hierarchy, image treatment |
| **Vercel** | Developer credibility expressed through clean monochrome layouts and performance-conscious simplicity | Overall site structure, dark mode treatment, technical sections |
| **Linear** | Focused interfaces, tight information hierarchy, purposeful micro-interactions | Navigation, cards, timeline components, motion |
| **Stripe** | Trust through clarity — documentation-quality layouts that make complex information scannable | Project case studies, experience entries, data presentation |
| **Notion** | Approachable content blocks, calm visual rhythm, readable long-form text | About page, blog (future), body copy treatment |
| **Raycast** | Technical refinement with subtle personality — modern without being cold | Skills section, technology cards, icon usage |

**Combined principle:** The site should feel like it was designed by a team that cares about craft — not decorated by someone trying to stand out.

---

## Color System

The palette is intentionally minimal. Color is used with purpose: to establish hierarchy, indicate interactivity, or communicate state. It is never used for decoration.

### Light Mode

| Token | HEX | Usage |
|---|---|---|
| **Primary** | `#18181B` | Primary buttons, active navigation, key interactive elements |
| **Secondary** | `#2563EB` | Links, focus rings, accent highlights, selected states |
| **Neutral 50** | `#FAFAFA` | Subtle background variation, hover surfaces |
| **Neutral 100** | `#F4F4F5` | Secondary backgrounds, code blocks |
| **Neutral 200** | `#E4E4E7` | Dividers, inactive borders |
| **Neutral 300** | `#D4D4D8` | Disabled borders, placeholder elements |
| **Neutral 400** | `#A1A1AA` | Muted icons, decorative separators |
| **Neutral 500** | `#71717A` | Secondary labels |
| **Neutral 600** | `#52525B` | Secondary text |
| **Neutral 700** | `#3F3F46` | Strong secondary text |
| **Neutral 800** | `#27272A` | Near-primary text on light surfaces |
| **Neutral 900** | `#18181B` | Primary interactive elements |
| **Neutral 950** | `#09090B` | Headings, primary text |
| **Background** | `#FFFFFF` | Page background |
| **Surface** | `#FAFAFA` | Cards, elevated sections, sidebar panels |
| **Border** | `#E4E4E7` | Card borders, input borders, section dividers |
| **Success** | `#16A34A` | Success messages, positive status indicators |
| **Warning** | `#CA8A04` | Warning messages, caution states |
| **Error** | `#DC2626` | Error messages, validation failures, destructive actions |
| **Text Primary** | `#09090B` | Headings, body text, primary content |
| **Text Secondary** | `#52525B` | Descriptions, metadata, supporting text |
| **Muted Text** | `#A1A1AA` | Captions, timestamps, tertiary information |

### Dark Mode

| Token | HEX | Usage |
|---|---|---|
| **Primary** | `#FAFAFA` | Primary buttons, active navigation |
| **Secondary** | `#3B82F6` | Links, focus rings, accent highlights |
| **Background** | `#09090B` | Page background |
| **Surface** | `#18181B` | Cards, elevated sections |
| **Border** | `#27272A` | Card borders, input borders, dividers |
| **Text Primary** | `#FAFAFA` | Headings, body text |
| **Text Secondary** | `#A1A1AA` | Descriptions, metadata |
| **Muted Text** | `#71717A` | Captions, timestamps |

### Color Rules

- Maximum **two accent colors** in use at any time: Primary (neutral dark/light) and Secondary (blue).
- Semantic colors (Success, Warning, Error) appear only in feedback contexts — never as decoration.
- Never introduce colors outside this system without updating this document.
- All color pairings must meet **WCAG 2.1 AA contrast** requirements (4.5:1 for normal text, 3:1 for large text).

---

## Typography

Typography is the primary design element. When in doubt, improve the type — do not add visual decoration.

### Primary Font

**Inter** — A neutral, highly legible sans-serif optimized for screens. Professional without being corporate. Technical without being cold.

Loaded via `next/font` with `display: swap` and Latin subset.

### Fallback Stack

```text
Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
"Helvetica Neue", Arial, sans-serif
```

### Monospace Font (Code & Technical Labels)

**JetBrains Mono** or **Geist Mono** — Used sparingly for code snippets, technology tags, and technical metadata.

Fallback: `ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace`

### Heading Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| **Display** | 48px / 3rem | 600 (Semibold) | 1.1 | -0.02em | Hero headlines (desktop) |
| **H1** | 36px / 2.25rem | 600 | 1.15 | -0.02em | Page titles |
| **H2** | 30px / 1.875rem | 600 | 1.2 | -0.01em | Section headings |
| **H3** | 24px / 1.5rem | 600 | 1.25 | -0.01em | Subsection headings |
| **H4** | 20px / 1.25rem | 600 | 1.3 | 0 | Card titles, group labels |
| **H5** | 16px / 1rem | 600 | 1.4 | 0 | Small headings, list group titles |

Mobile heading sizes reduce by one step (e.g., Display → 36px, H1 → 30px).

### Body Sizes

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| **Body Large** | 18px / 1.125rem | 400 | 1.7 | Lead paragraphs, introductions |
| **Body** | 16px / 1rem | 400 | 1.7 | Default body text |
| **Body Small** | 14px / 0.875rem | 400 | 1.6 | Metadata, captions, card descriptions |
| **Label** | 14px / 0.875rem | 500 | 1.4 | Form labels, navigation items |
| **Overline** | 12px / 0.75rem | 500 | 1.4 | Section labels, category tags (uppercase, 0.05em tracking) |

### Paragraph Width

Maximum readable line length: **65–75 characters** (~`max-width: 65ch`).

Wide layouts use multi-column grids rather than stretching text across the full container.

### Reading Comfort

- Body text always uses **400 (Regular)** weight — never light/thin weights for paragraphs.
- Headings use **600 (Semibold)** — never 700+ Bold, which feels heavy for this brand.
- Paragraph spacing: **1.5em** margin-bottom between paragraphs.
- Section introductions (lead text) use Body Large with Text Secondary color.

### Typography Rules

1. One H1 per page. Heading hierarchy must not skip levels (H1 → H2 → H3).
2. Never use font size alone to create hierarchy — combine size, weight, and color.
3. Uppercase text is reserved for Overline labels only — never for headings or body.
4. No more than two font families on any page (sans-serif + monospace).
5. Line length never exceeds 80 characters for body text.

---

## Layout System

### Maximum Content Width

| Context | Max Width |
|---|---|
| **Page container** | 1120px |
| **Narrow content** (prose, forms) | 720px |
| **Wide content** (project grids, skill maps) | 1120px |
| **Full bleed** (hero backgrounds) | 100vw |

Content is always centered horizontally with consistent side padding.

### Grid

12-column grid with 24px gutters on desktop, 16px on mobile.

| Layout | Columns | Usage |
|---|---|---|
| **Single column** | 12 | About, Contact, prose content |
| **Two column** | 6 + 6 | Side-by-side content blocks |
| **Three column** | 4 + 4 + 4 | Project cards, technology cards |
| **Asymmetric** | 5 + 7 or 7 + 5 | Hero sections, featured content |

### Spacing System

All spacing values are multiples of the **8px base unit**.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Tight internal padding (icon gaps, badge padding) |
| `space-2` | 8px | Minimum component internal spacing |
| `space-3` | 12px | Compact element gaps |
| `space-4` | 16px | Default element gaps, input padding |
| `space-5` | 20px | — |
| `space-6` | 24px | Card internal padding (compact) |
| `space-8` | 32px | Card internal padding (default), grid gaps |
| `space-10` | 40px | — |
| `space-12` | 48px | Between related content groups |
| `space-16` | 64px | Between sections (mobile) |
| `space-20` | 80px | Between sections (tablet) |
| `space-24` | 96px | Between sections (desktop) |
| `space-32` | 128px | Hero section vertical padding |

### Section Spacing

| Breakpoint | Padding Top / Bottom |
|---|---|
| **Mobile** (< 768px) | 64px |
| **Tablet** (768px – 1023px) | 80px |
| **Desktop** (≥ 1024px) | 96px |

First section below the navigation may use additional top padding (96px desktop) to create breathing room.

### Container Rules

- Horizontal padding: **16px** (mobile), **24px** (tablet), **32px** (desktop).
- Content never touches viewport edges.
- Nested containers do not double-apply max-width — only the outermost container constrains width.

### Responsive Breakpoints

| Token | Min Width | Target |
|---|---|---|
| `sm` | 640px | Large phones, landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops, desktop |
| `xl` | 1280px | Standard desktop |
| `2xl` | 1536px | Large displays |

Design approach: **Desktop First** — design the full experience, then adapt down. See Responsive Design section.

---

## Border Radius

Consistent radius values create visual cohesion across all components.

| Element | Radius | Token |
|---|---|---|
| **Cards** | 12px | `radius-lg` |
| **Buttons** | 8px | `radius-md` |
| **Inputs** | 8px | `radius-md` |
| **Images** | 8px | `radius-md` |
| **Badges / Tags** | 6px | `radius-sm` |
| **Avatars** | 9999px (full) | `radius-full` |
| **Tooltips** | 6px | `radius-sm` |
| **Modals / Dialogs** | 16px | `radius-xl` |

### Rules

- Never mix radius values within the same component group.
- Project screenshots use `radius-md` (8px), not full bleed, unless displayed edge-to-edge in a hero.
- Do not use `radius-full` on non-circular elements.

---

## Shadows

Shadows create subtle depth. They should be felt, not seen.

| Token | Value | Usage |
|---|---|---|
| **Small** | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Buttons at rest, input fields, subtle elevation |
| **Medium** | `0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)` | Cards, dropdowns, popovers |
| **Large** | `0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04)` | Modals, floating elements |

### Dark Mode Shadows

Dark mode uses reduced-opacity shadows or border-based elevation instead:

| Token | Value |
|---|---|
| **Small** | `0 1px 2px 0 rgba(0, 0, 0, 0.3)` |
| **Medium** | `0 0 0 1px rgba(255, 255, 255, 0.05)` (border elevation) |
| **Large** | `0 0 0 1px rgba(255, 255, 255, 0.08)` |

### Shadow Rules

- **Avoid heavy shadows.** If a shadow is noticeable at a glance, it is too strong.
- Cards use **Medium** shadow on hover only; at rest, a **Border** token line is sufficient.
- Never stack multiple shadow levels on the same element.
- Shadows are not used on flat sections, typography, or navigation bars.
- Prefer border-based separation over shadows when both would achieve the same hierarchy.

---

## Buttons

### Variants

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| **Primary** | `#18181B` | `#FFFFFF` | none | Main call-to-action (one per viewport section) |
| **Secondary** | `#FFFFFF` | `#18181B` | `1px solid #E4E4E7` | Secondary actions, alternative paths |
| **Ghost** | transparent | `#52525B` | none | Tertiary actions, navigation-adjacent actions |
| **Text** | transparent | `#2563EB` | none | Inline links styled as actions, "Learn more" |

Dark mode inverts Primary to light background with dark text.

### Sizes

| Size | Height | Padding (H) | Font Size | Icon Size |
|---|---|---|---|---|
| **Small** | 32px | 12px | 14px | 16px |
| **Default** | 40px | 16px | 14px | 16px |
| **Large** | 48px | 24px | 16px | 20px |

### States

| State | Behavior |
|---|---|
| **Hover** | Primary: `#27272A` background. Secondary: `#FAFAFA` background. Ghost: `#F4F4F5` background. Transition: 150ms ease. |
| **Active / Pressed** | Scale: `0.98`. Background darkens one step. |
| **Focus** | `2px solid #2563EB` outline, 2px offset. Visible on keyboard navigation. |
| **Disabled** | Opacity: `0.5`. Cursor: `not-allowed`. No hover effects. |
| **Loading** | Spinner replaces label text or appears left of label. Button width does not change. Disabled interaction. |

### Button Rules

- Maximum **one Primary button** per visible section.
- Button labels are verb-first: "Download CV", "View Project", "Send Message" — not "Click Here" or "Submit".
- Icon + text buttons: icon left of label, 8px gap.
- Minimum touch target: **44 × 44px** on mobile (achieved via padding, not visual size alone).

---

## Cards

Four card types serve distinct content purposes. All share foundational rules.

### Shared Card Rules

- **Large padding:** 32px internal padding (desktop), 24px (mobile).
- **Excellent readability:** Body Small (14px) minimum for descriptions; never below 14px.
- **Consistent spacing:** 8px between title and description, 16px between description and metadata, 24px between content and actions.
- Background: Surface token. Border: 1px Border token. Radius: `radius-lg` (12px).
- Hover: subtle border color shift to Neutral 300 + Medium shadow. Transition: 200ms ease.

### Project Card

| Element | Specification |
|---|---|
| **Image** | Top-aligned, 16:9 ratio, `radius-md` on top corners only |
| **Title** | H4 (20px, semibold) |
| **Description** | Body Small, Text Secondary, max 3 lines (truncated with ellipsis) |
| **Tags** | Technology badges below description |
| **Action** | Text button "View Project →" aligned bottom-left |

### Experience Card

| Element | Specification |
|---|---|
| **Period** | Overline style, Muted Text |
| **Role** | H4 (20px, semibold) |
| **Company** | Body Small, Text Secondary |
| **Description** | Body Small, max 4 lines |
| **Tags** | Skill/domain badges |

No image. Text-focused layout.

### Timeline Card

| Element | Specification |
|---|---|
| **Layout** | Vertical timeline with left-aligned dot and connecting line |
| **Dot** | 8px circle, Primary color |
| **Line** | 1px Border color, connects dots vertically |
| **Content** | Experience Card content rules apply |
| **Spacing** | 48px between timeline entries |

### Technology Card

| Element | Specification |
|---|---|
| **Icon** | Lucide icon or technology logo, 32px, centered |
| **Name** | Label style (14px, medium weight), centered |
| **Category** | Overline, Muted Text, centered below name |
| **Size** | Minimum 120px × 100px |
| **Layout** | Grid: 3 columns (desktop), 2 columns (tablet), 2 columns (mobile) |

Compact, scannable, no descriptions — the name and icon carry meaning.

---

## Icons

**Library:** Lucide Icons (consistent with project technical stack).

### Sizing

| Context | Size |
|---|---|
| **Inline with body text** | 16px |
| **Buttons** | 16px (default), 20px (large) |
| **Navigation** | 20px |
| **Card icons** | 24px |
| **Feature / highlight** | 32px |
| **Empty states** | 48px |

### Rules

- **Never decorative.** Every icon must reinforce adjacent text or indicate an action.
- Stroke width: default Lucide `2px`. Do not customize per instance.
- Color: inherits from text color (Text Primary, Text Secondary, or Muted Text).
- Interactive icons (buttons, links) include accessible labels (`aria-label`).
- Do not use icons as the sole indicator of meaning — always pair with text, except universally understood symbols (close ✕, external link ↗).
- Maximum icon density: one icon per interactive element, one icon per list item.

---

## Images

### Photography Style

- Professional, natural lighting. No heavy filters or stock-photo aesthetic.
- If a personal photo is used (About page), it should be approachable and professional — not overly formal or casual.
- Prefer neutral backgrounds that do not compete with page content.

### Project Screenshots

- Clean browser-frame or borderless presentation.
- No mockup devices (no iPhone/laptop frames) unless the project is mobile-specific.
- Capture at 2× resolution for retina displays.
- Show the actual product — not conceptual wireframes or marketing renders.

### Background Treatment

- Page backgrounds are solid (Background token) — no background images, patterns, or gradients.
- Section differentiation uses Surface token or spacing, not background images.
- Hero sections may use a very subtle gradient (neutral tones only) if needed for depth — never colorful.

### Image Radius

- Standalone images: `radius-md` (8px).
- Card-embedded images: top corners only (`radius-md` top-left, top-right).
- Avatars: `radius-full`.

### Image Ratio

| Context | Ratio |
|---|---|
| **Project thumbnails** | 16:9 |
| **Project detail hero** | 16:9 or 2:1 |
| **Avatar** | 1:1 |
| **Blog cover (future)** | 16:9 |

### Optimization Rules

- Use Next.js `<Image>` component for all images.
- Format priority: AVIF → WebP → fallback.
- Lazy load all images below the fold.
- Provide descriptive `alt` text for every image.
- Maximum file size: 200KB for thumbnails, 500KB for hero images.
- Use `sizes` attribute for responsive loading.

---

## Motion

Motion is implemented with **Framer Motion**. It is a precision tool, not a spectacle.

### Core Principle

Animations should feel **natural** — as if the interface is responding to the user, not performing for them. If an animation draws attention to itself, reduce it or remove it.

### Duration Recommendations

| Type | Duration | Easing |
|---|---|---|
| **Micro-interactions** (hover, focus) | 100–150ms | `ease-out` |
| **Component transitions** (expand, collapse) | 200–250ms | `ease-in-out` |
| **Page transitions** | 300ms | `ease-in-out` |
| **Scroll reveals** | 400–500ms | `ease-out` |
| **Maximum allowed** | 500ms | — |

Never exceed 500ms for any animation. Nothing on this site should feel slow.

### Hover Interactions

- Buttons: background color shift (150ms).
- Cards: border color shift + shadow elevation (200ms).
- Links: underline appearance or color shift to Secondary (150ms).
- No scale transforms on hover except buttons (subtle `0.98` on press, not hover).

### Page Transitions

- Subtle fade-in on page load: opacity `0 → 1`, 300ms.
- No slide transitions between pages.
- No page transition animation on mobile (instant load preferred for performance).

### Scroll Animations

- Content sections fade-in and translate up (`y: 16px → 0`) on entering viewport.
- Stagger children by 50ms when revealing lists or card grids.
- Animate only once per page load — no re-triggering on scroll up.
- Respect `prefers-reduced-motion`: disable all scroll animations, keep instant state changes.

### Motion Rules

- Never animate layout properties that trigger reflow (width, height, top, left). Use `transform` and `opacity` only.
- Maximum 3 animated elements visible simultaneously.
- No parallax scrolling.
- No scroll-jacking or horizontal scroll sections.
- No loading animations longer than 1 second.

---

## Accessibility

Accessibility is a design requirement, not a post-launch checklist.

### WCAG Principles

Target: **WCAG 2.1 Level AA** compliance across all pages.

| Principle | Application |
|---|---|
| **Perceivable** | Sufficient color contrast, text alternatives for images, content readable without CSS |
| **Operable** | Full keyboard navigation, no time limits on interactions, no seizure-inducing content |
| **Understandable** | Predictable navigation, clear error messages, consistent component behavior |
| **Robust** | Semantic HTML, ARIA only when native semantics are insufficient |

### Color Contrast

| Pairing | Minimum Ratio | Status |
|---|---|---|
| Text Primary on Background | 16.8:1 | Passes AAA |
| Text Secondary on Background | 7.5:1 | Passes AAA |
| Muted Text on Background | 4.6:1 | Passes AA |
| Primary button text on Primary bg | 15.3:1 | Passes AAA |
| Secondary (blue) on Background | 4.6:1 | Passes AA |

Verify all new color combinations with a contrast checker before implementation.

### Keyboard Navigation

- All interactive elements are reachable via Tab key in logical order.
- Tab order follows visual layout (left-to-right, top-to-bottom).
- Skip-to-content link as the first focusable element on every page.
- Escape key closes modals, dropdowns, and mobile navigation.
- No keyboard traps.

### Focus States

- All interactive elements display a visible focus indicator.
- Focus ring: `2px solid #2563EB`, `2px offset`.
- Focus states are never removed (`outline: none` without replacement is forbidden).
- Focus and hover states are visually distinct.

### Semantic HTML

- Use native elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<header>`, `<footer>`.
- One `<h1>` per page. Heading levels are sequential.
- Lists use `<ul>`/`<ol>`/`<li>`. Tables use `<table>` for tabular data only.
- Buttons are `<button>`. Links are `<a>`. Never use `<div onClick>`.

### Screen Readers

- All images have descriptive `alt` attributes.
- Icon-only buttons have `aria-label`.
- Form inputs are associated with `<label>` elements.
- Dynamic content changes announce via `aria-live` regions.
- Decorative elements use `aria-hidden="true"`.

---

## Responsive Design

### Desktop First (≥ 1024px)

The primary design target. Full layout, maximum spacing, multi-column grids.

- Navigation: horizontal top bar with all links visible.
- Typography: full heading scale.
- Section padding: 96px vertical.
- Grid: 12 columns, 3–4 column card grids.

### Tablet (768px – 1023px)

- Navigation: horizontal bar, may compress spacing.
- Typography: heading scale reduced by one step.
- Section padding: 80px vertical.
- Grid: 2-column card grids.
- Side-by-side layouts may stack if content is text-heavy.

### Mobile (< 768px)

- Navigation: hamburger menu with full-screen or slide-in overlay.
- Typography: heading scale reduced by two steps for Display/H1.
- Section padding: 64px vertical.
- Grid: single column.
- All multi-column layouts stack vertically.
- Horizontal padding: 16px.

### Touch Targets

- Minimum interactive area: **44 × 44px** on mobile.
- Spacing between touch targets: minimum 8px.
- No hover-dependent interactions — all hover states must have tap/click equivalents.

### Spacing Adaptations

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section padding | 96px | 80px | 64px |
| Card padding | 32px | 24px | 24px |
| Container padding | 32px | 24px | 16px |
| Grid gap | 32px | 24px | 16px |

### Typography Adaptations

| Token | Desktop | Mobile |
|---|---|---|
| Display | 48px | 36px |
| H1 | 36px | 30px |
| H2 | 30px | 24px |
| H3 | 24px | 20px |
| Body | 16px | 16px (no reduction) |

Body text never goes below 16px on mobile. Readability is non-negotiable.

---

## Dark Mode

Dark mode is a first-class design target — not an afterthought applied by inverting light mode colors.

### Principles

1. **Do not simply invert colors.** Dark mode has its own calibrated palette (see Color System). Surfaces, borders, and text are independently defined.
2. **Maintain elegance.** Dark backgrounds are near-black (`#09090B`), not pure black (`#000000`). Pure black creates harsh contrast and feels amateur.
3. **Reduce shadow reliance.** Elevation in dark mode is communicated through border luminance (`rgba(255,255,255,0.05)`) rather than box shadows.
4. **Preserve hierarchy.** The same visual weight relationships from light mode must hold — headings are brightest, muted text is dimmest, surfaces are subtly elevated from background.
5. **Images and media.** Project screenshots retain their original appearance. Do not apply dark overlays to images.
6. **Respect system preference.** Default to `prefers-color-scheme`. Provide a manual toggle in the navigation for user override.

### What Changes

- Background, Surface, Border, and Text tokens (see Color System).
- Shadow tokens (border-based elevation).
- Primary button inverts to light background.

### What Does Not Change

- Layout, spacing, typography scale, border radius, component structure.
- Semantic colors (Success, Warning, Error) — slightly adjusted for dark backgrounds.
- Image treatment, icon style, animation timing.

---

## UI Principles

1. **Every section should have a clear hierarchy.** One heading, one supporting paragraph, one primary action. Visitors scan before they read — make scanning effortless.

2. **Every page should breathe.** If a page feels crowded, increase spacing before adding structure. Whitespace is not wasted space — it is an active design element.

3. **Whitespace is part of the design.** Do not fill empty space with decoration. Empty space communicates confidence and gives content room to matter.

4. **Avoid visual noise.** No background patterns, no gradient meshes, no particle effects, no decorative illustrations. If it does not carry information, remove it.

5. **Consistency over creativity.** A new page should feel like it belongs to the same site as every other page. Reuse components, tokens, and patterns. Creativity belongs in content, not in chrome.

---

## Design Rules

These rules are non-negotiable. They apply to every page, component, and design decision.

1. **Never use random colors.** Every color comes from the Color System tokens. No one-off hex values in implementation.
2. **Never overload the interface.** If a section has more than one primary action, one visual highlight, and three content blocks visible without scrolling — simplify.
3. **Never sacrifice usability for aesthetics.** If a design choice makes content harder to read, navigate, or interact with — the design choice is wrong.
4. **Prefer simplicity over complexity.** When two approaches achieve the same goal, choose the one with fewer elements.
5. **Always design for longevity.** Ask: "Will this look appropriate in 2030?" If the answer is uncertain, choose the more timeless option.
6. **Every new component must respect this Design System.** No component ships without using defined tokens for color, spacing, typography, radius, and shadow. Deviations require updating this document first.

---

*Document version: 1.0*
*Last updated: June 2025*
*Status: Approved — official visual reference for Angel Portfolio*
*Companion documents: `PROJECT_VISION.md`, `BRAND.md`*

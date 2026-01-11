# Dinks Pickleball — Design Style Guide

This document captures design decisions made during the refactoring process. All new components and pages should follow these guidelines.

---

## Typography Scale

Consistent type sizes across all pages. Reserve larger sizes for specific use cases.

```
Hero Display: text-5xl/6xl (48-60px)
  → Hero sections only (HomeHero component)

H1 Page Title: text-4xl (36px)
  → Main page heading (one per page)

H2 Section Heading: text-3xl (30px)
  → Major sections within a page

H3 Subsection: text-xl (20px)
  → Card titles, minor sections

Body Large: text-lg (18px)
  → Intro paragraphs, emphasized body text

Body Default: text-base (16px)
  → Standard reading text

Small: text-sm (14px)
  → Supporting text, form labels

Label/Eyebrow: text-sm uppercase (14px)
  → Section labels above headings

Tiny: text-xs (12px)
  → Fine print, legal text
```

### Font Weights

- **Bold** (`font-bold`): Page titles (H1), section headings (H2)
- **Semibold** (`font-semibold`): Subsections (H3), labels, emphasis
- **Medium** (`font-medium`): Supporting text that needs slight emphasis
- **Regular** (default): Body text

### Text Case Rules

**Content case** (how words are written in code) vs **visual styling** (CSS `uppercase`) are separate concerns.

#### Content: Always Sentence Case

All user-facing content should be written in **sentence case** (capitalize first word and proper nouns only):

- Headings: "Lessons and clinics" not "Lessons And Clinics"
- Buttons: "Join Dinks" not "JOIN DINKS"
- Labels: "Become a member" not "Become A Member"

This ensures consistency and readability. The visual treatment is handled separately via CSS.

#### Visual: When to Use CSS `uppercase`

Apply `uppercase tracking-wide` or `tracking-wider` for visual emphasis on:

| Element | Use uppercase? | Example |
|---------|---------------|---------|
| Navigation links | ✅ Yes | `uppercase tracking-wide` |
| Eyebrow labels | ✅ Yes | "BECOME A MEMBER" above headings |
| Hero CTAs | ✅ Yes | "JOIN NOW", "BOOK A COURT" |
| Header CTA button | ✅ Yes | "JOIN DINKS" |
| Page titles (H1) | ❌ No | Keep natural case |
| Section headings (H2) | ❌ No | Keep natural case |
| Body text | ❌ No | Never |
| Error messages | ❌ No | Feels like shouting |
| Form labels | ❌ No | Keep natural case |

#### Implementation Pattern

Write content in sentence case, style visually with CSS:

```tsx
// ✅ Correct: sentence case content + CSS uppercase
<Link href="/membership" className="uppercase tracking-wide">
  Join Dinks
</Link>

// ❌ Wrong: ALL CAPS in content
<Link href="/membership">JOIN DINKS</Link>

// ✅ Correct: eyebrow label
<p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-500">
  Become a member
</p>
```

### Examples from Homepage

```tsx
// ✅ Page title
<h1 className="text-4xl font-bold">
  Year-Round Indoor Pickleball in Des Moines
</h1>

// ✅ Section heading
<h2 className="text-3xl font-bold">
  Membership Packages
</h2>

// ✅ Subsection
<h3 className="text-xl font-semibold">
  Our Mission
</h3>

// ✅ Section label
<p className="text-sm font-semibold uppercase tracking-wider">
  Memberships
</p>

// ✅ Intro paragraph
<p className="text-lg leading-relaxed">
  Dinks Pickleball is Des Moines' largest...
</p>

// ✅ Body text
<p className="text-base leading-relaxed">
  Create a welcoming, competitive...
</p>
```

---

## Theme: Dark Mode

This is a **dark theme** site using brand green as the primary background color.

---

## Color Palette

### Brand Colors

| Color | Hex | Tailwind | Primary Use |
|-------|-----|----------|-------------|
| Green | #2F5435 | `brand-green-*` | **Base background color** |
| Yellow | #EBCD3D | `brand-yellow-*` | **Primary action buttons & CTAs** |
| Blue | #0F223D | `brand-blue-*` | Secondary accents, links |
| Red | #B4342C | `brand-red-*` | Alerts, badges, price callouts |
| White | #FFFFFF | `white` | Text on dark backgrounds |

---

## Background Colors

| Element | Color | Example |
|---------|-------|---------|
| Page background | `brand-green-900` | Dark forest green |
| Card / Surface | `brand-green-800` or `white/5` | Slightly elevated |
| Elevated surface | `brand-green-700` or `white/10` | Modals, dropdowns |
| Header | `brand-green-900/90 backdrop-blur` | Sticky nav |

---

## Text Colors (on dark backgrounds)

| Element | Color | Notes |
|---------|-------|-------|
| Headings | `white` | All h1, h2, h3 |
| Body text | `white/70` | Primary readable text |
| Secondary text | `white/50` | Descriptions, supporting info |
| Muted text | `white/40` | Labels, captions, metadata |
| Disabled text | `white/30` | Inactive states |

**Rule**: Never use brand colors for body text on dark backgrounds. Use white at varying opacities.

---

## Buttons & Interactive Elements

| Type | Style |
|------|-------|
| **Primary CTA** | `bg-brand-yellow-500 text-black` → `hover:bg-brand-yellow-400` |
| **Secondary** | `bg-white/10 text-white` → `hover:bg-white/20` |
| **Ghost/Outline** | `border border-white/30 text-white` → `hover:bg-white/10` |
| **Destructive** | `bg-brand-red-500 text-white` |

---

## Accent Color Usage

| Color | When to use |
|-------|-------------|
| **Yellow** | Primary CTAs, important highlights, "Join Now" buttons |
| **Red** | "Popular" badges, alerts, price callouts |
| **Blue** | Links, secondary interactive elements |
| **Green** | Already the background - use lighter shades for subtle accents |

---

## Borders & Dividers

| Element | Color |
|---------|-------|
| Subtle divider | `white/10` |
| Visible border | `white/20` |
| Card border | `white/10` or `brand-green-700` |
| Input border | `white/20` → `white/40` on focus |

---

## Cards on Dark Background

```tsx
// Standard card
<div className="rounded-2xl bg-white/5 p-6 border border-white/10">
  <h3 className="text-xl font-semibold text-white">Card Title</h3>
  <p className="text-white/70">Card description text</p>
</div>

// Highlighted card
<div className="rounded-2xl bg-white/10 p-6 ring-2 ring-brand-yellow-500">
  ...
</div>
```

---

## Special Sections

| Section | Background |
|---------|------------|
| Hero | `brand-green-900` with image overlay |
| Main content | `brand-green-900` |
| Alternate sections | `brand-green-800` or `black` for contrast |
| Footer | `black` or `brand-green-950` |

---

## Spacing

**Status**: TBD - needs audit and systematization

---

## Layout

**Status**: TBD - needs audit and systematization

---

## Components

**Status**: Using shadcn/ui components. Need to ensure consistent typography scale is applied.

### Cards

Card titles should use `text-xl` for consistency with H3 subsections.

---

## Design Process Notes

- **2025-01-08**: Established type scale following Refactoring UI principles
  - Reduced H1 from `text-5xl/6xl` to `text-4xl`
  - Standardized all H2 to `text-3xl` (was varying between `text-lg`, `text-4xl`, `text-5xl`)
  - Changed three-column cards from H2 to H3 with `text-xl`
  - Intro paragraphs use `text-lg`, body text uses `text-base`

- **Next Steps**:
  - Apply type scale to remaining pages (About, Instruction, etc.)
  - Audit color usage after typography is finalized
  - Establish spacing scale

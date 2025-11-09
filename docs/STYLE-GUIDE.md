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

## Color Palette

**Status**: Brand colors defined. Implementation pending after typography is finalized.

### Brand Colors

```
Green:  #2F5435
Red:    #B4342C
Blue:   #0F223D
Yellow: #EBCE3D
White:  #FFFFFF
```

### Neutral Scale

```
Black/Grays: Using Tailwind slate scale
  - text-slate-900 (darkest)
  - text-slate-600 (medium)
  - text-slate-500 (light)
  - text-slate-300 (lighter)
```

**Current State**: Using slate scale for text hierarchy.

**Note**: Per Refactoring UI guidelines, we're working in grayscale first to ensure hierarchy works before adding brand colors.

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

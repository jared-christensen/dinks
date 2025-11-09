# Dinks Pickleball — Project Instructions

Project-specific instructions for Claude Code when working on this codebase.

---

## Project Overview

Dinks Pickleball is Des Moines' largest indoor pickleball facility with 13 professional courts. This is a Next.js App Router website built with TypeScript, Tailwind CSS, and shadcn/ui components.

**Key offerings:**

- Membership packages (Basic, Gold, VIP)
- Professional instruction from David & Bailey Lanning
- Destination travel experiences (Dinks Destinations)
- Court booking and facility access

---

## Design System

We're following **Refactoring UI principles** and working through the design process systematically:

### Current Phase: Typography (Step 4)

We're establishing a solid typographic foundation BEFORE adding color or other visual flourishes.

**Type Scale:**

```
Hero Display: text-5xl/6xl (hero sections only)
H1 (Page Title): text-4xl
H2 (Section Heading): text-3xl
H3 (Subsection): text-xl
Body Large: text-lg (intro paragraphs)
Body Default: text-base
Small: text-sm
Label: text-sm uppercase
Tiny: text-xs
```

**Font Weights:**

- Bold (`font-bold`): H1, H2
- Semibold (`font-semibold`): H3, labels, emphasis
- Medium (`font-medium`): Supporting text emphasis
- Regular: Body text

### Brand Colors (Not Yet Implemented)

```
Green:  #2F5435
Red:    #B4342C
Blue:   #0F223D
Yellow: #EBCE3D
White:  #FFFFFF
```

Currently using slate scale for grayscale-first approach.

---

## Design Decisions & Constraints

### Do Not Add (Yet)

- **Decorative borders/accents** - Keep it simple, focus on hierarchy
- **Eyebrow labels** - Removed these, only add back if truly needed
- **Color beyond grayscale** - Wait until typography is finalized
- **Arrows on links** - Keeping links clean and simple
- **Extra visual flourishes** - Establishing foundation first

### Active Patterns

- Left-aligned content (not centered)
- Clean text links for secondary CTAs (not buttons)
- Fixed-height card descriptions for alignment
- Sentence-form lists (not bullet lists) for intro content

---

## File Organization

- **Design decisions:** `docs/STYLE-GUIDE.md`
- **Design principles:** `docs/design-guidelines.md` (Refactoring UI summary)

---

## Development Notes

- Using Next.js App Router with TypeScript
- shadcn/ui components (don't create custom abstractions)
- Direct imports (no barrel exports)
- Inline types for component props (unless reused)
- Follow user's personal coding preferences in `~/.claude/CLAUDE.md`

### Content Architecture (CMS-Ready)

**All page content lives in typed data files in `data/` folder:**

- `data/destinations.ts` - Destinations page content
- `data/instruction.ts` - Instruction/lessons page content
- `data/about.ts` - About page family bios
- `data/memberships.ts` - Membership tiers and benefits
- `data/sponsorships.ts` - Sponsorship packages
- `data/sponsors.ts` - Individual sponsor records
- `data/facts.ts` - Facility constants and info

**Architecture principles:**

- Types are defined inline within each data file (NOT in a separate types.ts)
- Pages import and consume data from these files
- This structure prepares for future CMS integration - data files can be replaced with CMS API calls
- Single source of truth for all content

---

## Current Focus

**Homepage Refactoring:**

- ✅ Established consistent type scale
- ✅ Removed redundant About section
- ✅ Simplified membership benefits
- ✅ Cleaned up Lessons/Destinations sections
- ⏳ Hero design (currently hidden)
- ⏳ Apply type scale to remaining pages
- ⏳ Add color once typography is solid

**Next Steps:**

1. Continue refining typography across all pages
2. Test hierarchy in grayscale
3. Add brand colors systematically
4. Establish spacing scale
5. Work on hero design

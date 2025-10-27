# Feature Inventory & Placement

## 1. Feature Catalog

A component/feature-centric view of everything currently represented (or planned) in the site.

- **SiteHeader** – Sticky top bar with logo, navigation (About, Instruction, Join, Book, Sponsors, FAQ), and CTAs (`Become a Member`, `Book a Court`).
- **SiteFooter** – Brand summary, address & hours, directions link, social/email links, and copyright strip.
- **HeroCTA** – Large headline block with supporting copy and dual CTAs (Join / Book).
- **QuickActionGrid** – Card grid pointing to top tasks (Join, Book, Instruction, Sponsors, FAQ).
- **CourtReserveEmbedPreview** – Embedded CourtReserve widget (cropped height) used on Home to preview availability.
- **CourtReserveEmbedFull** – Full-screen widget instance (Book page) for live scheduling.
- **MembershipTierCards** – Cards summarising Basic, Gold, VIP tiers with price and link to `/join`.
- **MembershipHowToChecklist** – Web + app step-by-step instructions with external register link and app store buttons.
- **SponsorshipTeaser** – Dark CTA block inviting sponsors (Home hero footer, Sponsors hero callouts).
- **SponsorshipTierCards** – Sponsor tier highlight cards (Gold Sponsorship, Platinum) with CTA to contact/join.
- **FacilityHighlights** – Trio of feature blurbs highlighting year-round courts, programming, and community.
- **VisitInfo** – Address, hours, contact links, CTA buttons, and embedded Google map iframe.
- **NewsletterCallout** – Email capture prompt (mailto-based) on Home.
- **SponsorCard** – Reusable logo card supporting optional blurb/link (Platinum uses blurb+link, others logo+link).
- **FamilyStorySections** – About page feature with hero copy plus Lanning/Douglass story blocks and images.
- **JoinCTAButtons** – Join page hero CTA cluster linking to how-to and book.
- **FallbackOpportunityCard** – “Gold Sponsor Spots Available” dashed card used in sponsors grid.
- **InstructionPlaceholder** – Temporary copy for `/instruction` pending build-out.
- **FAQPlaceholder** – Temporary copy for `/faq` pending build-out.

## 2. Page Placement & Hierarchy

For each page: primary goal, critical features, and supporting elements (rough priority order).

### Home (`/`)

- **Primary goal:** Drive membership sign-ups and introduce the value of Dinks; booking is a secondary support.

- **Primary features:** HeroCTA (Join / Learn more), QuickActionGrid (with Join surfaced first), MembershipTierCards, FacilityHighlights.

- **Supporting features:** CourtReserveEmbedPreview (for prospective members without the app yet), SponsorshipTeaser, VisitInfo, NewsletterCallout.

### Join (`/join`)

- **Primary goal:** Convert visitors into members.

- **Primary features:** Hero CTA buttons, MembershipTierCards (linking to how-to), SponsorshipTierCards (for business audience).

- **Supporting features:** Help card linking to MembershipHowToChecklist.

### Join How-To (`/join/how-to`)

- **Primary goal:** Guide users through the CourtReserve enrollment.

- **Primary features:** MembershipHowToChecklist (web + app flows).

- **Supporting features:** App store buttons, help contact snippet.

### Book (`/book`)

- **Primary goal:** Offer a web-based booking option for people who haven’t installed the app yet.

- **Primary features:** CourtReserveEmbedFull (entire page).

### Sponsors (`/sponsors`)

- **Primary goal:** Showcase sponsor partners and encourage new sponsorships.

- **Primary features:** Hero CTA block, Platinum SponsorCard instances (with blurbs), Premier and Gold SponsorCards (logos/links).

- **Supporting features:** FallbackOpportunityCard (“Gold Sponsor Spots Available”), sponsor inquiry callout.

### About (`/about`)

- **Primary goal:** Tell the Dinks origin story and highlight founding families.

- **Primary features:** Hero mission copy, Facility/mission highlight block, FamilyStorySections with photos.

### Instruction (`/instruction`)

- **Primary goal:** Promote instruction services and convert visitors into lesson inquiries.

- **Primary features:** Instruction hero, instructor profiles, service cards, training contact form.

### FAQ (`/faq`)

- **Primary goal:** Answer common questions about memberships, booking, and facility policies.

- **Primary features:** FAQ cards/accordion, contact CTA, join CTA.

### Contact (`/contact`) _(existing form stub)_

- **Primary goal:** Provide direct communication channels.

- **Existing features:** Contact methods grid, contact form stub, VisitInfo/map reuse (confirm once finalised).

## 3. Notes for Future Design Decisions

- **Feature reuse vs new pages:** Many hero/CTA blocks can be modularised so alternate page layouts (e.g., membership promotions, event announcements) can mix and match existing features.
- **Prioritisation:** Membership-focused elements (hero CTA, tier cards) should remain front-and-centre; booking is secondary for pre-app users and can be treated as a supporting element.
- **Componentisation roadmap:** Each catalogued feature can be promoted to standalone component folders (e.g., `features/hero-cta`, `features/courtreserve-embed`, `features/sponsor-card`) to keep future iteration focused.
- **Content accuracy:** Sponsor blurbs are intentionally limited to platinum tier (validated copy). Premier/Gold remain logo-only until we have official descriptions.

## 4. Mapping to Source Content

For quick reference, here are the canonical source-of-truth files that contain the original content you captured. Use these when populating pages/components or when copyediting.

- Home (`/`) -> `content/sot/home.md`
- About (`/about`) -> `content/sot/about.md`
- Join & Memberships -> `content/sot/memberships.md`
- Sponsors -> `content/sot/sponsors.md`
- FAQ (`/faq`) -> `content/sot/faq.md`
- Contact -> `content/sot/contact-info.md` (map to `/contact` page)

If you rename the `orginal-site-content/` folder, update these references and consider adding a `content/index.json` manifest to enable programmatic import. (Current canonical folder: `content/sot/`)

## 5. Quick Recommendations (short actionable items)

These are small, low-risk changes you can make immediately to improve the implementation workflow and content accuracy.

1. Replace mailto newsletter CTA with the existing API-backed signup component. There is an API route at `app/api/newsletter-signup/route.ts` and components in `components/` that can be reused.
2. Convert `InstructionPlaceholder` and `FAQPlaceholder` into tracked tickets with acceptance criteria (basic content + expected UI patterns).
3. Create `components/features/` and move larger feature components there (hero-cta, courtreserve-embed, membership-tier-cards, sponsor-card, visit-info). Keep small atoms in `components/ui/`.
4. Rename `orginal-site-content/` -> `content/sot/` (optional) to correct spelling and clarify intent. Add a simple `content/index.json` mapping file.
5. Lazy-load the CourtReserve embed on the Home page (preview) and defer full embed load until `/book` or when users interact with the preview to improve performance.
6. Add a minimal privacy/consent note for third-party embeds (CourtReserve, Google Maps) and ensure `iframe` elements include `title` attributes for accessibility.
7. Drive sponsors from a single JSON/YAML file (name, tier, logo, url, optional blurb) so updates don't require code changes.

---

If you'd like, I can implement any of the above now — for example: rename the content folder and add a `content/index.json` manifest, or swap the mailto newsletter to the API-backed form. Tell me which item to do next and I'll implement it.

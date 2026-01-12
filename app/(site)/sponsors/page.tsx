"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SponsorCard, Sponsor } from "@/components/sponsor-card";

type SponsorTierKey = "platinum" | "premier" | "gold";

interface SponsorRecord {
  name: string;
  tier: SponsorTierKey;
  blurb?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  weight?: number;
}

const sponsors: SponsorRecord[] = [
  // Platinum
  {
    name: "ET Capital Partners",
    tier: "platinum",
    blurb:
      "ET Capital Partners helps private participants find quality opportunities with dependable and experienced partners.",
    imageSrc: "/sponsors/platinum/et-cap-partners.webp",
    imageAlt: "ET Capital Partners logo",
    href: "http://www.etcapitalpartners.com/",
  },
  {
    name: "Roofing Siding Windows of Iowa (RSW)",
    tier: "platinum",
    blurb:
      "RSW is your first choice in building supplies for exterior projects.",
    imageSrc: "/sponsors/platinum/RSW.webp",
    imageAlt: "Roofing Siding Windows of Iowa (RSW) logo",
    href: "http://www.roofingsidingwindowsofiowa.com/",
  },
  {
    name: "East Village Foot & Ankle Surgeons",
    tier: "platinum",
    blurb: "Foot & ankle services from common sprains to complex procedures.",
    imageSrc: "/sponsors/platinum/east-village-foot-ankle.webp",
    imageAlt: "East Village Foot & Ankle Surgeons logo",
    href: "http://www.eastvillagefootandankle.com/",
  },
  {
    name: "Fellows & Blake",
    tier: "platinum",
    blurb:
      "Integrates investments with tax planning, risk mitigation and legacy strategies.",
    imageSrc: "/sponsors/platinum/fellows-blake.webp",
    imageAlt: "Fellows & Blake logo",
    href: "https://fellowsfg.com/",
  },
  {
    name: "Aetna Medicare",
    tier: "platinum",
    blurb:
      "Health insurance plans. 2024 fitness reimbursement: $600–$1200 / year.",
    imageSrc: "/sponsors/platinum/Aetna-Medicare.webp",
    imageAlt: "Aetna Medicare logo",
    href: "http://www.aetnamedicare.com/",
  },
  // Premier
  {
    name: "Capital Defender Advisors",
    tier: "premier",
    imageSrc: "/sponsors/premier/capital-defender.webp",
    href: "http://www.capitaldefenderadvisors.com/",
  },
  {
    name: "AssuredPartners",
    tier: "premier",
    imageSrc: "/sponsors/premier/assured-partners.webp",
    href: "http://www.assuredpartners.com/",
  },
  {
    name: "Key Potential Chiropractic",
    tier: "premier",
    imageSrc: "/sponsors/premier/key-potential.webp",
    href: "https://www.keypotentialchiropractic.com/",
  },
  // Gold (alphabetized)
  { name: "29th State Apparel", tier: "gold", href: "https://29thstateapparel.com/" },
  { name: "Amy Boom Real Estate", tier: "gold", href: "https://www.facebook.com/p/Amy-Boom-Real-Estate-100089396266403/" },
  { name: "Cass Muse - Loan Officer", tier: "gold", href: "http://www.cassmuse.com/" },
  { name: "Cindy's Boutique in Valley Junction", tier: "gold", href: "https://cindysboutiquevalleyjunction.com/" },
  { name: "Clarity Chiropractic", tier: "gold", href: "https://www.claritychirotrt.com/" },
  { name: "Community Greetings", tier: "gold", href: "https://communitygreetings.com/" },
  { name: "Craig Montgomery - Aris Agency", tier: "gold", href: "https://www.arisagency.com/" },
  { name: "Elevate Physical Therapy & Sports Medicine", tier: "gold", href: "https://elevateptiowa.com/" },
  { name: "Grounds For Celebration", tier: "gold", href: "https://groundsforcelebration.com/" },
  { name: "Happy Roof", tier: "gold", href: "https://www.happyroof.biz/" },
  { name: "Image360 Urbandale", tier: "gold", href: "https://image360.com/urbandale-ia" },
  { name: "Potthoff Foods", tier: "gold", href: "https://potthofffoods.com/" },
  { name: "RoofSmart", tier: "gold", href: "https://www.roofsmartiowa.com/" },
  { name: "Sherwood Forest Event Center", tier: "gold", href: "https://www.sherwoodforesteventcenter.com/" },
  { name: "Skateland", tier: "gold", href: "https://skatelanddm.com/" },
  { name: "The Ridgemont", tier: "gold", href: "https://www.facebook.com/theridgemont/" },
  { name: "Tony Muse - Iowa Realtor", tier: "gold", href: "https://myiowarealtor.com/" },
];

function getSponsorsByTier(tier: SponsorTierKey) {
  return sponsors
    .filter((s) => s.tier === tier)
    .sort((a, b) => (a.weight ?? 999) - (b.weight ?? 999));
}

// Map internal tier keys to display labels & SponsorCard tier value
const tierDisplay: Record<
  SponsorTierKey,
  { heading: string; cardTier: Sponsor["tier"] }
> = {
  platinum: {
    heading: "Platinum Court Sponsors",
    cardTier: "Platinum Court Sponsor",
  },
  premier: { heading: "Premier Sponsors", cardTier: "Premier Sponsor" },
  gold: { heading: "Gold Sponsors", cardTier: "Gold Sponsor" },
};

function adapt(records: SponsorRecord[], key: SponsorTierKey): Sponsor[] {
  return records.map((r) => ({
    name: r.name,
    tier: tierDisplay[key].cardTier,
    blurb: r.blurb,
    href: r.href,
    imageSrc: r.imageSrc,
    imageAlt: r.imageAlt,
  }));
}

export default function Sponsors() {
  const platinumSponsors = adapt(getSponsorsByTier("platinum"), "platinum");
  const premierSponsors = adapt(getSponsorsByTier("premier"), "premier");
  const goldSponsors = adapt(getSponsorsByTier("gold"), "gold");
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Our Sponsors
          </h1>
          <p className="text-white/80">
            These partners keep the courts open and our players thriving. Want
            to join them? Explore the options below or contact us to design a
            custom package.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Button asChild>
              <Link href="/membership#business-sponsorships">
                View sponsorship tiers
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Tier sections */}
      <div className="space-y-14">
        {/* Platinum */}
        <div className="space-y-6" id="platinum-sponsors">
          <h2 className="text-2xl font-semibold text-white">
            {tierDisplay.platinum.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {platinumSponsors.map((s) => (
              <SponsorCard key={s.name} sponsor={s} showBlurb />
            ))}
          </div>
        </div>
        {/* Premier */}
        <div className="space-y-6" id="premier-sponsors">
          <h2 className="text-2xl font-semibold text-white">
            {tierDisplay.premier.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {premierSponsors.map((s) => (
              <SponsorCard key={s.name} sponsor={s} />
            ))}
          </div>
        </div>
        {/* Gold */}
        <div className="space-y-6" id="gold-sponsors">
          <h2 className="text-2xl font-semibold text-white">
            {tierDisplay.gold.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {goldSponsors.map((s) => (
              <SponsorCard key={s.name} sponsor={s} />
            ))}
            <article className="flex h-full flex-col items-start justify-between rounded-3xl border border-dashed border-white/20 bg-white/5 p-6 text-white/80">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">
                  Gold Sponsor Spots Available
                </h3>
                <p className="text-sm leading-6">
                  Banner placement, on-site recognition, and website logo.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="mailto:info@dinkspickleballdsm.com"
                  className="inline-flex items-center justify-center rounded-full bg-brand-yellow-500 px-5 py-2 text-sm font-semibold text-black transition hover:bg-brand-yellow-400"
                >
                  Inquire about gold
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-white">
              Interested in sponsoring?
            </h3>
            <p className="text-sm text-white/80">
              We offer standard tiers and custom packages like "The Bob Barker".
            </p>
          </div>
          <div className="flex gap-3">
            <Button asChild variant="outline">
              <Link href="/membership#business-sponsorships">View tiers</Link>
            </Button>
            <Button asChild>
              <Link href="/contact">Contact us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

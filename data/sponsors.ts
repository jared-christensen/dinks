export type SponsorTierKey = "platinum" | "premier" | "gold";

export interface SponsorRecord {
  name: string;
  tier: SponsorTierKey;
  blurb?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean; // appears on homepage strip
  weight?: number; // lower weight = earlier
}

export const sponsors: SponsorRecord[] = [
  // Platinum (featured examples)
  {
    name: "ET Capital Partners",
    tier: "platinum",
    featured: true,
    blurb:
      "ET Capital Partners helps private participants find quality opportunities with dependable and experienced partners.",
    imageSrc: "/sponsors/platinum/et-cap-partners.webp",
    imageAlt: "ET Capital Partners logo",
    href: "http://www.etcapitalpartners.com/",
  },
  {
    name: "Roofing Siding Windows of Iowa (RSW)",
    tier: "platinum",
    featured: true,
    blurb:
      "RSW is your first choice in building supplies for exterior projects.",
    imageSrc: "/sponsors/platinum/RSW.webp",
    imageAlt: "Roofing Siding Windows of Iowa (RSW) logo",
    href: "http://www.roofingsidingwindowsofiowa.com/",
  },
  {
    name: "East Village Foot & Ankle Surgeons",
    tier: "platinum",
    featured: true,
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
  {
    name: "29th State Apparel",
    tier: "gold",
    href: "https://29thstateapparel.com/",
  },
  {
    name: "Amy Boom Real Estate",
    tier: "gold",
    href: "https://www.facebook.com/p/Amy-Boom-Real-Estate-100089396266403/",
  },
  {
    name: "Cass Muse - Loan Officer",
    tier: "gold",
    href: "http://www.cassmuse.com/",
  },
  {
    name: "Cindy's Boutique in Valley Junction",
    tier: "gold",
    href: "https://cindysboutiquevalleyjunction.com/",
  },
  {
    name: "Clarity Chiropractic",
    tier: "gold",
    href: "https://www.claritychirotrt.com/",
  },
  {
    name: "Community Greetings",
    tier: "gold",
    href: "https://communitygreetings.com/",
  },
  {
    name: "Craig Montgomery - Aris Agency",
    tier: "gold",
    href: "https://www.arisagency.com/",
  },
  {
    name: "Elevate Physical Therapy & Sports Medicine",
    tier: "gold",
    href: "https://elevateptiowa.com/",
  },
  {
    name: "Grounds For Celebration",
    tier: "gold",
    href: "https://groundsforcelebration.com/",
  },
  {
    name: "Happy Roof",
    tier: "gold",
    href: "https://www.happyroof.biz/",
  },
  {
    name: "Image360 Urbandale",
    tier: "gold",
    href: "https://image360.com/urbandale-ia",
  },
  {
    name: "Potthoff Foods",
    tier: "gold",
    href: "https://potthofffoods.com/",
  },
  {
    name: "RoofSmart",
    tier: "gold",
    href: "https://www.roofsmartiowa.com/",
  },
  {
    name: "Sherwood Forest Event Center",
    tier: "gold",
    href: "https://www.sherwoodforesteventcenter.com/",
  },
  {
    name: "Skateland",
    tier: "gold",
    href: "https://skatelanddm.com/",
  },
  {
    name: "The Ridgemont",
    tier: "gold",
    href: "https://www.facebook.com/theridgemont/",
  },
  {
    name: "Tony Muse - Iowa Realtor",
    tier: "gold",
    href: "https://myiowarealtor.com/",
  },
];

export function getSponsorsByTier(tier: SponsorTierKey) {
  return sponsors
    .filter((s) => s.tier === tier)
    .sort((a, b) => (a.weight ?? 999) - (b.weight ?? 999));
}

export function getFeaturedSponsors(limit = 6) {
  const featured = sponsors.filter((s) => s.featured);
  // Fallback: take first few platinum if not enough explicitly featured
  const fallbackNeeded = featured.length < limit;
  const platinum = sponsors.filter((s) => s.tier === "platinum");
  const combined = fallbackNeeded ? [...featured, ...platinum] : featured;
  const unique = combined.filter(
    (s, idx, arr) => arr.findIndex((x) => x.name === s.name) === idx
  );
  return unique.slice(0, limit);
}

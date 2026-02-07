import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";

type SponsorTierKey = "platinum" | "premier" | "gold";

interface SponsorRecord {
  name: string;
  tier: SponsorTierKey;
  blurb?: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  featured?: boolean;
  weight?: number;
}

const sponsors: SponsorRecord[] = [
  // Platinum (featured)
  {
    name: "ET Capital Partners",
    tier: "platinum",
    featured: true,
    imageSrc: "/sponsors/platinum/et-cap-partners.webp",
    imageAlt: "ET Capital Partners logo",
    href: "http://www.etcapitalpartners.com/",
  },
  {
    name: "Roofing Siding Windows of Iowa (RSW)",
    tier: "platinum",
    featured: true,
    imageSrc: "/sponsors/platinum/RSW.webp",
    imageAlt: "Roofing Siding Windows of Iowa (RSW) logo",
    href: "http://www.roofingsidingwindowsofiowa.com/",
  },
  {
    name: "East Village Foot & Ankle Surgeons",
    tier: "platinum",
    featured: true,
    imageSrc: "/sponsors/platinum/east-village-foot-ankle.webp",
    imageAlt: "East Village Foot & Ankle Ankle Surgeons logo",
    href: "http://www.eastvillagefootandankle.com/",
  },
  // Premier
  {
    name: "Capital Defender Advisors",
    tier: "premier",
    imageSrc: "/sponsors/premier/capital-defender.webp",
    href: "http://www.capitaldefenderadvisors.com/",
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
    name: "Craig Montgomery - Aris Agency",
    tier: "gold",
    href: "https://www.arisagency.com/",
  },
  {
    name: "Image360 Urbandale",
    tier: "gold",
    href: "https://image360.com/urbandale-ia",
  },
];

function getFeaturedSponsors(limit = 6) {
  const featured = sponsors.filter((s) => s.featured);
  const platinum = sponsors.filter((s) => s.tier === "platinum");
  const fallbackNeeded = featured.length < limit;
  const combined = fallbackNeeded ? [...featured, ...platinum] : featured;
  const unique = combined.filter(
    (s, idx, arr) => arr.findIndex((x) => x.name === s.name) === idx,
  );
  return unique.slice(0, limit);
}

function getSponsorsByTier(tier: SponsorTierKey) {
  return sponsors
    .filter((s) => s.tier === tier)
    .sort((a, b) => (a.weight ?? 999) - (b.weight ?? 999));
}

export function FeaturedSponsors({
  limit = 6,
  showGold = true,
  goldLimit,
}: {
  limit?: number;
  showGold?: boolean;
  goldLimit?: number;
}) {
  const featured = getFeaturedSponsors(limit);
  const premier = getSponsorsByTier("premier");
  const allGold = getSponsorsByTier("gold");
  const gold = goldLimit ? allGold.slice(0, goldLimit) : allGold;

  if (!featured.length && !premier.length && !gold.length) return null;

  return (
    <section className="mt-24 space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-500">
          Our Partners
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Thank You, Sponsors
        </h2>
        <p className="text-base text-white/80">
          These sponsors keep the courts open and our players thriving.{" "}
          <Link
            href="/membership#business-sponsorships"
            className="text-white underline underline-offset-2 hover:text-brand-yellow-500"
          >
            Want to join them?
          </Link>
        </p>
      </div>

      <Card className="p-8 space-y-6">
        {/* Platinum Sponsors */}
        {featured.length > 0 && (
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Platinum
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
              {featured.map((s) => (
                <Link
                  key={s.name}
                  href={s.href ?? "#"}
                  aria-label={`Visit ${s.name} website`}
                  className="group flex items-center justify-center rounded-2xl border-4 border-brand-yellow-500/30 bg-white p-5 shadow-lg shadow-black/20 transition hover:border-brand-yellow-500"
                >
                  <Image
                    src={s.imageSrc!}
                    alt={s.imageAlt ?? `${s.name} logo`}
                    width={200}
                    height={80}
                    loading="lazy"
                    className="h-14 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Premier Sponsors */}
        {premier.length > 0 && (
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Premier
            </p>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
              {premier.map((s) => (
                <Link
                  key={s.name}
                  href={s.href ?? "#"}
                  aria-label={`Visit ${s.name} website`}
                  className="group flex items-center justify-center rounded-xl border-4 border-white/50 bg-white p-3 shadow-md shadow-black/10 transition hover:border-brand-yellow-500"
                >
                  <Image
                    src={s.imageSrc!}
                    alt={s.imageAlt ?? `${s.name} logo`}
                    width={160}
                    height={64}
                    loading="lazy"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Gold Sponsors */}
        {showGold && gold.length > 0 && (
          <div className="space-y-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
              Gold
            </p>
            <div className="flex flex-wrap gap-2">
              {gold.map((s) => (
                <Link
                  key={s.name}
                  href={s.href ?? "#"}
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-brand-yellow-500 hover:text-black hover:border-brand-yellow-500"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </Card>
    </section>
  );
}

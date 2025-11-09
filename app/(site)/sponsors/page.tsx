"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SponsorCard, Sponsor } from "@/components/sponsor-card";
import { getSponsorsByTier } from "@/data/sponsors";

// Map internal tier keys to display labels & SponsorCard tier value
const tierDisplay: Record<
  string,
  { heading: string; cardTier: Sponsor["tier"] }
> = {
  platinum: {
    heading: "Platinum Court Sponsors",
    cardTier: "Platinum Court Sponsor",
  },
  premier: { heading: "Premier Sponsors", cardTier: "Premier Sponsor" },
  gold: { heading: "Gold Sponsors", cardTier: "Gold Sponsor" },
};

function adapt(
  records: ReturnType<typeof getSponsorsByTier>,
  key: keyof typeof tierDisplay
): Sponsor[] {
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
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Our Sponsors
          </h1>
          <p className="text-slate-600">
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
          <h2 className="text-2xl font-semibold text-slate-900">
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
          <h2 className="text-2xl font-semibold text-slate-900">
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
          <h2 className="text-2xl font-semibold text-slate-900">
            {tierDisplay.gold.heading}
          </h2>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {goldSponsors.map((s) => (
              <SponsorCard key={s.name} sponsor={s} />
            ))}
            <article className="flex h-full flex-col items-start justify-between rounded-3xl border border-dashed border-slate-300 bg-white p-6 text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
                  Gold Sponsor Spots Available
                </h3>
                <p className="text-sm leading-6">
                  Banner placement, on-site recognition, and website logo.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="mailto:info@dinkspickleballdsm.com"
                  className="inline-flex items-center justify-center rounded-full bg-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-700/90"
                >
                  Inquire about gold
                </Link>
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* Callout */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-slate-900">
              Interested in sponsoring?
            </h3>
            <p className="text-sm text-slate-600">
              We offer standard tiers and custom packages like “The Bob Barker”.
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

import Link from "next/link";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { Button } from "@/components/ui/button";
import { INSTRUCTION, DESTINATIONS } from "@/data/facts";
import { membershipsData } from "@/data/memberships";
import { PackageCard } from "@/components/package-card";

const membershipDisplayTiers = membershipsData.tiers;

export default function Home() {
  return (
    <>
      {/* <HomeHero /> */}
      <section className="space-y-24">
        <div className="relative space-y-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] bg-[url('/dinks-logo-circle.webp')] bg-center bg-no-repeat bg-size-[460px]"
          />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Membership Packages
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              All memberships include personalized door code access, court
              booking access, and ball machine rental access.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {membershipDisplayTiers.map((tier) => (
              <PackageCard
                key={tier.name}
                tier={{
                  name: tier.name,
                  price: tier.price,
                  description: tier.description,
                  keyDifferences: tier.keyDifferences,
                  ctaHref: "/join/how-to",
                  ctaLabel: "Select this membership",
                }}
                variant="membership"
              />
            ))}
          </div>
        </div>

        {/* Facility highlights removed */}

        {/* Instruction teaser */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900">
              Lessons & Clinics
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Private and group instruction plus youth training with PPR
              professionals David & Bailey.
            </p>
            <Link
              href="/instruction"
              className="inline-flex items-center text-base font-semibold text-slate-900 hover:text-slate-700 transition"
            >
              View details
            </Link>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900">
              Pickleball Destinations
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Travel to incredible destinations like Sonoma, Budapest, and
              Riviera Maya with fellow pickleball enthusiasts.
            </p>
            <Link
              href="/destinations"
              className="inline-flex items-center text-base font-semibold text-slate-900 hover:text-slate-700 transition"
            >
              View details
            </Link>
          </div>
        </div>

        <NewsletterCard />

        <FeaturedSponsors />
      </section>
    </>
  );
}

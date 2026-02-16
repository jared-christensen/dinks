import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/package-card";
import { SPONSORSHIP_TIERS } from "@/constants/sponsorships";

export function SponsorshipSection() {
  return (
    <section id="business-sponsorships" className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-white">Sponsorship Packages</h2>
        <p className="max-w-2xl text-base text-white/80">
          Partner with Dinks to connect your business with the Des Moines
          pickleball community. Our sponsorship packages offer visibility, brand
          exposure, and membership benefits while supporting the growth of
          pickleball in Iowa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {SPONSORSHIP_TIERS.filter((tier) => tier.enabled !== false).map((tier) => (
          <PackageCard
            key={tier.name}
            tier={{
              name: tier.name,
              price: tier.price,
              description: tier.description,
              whatsDifferent: tier.whatsDifferent,
              ctaHref: "/join",
              ctaLabel: "Get Started",
            }}
          />
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-white">
          Need a custom partnership?
        </h3>
        <p className="text-sm leading-6 text-white/80">
          We can build custom packages with multi-year commitments, tournament
          sponsorships, youth programs, gear partnerships, or event activations.
        </p>
        <div className="pt-1">
          <Button asChild variant="outline">
            <Link href="/contact">Contact us to discuss options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

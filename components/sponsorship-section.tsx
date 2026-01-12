import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/package-card";

const tiers = [
  {
    name: "Gold",
    price: "$1,000/Year",
    description: "Includes 1 VIP membership plus banner and website branding.",
    whatsDifferent: ["Banner at facility", "Logo on Dinks website"],
  },
  {
    name: "Premier",
    price: "$2,500/Year",
    description: "Includes 1 VIP membership plus premier advertising space.",
    whatsDifferent: [
      "Premier 4'x30' advertisement space near entrance and courts",
      "Logo on Dinks website",
      "Mesh windscreen printing is sponsor responsibility",
    ],
  },
  {
    name: "Platinum",
    price: "$5,000/Year",
    description:
      "Includes 2 VIP memberships plus court naming and premium branding.",
    whatsDifferent: [
      "Court naming rights (shown during reservations)",
      "On-court branding opportunities",
      "Banner at facility",
      "Logo on Dinks website",
    ],
  },
];

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
        {tiers.map((tier) => (
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

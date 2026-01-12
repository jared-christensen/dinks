import { PackageCard } from "@/components/package-card";
import { Info } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$60/Year + $25 activation",
    description:
      "For players who want flexible access to courts and intro programming.",
    keyDifferences: [
      "Book 5 days in advance",
      "Up to 4 courts per day",
      "48-hour cancellation policy",
    ],
  },
  {
    name: "Gold",
    price: "$125/Year + $25 activation",
    description:
      "Adds a longer booking window and early access to tournaments and special events.",
    keyDifferences: [
      "Book 14 days in advance",
      "Up to 8 courts per day",
      "24-hour cancellation policy",
      "Early access to tournaments and events",
    ],
  },
  {
    name: "VIP",
    price: "$195/Year + $10 activation",
    description:
      "For frequent players who want the longest booking window and priority access.",
    keyDifferences: [
      "Book 6 months in advance",
      "Up to 8 courts per day",
      "8-hour cancellation policy",
      "Early access to tournaments and events",
    ],
  },
];

export function MembershipSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-500">
          Become a Member
        </p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Choose Your Game
        </h2>
        <p className="max-w-2xl text-base text-white/80">
          All members get personal door code, court booking, ball machine
          rental.
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
              keyDifferences: tier.keyDifferences,
              ctaHref: "/join",
              ctaLabel: "Join Now",
            }}
          />
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-4">
        <Info className="h-5 w-5 flex-shrink-0 text-white/50" />
        <p className="text-sm text-white/80">
          Members may bring guests to their reservation. Guest fee is $10 per
          person.
        </p>
      </div>
    </section>
  );
}

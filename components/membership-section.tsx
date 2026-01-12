import { PackageCard } from "@/components/package-card";
import { Info } from "lucide-react";
import { MEMBERSHIP_TIERS } from "@/constants/memberships";

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
        {MEMBERSHIP_TIERS.map((tier) => (
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

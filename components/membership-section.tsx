import Link from "next/link";
import { PackageCard } from "@/components/package-card";
import { membershipsData } from "@/data/memberships";

export function MembershipSection() {
  const benefitsWithoutGuest = membershipsData.allIncluded.filter(
    (item) => !item.toLowerCase().includes("guest")
  );

  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">
          Membership Packages
        </h2>
        <p className="max-w-2xl text-base text-slate-600">
          All memberships include {benefitsWithoutGuest.join(", ").toLowerCase()}.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {membershipsData.tiers.map((tier) => (
          <PackageCard
            key={tier.name}
            tier={{
              name: tier.name,
              price: tier.price,
              description: tier.description,
              keyDifferences: tier.keyDifferences,
              ctaHref: "/join",
              ctaLabel: "Learn more",
            }}
            variant="membership"
          />
        ))}
      </div>

      <p className="text-sm text-slate-600">{membershipsData.guestPolicy}</p>
    </section>
  );
}

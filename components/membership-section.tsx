import Link from "next/link";
import { PackageCard } from "@/components/package-card";
import { membershipsData } from "@/data/memberships";
import { Info } from "lucide-react";

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
              ctaLabel: "Join Now",
            }}
            variant="membership"
          />
        ))}
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
        <Info className="h-5 w-5 flex-shrink-0 text-slate-600" />
        <p className="text-sm text-slate-600">{membershipsData.guestPolicy}</p>
      </div>
    </section>
  );
}

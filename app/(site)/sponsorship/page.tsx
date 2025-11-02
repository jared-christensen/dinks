import Link from "next/link"; // still used inside PackageCard via CTA
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sponsorshipsData } from "@/data/sponsorships";
import { PackageCard } from "@/components/package-card";

const sponsorTiers = sponsorshipsData.tiers;

export default function Sponsorship() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Business Partnerships
        </span>
        <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
          Sponsorship Opportunities
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Partner with Dinks to connect your business with the Des Moines
          pickleball community. Our sponsorship packages offer visibility, brand
          exposure, and membership benefits while supporting the growth of
          pickleball in Iowa.
        </p>
      </div>

      {/* Why sponsor */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Why Sponsor Dinks?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 text-base leading-7">
            <li className="flex items-start gap-3">
              <span className="text-xl text-slate-700">✓</span>
              <span>
                <strong>Growing Community:</strong> Connect with an active,
                engaged pickleball community in Des Moines
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-slate-700">✓</span>
              <span>
                <strong>Brand Visibility:</strong> Your business prominently
                displayed to members and visitors daily
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-slate-700">✓</span>
              <span>
                <strong>Support Local Sports:</strong> Help grow the
                fastest-growing sport in America right here in Iowa
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl text-slate-700">✓</span>
              <span>
                <strong>Membership Benefits:</strong> All packages include VIP
                memberships for your team
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Sponsorship tiers */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">
          Sponsorship Packages
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sponsorTiers.map((tier) => (
            <PackageCard
              key={tier.name}
              tier={{
                name: tier.name,
                price: tier.price,
                whatsDifferent: tier.whatsDifferent,
                included: tier.included,
                ctaHref: "/join/how-to",
                ctaLabel: "Start in CourtReserve",
              }}
              variant="sponsorship"
            />
          ))}
        </div>

        <Card className="border-dashed">
          <CardHeader>
            <CardTitle>Have a different idea?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-slate-600">
            <p>
              We can build a custom partnership: multi-year packages, title
              tournament sponsor, youth program supporter, gear partner, event
              activations—bring us your concept.
            </p>
            <p className="text-xs font-semibold text-slate-500">
              Custom packages can blend on-site branding, VIP memberships,
              pricing lock-ins, and exclusive experiences.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
            >
              Start a conversation →
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

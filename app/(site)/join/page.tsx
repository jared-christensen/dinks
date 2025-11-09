import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MembershipSection } from "@/components/membership-section";
import { CourtRates } from "@/components/court-rates";
import { membershipsData } from "@/data/memberships";

export default function Join() {
  return (
    <section className="space-y-14">
      <div className="space-y-6 text-center md:text-left">
        <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
          Memberships
        </span>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Join Dinks
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:mx-0">
            Memberships unlock personal door codes, extended booking windows,
            and early access to leagues, tournaments, and special events. Choose
            the package that fits how often you play, then complete your
            enrollment through CourtReserve. Businesses can support the club
            through sponsorships that include VIP memberships and on-site
            visibility.
          </p>
        </div>
      </div>

      <MembershipSection />

      <CourtRates />

      <div
        id="business-sponsorships"
        className="rounded-3xl border-2 border-slate-300 bg-slate-50 p-8 shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-slate-900">
          Business or Organization?
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          We offer sponsorship opportunities for businesses looking to connect
          with the Des Moines pickleball community. Packages include branding,
          VIP memberships, and more.
        </p>
        <ul className="mt-4 space-y-1 text-sm font-medium text-slate-700">
          <li>
            <span className="inline-block w-36">Gold:</span> $1,000/yr –
            includes 1 VIP membership
          </li>
          <li>
            <span className="inline-block w-36">Premier:</span> $2,500/yr –
            includes 1 VIP membership
          </li>
          <li>
            <span className="inline-block w-36">Platinum:</span> $5,000/yr –
            includes 2 VIP memberships
          </li>
          <li className="text-xs font-normal text-slate-500">
            Custom multi-year partnerships available.
          </li>
        </ul>
        <Button asChild className="mt-6">
          <Link href="/sponsorship">View Sponsorship Packages</Link>
        </Button>
      </div>
    </section>
  );
}

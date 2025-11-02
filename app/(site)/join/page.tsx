import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { KeyRound, CalendarCheck, DollarSign } from "lucide-react";
import { MembershipCard } from "@/components/membership-card";

const membershipTiers = [
  {
    name: "Basic",
    price: "$60/yr + $25 activation",
    description:
      "For players who want flexible access to courts and intro programming.",
    keyDifferences: [
      "Book 5 days in advance",
      "Up to 4 courts per day",
      "48-hour cancellation policy",
    ],
    included: ["Personalized door code access", "$10 ball machine rental"],
  },
  {
    name: "Gold",
    price: "$125/yr + $25 activation",
    description:
      "Adds a longer booking window and early access to tournaments & special events.",
    keyDifferences: [
      "Book 14 days in advance",
      "Up to 8 courts per day",
      "24-hour cancellation policy",
      "Early access to tournaments & events",
    ],
    included: ["Personalized door code access", "$10 ball machine rental"],
  },
  {
    name: "VIP",
    price: "$195/yr + $10 activation",
    description:
      "For frequent players who want the longest booking window and priority access.",
    keyDifferences: [
      "Book 6 months in advance",
      "Up to 8 courts per day",
      "8-hour cancellation policy",
      "Early access to tournaments & events",
    ],
    included: ["Personalized door code access", "$10 ball machine rental"],
  },
];

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
            the tier that fits how often you play, then complete your enrollment
            through CourtReserve. Businesses can support the club through
            sponsorships that include VIP memberships and on-site visibility.
          </p>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <h2 className="mb-6 text-center text-xl font-semibold text-slate-900">
            All memberships include:
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                <KeyRound className="h-6 w-6 text-slate-700" />
              </div>
              <p className="font-semibold text-slate-900">
                Personalized door code access
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                <CalendarCheck className="h-6 w-6 text-slate-700" />
              </div>
              <p className="font-semibold text-slate-900">
                Court booking access
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-200">
                <DollarSign className="h-6 w-6 text-slate-700" />
              </div>
              <p className="font-semibold text-slate-900">
                $10 ball machine rental
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-8 md:grid-cols-3">
        {membershipTiers.map((tier) => (
          <MembershipCard key={tier.name} tier={tier} />
        ))}
      </div>

      <div className="rounded-3xl border-2 border-slate-300 bg-slate-50 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">
          Business or Organization?
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-600">
          We offer sponsorship opportunities for businesses looking to connect
          with the Des Moines pickleball community. Packages include branding,
          VIP memberships, and more.
        </p>
        <Button asChild className="mt-6">
          <Link href="/sponsorship">View Sponsorship Options</Link>
        </Button>
      </div>

      <div className="rounded-3xl bg-slate-50 p-8 text-base leading-7 text-slate-700 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Need help?</h2>
        <p className="mt-2">
          Follow our step-by-step guide to complete your membership in
          CourtReserve.
        </p>
        <Button asChild className="mt-4">
          <Link href="/join/how-to">View how-to guide</Link>
        </Button>
        <p className="mt-4 text-sm text-slate-500">
          Still deciding?{" "}
          <Link
            href="/contact"
            className="font-semibold text-slate-700 underline-offset-4 hover:underline"
          >
            Contact us
          </Link>{" "}
          and we&apos;ll walk you through it.
        </p>
      </div>
    </section>
  );
}

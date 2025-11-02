import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { Button } from "@/components/ui/button";

const membershipPreview = [
  {
    name: "Basic Membership",
    price: "$60/year",
    description: "Personal door code. Play casually and meet local players.",
  },
  {
    name: "Gold Membership",
    price: "$125/year",
    description:
      "More advance time & priority access. Grow with the community.",
  },
  {
    name: "VIP Membership",
    price: "$195/year",
    description: "Maximum flexibility & first access to everything at Dinks.",
  },
];

// Facility highlights removed as part of simplifying homepage

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="space-y-16">
        {/* Removed 'Why join' teaser cards to streamline page focus */}

        <div className="relative space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-5 bg-[url('/dinks-logo-circle.webp')] bg-center bg-no-repeat bg-size-[460px]"
          />
          <h2 className="text-2xl font-semibold text-slate-900">
            Membership tiers
            <span className="ml-2 align-middle text-xs font-semibold tracking-wide text-slate-500">
              Join through CourtReserve
            </span>
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Choose what fits. Upgrade anytime. Signup happens inside
            CourtReserve.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {membershipPreview.map((tier) => (
              <Card
                key={tier.name}
                className={`transition hover:border-slate-400 hover:shadow-md ${
                  tier.name === "Gold Membership" ? "bg-slate-50" : ""
                }`}
              >
                <CardContent className="pt-6">
                  {tier.name === "Gold Membership" ? (
                    <span className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">
                      Most popular
                    </span>
                  ) : null}
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                    {tier.price}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-900">
                    {tier.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {tier.description}
                  </p>
                  <Link
                    href="/join"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                  >
                    Join on CourtReserve →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Facility highlights removed */}

        <FeaturedSponsors />

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold">Partner with Dinks</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Spotlight your brand inside Des Moines&apos; largest dedicated
              indoor pickleball facility. From banners to complete court
              sponsorships, we build packages that keep you in front of
              thousands of players every month.
            </p>
            <Link
              href="/sponsorship"
              className="mt-4 inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900"
            >
              View sponsor packages →
            </Link>
          </CardContent>
        </Card>

        {/* Visit section removed: address now provided in global footer */}

        <Card>
          <CardContent className="flex flex-col items-center gap-4 py-12 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <h2 className="text-2xl font-semibold">Ready to join?</h2>
              <p className="mt-1 text-sm text-slate-600">
                Pick a tier and start playing today.
              </p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/join">View memberships</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <NewsletterCard />
      </section>
    </>
  );
}

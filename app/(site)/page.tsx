import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { Button } from "@/components/ui/button";
import { FACILITY, INSTRUCTION, DESTINATIONS } from "@/data/facts";
import { membershipsData } from "@/data/memberships";
import { PackageCard } from "@/components/package-card";

const membershipDisplayTiers = membershipsData.tiers;

// Facility highlights removed as part of simplifying homepage

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="space-y-16">
        {/* Why Dinks section */}
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
            Why Dinks?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Iowa&apos;s Largest Indoor Facility
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {FACILITY.courts} professional courts across{" "}
                  {FACILITY.sqFtApprox.toLocaleString()} sq ft with outdoor
                  surface, permanent nets, and warm-up area. Open 6am–midnight
                  daily.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Serious Competition & Community
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Competitive leagues and tournaments, clinics for all skill
                  levels—where Des Moines&apos; strongest players train
                  year-round.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-slate-900">
                  Instruction & Inclusive Play
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Professional coaches, beginner clinics to advanced training,
                  open play sessions—whether you&apos;re brand new or chasing
                  nationals, you have a home here.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="relative space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-5 bg-[url('/dinks-logo-circle.webp')] bg-center bg-no-repeat bg-size-[460px]"
          />
          <h2 className="text-2xl font-semibold text-slate-900">
            Membership packages
          </h2>
          <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-white/60 p-4 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
            <span>All memberships include:</span>
            {membershipsData.allIncluded.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {membershipDisplayTiers.map((tier) => (
              <PackageCard
                key={tier.name}
                tier={{
                  name: tier.name,
                  price: tier.price,
                  description: tier.description,
                  keyDifferences: tier.keyDifferences,
                  ctaHref: "/join/how-to",
                  ctaLabel: "Select this membership",
                }}
                variant="membership"
              />
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
            <p className="mt-2 text-xs font-semibold text-slate-500">
              Sponsorship packages include VIP memberships and on-site branding.
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

        {/* Instruction teaser */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold">Lessons & Clinics</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Private and group instruction plus youth training with PPR
                professionals David & Bailey.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Email {INSTRUCTION.contactEmail} for scheduling.
              </p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/instruction">View instruction details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold">Pickleball Getaways</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Join fellow Dinks players on destination trips—past trips
                include Riviera Maya. Follow our Facebook group for upcoming
                adventures.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Group: {DESTINATIONS.facebookGroup}
              </p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/destinations">Learn more</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <NewsletterCard />
      </section>
    </>
  );
}

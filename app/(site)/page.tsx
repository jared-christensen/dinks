import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { Button } from "@/components/ui/button";
import { INSTRUCTION, DESTINATIONS } from "@/data/facts";
import { membershipsData } from "@/data/memberships";
import { PackageCard } from "@/components/package-card";

const membershipDisplayTiers = membershipsData.tiers;

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="space-y-12">
        {/* About Dinks */}
        <div className="space-y-8">
          <header className="space-y-4 text-center">
            <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Year-Round Indoor Pickleball in Des Moines
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-7 text-slate-600">
              Dinks Pickleball is Des Moines&apos; largest dedicated pickleball
              facility with 13 professional indoor courts. We&apos;re a
              family-owned, community-driven club that exists to give players a
              reliable indoor home for year-round play, instruction, leagues,
              tournaments, and connection.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7">
                Create a welcoming, competitive, and inclusive pickleball
                experience. Whether you are brand new to the sport or chasing
                the next tournament, we provide instruction, community, and
                space to play together.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>The Facility</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7">
                13 professional courts with outdoor court surface, permanent
                nets, and netted separations between courts for uninterrupted
                play plus warm-up space. Open 6am to midnight, 7 days a week at
                Merle Hay Mall.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We Offer</CardTitle>
              </CardHeader>
              <CardContent className="text-base leading-7">
                Professional instruction, competitive leagues and tournaments,
                clinics for all skill levels, open play sessions, and a
                welcoming community space for players to connect.
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="pt-6 text-base leading-7">
              Everything about the club—from daily programming to special
              events—is shaped by the people who show up and make the courts
              feel like home. Dinks gives players a place to rally with friends,
              meet new partners, and keep learning.
            </CardContent>
          </Card>
        </div>

        <div className="relative space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-5 bg-[url('/dinks-logo-circle.webp')] bg-center bg-no-repeat bg-size-[460px]"
          />
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Memberships
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              Membership packages
            </h2>
          </div>
          <ul
            className="flex flex-wrap items-center gap-3 rounded-lg border bg-white/60 p-4 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
            aria-label="All membership benefits"
          >
            <li className="pr-3 text-slate-500">All memberships include:</li>
            {membershipsData.allIncluded.map((item, index) => {
              const simplified = item
                .replace(
                  /Ball machine rental \(\$10 per session\)/i,
                  "Ball machine access"
                )
                .replace(
                  /Guest access \(each guest \$10 per visit\)/i,
                  "Guest access"
                );
              return (
                <li
                  key={index}
                  className="flex items-center gap-1 before:text-slate-300 before:content-['•']"
                >
                  {simplified}
                </li>
              );
            })}
          </ul>
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

        <div className="rounded-xl bg-slate-50 p-4 shadow-sm">
          <Card className="border-0 shadow-none">
            <CardContent className="pt-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                For Businesses
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                Partner with Dinks
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Spotlight your brand inside Des Moines&apos; largest dedicated
                indoor pickleball facility. From banners to complete court
                sponsorships, we build packages that keep you in front of
                thousands of players every month.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Sponsorship packages include VIP memberships and on-site
                branding.
              </p>
              <Link
                href="/sponsorship"
                className="mt-4 inline-flex items-center text-sm font-semibold text-slate-700 transition hover:text-slate-900"
              >
                View Sponsorship Packages →
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Visit section removed: address now provided in global footer */}

        {/* Instruction teaser */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Instruction
              </p>
              <h2 className="mt-1 text-2xl font-semibold">Lessons & Clinics</h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Private and group instruction plus youth training with PPR
                professionals David & Bailey.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Email {INSTRUCTION.contactEmail} for scheduling.
              </p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/instruction">View details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Trips
              </p>
              <h2 className="mt-1 text-2xl font-semibold">
                Pickleball Getaways
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Join fellow Dinks players on destination trips—past trips
                include Riviera Maya. Follow our Facebook group for upcoming
                adventures.
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Group: {DESTINATIONS.facebookGroup}
              </p>
              <Button asChild className="mt-4" variant="outline">
                <Link href="/destinations">View details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <NewsletterCard />
      </section>
    </>
  );
}

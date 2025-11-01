import Link from "next/link";
import Image from "next/image";
import { KeyRound, CalendarDays, Users2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";

const membershipPreview = [
  {
    name: "Basic Membership",
    price: "$60/year",
    description:
      "5-day booking window, personal door code, perfect for casual play.",
  },
  {
    name: "Gold Membership",
    price: "$125/year",
    description:
      "14-day bookings plus early access to leagues and special events.",
  },
  {
    name: "VIP Membership",
    price: "$195/year",
    description:
      "6-month booking window and priority access to everything happening at Dinks.",
  },
];

const facilityHighlights = [
  {
    title: "Year-round courts",
    description:
      "Play from 6am–midnight on climate-controlled, resurfaced courts—no weather worries.",
  },
  {
    title: "Programming for everyone",
    description:
      "Intro clinics, ladders, tournaments, and social play keep every skill level engaged.",
  },
  {
    title: "Family-owned community hub",
    description:
      "Built by local families who wanted a true home for Des Moines pickleball.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="space-y-16">
        <Card className="relative border-slate-300 bg-slate-50">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-5 [background-image:url('/dinks-logo-circle.webp')] [background-position:center] [background-repeat:no-repeat] [background-size:460px]"
          />
          <CardHeader>
            <CardTitle className="text-2xl">What you get</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <KeyRound className="h-5 w-5 text-slate-700" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Access anytime
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Personal door code. Open daily 6 am–midnight.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-slate-700" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Book ahead
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Reserve courts in CourtReserve. Up to 6 months on VIP.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2">
                    <Users2 className="h-5 w-5 text-slate-700" />
                    <h3 className="text-lg font-semibold text-slate-900">
                      Member programming
                    </h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Leagues, socials, and tournaments with early access perks.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <div className="relative space-y-6">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 opacity-5 [background-image:url('/dinks-logo-circle.webp')] [background-position:center] [background-repeat:no-repeat] [background-size:460px]"
          />
          <h2 className="text-2xl font-semibold text-slate-900">
            Membership snapshot
          </h2>
          <p className="text-sm leading-6 text-slate-600">
            Pick a tier. Activate once. Start playing.
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
                    Compare memberships →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-slate-50">
          <CardContent className="pt-6">
            <div className="grid gap-6 md:grid-cols-3">
              {facilityHighlights.map((highlight) => (
                <div key={highlight.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="text-sm leading-6 text-slate-600">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-slate-900">
            Our partners
          </h2>
          <Card className="filter grayscale hover:grayscale-0">
            <CardContent className="pt-6">
              <div className="grid items-center gap-6 md:grid-cols-5">
                {[
                  "/images/sponsors/aetna.png",
                  "/images/sponsors/et-capital.png",
                  "/images/sponsors/rsw.png",
                  "/images/sponsors/evfas.png",
                  "/images/sponsors/fellows-blake.png",
                ].map((src) => (
                  <div key={src} className="flex items-center justify-center">
                    <Image
                      src={src}
                      alt="Sponsor logo"
                      width={140}
                      height={56}
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-slate-900 text-slate-50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold">Partner with Dinks</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-200">
              Spotlight your brand inside Des Moines&apos; largest dedicated
              indoor pickleball facility. From banners to complete court
              sponsorships, we build packages that keep you in front of
              thousands of players every month.
            </p>
            <Link
              href="/sponsors"
              className="mt-4 inline-flex items-center text-sm font-semibold text-slate-300 transition hover:text-slate-100"
            >
              View sponsors →
            </Link>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">Visit us</h2>
            <p className="text-sm leading-6 text-slate-600">
              Find us on the north end of Merle Hay Mall, next to the food court
              and Kids Empire.
            </p>
            <ul className="space-y-1 text-sm leading-6 text-slate-600">
              <li>3800 Merle Hay Rd Suite 1000, Des Moines, IA 50310</li>
              <li>Open daily 6 am – midnight</li>
              <li>
                <Link
                  href="/contact"
                  className="font-semibold text-slate-700 underline-offset-4 hover:underline"
                >
                  info@dinkspickleballdsm.com
                </Link>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button asChild variant="outline">
                <Link
                  href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="pt-6 text-sm text-slate-600">
              Prefer maps?{" "}
              <Link
                href="https://maps.google.com/?q=Dinks+Pickleball+Des+Moines"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-700 underline-offset-4 hover:underline"
              >
                Open in Google Maps
              </Link>
              .
            </CardContent>
          </Card>
        </div>

        <NewsletterCard />
      </section>
    </>
  );
}

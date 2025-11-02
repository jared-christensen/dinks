import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sponsorTiers = [
  {
    name: "Dinks Gold Sponsor",
    price: "$1,000/yr",
    keyDifferences: [
      "Banner hung for 1 year",
      "Logo on Dinks website for 1 year",
    ],
    included: ["Includes 1 VIP annual membership"],
  },
  {
    name: "Premier Entry Sponsor",
    price: "$2,500/yr",
    keyDifferences: [
      "Premier 4'x30' advertisement space near entrance and courts",
      "Logo on Dinks website for 1 year",
      "Mesh windscreen printing is sponsor responsibility",
    ],
    included: ["Includes 1 VIP annual membership"],
  },
  {
    name: '"The Big Dill" Court Sponsor (Platinum)',
    price: "$5,000/yr",
    keyDifferences: [
      "Court naming rights (shown during reservations)",
      "On-court branding opportunities",
      "Banner hung for 1 year",
      "Logo on Dinks website for 1 year",
    ],
    included: ["Includes 2 VIP annual memberships"],
  },
  {
    name: '"The Bob Barker" — Let\'s Make a Dill',
    price: "Custom",
    keyDifferences: [
      "Open partnership ideas (title tournament sponsor, bags/boards sponsor, gear sponsor, etc.)",
    ],
    included: ["Work with us to design a custom package"],
  },
];

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {sponsorTiers.map((tier) => (
            <Card key={tier.name}>
              <CardHeader>
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                <CardDescription className="text-2xl font-bold text-slate-700">
                  {tier.price}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <div className="space-y-4">
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      What&apos;s Different
                    </p>
                    <ul className="space-y-2">
                      {tier.keyDifferences.map((diff) => (
                        <li
                          key={diff}
                          className="flex items-start gap-2 text-sm leading-6"
                        >
                          <span className="text-slate-700">●</span>
                          <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      Included
                    </p>
                    <ul className="space-y-2">
                      {tier.included.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <span className="text-slate-400">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <Button asChild className="w-full">
                    <Link href="/contact">Contact Us About Sponsorship</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Multi-year note */}
      <Card>
        <CardHeader>
          <CardTitle>Multi-Year Sponsorships Available</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-7">
            Interested in a longer-term partnership? Ask about our multi-year
            sponsorship discounts and benefits. We&apos;re also open to creating
            custom packages that fit your business goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Discuss Sponsorship</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">View Current Sponsors</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}

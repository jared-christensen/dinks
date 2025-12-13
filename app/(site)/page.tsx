import Link from "next/link";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { MembershipSection } from "@/components/membership-section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courtRatesData } from "@/data/court-rates";
import { HomeHero } from "@/components/home-hero";

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="mt-16 space-y-24">
        <MembershipSection />

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Court Rates</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {courtRatesData.rates.map((rate) => (
              <div
                key={rate.name}
                className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-center"
              >
                <div className="text-sm font-semibold text-slate-900">
                  {rate.name}
                </div>
                <div className="mt-1 text-lg font-bold text-slate-900">
                  ${rate.ratePerHour}/hour
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  {rate.timeRange}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Instruction & Destinations */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">
                Lessons & Clinics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-600">
                Private and group instruction plus youth training with PPR
                professionals David & Bailey.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/lessons">View details</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-slate-900">
                Pickleball Destinations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-600">
                Travel to incredible destinations like Sonoma, Budapest, and
                Riviera Maya with fellow pickleball enthusiasts.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href="/destinations">View details</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <FeaturedSponsors />
      </section>
    </>
  );
}

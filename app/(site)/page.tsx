import Link from "next/link";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { MembershipSection } from "@/components/membership-section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourtRates } from "@/components/court-rates";

export default function Home() {
  return (
    <>
      {/* <HomeHero /> */}
      <section className="space-y-24">
        <MembershipSection />

        <CourtRates />

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

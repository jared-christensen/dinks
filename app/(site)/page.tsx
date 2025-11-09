import Link from "next/link";
import { NewsletterCard } from "@/components/newsletter-card";
import { HomeHero } from "@/components/home-hero";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { MembershipSection } from "@/components/membership-section";
import { CourtRates } from "@/components/court-rates";

export default function Home() {
  return (
    <>
      {/* <HomeHero /> */}
      <section className="space-y-24">
        <MembershipSection />

        <CourtRates />

        {/* Instruction teaser */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900">
              Lessons & Clinics
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Private and group instruction plus youth training with PPR
              professionals David & Bailey.
            </p>
            <Link
              href="/instruction"
              className="inline-flex items-center text-base font-semibold text-slate-900 hover:text-slate-700 transition"
            >
              View details
            </Link>
          </div>

          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-slate-900">
              Pickleball Destinations
            </h2>
            <p className="text-base leading-relaxed text-slate-600">
              Travel to incredible destinations like Sonoma, Budapest, and
              Riviera Maya with fellow pickleball enthusiasts.
            </p>
            <Link
              href="/destinations"
              className="inline-flex items-center text-base font-semibold text-slate-900 hover:text-slate-700 transition"
            >
              View details
            </Link>
          </div>
        </div>

        <NewsletterCard />

        <FeaturedSponsors />
      </section>
    </>
  );
}

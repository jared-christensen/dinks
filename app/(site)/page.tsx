import Link from "next/link";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { MembershipSection } from "@/components/membership-section";
import { courtRatesData } from "@/data/court-rates";
import { HomeHero } from "@/components/home-hero";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <HomeHero />

      {/* Main content */}
      <section className="mt-16 space-y-24">
        <MembershipSection />

        {/* Court Rates */}
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-500">
              Rates
            </p>
            <h2 className="text-3xl font-bold text-white">Court Rates</h2>
            <p className="text-base text-white/80">
              Members can reserve courts by the hour at these rates.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {courtRatesData.rates.map((rate) => (
              <div
                key={rate.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {rate.name}
                </div>
                <div className="mt-2 text-4xl font-black tracking-tight text-white">
                  ${rate.ratePerHour}
                  <span className="text-lg font-semibold text-white/60">/hr</span>
                </div>
                <div className="mt-2 text-sm text-white/60">
                  {rate.timeRange}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed section - Programs */}
      <section className="relative left-1/2 right-1/2 mt-24 -ml-[50vw] w-screen bg-brand-blue-500 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-brand-yellow-500">
            Level Up
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Programs and experiences
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Lessons Card */}
            <Link
              href="/lessons"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Lessons & Clinics
                  </h3>
                  <p className="max-w-sm text-white/80">
                    Private and group instruction with PPR-certified
                    professionals David & Bailey Lanning.
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow-500 text-black transition group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>

            {/* Destinations Card */}
            <Link
              href="/destinations"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-white">
                    Dinks Destinations
                  </h3>
                  <p className="max-w-sm text-white/80">
                    Travel with fellow players to Sonoma, Budapest, Riviera
                    Maya, and beyond.
                  </p>
                </div>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow-500 text-black transition group-hover:scale-110">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <FeaturedSponsors />
    </>
  );
}

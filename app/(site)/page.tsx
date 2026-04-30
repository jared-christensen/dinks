import Link from "next/link";
import { FeaturedSponsors } from "@/components/featured-sponsors";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { MembershipSection } from "@/components/membership-section";
import { HomeHero } from "@/components/home-hero";
import { ArrowRight } from "lucide-react";
import { COURT_RATES } from "@/constants/court-rates";
import { getUpcomingEventsSoon } from "@/constants/events";

export const dynamic = "force-dynamic";

export default function Home() {
  const soonEvents = getUpcomingEventsSoon(60);
  const nextEvent = soonEvents[0] ?? null;
  const gridEvents = soonEvents.slice(1);
  return (
    <>
      <HomeHero />

      {/* Upcoming Events */}
      {soonEvents.length > 0 && (
        <section className="mt-10 mb-8 space-y-6">
          <h2 className="text-3xl font-bold text-white">Upcoming Events</h2>

          {/* Next event callout */}
          {nextEvent && (
            <Link
              href={nextEvent.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-yellow-500">
                    {nextEvent.type === "tournament"
                      ? "Tournament"
                      : nextEvent.type === "league"
                        ? "League"
                        : "Event"}
                  </p>
                  <h3 className="mt-1 text-xl font-bold text-white">
                    {nextEvent.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-white/60">
                    {nextEvent.organizer}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {nextEvent.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-yellow-500 group-hover:underline">
                    {nextEvent.ctaLabel} →
                  </p>
                </div>
                <div className="shrink-0 rounded-lg bg-white/10 px-4 py-3 text-center">
                  <p className="text-xs font-semibold uppercase text-white/50">
                    {nextEvent.dateLabel}
                  </p>
                  <p className="text-3xl font-bold leading-tight text-white">
                    {nextEvent.dateValue}
                  </p>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining soon events grid */}
          {gridEvents.length > 0 && (
            <div
              className={`grid gap-3 ${
                gridEvents.length === 1
                  ? "max-w-sm"
                  : gridEvents.length === 2
                    ? "md:grid-cols-2"
                    : "md:grid-cols-3"
              }`}
            >
              {gridEvents.map((event) => (
                <Link
                  key={event.title + event.date}
                  href={event.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-md bg-white/10 px-2 py-1 text-center">
                      <p className="text-[10px] font-semibold uppercase text-white/50">
                        {event.dateLabel}
                      </p>
                      <p className="text-lg font-bold leading-tight text-white">
                        {event.dateValue}
                      </p>
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">{event.title}</p>
                      <p className="mt-0.5 text-xs text-white/50">
                        {event.organizer}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/events"
            className="inline-flex items-center gap-1 text-sm text-brand-yellow-500 hover:text-brand-yellow-400"
          >
            View all events
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </section>
      )}

      {/* Main content */}
      <section className="mt-16 space-y-24">
        <HowItWorksSection />

        <MembershipSection />

        {/* Court Rates */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Court Rates</h2>
            <p className="text-base text-white/80">
              Members can reserve courts by the hour at these rates.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {COURT_RATES.map((rate) => (
              <div
                key={rate.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-white/60">
                  {rate.name}
                </div>
                <div className="mt-2 text-4xl font-black tracking-tight text-white">
                  ${rate.ratePerHour}
                  <span className="text-lg font-semibold text-white/60">
                    /hr
                  </span>
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
      <section className="relative left-1/2 right-1/2 mt-4 -ml-[50vw] w-screen bg-brand-blue-500 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Programs & Instruction
          </h2>

          <div className="mt-10 max-w-xl">
            <Link
              href="/lessons"
              className="group block rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
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
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <FeaturedSponsors />
    </>
  );
}

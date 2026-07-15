"use client";

import Link from "next/link";
import posthog from "posthog-js";
import { Button } from "@/components/ui/button";
import { getActiveEvents } from "@/constants/events";

export default function Events() {
  const activeEvents = getActiveEvents();
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Events</h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          From casual open play to competitive leagues and tournaments,
          there&apos;s always a way to get on the court at Dinks.
        </p>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-white/50">
          Upcoming Events
        </h2>

        {activeEvents.length > 0 ? (
          activeEvents.map((event) => (
            <div
              key={event.title + event.date}
              className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-yellow-500">
                  {event.type === "tournament"
                    ? "Tournament"
                    : event.type === "league"
                      ? "League"
                      : "Event"}
                </p>
                <h3 className="mt-1 text-lg font-bold text-white">
                  {event.title}
                </h3>
                <p className="mt-0.5 text-sm text-white/60">
                  {event.organizer}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  {event.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={event.ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => posthog.capture("event_register_clicked", { event_title: event.title, event_type: event.type })}
                    >
                      {event.ctaLabel}
                    </Link>
                  </Button>
                  {event.secondaryCtaUrl && event.secondaryCtaLabel && (
                    <Button asChild variant="ghost" size="sm">
                      <Link
                        href={event.secondaryCtaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => posthog.capture("event_register_clicked", { event_title: event.title, event_type: event.type, cta: "secondary" })}
                      >
                        {event.secondaryCtaLabel}
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              <div className="shrink-0 rounded-lg bg-white/10 px-3 py-2 text-center">
                <p className="text-xs font-semibold uppercase text-white/50">
                  {event.dateLabel}
                </p>
                <p className="text-2xl font-bold leading-tight text-white">
                  {event.dateValue}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-sm text-white/60">
              No upcoming events right now. Check back soon!
            </p>
          </div>
        )}
      </div>

      {/* Event Types */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Open Play */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-semibold text-white">Open Play</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Drop-in sessions where you get matched with other players and rotate
            through games. No partner needed.
          </p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://app.courtreserve.com/Online/Events/List/10812"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture("open_play_schedule_clicked")}
              >
                View on CourtReserve
              </Link>
            </Button>
          </div>
        </div>

        {/* Leagues */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-semibold text-white">Leagues</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Seasonal league play with teams and weekly matches. League signups
            are managed through Team Sideline.
          </p>
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <Link
                href="https://teamsideline.com/sites/DINKSpickleball/current-programs"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => posthog.capture("leagues_signup_clicked")}
              >
                Sign Up on Team Sideline
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

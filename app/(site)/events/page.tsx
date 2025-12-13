import Link from "next/link";
import { Button } from "@/components/ui/button";
import { eventsData } from "@/data/events";
import { NeedHelpCard } from "@/components/need-help-card";

export default function Events() {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900">
          {eventsData.pageTitle}
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          {eventsData.intro}
        </p>
        <Button asChild>
          <Link
            href={eventsData.courtReserveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View events on CourtReserve
          </Link>
        </Button>
      </div>

      {/* Leagues */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Leagues</h2>
        <p className="text-base leading-7 text-slate-600">
          {eventsData.leaguesDescription}
        </p>
        <Button asChild variant="outline">
          <Link
            href={eventsData.leaguesSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign up on Team Sideline
          </Link>
        </Button>
      </div>

      <NeedHelpCard variant="compact" />
    </section>
  );
}

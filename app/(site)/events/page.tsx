import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Events() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Play</h1>
        <p className="max-w-2xl text-base leading-7 text-white/80">
          From casual open play to competitive leagues and DUPR-rated events,
          there&apos;s always a way to get on the court at Dinks.
        </p>
      </div>

      {/* Event Types */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Open Play */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-semibold text-white">Open Play</h2>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Drop-in sessions where you get matched with other players and
            rotate through games. No partner needed. Check CourtReserve for
            upcoming Afternoon and Twilight Open Play sessions.
          </p>
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
              >
                Sign Up on Team Sideline
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* DUPR Events */}
      <div className="overflow-hidden rounded-2xl border-8 border-white/10 bg-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-brand-blue-500">DUPR Events</h2>
          <p className="mt-2 text-sm leading-6 text-brand-blue-500/70">
            Rated events that count toward your official DUPR rating.
            Register on CourtReserve, then we manage brackets and scoring
            through Pickleheads which syncs with your DUPR profile.
          </p>
        </div>
        <div className="border-t border-brand-blue-500/10 bg-brand-blue-500/5 px-6 py-5">
          <p className="text-sm font-medium text-brand-blue-500">
            Before your first DUPR event, you&apos;ll need to:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-brand-blue-500/70">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow-500" />
              <span>Create a <strong className="text-brand-blue-500">DUPR</strong> account and get your rating</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow-500" />
              <span>Create a <strong className="text-brand-blue-500">Pickleheads</strong> account and link it to your DUPR profile</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow-500" />
              <span>Join the{" "}
                <Link
                  href="https://dashboard.dupr.com/dashboard/browse/clubs/4933707109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-yellow-600 underline underline-offset-2 hover:text-brand-yellow-500"
                >
                  Dinks Mafia
                </Link>{" "}
                club on DUPR
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

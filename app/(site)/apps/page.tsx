import Link from "next/link";
import { FaApple, FaGooglePlay, FaGlobe, FaUsers } from "react-icons/fa";

const platforms = [
  {
    name: "CourtReserve",
    description:
      "Your hub for membership, court bookings, and open play registration. This is where you'll manage your Dinks membership and reserve courts.",
    when: "Required for all members",
    links: {
      website: "https://app.courtreserve.com",
      ios: "https://apps.apple.com/us/app/courtreserve/id1392556575",
      android: "https://play.google.com/store/apps/details?id=com.courtreserve",
    },
  },
  {
    name: "VizPin Smart",
    description:
      "Your phone becomes your key. VizPin unlocks the facility doors via Bluetooth so you can access Dinks during open hours.",
    when: "Required for facility access",
    links: {
      ios: "https://apps.apple.com/us/app/vizpin-smart/id946474106",
      android:
        "https://play.google.com/store/apps/details?id=com.eckey.vizpin.dm",
    },
  },
  {
    name: "DUPR",
    description:
      "The universal pickleball rating system. Track your skill level, find players at your level, and participate in rated events.",
    when: "Required for DUPR events",
    links: {
      website: "https://www.dupr.com",
      club: "https://dashboard.dupr.com/dashboard/browse/clubs/4933707109",
      ios: "https://apps.apple.com/us/app/dupr/id1567932355",
      android: "https://play.google.com/store/apps/details?id=gg.dupr",
    },
  },
  {
    name: "Pickleheads",
    description:
      "Tournament management platform we use for DUPR events. Handles player mixing, brackets, and automatically submits scores to DUPR.",
    when: "Required for DUPR events",
    links: {
      website: "https://www.pickleheads.com",
      ios: "https://apps.apple.com/us/app/pickleheads-play-pickleball/id6448714446",
      android: "https://play.google.com/store/apps/details?id=com.pickleheads.mobile",
    },
  },
  {
    name: "Playtime Scheduler",
    description:
      "Find and join open play sessions at Dinks. See who's playing, sign up for games, and get notified about upcoming sessions.",
    when: "Recommended for open play",
    links: {
      website: "https://playtimescheduler.com",
      ios: "https://apps.apple.com/us/app/playtime-scheduler/id6504500852",
      android:
        "https://play.google.com/store/apps/details?id=com.ptsdev.ptsnativeapp",
    },
  },
];

export default function Apps() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-white">Apps</h1>
        <p className="max-w-2xl text-balance text-base leading-7 text-white/80">
          Dinks uses a few different platforms to manage memberships, facility
          access, open play, and events. Here&apos;s what you need to know.
        </p>
      </div>

      {/* Platforms */}
      <div className="space-y-6">
        {platforms.map((platform) => (
          <div
            key={platform.name}
            className="overflow-hidden rounded-2xl border-8 border-white/10 bg-white"
          >
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-brand-blue-500">
                    {platform.name}
                  </h2>
                  <p className="text-sm font-medium text-brand-yellow-600">
                    {platform.when}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-brand-blue-500/70">
                {platform.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {platform.links.website && (
                  <Link
                    href={platform.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/5 px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/10"
                  >
                    <FaGlobe className="h-4 w-4" />
                    Website
                  </Link>
                )}
                {platform.links.club && (
                  <Link
                    href={platform.links.club}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-brand-blue-500/5 px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/10"
                  >
                    <FaUsers className="h-4 w-4" />
                    Join Dinks Mafia Club
                  </Link>
                )}
                {platform.links.ios && (
                  <Link
                    href={platform.links.ios}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-white px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/5"
                  >
                    <FaApple className="h-4 w-4" />
                    App Store
                  </Link>
                )}
                {platform.links.android && (
                  <Link
                    href={platform.links.android}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-blue-500/20 bg-white px-4 py-2 text-sm font-medium text-brand-blue-500 transition hover:border-brand-blue-500/40 hover:bg-brand-blue-500/5"
                  >
                    <FaGooglePlay className="h-4 w-4" />
                    Google Play
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

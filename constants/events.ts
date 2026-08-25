export interface UpcomingEvent {
  title: string;
  organizer: string;
  type: "tournament" | "league" | "event";
  date: string; // YYYY-MM-DD — event is hidden after this date
  dateLabel: string;
  dateValue: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
  secondaryCtaLabel?: string;
  secondaryCtaUrl?: string;
}

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "Silly Pickles Fall League",
    organizer: "Silly Pickles",
    type: "league",
    date: "2026-09-20",
    dateLabel: "Sep",
    dateValue: "20",
    description:
      "Looking for a fun, social pickleball league to meet new players? Silly Pickles has you covered and Fall league sign-up is LIVE! Sign up as an individual; each week you will have different partners at your skill level. Open to non-members—Sundays 3–5 PM, 9/20–11/8. Secure your spot now, this will sell out!",
    ctaLabel: "Register",
    ctaUrl: "https://sillypickles.com/dinks-desmoines",
  },
  {
    title: "Des Moines Team Classic Charity Tournament",
    organizer: "Des Moines Team Classic",
    type: "tournament",
    date: "2026-10-18",
    dateLabel: "Oct",
    dateValue: "17–18",
    description: "Charity tournament.",
    ctaLabel: "Register",
    ctaUrl:
      "https://app.fluidpb.com/tournaments/2026-des-moines-pickleball-team-classic",
  },
  {
    title: "World of Pickleball $2,000 Prize Tournament",
    organizer: "World of Pickleball",
    type: "tournament",
    date: "2026-12-13",
    dateLabel: "Dec",
    dateValue: "11–13",
    description: "$2,000 prize tournament hosted at Dinks.",
    ctaLabel: "Register",
    ctaUrl:
      "https://pickleballtournaments.com/tournaments/world-of-pickleball-des-moines-2-000-2",
  },
];

export function getActiveEvents() {
  const today = new Date().toISOString().split("T")[0];
  return UPCOMING_EVENTS.filter((event) => event.date >= today);
}

export function getUpcomingEventsSoon(days = 60) {
  const today = new Date().toISOString().split("T")[0];
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() + days);
  const cutoffStr = cutoff.toISOString().split("T")[0];
  return UPCOMING_EVENTS.filter(
    (event) => event.date >= today && event.date <= cutoffStr,
  );
}

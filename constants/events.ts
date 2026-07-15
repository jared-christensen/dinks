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
    title: "Dink for Heart",
    organizer: "Iowa Heart Foundation",
    type: "tournament",
    date: "2026-05-02",
    dateLabel: "May",
    dateValue: "2",
    description:
      "Help support this fundraiser to purchase AEDs to be placed near central Iowa pickleball courts.",
    ctaLabel: "Register",
    ctaUrl: "https://birdease.com/33982",
  },
  {
    title: "World of Pickleball $2,000 Prize Tournament",
    organizer: "World of Pickleball",
    type: "tournament",
    date: "2026-05-24",
    dateLabel: "May",
    dateValue: "22–24",
    description: "$2,000 prize tournament hosted at Dinks.",
    ctaLabel: "Register",
    ctaUrl:
      "https://pickleballtournaments.com/tournaments/world-of-pickleball-des-moines-2-000-1",
  },
  {
    title: "Iowa Senior Games",
    organizer: "Iowa Games",
    type: "tournament",
    date: "2026-06-04",
    dateLabel: "Jun",
    dateValue: "3–4",
    description: "Pickleball competition as part of the Iowa Senior Games.",
    ctaLabel: "Register",
    ctaUrl: "https://event.iowagames.org/isg-pickleball/detail",
  },
  {
    title: "Iowa Summer Games",
    organizer: "Iowa Games",
    type: "tournament",
    date: "2026-07-12",
    dateLabel: "Jul",
    dateValue: "11–12",
    description: "First time held at Dinks on dedicated pickleball courts!",
    ctaLabel: "Register",
    ctaUrl: "https://event.iowagames.org/sig-pickleball",
  },
  {
    title: "Iowa Moneyball Pickleball",
    organizer: "Iowa Moneyball Pickleball",
    type: "tournament",
    date: "2026-07-27",
    dateLabel: "Jul",
    dateValue: "27",
    description:
      "A team-format pickleball event at Dinks on Monday, July 27, starting at 5:30 PM. $60/team, capped at 16 teams, with a 4 game guarantee. Pool play followed by a bracket, and all teams make the tournament. Top 3 places paid out. Contact Nathan Blockner at (515) 571-9953 or iowamoneyball@gmail.com to sign up.",
    ctaLabel: "Contact to Register",
    ctaUrl: "mailto:iowamoneyball@gmail.com",
    secondaryCtaLabel: "Follow on Facebook",
    secondaryCtaUrl: "https://www.facebook.com/profile.php?id=61591969192008",
  },
  {
    title: "Paddles for a Purpose: Pickleball Event",
    organizer: "Ronald McDonald House Charities of Central Iowa",
    type: "tournament",
    date: "2026-08-06",
    dateLabel: "Aug",
    dateValue: "6",
    description:
      "The second annual Pickleball Tournament in support of RMHCCI, hosted by their Young Professionals Committee. A day of friendly competition to help Keep Families Close, 4:30–6:30 PM. $100/team (tournament and/or free play). Bring your own equipment!",
    ctaLabel: "Register",
    ctaUrl:
      "https://www.rmhdesmoines.org/events/details?id=2448a3c9-6207-4c15-9f5d-57c9908e4016",
  },
  {
    title: "2026 IOWA Powerball Amateur Pickleball Championships",
    organizer: "Carvana PPA Tour & Pickleball Is Great",
    type: "tournament",
    date: "2026-08-09",
    dateLabel: "Aug",
    dateValue: "7–9",
    description:
      "Iowa's Amateur Pickleball State Championship Series hosted at Dinks. Skill levels 3.0–5.0 across all age groups. Gold medalists earn a free spot at the 2026 World Championships in Dallas. Early registration is $45 (price increases Jun 1).",
    ctaLabel: "Register Now",
    ctaUrl:
      "https://pickleballtournaments.com/tournaments/2026-iowa-powerball-amateur-pickleball-championships-powered-by-carvana-ppa-tour-and-pig",
  },
  {
    title: "World of Pickleball $2,000 Prize Tournament",
    organizer: "World of Pickleball",
    type: "tournament",
    date: "2026-09-06",
    dateLabel: "Sep",
    dateValue: "4–6",
    description: "$2,000 prize tournament hosted at Dinks.",
    ctaLabel: "Register",
    ctaUrl:
      "https://pickleballtournaments.com/tournaments/world-of-pickleball-des-moines-2-000-2",
  },
  {
    title: "Des Moines Team Classic Charity Tournament",
    organizer: "Des Moines Team Classic",
    type: "tournament",
    date: "2026-10-18",
    dateLabel: "Oct",
    dateValue: "17–18",
    description: "Charity tournament. Registration details coming in May.",
    ctaLabel: "Details Coming Soon",
    ctaUrl: "/events",
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

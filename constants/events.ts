export interface UpcomingEvent {
  title: string;
  organizer: string;
  type: "tournament" | "league";
  date: string; // YYYY-MM-DD — event is hidden after this date
  dateLabel: string;
  dateValue: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
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
    ctaUrl: "https://event.iowagames.org/sig-pickleball/detail",
  },
  {
    title: "PPA Iowa Amateur Challenge",
    organizer: "PPA Tour",
    type: "tournament",
    date: "2026-08-09",
    dateLabel: "Aug",
    dateValue: "7–9",
    description: "PPA amateur challenge event. Registration coming soon.",
    ctaLabel: "Coming Soon",
    ctaUrl: "https://pickleballtournaments.com",
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

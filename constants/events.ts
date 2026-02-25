export interface UpcomingEvent {
  title: string;
  organizer: string;
  type: "tournament" | "league";
  dateLabel: string;
  dateValue: string;
  description: string;
  ctaLabel: string;
  ctaUrl: string;
}

export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    title: "Pickle with a Purpose",
    organizer: "Foster Group & World of Pickleball",
    type: "tournament",
    dateLabel: "Feb",
    dateValue: "28",
    description:
      "A fun-filled day of dinks and drives for a great cause — Foster Group donates $5 per player to Special Olympics Iowa.",
    ctaLabel: "Learn More",
    ctaUrl:
      "https://pickleballtournaments.com/tournaments/D56C415A-B521-42D0-B5A9-D1B617918F97",
  },
  {
    title: "Silly Pickles Ladder League",
    organizer: "Silly Pickles",
    type: "league",
    dateLabel: "Mar",
    dateValue: "1",
    description:
      "An 8-week Sunday ladder league with rotating partners and skill-based matchups. All levels welcome.",
    ctaLabel: "Learn More",
    ctaUrl:
      "https://sillypickles.com/collections/spring-pickleball-leagues-2026/products/des-moines-ia-pickleball-ladder-league-at-dinks-pickleball-spring-2026",
  },
];

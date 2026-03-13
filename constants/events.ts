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

export const UPCOMING_EVENTS: UpcomingEvent[] = [];

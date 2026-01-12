export interface CourtRate {
  name: string;
  ratePerHour: number;
  timeRange: string;
}

export const COURT_RATES: CourtRate[] = [
  {
    name: "Day",
    ratePerHour: 16,
    timeRange: "Mon–Fri · 6am–4pm",
  },
  {
    name: "Evening",
    ratePerHour: 22,
    timeRange: "Mon–Fri · 4pm–12am",
  },
  {
    name: "Weekend",
    ratePerHour: 28,
    timeRange: "Sat & Sun",
  },
];

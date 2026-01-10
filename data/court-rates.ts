// Court rental rates

export interface CourtRate {
  name: string;
  ratePerHour: number;
  timeRange: string;
}

export interface CourtRatesData {
  rates: CourtRate[];
}

export const courtRatesData: CourtRatesData = {
  rates: [
    {
      name: "Day",
      ratePerHour: 16,
      timeRange: "Mon–Fri · 6am–4pm",
    },
    {
      name: "Evening",
      ratePerHour: 22,
      timeRange: "Mon–Fri · 4pm–midnight",
    },
    {
      name: "Weekend",
      ratePerHour: 28,
      timeRange: "Sat & Sun",
    },
  ],
};

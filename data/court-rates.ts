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
      timeRange: "Monday-Friday: 6am-4pm",
    },
    {
      name: "Evening",
      ratePerHour: 22,
      timeRange: "Monday-Friday: 4pm-12am",
    },
    {
      name: "Weekend",
      ratePerHour: 28,
      timeRange: "Saturday & Sunday",
    },
  ],
};

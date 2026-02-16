export interface MembershipTier {
  name: string;
  price: string;
  description: string;
  keyDifferences: string[];
}

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    name: "Basic",
    price: "$60/Year + $25 activation",
    description:
      "For players who want flexible access to courts and intro programming.",
    keyDifferences: [
      "Reserve 5 days in advance",
      "Up to 4 courts per day",
      "48-hour cancellation policy",
      "50% credit back on cancellations",
    ],
  },
  {
    name: "Gold",
    price: "$125/Year + $25 activation",
    description:
      "Adds a longer reservation window and early access to tournaments and special events.",
    keyDifferences: [
      "Reserve 14 days in advance",
      "Up to 8 courts per day",
      "24-hour cancellation policy",
      "50% credit back on cancellations",
      "Early access to tournaments and events",
    ],
  },
  {
    name: "VIP",
    price: "$195/Year + $10 activation",
    description:
      "For frequent players who want the longest reservation window and priority access.",
    keyDifferences: [
      "Reserve 6 months in advance",
      "Up to 8 courts per day",
      "8-hour cancellation policy",
      "50% credit back on cancellations",
      "Early access to tournaments and events",
    ],
  },
];

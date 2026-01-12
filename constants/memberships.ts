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
      "Book 5 days in advance",
      "Up to 4 courts per day",
      "48-hour cancellation policy",
    ],
  },
  {
    name: "Gold",
    price: "$125/Year + $25 activation",
    description:
      "Adds a longer booking window and early access to tournaments and special events.",
    keyDifferences: [
      "Book 14 days in advance",
      "Up to 8 courts per day",
      "24-hour cancellation policy",
      "Early access to tournaments and events",
    ],
  },
  {
    name: "VIP",
    price: "$195/Year + $10 activation",
    description:
      "For frequent players who want the longest booking window and priority access.",
    keyDifferences: [
      "Book 6 months in advance",
      "Up to 8 courts per day",
      "8-hour cancellation policy",
      "Early access to tournaments and events",
    ],
  },
];

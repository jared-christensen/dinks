// Typed membership data migrated from memberships.json
// Shared interfaces can later move to a separate types file if needed.

export interface MembershipTier {
  name: string;
  price: string; // Display-formatted price including activation
  description: string;
  keyDifferences: string[]; // Bulleted differentiators between tiers
  popular?: boolean; // Highlights this tier as the recommended option
}

export interface MembershipsData {
  allIncluded: string[]; // Universal benefits across all tiers
  guestPolicy: string; // Guest policy information
  tiers: MembershipTier[];
}

export const membershipsData: MembershipsData = {
  allIncluded: [
    "Personal door code",
    "Court booking",
    "Ball machine rental",
  ],
  guestPolicy:
    "Members may bring guests to their reservation. Guest fee is $10 per person.",
  tiers: [
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
        "Adds a longer booking window and early access to tournaments & special events.",
      keyDifferences: [
        "Book 14 days in advance",
        "Up to 8 courts per day",
        "24-hour cancellation policy",
        "Early access to tournaments & events",
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
        "Early access to tournaments & events",
      ],
    },
  ],
};

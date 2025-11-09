// Typed sponsorship data migrated from sponsorships.json

export interface SponsorshipTier {
  name: string;
  price: string; // Display-formatted price or 'Custom'
  description?: string; // Optional description
  whatsDifferent: string[]; // Distinguishing elements of this tier
  included: string[]; // Benefits included at this tier
}

export interface SponsorshipsData {
  tiers: SponsorshipTier[];
}

export const sponsorshipsData: SponsorshipsData = {
  tiers: [
    {
      name: "Gold",
      price: "$1,000/Year",
      description: "Includes 1 VIP membership plus banner and website branding.",
      whatsDifferent: [
        "Banner at facility",
        "Logo on Dinks website",
      ],
      included: [],
    },
    {
      name: "Premier",
      price: "$2,500/Year",
      description: "Includes 1 VIP membership plus premier advertising space.",
      whatsDifferent: [
        "Premier 4'x30' advertisement space near entrance and courts",
        "Logo on Dinks website",
        "Mesh windscreen printing is sponsor responsibility",
      ],
      included: [],
    },
    {
      name: "Platinum",
      price: "$5,000/Year",
      description: "Includes 2 VIP memberships plus court naming and premium branding.",
      whatsDifferent: [
        "Court naming rights (shown during reservations)",
        "On-court branding opportunities",
        "Banner at facility",
        "Logo on Dinks website",
      ],
      included: [],
    },
  ],
};

export type { SponsorshipTier as Tier };

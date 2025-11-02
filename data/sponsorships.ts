// Typed sponsorship data migrated from sponsorships.json

export interface SponsorshipTier {
  name: string;
  price: string; // Display-formatted price or 'Custom'
  whatsDifferent: string[]; // Distinguishing elements of this tier
  included: string[]; // Benefits included at this tier
}

export interface SponsorshipsData {
  tiers: SponsorshipTier[];
}

export const sponsorshipsData: SponsorshipsData = {
  tiers: [
    {
      name: "Gold Sponsorship",
      price: "$1,000/yr",
      whatsDifferent: [
        "Banner hung for 1 year",
        "Logo on Dinks website for 1 year",
      ],
      included: ["Includes 1 VIP annual membership"],
    },
    {
      name: "Premier Sponsorship",
      price: "$2,500/yr",
      whatsDifferent: [
        "Premier 4'x30' advertisement space near entrance and courts",
        "Logo on Dinks website for 1 year",
        "Mesh windscreen printing is sponsor responsibility",
      ],
      included: ["Includes 1 VIP annual membership"],
    },
    {
      name: "Platinum Sponsorship",
      price: "$5,000/yr",
      whatsDifferent: [
        "Court naming rights (shown during reservations)",
        "On-court branding opportunities",
        "Banner hung for 1 year",
        "Logo on Dinks website for 1 year",
      ],
      included: ["Includes 2 VIP annual memberships"],
    },
  ],
};

export type { SponsorshipTier as Tier };

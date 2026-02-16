export interface SponsorshipTier {
  name: string;
  price: string;
  description: string;
  whatsDifferent: string[];
  enabled?: boolean;
}

export const SPONSORSHIP_TIERS: SponsorshipTier[] = [
  {
    name: "Gold",
    price: "$1,000/Year",
    description: "Includes 1 VIP membership plus banner and website branding.",
    whatsDifferent: ["Banner at facility", "Logo on Dinks website"],
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
    enabled: false,
  },
  {
    name: "Platinum",
    price: "$5,000/Year",
    description:
      "Includes 2 VIP memberships plus court naming and premium branding.",
    whatsDifferent: [
      "Court naming rights (shown during reservations)",
      "On-court branding opportunities",
      "Banner at facility",
      "Logo on Dinks website",
    ],
  },
];

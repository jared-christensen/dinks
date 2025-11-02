// Central shared type definitions for data modules.
// Having a single file makes it easier to evolve structures and add docs.

export interface MembershipTier {
  name: string;
  price: string;
  description: string;
  keyDifferences: string[];
  included: string[];
}

export interface MembershipsData {
  allIncluded: string[];
  tiers: MembershipTier[];
}

export interface SponsorshipTier {
  name: string;
  price: string; // May be 'Custom'
  whatsDifferent: string[];
  included: string[];
}

export interface SponsorshipsData {
  tiers: SponsorshipTier[];
}

// Utility generic for list sections where each item is a string.
export type StringList = string[];

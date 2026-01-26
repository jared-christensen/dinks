export interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  icon?: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: 1,
    title: "Become a member",
    description: "Sign up online to get your membership and door access.",
    href: "/join",
    linkText: "Join",
  },
  {
    number: 2,
    title: "Rent the court by the hour",
    description:
      "Reserve courts through CourtReserve. 2-hour minimum, or grab Court 12 for a quick hour.",
    href: "/schedule",
    linkText: "Reserve a Court",
  },
  {
    number: 3,
    title: "Bring guests for $10 each",
    description:
      "Non-members can join your reservation for a $10 guest fee per person, added at checkout.",
  },
];

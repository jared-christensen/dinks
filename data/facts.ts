// Distilled factual constants derived strictly from `docs/original site content/*`
// Do not edit values here unless original source files are updated.

export const FACILITY = {
  courts: 13,
  indoor: true,
  sqFtApprox: 70000,
  hours: { open: "6am", close: "midnight" },
  location: {
    address: "3800 Merle Hay Rd Suite 1000, Des Moines, IA 50310",
    mallArea: "North end of Merle Hay Mall near food court & Kids Empire",
  },
  amenities: [
    "Warm-up/practice areas",
    "Bags/cornhole",
    "Ping pong",
    "Yard games",
  ],
};

export const MEMBERSHIP_TIERS = [
  {
    id: "basic",
    name: "Basic",
    priceYear: 60,
    activationFee: 25,
    bookingWindowDays: 5,
    courtsPerDay: 4,
    cancellationHours: 48,
    earlyAccess: false,
    includes: ["Door code access", "$10 ball machine rental"],
  },
  {
    id: "gold",
    name: "Gold",
    priceYear: 125,
    activationFee: 25,
    bookingWindowDays: 14,
    courtsPerDay: 8,
    cancellationHours: 24,
    earlyAccess: true,
    includes: ["Door code access", "$10 ball machine rental"],
  },
  {
    id: "vip",
    name: "VIP",
    priceYear: 195,
    activationFee: 10,
    bookingWindowDays: 180, // 6 months
    courtsPerDay: 8,
    cancellationHours: 8,
    earlyAccess: true,
    includes: ["Door code access", "$10 ball machine rental"],
  },
];

export const COURT_RATES = {
  weekday: { timeRange: "Mon–Fri 6am–4pm", ratePerHour: 16 },
  weekdayEvening: { timeRange: "Mon–Fri 4pm–12am", ratePerHour: 22 },
  weekend: { timeRange: "Sat/Sun", ratePerHour: 28 },
};

// OPEN_PLAY intentionally minimal until updated source-of-truth is provided.
export const OPEN_PLAY = {
  status: "Present (details pending updated documentation)",
};

export const GUEST_POLICY = {
  guestFee: 10,
  description: "Members may bring guests; $10 daily guest fee.",
};

export const SPONSORSHIP = {
  gold: {
    priceYear: 1000,
    includes: [
      "1 VIP annual membership",
      "Banner (1 year)",
      "Logo on website (1 year)",
    ],
  },
  premier: {
    priceYear: 2500,
    includes: [
      "1 VIP annual membership",
      "4' x 30' entrance ad space",
      "Logo on website (1 year)",
      "Mesh windscreen printing sponsor responsibility",
    ],
  },
  platinum: {
    priceYear: 5000,
    includes: [
      "2 VIP annual memberships",
      "Court naming rights",
      "On-court branding opportunities",
      "Banner (1 year)",
      "Logo on website (1 year)",
    ],
  },
  custom: {
    priceYear: null,
    label: "The Bob Barker",
    examples: [
      "Title tournament sponsor",
      "Bags board sponsor",
      "Gear sponsor (paddles, balls, etc.)",
    ],
  },
};

export const INSTRUCTION = {
  professionals: ["David", "Bailey"],
  accreditation: "PPR Professionals",
  offerings: [
    "Private 1:1 lessons",
    "Group instruction",
    "Youth training",
    "Clinics (intro to advanced)",
  ],
  contactEmail: "lanningpickleball@gmail.com",
};

export const DESTINATIONS = {
  example: "Riviera Maya getaway (pickleball vacation)",
  facebookGroup: "Dinks Destinations: Pickleball Getaway Vacations",
};

export const EVENTS = {
  leaguesPlatform: "Team Sideline",
  leaguesLink:
    "https://teamsideline.com/sites/DINKSpickleball/current-programs",
  nextLeagueSession: "January 2025",
  tournaments: [
    "Feb 21–22 2025 Pickle Palooza (All Iowa Club Event, MLP style team-of-4)",
  ],
};

export const CONTACT = {
  primaryEmail: "info@dinkspickleballdsm.com",
  courtReserveRegistration: "https://app.courtreserve.com/Account/Register?t=2",
  courtReserveClubName: "Dinks Pickleball",
  mapLink: "https://maps.google.com/?q=Dinks+Pickleball+Des+Moines",
};

export const NEWSLETTER = {
  description: "League openings, tournament announcements, facility updates",
};

export const OWNERSHIP = {
  families: ["Lanning", "Douglass"],
  narrativeHighlights: [
    "Largest dedicated indoor venue in central Iowa",
    "Family-owned community hub for social, competitive, instructional pickleball",
  ],
};

export type MembershipTier = (typeof MEMBERSHIP_TIERS)[number];

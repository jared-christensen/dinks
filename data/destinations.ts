// Destinations page content and data

export interface Destination {
  location: string;
  description: string;
  details: string;
}

export interface DestinationsData {
  pageTitle: string;
  tagline: string;
  intro: string;
  benefits: string[];
  pastDestinations: Destination[];
  facebookGroupUrl: string;
  instructorsName: string;
  instructorsCredentials: string[];
  instructorsDescription: string;
  instructorsImageSrc: string;
}

export const destinationsData: DestinationsData = {
  pageTitle: "Dinks Destinations: Pickleball Getaway Vacations",
  tagline:
    "What's better than pickleball? Pickleball Vacations at some of the most beautiful locations in the world!",
  intro:
    "Join David & Bailey Lanning, Co-Owners of Dinks Pickleball & PPR Professional Instructors on your next vacation. If you want to improve your game while having an absolute blast and creating lifelong memories and fun - these trips are for you!",
  benefits: [
    "Improve your game with professional instruction from David & Bailey",
    "Have an absolute blast in beautiful locations",
    "Create lifelong memories with fellow pickleball enthusiasts",
    "Experience destinations you've always dreamed of visiting",
    "Organized trips - we handle the details, you enjoy the fun",
  ],
  pastDestinations: [
    {
      location: "Sonoma, California",
      description: "Wine country experience",
      details: "Pair your pickleball with your favorite wine",
    },
    {
      location: "Budapest, Hungary",
      description: "Danube River boat experience",
      details: "Take your game abroad down the Danube River",
    },
    {
      location: "Riviera Maya, Mexico",
      description: "All-inclusive resort",
      details: "Don't have to worry about a thing but keeping score",
    },
  ],
  facebookGroupUrl: "https://www.facebook.com/groups/380792678025831/",
  instructorsName: "David & Bailey Lanning",
  instructorsCredentials: [
    "Co-Owners of Dinks Pickleball",
    "PPR Professional Instructors",
  ],
  instructorsDescription:
    "Co-Owners of Dinks Pickleball and PPR Professional Instructors. They bring their passion for pickleball and love of travel together to create unforgettable experiences. You'll get professional instruction, organized play, and the chance to explore amazing destinations with fellow pickleball enthusiasts.",
  instructorsImageSrc: "/people.webp",
};

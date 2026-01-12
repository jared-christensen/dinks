export const FACILITY = {
  name: "Dinks Pickleball",
  address: {
    street: "3800 Merle Hay Rd Suite 1000",
    city: "Des Moines",
    state: "IA",
    zip: "50310",
    full: "3800 Merle Hay Rd Suite 1000, Des Moines, IA 50310",
    short: "3800 Merle Hay Rd Suite 1000, Des Moines, IA",
  },
  hours: {
    open: "6am",
    close: "12am",
    display: "6am – 12am",
    description: "Open daily 6am – 12am",
  },
  location: {
    description: "North end of Merle Hay Mall",
    landmark: "Next to Kids Empire",
  },
  courts: 13,
  mapsUrl: "https://maps.google.com/?q=Dinks+Pickleball+Des+Moines",
  social: {
    facebook: "https://www.facebook.com/dinkspickleball",
  },
  contact: {
    email: "info@dinkspickleballdsm.com",
  },
  guestFee: 10,
} as const;

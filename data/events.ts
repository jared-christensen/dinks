// Events page content and data

export interface EventsData {
  pageTitle: string;
  intro: string;
  courtReserveUrl: string;
  leaguesDescription: string;
  leaguesSignupUrl: string;
}

export const eventsData: EventsData = {
  pageTitle: "Leagues, tournaments and events",
  intro:
    "Dinks Pickleball hosts leagues, tournaments, DUPR events, and more. Check CourtReserve for our current schedule and to register for upcoming events.",
  courtReserveUrl: "https://app.courtreserve.com/Online/Events/Categories/10812",
  leaguesDescription:
    "League signups are managed through Team Sideline.",
  leaguesSignupUrl: "https://teamsideline.com/sites/DINKSpickleball/current-programs",
};

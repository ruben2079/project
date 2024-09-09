export interface Events {
  registeredEvents: Event[];
  statusCode: number;
  statusMessage: string;
  upcomingChapterMeetings: Event[];
  upcomingOtherEvents: Event[];
}

export interface Event {
  eventId: string;
  eventName: string;
  eventSlug?: string;
  eventStartDate: number;
  eventType: string;
}

import {
  TicketUpdatedEvent,
  Publisher,
  Subjects,
} from "@armughan-ticketing/common";
export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

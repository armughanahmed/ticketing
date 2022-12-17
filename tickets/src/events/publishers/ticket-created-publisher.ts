import {
  TicketCreatedEvent,
  Publisher,
  Subjects,
} from "@armughan-ticketing/common";
export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

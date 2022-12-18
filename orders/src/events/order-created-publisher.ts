import {
  OrderCreatedEvent,
  Publisher,
  Subjects,
} from "@armughan-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

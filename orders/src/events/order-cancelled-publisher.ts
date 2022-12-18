import {
  OrderCancelledEvent,
  Publisher,
  Subjects,
} from "@armughan-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

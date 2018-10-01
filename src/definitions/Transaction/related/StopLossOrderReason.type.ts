// The reason that the Stop Loss Order was initiated
export type StopLossOrderReason =
  | "CLIENT_ORDER" // The Stop Loss Order was initiated at the request of a client
  | "REPLACEMENT" // The Stop Loss Order was initiated as a replacement for an existing Order
  | "ON_FILL"; // The Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Stop Loss Order.

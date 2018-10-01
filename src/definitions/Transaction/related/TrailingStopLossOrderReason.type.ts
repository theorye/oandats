// The reason that the Trailing Stop Loss Order was initiated
export type TrailingStopLossOrderReason =
  | "CLIENT_ORDER" // The Trailing Stop Loss Order was initiated at the request of a client
  | "REPLACEMENT" // The Trailing Stop Loss Order was initiated as a replacement for an existing Order
  | "ON_FILL"; // The Trailing Stop Loss Order was initiated automatically when an Order was filled that opened a new Trade requiring a Trailing Stop Loss Order.

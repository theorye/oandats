// The reason that the Take Profit Order was initiated
export type TakeProfitOrderReason =
  | "CLIENT_ORDER" // The Take Profit Order was initiated at the request of a client
  | "REPLACEMENT" // The Take Profit Order was initiated as a replacement for an existing Order
  | "ON_FILL"; // The Take Profit Order was initiated automatically when an Order was filled that opened a new Trade requiring a Take Profit Order.

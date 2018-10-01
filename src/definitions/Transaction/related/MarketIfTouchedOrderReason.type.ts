// The reason that the Market-if-touched Order was initiated
export type MarketIfTouchedOrderReason =
  | "CLIENT_ORDER" // The Market-if-touched Order was initiated at the request of a client
  | "REPLACEMENT"; // The Market-if-touched Order was initiated as a replacement for an existing Order

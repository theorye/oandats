// The reason that the Limit Order was initied
export type LimitOrderReason =
  | "CLIENT_ORDER" // The Limit Order was initiated at the request of a client
  | "REPLACEMENT"; // The Limit Order was initiated as a replacement for an existing Order

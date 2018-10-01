// The reason that the Stop Order was initiated
export type StopOrderReason =
  | "CLIENT_ORDER" // The Stop Order was initiated at the request of a client
  | "REPLACEMENT"; // The Stop Order was initiated as a replacement for an existing Order

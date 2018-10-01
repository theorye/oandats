import { DateTime } from "../Primitives";

// A PricingHeartbeat object is injected into the Pricing stream to ensure that the HTTP connection remains active.
export interface PricingHeartbeat {
  //
  // The string “HEARTBEAT”
  //
  type: string;

  //
  // The date/time when the Heartbeat was created.
  //
  time: DateTime;
}

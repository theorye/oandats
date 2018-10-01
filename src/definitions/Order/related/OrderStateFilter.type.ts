// The state to filter the requested Orders by.
export type OrderStateFilter =
  | "PENDING" // The Orders that are currently pending execution
  | "FILLED" // The Orders that have been filled
  | "TRIGGERED" // The Orders that have been triggered
  | "CANCELLED" // The Orders that have been cancelled
  | "ALL"; // The Orders that are in any of the possible states listed above

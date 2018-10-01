// The type of the Order
export type OrderState =
  // The Order is currently pending execution
  | "PENDING"
  // The Order has been filled
  | "FILLED"
  // The Order has been triggered
  | "TRIGGERED"
  // The Order has been triggered
  | "CANCELLED";

import { CancellableOrderType } from "./CancellableOrder.type";

// The type of the Order
export type OrderType =
  // A Fixed Pride Order
  | "FIXED_PRICE"
  // A Market Price Order
  | "MARKET"
  | CancellableOrderType;

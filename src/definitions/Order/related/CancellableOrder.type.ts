// The type of the Order
export type CancellableOrderType =
  // A Limit Order
  | "LIMIT"
  // A Stop Order
  | "STOP"
  // A Market-if-touched Order
  | "MARKET_IF_TOUCHED"
  // A Take Profit Order
  | "TAKE_PROFIT"
  // A Stop Loss Order
  | "STOP_LOSS"
  // A Trailing Stop Order
  | "TRAILING_STOP_LOSS";

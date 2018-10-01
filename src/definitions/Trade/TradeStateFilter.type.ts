// The state to filter the Trades by
export type TradeStateFilter =
  | "OPEN" // The Trades that are currently open
  | "CLOSED" // The Trades that have been fully closed
  | "CLOSE_WHEN_TRADEABLE" // The Trades that will be closed as soon as the trades’ instrument becomes tradeable
  | "ALL"; // The Trades that are in any of the possible states listed above.

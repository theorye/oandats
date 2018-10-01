// The overall behaviour of the Account regarding guaranteed Stop Loss Orders.
export type GuaranteedStopLossOrderMode =
  | "DISABLED" // The Account is not permitted to create guaranteed Stop Loss Orders.
  | "ALLOWED" // The Account is able, but not required to have guaranteed Stop Loss Orders for open Trades.
  | "REQUIRED"; //	The Account is required to have guaranteed Stop Loss Orders for all open Trades.

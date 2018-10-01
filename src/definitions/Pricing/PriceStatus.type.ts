// The status of the price
export type PriceStatus =
  | "tradeable" // The Instrument’s price is tradeable.
  | "non-tradeable" // The Instrument’s price is not tradeable.
  | "invalid"; // The Instrument of the price is invalid or there is no valid Price for the Instrument.

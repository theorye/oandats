import { PriceValue } from "../Pricing";

// The price data (open, high, low, close) for the Candlestick represensation.
export interface CandlestickData {
  //
  // The first (open) price in the time-range represented by the candlestick.
  //
  o: PriceValue;

  //
  // The highest price in the time-range represented by the candlestick.
  //
  h: PriceValue;

  //
  // The lowest price in the time-range represented by the candlestick.
  //
  l: PriceValue;

  //
  // The last (closing) price in the time-range represented by the
  // candlestick.
  //
  c: PriceValue;
}

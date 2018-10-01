import { DecimalNumber } from ".";

// A GuaranteedStopLossOrderLevelRestriction represents the total position size that
// can exist within a given price window for Trades with guaranteed
// Stop Loss Orders attached for a specific Instrument.
export interface GuaranteedStopLossOrderLevelRestriction {
  //
  // Applies to Trades with a guaranteed Stop Loss Order attached for the
  // specified Instrument. This is the total allowed Trade volume that can
  // exist within the priceRange based on the trigger prices of the guaranteed
  // Stop Loss Orders.
  //
  volume: DecimalNumber;

  //
  // The price range the volume applies to. This value is in price units.
  //
  priceRange: DecimalNumber;
}

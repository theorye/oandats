import { DecimalNumber } from ".";

// An InstrumentCommission represents an instrument-specific commission
export interface InstrumentCommission {
  //
  // The commission amount (in the Account’s home currency) charged per
  // unitsTraded of the instrument
  //
  commission: DecimalNumber;

  //
  // The number of units traded that the commission amount is based on.
  //
  unitsTraded: DecimalNumber;

  //
  // The minimum commission amount (in the Account’s home currency) that is
  // charged when an Order is filled for this instrument.
  //
  minimumCommission: DecimalNumber;
}

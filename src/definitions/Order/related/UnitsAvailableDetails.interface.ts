import { DecimalNumber } from "../../Primitives";

// Representation of many units of an Instrument are available
// to be traded for both long and short Order
export interface UnitsAvailableDetails {
  //
  // The units available for long Orders.
  //
  long: DecimalNumber;

  //
  // The units available for short Orders.
  //
  short: DecimalNumber;
}

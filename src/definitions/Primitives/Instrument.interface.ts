import {
  InstrumentName,
  InstrumentType,
  Integer,
  DecimalNumber,
  InstrumentCommission
} from ".";

// Full specification of an Instrument
export interface Instrument {
  //
  // The name of the Instrument
  //
  name: InstrumentName;

  //
  // The type of the Instrument
  //
  type: InstrumentType;

  //
  // The display name of the Instrument
  //
  displayName: string;

  //
  // The location of the “pip” for this instrument. The decimal position of
  // the pip in this Instrument’s price can be found at 10 ^ pipLocation (e.g.
  // -4 pipLocation results in a decimal pip position of 10 ^ -4 = 0.0001).
  //
  pipLocation: Integer;

  //
  // The number of decimal places that should be used to display prices for
  // this instrument. (e.g. a displayPrecision of 5 would result in a price of
  // “1” being displayed as “1.00000”)
  //
  displayPrecision: Integer;

  //
  // The amount of decimal places that may be provided when specifying the
  // number of units traded for this instrument.
  //
  tradeUnitsPrecision: Integer;

  //
  // The smallest number of units allowed to be traded for this instrument.
  //
  minimumTradeSize: DecimalNumber;

  //
  // The maximum trailing stop distance allowed for a trailing stop loss
  // created for this instrument. Specified in price units.
  //
  maximumTrailingStopDistance: DecimalNumber;

  //
  // The minimum trailing stop distance allowed for a trailing stop loss
  // created for this instrument. Specified in price units.
  //
  minimumTrailingStopDistance: DecimalNumber;

  //
  // The maximum position size allowed for this instrument. Specified in
  // units.
  //
  maximumPositionSize: DecimalNumber;

  //
  // The maximum units allowed for an Order placed for this instrument.
  // Specified in units.
  //
  maximumOrderUnits: DecimalNumber;

  //
  // The margin rate for this instrument.
  //
  marginRate: DecimalNumber;

  //
  // The commission structure for this instrument.
  //
  commission: InstrumentCommission;
}

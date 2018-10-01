import { InstrumentName, DateTime } from "../Primitives";
import {
  PriceStatus,
  PriceBucket,
  PriceValue,
  QuoteHomeConversionFactors
} from ".";
import { UnitsAvailable } from "../Order";

// The specification of an Account-specific Price.
export interface Price {
  //
  // The string “PRICE”. Used to identify the a Price object when found in a
  // stream.
  //
  type: string; // default=PRICE

  //
  // The Price’s Instrument.
  //
  instrument: InstrumentName;

  //
  // The date/time when the Price was created
  //
  time: DateTime;

  //
  // The status of the Price.
  //
  //
  // Deprecated: Will be removed in a future API update.
  //
  status: PriceStatus;

  //
  // Flag indicating if the Price is tradeable or not
  //
  tradeable: boolean;

  //
  // The list of prices and liquidity available on the Instrument’s bid side.
  // It is possible for this list to be empty if there is no bid liquidity
  // currently available for the Instrument in the Account.
  //
  bids: [PriceBucket];

  //
  // The list of prices and liquidity available on the Instrument’s ask side.
  // It is possible for this list to be empty if there is no ask liquidity
  // currently available for the Instrument in the Account.
  //
  asks: [PriceBucket];

  //
  // The closeout bid Price. This Price is used when a bid is required to
  // closeout a Position (margin closeout or manual) yet there is no bid
  // liquidity. The closeout bid is never used to open a new position.
  //
  closeoutBid: PriceValue;

  //
  // The closeout ask Price. This Price is used when a ask is required to
  // closeout a Position (margin closeout or manual) yet there is no ask
  // liquidity. The closeout ask is never used to open a new position.
  //
  closeoutAsk: PriceValue;

  //
  // The factors used to convert quantities of this price’s Instrument’s quote
  // currency into a quantity of the Account’s home currency. When the
  // includeHomeConversions is present in the pricing request (regardless of
  // its value), this field will not be present.
  //
  //
  // Deprecated: Will be removed in a future API update.
  //
  quoteHomeConversionFactors: QuoteHomeConversionFactors;

  //
  // Representation of how many units of an Instrument are available to be
  // traded by an Order depending on its postionFill option.
  //
  //
  // Deprecated: Will be removed in a future API update.
  //
  unitsAvailable: UnitsAvailable;
}

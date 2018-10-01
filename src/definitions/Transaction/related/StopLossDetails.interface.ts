import { PriceValue } from "../../Pricing";
import { DecimalNumber, DateTime } from "../../Primitives";
import { TimeInForce } from "../../Order";
import { ClientExtensions } from ".";

// StopLossDetails specifies the details of a Stop Loss Order to be created on behalf of a client.
// This may happen when an Order is filled that opens a Trade requiring a Stop Loss,
// or when a Trade’s dependent Stop Loss Order is modified directly through the Trade.
export interface StopLossDetails {
  //
  // The price that the Stop Loss Order will be triggered at. Only one of the
  // price and distance fields may be specified.
  //
  price: PriceValue;

  //
  // Specifies the distance (in price units) from the Trade’s open price to
  // use as the Stop Loss Order price. Only one of the distance and price
  // fields may be specified.
  //
  distance: DecimalNumber;

  //
  // The time in force for the created Stop Loss Order. This may only be GTC,
  // GTD or GFD.
  //
  timeInForce: TimeInForce; // default=GTC),

  //
  // The date when the Stop Loss Order will be cancelled on if timeInForce is
  // GTD.
  //
  gtdTime: DateTime;

  //
  // The Client Extensions to add to the Stop Loss Order when created.
  //
  clientExtensions: ClientExtensions;

  //
  // Flag indicating that the price for the Stop Loss Order is guaranteed. The
  // default value depends on the GuaranteedStopLossOrderMode of the account,
  // if it is REQUIRED, the default will be true, for DISABLED or ENABLED the
  // default is false.
  //
  guaranteed: boolean;
}

import { DecimalNumber, DateTime } from "../../Primitives";
import { TimeInForce } from "../../Order";
import { ClientExtensions } from ".";

// TrailingStopLossDetails specifies the details of a Trailing Stop Loss Order to be created on behalf of a client.
// This may happen when an Order is filled that opens a Trade requiring a Trailing Stop Loss,
// or when a Trade’s dependent Trailing Stop Loss Order is modified directly through the Trade.
export interface TrailingStopLossDetails {
  //
  // The distance (in price units) from the Trade’s fill price that the
  // Trailing Stop Loss Order will be triggered at.
  //
  distance: DecimalNumber;

  //
  // The time in force for the created Trailing Stop Loss Order. This may only
  // be GTC, GTD or GFD.
  //
  timeInForce: TimeInForce; // default=GTC),

  //
  // The date when the Trailing Stop Loss Order will be cancelled on if
  // timeInForce is GTD.
  //
  gtdTime: DateTime;

  //
  // The Client Extensions to add to the Trailing Stop Loss Order when
  // created.
  //
  clientExtensions: ClientExtensions;
}

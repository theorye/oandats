import { PriceValue } from "../../Pricing";
import { TimeInForce } from "../../Order";
import { DateTime } from "../../Primitives";
import { ClientExtensions } from ".";

// TakeProfitDetails specifies the details of a Take Profit Order to be created on behalf of a client.
// This may happen when an Order is filled that opens a Trade requiring a Take Profit,
// or when a Trade’s dependent Take Profit Order is modified directly through the Trade.
export interface TakeProfitDetails {
  //
  // The price that the Take Profit Order will be triggered at. Only one of
  // the price and distance fields may be specified.
  //
  price: PriceValue;

  //
  // The time in force for the created Take Profit Order. This may only be
  // GTC, GTD or GFD.
  //
  timeInForce: TimeInForce; // default=GTC),

  //
  // The date when the Take Profit Order will be cancelled on if timeInForce
  // is GTD.
  //
  gtdTime: DateTime;

  //
  // The Client Extensions to add to the Take Profit Order when created.
  //
  clientExtensions: ClientExtensions;
}

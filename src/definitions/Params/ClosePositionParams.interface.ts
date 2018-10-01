import { ClientExtensions } from "../Transaction";

export interface ClosePositionParams {
  //
  // Indication of how much of the long Position to closeout. Either the
  // string “ALL”, the string “NONE”, or a DecimalNumber representing how many
  // units of the long position to close using a PositionCloseout MarketOrder.
  // The units specified must always be positive.
  //
  longUnits: string; // default=ALL),

  //
  // The client extensions to add to the MarketOrder used to close the long
  // position.
  //
  longClientExtensions: ClientExtensions;

  //
  // Indication of how much of the short Position to closeout. Either the
  // string “ALL”, the string “NONE”, or a DecimalNumber representing how many
  // units of the short position to close using a PositionCloseout
  // MarketOrder. The units specified must always be positive.
  //
  shortUnits: string; // default=ALL),

  //
  // The client extensions to add to the MarketOrder used to close the short
  // position.
  //
  shortClientExtensions: ClientExtensions;
}

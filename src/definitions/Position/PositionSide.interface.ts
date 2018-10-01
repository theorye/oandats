import { DecimalNumber, AccountUnits } from "../Primitives";
import { PriceValue } from "../Pricing";
import { TradeID } from "../Trade";

// The representation of a Position fo ra single direction (long or short).
export interface PositionSide {
  //
  // Number of units in the position (negative value indicates short position,
  // positive indicates long position).
  //
  units: DecimalNumber;

  //
  // Volume-weighted average of the underlying Trade open prices for the
  // Position.
  //
  averagePrice: PriceValue;

  //
  // List of the open Trade IDs which contribute to the open Position.
  //
  tradeIDs: [TradeID];

  //
  // Profit/loss realized by the PositionSide over the lifetime of the
  // Account.
  //
  pl: AccountUnits;

  //
  // The unrealized profit/loss of all open Trades that contribute to this
  // PositionSide.
  //
  unrealizedPL: AccountUnits;

  //
  // Profit/loss realized by the PositionSide since the Account’s resettablePL
  // was last reset by the client.
  //
  resettablePL: AccountUnits;

  //
  // The total amount of financing paid/collected for this PositionSide over
  // the lifetime of the Account.
  //
  financing: AccountUnits;

  //
  // The total amount of fees charged over the lifetime of the Account for the
  // execution of guaranteed Stop Loss Orders attached to Trades for this
  // PositionSide.
  //
  guaranteedExecutionFees: AccountUnits;
}

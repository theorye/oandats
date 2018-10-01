import { InstrumentName, AccountUnits } from "../Primitives";
import { PositionSide } from ".";

// The specification of a Position within an Account
export interface Position {
  //
  // The Position’s Instrument.
  //
  instrument: InstrumentName;

  //
  // Profit/loss realized by the Position over the lifetime of the Account.
  //
  pl: AccountUnits;

  //
  // The unrealized profit/loss of all open Trades that contribute to this
  // Position.
  //
  unrealizedPL: AccountUnits;

  //
  // Margin currently used by the Position.
  //
  marginUsed: AccountUnits;

  //
  // Profit/loss realized by the Position since the Account’s resettablePL was
  // last reset by the client.
  //
  resettablePL: AccountUnits;

  //
  // The total amount of financing paid/collected for this instrument over the
  // lifetime of the Account.
  //
  financing: AccountUnits;

  //
  // The total amount of commission paid for this instrument over the lifetime
  // of the Account.
  //
  commission: AccountUnits;

  //
  // The total amount of fees charged over the lifetime of the Account for the
  // execution of guaranteed Stop Loss Orders for this instrument.
  //
  guaranteedExecutionFees: AccountUnits;

  //
  // The details of the long side of the Position.
  //
  long: PositionSide;

  //
  // The details of the short side of the Position.
  //
  short: PositionSide;
}

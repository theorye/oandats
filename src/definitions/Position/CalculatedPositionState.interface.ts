import { InstrumentName, AccountUnits } from "../Primitives";

// The dynamic (calculated) state of a Position
export interface CalculatedPositionState {
  //
  // The Position’s Instrument.
  //
  instrument: InstrumentName;

  //
  // The Position’s net unrealized profit/loss
  //
  netUnrealizedPL: AccountUnits;

  //
  // The unrealized profit/loss of the Position’s long open Trades
  //
  longUnrealizedPL: AccountUnits;

  //
  // The unrealized profit/loss of the Position’s short open Trades
  //
  shortUnrealizedPL: AccountUnits;

  //
  // Margin currently used by the Position.
  //
  marginUsed: AccountUnits;
}

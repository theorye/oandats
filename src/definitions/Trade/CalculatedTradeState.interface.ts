import { TradeID } from ".";
import { AccountUnits } from "../Primitives";

// The dynamic (calculated) state of an openTrade
export interface CalculatedTradeState {
  //
  // The Trade’s ID.
  //
  id: TradeID;

  //
  // The Trade’s unrealized profit/loss.
  //
  unrealizedPL: AccountUnits;

  //
  // Margin currently used by the Trade.
  //
  marginUsed: AccountUnits;
}

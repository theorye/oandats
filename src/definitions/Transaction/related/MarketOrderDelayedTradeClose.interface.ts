import { TradeID } from "../../Trade";
import { TransactionID } from ".";

// Details for the Market Order extensions specific to a Market Order placed with the intent of fully
// closing a specific open trade that should have already been closed but wasn’t due to halted market conditions
export interface MarketOrderDelayedTradeClose {
  //
  // The ID of the Trade being closed
  //
  tradeID: TradeID;

  //
  // The Client ID of the Trade being closed
  //
  clientTradeID: TradeID;

  //
  // The Transaction ID of the DelayedTradeClosure transaction to which this
  // Delayed Trade Close belongs to
  //
  sourceTransactionID: TransactionID;
}

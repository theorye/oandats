import { Transaction, TransactionType, MarketOrderReason } from ".";
import { TradeID } from "../Trade";

// A DelayedTradeClosure Transaction is created administratively to indicate open trades that should
// have been closed but weren’t because the open trades’ instruments were untradeable at the time.
// Open trades listed in this transaction will be closed once their respective instruments become tradeable.
export interface DelayedTradeClosureTransaction extends Transaction {
  // The Type of the Transaction. Always set to “DELAYED_TRADE_CLOSURE” for an
  // DelayedTradeClosureTransaction.
  //
  type: TransactionType; // default=DELAYED_TRADE_CLOSURE),

  //
  // The reason for the delayed trade closure
  //
  reason: MarketOrderReason;

  //
  // List of Trade ID’s identifying the open trades that will be closed when
  // their respective instruments become tradeable
  //
  tradeIDs: TradeID;
}

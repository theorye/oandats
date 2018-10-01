import { Order } from "../Order";
import { TradeSummary } from "../Trade";
import { Transaction } from "../Transaction";

// An AccountChanges Object is used to represent the changes to an Account’s Orders,
// Trades and Positions since a specified Account TransactionID in the past.
export interface AccountChanges {
  //
  // The Orders created. These Orders may have been filled, cancelled or
  // triggered in the same period.
  //
  ordersCreated: [Order];

  //
  // The Orders cancelled.
  //
  ordersCancelled: [Order];

  //
  // The Orders filled.
  //
  ordersFilled: [Order];

  //
  // The Orders triggered.
  //
  ordersTriggered: [Order];

  //
  // The Trades opened.
  //
  tradesOpened: [TradeSummary];

  //
  // The Trades reduced.
  //
  tradesReduced: [TradeSummary];

  //
  // The Trades closed.
  //
  tradesClosed: [TradeSummary];

  //
  // The Positions changed.
  //
  positions: [Position];

  //
  // The Transactions that have been generated.
  //
  transactions: [Transaction];
}

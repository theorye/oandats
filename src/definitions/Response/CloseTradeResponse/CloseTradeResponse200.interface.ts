import {
  MarketOrderTransaction,
  OrderFillTransaction,
  OrderCancelTransaction,
  TransactionID
} from "../../Transaction";

export interface CloseTradeResponse200 {
  //
  // The MarketOrder Transaction created to close the Trade.
  //
  orderCreateTransaction: MarketOrderTransaction;

  //
  // The OrderFill Transaction that fills the Trade-closing MarketOrder and
  // closes the Trade.
  //
  orderFillTransaction: OrderFillTransaction;

  //
  // The OrderCancel Transaction that immediately cancelled the Trade-closing
  // MarketOrder.
  //
  orderCancelTransaction: OrderCancelTransaction;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

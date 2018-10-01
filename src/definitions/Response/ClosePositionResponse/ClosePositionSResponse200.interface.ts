import {
  MarketOrderTransaction,
  OrderFillTransaction,
  OrderCancelTransaction,
  TransactionID
} from "../../Transaction";

export interface ClosePositionResponse200 {
  //
  // The MarketOrderTransaction created to close the long Position.
  //
  longOrderCreateTransaction: MarketOrderTransaction;

  //
  // OrderFill Transaction that closes the long Position
  //
  longOrderFillTransaction: OrderFillTransaction;

  //
  // OrderCancel Transaction that cancels the MarketOrder created to close the
  // long Position
  //
  longOrderCancelTransaction: OrderCancelTransaction;

  //
  // The MarketOrderTransaction created to close the short Position.
  //
  shortOrderCreateTransaction: MarketOrderTransaction;

  //
  // OrderFill Transaction that closes the short Position
  //
  shortOrderFillTransaction: OrderFillTransaction;

  //
  // OrderCancel Transaction that cancels the MarketOrder created to close the
  // short Position
  //
  shortOrderCancelTransaction: OrderCancelTransaction;

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

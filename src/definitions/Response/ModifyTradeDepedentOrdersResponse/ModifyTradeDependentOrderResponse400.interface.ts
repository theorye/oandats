import {
  OrderCancelRejectTransaction,
  TakeProfitOrderRejectTransaction,
  StopLossOrderRejectTransaction,
  TrailingStopLossOrderRejectTransaction,
  TransactionID
} from "../../Transaction";

export interface ModifyTradeDependentOrderResponse400 {
  //
  // An OrderCancelRejectTransaction represents the rejection of the
  // cancellation of an Order in the client’s Account.
  //
  takeProfitOrderCancelRejectTransaction: OrderCancelRejectTransaction;

  //
  // A TakeProfitOrderRejectTransaction represents the rejection of the
  // creation of a TakeProfit Order.
  //
  takeProfitOrderRejectTransaction: TakeProfitOrderRejectTransaction;

  //
  // An OrderCancelRejectTransaction represents the rejection of the
  // cancellation of an Order in the client’s Account.
  //
  stopLossOrderCancelRejectTransaction: OrderCancelRejectTransaction;

  //
  // A StopLossOrderRejectTransaction represents the rejection of the creation
  // of a StopLoss Order.
  //
  stopLossOrderRejectTransaction: StopLossOrderRejectTransaction;

  //
  // An OrderCancelRejectTransaction represents the rejection of the
  // cancellation of an Order in the client’s Account.
  //
  trailingStopLossOrderCancelRejectTransaction: OrderCancelRejectTransaction;

  //
  // A TrailingStopLossOrderRejectTransaction represents the rejection of the
  // creation of a TrailingStopLoss Order.
  //
  trailingStopLossOrderRejectTransaction: TrailingStopLossOrderRejectTransaction;

  //
  // The ID of the most recent Transaction created for the Account.
  //
  lastTransactionID: TransactionID;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The code of the error that has occurred. This field may not be returned
  // for some errors.
  //
  errorCode: string;

  //
  // The human-readable description of the error that has occurred.
  //
  errorMessage: string; // required)
}

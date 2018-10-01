import {
  OrderCancelTransaction,
  TakeProfitOrderTransaction,
  OrderFillTransaction,
  StopLossOrderTransaction,
  TrailingStopLossOrderTransaction,
  TransactionID
} from "../../Transaction";

export interface ModifyTradeDependentOrderResponse200 {
  //
  // The Transaction created that cancels the Trade’s existing Take Profit
  // Order.
  //
  takeProfitOrderCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction created that creates a new Take Profit Order for the
  // Trade.
  //
  takeProfitOrderTransaction: TakeProfitOrderTransaction;

  //
  // The Transaction created that immediately fills the Trade’s new Take
  // Profit Order. Only provided if the new Take Profit Order was immediately
  // filled.
  //
  takeProfitOrderFillTransaction: OrderFillTransaction;

  //
  // The Transaction created that immediately cancels the Trade’s new Take
  // Profit Order. Only provided if the new Take Profit Order was immediately
  // cancelled.
  //
  takeProfitOrderCreatedCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction created that cancels the Trade’s existing Stop Loss
  // Order.
  //
  stopLossOrderCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction created that creates a new Stop Loss Order for the Trade.
  //
  stopLossOrderTransaction: StopLossOrderTransaction;

  //
  // The Transaction created that immediately fills the Trade’s new Stop
  // Order. Only provided if the new Stop Loss Order was immediately filled.
  //
  stopLossOrderFillTransaction: OrderFillTransaction;

  //
  // The Transaction created that immediately cancels the Trade’s new Stop
  // Loss Order. Only provided if the new Stop Loss Order was immediately
  // cancelled.
  //
  stopLossOrderCreatedCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction created that cancels the Trade’s existing Trailing Stop
  // Loss Order.
  //
  trailingStopLossOrderCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction created that creates a new Trailing Stop Loss Order for
  // the Trade.
  //
  trailingStopLossOrderTransaction: TrailingStopLossOrderTransaction;

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

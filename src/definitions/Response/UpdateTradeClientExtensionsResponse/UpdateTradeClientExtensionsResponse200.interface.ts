import {
  TradeClientExtensionsModifyTransaction,
  TransactionID
} from "../../Transaction";

export interface UpdateTradeClientExtensionsResponse200 {
  //
  // The Transaction that updates the Trade’s Client Extensions.
  //
  tradeClientExtensionsModifyTransaction: TradeClientExtensionsModifyTransaction;

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

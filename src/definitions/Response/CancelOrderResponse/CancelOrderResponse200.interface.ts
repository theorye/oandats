import { OrderCancelTransaction, TransactionID } from "../../Transaction";

export interface CancelOrderResponse200 {
  //
  // The Transaction that cancelled the Order
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

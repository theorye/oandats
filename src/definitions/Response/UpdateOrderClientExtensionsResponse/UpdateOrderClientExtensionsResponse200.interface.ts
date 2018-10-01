import {
  OrderClientExtensionsModifyTransaction,
  TransactionID
} from "../../Transaction";

export interface UpdateOrderClientExtensionsResponse200 {
  //
  // The Transaction that modified the Client Extensions for the Order
  //
  orderClientExtensionsModifyTransaction: OrderClientExtensionsModifyTransaction;

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request.
  //
  relatedTransactionIDs: [TransactionID];
}

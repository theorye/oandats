import {
  OrderClientExtensionsModifyRejectTransaction,
  TransactionID
} from "../../Transaction";

export interface UpdateOrderClientExtensionsResponse400 {
  //
  // The Transaction that rejected the modification of the Client Extensions
  // for the Order
  //
  orderClientExtensionsModifyRejectTransaction: OrderClientExtensionsModifyRejectTransaction;

  //
  // The ID of the most recent Transaction created for the Account
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

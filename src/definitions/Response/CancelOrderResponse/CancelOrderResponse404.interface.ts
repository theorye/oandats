import { OrderCancelRejectTransaction, TransactionID } from "../../Transaction";

export interface CancelOrderResponse404 {
  //
  // The Transaction that rejected the cancellation of the Order. Only present
  // if the Account exists.
  //
  orderCancelRejectTransaction: OrderCancelRejectTransaction;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request. Only present if the Account exists.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The ID of the most recent Transaction created for the Account. Only
  // present if the Account exists.
  //
  lastTransactionID: TransactionID;

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

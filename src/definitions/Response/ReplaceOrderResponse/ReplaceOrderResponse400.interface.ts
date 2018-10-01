import { Transaction } from "../../Transaction/Transaction.interface";
import { TransactionID } from "../../Transaction/related/TransactionID.type";

export interface ReplaceOrderResponse400 {
  //
  // The Transaction that rejected the creation of the replacing Order
  //
  orderRejectTransaction: Transaction;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The ID of the most recent Transaction created for the Account.
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

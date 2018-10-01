import { TransactionID, RequestID } from ".";
import { DateTime, Integer } from "../Primitives";
import { AccountID } from "../Account";

// The base Transaction specification. Specifies properties that are common between all Transaction.
export interface Transaction {
  //
  // The Transaction’s Identifier.
  //
  id: TransactionID;

  //
  // The date/time when the Transaction was created.
  //
  time: DateTime;

  //
  // The ID of the user that initiated the creation of the Transaction.
  //
  userID: Integer;

  //
  // The ID of the Account the Transaction was created for.
  //
  accountID: AccountID;

  //
  // The ID of the “batch” that the Transaction belongs to. Transactions in
  // the same batch are applied to the Account simultaneously.
  //
  batchID: TransactionID;

  //
  // The Request ID of the request which generated the transaction.
  //
  requestID: RequestID;
}

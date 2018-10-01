import { Transaction, TransactionID } from "../Transaction";

export interface GetTransactionsRangeResponse {
  //
  // The list of Transactions that satisfy the request.
  //
  transactions: [Transaction];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

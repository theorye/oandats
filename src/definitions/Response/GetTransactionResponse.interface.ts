import { Transaction, TransactionID } from "../Transaction";

export interface GetTransactionResponse {
  //
  // The details of the Transaction requested
  //
  transaction: Transaction;

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

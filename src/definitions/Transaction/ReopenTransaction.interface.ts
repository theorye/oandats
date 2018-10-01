import { Transaction, TransactionType } from ".";

// A ReopenTransaction represents the re-opening of a closed Account.
export interface ReopenTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “REOPEN” in a
  // ReopenTransaction.
  //
  type: TransactionType; // default=REOPEN)
}

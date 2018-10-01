import { Transaction, TransactionType } from ".";

// A CloseTransaction represents the closing of an Account
export interface CloseTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “CLOSE” in a CloseTransaction.
  //
  type: TransactionType; // default=CLOSE)
}

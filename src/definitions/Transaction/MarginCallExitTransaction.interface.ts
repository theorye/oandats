import { Transaction, TransactionType } from ".";

// A MarginCallExitnterTransaction is created when an Account leaves the margin call state.
export interface MarginCallExitnterTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “MARGIN_CALL_EXIT” for an
  // MarginCallExitTransaction.
  //
  type: TransactionType; // default=MARGIN_CALL_EXIT)
}

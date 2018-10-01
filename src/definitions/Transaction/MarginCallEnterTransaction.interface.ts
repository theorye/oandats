import { Transaction, TransactionType } from ".";

// A MarginCallEnterTransaction is created when an Account enters the margin call state.
export interface MarginCallEnterTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “MARGIN_CALL_ENTER” for an
  // MarginCallEnterTransaction.
  //
  type: TransactionType; //, default=MARGIN_CALL_ENTER)
}

import { Transaction, TransactionType } from ".";
import { Integer } from "../Primitives";

// A MarginCallExtendTransaction is created when the margin call state for an Account has been extended.
export interface MarginCallExtendTransaction extends Transaction {
  // The Type of the Transaction. Always set to “MARGIN_CALL_EXTEND” for an
  // MarginCallExtendTransaction.
  //
  type: TransactionType; // default=MARGIN_CALL_EXTEND),

  //
  // The number of the extensions to the Account’s current margin call that
  // have been applied. This value will be set to 1 for the first
  // MarginCallExtend Transaction
  //
  extensionNumber: Integer;
}

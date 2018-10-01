import { Transaction, TransactionType } from ".";

// A ResetResettablePLTransaction represents the resetting of the Account’s resettable PL counters.
export interface ResetResettablePLTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “RESET_RESETTABLE_PL” for a
  // ResetResettablePLTransaction.
  //
  type: TransactionType; // default=RESET_RESETTABLE_PL)
}

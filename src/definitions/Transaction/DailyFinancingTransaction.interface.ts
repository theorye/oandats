import { Transaction, TransactionType, PositionFinancing } from ".";
import { AccountUnits } from "../Primitives";
import { AccountFinancingMode } from "../Account";

// A DailyFinancingTransaction represents the daily payment/collection of financing for an Account.
export interface DailyFinancingTransaction extends Transaction {
  // The Type of the Transaction. Always set to “DAILY_FINANCING” for a
  // DailyFinancingTransaction.
  //
  type: TransactionType; // default=DAILY_FINANCING),

  //
  // The amount of financing paid/collected for the Account.
  //
  financing: AccountUnits;

  //
  // The Account’s balance after daily financing.
  //
  accountBalance: AccountUnits;

  //
  // The account financing mode at the time of the daily financing.
  //
  accountFinancingMode: AccountFinancingMode;

  //
  // The financing paid/collected for each Position in the Account.
  //
  positionFinancings: [PositionFinancing];
}

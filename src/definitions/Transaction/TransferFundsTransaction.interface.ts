import { Transaction, TransactionType, FundingReason } from ".";
import { AccountUnits } from "../Primitives";

// A TransferFundsTransaction represents the transfer of funds in/out of an Account
export interface TransferFundsTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “TRANSFER_FUNDS” in a
  // TransferFundsTransaction.
  //
  type: TransactionType; // default=TRANSFER_FUNDS),

  //
  // The amount to deposit/withdraw from the Account in the Account’s home
  // currency. A positive value indicates a deposit, a negative value
  // indicates a withdrawal.
  //
  amount: AccountUnits;

  //
  // The reason that an Account is being funded.
  //
  fundingReason: FundingReason;

  //
  // An optional comment that may be attached to a fund transfer for audit
  // purposes
  //
  comment: string;

  //
  // The Account’s balance after funds are transferred.
  //
  accountBalance: AccountUnits;
}

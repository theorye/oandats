import {
  Transaction,
  TransactionType,
  FundingReason,
  TransactionRejectReason
} from ".";
import { AccountUnits } from "../Primitives";

// A TransferFundsRejectTransaction represents the rejection of the transfer of funds in/out of an Account
export interface TransferFundsRejectTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “TRANSFER_FUNDS_REJECT” in a
  // TransferFundsRejectTransaction.
  //
  type: TransactionType; // default=TRANSFER_FUNDS_REJECT),

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
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

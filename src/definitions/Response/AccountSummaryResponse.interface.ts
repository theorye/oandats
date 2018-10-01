import { AccountSummary } from "../Account/AccountSummary.interface";
import { TransactionID } from "../Transaction/related/TransactionID.type";

export interface AccountSummaryResponse {
  //
  // The summary of the requested Account.
  //
  account: AccountSummary;

  //
  // The ID of the most recent Transaction created for the Account.
  //
  lastTransactionID: TransactionID;
}

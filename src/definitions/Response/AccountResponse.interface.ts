import { TransactionID } from "../Transaction/related/TransactionID.type";
import { Account } from "../Account/Account.interface";

export interface AccountResponse {
  //
  // The full details of the requested Account.
  //
  account: Account;

  //
  // The ID of the most recent Transaction created for the Account.
  //
  lastTransactionID: TransactionID;
}

import { Transaction, TransactionType } from ".";
import { Integer, Currency } from "../Primitives";

// A CreateTransaction represents the creation of an Account
export interface CreateTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “CREATE” in a
  // CreateTransaction.
  //
  type: TransactionType; //, default=CREATE),

  //
  // The ID of the Division that the Account is in
  //
  divisionID: Integer;

  //
  // The ID of the Site that the Account was created at
  //
  siteID: Integer;

  //
  // The ID of the user that the Account was created for
  //
  accountUserID: Integer;

  //
  // The number of the Account within the site/division/user
  //
  accountNumber: Integer;

  //
  // The home currency of the Account
  //
  homeCurrency: Currency;
}

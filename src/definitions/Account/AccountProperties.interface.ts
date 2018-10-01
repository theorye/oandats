import { AccountID } from ".";
import { Integer } from "../Primitives";

// Properties related to an Account.
export interface AccountProperties {
  //
  // The Account’s identifier
  //
  id: AccountID;

  //
  // The Account’s associated MT4 Account ID. This field will not be present
  // if the Account is not an MT4 account.
  //
  mt4AccountID: Integer;

  //
  // The Account’s tags
  //
  tags: string[];
}

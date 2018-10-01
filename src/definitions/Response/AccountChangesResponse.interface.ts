import { AccountChanges } from "../Account/AccountChanges.interface";
import { TransactionID } from "../Transaction/related/TransactionID.type";
import { AccountChangesState } from "../Account/AccountChangesState.interface";

export interface AccountChangesResponse {
  //
  // The changes to the Account’s Orders, Trades and Positions since the
  // specified Transaction ID. Only provided if the sinceTransactionID is
  // supplied to the poll request.
  //
  changes: AccountChanges;

  //
  // The Account’s current price-dependent state.
  //
  state: AccountChangesState;

  //
  // The ID of the last Transaction created for the Account.  This Transaction
  // ID should be used for future poll requests, as the client has already
  // observed all changes up to and including it.
  //
  lastTransactionID: TransactionID;
}

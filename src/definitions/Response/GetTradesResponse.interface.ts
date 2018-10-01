import { Trade } from "../Trade";
import { TransactionID } from "../Transaction";

export interface GetTradesResponse {
  //
  // The list of Trade detail objects
  //
  trades: [Trade];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

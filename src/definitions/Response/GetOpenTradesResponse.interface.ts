import { Trade } from "../Trade";
import { TransactionID } from "../Transaction";

export interface GetOpenTradesResponse {
  //
  // The Account’s list of open Trades
  //
  trades: [Trade];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

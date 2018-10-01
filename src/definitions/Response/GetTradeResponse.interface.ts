import { Trade } from "../Trade";
import { TransactionID } from "../Transaction";

export interface GetTradeResponse {
  //
  // The Account’s list of open Trades
  //
  trade: Trade;

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

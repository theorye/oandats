import { Position } from "../Position";
import { TransactionID } from "../Transaction";

export interface GetPositionsResponse {
  //
  // The list of Account Positions.
  //
  positions: [Position];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

import { TransactionID } from "../Transaction";

export interface GetInstrumentPositionResponse {
  //
  // The requested Position.
  //
  position: Position;

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

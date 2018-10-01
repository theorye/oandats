import { Instrument } from "../Primitives/Instrument.interface";
import { TransactionID } from "../Transaction/related/TransactionID.type";

export interface InstrumentsResponse {
  //
  // The requested list of instruments.
  //
  instruments: [Instrument];

  //
  // The ID of the most recent Transaction created for the Account.
  //
  lastTransactionID: TransactionID;
}

import { TransactionID } from ".";
import { DateTime } from "../../Primitives";

// A TransactionHearbeat object is injected into the Transaction stream to ensure that the HTTP
// connection remains active.
export interface TransactionHeartbeat {
  //
  // The string “HEARTBEAT”
  //
  type: string; // default=HEARTBEAT),

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;

  //
  // The date/time when the TransactionHeartbeat was created.
  //
  time: DateTime;
}

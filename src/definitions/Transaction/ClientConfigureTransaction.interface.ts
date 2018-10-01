import { Transaction, TransactionType } from ".";
import { DecimalNumber } from "../Primitives";

// A ClientConfigureTransaction represents the configuration of an Account by a client
export interface ClientConfigureTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “CLIENT_CONFIGURE” in a
  // ClientConfigureTransaction.
  //
  type: TransactionType; // (default=CLIENT_CONFIGURE),

  //
  // The client-provided alias for the Account.
  //
  alias: string;

  //
  // The margin rate override for the Account.
  //
  marginRate: DecimalNumber;
}

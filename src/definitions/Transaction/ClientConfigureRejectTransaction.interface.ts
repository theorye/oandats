import { Transaction, TransactionType, TransactionRejectReason } from ".";
import { DecimalNumber } from "../Primitives";

// A ClientConfigureRejectTransaction represents the reject of configuration of an Account by a client
export interface ClientConfigureRejectTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “CLIENT_CONFIGURE_REJECT” in a
  // ClientConfigureRejectTransaction.
  //
  type: TransactionType; // default=CLIENT_CONFIGURE_REJECT),

  //
  // The client-provided alias for the Account.
  //
  alias: string;

  //
  // The margin rate override for the Account.
  //
  marginRate: DecimalNumber;

  //
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

import {
  Transaction,
  TransactionType,
  ClientID,
  ClientExtensions,
  TransactionRejectReason
} from ".";
import { OrderID } from "../Order";

// A OrderClientExtensionsModifyRejectTransaction represents the rejection
// of the modification of an Order’s Client Extensions.

export interface OrderClientExtensionsModifyRejectTransaction
  extends Transaction {
  //
  // The Type of the Transaction. Always set to
  // “ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT” for a
  // OrderClientExtensionsModifyRejectTransaction.
  //
  type: TransactionType; // default=ORDER_CLIENT_EXTENSIONS_MODIFY_REJECT),

  //
  // The ID of the Order who’s client extensions are to be modified.
  //
  orderID: OrderID;

  //
  // The original Client ID of the Order who’s client extensions are to be
  // modified.
  //
  clientOrderID: ClientID;

  //
  // The new Client Extensions for the Order.
  //
  clientExtensionsModify: ClientExtensions;

  //
  // The new Client Extensions for the Order’s Trade on fill.
  //
  tradeClientExtensionsModify: ClientExtensions;

  //
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

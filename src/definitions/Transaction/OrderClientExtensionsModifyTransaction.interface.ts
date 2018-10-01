import { Transaction, TransactionType, ClientID, ClientExtensions } from ".";
import { OrderID } from "../Order";

// A OrderClientExtensionsModifyTransaction represents the modification of an Order’s Client Extensions.
export interface OrderClientExtensionsModifyTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to
  // “ORDER_CLIENT_EXTENSIONS_MODIFY” for a
  // OrderClienteExtensionsModifyTransaction.
  //
  type: TransactionType; // default=ORDER_CLIENT_EXTENSIONS_MODIFY),

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
}

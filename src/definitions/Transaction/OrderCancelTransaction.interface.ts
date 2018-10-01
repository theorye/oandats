import { Transaction, TransactionType, OrderCancelReason } from ".";
import { OrderID } from "../Order";

// An OrderCancelTransaction represents the cancellation of an Order in the client’s Account.
export interface OrderCancelTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “ORDER_CANCEL” for an
  // OrderCancelTransaction.
  //
  type: TransactionType; // default=ORDER_CANCEL),

  //
  // The ID of the Order cancelled
  //
  orderID: OrderID;

  //
  // The client ID of the Order cancelled (only provided if the Order has a
  // client Order ID).
  //
  clientOrderID: OrderID;

  //
  // The reason that the Order was cancelled.
  //
  reason: OrderCancelReason;

  //
  // The ID of the Order that replaced this Order (only provided if this Order
  // was cancelled for replacement).
  //
  replacedByOrderID: OrderID;
}

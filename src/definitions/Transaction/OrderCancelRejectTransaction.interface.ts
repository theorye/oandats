import { Transaction, TransactionType, TransactionRejectReason } from ".";
import { OrderID } from "../Order";

// An OrderCancelRejectTransaction represents the rejection of the cancellation of an Order in the client’s Account.
export interface OrderCancelRejectTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “ORDER_CANCEL_REJECT” for an
  // OrderCancelRejectTransaction.
  //
  type: TransactionType; // default=ORDER_CANCEL_REJECT),

  //
  // The ID of the Order intended to be cancelled
  //
  orderID: OrderID;

  //
  // The client ID of the Order intended to be cancelled (only provided if the
  // Order has a client Order ID).
  //
  clientOrderID: OrderID;

  //
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

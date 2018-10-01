import { OrderID, OrderState } from ".";
import { DateTime } from "../Primitives";
import { ClientExtensions } from "../Transaction";

// The base Order definition specifies the properties
// that are common to all Orders
export interface Order {
  // The Order’s identifier, unique within the Order’s Account.
  id: OrderID;

  // The time when the Order was created.
  createTime: DateTime;

  // The current state of the Order.
  state: OrderState;

  // The client extensions of the Order. Do not set, modify, or delete
  // clientExtensions if your account is associated with MT4.
  clientExtensions: ClientExtensions;
}

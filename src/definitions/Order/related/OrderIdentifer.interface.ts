import { OrderID } from ".";
import { ClientID } from "../../Transaction";

// An OrderIdentifer is ued to refer to an Order, and contains both the OrderID and the ClientOrderID.
export interface OrderIdentifier {
  // The OANDA-assigned Order ID
  orderID: OrderID;

  //The client-provided client Order ID
  clientOrderID: ClientID;
}

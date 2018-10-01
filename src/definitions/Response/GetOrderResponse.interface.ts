import { Order } from "../Order/Order.interface";
import { TransactionID } from "../Transaction/related/TransactionID.type";

export interface GetOrderResponse {
  //
  // The details of the Order requested
  //
  order: Order;

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

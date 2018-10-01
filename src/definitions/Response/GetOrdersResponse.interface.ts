import { Order } from "../Order/Order.interface";
import { TransactionID } from "../Transaction/related/TransactionID.type";

export interface GetOrdersResponse {
  //
  // The list of Order detail objects
  //
  orders: [Order];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

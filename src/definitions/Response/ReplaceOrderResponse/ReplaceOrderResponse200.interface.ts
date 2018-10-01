import { OrderCancelTransaction } from "../../Transaction/OrderCancelTransaction.interface";
import { Transaction } from "../../Transaction/Transaction.interface";
import { OrderFillTransaction } from "../../Transaction/OrderFillTransaction.interface";
import { TransactionID } from "../../Transaction/related/TransactionID.type";

export interface ReplaceOrderResponse200 {
  //
  // The Transaction that cancelled the Order to be replaced.
  //
  orderCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction that created the replacing Order as requested.
  //
  orderCreateTransaction: Transaction;

  //
  // The Transaction that filled the replacing Order. This is only provided
  // when the replacing Order was immediately filled.
  //
  orderFillTransaction: OrderFillTransaction;

  //
  // The Transaction that reissues the replacing Order. Only provided when the
  // replacing Order was partially filled immediately and is configured to be
  // reissued for its remaining units.
  //
  orderReissueTransaction: Transaction;

  //
  // The Transaction that rejects the reissue of the Order. Only provided when
  // the replacing Order was paritially filled immediately and was configured
  // to be reissued, however the reissue was rejected.
  //
  orderReissueRejectTransaction: Transaction;

  //
  // The Transaction that cancelled the replacing Order. Only provided when
  // the replacing Order was immediately cancelled.
  //
  replacingOrderCancelTransaction: OrderCancelTransaction;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The ID of the most recent Transaction created for the Account
  //
  lastTransactionID: TransactionID;
}

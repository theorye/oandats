import {
  Transaction,
  OrderFillTransaction,
  OrderCancelTransaction,
  TransactionID
} from "../../Transaction";

export interface CreateOrderResponse201 {
  //
  // The Transaction that created the Order specified by the request.
  //
  orderCreateTransaction: Transaction;

  //
  // The Transaction that filled the newly created Order. Only provided when
  // the Order was immediately filled.
  //
  orderFillTransaction: OrderFillTransaction;

  //
  // The Transaction that cancelled the newly created Order. Only provided
  // when the Order was immediately cancelled.
  //
  orderCancelTransaction: OrderCancelTransaction;

  //
  // The Transaction that reissues the Order. Only provided when the Order is
  // configured to be reissued for its remaining units after a partial fill
  // and the reissue was successful.
  //
  orderReissueTransaction: Transaction;

  //
  // The Transaction that rejects the reissue of the Order. Only provided when
  // the Order is configured to be reissued for its remaining units after a
  // partial fill and the reissue was rejected.
  //
  orderReissueRejectTransaction: Transaction;

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

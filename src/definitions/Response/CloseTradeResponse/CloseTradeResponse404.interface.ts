import { MarketOrderRejectTransaction, TransactionID } from "../../Transaction";

export interface CloseTradeResponse404 {
  //
  // The MarketOrderReject Transaction that rejects the creation of the Trade-
  // closing MarketOrder. Only present if the Account exists.
  //
  orderRejectTransaction: MarketOrderRejectTransaction;

  //
  // The ID of the most recent Transaction created for the Account. Only
  // present if the Account exists.
  //
  lastTransactionID: TransactionID;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request. Only present if the Account exists.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The code of the error that has occurred. This field may not be returned
  // for some errors.
  //
  errorCode: string;

  //
  // The human-readable description of the error that has occurred.
  //
  errorMessage: string; // required)
}

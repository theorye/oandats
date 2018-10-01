import { MarketOrderRejectTransaction, TransactionID } from "../../Transaction";

export interface ClosePositionResponse404 {
  //
  // The Transaction created that rejects the creation of a MarketOrder to
  // close the long Position. Only present if the Account exists and a long
  // Position was specified.
  //
  longOrderRejectTransaction: MarketOrderRejectTransaction;

  //
  // The Transaction created that rejects the creation of a MarketOrder to
  // close the short Position. Only present if the Account exists and a short
  // Position was specified.
  //
  shortOrderRejectTransaction: MarketOrderRejectTransaction;

  //
  // The IDs of all Transactions that were created while satisfying the
  // request. Only present if the Account exists.
  //
  relatedTransactionIDs: [TransactionID];

  //
  // The ID of the most recent Transaction created for the Account. Only
  // present if the Account exists.
  //
  lastTransactionID: TransactionID;

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

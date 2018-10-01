import { MarketOrderRejectTransaction } from "../../Transaction";

export interface CloseTradeResponse400 {
  //
  // The MarketOrderReject Transaction that rejects the creation of the Trade-
  // closing MarketOrder.
  //
  orderRejectTransaction: MarketOrderRejectTransaction;

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

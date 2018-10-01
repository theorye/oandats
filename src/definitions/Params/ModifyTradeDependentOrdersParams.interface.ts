import {
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails
} from "../Transaction";

export interface ModifyTradeDependentOrderParams {
  //
  // The specification of the Take Profit to create/modify/cancel. If
  // takeProfit is set to null, the Take Profit Order will be cancelled if it
  // exists. If takeProfit is not provided, the exisiting Take Profit Order
  // will not be modified. If a sub-field of takeProfit is not specified, that
  // field will be set to a default value on create, and be inherited by the
  // replacing order on modify.
  //
  takeProfit: TakeProfitDetails;

  //
  // The specification of the Stop Loss to create/modify/cancel. If stopLoss
  // is set to null, the Stop Loss Order will be cancelled if it exists. If
  // stopLoss is not provided, the exisiting Stop Loss Order will not be
  // modified. If a sub-field of stopLoss is not specified, that field will be
  // set to a default value on create, and be inherited by the replacing order
  // on modify.
  //
  stopLoss: StopLossDetails;

  //
  // The specification of the Trailing Stop Loss to create/modify/cancel. If
  // trailingStopLoss is set to null, the Trailing Stop Loss Order will be
  // cancelled if it exists. If trailingStopLoss is not provided, the
  // exisiting Trailing Stop Loss Order will not be modified. If a sub-field
  // of trailngStopLoss is not specified, that field will be set to a default
  // value on create, and be inherited by the replacing order on modify.
  //
  trailingStopLoss: TrailingStopLossDetails;
}

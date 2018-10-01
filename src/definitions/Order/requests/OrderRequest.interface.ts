import {
  LimitOrderRequest,
  MarketIfTouchedOrderRequest,
  MarketOrderRequest,
  StopLossOrderRequest,
  StopOrderRequest,
  TakeProfitOrderRequest,
  TrailingStopLossOrderRequest
} from ".";

export type OrderRequest =
  | LimitOrderRequest
  | MarketIfTouchedOrderRequest
  | MarketOrderRequest
  | StopLossOrderRequest
  | StopOrderRequest
  | TakeProfitOrderRequest
  | TrailingStopLossOrderRequest;

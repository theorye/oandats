import { OrderType, TimeInForce, OrderPositionFill } from "..";
import { InstrumentName, DecimalNumber } from "../../Primitives";
import { PriceValue } from "../../Pricing";
import {
  ClientExtensions,
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails
} from "../../Transaction";

// A MarketOrderRequest specifies the parameters that may be set when creating a Market Order.
export interface MarketOrderRequest {
  //
  // The type of the Order to Create. Must be set to “MARKET” when creating a
  // Market Order.
  //
  type: OrderType; // default=MARKET),

  //
  // The Market Order’s Instrument.
  //
  instrument: InstrumentName; // required),

  //
  // The quantity requested to be filled by the Market Order. A posititive
  // number of units results in a long Order, and a negative number of units
  // results in a short Order.
  //
  units: DecimalNumber; // required),

  //
  // The time-in-force requested for the Market Order. Restricted to FOK or
  // IOC for a MarketOrder.
  //
  timeInForce: TimeInForce; // required, default=FOK),

  //
  // The worst price that the client is willing to have the Market Order
  // filled at.
  //
  priceBound?: PriceValue;

  //
  // Specification of how Positions in the Account are modified when the Order
  // is filled.
  //
  positionFill?: OrderPositionFill; // required, default=DEFAULT),

  //
  // The client extensions to add to the Order. Do not set, modify, or delete
  // clientExtensions if your account is associated with MT4.
  //
  clientExtensions?: ClientExtensions;

  //
  // TakeProfitDetails specifies the details of a Take Profit Order to be
  // created on behalf of a client. This may happen when an Order is filled
  // that opens a Trade requiring a Take Profit, or when a Trade’s dependent
  // Take Profit Order is modified directly through the Trade.
  //
  takeProfitOnFill?: TakeProfitDetails;

  //
  // StopLossDetails specifies the details of a Stop Loss Order to be created
  // on behalf of a client. This may happen when an Order is filled that opens
  // a Trade requiring a Stop Loss, or when a Trade’s dependent Stop Loss
  // Order is modified directly through the Trade.
  //
  stopLossOnFill?: StopLossDetails;

  //
  // TrailingStopLossDetails specifies the details of a Trailing Stop Loss
  // Order to be created on behalf of a client. This may happen when an Order
  // is filled that opens a Trade requiring a Trailing Stop Loss, or when a
  // Trade’s dependent Trailing Stop Loss Order is modified directly through
  // the Trade.
  //
  trailingStopLossOnFill?: TrailingStopLossDetails;

  //
  // Client Extensions to add to the Trade created when the Order is filled
  // (if such a Trade is created). Do not set, modify, or delete
  // tradeClientExtensions if your account is associated with MT4.
  //
  tradeClientExtensions?: ClientExtensions;
}

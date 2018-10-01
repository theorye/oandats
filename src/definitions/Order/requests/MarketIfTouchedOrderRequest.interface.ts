import {
  OrderType,
  TimeInForce,
  OrderPositionFill,
  OrderTriggerCondition
} from "..";
import { InstrumentName, DecimalNumber, DateTime } from "../../Primitives";
import { PriceValue } from "../../Pricing";
import {
  ClientExtensions,
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails
} from "../../Transaction";

// A MarketIfTouchedOrderRequest specifies the parameters that may be set when creating a Market-if-Touched Order.
export interface MarketIfTouchedOrderRequest {
  //
  // The type of the Order to Create. Must be set to “MARKET_IF_TOUCHED” when
  // creating a Market If Touched Order.
  //
  type: OrderType; // default=MARKET_IF_TOUCHED),

  //
  // The MarketIfTouched Order’s Instrument.
  //
  instrument: InstrumentName; // required),

  //
  // The quantity requested to be filled by the MarketIfTouched Order. A
  // posititive number of units results in a long Order, and a negative number
  // of units results in a short Order.
  //
  units: DecimalNumber; // required),

  //
  // The price threshold specified for the MarketIfTouched Order. The
  // MarketIfTouched Order will only be filled by a market price that crosses
  // this price from the direction of the market price at the time when the
  // Order was created (the initialMarketPrice). Depending on the value of the
  // Order’s price and initialMarketPrice, the MarketIfTouchedOrder will
  // behave like a Limit or a Stop Order.
  //
  price: PriceValue; // required),

  //
  // The worst market price that may be used to fill this MarketIfTouched
  // Order.
  //
  priceBound: PriceValue;

  //
  // The time-in-force requested for the MarketIfTouched Order. Restricted to
  // “GTC”, “GFD” and “GTD” for MarketIfTouched Orders.
  //
  timeInForce: TimeInForce; // required, default=GTC),

  //
  // The date/time when the MarketIfTouched Order will be cancelled if its
  // timeInForce is “GTD”.
  //
  gtdTime: DateTime;

  //
  // Specification of how Positions in the Account are modified when the Order
  // is filled.
  //
  positionFill: OrderPositionFill; // required, default=DEFAULT),

  //
  // Specification of which price component should be used when determining if
  // an Order should be triggered and filled. This allows Orders to be
  // triggered based on the bid, ask, mid, default (ask for buy, bid for sell)
  // or inverse (ask for sell, bid for buy) price depending on the desired
  // behaviour. Orders are always filled using their default price component.
  // This feature is only provided through the REST API. Clients who choose to
  // specify a non-default trigger condition will not see it reflected in any
  // of OANDA’s proprietary or partner trading platforms, their transaction
  // history or their account statements. OANDA platforms always assume that
  // an Order’s trigger condition is set to the default value when indicating
  // the distance from an Order’s trigger price, and will always provide the
  // default trigger condition when creating or modifying an Order. A special
  // restriction applies when creating a guaranteed Stop Loss Order. In this
  // case the TriggerCondition value must either be “DEFAULT”, or the
  // “natural” trigger side “DEFAULT” results in. So for a Stop Loss Order for
  // a long trade valid values are “DEFAULT” and “BID”, and for short trades
  // “DEFAULT” and “ASK” are valid.
  //
  triggerCondition: OrderTriggerCondition; // required, default=DEFAULT),

  //
  // The client extensions to add to the Order. Do not set, modify, or delete
  // clientExtensions if your account is associated with MT4.
  //
  clientExtensions: ClientExtensions;

  //
  // TakeProfitDetails specifies the details of a Take Profit Order to be
  // created on behalf of a client. This may happen when an Order is filled
  // that opens a Trade requiring a Take Profit, or when a Trade’s dependent
  // Take Profit Order is modified directly through the Trade.
  //
  takeProfitOnFill: TakeProfitDetails;

  //
  // StopLossDetails specifies the details of a Stop Loss Order to be created
  // on behalf of a client. This may happen when an Order is filled that opens
  // a Trade requiring a Stop Loss, or when a Trade’s dependent Stop Loss
  // Order is modified directly through the Trade.
  //
  stopLossOnFill: StopLossDetails;

  //
  // TrailingStopLossDetails specifies the details of a Trailing Stop Loss
  // Order to be created on behalf of a client. This may happen when an Order
  // is filled that opens a Trade requiring a Trailing Stop Loss, or when a
  // Trade’s dependent Trailing Stop Loss Order is modified directly through
  // the Trade.
  //
  trailingStopLossOnFill: TrailingStopLossDetails;

  //
  // Client Extensions to add to the Trade created when the Order is filled
  // (if such a Trade is created). Do not set, modify, or delete
  // tradeClientExtensions if your account is associated with MT4.
  //
  tradeClientExtensions: ClientExtensions;
}

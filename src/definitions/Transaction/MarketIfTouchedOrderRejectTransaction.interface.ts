import {
  Transaction,
  TransactionType,
  MarketIfTouchedOrderReason,
  ClientExtensions,
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails,
  TransactionRejectReason
} from ".";
import { InstrumentName, DecimalNumber, DateTime } from "../Primitives";
import { PriceValue } from "../Pricing";
import {
  TimeInForce,
  OrderPositionFill,
  OrderTriggerCondition,
  OrderID
} from "../Order";

// A MarketIfTouchedOrderRejectTransaction represents the rejection of the creation of a MarketIfTouched Order.
export interface MarketIfTouchedOrderRejectTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to
  // “MARKET_IF_TOUCHED_ORDER_REJECT” in a
  // MarketIfTouchedOrderRejectTransaction.
  //
  type: TransactionType; // default=MARKET_IF_TOUCHED_ORDER_REJECT),

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
  // The reason that the Market-if-touched Order was initiated
  //
  reason: MarketIfTouchedOrderReason;

  //
  // Client Extensions to add to the Order (only provided if the Order is
  // being created with client extensions).
  //
  clientExtensions: ClientExtensions;

  //
  // The specification of the Take Profit Order that should be created for a
  // Trade opened when the Order is filled (if such a Trade is created).
  //
  takeProfitOnFill: TakeProfitDetails;

  //
  // The specification of the Stop Loss Order that should be created for a
  // Trade opened when the Order is filled (if such a Trade is created).
  //
  stopLossOnFill: StopLossDetails;

  //
  // The specification of the Trailing Stop Loss Order that should be created
  // for a Trade that is opened when the Order is filled (if such a Trade is
  // created).
  //
  trailingStopLossOnFill: TrailingStopLossDetails;

  //
  // Client Extensions to add to the Trade created when the Order is filled
  // (if such a Trade is created).  Do not set, modify, delete
  // tradeClientExtensions if your account is associated with MT4.
  //
  tradeClientExtensions: ClientExtensions;

  //
  // The ID of the Order that this Order was intended to replace (only
  // provided if this Order was intended to replace an existing Order).
  //
  intendedReplacesOrderID: OrderID;

  //
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

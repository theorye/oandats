import {
  Order,
  OrderType,
  TimeInForce,
  OrderPositionFill,
  OrderTriggerCondition,
  OrderID
} from ".";
import { InstrumentName, DecimalNumber, DateTime } from "../Primitives";
import { PriceValue } from "../Pricing";
import {
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails,
  ClientExtensions,
  TransactionID
} from "../Transaction";
import { TradeID } from "../Trade";

// A StopOrder is an order that is created with a price threshold, and will only be filled
// by a price that is equal to or worse than the threshold.
export interface StopOrder extends Order {
  //
  // The type of the Order. Always set to “STOP” for Stop Orders.
  //
  type: OrderType; // default=STOP),

  //
  // The Stop Order’s Instrument.
  //
  instrument: InstrumentName; // required),

  //
  // The quantity requested to be filled by the Stop Order. A posititive
  // number of units results in a long Order, and a negative number of units
  // results in a short Order.
  //
  units: DecimalNumber; // required),

  //
  // The price threshold specified for the Stop Order. The Stop Order will
  // only be filled by a market price that is equal to or worse than this
  // price.
  //
  price: PriceValue; // required),

  //
  // The worst market price that may be used to fill this Stop Order. If the
  // market gaps and crosses through both the price and the priceBound, the
  // Stop Order will be cancelled instead of being filled.
  //
  priceBound: PriceValue;

  //
  // The time-in-force requested for the Stop Order.
  //
  timeInForce: TimeInForce; // required, default=GTC),

  //
  // The date/time when the Stop Order will be cancelled if its timeInForce is
  // “GTD”.
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

  //
  // ID of the Transaction that filled this Order (only provided when the
  // Order’s state is FILLED)
  //
  fillingTransactionID: TransactionID;

  //
  // Date/time when the Order was filled (only provided when the Order’s state
  // is FILLED)
  //
  filledTime: DateTime;

  //
  // Trade ID of Trade opened when the Order was filled (only provided when
  // the Order’s state is FILLED and a Trade was opened as a result of the
  // fill)
  //
  tradeOpenedID: TradeID;

  //
  // Trade ID of Trade reduced when the Order was filled (only provided when
  // the Order’s state is FILLED and a Trade was reduced as a result of the
  // fill)
  //
  tradeReducedID: TradeID;

  //
  // Trade IDs of Trades closed when the Order was filled (only provided when
  // the Order’s state is FILLED and one or more Trades were closed as a
  // result of the fill)
  //
  tradeClosedIDs: [TradeID];

  //
  // ID of the Transaction that cancelled the Order (only provided when the
  // Order’s state is CANCELLED)
  //
  cancellingTransactionID: TransactionID;

  //
  // Date/time when the Order was cancelled (only provided when the state of
  // the Order is CANCELLED)
  //
  cancelledTime: DateTime;

  //
  // The ID of the Order that was replaced by this Order (only provided if
  // this Order was created as part of a cancel/replace).
  //
  replacesOrderID: OrderID;

  //
  // The ID of the Order that replaced this Order (only provided if this Order
  // was cancelled as part of a cancel/replace).
  //
  replacedByOrderID: OrderID;
}

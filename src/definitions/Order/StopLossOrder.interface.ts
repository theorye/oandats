import {
  Order,
  OrderType,
  TimeInForce,
  OrderTriggerCondition,
  OrderID
} from ".";
import { DecimalNumber, DateTime } from "../Primitives";
import { TradeID } from "../Trade";
import { ClientID, TransactionID } from "../Transaction";
import { PriceValue } from "../Pricing";

// A StopLossOrder is an order that is linked to an open Trade and created with a price threshold.
// The Order will be filled (closing the Trade) by the first price that is equal to or worse than the threshold.
// A StopLossOrder cannot be used to open a new Position.
export interface StopLossOrder extends Order {
  //
  // The type of the Order. Always set to “STOP_LOSS” for Stop Loss Orders.
  //
  type: OrderType; // default=STOP_LOSS),

  //
  // The premium that will be charged if the Stop Loss Order is guaranteed and
  // the Order is filled at the guaranteed price. It is in price units and is
  // charged for each unit of the Trade.
  //
  guaranteedExecutionPremium: DecimalNumber;

  //
  // The ID of the Trade to close when the price threshold is breached.
  //
  tradeID: TradeID; // required),

  //
  // The client ID of the Trade to be closed when the price threshold is
  // breached.
  //
  clientTradeID: ClientID;

  //
  // The price threshold specified for the Stop Loss Order. If the guaranteed
  // flag is false, the associated Trade will be closed by a market price that
  // is equal to or worse than this threshold. If the flag is true the
  // associated Trade will be closed at this price.
  //
  price: PriceValue; // required),

  //
  // Specifies the distance (in price units) from the Account’s current price
  // to use as the Stop Loss Order price. If the Trade is short the
  // Instrument’s bid price is used, and for long Trades the ask is used.
  //
  distance: DecimalNumber;

  //
  // The time-in-force requested for the StopLoss Order. Restricted to “GTC”,
  // “GFD” and “GTD” for StopLoss Orders.
  //
  timeInForce: TimeInForce; //, required, default=GTC),

  //
  // The date/time when the StopLoss Order will be cancelled if its
  // timeInForce is “GTD”.
  //
  gtdTime: DateTime;

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
  // Flag indicating that the Stop Loss Order is guaranteed. The default value
  // depends on the GuaranteedStopLossOrderMode of the account, if it is
  // REQUIRED, the default will be true, for DISABLED or ENABLED the default
  // is false.
  //
  guaranteed: boolean;

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

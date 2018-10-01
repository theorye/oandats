import {
  Order,
  OrderType,
  TimeInForce,
  OrderTriggerCondition,
  OrderID
} from ".";
import { TradeID } from "../Trade";
import { ClientID, TransactionID } from "../Transaction";
import { DecimalNumber, DateTime } from "../Primitives";
import { PriceValue } from "../Pricing";

// A TrailingStopLossOrder is an order that is linked to an open Trade and created with a price distance.
// The price distance is used to calculate a trailing stop value for the order that is in the losing direction
// from the market price at the time of the order’s creation. The trailing stop value will follow the market price
// as it moves in the winning direction, and the order will filled (closing the Trade) by the first price that is
// equal to or worse than the trailing stop value.
// A TrailingStopLossOrder cannot be used to open a new Position.
export interface TrailingStopLossOrder extends Order {
  //
  // The type of the Order. Always set to “TRAILING_STOP_LOSS” for Trailing
  // Stop Loss Orders.
  //
  type: OrderType; // default=TRAILING_STOP_LOSS),

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
  // The price distance (in price units) specified for the TrailingStopLoss
  // Order.
  //
  distance: DecimalNumber; // required),

  //
  // The time-in-force requested for the TrailingStopLoss Order. Restricted to
  // “GTC”, “GFD” and “GTD” for TrailingStopLoss Orders.
  //
  timeInForce: TimeInForce; // required, default=GTC),

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
  // The trigger price for the Trailing Stop Loss Order. The trailing stop
  // value will trail (follow) the market price by the TSL order’s configured
  // “distance” as the market price moves in the winning direction. If the
  // market price moves to a level that is equal to or worse than the trailing
  // stop value, the order will be filled and the Trade will be closed.
  //
  trailingStopValue: PriceValue;

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

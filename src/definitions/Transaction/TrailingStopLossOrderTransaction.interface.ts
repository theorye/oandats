import {
  Transaction,
  TransactionType,
  ClientID,
  TrailingStopLossOrderReason,
  ClientExtensions,
  TransactionID
} from ".";
import { TradeID } from "../Trade";
import { DecimalNumber, DateTime } from "../Primitives";
import { TimeInForce, OrderTriggerCondition, OrderID } from "../Order";

// A TrailingStopLossOrderTransaction represents the creation of a TrailingStopLoss Order in the user’s Account.
export interface TrailingStopLossOrderTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “TRAILING_STOP_LOSS_ORDER” in
  // a TrailingStopLossOrderTransaction.
  //
  type: TransactionType; // default=TRAILING_STOP_LOSS_ORDER),

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
  // The reason that the Trailing Stop Loss Order was initiated
  //
  reason: TrailingStopLossOrderReason;

  //
  // Client Extensions to add to the Order (only provided if the Order is
  // being created with client extensions).
  //
  clientExtensions: ClientExtensions;

  //
  // The ID of the OrderFill Transaction that caused this Order to be created
  // (only provided if this Order was created automatically when another Order
  // was filled).
  //
  orderFillTransactionID: TransactionID;

  //
  // The ID of the Order that this Order replaces (only provided if this Order
  // replaces an existing Order).
  //
  replacesOrderID: OrderID;

  //
  // The ID of the Transaction that cancels the replaced Order (only provided
  // if this Order replaces an existing Order).
  //
  cancellingTransactionID: TransactionID;
}

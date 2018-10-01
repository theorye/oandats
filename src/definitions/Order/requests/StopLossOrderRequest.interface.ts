import { OrderType, TimeInForce, OrderTriggerCondition } from "..";
import { TradeID } from "../../Trade";
import { ClientID, ClientExtensions } from "../../Transaction";
import { PriceValue } from "../../Pricing";
import { DecimalNumber, DateTime } from "../../Primitives";

// A StopLossOrderRequest specifies the parameters that may be set when creating a Stop Loss Order.
// Only one of the price and distance fields may be specified.
export interface StopLossOrderRequest {
  //
  // The type of the Order to Create. Must be set to “STOP_LOSS” when creating
  // a Stop Loss Order.
  //
  type: OrderType; // default=STOP_LOSS),

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
  // Flag indicating that the Stop Loss Order is guaranteed. The default value
  // depends on the GuaranteedStopLossOrderMode of the account, if it is
  // REQUIRED, the default will be true, for DISABLED or ENABLED the default
  // is false.
  //
  guaranteed: boolean;

  //
  // The client extensions to add to the Order. Do not set, modify, or delete
  // clientExtensions if your account is associated with MT4.
  //
  clientExtensions: ClientExtensions;
}

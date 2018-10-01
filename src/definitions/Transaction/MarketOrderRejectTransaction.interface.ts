import {
  Transaction,
  TransactionType,
  MarketOrderTradeClose,
  MarketOrderPositionCloseout,
  MarketOrderMarginCloseout,
  MarketOrderDelayedTradeClose,
  MarketOrderReason,
  ClientExtensions,
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails,
  TransactionRejectReason
} from ".";
import { InstrumentName, DecimalNumber } from "../Primitives";
import { TimeInForce, OrderPositionFill } from "../Order";
import { PriceValue } from "../Pricing";

// A MarketOrderRejectTransaction represents the reject of the creation of a Market Order.
export interface MarketOrderRejectTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “MARKET_ORDER_REJECT” in a
  // MarketOrderRejectTransaction.
  //
  type: TransactionType; // default=MARKET_ORDER_REJECT),

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
  timeInForce: TimeInForce; //, required, default=FOK),

  //
  // The worst price that the client is willing to have the Market Order
  // filled at.
  //
  priceBound: PriceValue;

  //
  // Specification of how Positions in the Account are modified when the Order
  // is filled.
  //
  positionFill: OrderPositionFill; // required, default=DEFAULT),

  //
  // Details of the Trade requested to be closed, only provided when the
  // Market Order is being used to explicitly close a Trade.
  //
  tradeClose: MarketOrderTradeClose;

  //
  // Details of the long Position requested to be closed out, only provided
  // when a Market Order is being used to explicitly closeout a long Position.
  //
  longPositionCloseout: MarketOrderPositionCloseout;

  //
  // Details of the short Position requested to be closed out, only provided
  // when a Market Order is being used to explicitly closeout a short
  // Position.
  //
  shortPositionCloseout: MarketOrderPositionCloseout;

  //
  // Details of the Margin Closeout that this Market Order was created for
  //
  marginCloseout: MarketOrderMarginCloseout;

  //
  // Details of the delayed Trade close that this Market Order was created for
  //
  delayedTradeClose: MarketOrderDelayedTradeClose;

  //
  // The reason that the Market Order was created
  //
  reason: MarketOrderReason;

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
  // The reason that the Reject Transaction was created
  //
  rejectReason: TransactionRejectReason;
}

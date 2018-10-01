import {
  Transaction,
  TransactionType,
  FixedPriceOrderReason,
  ClientExtensions,
  TakeProfitDetails,
  StopLossDetails,
  TrailingStopLossDetails
} from ".";
import { InstrumentName, DecimalNumber } from "../Primitives";
import { PriceValue } from "../Pricing";
import { OrderPositionFill } from "../Order";

// A FixedPriceOrderTransaction represents the creation of a Fixed Price Order in the user's
// account.  A Fixed Price Order is an Order that is filled immediately at a specified price.
export interface FixedPriceOrderTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “FIXED_PRICE_ORDER” in a
  // FixedPriceOrderTransaction.
  //
  type: TransactionType; // default=FIXED_PRICE_ORDER),

  //
  // The Fixed Price Order’s Instrument.
  //
  instrument: InstrumentName; // required),

  //
  // The quantity requested to be filled by the Fixed Price Order. A
  // posititive number of units results in a long Order, and a negative number
  // of units results in a short Order.
  //
  units: DecimalNumber; // required),

  //
  // The price specified for the Fixed Price Order. This price is the exact
  // price that the Fixed Price Order will be filled at.
  //
  price: PriceValue; // required),

  //
  // Specification of how Positions in the Account are modified when the Order
  // is filled.
  //
  positionFill: OrderPositionFill; // required, default=DEFAULT),

  //
  // The state that the trade resulting from the Fixed Price Order should be
  // set to.
  //
  tradeState: string; //, required),

  //
  // The reason that the Fixed Price Order was created
  //
  reason: FixedPriceOrderReason;

  //
  // The client extensions for the Fixed Price Order.
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
}

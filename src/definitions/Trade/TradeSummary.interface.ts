import { TradeID, TradeState } from ".";
import {
  InstrumentName,
  DateTime,
  DecimalNumber,
  AccountUnits
} from "../Primitives";
import { PriceValue } from "../Pricing";
import { TransactionID, ClientExtensions } from "../Transaction";
import { OrderID } from "../Order";

// The summary of a Trade within an Account.  This representation does not
// provide the full details of the Trade's dependent Orders.
export interface TradeSummary {
  //
  // The Trade’s identifier, unique within the Trade’s Account.
  //
  id: TradeID;

  //
  // The Trade’s Instrument.
  //
  instrument: InstrumentName;

  //
  // The execution price of the Trade.
  //
  price: PriceValue;

  //
  // The date/time when the Trade was opened.
  //
  openTime: DateTime;

  //
  // The current state of the Trade.
  //
  state: TradeState;

  //
  // The initial size of the Trade. Negative values indicate a short Trade,
  // and positive values indicate a long Trade.
  //
  initialUnits: DecimalNumber;

  //
  // The margin required at the time the Trade was created. Note, this is the
  // ‘pure’ margin required, it is not the ‘effective’ margin used that
  // factors in the trade risk if a GSLO is attached to the trade.
  //
  initialMarginRequired: AccountUnits;

  //
  // The number of units currently open for the Trade. This value is reduced
  // to 0.0 as the Trade is closed.
  //
  currentUnits: DecimalNumber;

  //
  // The total profit/loss realized on the closed portion of the Trade.
  //
  realizedPL: AccountUnits;

  //
  // The unrealized profit/loss on the open portion of the Trade.
  //
  unrealizedPL: AccountUnits;

  //
  // Margin currently used by the Trade.
  //
  marginUsed: AccountUnits;

  //
  // The average closing price of the Trade. Only present if the Trade has
  // been closed or reduced at least once.
  //
  averageClosePrice: PriceValue;

  //
  // The IDs of the Transactions that have closed portions of this Trade.
  //
  closingTransactionIDs: [TransactionID];

  //
  // The financing paid/collected for this Trade.
  //
  financing: AccountUnits;

  //
  // The date/time when the Trade was fully closed. Only provided for Trades
  // whose state is CLOSED.
  //
  closeTime: DateTime;

  //
  // The client extensions of the Trade.
  //
  clientExtensions: ClientExtensions;

  //
  // ID of the Trade’s Take Profit Order, only provided if such an Order
  // exists.
  //
  takeProfitOrderID: OrderID;

  //
  // ID of the Trade’s Stop Loss Order, only provided if such an Order exists.
  //
  stopLossOrderID: OrderID;

  //
  // ID of the Trade’s Trailing Stop Loss Order, only provided if such an
  // Order exists.
  //
  trailingStopLossOrderID: OrderID;
}

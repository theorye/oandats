import {
  Transaction,
  TransactionType,
  ClientID,
  OrderFillReason,
  TradeOpen,
  TradeReduce
} from ".";
import { OrderID } from "../Order";
import { InstrumentName, DecimalNumber, AccountUnits } from "../Primitives";
import { PriceValue, ClientPrice } from "../Pricing";

// An OrderFillTransaction represents the filling of an Order in the client’s Account.
export interface OrderFillTransaction extends Transaction {
  //
  // The Type of the Transaction. Always set to “ORDER_FILL” for an
  // OrderFillTransaction.
  //
  type: TransactionType; // default=ORDER_FILL),

  //
  // The ID of the Order filled.
  //
  orderID: OrderID;

  //
  // The client Order ID of the Order filled (only provided if the client has
  // assigned one).
  //
  clientOrderID: ClientID;

  //
  // The name of the filled Order’s instrument.
  //
  instrument: InstrumentName;

  //
  // The number of units filled by the Order.
  //
  units: DecimalNumber;

  //
  // This is the conversion factor in effect for the Account at the time of
  // the OrderFill for converting any gains realized in Instrument quote units
  // into units of the Account’s home currency.
  //
  gainQuoteHomeConversionFactor: DecimalNumber;

  //
  // This is the conversion factor in effect for the Account at the time of
  // the OrderFill for converting any losses realized in Instrument quote
  // units into units of the Account’s home currency.
  //
  lossQuoteHomeConversionFactor: DecimalNumber;

  //
  // This field is now deprecated and should no longer be used. The individual
  // tradesClosed, tradeReduced and tradeOpened fields contain the
  // exact/official price each unit was filled at.
  //
  //
  // Deprecated: Will be removed in a future API update.
  //
  price: PriceValue; //, deprecated),

  //
  // The price in effect for the account at the time of the Order fill.
  //
  fullPrice: ClientPrice;

  //
  // The reason that an Order was filled
  //
  reason: OrderFillReason;

  //
  // The profit or loss incurred when the Order was filled.
  //
  pl: AccountUnits;

  //
  // The financing paid or collected when the Order was filled.
  //
  financing: AccountUnits;

  //
  // The commission charged in the Account’s home currency as a result of
  // filling the Order. The commission is always represented as a positive
  // quantity of the Account’s home currency, however it reduces the balance
  // in the Account.
  //
  commission: AccountUnits;

  //
  // The total guaranteed execution fees charged for all Trades opened, closed
  // or reduced with guaranteed Stop Loss Orders.
  //
  guaranteedExecutionFee: AccountUnits;

  //
  // The Account’s balance after the Order was filled.
  //
  accountBalance: AccountUnits;

  //
  // The Trade that was opened when the Order was filled (only provided if
  // filling the Order resulted in a new Trade).
  //
  tradeOpened: TradeOpen;

  //
  // The Trades that were closed when the Order was filled (only provided if
  // filling the Order resulted in a closing open Trades).
  //
  tradesClosed: [TradeReduce];

  //
  // The Trade that was reduced when the Order was filled (only provided if
  // filling the Order resulted in reducing an open Trade).
  //
  tradeReduced: TradeReduce;

  //
  // The half spread cost for the OrderFill, which is the sum of the
  // halfSpreadCost values in the tradeOpened, tradesClosed and tradeReduced
  // fields. This can be a positive or negative value and is represented in
  // the home currency of the Account.
  //
  halfSpreadCost: AccountUnits;
}

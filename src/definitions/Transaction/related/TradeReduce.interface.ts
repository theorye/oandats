import { TradeID } from "../../Trade";
import { DecimalNumber, AccountUnits } from "../../Primitives";
import { PriceValue } from "../../Pricing";

// A TradeReduce object represents a Trade for an instrument that was reduced (either partially or fully) in an Account.
// It is found embedded in Transactions that affect the position of an instrument in the account, specifically the OrderFill Transaction.
export interface TradeReduce {
  //
  // The ID of the Trade that was reduced or closed
  //
  tradeID: TradeID;

  //
  // The number of units that the Trade was reduced by
  //
  units: DecimalNumber;

  //
  // The average price that the units were closed at. This price may be
  // clamped for guaranteed Stop Loss Orders.
  //
  price: PriceValue;

  //
  // The PL realized when reducing the Trade
  //
  realizedPL: AccountUnits;

  //
  // The financing paid/collected when reducing the Trade
  //
  financing: AccountUnits;

  //
  // This is the fee that is charged for closing the Trade if it has a
  // guaranteed Stop Loss Order attached to it.
  //
  guaranteedExecutionFee: AccountUnits;

  //
  // The half spread cost for the trade reduce/close. This can be a positive
  // or negative value and is represented in the home currency of the Account.
  //
  halfSpreadCost: AccountUnits;
}

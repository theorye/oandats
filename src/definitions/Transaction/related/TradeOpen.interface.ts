import { TradeID } from "../../Trade";
import { DecimalNumber, AccountUnits } from "../../Primitives";
import { PriceValue } from "../../Pricing";
import { ClientExtensions } from ".";

// A TradeOpen object represents a Trade for an instrument that was opened in an Account.
// It is found embedded in Transactions that affect the position of an instrument in the Account, specifically the OrderFill Transaction.
export interface TradeOpen {
  //
  // The ID of the Trade that was opened
  //
  tradeID: TradeID;

  //
  // The number of units opened by the Trade
  //
  units: DecimalNumber;

  //
  // The average price that the units were opened at.
  //
  price: PriceValue;

  //
  // This is the fee charged for opening the trade if it has a guaranteed Stop
  // Loss Order attached to it.
  //
  guaranteedExecutionFee: AccountUnits;

  //
  // The client extensions for the newly opened Trade
  //
  clientExtensions: ClientExtensions;

  //
  // The half spread cost for the trade open. This can be a positive or
  // negative value and is represented in the home currency of the Account.
  //
  halfSpreadCost: AccountUnits;

  //
  // The margin required at the time the Trade was created. Note, this is the
  // ‘pure’ margin required, it is not the ‘effective’ margin used that
  // factors in the trade risk if a GSLO is attached to the trade.
  //
  initialMarginRequired: AccountUnits;
}

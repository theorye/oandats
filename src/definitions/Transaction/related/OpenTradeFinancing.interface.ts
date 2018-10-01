import { TradeID } from "../../Trade";
import { AccountUnits } from "../../Primitives";

// OpenTradeFinancing is used to pay/collect daily financing charge for an open Trade within an Account
export interface OpenTradeFinancing {
  //
  // The ID of the Trade that financing is being paid/collected for.
  //
  tradeID: TradeID;

  //
  // The amount of financing paid/collected for the Trade.
  //
  financing: AccountUnits;
}

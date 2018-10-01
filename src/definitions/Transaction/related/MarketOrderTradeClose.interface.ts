import { TradeID } from "../../Trade";

// A MarketOrderTradeClose specifies the extensions to a Market Order that has been created specifically to close a Trade.
export interface MarketOrderTradeClose {
  //
  // The ID of the Trade requested to be closed
  //
  tradeID: TradeID;

  //
  // The client ID of the Trade requested to be closed
  //
  clientTradeID: string;

  //
  // Indication of how much of the Trade to close. Either “ALL”, or a
  // DecimalNumber reflection a partial close of the Trade.
  //
  units: string;
}

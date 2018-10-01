import { MarketOrderMarginCloseoutReason } from ".";

// Details for the Market Order extensions specific to a Market Order placed that is part of a Market Order Margin Closeout in a client’s account
export interface MarketOrderMarginCloseout {
  //
  // The reason the Market Order was created to perform a margin closeout
  //
  reason: MarketOrderMarginCloseoutReason;
}
